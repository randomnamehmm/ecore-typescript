import { OrderedSet } from "./OrderedSet";
import { EAnnotation } from "./EAnnotation";
import { EClass } from "./EClass";
import { NotificationChain } from "./NotificationChain";
import { EModelElement } from "./EModelElement";
import { InternalEObject } from "./InternalEObject";
import { BasicEObjectImpl } from "./BasicEObjectImpl";
export declare class EModelElementBase extends BasicEObjectImpl implements EModelElement {
    private _eAnnotations;
    readonly eAnnotations: OrderedSet<EAnnotation>;
    getEAnnotation(source: string): EAnnotation;
    static eStaticClass: EClass;
    protected eStaticClass(): EClass;
    eInverseAdd(otherEnd: InternalEObject, featureID: number, msgs: NotificationChain): NotificationChain;
    eInverseRemove(otherEnd: InternalEObject, featureID: number, msgs: NotificationChain): NotificationChain;
    eGet_number_boolean_boolean(featureID: number, resolve: boolean, coreType: boolean): any;
    eSet_number_any(featureID: number, newValue: any): void;
}
