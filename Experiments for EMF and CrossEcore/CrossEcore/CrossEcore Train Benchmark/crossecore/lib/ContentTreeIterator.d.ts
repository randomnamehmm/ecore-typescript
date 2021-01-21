import { TreeIterator } from "./TreeIterator";
import { EObject } from "./EObject";
export declare class ContentTreeIterator implements TreeIterator<EObject>, IterableIterator<EObject> {
    private index;
    queue: Array<EObject>;
    constructor(root_: EObject);
    private addRecursively(eObject);
    next(): IteratorResult<EObject>;
    hasNext(): boolean;
    [Symbol.iterator](): IterableIterator<EObject>;
    prune(): void;
}
