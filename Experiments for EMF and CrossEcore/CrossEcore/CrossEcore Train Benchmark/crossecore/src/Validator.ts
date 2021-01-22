import {EClass} from "./EClass";
import {EObject} from "./EObject";

export abstract class Validator {
        // created by Peter Digas
        public static validateMulitiplicities = (eobjects:EObject[]):boolean => {
            for (let eobject of eobjects) {
                let eclass = eobject.eClass();
                for (let attribute of eclass.eAllAttributes) {
                    if (attribute.many) {
                        let eattr = eobject.eGet(attribute);
                        if ((null == eattr && attribute.lowerBound > 0)
                            || (eattr != null
                                && (eattr.length < attribute.lowerBound 
                                    || (attribute.upperBound >= 0 && eattr.length > attribute.upperBound)))) {
                            console.error("Multiplicity constraint violated!");
                            return false;
                        }
                    } else {
                        let eattr = eobject.eGet(attribute);
                        if ((null == eattr && attribute.lowerBound > 0) 
                        || (eattr != null && eattr.length < attribute.lowerBound)) {
                            console.error("Multiplicity constraint violated!");
                            return false;
                        }
                    }
                }
                // check references and containments for multiplicities
                for (let reference of eclass.eAllReferences) {
                    if(reference.many) {
                        let eref = eobject.eGet(reference);
                        if ((null == eref && reference.lowerBound > 0) 
                            || (eref != null
                                && (eref.length < reference.lowerBound
                                    || (reference.upperBound >= 0 && eref.length > reference.upperBound)))) {
                            console.error("Multiplicity constraint violated!");
                            return false;
                        }
                    } else {
                        let eref = eobject.eGet(reference);
                        if ((eref != null && eref.length < reference.lowerBound) 
                        || (null == eref && (reference.lowerBound > 0))) {
                            console.error("Multiplicity constraint violated!");
                            return false;
                        }
                    }
                    if (reference.containment) {
                        let containment = reference;
                        let ret = Validator.validateMulitiplicities(eobject.eGet(containment));
                        if(!ret) {
                            return false;
                        }
                    }
                }
            }
            return true;
        }
}