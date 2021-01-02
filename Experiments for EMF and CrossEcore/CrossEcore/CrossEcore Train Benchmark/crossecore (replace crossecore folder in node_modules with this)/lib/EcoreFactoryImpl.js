var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
define(["require", "exports", "./EStructuralFeatureImpl", "./EDataTypeImpl", "./EReferenceImpl", "./EAnnotationImpl", "./EAttributeImpl", "./EClassImpl", "./EModelElementImpl", "./ENamedElementImpl", "./EStringToStringMapEntryImpl", "./ETypedElementImpl", "./EFactoryImpl", "./EParameterImpl", "./EObjectImpl", "./EEnumLiteralImpl", "./EGenericTypeImpl", "./EPackageImpl", "./ETypeParameterImpl", "./EClassifierImpl", "./EEnumImpl", "./AllInstances", "./EOperationImpl"], function (require, exports, EStructuralFeatureImpl_1, EDataTypeImpl_1, EReferenceImpl_1, EAnnotationImpl_1, EAttributeImpl_1, EClassImpl_1, EModelElementImpl_1, ENamedElementImpl_1, EStringToStringMapEntryImpl_1, ETypedElementImpl_1, EFactoryImpl_1, EParameterImpl_1, EObjectImpl_1, EEnumLiteralImpl_1, EGenericTypeImpl_1, EPackageImpl_1, ETypeParameterImpl_1, EClassifierImpl_1, EEnumImpl_1, AllInstances_1, EOperationImpl_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var EcoreFactoryImpl = (function (_super) {
        __extends(EcoreFactoryImpl, _super);
        function EcoreFactoryImpl() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.createEAttribute = function () {
                var theEAttribute = new EAttributeImpl_1.EAttributeImpl();
                AllInstances_1.AllInstances.INSTANCE.put(theEAttribute, "EAttribute");
                return theEAttribute;
            };
            _this.createEAnnotation = function () {
                var theEAnnotation = new EAnnotationImpl_1.EAnnotationImpl();
                AllInstances_1.AllInstances.INSTANCE.put(theEAnnotation, "EAnnotation");
                return theEAnnotation;
            };
            _this.createEClass = function () {
                var theEClass = new EClassImpl_1.EClassImpl();
                AllInstances_1.AllInstances.INSTANCE.put(theEClass, "EClass");
                return theEClass;
            };
            _this.createEClassifier = function () {
                var theEClassifier = new EClassifierImpl_1.EClassifierImpl();
                AllInstances_1.AllInstances.INSTANCE.put(theEClassifier, "EClassifier");
                return theEClassifier;
            };
            _this.createEDataType = function () {
                var theEDataType = new EDataTypeImpl_1.EDataTypeImpl();
                AllInstances_1.AllInstances.INSTANCE.put(theEDataType, "EDataType");
                return theEDataType;
            };
            _this.createEEnum = function () {
                var theEEnum = new EEnumImpl_1.EEnumImpl();
                AllInstances_1.AllInstances.INSTANCE.put(theEEnum, "EEnum");
                return theEEnum;
            };
            _this.createEEnumLiteral = function () {
                var theEEnumLiteral = new EEnumLiteralImpl_1.EEnumLiteralImpl();
                AllInstances_1.AllInstances.INSTANCE.put(theEEnumLiteral, "EEnumLiteral");
                return theEEnumLiteral;
            };
            _this.createEFactory = function () {
                var theEFactory = new EFactoryImpl_1.EFactoryImpl();
                AllInstances_1.AllInstances.INSTANCE.put(theEFactory, "EFactory");
                return theEFactory;
            };
            _this.createEModelElement = function () {
                var theEModelElement = new EModelElementImpl_1.EModelElementImpl();
                AllInstances_1.AllInstances.INSTANCE.put(theEModelElement, "EModelElement");
                return theEModelElement;
            };
            _this.createENamedElement = function () {
                var theENamedElement = new ENamedElementImpl_1.ENamedElementImpl();
                AllInstances_1.AllInstances.INSTANCE.put(theENamedElement, "ENamedElement");
                return theENamedElement;
            };
            _this.createEObject = function () {
                var theEObject = new EObjectImpl_1.EObjectImpl();
                AllInstances_1.AllInstances.INSTANCE.put(theEObject, "EObject");
                return theEObject;
            };
            _this.createEOperation = function () {
                var theEOperation = new EOperationImpl_1.EOperationImpl();
                AllInstances_1.AllInstances.INSTANCE.put(theEOperation, "EOperation");
                return theEOperation;
            };
            _this.createEPackage = function () {
                var theEPackage = new EPackageImpl_1.EPackageImpl();
                AllInstances_1.AllInstances.INSTANCE.put(theEPackage, "EPackage");
                return theEPackage;
            };
            _this.createEParameter = function () {
                var theEParameter = new EParameterImpl_1.EParameterImpl();
                AllInstances_1.AllInstances.INSTANCE.put(theEParameter, "EParameter");
                return theEParameter;
            };
            _this.createEReference = function () {
                var theEReference = new EReferenceImpl_1.EReferenceImpl();
                AllInstances_1.AllInstances.INSTANCE.put(theEReference, "EReference");
                return theEReference;
            };
            _this.createEStructuralFeature = function () {
                var theEStructuralFeature = new EStructuralFeatureImpl_1.EStructuralFeatureImpl();
                AllInstances_1.AllInstances.INSTANCE.put(theEStructuralFeature, "EStructuralFeature");
                return theEStructuralFeature;
            };
            _this.createETypedElement = function () {
                var theETypedElement = new ETypedElementImpl_1.ETypedElementImpl();
                AllInstances_1.AllInstances.INSTANCE.put(theETypedElement, "ETypedElement");
                return theETypedElement;
            };
            _this.createEStringToStringMapEntry = function () {
                var theEStringToStringMapEntry = new EStringToStringMapEntryImpl_1.EStringToStringMapEntryImpl();
                AllInstances_1.AllInstances.INSTANCE.put(theEStringToStringMapEntry, "EStringToStringMapEntry");
                return theEStringToStringMapEntry;
            };
            _this.createEGenericType = function () {
                var theEGenericType = new EGenericTypeImpl_1.EGenericTypeImpl();
                AllInstances_1.AllInstances.INSTANCE.put(theEGenericType, "EGenericType");
                return theEGenericType;
            };
            _this.createETypeParameter = function () {
                var theETypeParameter = new ETypeParameterImpl_1.ETypeParameterImpl();
                AllInstances_1.AllInstances.INSTANCE.put(theETypeParameter, "ETypeParameter");
                return theETypeParameter;
            };
            return _this;
        }
        EcoreFactoryImpl.init = function () {
            return new EcoreFactoryImpl();
        };
        EcoreFactoryImpl.prototype.create = function (eClass) {
            switch (eClass.getClassifierID()) {
                case 0: return this.createEAttribute();
                case 1: return this.createEAnnotation();
                case 2: return this.createEClass();
                case 4: return this.createEDataType();
                case 5: return this.createEEnum();
                case 6: return this.createEEnumLiteral();
                case 7: return this.createEFactory();
                case 10: return this.createEObject();
                case 11: return this.createEOperation();
                case 12: return this.createEPackage();
                case 13: return this.createEParameter();
                case 14: return this.createEReference();
                case 48: return this.createEStringToStringMapEntry();
                case 50: return this.createEGenericType();
                case 51: return this.createETypeParameter();
                default:
                    throw new Error("The class '" + eClass.name + "' is not a valid classifier");
            }
        };
        EcoreFactoryImpl.prototype.createFromString = function (eDataType, initialValue) {
            switch (eDataType.getClassifierID()) {
                case 17://EcorePackageImpl.EBIGDECIMAL
                    return this.createEBigDecimalFromString(eDataType, initialValue);
                case 18://EcorePackageImpl.EBIGINTEGER
                    return this.createEBigIntegerFromString(eDataType, initialValue);
                case 19://EcorePackageImpl.EBOOLEAN
                    return this.createEBooleanFromString(eDataType, initialValue);
                case 20://EcorePackageImpl.EBOOLEANOBJECT
                    return this.createEBooleanObjectFromString(eDataType, initialValue);
                case 21://EcorePackageImpl.EBYTE
                    return this.createEByteFromString(eDataType, initialValue);
                case 22://EcorePackageImpl.EBYTEARRAY
                    return this.createEByteArrayFromString(eDataType, initialValue);
                case 23://EcorePackageImpl.EBYTEOBJECT
                    return this.createEByteObjectFromString(eDataType, initialValue);
                case 24://EcorePackageImpl.ECHAR
                    return this.createECharFromString(eDataType, initialValue);
                case 25://EcorePackageImpl.ECHARACTEROBJECT
                    return this.createECharacterObjectFromString(eDataType, initialValue);
                case 26://EcorePackageImpl.EDATE
                    return this.createEDateFromString(eDataType, initialValue);
                case 28://EcorePackageImpl.EDOUBLE
                    return this.createEDoubleFromString(eDataType, initialValue);
                case 29://EcorePackageImpl.EDOUBLEOBJECT
                    return this.createEDoubleObjectFromString(eDataType, initialValue);
                case 34://EcorePackageImpl.EFLOAT
                    return this.createEFloatFromString(eDataType, initialValue);
                case 35://EcorePackageImpl.EFLOATOBJECT
                    return this.createEFloatObjectFromString(eDataType, initialValue);
                case 36://EcorePackageImpl.EINT
                    return this.createEIntFromString(eDataType, initialValue);
                case 37://EcorePackageImpl.EINTEGEROBJECT
                    return this.createEIntegerObjectFromString(eDataType, initialValue);
                case 38://EcorePackageImpl.EJAVACLASS
                    return this.createEJavaClassFromString(eDataType, initialValue);
                case 39://EcorePackageImpl.EJAVAOBJECT
                    return this.createEJavaObjectFromString(eDataType, initialValue);
                case 40://EcorePackageImpl.ELONG
                    return this.createELongFromString(eDataType, initialValue);
                case 41://EcorePackageImpl.ELONGOBJECT
                    return this.createELongObjectFromString(eDataType, initialValue);
                case 45://EcorePackageImpl.ESHORT
                    return this.createEShortFromString(eDataType, initialValue);
                case 46://EcorePackageImpl.ESHORTOBJECT
                    return this.createEShortObjectFromString(eDataType, initialValue);
                case 47://EcorePackageImpl.ESTRING
                    return this.createEStringFromString(eDataType, initialValue);
                default:
                    throw new Error("The datatype '" + eDataType.name + "' is not a valid classifier");
            }
        };
        EcoreFactoryImpl.prototype.convertToString = function (eDataType, instanceValue) {
            switch (eDataType.getClassifierID()) {
                case 17://EcorePackageImpl.EBIGDECIMAL
                    return this.convertEBigDecimalToString(eDataType, instanceValue);
                case 18://EcorePackageImpl.EBIGINTEGER
                    return this.convertEBigIntegerToString(eDataType, instanceValue);
                case 19://EcorePackageImpl.EBOOLEAN
                    return this.convertEBooleanToString(eDataType, instanceValue);
                case 20://EcorePackageImpl.EBOOLEANOBJECT
                    return this.convertEBooleanObjectToString(eDataType, instanceValue);
                case 21://EcorePackageImpl.EBYTE
                    return this.convertEByteToString(eDataType, instanceValue);
                case 22://EcorePackageImpl.EBYTEARRAY
                    return this.convertEByteArrayToString(eDataType, instanceValue);
                case 23://EcorePackageImpl.EBYTEOBJECT
                    return this.convertEByteObjectToString(eDataType, instanceValue);
                case 24://EcorePackageImpl.ECHAR
                    return this.convertECharToString(eDataType, instanceValue);
                case 25://EcorePackageImpl.ECHARACTEROBJECT
                    return this.convertECharacterObjectToString(eDataType, instanceValue);
                case 26://EcorePackageImpl.EDATE
                    return this.convertEDateToString(eDataType, instanceValue);
                case 28://EcorePackageImpl.EDOUBLE
                    return this.convertEDoubleToString(eDataType, instanceValue);
                case 29://EcorePackageImpl.EDOUBLEOBJECT
                    return this.convertEDoubleObjectToString(eDataType, instanceValue);
                case 34://EcorePackageImpl.EFLOAT
                    return this.convertEFloatToString(eDataType, instanceValue);
                case 35://EcorePackageImpl.EFLOATOBJECT
                    return this.convertEFloatObjectToString(eDataType, instanceValue);
                case 36://EcorePackageImpl.EINT
                    return this.convertEIntToString(eDataType, instanceValue);
                case 37://EcorePackageImpl.EINTEGEROBJECT
                    return this.convertEIntegerObjectToString(eDataType, instanceValue);
                case 38://EcorePackageImpl.EJAVACLASS
                    return this.convertEJavaClassToString(eDataType, instanceValue);
                case 39://EcorePackageImpl.EJAVAOBJECT
                    return this.convertEJavaObjectToString(eDataType, instanceValue);
                case 40://EcorePackageImpl.ELONG
                    return this.convertELongToString(eDataType, instanceValue);
                case 41://EcorePackageImpl.ELONGOBJECT
                    return this.convertELongObjectToString(eDataType, instanceValue);
                case 45://EcorePackageImpl.ESHORT
                    return this.convertEShortToString(eDataType, instanceValue);
                case 46://EcorePackageImpl.ESHORTOBJECT
                    return this.convertEShortObjectToString(eDataType, instanceValue);
                case 47://EcorePackageImpl.ESTRING
                    return this.convertEStringToString(eDataType, instanceValue);
                default:
                    throw new Error("The datatype '" + eDataType.name + "' is not a valid classifier");
            }
        };
        EcoreFactoryImpl.prototype.createEBigDecimalFromString = function (eDataType, initialValue) {
            return initialValue == null ? null : JSON.parse(initialValue);
        };
        EcoreFactoryImpl.prototype.convertEBigDecimalToString = function (eDataType, instanceValue) {
            return instanceValue === null ? null : JSON.stringify(instanceValue);
        };
        EcoreFactoryImpl.prototype.createEBigIntegerFromString = function (eDataType, initialValue) {
            return initialValue == null ? null : JSON.parse(initialValue);
        };
        EcoreFactoryImpl.prototype.convertEBigIntegerToString = function (eDataType, instanceValue) {
            return instanceValue === null ? null : JSON.stringify(instanceValue);
        };
        EcoreFactoryImpl.prototype.createEBooleanFromString = function (eDataType, initialValue) {
            return initialValue == null ? null : JSON.parse(initialValue);
        };
        EcoreFactoryImpl.prototype.convertEBooleanToString = function (eDataType, instanceValue) {
            return instanceValue === null ? null : JSON.stringify(instanceValue);
        };
        EcoreFactoryImpl.prototype.createEBooleanObjectFromString = function (eDataType, initialValue) {
            return initialValue == null ? null : JSON.parse(initialValue);
        };
        EcoreFactoryImpl.prototype.convertEBooleanObjectToString = function (eDataType, instanceValue) {
            return instanceValue === null ? null : JSON.stringify(instanceValue);
        };
        EcoreFactoryImpl.prototype.createEByteFromString = function (eDataType, initialValue) {
            return initialValue == null ? null : JSON.parse(initialValue);
        };
        EcoreFactoryImpl.prototype.convertEByteToString = function (eDataType, instanceValue) {
            return instanceValue === null ? null : JSON.stringify(instanceValue);
        };
        EcoreFactoryImpl.prototype.createEByteArrayFromString = function (eDataType, initialValue) {
            return initialValue == null ? null : JSON.parse(initialValue);
        };
        EcoreFactoryImpl.prototype.convertEByteArrayToString = function (eDataType, instanceValue) {
            return instanceValue === null ? null : JSON.stringify(instanceValue);
        };
        EcoreFactoryImpl.prototype.createEByteObjectFromString = function (eDataType, initialValue) {
            return initialValue == null ? null : JSON.parse(initialValue);
        };
        EcoreFactoryImpl.prototype.convertEByteObjectToString = function (eDataType, instanceValue) {
            return instanceValue === null ? null : JSON.stringify(instanceValue);
        };
        EcoreFactoryImpl.prototype.createECharFromString = function (eDataType, initialValue) {
            return initialValue == null ? null : JSON.parse(initialValue);
        };
        EcoreFactoryImpl.prototype.convertECharToString = function (eDataType, instanceValue) {
            return instanceValue === null ? null : JSON.stringify(instanceValue);
        };
        EcoreFactoryImpl.prototype.createECharacterObjectFromString = function (eDataType, initialValue) {
            return initialValue == null ? null : JSON.parse(initialValue);
        };
        EcoreFactoryImpl.prototype.convertECharacterObjectToString = function (eDataType, instanceValue) {
            return instanceValue === null ? null : JSON.stringify(instanceValue);
        };
        EcoreFactoryImpl.prototype.createEDateFromString = function (eDataType, initialValue) {
            return initialValue == null ? null : JSON.parse(initialValue);
        };
        EcoreFactoryImpl.prototype.convertEDateToString = function (eDataType, instanceValue) {
            return instanceValue === null ? null : JSON.stringify(instanceValue);
        };
        EcoreFactoryImpl.prototype.createEDoubleFromString = function (eDataType, initialValue) {
            return initialValue == null ? null : JSON.parse(initialValue);
        };
        EcoreFactoryImpl.prototype.convertEDoubleToString = function (eDataType, instanceValue) {
            return instanceValue === null ? null : JSON.stringify(instanceValue);
        };
        EcoreFactoryImpl.prototype.createEDoubleObjectFromString = function (eDataType, initialValue) {
            return initialValue == null ? null : JSON.parse(initialValue);
        };
        EcoreFactoryImpl.prototype.convertEDoubleObjectToString = function (eDataType, instanceValue) {
            return instanceValue === null ? null : JSON.stringify(instanceValue);
        };
        EcoreFactoryImpl.prototype.createEFloatFromString = function (eDataType, initialValue) {
            return initialValue == null ? null : JSON.parse(initialValue);
        };
        EcoreFactoryImpl.prototype.convertEFloatToString = function (eDataType, instanceValue) {
            return instanceValue === null ? null : JSON.stringify(instanceValue);
        };
        EcoreFactoryImpl.prototype.createEFloatObjectFromString = function (eDataType, initialValue) {
            return initialValue == null ? null : JSON.parse(initialValue);
        };
        EcoreFactoryImpl.prototype.convertEFloatObjectToString = function (eDataType, instanceValue) {
            return instanceValue === null ? null : JSON.stringify(instanceValue);
        };
        EcoreFactoryImpl.prototype.createEIntFromString = function (eDataType, initialValue) {
            return initialValue == null ? null : JSON.parse(initialValue);
        };
        EcoreFactoryImpl.prototype.convertEIntToString = function (eDataType, instanceValue) {
            return instanceValue === null ? null : JSON.stringify(instanceValue);
        };
        EcoreFactoryImpl.prototype.createEIntegerObjectFromString = function (eDataType, initialValue) {
            return initialValue == null ? null : JSON.parse(initialValue);
        };
        EcoreFactoryImpl.prototype.convertEIntegerObjectToString = function (eDataType, instanceValue) {
            return instanceValue === null ? null : JSON.stringify(instanceValue);
        };
        EcoreFactoryImpl.prototype.createEJavaClassFromString = function (eDataType, initialValue) {
            return initialValue == null ? null : JSON.parse(initialValue);
        };
        EcoreFactoryImpl.prototype.convertEJavaClassToString = function (eDataType, instanceValue) {
            return instanceValue === null ? null : JSON.stringify(instanceValue);
        };
        EcoreFactoryImpl.prototype.createEJavaObjectFromString = function (eDataType, initialValue) {
            return initialValue == null ? null : JSON.parse(initialValue);
        };
        EcoreFactoryImpl.prototype.convertEJavaObjectToString = function (eDataType, instanceValue) {
            return instanceValue === null ? null : JSON.stringify(instanceValue);
        };
        EcoreFactoryImpl.prototype.createELongFromString = function (eDataType, initialValue) {
            return initialValue == null ? null : JSON.parse(initialValue);
        };
        EcoreFactoryImpl.prototype.convertELongToString = function (eDataType, instanceValue) {
            return instanceValue === null ? null : JSON.stringify(instanceValue);
        };
        EcoreFactoryImpl.prototype.createELongObjectFromString = function (eDataType, initialValue) {
            return initialValue == null ? null : JSON.parse(initialValue);
        };
        EcoreFactoryImpl.prototype.convertELongObjectToString = function (eDataType, instanceValue) {
            return instanceValue === null ? null : JSON.stringify(instanceValue);
        };
        EcoreFactoryImpl.prototype.createEShortFromString = function (eDataType, initialValue) {
            return initialValue == null ? null : JSON.parse(initialValue);
        };
        EcoreFactoryImpl.prototype.convertEShortToString = function (eDataType, instanceValue) {
            return instanceValue === null ? null : JSON.stringify(instanceValue);
        };
        EcoreFactoryImpl.prototype.createEShortObjectFromString = function (eDataType, initialValue) {
            return initialValue == null ? null : JSON.parse(initialValue);
        };
        EcoreFactoryImpl.prototype.convertEShortObjectToString = function (eDataType, instanceValue) {
            return instanceValue === null ? null : JSON.stringify(instanceValue);
        };
        EcoreFactoryImpl.prototype.createEStringFromString = function (eDataType, initialValue) {
            return initialValue == null ? null : JSON.parse(initialValue);
        };
        EcoreFactoryImpl.prototype.convertEStringToString = function (eDataType, instanceValue) {
            return instanceValue === null ? null : JSON.stringify(instanceValue);
        };
        EcoreFactoryImpl.eINSTANCE = EcoreFactoryImpl.init();
        return EcoreFactoryImpl;
    }(EFactoryImpl_1.EFactoryImpl));
    exports.EcoreFactoryImpl = EcoreFactoryImpl;
});
//# sourceMappingURL=EcoreFactoryImpl.js.map