import { ETypedElement } from "./ETypedElement";
import { EOperation } from "./EOperation";
export interface EParameter extends ETypedElement {
    eOperation: EOperation;
}
