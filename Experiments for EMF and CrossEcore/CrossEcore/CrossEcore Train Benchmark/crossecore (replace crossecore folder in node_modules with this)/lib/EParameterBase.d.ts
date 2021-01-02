import { EClass } from "./EClass";
import { NotificationChain } from "./NotificationChain";
import { EParameter } from "./EParameter";
import { EOperation } from "./EOperation";
import { InternalEObject } from "./InternalEObject";
import { ETypedElementImpl } from "./ETypedElementImpl";
export declare class EParameterBase extends ETypedElementImpl implements EParameter {
    readonly eOperation: EOperation;
    static eStaticClass: EClass;
    protected eStaticClass(): EClass;
    eInverseAdd(otherEnd: InternalEObject, featureID: number, msgs: NotificationChain): NotificationChain;
    eInverseRemove(otherEnd: InternalEObject, featureID: number, msgs: NotificationChain): NotificationChain;
    basicSetEOperation(newobj: EOperation, msgs: NotificationChain): NotificationChain;
    eGet_number_boolean_boolean(featureID: number, resolve: boolean, coreType: boolean): any;
    eSet_number_any(featureID: number, newValue: any): void;
}
