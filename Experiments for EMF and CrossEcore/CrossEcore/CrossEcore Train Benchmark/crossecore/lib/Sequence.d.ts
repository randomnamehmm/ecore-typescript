import { AbstractCollection } from "./AbstractCollection";
export declare class Sequence<T> extends AbstractCollection<T> {
    protected isUnique: () => boolean;
}
