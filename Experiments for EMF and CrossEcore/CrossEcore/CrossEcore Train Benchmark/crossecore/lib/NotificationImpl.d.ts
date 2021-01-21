import { Notification } from "./Notification";
import { NotificationChain } from "./NotificationChain";
export declare class NotificationImpl implements NotificationChain, Notification {
    static SET: number;
    static UNSET: number;
    static ADD: number;
    static REMOVE: number;
    static ADD_MANY: number;
    static REMOVE_MANY: number;
    static MOVE: number;
    static NO_INDEX: number;
    static IS_SET_CHANGE_INDEX: number;
    static NO_FEATURE_ID: number;
    static PRIMITIVE_TYPE_OBJECT: number;
    protected next: NotificationChain;
    protected eventType: number;
    protected oldValue: any;
    protected newValue: any;
    protected position: number;
    protected primitiveType: number;
    constructor(eventType: number, oldValue: any, newValue: any, position: number, wasSet?: boolean);
    /**
     * !!! NO CONSTRUCTOR OVERLOADING ALLOWED IN TYPESCRIPT !!!
     */
    add: (notification: Notification) => boolean;
    dispatch: () => void;
    getNotifier(): any;
    getEventType(): number;
    getNewValue(): any;
}
