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
define(["require", "exports", "./OrderedSet", "./EcorePackageLiterals", "./BasicEObjectImpl"], function (require, exports, OrderedSet_1, EcorePackageLiterals_1, BasicEObjectImpl_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var EModelElementBase = (function (_super) {
        __extends(EModelElementBase, _super);
        function EModelElementBase() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this._eAnnotations = null;
            return _this;
        }
        Object.defineProperty(EModelElementBase.prototype, "eAnnotations", {
            get: function () {
                if (this._eAnnotations === null) {
                    this._eAnnotations = new OrderedSet_1.OrderedSet(this, EcorePackageLiterals_1.EcorePackageLiterals.EMODELELEMENT_EANNOTATIONS, EcorePackageLiterals_1.EcorePackageLiterals.EANNOTATION_EMODELELEMENT);
                }
                return this._eAnnotations;
            },
            enumerable: true,
            configurable: true
        });
        EModelElementBase.prototype.getEAnnotation = function (source) {
            /*TODO implement function*/
            return null;
        };
        ;
        EModelElementBase.prototype.eStaticClass = function () {
            return EModelElementBase.eStaticClass;
        };
        EModelElementBase.prototype.eInverseAdd = function (otherEnd, featureID, msgs) {
            switch (featureID) {
                case EcorePackageLiterals_1.EcorePackageLiterals.EMODELELEMENT_EANNOTATIONS:
                    return this.eAnnotations.basicAdd(otherEnd, msgs);
            }
            //return this.eInverseAddFromBasicEObjectImpl(otherEnd, featureID, msgs);
            return _super.prototype.eInverseAdd.call(this, otherEnd, featureID, msgs);
        };
        //public eInverseAddFromEModelElement = this.eInverseAdd;
        EModelElementBase.prototype.eInverseRemove = function (otherEnd, featureID, msgs) {
            switch (featureID) {
                case EcorePackageLiterals_1.EcorePackageLiterals.EMODELELEMENT_EANNOTATIONS:
                    return this.eAnnotations.basicRemove(otherEnd, msgs);
            }
            //return this.eInverseRemoveFromBasicEObjectImpl(otherEnd, featureID, msgs);
            return _super.prototype.eInverseRemove.call(this, otherEnd, featureID, msgs);
        };
        //public eInverseRemoveFromEModelElement = this.eInverseRemove;
        EModelElementBase.prototype.eGet_number_boolean_boolean = function (featureID, resolve, coreType) {
            switch (featureID) {
                case EcorePackageLiterals_1.EcorePackageLiterals.EMODELELEMENT_EANNOTATIONS:
                    return this.eAnnotations;
            }
            //return this.eGetFromBasicEObjectImpl(featureID, resolve, coreType);
            return _super.prototype.eGet.call(this, featureID, resolve, coreType);
        };
        EModelElementBase.prototype.eSet_number_any = function (featureID, newValue) {
            switch (featureID) {
                case EcorePackageLiterals_1.EcorePackageLiterals.EMODELELEMENT_EANNOTATIONS:
                    this.eAnnotations.clear();
                    this.eAnnotations.addAll(newValue);
                    return;
            }
            _super.prototype.eSet_number_any.call(this, featureID, newValue);
        };
        return EModelElementBase;
    }(BasicEObjectImpl_1.BasicEObjectImpl));
    exports.EModelElementBase = EModelElementBase;
});
//# sourceMappingURL=EModelElementBase.js.map