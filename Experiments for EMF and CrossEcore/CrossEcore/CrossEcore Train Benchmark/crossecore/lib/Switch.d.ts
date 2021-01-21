import { EPackage } from "./EPackage";
import { EObject } from "./EObject";
export declare abstract class Switch<T> {
    defaultCase(eObject: EObject): T;
    private isEObject(e);
    doSwitch(...args: Array<any>): T;
    private doSwitch1(eClass, eObject);
    private doSwitch2(eObject);
    protected doSwitch3(classifierID: number, eObject: EObject): T;
    abstract isSwitchFor(ePackage: EPackage): boolean;
}
