import { OrderedSet } from "./OrderedSet";
import { EClassifier } from "./EClassifier";
import { EPackage } from "./EPackage";
import { EClass } from "./EClass";
import { NotificationChain } from "./NotificationChain";
import { ENamedElementImpl } from "./ENamedElementImpl";
import { InternalEObject } from "./InternalEObject";
import { ETypeParameter } from "./ETypeParameter";
export declare class EClassifierBase extends ENamedElementImpl implements EClassifier {
    private _instanceClassName;
    instanceClassName: string;
    readonly instanceClass: Function;
    readonly defaultValue: any;
    private _instanceTypeName;
    instanceTypeName: string;
    readonly ePackage: EPackage;
    private _eTypeParameters;
    readonly eTypeParameters: OrderedSet<ETypeParameter>;
    isInstance(object: any): boolean;
    getClassifierID(): number;
    static eStaticClass: EClass;
    protected eStaticClass(): EClass;
    eInverseAdd(otherEnd: InternalEObject, featureID: number, msgs: NotificationChain): NotificationChain;
    eInverseRemove(otherEnd: InternalEObject, featureID: number, msgs: NotificationChain): NotificationChain;
    basicSetEPackage(newobj: EPackage, msgs: NotificationChain): NotificationChain;
    eGet_number_boolean_boolean(featureID: number, resolve: boolean, coreType: boolean): any;
    eSet_number_any(featureID: number, newValue: any): void;
}
