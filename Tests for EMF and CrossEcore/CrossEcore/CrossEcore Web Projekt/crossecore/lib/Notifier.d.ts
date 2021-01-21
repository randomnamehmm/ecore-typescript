import { Notification } from "./Notification";
import { Adapter } from "./Adapter";
export interface Notifier {
    eAdapters(): Array<Adapter>;
    eNotify(notification: Notification): void;
}
