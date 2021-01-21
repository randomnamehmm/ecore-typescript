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
define(["require", "exports", "./EcorePackageImpl", "./Switch"], function (require, exports, EcorePackageImpl_1, Switch_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var EcoreSwitch = (function (_super) {
        __extends(EcoreSwitch, _super);
        function EcoreSwitch() {
            var _this = _super.call(this) || this;
            if (EcoreSwitch.modelPackage == null) {
                EcoreSwitch.modelPackage = EcorePackageImpl_1.EcorePackageImpl.eINSTANCE;
            }
            return _this;
        }
        EcoreSwitch.prototype.isSwitchFor = function (ePackage) {
            return ePackage === EcoreSwitch.modelPackage;
        };
        EcoreSwitch.prototype.doSwitch = function (classifierID, theEObject) {
            switch (classifierID) {
                case EcorePackageImpl_1.EcorePackageImpl.EATTRIBUTE: {
                    var obj = theEObject;
                    var result = this.caseEAttribute(obj);
                    if (result == null)
                        result = this.caseEModelElement(obj);
                    if (result == null)
                        result = this.caseENamedElement(obj);
                    if (result == null)
                        result = this.caseETypedElement(obj);
                    if (result == null)
                        result = this.caseEStructuralFeature(obj);
                    if (result == null)
                        result = this.defaultCase(theEObject);
                    return result;
                }
                case EcorePackageImpl_1.EcorePackageImpl.EANNOTATION: {
                    var obj = theEObject;
                    var result = this.caseEAnnotation(obj);
                    if (result == null)
                        result = this.caseEModelElement(obj);
                    if (result == null)
                        result = this.defaultCase(theEObject);
                    return result;
                }
                case EcorePackageImpl_1.EcorePackageImpl.ECLASS: {
                    var obj = theEObject;
                    var result = this.caseEClass(obj);
                    if (result == null)
                        result = this.caseEModelElement(obj);
                    if (result == null)
                        result = this.caseENamedElement(obj);
                    if (result == null)
                        result = this.caseEClassifier(obj);
                    if (result == null)
                        result = this.defaultCase(theEObject);
                    return result;
                }
                case EcorePackageImpl_1.EcorePackageImpl.ECLASSIFIER: {
                    var obj = theEObject;
                    var result = this.caseEClassifier(obj);
                    if (result == null)
                        result = this.caseEModelElement(obj);
                    if (result == null)
                        result = this.caseENamedElement(obj);
                    if (result == null)
                        result = this.defaultCase(theEObject);
                    return result;
                }
                case EcorePackageImpl_1.EcorePackageImpl.EDATATYPE: {
                    var obj = theEObject;
                    var result = this.caseEDataType(obj);
                    if (result == null)
                        result = this.caseEModelElement(obj);
                    if (result == null)
                        result = this.caseENamedElement(obj);
                    if (result == null)
                        result = this.caseEClassifier(obj);
                    if (result == null)
                        result = this.defaultCase(theEObject);
                    return result;
                }
                case EcorePackageImpl_1.EcorePackageImpl.EENUM: {
                    var obj = theEObject;
                    var result = this.caseEEnum(obj);
                    if (result == null)
                        result = this.caseEModelElement(obj);
                    if (result == null)
                        result = this.caseENamedElement(obj);
                    if (result == null)
                        result = this.caseEClassifier(obj);
                    if (result == null)
                        result = this.caseEDataType(obj);
                    if (result == null)
                        result = this.defaultCase(theEObject);
                    return result;
                }
                case EcorePackageImpl_1.EcorePackageImpl.EENUMLITERAL: {
                    var obj = theEObject;
                    var result = this.caseEEnumLiteral(obj);
                    if (result == null)
                        result = this.caseEModelElement(obj);
                    if (result == null)
                        result = this.caseENamedElement(obj);
                    if (result == null)
                        result = this.defaultCase(theEObject);
                    return result;
                }
                case EcorePackageImpl_1.EcorePackageImpl.EFACTORY: {
                    var obj = theEObject;
                    var result = this.caseEFactory(obj);
                    if (result == null)
                        result = this.caseEModelElement(obj);
                    if (result == null)
                        result = this.defaultCase(theEObject);
                    return result;
                }
                case EcorePackageImpl_1.EcorePackageImpl.EMODELELEMENT: {
                    var obj = theEObject;
                    var result = this.caseEModelElement(obj);
                    if (result == null)
                        result = this.defaultCase(theEObject);
                    return result;
                }
                case EcorePackageImpl_1.EcorePackageImpl.ENAMEDELEMENT: {
                    var obj = theEObject;
                    var result = this.caseENamedElement(obj);
                    if (result == null)
                        result = this.caseEModelElement(obj);
                    if (result == null)
                        result = this.defaultCase(theEObject);
                    return result;
                }
                case EcorePackageImpl_1.EcorePackageImpl.EOBJECT: {
                    var obj = theEObject;
                    var result = this.caseEObject(obj);
                    if (result == null)
                        result = this.defaultCase(theEObject);
                    return result;
                }
                case EcorePackageImpl_1.EcorePackageImpl.EOPERATION: {
                    var obj = theEObject;
                    var result = this.caseEOperation(obj);
                    if (result == null)
                        result = this.caseEModelElement(obj);
                    if (result == null)
                        result = this.caseENamedElement(obj);
                    if (result == null)
                        result = this.caseETypedElement(obj);
                    if (result == null)
                        result = this.defaultCase(theEObject);
                    return result;
                }
                case EcorePackageImpl_1.EcorePackageImpl.EPACKAGE: {
                    var obj = theEObject;
                    var result = this.caseEPackage(obj);
                    if (result == null)
                        result = this.caseEModelElement(obj);
                    if (result == null)
                        result = this.caseENamedElement(obj);
                    if (result == null)
                        result = this.defaultCase(theEObject);
                    return result;
                }
                case EcorePackageImpl_1.EcorePackageImpl.EPARAMETER: {
                    var obj = theEObject;
                    var result = this.caseEParameter(obj);
                    if (result == null)
                        result = this.caseEModelElement(obj);
                    if (result == null)
                        result = this.caseENamedElement(obj);
                    if (result == null)
                        result = this.caseETypedElement(obj);
                    if (result == null)
                        result = this.defaultCase(theEObject);
                    return result;
                }
                case EcorePackageImpl_1.EcorePackageImpl.EREFERENCE: {
                    var obj = theEObject;
                    var result = this.caseEReference(obj);
                    if (result == null)
                        result = this.caseEModelElement(obj);
                    if (result == null)
                        result = this.caseENamedElement(obj);
                    if (result == null)
                        result = this.caseETypedElement(obj);
                    if (result == null)
                        result = this.caseEStructuralFeature(obj);
                    if (result == null)
                        result = this.defaultCase(theEObject);
                    return result;
                }
                case EcorePackageImpl_1.EcorePackageImpl.ESTRUCTURALFEATURE: {
                    var obj = theEObject;
                    var result = this.caseEStructuralFeature(obj);
                    if (result == null)
                        result = this.caseEModelElement(obj);
                    if (result == null)
                        result = this.caseENamedElement(obj);
                    if (result == null)
                        result = this.caseETypedElement(obj);
                    if (result == null)
                        result = this.defaultCase(theEObject);
                    return result;
                }
                case EcorePackageImpl_1.EcorePackageImpl.ETYPEDELEMENT: {
                    var obj = theEObject;
                    var result = this.caseETypedElement(obj);
                    if (result == null)
                        result = this.caseEModelElement(obj);
                    if (result == null)
                        result = this.caseENamedElement(obj);
                    if (result == null)
                        result = this.defaultCase(theEObject);
                    return result;
                }
                case EcorePackageImpl_1.EcorePackageImpl.ESTRINGTOSTRINGMAPENTRY: {
                    var obj = theEObject;
                    var result = this.caseEStringToStringMapEntry(obj);
                    if (result == null)
                        result = this.defaultCase(theEObject);
                    return result;
                }
                case EcorePackageImpl_1.EcorePackageImpl.EGENERICTYPE: {
                    var obj = theEObject;
                    var result = this.caseEGenericType(obj);
                    if (result == null)
                        result = this.defaultCase(theEObject);
                    return result;
                }
                case EcorePackageImpl_1.EcorePackageImpl.ETYPEPARAMETER: {
                    var obj = theEObject;
                    var result = this.caseETypeParameter(obj);
                    if (result == null)
                        result = this.caseEModelElement(obj);
                    if (result == null)
                        result = this.caseENamedElement(obj);
                    if (result == null)
                        result = this.defaultCase(theEObject);
                    return result;
                }
                default: return this.defaultCase(theEObject);
            }
        };
        EcoreSwitch.prototype.caseEAttribute = function (object) {
            return null;
        };
        EcoreSwitch.prototype.caseEAnnotation = function (object) {
            return null;
        };
        EcoreSwitch.prototype.caseEClass = function (object) {
            return null;
        };
        EcoreSwitch.prototype.caseEClassifier = function (object) {
            return null;
        };
        EcoreSwitch.prototype.caseEDataType = function (object) {
            return null;
        };
        EcoreSwitch.prototype.caseEEnum = function (object) {
            return null;
        };
        EcoreSwitch.prototype.caseEEnumLiteral = function (object) {
            return null;
        };
        EcoreSwitch.prototype.caseEFactory = function (object) {
            return null;
        };
        EcoreSwitch.prototype.caseEModelElement = function (object) {
            return null;
        };
        EcoreSwitch.prototype.caseENamedElement = function (object) {
            return null;
        };
        EcoreSwitch.prototype.caseEObject = function (object) {
            return null;
        };
        EcoreSwitch.prototype.caseEOperation = function (object) {
            return null;
        };
        EcoreSwitch.prototype.caseEPackage = function (object) {
            return null;
        };
        EcoreSwitch.prototype.caseEParameter = function (object) {
            return null;
        };
        EcoreSwitch.prototype.caseEReference = function (object) {
            return null;
        };
        EcoreSwitch.prototype.caseEStructuralFeature = function (object) {
            return null;
        };
        EcoreSwitch.prototype.caseETypedElement = function (object) {
            return null;
        };
        EcoreSwitch.prototype.caseEStringToStringMapEntry = function (object) {
            return null;
        };
        EcoreSwitch.prototype.caseEGenericType = function (object) {
            return null;
        };
        EcoreSwitch.prototype.caseETypeParameter = function (object) {
            return null;
        };
        return EcoreSwitch;
    }(Switch_1.Switch));
    exports.EcoreSwitch = EcoreSwitch;
});
//# sourceMappingURL=EcoreSwitch.js.map