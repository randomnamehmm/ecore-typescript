import { AbstractCollection } from "./AbstractCollection";
export declare class Bag<T> extends AbstractCollection<T> {
    protected isUnique: () => boolean;
}
