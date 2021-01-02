import { EObject } from "./EObject";
import { DiagnosticChain } from "./DiagnosticChain";
import { EValidator } from "./EValidator";
import { EClass } from "./EClass";
import { EDataType } from "./EDataType";
export declare class Diagnostician implements EValidator {
    protected eValidatorRegistry: any;
    static INSTANCE: Diagnostician;
    validateEObject(eObject: EObject, diagnostics: DiagnosticChain, context: any): boolean;
    validateEClass(eClass: EClass, eObject: EObject, diagnostics: DiagnosticChain, context: any): boolean;
    validateEDataType(eDataType: EDataType, value: any, diagnostics: DiagnosticChain, context: any): boolean;
    protected doValidate1(eValidator: EValidator, eDataType: EDataType, value: any, diagnostics: DiagnosticChain, context: any): boolean;
    protected doValidate2(eValidator: EValidator, eClass: EClass, eObject: EObject, diagnostics: DiagnosticChain, context: any): boolean;
    protected doValidateContents(eObject: EObject, diagnostics: DiagnosticChain, context: any): boolean;
}
