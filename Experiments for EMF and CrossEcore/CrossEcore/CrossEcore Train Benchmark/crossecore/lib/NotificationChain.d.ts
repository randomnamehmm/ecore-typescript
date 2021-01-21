import { Notification } from "./Notification";
export interface NotificationChain {
    add(notification: Notification): boolean;
    dispatch(): void;
}
