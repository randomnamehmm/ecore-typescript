import { EDataType } from "./EDataType";
import { EPackage } from "./EPackage";
import { EFactory } from "./EFactory";
import { EClass } from "./EClass";
import { NotificationChain } from "./NotificationChain";
import { EObject } from "./EObject";
import { EModelElementImpl } from "./EModelElementImpl";
import { InternalEObject } from "./InternalEObject";
export declare class EFactoryBase extends EModelElementImpl implements EFactory {
    private _ePackage;
    ePackage: EPackage;
    createFromString(eDataType: EDataType, literalValue: string): any;
    create(eClass: EClass): EObject;
    convertToString(eDataType: EDataType, instanceValue: any): string;
    static eStaticClass: EClass;
    protected eStaticClass(): EClass;
    eInverseAdd(otherEnd: InternalEObject, featureID: number, msgs: NotificationChain): NotificationChain;
    eInverseRemove(otherEnd: InternalEObject, featureID: number, msgs: NotificationChain): NotificationChain;
    basicSetEPackage(newobj: EPackage, msgs: NotificationChain): NotificationChain;
    eGet_number_boolean_boolean(featureID: number, resolve: boolean, coreType: boolean): any;
    eSet_number_any(featureID: number, newValue: any): void;
}
