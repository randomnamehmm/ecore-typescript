import { InternalEObject } from "./InternalEObject";
import { EClass } from "./EClass";
import { EMap } from "./EMap";
export declare class EcoreEMap<K, V> implements EMap<K, V> {
    protected entryEClass: EClass;
    protected entryClass: Function;
    private hashmap;
    constructor(entryEClass: EClass, entryClass: Function, owner: InternalEObject, featureID: number);
    get(key: any): V;
    put(key: K, value: V): V;
    set(value: any): void;
    containsKey(key: any): boolean;
    putAll(map: any): void;
    isEmpty(): boolean;
}
