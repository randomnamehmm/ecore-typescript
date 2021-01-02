export interface Notification {
    getNotifier(): any;
    getEventType(): number;
    getNewValue(): any;
}
