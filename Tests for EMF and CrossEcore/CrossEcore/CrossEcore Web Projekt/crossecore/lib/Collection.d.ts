export interface Collection<T> {
    add(element: T): boolean;
    remove(element: T): boolean;
    equals(c: Collection<T>): boolean;
    notEquals(c: Collection<T>): boolean;
    size(): number;
    excludes(element: T): boolean;
    count(element: T): number;
    includesAll(c: Collection<T>): boolean;
    excludesAll(c: Collection<T>): boolean;
    isEmpty(): boolean;
    notEmpty(): boolean;
    max(): T;
    min(): T;
    sum(): T;
    any(lambda: (element: T) => boolean): T;
    exists(lambda: (element: T) => boolean): boolean;
    forAll(lambda: (element: T) => boolean): boolean;
}
