import { EObject } from "./EObject";
import { EPackage } from "./EPackage";
import { EFactory } from "./EFactory";
export declare class JsonResource {
    epackage: EPackage;
    efactory: EFactory;
    private resolveJobs;
    private eobjectRegistry;
    constructor(p: EPackage, f: EFactory);
    private getId;
    private validEAllReferences;
    private validEAllAttributes;
    getById: (id: string) => EObject;
    fromJson: (doc: any) => EObject;
    private addEStructuralFeatures;
    private resolve(eobject, estructuralfeature, value);
    asJson: (eobject: EObject) => any;
}
