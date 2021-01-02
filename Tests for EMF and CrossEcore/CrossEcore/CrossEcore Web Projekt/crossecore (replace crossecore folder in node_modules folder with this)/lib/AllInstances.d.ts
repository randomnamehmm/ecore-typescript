import { EObject } from "./EObject";
import { EClass } from "./EClass";
export declare class AllInstances {
    private instances;
    private subclasses;
    static INSTANCE: AllInstances;
    put(i: EObject, classname: string): void;
    allInstances(eclass: EClass): Array<EObject>;
}
