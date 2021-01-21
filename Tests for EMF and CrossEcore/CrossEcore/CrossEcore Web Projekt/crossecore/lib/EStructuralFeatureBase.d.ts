import { EClass } from "./EClass";
import { NotificationChain } from "./NotificationChain";
import { EStructuralFeature } from "./EStructuralFeature";
import { InternalEObject } from "./InternalEObject";
import { ETypedElementImpl } from "./ETypedElementImpl";
export declare class EStructuralFeatureBase extends ETypedElementImpl implements EStructuralFeature {
    private _changeable;
    changeable: boolean;
    private _volatile;
    volatile: boolean;
    private _transient;
    transient: boolean;
    private _defaultValueLiteral;
    defaultValueLiteral: string;
    readonly defaultValue: any;
    private _unsettable;
    unsettable: boolean;
    private _derived;
    derived: boolean;
    readonly eContainingClass: EClass;
    getContainerClass(): Function;
    getFeatureID(): number;
    static eStaticClass: EClass;
    protected eStaticClass(): EClass;
    eInverseAdd(otherEnd: InternalEObject, featureID: number, msgs: NotificationChain): NotificationChain;
    eInverseRemove(otherEnd: InternalEObject, featureID: number, msgs: NotificationChain): NotificationChain;
    basicSetEContainingClass(newobj: EClass, msgs: NotificationChain): NotificationChain;
    eGet_number_boolean_boolean(featureID: number, resolve: boolean, coreType: boolean): any;
    eSet_number_any(featureID: number, newValue: any): void;
}
