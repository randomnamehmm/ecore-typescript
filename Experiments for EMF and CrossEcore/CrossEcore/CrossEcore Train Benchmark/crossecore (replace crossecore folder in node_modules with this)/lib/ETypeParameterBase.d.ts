import { OrderedSet } from "./OrderedSet";
import { EClass } from "./EClass";
import { EGenericType } from "./EGenericType";
import { ENamedElementImpl } from "./ENamedElementImpl";
import { ETypeParameter } from "./ETypeParameter";
export declare class ETypeParameterBase extends ENamedElementImpl implements ETypeParameter {
    private _eBounds;
    readonly eBounds: OrderedSet<EGenericType>;
    static eStaticClass: EClass;
    protected eStaticClass(): EClass;
    eGet_number_boolean_boolean(featureID: number, resolve: boolean, coreType: boolean): any;
    eSet_number_any(featureID: number, newValue: any): void;
}
