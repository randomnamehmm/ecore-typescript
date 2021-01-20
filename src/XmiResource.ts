/* CrossEcore is a cross-platform modeling framework that generates C#, TypeScript,
 * JavaScript, Swift code from Ecore models with embedded OCL (http://www.crossecore.org/).
 * The original Eclipse Modeling Framework is available at https://www.eclipse.org/modeling/emf/.
 *
 * contributor: Simon Schwichtenberg, Peter Digas
 */



import {EPackage} from "./EPackage";
import {EcorePackageImpl} from "./EcorePackageImpl";
import {EcoreFactoryImpl} from "./EcoreFactoryImpl";

import {EClass} from "./EClass";
import {EObject} from "./EObject";
import {EFactory} from "./EFactory";

import {EReference} from "./EReference";

import {ENamedElement} from "./ENamedElement";
import {EReferenceImpl} from "./EReferenceImpl";
import {EClassImpl} from "./EClassImpl";
import {ENamedElementImpl} from "./ENamedElementImpl";
import {EAttributeImpl} from "./EAttributeImpl";
import {EStructuralFeature} from "./EStructuralFeature";
import {AbstractCollection} from "./AbstractCollection";
import {EDataType} from "./EDataType";
import {EDataTypeImpl} from "./EDataTypeImpl";
import { ParserOptions } from "@babel/core";
import { features } from "process";
import { BasicEObjectImpl } from "./BasicEObjectImpl";
import { OrderedSet } from "./OrderedSet";
import { EAttribute } from "./EAttribute";
import { EList } from "./EList";
import { stringify } from "querystring";
import { formatWithOptions } from "util";
import { OnReadOpts } from "net";
import { time } from "console";

var format = require('xml-formatter');


interface EObjectRegistry{
    [index:string]:EObject;
}

interface ResolveJobRegistry{
    [index:string]:Array<ResolveJob>;
}

interface ResolveJob{
    eObject:EObject;
    eStructuralFeature:EStructuralFeature;
    value:string;
}

export class XmiResource{

    private factory:EFactory = EcoreFactoryImpl.eINSTANCE;
    private epackage:EPackage = EcorePackageImpl.eINSTANCE; //TODO make dynamic
    private domParser:DOMParser;


    private root:EObject;

    private resolveJobs:Array<ResolveJob>; //TODO define type
    private eobjectRegistry:EObjectRegistry;

    private error_occured:boolean = false;
    private doc:Document;

    constructor(epackage:EPackage, efactory:EFactory, domParser:DOMParser){
        this.factory = efactory;
        this.epackage = epackage;

        this.domParser = domParser;

        this.resolveJobs = [];
        this.eobjectRegistry = {};
    }

    // created by Peter Digas
    // HOW TO USE: pass all relevant EObjects as an array
    public save = (eobjects: Array<EObject>):string =>{
        if (null == eobjects) {
            console.error("Error: no eobjects passed!");
            return "";
        }

        // remove duplicate EObjects
        eobjects = this.filterDuplicates(eobjects);
        if(!this.validateMulitiplicities(eobjects)) {
            return "";
        }

        this.doc = document.implementation.createDocument("", "", null);

        // if there is only one EObject, no outer xmi:XMI is needed
        if (eobjects.length > 1) {
            let outer = this.doc.createElement("xmi:XMI");
            outer.setAttribute("xmi:version", "2.0");
            outer.setAttribute("xmlns:xmi", "http://www.omg.org/XMI");
            outer.setAttribute("xmlns:" + this.epackage.name, this.epackage.nsURI);
           
            this.doc.appendChild(outer);
        }

        if (!this.collectReferencesToSerialize(eobjects)) {
            return "";
        }

        for (let eobject of eobjects) {
            this.process_eobject(eobject, eobjects.length == 1);
        }

        if (1 == eobjects.length) {
            let eclass = eobjects[0].eClass();
            let name = this.epackage.name + ':' + eclass.name;
            this.doc.getElementsByTagName(name)[0].setAttribute("xmi:version", "2.0");
            this.doc.getElementsByTagName(name)[0].setAttribute("xmlns:xmi", "http://www.omg.org/XMI");
            this.doc.getElementsByTagName(name)[0].setAttribute("xmlns:" + this.epackage.name, this.epackage.nsURI);
        }

        if (this.error_occured) {
            return "";
        }

        let serializer = new XMLSerializer();
        let xmlStr = serializer.serializeToString(this.doc);

        xmlStr = '<?xml version="1.0" encoding="ASCII"?>'.concat(xmlStr);
        xmlStr = xmlStr.trim();

        // for compatibility with EMF
        let re = new RegExp(this.epackage.name, 'g');
        xmlStr = xmlStr.replace(re, this.epackage.nsPrefix);

        return xmlStr;
    }

    private filterDuplicates(eobjects:Array<EObject>) {
        return eobjects.filter((a, b, c) => c.findIndex(
            (d) => {return (d as BasicEObjectImpl)._uuid === (a as BasicEObjectImpl)._uuid}) === b);
    }

    // created by Peter Digas
    // only references to EObjects that are themselves serialized are also serialized
    private collectReferencesToSerialize = (eobjects: Array<EObject>): boolean =>{
        let ret:boolean = true;
        for (let eobject of eobjects) {
            // if the same EObject is contained several times, return false
            let registered_eobject = this.eobjectRegistry[(eobject as BasicEObjectImpl)._uuid];
            if (registered_eobject !== undefined && registered_eobject != null) {
                console.error("ERROR: TRYING TO SERIALIZE SAME EOBJECT MULTIPLE TIMES");
                return false;
            }
            this.eobjectRegistry[(eobject as BasicEObjectImpl)._uuid] = eobject;
            let eclass = eobject.eClass();
            let references = eclass.eAllReferences;
            for (let reference of references) {
                if (reference.containment) {
                    if (reference.many) {
                        let contained_eobjects = eobject.eGet(reference);
                        let array_contained:Array<EObject> = [];
                        for (let cont_eobject of contained_eobjects) {
                            array_contained.push(cont_eobject);
                        }
                        ret = ret && this.collectReferencesToSerialize(array_contained);
                    } else {
                        let contained_eobject = eobject.eGet(reference);
                        let array_contained:Array<EObject> = [];
                        array_contained.push(contained_eobject);
                        ret = ret && this.collectReferencesToSerialize(array_contained);
                    }
                }
            }
        }
        return ret;
    }

    // created by Peter Digas
    private process_eobject = (eobject:EObject, only_one_eobject_to_serialize:boolean = false) =>{
        let eclass = eobject.eClass();
        let name = this.epackage.name + ':' + eclass.name;
        let element = this.doc.createElement(name);
        element.setAttribute("xmi:id", "" + (eobject as BasicEObjectImpl)._uuid);
        let attributes = eclass.eAllAttributes;
        let references = eclass.eAllReferences;

        this.addAttributes(eobject, attributes, element);
        let crossrefs = new Array<EReference>();
        let containments = new Array<EReference>();

        for (let reference of references) {
            if (reference.containment) {
                containments.push(reference);
            } else {
                crossrefs.push(reference);
            }
        }

        this.addReferences(eobject, crossrefs, element);

        if (only_one_eobject_to_serialize) {
            this.doc.appendChild(element);
        } else {
            this.doc.getElementsByTagName("xmi:XMI")[0].appendChild(element);
        }

        for (let ct of containments) {
            this.process_containments(eobject, ct, element, ct.name);
        }
    }

        // created by Peter Digas
        private process_containments = (parent_eobject:EObject, reference:EReference, element:HTMLElement, name:string) =>{
            let child_eobjects = parent_eobject.eGet(reference);
    
            child_eobjects = this.filterDuplicates(child_eobjects);

            for (let eobject of child_eobjects) {
                let eclass = eobject.eClass();
                let attributes = eclass.eAllAttributes;
                let references = eclass.eAllReferences;
                let containment_element = this.doc.createElement(name);
                containment_element.setAttribute("xmi:type", this.epackage.name + ':' + eclass.name);
                containment_element.setAttribute("xmi:id", "" + (eobject as BasicEObjectImpl)._uuid);
               
                this.addAttributes(eobject, attributes, containment_element);
                let crossrefs = new Array<EReference>();
                let containments = new Array<EReference>();
    
                for (let reference of references) {
                    if (reference.containment) {
                        containments.push(reference);
                    } else {
                        crossrefs.push(reference);
                    }
                }
    
                this.addReferences(eobject, crossrefs, containment_element);
    
                element.appendChild(containment_element);
    
                // recursively resolve containments
                for (let ct of containments) {
                    if (ct.containment) {
                        this.process_containments(eobject, ct, containment_element, ct.name);
                    }
                }
                
            }
        }

    // created by Peter Digas
    // adds non-containment references while serializing
    private addReferences = (eobject:EObject, crossrefs:EReference[], element:HTMLElement) => {
        for(let cf of crossrefs) {
            let ecf = eobject.eGet(cf);

            if (cf != null && !cf.containment && !cf.derived && !cf.transient && ecf != cf.defaultValueLiteral) {
                if (cf.many) {
                    let references = ecf;
                    let allref:string = "";
                    for (let r of references) {
                        if (null == r) {
                            this.error_occured = true;
                            console.error("ERROR: EMPTY REFERENCE!");
                            continue;
                        }

                        // if the EObject is not being serialized, don't serialize the reference to it either
                        let registered_eobject = this.eobjectRegistry[(r as BasicEObjectImpl)._uuid];
                        if (undefined === registered_eobject || null == registered_eobject) {
                            this.error_occured = true;
                            console.error("ERROR: REFERENCED OBJECT IS NOT BEING SERIALIZED!");
                            continue;
                        }

                        // don't serialize the same reference multiple times
                        // and no back references to parents in containment relationships
                        let container = (eobject as any)._eContainer;
                        if (allref.includes((r as BasicEObjectImpl)._uuid + "")
                        || (container != null && (container as BasicEObjectImpl)._uuid === (r as BasicEObjectImpl)._uuid)) {
                            continue;
                        }

                        allref += (r as BasicEObjectImpl)._uuid + " ";
                    }
                    allref = allref.trim();
                    if ("" == allref) {
                        continue;
                    } 
                    element.setAttribute(cf.name, allref);
                } else {
                    if (null == ecf) {
                        this.error_occured = true;
                        console.error("ERROR: EMPTY REFERENCE!");
                        continue;
                    }

                    let registered_eobject = this.eobjectRegistry[(ecf as BasicEObjectImpl)._uuid];
                    if (undefined === registered_eobject || null == registered_eobject) {
                        this.error_occured = true;
                        console.error("ERROR: MISSING OBJECT BEING REFERENCED!");
                        continue;
                    }

                    let container = (eobject as any)._eContainer;
                    if (container != null && (container as BasicEObjectImpl)._uuid === (ecf as BasicEObjectImpl)._uuid) {
                        continue;
                    }

                    element.setAttribute(cf.name, "" + (ecf as BasicEObjectImpl)._uuid);
                }
            }
        }
    }

    // created by Peter Digas
    private addAttributes = (eobject:EObject, attributes:EAttribute[], element:HTMLElement) => {
        for (let attribute of attributes) {
            let eattr = eobject.eGet(attribute);
            // don't serialize unnecessary standard values
            if (attribute != null && !attribute.derived && !attribute.transient 
                && eattr != null && eattr != attribute.defaultValueLiteral) {
                if (attribute.many) {
                    for (let single_attribute of eattr) {
                        let attr_elem = this.doc.createElement(attribute.name);
                        if ("EChar" == attribute.eType.name) {
                            attr_elem.innerHTML = ("" + single_attribute).charCodeAt(0) + "";
                        } else {
                            attr_elem.innerHTML = "" + single_attribute;
                        }
                        element.appendChild(attr_elem);
                    }
                } else {
                    if ("EChar" == attribute.eType.name) {
                        element.setAttribute(attribute.name, ("" + eattr).charCodeAt(0) + "");
                    } else {
                        element.setAttribute(attribute.name, "" + eattr);
                    }
                }
            }
        }
    }

    // modified for BA
    // HOW TO USE: pass a XMI (must use UUID for references) and get an array of EObjects
    public load = (xml:string):Array<EObject> =>{
        // start: created by Peter Digas
        if ("" == xml) {
            console.error("ERROR: empty instance document")
            return null;
        }

        // remove annoying part when parsing the xmi
        xml = xml.replace('<?xml version="1.0" encoding="ASCII"?>', '');
        let parser = this.domParser;
        let xmlDoc = parser.parseFromString(xml,"text/xml");

        if (xmlDoc.getElementsByTagName("parsererror").length > 0) {        
            console.error("Error while parsing Ecore instance document!");
            return null;
        }

        var eobjects = new Array<EObject>();

        if (0 == xmlDoc.getElementsByTagName("xmi:XMI").length) {
            this.rootnode(xmlDoc.childNodes[0] as Element);
            eobjects.push(this.root);
        } else {
            for (let i = 0; xmlDoc.childNodes[0].childNodes[i] != null; i++) {
                if ('#text' == xmlDoc.childNodes[0].childNodes[i].nodeName) {
                    continue;
                } else {
                    this.rootnode(xmlDoc.childNodes[0].childNodes[i] as Element);
                    eobjects.push(this.root);
                }
            }
        }

        if(!this.lateResolve()) {
            return null;
        }
    
        if(!this.validateMulitiplicities(eobjects)) {
            return null;
        }
    
        if (this.error_occured) {
            return null;
        }
    
        return this.filterDuplicates(eobjects);
        // end: created by Peter Digas
    }


    // modified by Peter Digas
    public rootnode = (node:Element) => {


        let classifierId = node.nodeName.split(':')[1];
        let eclassifier = this.epackage.getEClassifier(classifierId);

        if(eclassifier instanceof EClassImpl){

            let eclass = eclassifier as EClass;

            this.root = this.factory.create(eclass);

            this.addEStructuralFeatures(this.root, node);
        }
    }

    // modified by Peter Digas
    protected resolveEObject = (specification:string) => {
        if(specification===null){
            return null;
        }
        else if(specification.lastIndexOf("#//")===0){

            let name = specification.replace("#//", "");
            let segments = name.split("/");

            let queue = new Array<string>();


            for(let i=0;i<segments.length;i++){
                let segment = segments[i];

                queue.push(segment);
            }

            return this.resolveRecurr(queue, this.root);
        }
        else if(specification.indexOf("http://www.eclipse.org/emf/2002/Ecore#")!==-1){
          //ecore:EDataType http://www.eclipse.org/emf/2002/Ecore#//EString

          let index = specification.indexOf("http://www.eclipse.org/emf/2002/Ecore#//");
          let name = specification.substring(index+40, specification.length);
          let segments = name.split("/");

          let queue = new Array<string>();


          for(let i=0;i<segments.length;i++){
            let segment = segments[i];

            queue.push(segment);
          }

          return this.resolveRecurr(queue, EcorePackageImpl.eINSTANCE);

        } 
        // start: created by Peter Digas
        else {
            // return registered EObject
            let eobj_from_registry = this.eobjectRegistry[specification];

            if (eobj_from_registry == null) {
                // if reference is not resolve during lateResolve, return error
                console.error("ERROR: REFERENCE " + specification +  " CANNOT BE RESOLVED!");
                return null;
            }

            return this.eobjectRegistry[specification];
        }
        // end: created by Peter Digas
    }

    private resolveRecurr = (path:Array<string>, current:EObject )=>{

        if(path.length===0){
            return current;

        }

        let segment = path.shift();

        //FIXME: eContents needs to return Array
        let econtents = current.eContents() as Array<EObject>;

        for(let i=0; i<econtents.length;i++){

            let content = econtents[i] as EObject;

            if(content instanceof ENamedElementImpl){

                if((content as ENamedElement).name===segment){
                    return this.resolveRecurr(path, content)
                }
            }
        }




    }

    // modified by Peter Digas
    public addEStructuralFeatures = (eobject:EObject, node:Element)=>{

        // start: created by Peter Digas
        for (let i = 0; i < node.attributes.length; i++) {
            let attribute = node.attributes[i];
            let name = attribute.name;
            let value = attribute.value;
            this.addEStructuralFeaturesHelper(eobject, name, value);
        }
        // end: created by Peter Digas

        for (let i = 0; i < node.childNodes.length; i++) {
            let child = node.childNodes[i];

            if(child.nodeType === child.ELEMENT_NODE){

                let element = child as Element;

                // start: created by Peter Digas
                if (0 == element.attributes.length && element.innerHTML != "") {
                    this.addEStructuralFeaturesHelper(eobject, element.tagName, element.innerHTML, true);
                    continue;
                }

                let containment_name = element.localName;

                let containment = eobject.eClass().getEStructuralFeature(containment_name);
                if (undefined === containment || null == containment) {
                    this.error_occured = true;
                    console.error("ERROR: UNKNOWN CONTAINMENT NAME!");
                }
                // end: created by Peter Digas

                if(containment instanceof EReferenceImpl){
                    
                    let containment_er = containment as EReferenceImpl;
                    

                    if(containment_er.containment){

                        let classifierId2 = containment.eType.name;

                        for(let i=0; i< element.attributes.length;i++){
                            // DO NOT USE xsi:type BUT xmi:type IN EMF!!!
                            if(element.attributes[i].name==='xmi:type'){
                                classifierId2 = element.attributes[i].value.split(':')[1];
                                break;
                            }
                        }
                        let eclassifier2 = this.epackage.getEClassifier(classifierId2);


                        if (eclassifier2 instanceof EClassImpl)
                        {

                            if (containment_er.eType.name === "EStringToStringMapEntry")
                            {

                                //TODO
                                console.log("EStringToStringMapEntry");
                            }
                            else
                            {
                                var eclass2 = eclassifier2 as EClass;
                                var eobject2 = this.factory.create(eclass2);
                                
                                if (containment_er.many)
                                {
                                    this.addEStructuralFeatures(eobject2, element);//TODO is Element cast safe here?
                                    let items = eobject.eGet(containment_er) as AbstractCollection<EObject>;
                                    const copy = items.slice();
                                    copy.push(eobject2);
                                    eobject.eSet(containment_er, copy);

                                }
                                else
                                {
                                    this.addEStructuralFeatures(eobject2, element);//TODO is Element cast safe here?
                                    (eobject2)
                                    eobject.eSet(containment_er, eobject2);
                                }

                            }

                        }

                    }
                }
            }

        }
    }

    // modified by Peter Digas
    private addEStructuralFeaturesHelper(eobject:EObject, attr_name:string, attr_value, attribute_has_multiple_values=false) {

        // start: created by Peter Digas
        if (attr_name === 'xmi:id') {
            // register UUID for EObject to resolve it later on
            // if multiple EObjects have the same UUID, return an error
            if (this.eobjectRegistry[attr_value] !== undefined && this.eobjectRegistry[attr_value] != null) {
                (eobject as BasicEObjectImpl)._uuid = "";
                console.error("ERROR: THE SAME UUID IS USED FOR DIFFERENT EOBJECTS!");
                return;
            }
            (eobject as BasicEObjectImpl)._uuid = attr_value;
            this.eobjectRegistry[attr_value] = eobject;
            return;
        } else if (attr_name.includes("xmlns") || attr_name === "xmi:version" || attr_name === "xmi:type") {
            return;
        }
        // end: created by Peter Digas

            let estructuralfeature = eobject.eClass().getEStructuralFeature(attr_name);

            if (estructuralfeature instanceof EAttributeImpl && !estructuralfeature.transient
                && !estructuralfeature.derived){
                let etype = estructuralfeature.eType;
                let value = attr_value;
                
                if(etype.ePackage.nsURI==="http://www.eclipse.org/emf/2002/Ecore"){

                    if (etype.name == "EBigDecimal")
                    {
                        throw new Error('not implemented');
                    }
                    else if (etype.name == "EBigInteger")
                    {
                        throw new Error('not implemented');
                    }
                    // start: modified by Peter Digas
                    else if (etype.name == "EBoolean")
                    {
                        if (attribute_has_multiple_values && (estructuralfeature as EAttributeImpl).many) {
                            eobject.eGet(estructuralfeature).add("true" == value ? true : false);
                        } else {
                            eobject.eSet(estructuralfeature, "true" == value ? true : false);
                        }
                    }
                    else if (etype.name == "EBooleanObject")
                    {
                        throw new Error('not implemented');
                    }
                    else if (etype.name == "EByteArray")
                    {
                        throw new Error('not implemented');
                    }
                    else if (etype.name == "EByteObject")
                    {
                        throw new Error('not implemented');
                    }
                    else if (etype.name == "EChar")
                    {
                        if (attribute_has_multiple_values && (estructuralfeature as EAttributeImpl).many) {
                            eobject.eGet(estructuralfeature).add(String.fromCharCode(value));
                        } else {
                            eobject.eSet(estructuralfeature, String.fromCharCode(value));
                        }
                    }
                    else if (etype.name == "ECharacterObject")
                    {
                        throw new Error('not implemented');
                    }
                    else if (etype.name == "EDate")
                    {
                        if (attribute_has_multiple_values && (estructuralfeature as EAttributeImpl).many) {
                            eobject.eGet(estructuralfeature).add(Date.parse(value));
                        } else {
                            eobject.eSet(estructuralfeature, Date.parse(value));
                        }
                    }
                    else if (etype.name == "EDateEDiagnosticChain")
                    {
                        throw new Error('not implemented');
                    }
                    else if (etype.name == "EDiagnosticChain")
                    {
                        throw new Error('not implemented');
                    }
                    else if (etype.name == "EDouble")
                    {
                        if (attribute_has_multiple_values && (estructuralfeature as EAttributeImpl).many) {
                            eobject.eGet(estructuralfeature).add(+value);
                        } else {
                            eobject.eSet(estructuralfeature, +value);
                        }
                    }
                    else if (etype.name == "EDoubleObject")
                    {
                        throw new Error('not implemented');
                    }
                    //EEList
                    //EEnumerator
                    //EFeatureMap
                    //EFeatureMapEntry
                    else if (etype.name == "EFloat")
                    {
                        if (attribute_has_multiple_values && (estructuralfeature as EAttributeImpl).many) {
                            eobject.eGet(estructuralfeature).add(+value);
                        } else {
                            eobject.eSet(estructuralfeature, +value);
                        }
                    }
                    else if (etype.name == "EFloatObject")
                    {
                        throw new Error('not implemented');
                    }
                    else if (etype.name == "EInt")
                    {
                        if (attribute_has_multiple_values && (estructuralfeature as EAttributeImpl).many) {
                            eobject.eGet(estructuralfeature).add(+value);
                        } else {
                            eobject.eSet(estructuralfeature, +value);
                        }
                    }
                    else if (etype.name == "EIntegerObject")
                    {
                        throw new Error('not implemented');
                    }
                    //EJavaClass
                    //EJavaObject
                    else if (etype.name == "ELong")
                    {
                        if (attribute_has_multiple_values && (estructuralfeature as EAttributeImpl).many) {
                            eobject.eGet(estructuralfeature).add(+value);
                        } else {
                            eobject.eSet(estructuralfeature, +value);
                        }
                    }
                    else if (etype.name == "ELongObject")
                    {
                        throw new Error('not implemented');
                    }
                    //EMap
                    //EResource
                    //EResourceSet
                    else if (etype.name == "EShort")
                    {
                        if (attribute_has_multiple_values && (estructuralfeature as EAttributeImpl).many) {
                            eobject.eGet(estructuralfeature).add(+value);
                        } else {
                            eobject.eSet(estructuralfeature, +value);
                        }
                    }
                    else if (etype.name == "EShortObject")
                    {
                        throw new Error('not implemented');
                    }
                    else if (etype.name == "EString")
                    {
                        if (attribute_has_multiple_values && (estructuralfeature as EAttributeImpl).many) {
                            eobject.eGet(estructuralfeature).add(value);
                        } else {
                            eobject.eSet(estructuralfeature, value);
                        }
                    }
                    // end: modified by Peter Digas


                    //ETreeIterator
                    //EInvocationTargetException



                }
                // e.g. for enums
                else if(etype instanceof EDataTypeImpl){

                    //TODO use namespace-factory map
                    let literalvalue = this.factory.createFromString(etype as EDataType, value);
                    
                    eobject.eSet(estructuralfeature, literalvalue);
                }
            }
            else if(estructuralfeature instanceof EReferenceImpl){
                if (!estructuralfeature.containment) {
                    this.resolve(eobject, estructuralfeature, attr_value);
                }

            } 
            // start: created by Peter Digas
            else {
                this.error_occured = true;
                console.error("ERROR: NON-EXISTENT ATTRIBUTE OR REFERENCE NAME!");
            }
            // end: created by Peter Digas
    }

    // modified by Peter Digas
    private resolve(eobject:EObject, estructuralfeature:EStructuralFeature, value:string){
        // start: created by Peter Digas
        // register all references to resolve them at the end (which resolves issues of order)
        let all_ids = value.split(" ");

        for (let i = 0; i < all_ids.length; i++) {
            let id = all_ids[i];
            let resolveJob: ResolveJob = {
                "eObject": eobject,
                "eStructuralFeature": estructuralfeature,
                "value": id
            };
    
            this.resolveJobs.push(resolveJob);
        }
        // end: created by Peter Digas
    }

    // modified by Peter Digas
    public lateResolve = () =>
    {
        for (let job of this.resolveJobs)
        {
            var eobject = job.eObject;
            var feature = job.eStructuralFeature;
            var path = job.value;

            // start: created by Peter Digas
            // resolve References and check correctness
            if (!feature.many)
            {
                let eobj_to_add = this.resolveEObject(path);
                if (null == eobj_to_add) {
                    console.error("ERROR: REFERENCE " + path +  " CANNOT BE RESOLVED!");
                    return false;
                }
                // check reference data type
                if (feature.eType.instanceClass.name === eobj_to_add.constructor.name
                    || eobj_to_add instanceof feature.eType.instanceClass) {
                    eobject.eSet(feature, eobj_to_add);
                } else {
                    console.error("ERROR: WRONG REFERENCE DATA TYPE!");
                    return false;
                }

            }
            else if (feature.many)
            {
                let eobj_to_add = this.resolveEObject(path);
                if (null == eobj_to_add) {
                    console.error("ERROR: REFERENCE " + path +  " CANNOT BE RESOLVED!");
                    return false;
                }

                if (feature.eType.instanceClass.name === eobj_to_add.constructor.name
                    || eobj_to_add instanceof feature.eType.instanceClass) {
                    eobject.eGet(feature).add(eobj_to_add);
                } else {
                    console.error("ERROR: WRONG REFERENCE DATA TYPE!");
                    return false;
                }
            }
        }
        return true;
        // end: created by Peter Digas
    }

    // created by Peter Digas
    private validateMulitiplicities = (eobjects:EObject[]):boolean => {
        for (let eobject of eobjects) {
            let eclass = eobject.eClass();
            for (let attribute of eclass.eAllAttributes) {
                if (attribute.many) {
                    let eattr = eobject.eGet(attribute);
                    if ((null == eattr && attribute.lowerBound > 0)
                        || (eattr != null
                            && (eattr.length < attribute.lowerBound 
                                || (attribute.upperBound >= 0 && eattr.length > attribute.upperBound)))) {
                        console.error("Multiplicity constraint violated!");
                        return false;
                    }
                } else {
                    let eattr = eobject.eGet(attribute);
                    if ((null == eattr && attribute.lowerBound > 0) 
                    || (eattr != null && eattr.length < attribute.lowerBound)) {
                        console.error("Multiplicity constraint violated!");
                        return false;
                    }
                }
            }
            // check references and containments for multiplicities
            for (let reference of eclass.eAllReferences) {
                if(reference.many) {
                    let eref = eobject.eGet(reference);
                    if ((null == eref && reference.lowerBound > 0) 
                        || (eref != null
                            && (eref.length < reference.lowerBound
                                || (reference.upperBound >= 0 && eref.length > reference.upperBound)))) {
                        console.error("Multiplicity constraint violated!");
                        return false;
                    }
                } else {
                    let eref = eobject.eGet(reference);
                    if ((eref != null && eref.length < reference.lowerBound) 
                    || (null == eref && (reference.lowerBound > 0))) {
                        console.error("Multiplicity constraint violated!");
                        return false;
                    }
                }
                if (reference.containment) {
                    let containment = reference;
                    let ret = this.validateMulitiplicities(eobject.eGet(containment));
                    if(!ret) {
                        return false;
                    }
                }
            }
        }
        return true;
    }

}