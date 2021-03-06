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
define(["require", "exports", "./OrderedSet", "./ENotificationImpl", "./NotificationImpl", "./EStructuralFeatureImpl", "./EcorePackageLiterals", "./BasicEObjectImpl"], function (require, exports, OrderedSet_1, ENotificationImpl_1, NotificationImpl_1, EStructuralFeatureImpl_1, EcorePackageLiterals_1, BasicEObjectImpl_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var EReferenceBase = (function (_super) {
        __extends(EReferenceBase, _super);
        function EReferenceBase() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this._containment = false;
            _this._resolveProxies = false;
            _this._eOpposite = null;
            _this._eKeys = null;
            return _this;
        }
        Object.defineProperty(EReferenceBase.prototype, "containment", {
            get: function () {
                return this._containment;
            },
            set: function (value) {
                this._containment = value;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(EReferenceBase.prototype, "container", {
            get: function () {
                //TODO implement derivation
                return null;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(EReferenceBase.prototype, "resolveProxies", {
            get: function () {
                return this._resolveProxies;
            },
            set: function (value) {
                this._resolveProxies = value;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(EReferenceBase.prototype, "eOpposite", {
            get: function () {
                return this._eOpposite;
            },
            set: function (value) {
                var oldvalue = this._eOpposite;
                this._eOpposite = value;
                if (this.eNotificationRequired()) {
                    this.eNotify(new ENotificationImpl_1.ENotificationImpl(this, NotificationImpl_1.NotificationImpl.SET, EcorePackageLiterals_1.EcorePackageLiterals.EREFERENCE_EOPPOSITE, oldvalue, value));
                }
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(EReferenceBase.prototype, "eReferenceType", {
            get: function () {
                //TODO implement derivation
                return null;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(EReferenceBase.prototype, "eKeys", {
            get: function () {
                if (this._eKeys === null) {
                    this._eKeys = new OrderedSet_1.OrderedSet(this, EcorePackageLiterals_1.EcorePackageLiterals.EREFERENCE_EKEYS, BasicEObjectImpl_1.BasicEObjectImpl.EOPPOSITE_FEATURE_BASE - EcorePackageLiterals_1.EcorePackageLiterals.EREFERENCE_EKEYS);
                }
                return this._eKeys;
            },
            enumerable: true,
            configurable: true
        });
        EReferenceBase.prototype.eStaticClass = function () {
            return EReferenceBase.eStaticClass;
        };
        EReferenceBase.prototype.basicSetEOpposite = function (newobj, msgs) {
            var oldobj = this._eOpposite;
            this._eOpposite = newobj;
            if (this.eNotificationRequired()) {
                var notification = new ENotificationImpl_1.ENotificationImpl(this, NotificationImpl_1.NotificationImpl.SET, EcorePackageLiterals_1.EcorePackageLiterals.EREFERENCE_EOPPOSITE, oldobj, newobj);
                if (msgs == null) {
                    msgs = notification;
                }
                else {
                    msgs.add(notification);
                }
            }
            return msgs;
        };
        EReferenceBase.prototype.eGet_number_boolean_boolean = function (featureID, resolve, coreType) {
            switch (featureID) {
                case EcorePackageLiterals_1.EcorePackageLiterals.EREFERENCE_EANNOTATIONS:
                    return this.eAnnotations;
                case EcorePackageLiterals_1.EcorePackageLiterals.EREFERENCE_NAME:
                    return this.name;
                case EcorePackageLiterals_1.EcorePackageLiterals.EREFERENCE_ORDERED:
                    return this.ordered;
                case EcorePackageLiterals_1.EcorePackageLiterals.EREFERENCE_UNIQUE:
                    return this.unique;
                case EcorePackageLiterals_1.EcorePackageLiterals.EREFERENCE_LOWERBOUND:
                    return this.lowerBound;
                case EcorePackageLiterals_1.EcorePackageLiterals.EREFERENCE_UPPERBOUND:
                    return this.upperBound;
                case EcorePackageLiterals_1.EcorePackageLiterals.EREFERENCE_MANY:
                    return this.many;
                case EcorePackageLiterals_1.EcorePackageLiterals.EREFERENCE_REQUIRED:
                    return this.required;
                case EcorePackageLiterals_1.EcorePackageLiterals.EREFERENCE_ETYPE:
                    return this.eType;
                case EcorePackageLiterals_1.EcorePackageLiterals.EREFERENCE_EGENERICTYPE:
                    return this.eGenericType;
                case EcorePackageLiterals_1.EcorePackageLiterals.EREFERENCE_CHANGEABLE:
                    return this.changeable;
                case EcorePackageLiterals_1.EcorePackageLiterals.EREFERENCE_VOLATILE:
                    return this.volatile;
                case EcorePackageLiterals_1.EcorePackageLiterals.EREFERENCE_TRANSIENT:
                    return this.transient;
                case EcorePackageLiterals_1.EcorePackageLiterals.EREFERENCE_DEFAULTVALUELITERAL:
                    return this.defaultValueLiteral;
                case EcorePackageLiterals_1.EcorePackageLiterals.EREFERENCE_DEFAULTVALUE:
                    return this.defaultValue;
                case EcorePackageLiterals_1.EcorePackageLiterals.EREFERENCE_UNSETTABLE:
                    return this.unsettable;
                case EcorePackageLiterals_1.EcorePackageLiterals.EREFERENCE_DERIVED:
                    return this.derived;
                case EcorePackageLiterals_1.EcorePackageLiterals.EREFERENCE_ECONTAININGCLASS:
                    return this.eContainingClass;
                case EcorePackageLiterals_1.EcorePackageLiterals.EREFERENCE_CONTAINMENT:
                    return this.containment;
                case EcorePackageLiterals_1.EcorePackageLiterals.EREFERENCE_CONTAINER:
                    return this.container;
                case EcorePackageLiterals_1.EcorePackageLiterals.EREFERENCE_RESOLVEPROXIES:
                    return this.resolveProxies;
                case EcorePackageLiterals_1.EcorePackageLiterals.EREFERENCE_EOPPOSITE:
                    return this.eOpposite;
                case EcorePackageLiterals_1.EcorePackageLiterals.EREFERENCE_EREFERENCETYPE:
                    return this.eReferenceType;
                case EcorePackageLiterals_1.EcorePackageLiterals.EREFERENCE_EKEYS:
                    return this.eKeys;
            }
            //return this.eGetFromEStructuralFeature(featureID, resolve, coreType);
            return _super.prototype.eGet.call(this, featureID, resolve, coreType);
        };
        EReferenceBase.prototype.eSet_number_any = function (featureID, newValue) {
            switch (featureID) {
                case EcorePackageLiterals_1.EcorePackageLiterals.EREFERENCE_CONTAINMENT:
                    this.containment = newValue;
                    return;
                case EcorePackageLiterals_1.EcorePackageLiterals.EREFERENCE_RESOLVEPROXIES:
                    this.resolveProxies = newValue;
                    return;
                case EcorePackageLiterals_1.EcorePackageLiterals.EREFERENCE_EOPPOSITE:
                    this.eOpposite = newValue;
                    return;
                case EcorePackageLiterals_1.EcorePackageLiterals.EREFERENCE_EKEYS:
                    this.eKeys.clear();
                    this.eKeys.addAll(newValue);
                    return;
            }
            _super.prototype.eSet_number_any.call(this, featureID, newValue);
        };
        return EReferenceBase;
    }(EStructuralFeatureImpl_1.EStructuralFeatureImpl));
    exports.EReferenceBase = EReferenceBase;
});
//# sourceMappingURL=EReferenceBase.js.map