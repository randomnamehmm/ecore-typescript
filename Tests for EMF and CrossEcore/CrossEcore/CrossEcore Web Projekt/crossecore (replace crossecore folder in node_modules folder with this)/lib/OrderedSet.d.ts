import { AbstractCollection } from "./AbstractCollection";
export declare class OrderedSet<T> extends AbstractCollection<T> {
    protected isUnique: () => boolean;
    at: (index: number) => T;
    select: (lambda: (element: T) => boolean) => OrderedSet<T>;
    collect: <T2>(lambda: (element: T) => T2) => OrderedSet<T2>;
    collect2: <T2>(lambda: (element: T) => T2) => OrderedSet<T2>;
}
