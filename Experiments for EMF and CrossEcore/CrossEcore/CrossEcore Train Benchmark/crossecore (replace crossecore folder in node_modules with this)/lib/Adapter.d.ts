import { Notification } from "./Notification";
export interface Adapter {
    notifyChanged(notification: Notification): void;
}
