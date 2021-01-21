import { OrderedSet } from "./OrderedSet";
import { EClass } from "./EClass";
import { NotificationChain } from "./NotificationChain";
import { EGenericType } from "./EGenericType";
import { EClassifier } from "./EClassifier";
import { BasicEObjectImpl } from "./BasicEObjectImpl";
import { ETypeParameter } from "./ETypeParameter";
export declare class EGenericTypeBase extends BasicEObjectImpl implements EGenericType {
    private _eUpperBound;
    eUpperBound: EGenericType;
    private _eTypeArguments;
    readonly eTypeArguments: OrderedSet<EGenericType>;
    readonly eRawType: EClassifier;
    private _eLowerBound;
    eLowerBound: EGenericType;
    private _eTypeParameter;
    eTypeParameter: ETypeParameter;
    private _eClassifier;
    eClassifier: EClassifier;
    isInstance(object: any): boolean;
    static eStaticClass: EClass;
    protected eStaticClass(): EClass;
    basicSetETypeParameter(newobj: ETypeParameter, msgs: NotificationChain): NotificationChain;
    basicSetELowerBound(newobj: EGenericType, msgs: NotificationChain): NotificationChain;
    basicSetEClassifier(newobj: EClassifier, msgs: NotificationChain): NotificationChain;
    basicSetEUpperBound(newobj: EGenericType, msgs: NotificationChain): NotificationChain;
    eGet_number_boolean_boolean(featureID: number, resolve: boolean, coreType: boolean): any;
    eSet_number_any(featureID: number, newValue: any): void;
}
