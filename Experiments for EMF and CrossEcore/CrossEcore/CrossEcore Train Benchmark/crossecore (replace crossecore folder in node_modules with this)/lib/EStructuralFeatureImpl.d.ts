import { EStructuralFeatureBase } from "./EStructuralFeatureBase";
export declare class EStructuralFeatureImpl extends EStructuralFeatureBase {
    protected featureID: number;
    setFeatureID(id: number): void;
    getFeatureID(): number;
    private containerClass_;
    setContainerClass: (f: Function) => void;
    getContainerClass(): Function;
}
