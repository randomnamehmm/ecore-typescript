import { OrderedSet } from "./OrderedSet";
import { EClass } from "./EClass";
import { EAttribute } from "./EAttribute";
import { NotificationChain } from "./NotificationChain";
import { EStructuralFeatureImpl } from "./EStructuralFeatureImpl";
import { EReference } from "./EReference";
export declare class EReferenceBase extends EStructuralFeatureImpl implements EReference {
    private _containment;
    containment: boolean;
    readonly container: boolean;
    private _resolveProxies;
    resolveProxies: boolean;
    private _eOpposite;
    eOpposite: EReference;
    readonly eReferenceType: EClass;
    private _eKeys;
    readonly eKeys: OrderedSet<EAttribute>;
    static eStaticClass: EClass;
    protected eStaticClass(): EClass;
    basicSetEOpposite(newobj: EReference, msgs: NotificationChain): NotificationChain;
    eGet_number_boolean_boolean(featureID: number, resolve: boolean, coreType: boolean): any;
    eSet_number_any(featureID: number, newValue: any): void;
}
