import { EClass } from "./EClass";
import { EStringToStringMapEntry } from "./EStringToStringMapEntry";
import { BasicEObjectImpl } from "./BasicEObjectImpl";
export declare class EStringToStringMapEntryBase extends BasicEObjectImpl implements EStringToStringMapEntry {
    private _key;
    key: string;
    private _value;
    value: string;
    static eStaticClass: EClass;
    protected eStaticClass(): EClass;
    eGet_number_boolean_boolean(featureID: number, resolve: boolean, coreType: boolean): any;
    eSet_number_any(featureID: number, newValue: any): void;
}
