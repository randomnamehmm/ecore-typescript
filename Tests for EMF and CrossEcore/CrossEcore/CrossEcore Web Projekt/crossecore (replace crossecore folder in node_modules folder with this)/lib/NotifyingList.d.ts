import { Notification } from "./Notification";
import { NotificationChain } from "./NotificationChain";
import { EList } from "./EList";
export interface NotifyingList<T> extends EList<T> {
    isNotificationRequired(): boolean;
    hasInverse(): boolean;
    dispatchNotification(notification: Notification): void;
    basicAdd(item: T, notifications: NotificationChain): NotificationChain;
    basicRemove(item: T, notifications: NotificationChain): NotificationChain;
    inverseAdd(item: T, notifications: NotificationChain): NotificationChain;
    inverseRemove(item: T, notifications: NotificationChain): NotificationChain;
}
