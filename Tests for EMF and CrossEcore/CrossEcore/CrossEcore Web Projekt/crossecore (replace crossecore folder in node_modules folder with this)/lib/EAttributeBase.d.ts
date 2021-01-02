import { EClass } from "./EClass";
import { EAttribute } from "./EAttribute";
import { EDataType } from "./EDataType";
import { EStructuralFeatureImpl } from "./EStructuralFeatureImpl";
export declare class EAttributeBase extends EStructuralFeatureImpl implements EAttribute {
    private _iD;
    iD: boolean;
    readonly eAttributeType: EDataType;
    static eStaticClass: EClass;
    protected eStaticClass(): EClass;
    eGet_number_boolean_boolean(featureID: number, resolve: boolean, coreType: boolean): any;
    eSet_number_any(featureID: number, newValue: any): void;
}
