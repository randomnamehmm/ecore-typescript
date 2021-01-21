export interface EMap<K, V> {
    get(key: any): V;
    put(key: K, value: V): V;
    containsKey(key: any): boolean;
}
