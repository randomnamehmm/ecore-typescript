import { EDataType } from "./EDataType";
import { ENamedElement } from "./ENamedElement";
import { EEnum } from "./EEnum";
import { EModelElement } from "./EModelElement";
import { EPackage } from "./EPackage";
import { EAnnotation } from "./EAnnotation";
import { EFactory } from "./EFactory";
import { EAttribute } from "./EAttribute";
import { EClass } from "./EClass";
import { EObject } from "./EObject";
import { EcoreFactory } from "./EcoreFactory";
import { EParameter } from "./EParameter";
import { EReference } from "./EReference";
import { EFactoryImpl } from "./EFactoryImpl";
import { EStructuralFeature } from "./EStructuralFeature";
import { EClassifier } from "./EClassifier";
import { ETypedElement } from "./ETypedElement";
import { EStringToStringMapEntry } from "./EStringToStringMapEntry";
import { EGenericType } from "./EGenericType";
import { EEnumLiteral } from "./EEnumLiteral";
import { EOperation } from "./EOperation";
import { ETypeParameter } from "./ETypeParameter";
export declare class EcoreFactoryImpl extends EFactoryImpl implements EcoreFactory {
    static eINSTANCE: EcoreFactory;
    static init(): EcoreFactory;
    createEAttribute: () => EAttribute;
    createEAnnotation: () => EAnnotation;
    createEClass: () => EClass;
    createEClassifier: () => EClassifier;
    createEDataType: () => EDataType;
    createEEnum: () => EEnum;
    createEEnumLiteral: () => EEnumLiteral;
    createEFactory: () => EFactory;
    createEModelElement: () => EModelElement;
    createENamedElement: () => ENamedElement;
    createEObject: () => EObject;
    createEOperation: () => EOperation;
    createEPackage: () => EPackage;
    createEParameter: () => EParameter;
    createEReference: () => EReference;
    createEStructuralFeature: () => EStructuralFeature;
    createETypedElement: () => ETypedElement;
    createEStringToStringMapEntry: () => EStringToStringMapEntry;
    createEGenericType: () => EGenericType;
    createETypeParameter: () => ETypeParameter;
    create(eClass: EClass): EObject;
    createFromString(eDataType: EDataType, initialValue: string): any;
    convertToString(eDataType: EDataType, instanceValue: any): string;
    createEBigDecimalFromString(eDataType: EDataType, initialValue: string): number;
    convertEBigDecimalToString(eDataType: EDataType, instanceValue: any): string;
    createEBigIntegerFromString(eDataType: EDataType, initialValue: string): number;
    convertEBigIntegerToString(eDataType: EDataType, instanceValue: any): string;
    createEBooleanFromString(eDataType: EDataType, initialValue: string): boolean;
    convertEBooleanToString(eDataType: EDataType, instanceValue: any): string;
    createEBooleanObjectFromString(eDataType: EDataType, initialValue: string): boolean;
    convertEBooleanObjectToString(eDataType: EDataType, instanceValue: any): string;
    createEByteFromString(eDataType: EDataType, initialValue: string): number;
    convertEByteToString(eDataType: EDataType, instanceValue: any): string;
    createEByteArrayFromString(eDataType: EDataType, initialValue: string): Array<number>;
    convertEByteArrayToString(eDataType: EDataType, instanceValue: any): string;
    createEByteObjectFromString(eDataType: EDataType, initialValue: string): number;
    convertEByteObjectToString(eDataType: EDataType, instanceValue: any): string;
    createECharFromString(eDataType: EDataType, initialValue: string): string;
    convertECharToString(eDataType: EDataType, instanceValue: any): string;
    createECharacterObjectFromString(eDataType: EDataType, initialValue: string): string;
    convertECharacterObjectToString(eDataType: EDataType, instanceValue: any): string;
    createEDateFromString(eDataType: EDataType, initialValue: string): Date;
    convertEDateToString(eDataType: EDataType, instanceValue: any): string;
    createEDoubleFromString(eDataType: EDataType, initialValue: string): number;
    convertEDoubleToString(eDataType: EDataType, instanceValue: any): string;
    createEDoubleObjectFromString(eDataType: EDataType, initialValue: string): number;
    convertEDoubleObjectToString(eDataType: EDataType, instanceValue: any): string;
    createEFloatFromString(eDataType: EDataType, initialValue: string): number;
    convertEFloatToString(eDataType: EDataType, instanceValue: any): string;
    createEFloatObjectFromString(eDataType: EDataType, initialValue: string): number;
    convertEFloatObjectToString(eDataType: EDataType, instanceValue: any): string;
    createEIntFromString(eDataType: EDataType, initialValue: string): number;
    convertEIntToString(eDataType: EDataType, instanceValue: any): string;
    createEIntegerObjectFromString(eDataType: EDataType, initialValue: string): number;
    convertEIntegerObjectToString(eDataType: EDataType, instanceValue: any): string;
    createEJavaClassFromString(eDataType: EDataType, initialValue: string): Function;
    convertEJavaClassToString(eDataType: EDataType, instanceValue: any): string;
    createEJavaObjectFromString(eDataType: EDataType, initialValue: string): any;
    convertEJavaObjectToString(eDataType: EDataType, instanceValue: any): string;
    createELongFromString(eDataType: EDataType, initialValue: string): number;
    convertELongToString(eDataType: EDataType, instanceValue: any): string;
    createELongObjectFromString(eDataType: EDataType, initialValue: string): number;
    convertELongObjectToString(eDataType: EDataType, instanceValue: any): string;
    createEShortFromString(eDataType: EDataType, initialValue: string): number;
    convertEShortToString(eDataType: EDataType, instanceValue: any): string;
    createEShortObjectFromString(eDataType: EDataType, initialValue: string): number;
    convertEShortObjectToString(eDataType: EDataType, instanceValue: any): string;
    createEStringFromString(eDataType: EDataType, initialValue: string): string;
    convertEStringToString(eDataType: EDataType, instanceValue: any): string;
}