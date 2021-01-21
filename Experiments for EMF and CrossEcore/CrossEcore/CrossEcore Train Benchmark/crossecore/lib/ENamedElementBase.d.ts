import { EClass } from "./EClass";
import { ENamedElement } from "./ENamedElement";
import { EModelElementImpl } from "./EModelElementImpl";
export declare class ENamedElementBase extends EModelElementImpl implements ENamedElement {
    private _name;
    name: string;
    static eStaticClass: EClass;
    protected eStaticClass(): EClass;
    eGet_number_boolean_boolean(featureID: number, resolve: boolean, coreType: boolean): any;
    eSet_number_any(featureID: number, newValue: any): void;
}
