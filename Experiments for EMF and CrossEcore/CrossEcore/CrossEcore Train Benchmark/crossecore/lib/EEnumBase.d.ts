import { OrderedSet } from "./OrderedSet";
import { EClass } from "./EClass";
import { NotificationChain } from "./NotificationChain";
import { EDataTypeImpl } from "./EDataTypeImpl";
import { EEnumLiteral } from "./EEnumLiteral";
import { EEnum } from "./EEnum";
import { InternalEObject } from "./InternalEObject";
export declare class EEnumBase extends EDataTypeImpl implements EEnum {
    private _eLiterals;
    readonly eLiterals: OrderedSet<EEnumLiteral>;
    getEEnumLiteral(...args: Array<any>): any;
    getEEnumLiteral_string(name: string): EEnumLiteral;
    getEEnumLiteral_number(value: number): EEnumLiteral;
    getEEnumLiteralByLiteral(literal: string): EEnumLiteral;
    static eStaticClass: EClass;
    protected eStaticClass(): EClass;
    eInverseAdd(otherEnd: InternalEObject, featureID: number, msgs: NotificationChain): NotificationChain;
    eInverseRemove(otherEnd: InternalEObject, featureID: number, msgs: NotificationChain): NotificationChain;
    eGet_number_boolean_boolean(featureID: number, resolve: boolean, coreType: boolean): any;
    eSet_number_any(featureID: number, newValue: any): void;
}
