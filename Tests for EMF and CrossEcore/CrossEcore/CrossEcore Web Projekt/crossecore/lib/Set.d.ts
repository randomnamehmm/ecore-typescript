import { AbstractCollection } from "./AbstractCollection";
export declare class Set<T> extends AbstractCollection<T> {
    protected isUnique: () => boolean;
    select: (lambda: (element: T) => boolean) => Set<T>;
    asSequence: () => Set<T>;
}
