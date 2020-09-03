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

    private resolveJobs:Array<ResolveJob> = []; //TODO define type
    private eobjectRegistry:EObjectRegistry;

    constructor(epackage:EPackage, efactory:EFactory){
        this.factory = efactory;
        this.epackage = epackage;

        this.domParser = new DOMParser();

        this.resolveJobs = [];
        this.eobjectRegistry = {};
    }

    // für BA erstellt
    // HOW TO USE: übergebe alle relevanten EObjects als Array in die Funktion save -> wird zu einem XMI String serialisiert
    public save = (eobjects: Array<EObject>):string =>{

        let result = '<?xml version="1.0" encoding="ASCII"?>\n<xmi:XMI xmi:version="2.0" xmlns:xmi="http://www.omg.org/XMI" xmlns:';
        result += this.epackage.name + '=' + '\"' + this.epackage.nsURI + '\">'
        
        for (let eobject of eobjects) {
            result += this.process_eobject(eobject);
        }

        result += '\n</xmi:XMI>';

        return result;
    }

    // für BA erstellt
    private process_eobject = (eobject:EObject):string =>{
        let eclass = eobject.eClass();
        let result = '\n  <' + this.epackage.name + ':' + eclass.name + ' xmi:id=\"' + (eobject as BasicEObjectImpl)._uuid + '\"';

        // nur gültige Attribute und Referenzen serialisieren
        let attributes = this.validEAllAttributes(eobject, eclass.eAllAttributes);
        let references = this.validEAllReferences(eobject, eclass.eAllReferences);

        for (let attribute of attributes) {
            result += ' ' + attribute.name + '=\"' + eobject.eGet(attribute) + '\"';
        }

        let ref_empty = references.isEmpty();
        if (!ref_empty) {
            let crossrefs = new Array<EReference>();
            let containments = new Array<EReference>();

            for (let reference of references) {
                if (reference.containment) {
                    containments.push(reference);
                } else {
                    crossrefs.push(reference);
                }
            }

            for(let cf of crossrefs) {
                if (cf != null) {
                    result += ' ' + cf.name + '=\"' + (eobject.eGet(cf) as BasicEObjectImpl)._uuid + '\"';
                }
            }

            if (containments.length == 0) {
                ref_empty = true;
            } else {
                result += '>';
            }
            for (let ct of containments) {
                result += this.resolveContainments(eobject, ct, 2, {});
            }
        }
        result += ref_empty?'/>':('\n  </' + this.epackage.name + ':' + eclass.name + '>');

        return result;
    }

    // für BA erstellt
    private resolveContainments = (eobj:EObject, reference:EReference, rec_depth, parents:EObjectRegistry):string =>{
        let result = '';
        parents[(eobj as BasicEObjectImpl)._uuid] = eobj;

        let eobjects = eobj.eGet(reference) as Array<EObject>;
        for (let eobject of eobjects) {

            // prüfen, ob eine zyklische Containment Beziehung vorliegt
            if (parents[(eobject as BasicEObjectImpl)._uuid] != null) {
                console.error("ERROR: CYCLIC CONTAINMENT DEPENDENCY DETECTED!");
                return;
            }
            let eclass = eobject.eClass();
            let attributes = eclass.eAllAttributes;
            let references = eclass.eAllReferences;
    
            let tabs = '  '.repeat(rec_depth);
            result += '\n' + tabs + '<' + reference.name + ' xmi:id=\"' + (eobject as BasicEObjectImpl)._uuid + '\"';
    
            for (let attribute of attributes) {
                result += ' ' + attribute.name + '=\"' + eobject.eGet(attribute) + '\"';
            }

            let ref_empty = eobject.eClass().eAllReferences.isEmpty();
            if (!ref_empty) {
                // übernehme erst die Referenzen, die keine Containments sind, in den aktuellen Tag
                for (let ref of references) {
                    if (!ref.containment) {
                        result += ' ' + ref.name + '=\"' + (eobject.eGet(ref) as BasicEObjectImpl)._uuid + '\"';
                    }
                }
                result += '>';

                // für jedes Containment, rufe rekursiv die Funktion auf
                for (let ref of references) {
                    if (ref.containment) {
                        result += this.resolveContainments(eobject, ref, rec_depth + 1, parents);
                    }
                }
            }
            result += ref_empty?'/>':('\n' + tabs + '</' + eclass.name + '>');
        }

        return result;
    }




    // modifiziert für BA
    // HOW TO USE: übergebe eine XMI und erhalte alle darin enthaltenen EObjects als Array zurück
    public load = (xml:string):Array<EObject> =>{
        xml = xml.replace('<?xml version="1.0" encoding="ASCII"?>', ''); // beim parsen störenden Teil der XMI entfernen
        let parser = this.domParser;
        let xmlDoc = parser.parseFromString(xml,"text/xml");
        var eobjects = new Array<EObject>();
        
        for (let i = 0; xmlDoc.childNodes[0].childNodes[i] != null; i++) {
            if (xmlDoc.childNodes[0].childNodes[i].nodeName == '#text') {
                continue;
            } else {
                let eobj:EObject;
                this.rootnode(xmlDoc.childNodes[0].childNodes[i] as Element);
                eobjects.push(this.root);
            }
        }

        // lateResolve aus der for Schleife entfernt, damit es nur einmal am Schluss ausgeführt wird und die verbleibenden Referenzen hinzufügt
        // damit haben auch Verschiebungen der Reihenfolge in der XMI keine Auswirkungen mehr
        this.lateResolve();

        // this.recAllEObjectsCheck(eobjects);
        eobjects = this.checkAllBidirectionalReferences(eobjects);

        return eobjects;
    }


    public rootnode = (node:Element) => {


        let classifierId = node.nodeName.split(':')[1];

        let eclassifier = this.epackage.getEClassifier(classifierId);

        if(eclassifier instanceof EClassImpl){

            let eclass = eclassifier as EClass;

            this.root = this.factory.create(eclass);

            this.addEStructuralFeatures(this.root, node)

            // this.lateResolve();
        }


    }


    protected resolveEList = (specification:string)=>{



        let result = new Array<EObject>();
        let supertypes = specification.split(' ');

        if (supertypes != null)
        {

            for(let i=0;i<supertypes.length;i++){
                //for (string s in supertypes)

                let s = supertypes[i];

                let supertype = this.resolveEObject(s) as EClass;
                //TODO assure it is eclass
                result.push(supertype);
            }
        }
        return result;


    }

    // modifiziert für BA
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

        } else {
            // gebe registriertes Objekt für die UUID zurück
            let eobj_from_registry = this.eobjectRegistry[specification];

            if (eobj_from_registry == null) {
                // wird bei lateResolve eine Referenz nicht aufgelöst, wird eine Fehlermeldung ausgegeben
                console.error("ERROR: REFERENCE " + specification +  " CANNOT BE RESOLVED!");
                return;
            }

            return this.eobjectRegistry[specification];
        }
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

    // modifiziert für BA
    public addEStructuralFeatures = (eobject:EObject, node:Element)=>{


        for (let i = 0; i < node.attributes.length; i++) {



            let attribute = node.attributes[i];



            let name = attribute.name;
            let value = attribute.value;

            if (name == 'xmi:id') {
                (eobject as BasicEObjectImpl)._uuid = value;
                // UUID-Object Paar registrieren, damit später die Referenzen aufgelöst werden können.
                // falls es mehrere Objekte mit derselben UUID gibt, gebe eine Fehlermeldung aus.
                if (this.eobjectRegistry[value] != null) {
                    console.error("ERROR: THE SAME UUID IS USED FOR DIFFERENT OBJECTS!");
                    return;
                }
                this.eobjectRegistry[value] = eobject;
                continue;
            }


            let estructuralfeature = eobject.eClass().getEStructuralFeature(name);

            if (estructuralfeature instanceof EAttributeImpl){

                let etype = estructuralfeature.eType;
                let value = attribute.value;


                if(etype.ePackage.nsURI==="http://www.eclipse.org/emf/2002/Ecore"){

                    if (etype.name == "EBigDecimal")
                    {
                        throw new Error('not implemented');
                    }
                    else if (etype.name == "EBigInteger")
                    {
                        throw new Error('not implemented');
                    }
                    else if (etype.name == "EBoolean")
                    {
                        eobject.eSet(estructuralfeature, value == "true" ? true : false);
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
                        eobject.eSet(estructuralfeature, value);
                    }
                    else if (etype.name == "ECharacterObject")
                    {
                        throw new Error('not implemented');
                    }
                    else if (etype.name == "EDate")
                    {
                        eobject.eSet(estructuralfeature, Date.parse(value));
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
                        eobject.eSet(estructuralfeature, +value);
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
                        eobject.eSet(estructuralfeature, +value);
                    }
                    else if (etype.name == "EFloatObject")
                    {
                        throw new Error('not implemented');
                    }
                    else if (etype.name == "EInt")
                    {
                        eobject.eSet(estructuralfeature, +value);
                    }
                    else if (etype.name == "EIntegerObject")
                    {
                        throw new Error('not implemented');
                    }
                    //EJavaClass
                    //EJavaObject
                    else if (etype.name == "ELong")
                    {
                        eobject.eSet(estructuralfeature, +value);
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
                        eobject.eSet(estructuralfeature, +value);
                    }
                    else if (etype.name == "EShortObject")
                    {
                        throw new Error('not implemented');
                    }
                    else if (etype.name == "EString")
                    {
                        eobject.eSet(estructuralfeature, value);
                    }
                    //ETreeIterator
                    //EInvocationTargetException



                }
                else if(etype instanceof EDataTypeImpl){

                    //TODO use namespace-factory map
                    let literalvalue = this.factory.createFromString(etype as EDataType, value);

                    eobject.eSet(estructuralfeature, literalvalue);
                }
            }
            else if(estructuralfeature instanceof EReferenceImpl){

                if(estructuralfeature.many){
                    this.resolve(eobject, estructuralfeature,attribute.value);
                }
                else{
                    this.resolve(eobject, estructuralfeature, attribute.value);
                }

            }



        }

        for (let i = 0; i < node.childNodes.length; i++) {
            let child = node.childNodes[i];


            if(child.nodeType === child.ELEMENT_NODE){

                let element = child as Element;

                let containment_name = element.localName;

                let containment = eobject.eClass().getEStructuralFeature(containment_name);

                if(containment instanceof EReferenceImpl){
                    
                    let containment_er = containment as EReferenceImpl;
                    

                    if(containment_er.containment){

                        let classifierId2 = containment.eType.name;

                        for(let i=0; i< element.attributes.length;i++){
                            if(element.attributes[i].name==='xsi:type'){
                                classifierId2 = element.attributes[i].value.split(':')[1];
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
                                    const copy = items.slice()
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
                        else{
                            
                        }

                    }
                }
            }

        }
    }

    private resolve(eobject:EObject, estructuralfeature:EStructuralFeature, value:string){

        if(this.eobjectRegistry[value]!==undefined){

            if(estructuralfeature.many){
                
                //TODO eGet is call by reference
                (eobject.eGet(estructuralfeature) as AbstractCollection<EObject>).add(this.eobjectRegistry[value]);

            }
            else{
                eobject.eSet(estructuralfeature, this.eobjectRegistry[value]);
            }


        }
        else{

            let resolveJob: ResolveJob = {
                "eObject": eobject,
                "eStructuralFeature": estructuralfeature,
                "value": value
            };


            this.resolveJobs.push(resolveJob);
        }
    }


    public lateResolve = () =>
    {
        for (let job of this.resolveJobs)
        {


            var eobject = job.eObject;
            var feature = job.eStructuralFeature;
            var path = job.value;

            if (!feature.many)
            {
                eobject.eSet(feature, this.resolveEObject(path));
            }
            else if (feature.many)
            {
                eobject.eSet(feature, this.resolveEList(path));
            }


        }
    }

    // für BA erstellt
    private checkAllBidirectionalReferences = (eobjects:Array<EObject>):Array<EObject> => {
        for (let eobject of eobjects) {
            let eclass = eobject.eClass();
            let references = eclass.eAllReferences;
            for (let ref of references) {
                // bidirektionale Referenzen auf Korrektheit prüfen
                if (ref.eOpposite != null) {
                    if ((eobject.eGet(ref.eOpposite) as BasicEObjectImpl)._uuid != (eobject.eGet(eobject) as BasicEObjectImpl)._uuid) {
                        console.error("ERROR: BIDIRECTIONAL RELATIONSHIP INCORRECT!");
                        return;
                    }
                }
            }
        }
        return eobjects;
    }

    // von JsonResource übernommen
    private validEAllReferences = (eobject:EObject, features:OrderedSet<EReference>) : OrderedSet<EReference> => {

        var result = new OrderedSet<EReference>();

        for(let feature of features){


            if(!feature.transient && !feature.derived){

                if(eobject.eGet(feature) != null){

                    if(feature.many && !(eobject.eGet(feature) as OrderedSet<any>).isEmpty()){
                        result.add(feature);
                    }
                    else if(!feature.many){
                        result.add(feature);
                    }
                }
            }
        }


        return result;
    }

    // von JsonResource übernommen
    private validEAllAttributes = (eobject:EObject, features:OrderedSet<EAttribute>) : OrderedSet<EAttribute> => {

        var result = new OrderedSet<EAttribute>();

        for(let feature of features){


            if(!feature.transient && !feature.derived){

                if(eobject.eGet(feature) != null){

                    if(feature.many && !(eobject.eGet(feature) as OrderedSet<any>).isEmpty()){
                        result.add(feature);
                    }
                    else if(!feature.many){
                        result.add(feature);
                    }
                }
            }
        }


        return result;
    }


}
