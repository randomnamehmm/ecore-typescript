import { NotifyingList } from "./NotifyingList";
import { EStructuralFeature } from "./EStructuralFeature";
export interface EcoreEList<E> extends NotifyingList<E> {
    addUnique(o: E): void;
    hasNavigableInverse(): boolean;
    hasInstanceClass(): boolean;
    getEStructuralFeature(): EStructuralFeature;
    getInverseEReference(): EStructuralFeature;
    getInverseFeatureClass(): Function;
}
