import { EClass } from "./EClass";
import { NotificationChain } from "./NotificationChain";
import { Enumerator } from "./Enumerator";
import { ENamedElementImpl } from "./ENamedElementImpl";
import { EEnumLiteral } from "./EEnumLiteral";
import { EEnum } from "./EEnum";
import { InternalEObject } from "./InternalEObject";
export declare class EEnumLiteralBase extends ENamedElementImpl implements EEnumLiteral {
    private _value;
    value: number;
    private _instance;
    instance: Enumerator;
    private _literal;
    literal: string;
    readonly eEnum: EEnum;
    static eStaticClass: EClass;
    protected eStaticClass(): EClass;
    eInverseAdd(otherEnd: InternalEObject, featureID: number, msgs: NotificationChain): NotificationChain;
    eInverseRemove(otherEnd: InternalEObject, featureID: number, msgs: NotificationChain): NotificationChain;
    basicSetEEnum(newobj: EEnum, msgs: NotificationChain): NotificationChain;
    eGet_number_boolean_boolean(featureID: number, resolve: boolean, coreType: boolean): any;
    eSet_number_any(featureID: number, newValue: any): void;
}
