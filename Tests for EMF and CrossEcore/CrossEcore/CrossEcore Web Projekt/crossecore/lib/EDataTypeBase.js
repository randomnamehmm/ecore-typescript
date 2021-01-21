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
define(["require", "exports", "./EcorePackageLiterals", "./EClassifierImpl"], function (require, exports, EcorePackageLiterals_1, EClassifierImpl_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var EDataTypeBase = (function (_super) {
        __extends(EDataTypeBase, _super);
        function EDataTypeBase() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this._serializable = false;
            return _this;
        }
        Object.defineProperty(EDataTypeBase.prototype, "serializable", {
            get: function () {
                return this._serializable;
            },
            set: function (value) {
                this._serializable = value;
            },
            enumerable: true,
            configurable: true
        });
        EDataTypeBase.prototype.eStaticClass = function () {
            return EDataTypeBase.eStaticClass;
        };
        EDataTypeBase.prototype.eGet_number_boolean_boolean = function (featureID, resolve, coreType) {
            switch (featureID) {
                case EcorePackageLiterals_1.EcorePackageLiterals.EDATATYPE_EANNOTATIONS:
                    return this.eAnnotations;
                case EcorePackageLiterals_1.EcorePackageLiterals.EDATATYPE_NAME:
                    return this.name;
                case EcorePackageLiterals_1.EcorePackageLiterals.EDATATYPE_INSTANCECLASSNAME:
                    return this.instanceClassName;
                case EcorePackageLiterals_1.EcorePackageLiterals.EDATATYPE_INSTANCECLASS:
                    return this.instanceClass;
                case EcorePackageLiterals_1.EcorePackageLiterals.EDATATYPE_DEFAULTVALUE:
                    return this.defaultValue;
                case EcorePackageLiterals_1.EcorePackageLiterals.EDATATYPE_INSTANCETYPENAME:
                    return this.instanceTypeName;
                case EcorePackageLiterals_1.EcorePackageLiterals.EDATATYPE_EPACKAGE:
                    return this.ePackage;
                case EcorePackageLiterals_1.EcorePackageLiterals.EDATATYPE_ETYPEPARAMETERS:
                    return this.eTypeParameters;
                case EcorePackageLiterals_1.EcorePackageLiterals.EDATATYPE_SERIALIZABLE:
                    return this.serializable;
            }
            //return this.eGetFromEClassifier(featureID, resolve, coreType);
            return _super.prototype.eGet.call(this, featureID, resolve, coreType);
        };
        EDataTypeBase.prototype.eSet_number_any = function (featureID, newValue) {
            switch (featureID) {
                case EcorePackageLiterals_1.EcorePackageLiterals.EDATATYPE_SERIALIZABLE:
                    this.serializable = newValue;
                    return;
            }
            _super.prototype.eSet_number_any.call(this, featureID, newValue);
        };
        return EDataTypeBase;
    }(EClassifierImpl_1.EClassifierImpl));
    exports.EDataTypeBase = EDataTypeBase;
});
//# sourceMappingURL=EDataTypeBase.js.map