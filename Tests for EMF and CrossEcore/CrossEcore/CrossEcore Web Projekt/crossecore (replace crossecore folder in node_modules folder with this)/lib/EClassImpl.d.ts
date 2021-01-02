import { EClassBase } from "./EClassBase";
import { OrderedSet } from "./OrderedSet";
import { EAttribute } from "./EAttribute";
import { EReference } from "./EReference";
import { EClass } from "./EClass";
import { EStructuralFeature } from "./EStructuralFeature";
export declare class EClassImpl extends EClassBase {
    readonly eAttributes: OrderedSet<EAttribute>;
    readonly eReferences: OrderedSet<EReference>;
    readonly eAllSuperTypes: OrderedSet<EClass>;
    readonly eAllAttributes: OrderedSet<EAttribute>;
    readonly eAllReferences: OrderedSet<EReference>;
    readonly eAllStructuralFeatures: OrderedSet<EStructuralFeature>;
    getEStructuralFeature_string(featureName: string): EStructuralFeature;
}
