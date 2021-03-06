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
define(["require", "exports", "./EcorePackageLiterals", "./ETypedElementImpl"], function (require, exports, EcorePackageLiterals_1, ETypedElementImpl_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var EParameterBase = (function (_super) {
        __extends(EParameterBase, _super);
        function EParameterBase() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        Object.defineProperty(EParameterBase.prototype, "eOperation", {
            get: function () {
                if (this.eContainerFeatureID() != EcorePackageLiterals_1.EcorePackageLiterals.EPARAMETER_EOPERATION)
                    return null;
                return this.eInternalContainer();
            },
            enumerable: true,
            configurable: true
        });
        EParameterBase.prototype.eStaticClass = function () {
            return EParameterBase.eStaticClass;
        };
        EParameterBase.prototype.eInverseAdd = function (otherEnd, featureID, msgs) {
            switch (featureID) {
                case EcorePackageLiterals_1.EcorePackageLiterals.EPARAMETER_EOPERATION:
                    if (this.eInternalContainer() != null) {
                        msgs = this.eBasicRemoveFromContainer(msgs);
                    }
                    return this.basicSetEOperation(otherEnd, msgs);
            }
            //return this.eInverseAddFromETypedElement(otherEnd, featureID, msgs);
            return _super.prototype.eInverseAdd.call(this, otherEnd, featureID, msgs);
        };
        //public eInverseAddFromEParameter = this.eInverseAdd;
        EParameterBase.prototype.eInverseRemove = function (otherEnd, featureID, msgs) {
            switch (featureID) {
                case EcorePackageLiterals_1.EcorePackageLiterals.EPARAMETER_EOPERATION:
                    return this.basicSetEOperation(null, msgs);
            }
            //return this.eInverseRemoveFromETypedElement(otherEnd, featureID, msgs);
            return _super.prototype.eInverseRemove.call(this, otherEnd, featureID, msgs);
        };
        //public eInverseRemoveFromEParameter = this.eInverseRemove;
        EParameterBase.prototype.basicSetEOperation = function (newobj, msgs) {
            msgs = this.eBasicSetContainer(newobj, EcorePackageLiterals_1.EcorePackageLiterals.EPARAMETER_EOPERATION, msgs);
            return msgs;
        };
        EParameterBase.prototype.eGet_number_boolean_boolean = function (featureID, resolve, coreType) {
            switch (featureID) {
                case EcorePackageLiterals_1.EcorePackageLiterals.EPARAMETER_EANNOTATIONS:
                    return this.eAnnotations;
                case EcorePackageLiterals_1.EcorePackageLiterals.EPARAMETER_NAME:
                    return this.name;
                case EcorePackageLiterals_1.EcorePackageLiterals.EPARAMETER_ORDERED:
                    return this.ordered;
                case EcorePackageLiterals_1.EcorePackageLiterals.EPARAMETER_UNIQUE:
                    return this.unique;
                case EcorePackageLiterals_1.EcorePackageLiterals.EPARAMETER_LOWERBOUND:
                    return this.lowerBound;
                case EcorePackageLiterals_1.EcorePackageLiterals.EPARAMETER_UPPERBOUND:
                    return this.upperBound;
                case EcorePackageLiterals_1.EcorePackageLiterals.EPARAMETER_MANY:
                    return this.many;
                case EcorePackageLiterals_1.EcorePackageLiterals.EPARAMETER_REQUIRED:
                    return this.required;
                case EcorePackageLiterals_1.EcorePackageLiterals.EPARAMETER_ETYPE:
                    return this.eType;
                case EcorePackageLiterals_1.EcorePackageLiterals.EPARAMETER_EGENERICTYPE:
                    return this.eGenericType;
                case EcorePackageLiterals_1.EcorePackageLiterals.EPARAMETER_EOPERATION:
                    return this.eOperation;
            }
            //return this.eGetFromETypedElement(featureID, resolve, coreType);
            return _super.prototype.eGet.call(this, featureID, resolve, coreType);
        };
        EParameterBase.prototype.eSet_number_any = function (featureID, newValue) {
            switch (featureID) {
            }
            _super.prototype.eSet_number_any.call(this, featureID, newValue);
        };
        return EParameterBase;
    }(ETypedElementImpl_1.ETypedElementImpl));
    exports.EParameterBase = EParameterBase;
});
//# sourceMappingURL=EParameterBase.js.map