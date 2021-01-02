import { Notifier } from "./Notifier";
import { Adapter } from "./Adapter";
import { Notification } from "./Notification";
export declare class BasicNotifierImpl implements Notifier {
    private _eAdapters;
    eAdapters: () => Adapter[];
    protected eBasicAdapters: () => Adapter[];
    eNotify: (notification: Notification) => void;
    eNotificationRequired: () => boolean;
}
