import { Notifier } from "./Notifier";
import { TreeIterator } from "./TreeIterator";
export interface ResourceSet extends Notifier {
    getAllContents(): TreeIterator<Notifier>;
    getLoadOptions(): Map<any, any>;
}
