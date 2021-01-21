import { NotificationImpl } from "./NotificationImpl";
import { InternalEObject } from "./InternalEObject";
import { EStructuralFeature } from "./EStructuralFeature";
export declare class ENotificationImpl extends NotificationImpl {
    protected notifier: InternalEObject;
    protected featureID: number;
    protected feature: EStructuralFeature;
    constructor(notifier: InternalEObject, eventType: number, featureID: number, oldValue: any, newValue: any, position?: number);
    getFeature: () => any;
    getNotifier(): any;
}
