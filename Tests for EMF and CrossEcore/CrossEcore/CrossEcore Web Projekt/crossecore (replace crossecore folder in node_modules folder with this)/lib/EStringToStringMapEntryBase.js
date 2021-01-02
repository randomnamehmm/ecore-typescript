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
define(["require", "exports", "./EcorePackageLiterals", "./BasicEObjectImpl"], function (require, exports, EcorePackageLiterals_1, BasicEObjectImpl_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var EStringToStringMapEntryBase = (function (_super) {
        __extends(EStringToStringMapEntryBase, _super);
        function EStringToStringMapEntryBase() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this._key = '';
            _this._value = '';
            return _this;
        }
        Object.defineProperty(EStringToStringMapEntryBase.prototype, "key", {
            get: function () {
                return this._key;
            },
            set: function (value) {
                this._key = value;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(EStringToStringMapEntryBase.prototype, "value", {
            get: function () {
                return this._value;
            },
            set: function (value) {
                this._value = value;
            },
            enumerable: true,
            configurable: true
        });
        EStringToStringMapEntryBase.prototype.eStaticClass = function () {
            return EStringToStringMapEntryBase.eStaticClass;
        };
        EStringToStringMapEntryBase.prototype.eGet_number_boolean_boolean = function (featureID, resolve, coreType) {
            switch (featureID) {
                case EcorePackageLiterals_1.EcorePackageLiterals.ESTRINGTOSTRINGMAPENTRY_KEY:
                    return this.key;
                case EcorePackageLiterals_1.EcorePackageLiterals.ESTRINGTOSTRINGMAPENTRY_VALUE:
                    return this.value;
            }
            //return this.eGetFromBasicEObjectImpl(featureID, resolve, coreType);
            return _super.prototype.eGet.call(this, featureID, resolve, coreType);
        };
        EStringToStringMapEntryBase.prototype.eSet_number_any = function (featureID, newValue) {
            switch (featureID) {
                case EcorePackageLiterals_1.EcorePackageLiterals.ESTRINGTOSTRINGMAPENTRY_KEY:
                    this.key = newValue;
                    return;
                case EcorePackageLiterals_1.EcorePackageLiterals.ESTRINGTOSTRINGMAPENTRY_VALUE:
                    this.value = newValue;
                    return;
            }
            _super.prototype.eSet_number_any.call(this, featureID, newValue);
        };
        return EStringToStringMapEntryBase;
    }(BasicEObjectImpl_1.BasicEObjectImpl));
    exports.EStringToStringMapEntryBase = EStringToStringMapEntryBase;
});
//# sourceMappingURL=EStringToStringMapEntryBase.js.map