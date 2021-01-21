import { EClassifierBase } from "./EClassifierBase";
export declare class EClassifierImpl extends EClassifierBase {
    protected metaObjectID: number;
    setClassifierID: (id: number) => void;
    protected generatedInstanceClassName: string;
    setGeneratedInstanceClass: (isGenerated: boolean) => void;
    basicSetInstanceTypeName: (newInstanceTypeName: string) => void;
    private _instanceClass;
    instanceClass: Function;
    getClassifierID(): number;
    private computeClassifierID();
}
