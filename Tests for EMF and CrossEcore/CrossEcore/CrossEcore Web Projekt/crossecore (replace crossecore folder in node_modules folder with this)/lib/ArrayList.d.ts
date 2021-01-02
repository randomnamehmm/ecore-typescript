export declare class ArrayList<T> extends Array<T> {
    containsX: (element: T) => boolean;
    sizeX: () => number;
    addX: (element: T) => boolean;
    removeX: (element: T) => boolean;
    isEmptyX: () => boolean;
    clear: () => void;
}
