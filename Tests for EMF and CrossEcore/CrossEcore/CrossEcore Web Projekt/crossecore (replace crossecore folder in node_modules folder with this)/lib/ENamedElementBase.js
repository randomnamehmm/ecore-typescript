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
define(["require", "exports", "./EModelElementImpl", "./EcorePackageLiterals"], function (require, exports, EModelElementImpl_1, EcorePackageLiterals_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var ENamedElementBase = (function (_super) {
        __extends(ENamedElementBase, _super);
        function ENamedElementBase() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this._name = '';
            return _this;
        }
        Object.defineProperty(ENamedElementBase.prototype, "name", {
            get: function () {
                return this._name;
            },
            set: function (value) {
                this._name = value;
            },
            enumerable: true,
            configurable: true
        });
        ENamedElementBase.prototype.eStaticClass = function () {
            return ENamedElementBase.eStaticClass;
        };
        ENamedElementBase.prototype.eGet_number_boolean_boolean = function (featureID, resolve, coreType) {
            switch (featureID) {
                case EcorePackageLiterals_1.EcorePackageLiterals.ENAMEDELEMENT_EANNOTATIONS:
                    return this.eAnnotations;
                case EcorePackageLiterals_1.EcorePackageLiterals.ENAMEDELEMENT_NAME:
                    return this.name;
            }
            //return this.eGetFromEModelElement(featureID, resolve, coreType);
            return _super.prototype.eGet.call(this, featureID, resolve, coreType);
        };
        ENamedElementBase.prototype.eSet_number_any = function (featureID, newValue) {
            switch (featureID) {
                case EcorePackageLiterals_1.EcorePackageLiterals.ENAMEDELEMENT_NAME:
                    this.name = newValue;
                    return;
            }
            _super.prototype.eSet_number_any.call(this, featureID, newValue);
        };
        return ENamedElementBase;
    }(EModelElementImpl_1.EModelElementImpl));
    exports.ENamedElementBase = ENamedElementBase;
});
//# sourceMappingURL=ENamedElementBase.js.map