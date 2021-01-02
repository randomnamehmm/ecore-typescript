import { EClass } from "./EClass";
import { EDataType } from "./EDataType";
import { EClassifierImpl } from "./EClassifierImpl";
export declare class EDataTypeBase extends EClassifierImpl implements EDataType {
    private _serializable;
    serializable: boolean;
    static eStaticClass: EClass;
    protected eStaticClass(): EClass;
    eGet_number_boolean_boolean(featureID: number, resolve: boolean, coreType: boolean): any;
    eSet_number_any(featureID: number, newValue: any): void;
}
