import { OrderedSet } from "./OrderedSet";
import { EModelElement } from "./EModelElement";
import { EAnnotation } from "./EAnnotation";
import { EClass } from "./EClass";
import { NotificationChain } from "./NotificationChain";
import { EMap } from "./EMap";
import { EObject } from "./EObject";
import { EModelElementImpl } from "./EModelElementImpl";
import { InternalEObject } from "./InternalEObject";
export declare class EAnnotationBase extends EModelElementImpl implements EAnnotation {
    private _source;
    source: string;
    private _details;
    readonly details: EMap<string, string>;
    eModelElement: EModelElement;
    private _contents;
    readonly contents: OrderedSet<EObject>;
    private _references;
    readonly references: OrderedSet<EObject>;
    static eStaticClass: EClass;
    protected eStaticClass(): EClass;
    eInverseAdd(otherEnd: InternalEObject, featureID: number, msgs: NotificationChain): NotificationChain;
    eInverseRemove(otherEnd: InternalEObject, featureID: number, msgs: NotificationChain): NotificationChain;
    basicSetEModelElement(newobj: EModelElement, msgs: NotificationChain): NotificationChain;
    eGet_number_boolean_boolean(featureID: number, resolve: boolean, coreType: boolean): any;
    eSet_number_any(featureID: number, newValue: any): void;
}
