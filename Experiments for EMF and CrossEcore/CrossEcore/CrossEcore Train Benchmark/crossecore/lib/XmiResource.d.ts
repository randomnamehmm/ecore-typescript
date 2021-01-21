import { EPackage } from "./EPackage";
import { EObject } from "./EObject";
import { EFactory } from "./EFactory";
export declare class XmiResource {
    private factory;
    private epackage;
    private domParser;
    private root;
    private resolveJobs;
    private eobjectRegistry;
    constructor(epackage: EPackage, efactory: EFactory, domParser: DOMParser);
    load: (xml: string) => EObject;
    rootnode: (node: Element) => void;
    protected resolveEList: (specification: string) => EObject[];
    protected resolveEObject: (specification: string) => any;
    private resolveRecurr;
    addEStructuralFeatures: (eobject: EObject, node: Element) => void;
    private resolve(eobject, estructuralfeature, value);
    lateResolve: () => void;
}
