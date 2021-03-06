import { OrderedSet } from "./OrderedSet";
import { EClassifier } from "./EClassifier";
import { EClass } from "./EClass";
import { NotificationChain } from "./NotificationChain";
import { EParameter } from "./EParameter";
import { EGenericType } from "./EGenericType";
import { EOperation } from "./EOperation";
import { InternalEObject } from "./InternalEObject";
import { ETypedElementImpl } from "./ETypedElementImpl";
import { ETypeParameter } from "./ETypeParameter";
export declare class EOperationBase extends ETypedElementImpl implements EOperation {
    readonly eContainingClass: EClass;
    private _eTypeParameters;
    readonly eTypeParameters: OrderedSet<ETypeParameter>;
    private _eParameters;
    readonly eParameters: OrderedSet<EParameter>;
    private _eExceptions;
    readonly eExceptions: OrderedSet<EClassifier>;
    private _eGenericExceptions;
    readonly eGenericExceptions: OrderedSet<EGenericType>;
    isOverrideOf(someOperation: EOperation): boolean;
    getOperationID(): number;
    static eStaticClass: EClass;
    protected eStaticClass(): EClass;
    eInverseAdd(otherEnd: InternalEObject, featureID: number, msgs: NotificationChain): NotificationChain;
    eInverseRemove(otherEnd: InternalEObject, featureID: number, msgs: NotificationChain): NotificationChain;
    basicSetEContainingClass(newobj: EClass, msgs: NotificationChain): NotificationChain;
    eGet_number_boolean_boolean(featureID: number, resolve: boolean, coreType: boolean): any;
    eSet_number_any(featureID: number, newValue: any): void;
}
