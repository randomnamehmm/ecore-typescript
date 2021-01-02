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
define(["require", "exports", "./EStructuralFeatureImpl", "./BasicEObjectImpl"], function (require, exports, EStructuralFeatureImpl_1, BasicEObjectImpl_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var EObjectBase = (function (_super) {
        __extends(EObjectBase, _super);
        function EObjectBase() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        EObjectBase.prototype.eIsSet = function (feature) {
            /*TODO implement function*/
            return null;
        };
        ;
        EObjectBase.prototype.eContainmentFeature = function () {
            /*TODO implement function*/
            return null;
        };
        ;
        EObjectBase.prototype.eContainingFeature = function () {
            /*TODO implement function*/
            return null;
        };
        ;
        EObjectBase.prototype.eIsProxy = function () {
            /*TODO implement function*/
            return null;
        };
        ;
        EObjectBase.prototype.eClass = function () {
            /*TODO implement function*/
            return null;
        };
        ;
        EObjectBase.prototype.eContainer = function () {
            /*TODO implement function*/
            return null;
        };
        ;
        EObjectBase.prototype.eInvoke = function (operation, arguments_) {
            /*TODO implement function*/
            return null;
        };
        ;
        EObjectBase.prototype.eSet = function (feature, newValue) {
            /*TODO implement function*/
            return null;
        };
        ;
        EObjectBase.prototype.eContents = function () {
            /*TODO implement function*/
            return null;
        };
        ;
        EObjectBase.prototype.eResource = function () {
            /*TODO implement function*/
            return null;
        };
        ;
        EObjectBase.prototype.eCrossReferences = function () {
            /*TODO implement function*/
            return null;
        };
        ;
        EObjectBase.prototype.eAllContents = function () {
            /*TODO implement function*/
            return null;
        };
        ;
        EObjectBase.prototype.eGet = function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            if (args[0] instanceof EStructuralFeatureImpl_1.EStructuralFeatureImpl &&
                typeof args[1] === "boolean") {
                return this.eGet_EStructuralFeature_boolean(args[0], args[1]);
            }
            if (args[0] instanceof EStructuralFeatureImpl_1.EStructuralFeatureImpl) {
                return this.eGet_EStructuralFeature(args[0]);
            }
        };
        ;
        EObjectBase.prototype.eGet_EStructuralFeature_boolean = function (feature, resolve) {
            /*TODO implement function*/
            return null;
        };
        ;
        EObjectBase.prototype.eGet_EStructuralFeature = function (feature) {
            /*TODO implement function*/
            return null;
        };
        ;
        EObjectBase.prototype.eUnset = function (feature) {
            /*TODO implement function*/
            return null;
        };
        ;
        EObjectBase.prototype.eStaticClass = function () {
            return EObjectBase.eStaticClass;
        };
        EObjectBase.prototype.eGet_number_boolean_boolean = function (featureID, resolve, coreType) {
            //return this.eGetFromBasicEObjectImpl(featureID, resolve, coreType);
            return _super.prototype.eGet.call(this, featureID, resolve, coreType);
        };
        EObjectBase.prototype.eSet_number_any = function (featureID, newValue) {
            switch (featureID) {
            }
            _super.prototype.eSet_number_any.call(this, featureID, newValue);
        };
        return EObjectBase;
    }(BasicEObjectImpl_1.BasicEObjectImpl));
    exports.EObjectBase = EObjectBase;
});
//# sourceMappingURL=EObjectBase.js.map