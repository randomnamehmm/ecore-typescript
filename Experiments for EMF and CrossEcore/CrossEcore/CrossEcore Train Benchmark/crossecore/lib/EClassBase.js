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
define(["require", "exports", "./OrderedSet", "./EcorePackageLiterals", "./BasicEObjectImpl", "./EClassifierImpl"], function (require, exports, OrderedSet_1, EcorePackageLiterals_1, BasicEObjectImpl_1, EClassifierImpl_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var EClassBase = (function (_super) {
        __extends(EClassBase, _super);
        function EClassBase() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this._abstract = false;
            _this._interface = false;
            _this._eSuperTypes = null;
            _this._eOperations = null;
            _this._eStructuralFeatures = null;
            _this._eGenericSuperTypes = null;
            return _this;
        }
        Object.defineProperty(EClassBase.prototype, "abstract", {
            get: function () {
                return this._abstract;
            },
            set: function (value) {
                this._abstract = value;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(EClassBase.prototype, "interface", {
            get: function () {
                return this._interface;
            },
            set: function (value) {
                this._interface = value;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(EClassBase.prototype, "eSuperTypes", {
            get: function () {
                if (this._eSuperTypes === null) {
                    this._eSuperTypes = new OrderedSet_1.OrderedSet(this, EcorePackageLiterals_1.EcorePackageLiterals.ECLASS_ESUPERTYPES, BasicEObjectImpl_1.BasicEObjectImpl.EOPPOSITE_FEATURE_BASE - EcorePackageLiterals_1.EcorePackageLiterals.ECLASS_ESUPERTYPES);
                }
                return this._eSuperTypes;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(EClassBase.prototype, "eOperations", {
            get: function () {
                if (this._eOperations === null) {
                    this._eOperations = new OrderedSet_1.OrderedSet(this, EcorePackageLiterals_1.EcorePackageLiterals.ECLASS_EOPERATIONS, EcorePackageLiterals_1.EcorePackageLiterals.EOPERATION_ECONTAININGCLASS);
                }
                return this._eOperations;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(EClassBase.prototype, "eAllAttributes", {
            get: function () {
                //TODO implement derivation
                return null;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(EClassBase.prototype, "eAllReferences", {
            get: function () {
                //TODO implement derivation
                return null;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(EClassBase.prototype, "eReferences", {
            get: function () {
                //TODO implement derivation
                return null;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(EClassBase.prototype, "eAttributes", {
            get: function () {
                //TODO implement derivation
                return null;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(EClassBase.prototype, "eAllContainments", {
            get: function () {
                //TODO implement derivation
                return null;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(EClassBase.prototype, "eAllOperations", {
            get: function () {
                //TODO implement derivation
                return null;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(EClassBase.prototype, "eAllStructuralFeatures", {
            get: function () {
                //TODO implement derivation
                return null;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(EClassBase.prototype, "eAllSuperTypes", {
            get: function () {
                //TODO implement derivation
                return null;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(EClassBase.prototype, "eIDAttribute", {
            get: function () {
                //TODO implement derivation
                return null;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(EClassBase.prototype, "eStructuralFeatures", {
            get: function () {
                if (this._eStructuralFeatures === null) {
                    this._eStructuralFeatures = new OrderedSet_1.OrderedSet(this, EcorePackageLiterals_1.EcorePackageLiterals.ECLASS_ESTRUCTURALFEATURES, EcorePackageLiterals_1.EcorePackageLiterals.ESTRUCTURALFEATURE_ECONTAININGCLASS);
                }
                return this._eStructuralFeatures;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(EClassBase.prototype, "eGenericSuperTypes", {
            get: function () {
                if (this._eGenericSuperTypes === null) {
                    this._eGenericSuperTypes = new OrderedSet_1.OrderedSet(this, EcorePackageLiterals_1.EcorePackageLiterals.ECLASS_EGENERICSUPERTYPES, BasicEObjectImpl_1.BasicEObjectImpl.EOPPOSITE_FEATURE_BASE - EcorePackageLiterals_1.EcorePackageLiterals.ECLASS_EGENERICSUPERTYPES);
                }
                return this._eGenericSuperTypes;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(EClassBase.prototype, "eAllGenericSuperTypes", {
            get: function () {
                //TODO implement derivation
                return null;
            },
            enumerable: true,
            configurable: true
        });
        EClassBase.prototype.isSuperTypeOf = function (someClass) {
            /*TODO implement function*/
            return null;
        };
        ;
        EClassBase.prototype.getOverride = function (operation) {
            /*TODO implement function*/
            return null;
        };
        ;
        EClassBase.prototype.getFeatureType = function (feature) {
            /*TODO implement function*/
            return null;
        };
        ;
        EClassBase.prototype.getFeatureID = function (feature) {
            /*TODO implement function*/
            return null;
        };
        ;
        EClassBase.prototype.getFeatureCount = function () {
            /*TODO implement function*/
            return null;
        };
        ;
        EClassBase.prototype.getOperationID = function (operation) {
            /*TODO implement function*/
            return null;
        };
        ;
        EClassBase.prototype.getOperationCount = function () {
            /*TODO implement function*/
            return null;
        };
        ;
        EClassBase.prototype.getEStructuralFeature = function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            if (typeof args[0] === "number") {
                return this.getEStructuralFeature_number(args[0]);
            }
            if (typeof args[0] === "string") {
                return this.getEStructuralFeature_string(args[0]);
            }
        };
        ;
        EClassBase.prototype.getEStructuralFeature_number = function (featureID) {
            /*TODO implement function*/
            return null;
        };
        ;
        EClassBase.prototype.getEStructuralFeature_string = function (featureName) {
            /*TODO implement function*/
            return null;
        };
        ;
        EClassBase.prototype.getEOperation = function (operationID) {
            /*TODO implement function*/
            return null;
        };
        ;
        EClassBase.prototype.eStaticClass = function () {
            return EClassBase.eStaticClass;
        };
        EClassBase.prototype.eInverseAdd = function (otherEnd, featureID, msgs) {
            switch (featureID) {
                case EcorePackageLiterals_1.EcorePackageLiterals.ECLASS_EOPERATIONS:
                    return this.eOperations.basicAdd(otherEnd, msgs);
                case EcorePackageLiterals_1.EcorePackageLiterals.ECLASS_ESTRUCTURALFEATURES:
                    return this.eStructuralFeatures.basicAdd(otherEnd, msgs);
            }
            //return this.eInverseAddFromEClassifier(otherEnd, featureID, msgs);
            return _super.prototype.eInverseAdd.call(this, otherEnd, featureID, msgs);
        };
        //public eInverseAddFromEClass = this.eInverseAdd;
        EClassBase.prototype.eInverseRemove = function (otherEnd, featureID, msgs) {
            switch (featureID) {
                case EcorePackageLiterals_1.EcorePackageLiterals.ECLASS_EOPERATIONS:
                    return this.eOperations.basicRemove(otherEnd, msgs);
                case EcorePackageLiterals_1.EcorePackageLiterals.ECLASS_ESTRUCTURALFEATURES:
                    return this.eStructuralFeatures.basicRemove(otherEnd, msgs);
            }
            //return this.eInverseRemoveFromEClassifier(otherEnd, featureID, msgs);
            return _super.prototype.eInverseRemove.call(this, otherEnd, featureID, msgs);
        };
        //public eInverseRemoveFromEClass = this.eInverseRemove;
        EClassBase.prototype.eGet_number_boolean_boolean = function (featureID, resolve, coreType) {
            switch (featureID) {
                case EcorePackageLiterals_1.EcorePackageLiterals.ECLASS_EANNOTATIONS:
                    return this.eAnnotations;
                case EcorePackageLiterals_1.EcorePackageLiterals.ECLASS_NAME:
                    return this.name;
                case EcorePackageLiterals_1.EcorePackageLiterals.ECLASS_INSTANCECLASSNAME:
                    return this.instanceClassName;
                case EcorePackageLiterals_1.EcorePackageLiterals.ECLASS_INSTANCECLASS:
                    return this.instanceClass;
                case EcorePackageLiterals_1.EcorePackageLiterals.ECLASS_DEFAULTVALUE:
                    return this.defaultValue;
                case EcorePackageLiterals_1.EcorePackageLiterals.ECLASS_INSTANCETYPENAME:
                    return this.instanceTypeName;
                case EcorePackageLiterals_1.EcorePackageLiterals.ECLASS_EPACKAGE:
                    return this.ePackage;
                case EcorePackageLiterals_1.EcorePackageLiterals.ECLASS_ETYPEPARAMETERS:
                    return this.eTypeParameters;
                case EcorePackageLiterals_1.EcorePackageLiterals.ECLASS_ABSTRACT:
                    return this.abstract;
                case EcorePackageLiterals_1.EcorePackageLiterals.ECLASS_INTERFACE:
                    return this.interface;
                case EcorePackageLiterals_1.EcorePackageLiterals.ECLASS_ESUPERTYPES:
                    return this.eSuperTypes;
                case EcorePackageLiterals_1.EcorePackageLiterals.ECLASS_EOPERATIONS:
                    return this.eOperations;
                case EcorePackageLiterals_1.EcorePackageLiterals.ECLASS_EALLATTRIBUTES:
                    return this.eAllAttributes;
                case EcorePackageLiterals_1.EcorePackageLiterals.ECLASS_EALLREFERENCES:
                    return this.eAllReferences;
                case EcorePackageLiterals_1.EcorePackageLiterals.ECLASS_EREFERENCES:
                    return this.eReferences;
                case EcorePackageLiterals_1.EcorePackageLiterals.ECLASS_EATTRIBUTES:
                    return this.eAttributes;
                case EcorePackageLiterals_1.EcorePackageLiterals.ECLASS_EALLCONTAINMENTS:
                    return this.eAllContainments;
                case EcorePackageLiterals_1.EcorePackageLiterals.ECLASS_EALLOPERATIONS:
                    return this.eAllOperations;
                case EcorePackageLiterals_1.EcorePackageLiterals.ECLASS_EALLSTRUCTURALFEATURES:
                    return this.eAllStructuralFeatures;
                case EcorePackageLiterals_1.EcorePackageLiterals.ECLASS_EALLSUPERTYPES:
                    return this.eAllSuperTypes;
                case EcorePackageLiterals_1.EcorePackageLiterals.ECLASS_EIDATTRIBUTE:
                    return this.eIDAttribute;
                case EcorePackageLiterals_1.EcorePackageLiterals.ECLASS_ESTRUCTURALFEATURES:
                    return this.eStructuralFeatures;
                case EcorePackageLiterals_1.EcorePackageLiterals.ECLASS_EGENERICSUPERTYPES:
                    return this.eGenericSuperTypes;
                case EcorePackageLiterals_1.EcorePackageLiterals.ECLASS_EALLGENERICSUPERTYPES:
                    return this.eAllGenericSuperTypes;
            }
            //return this.eGetFromEClassifier(featureID, resolve, coreType);
            return _super.prototype.eGet.call(this, featureID, resolve, coreType);
        };
        EClassBase.prototype.eSet_number_any = function (featureID, newValue) {
            switch (featureID) {
                case EcorePackageLiterals_1.EcorePackageLiterals.ECLASS_ABSTRACT:
                    this.abstract = newValue;
                    return;
                case EcorePackageLiterals_1.EcorePackageLiterals.ECLASS_INTERFACE:
                    this.interface = newValue;
                    return;
                case EcorePackageLiterals_1.EcorePackageLiterals.ECLASS_ESUPERTYPES:
                    this.eSuperTypes.clear();
                    this.eSuperTypes.addAll(newValue);
                    return;
                case EcorePackageLiterals_1.EcorePackageLiterals.ECLASS_EOPERATIONS:
                    this.eOperations.clear();
                    this.eOperations.addAll(newValue);
                    return;
                case EcorePackageLiterals_1.EcorePackageLiterals.ECLASS_ESTRUCTURALFEATURES:
                    this.eStructuralFeatures.clear();
                    this.eStructuralFeatures.addAll(newValue);
                    return;
                case EcorePackageLiterals_1.EcorePackageLiterals.ECLASS_EGENERICSUPERTYPES:
                    this.eGenericSuperTypes.clear();
                    this.eGenericSuperTypes.addAll(newValue);
                    return;
            }
            _super.prototype.eSet_number_any.call(this, featureID, newValue);
        };
        return EClassBase;
    }(EClassifierImpl_1.EClassifierImpl));
    exports.EClassBase = EClassBase;
});
//# sourceMappingURL=EClassBase.js.map