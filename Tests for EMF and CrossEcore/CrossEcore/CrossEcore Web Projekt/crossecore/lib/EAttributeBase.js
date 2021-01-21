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
define(["require", "exports", "./EStructuralFeatureImpl", "./EcorePackageLiterals"], function (require, exports, EStructuralFeatureImpl_1, EcorePackageLiterals_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var EAttributeBase = (function (_super) {
        __extends(EAttributeBase, _super);
        function EAttributeBase() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this._iD = false;
            return _this;
        }
        Object.defineProperty(EAttributeBase.prototype, "iD", {
            get: function () {
                return this._iD;
            },
            set: function (value) {
                this._iD = value;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(EAttributeBase.prototype, "eAttributeType", {
            get: function () {
                //TODO implement derivation
                return null;
            },
            enumerable: true,
            configurable: true
        });
        EAttributeBase.prototype.eStaticClass = function () {
            return EAttributeBase.eStaticClass;
        };
        EAttributeBase.prototype.eGet_number_boolean_boolean = function (featureID, resolve, coreType) {
            switch (featureID) {
                case EcorePackageLiterals_1.EcorePackageLiterals.EATTRIBUTE_EANNOTATIONS:
                    return this.eAnnotations;
                case EcorePackageLiterals_1.EcorePackageLiterals.EATTRIBUTE_NAME:
                    return this.name;
                case EcorePackageLiterals_1.EcorePackageLiterals.EATTRIBUTE_ORDERED:
                    return this.ordered;
                case EcorePackageLiterals_1.EcorePackageLiterals.EATTRIBUTE_UNIQUE:
                    return this.unique;
                case EcorePackageLiterals_1.EcorePackageLiterals.EATTRIBUTE_LOWERBOUND:
                    return this.lowerBound;
                case EcorePackageLiterals_1.EcorePackageLiterals.EATTRIBUTE_UPPERBOUND:
                    return this.upperBound;
                case EcorePackageLiterals_1.EcorePackageLiterals.EATTRIBUTE_MANY:
                    return this.many;
                case EcorePackageLiterals_1.EcorePackageLiterals.EATTRIBUTE_REQUIRED:
                    return this.required;
                case EcorePackageLiterals_1.EcorePackageLiterals.EATTRIBUTE_ETYPE:
                    return this.eType;
                case EcorePackageLiterals_1.EcorePackageLiterals.EATTRIBUTE_EGENERICTYPE:
                    return this.eGenericType;
                case EcorePackageLiterals_1.EcorePackageLiterals.EATTRIBUTE_CHANGEABLE:
                    return this.changeable;
                case EcorePackageLiterals_1.EcorePackageLiterals.EATTRIBUTE_VOLATILE:
                    return this.volatile;
                case EcorePackageLiterals_1.EcorePackageLiterals.EATTRIBUTE_TRANSIENT:
                    return this.transient;
                case EcorePackageLiterals_1.EcorePackageLiterals.EATTRIBUTE_DEFAULTVALUELITERAL:
                    return this.defaultValueLiteral;
                case EcorePackageLiterals_1.EcorePackageLiterals.EATTRIBUTE_DEFAULTVALUE:
                    return this.defaultValue;
                case EcorePackageLiterals_1.EcorePackageLiterals.EATTRIBUTE_UNSETTABLE:
                    return this.unsettable;
                case EcorePackageLiterals_1.EcorePackageLiterals.EATTRIBUTE_DERIVED:
                    return this.derived;
                case EcorePackageLiterals_1.EcorePackageLiterals.EATTRIBUTE_ECONTAININGCLASS:
                    return this.eContainingClass;
                case EcorePackageLiterals_1.EcorePackageLiterals.EATTRIBUTE_ID:
                    return this.iD;
                case EcorePackageLiterals_1.EcorePackageLiterals.EATTRIBUTE_EATTRIBUTETYPE:
                    return this.eAttributeType;
            }
            //return this.eGetFromEStructuralFeature(featureID, resolve, coreType);
            return _super.prototype.eGet.call(this, featureID, resolve, coreType);
        };
        EAttributeBase.prototype.eSet_number_any = function (featureID, newValue) {
            switch (featureID) {
                case EcorePackageLiterals_1.EcorePackageLiterals.EATTRIBUTE_ID:
                    this.iD = newValue;
                    return;
            }
            _super.prototype.eSet_number_any.call(this, featureID, newValue);
        };
        return EAttributeBase;
    }(EStructuralFeatureImpl_1.EStructuralFeatureImpl));
    exports.EAttributeBase = EAttributeBase;
});
//# sourceMappingURL=EAttributeBase.js.map