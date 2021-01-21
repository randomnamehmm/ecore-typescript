import { ETypedElement } from "./ETypedElement";
import { EClass } from "./EClass";
import { NotificationChain } from "./NotificationChain";
import { EClassifier } from "./EClassifier";
import { EGenericType } from "./EGenericType";
import { ENamedElementImpl } from "./ENamedElementImpl";
export declare class ETypedElementBase extends ENamedElementImpl implements ETypedElement {
    private _ordered;
    ordered: boolean;
    private _unique;
    unique: boolean;
    private _lowerBound;
    lowerBound: number;
    private _upperBound;
    upperBound: number;
    readonly many: boolean;
    readonly required: boolean;
    private _eType;
    eType: EClassifier;
    private _eGenericType;
    eGenericType: EGenericType;
    static eStaticClass: EClass;
    protected eStaticClass(): EClass;
    basicSetEGenericType(newobj: EGenericType, msgs: NotificationChain): NotificationChain;
    basicSetEType(newobj: EClassifier, msgs: NotificationChain): NotificationChain;
    eGet_number_boolean_boolean(featureID: number, resolve: boolean, coreType: boolean): any;
    eSet_number_any(featureID: number, newValue: any): void;
}
