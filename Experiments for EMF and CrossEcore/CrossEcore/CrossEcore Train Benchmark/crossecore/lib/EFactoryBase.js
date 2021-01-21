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
define(["require", "exports", "./ENotificationImpl", "./NotificationImpl", "./EcorePackageLiterals", "./EModelElementImpl"], function (require, exports, ENotificationImpl_1, NotificationImpl_1, EcorePackageLiterals_1, EModelElementImpl_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var EFactoryBase = (function (_super) {
        __extends(EFactoryBase, _super);
        function EFactoryBase() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this._ePackage = null;
            return _this;
        }
        Object.defineProperty(EFactoryBase.prototype, "ePackage", {
            get: function () {
                return this._ePackage;
            },
            set: function (value) {
                if (value != this._ePackage) {
                    var msgs = null;
                    if (this._ePackage != null) {
                        msgs = (this._ePackage).eInverseRemove(this, EcorePackageLiterals_1.EcorePackageLiterals.EPACKAGE_EFACTORYINSTANCE, /*EFactory*/ null, msgs);
                    }
                    if (value != null) {
                        msgs = value.eInverseAdd(this, EcorePackageLiterals_1.EcorePackageLiterals.EPACKAGE_EFACTORYINSTANCE, /*EFactory*/ null, msgs);
                    }
                    msgs = this.basicSetEPackage(value, msgs);
                    if (msgs != null) {
                        msgs.dispatch();
                    }
                }
                else if (this.eNotificationRequired()) {
                    this.eNotify(new ENotificationImpl_1.ENotificationImpl(this, NotificationImpl_1.NotificationImpl.SET, EcorePackageLiterals_1.EcorePackageLiterals.EFACTORY_EPACKAGE, value, value));
                }
            },
            enumerable: true,
            configurable: true
        });
        EFactoryBase.prototype.createFromString = function (eDataType, literalValue) {
            /*TODO implement function*/
            return null;
        };
        ;
        EFactoryBase.prototype.create = function (eClass) {
            /*TODO implement function*/
            return null;
        };
        ;
        EFactoryBase.prototype.convertToString = function (eDataType, instanceValue) {
            /*TODO implement function*/
            return null;
        };
        ;
        EFactoryBase.prototype.eStaticClass = function () {
            return EFactoryBase.eStaticClass;
        };
        EFactoryBase.prototype.eInverseAdd = function (otherEnd, featureID, msgs) {
            switch (featureID) {
                case EcorePackageLiterals_1.EcorePackageLiterals.EFACTORY_EPACKAGE:
                    if (this._ePackage != null) {
                        msgs = this._ePackage.eInverseRemove(this, EcorePackageLiterals_1.EcorePackageLiterals.EFACTORY_EPACKAGE, /*EPackage*/ null, msgs);
                    }
                    return this.basicSetEPackage(otherEnd, msgs);
            }
            //return this.eInverseAddFromEModelElement(otherEnd, featureID, msgs);
            return _super.prototype.eInverseAdd.call(this, otherEnd, featureID, msgs);
        };
        //public eInverseAddFromEFactory = this.eInverseAdd;
        EFactoryBase.prototype.eInverseRemove = function (otherEnd, featureID, msgs) {
            switch (featureID) {
                case EcorePackageLiterals_1.EcorePackageLiterals.EFACTORY_EPACKAGE:
                    return this.basicSetEPackage(null, msgs);
            }
            //return this.eInverseRemoveFromEModelElement(otherEnd, featureID, msgs);
            return _super.prototype.eInverseRemove.call(this, otherEnd, featureID, msgs);
        };
        //public eInverseRemoveFromEFactory = this.eInverseRemove;
        EFactoryBase.prototype.basicSetEPackage = function (newobj, msgs) {
            var oldobj = this._ePackage;
            this._ePackage = newobj;
            if (this.eNotificationRequired()) {
                var notification = new ENotificationImpl_1.ENotificationImpl(this, NotificationImpl_1.NotificationImpl.SET, EcorePackageLiterals_1.EcorePackageLiterals.EFACTORY_EPACKAGE, oldobj, newobj);
                if (msgs == null) {
                    msgs = notification;
                }
                else {
                    msgs.add(notification);
                }
            }
            return msgs;
        };
        EFactoryBase.prototype.eGet_number_boolean_boolean = function (featureID, resolve, coreType) {
            switch (featureID) {
                case EcorePackageLiterals_1.EcorePackageLiterals.EFACTORY_EANNOTATIONS:
                    return this.eAnnotations;
                case EcorePackageLiterals_1.EcorePackageLiterals.EFACTORY_EPACKAGE:
                    return this.ePackage;
            }
            //return this.eGetFromEModelElement(featureID, resolve, coreType);
            return _super.prototype.eGet.call(this, featureID, resolve, coreType);
        };
        EFactoryBase.prototype.eSet_number_any = function (featureID, newValue) {
            switch (featureID) {
                case EcorePackageLiterals_1.EcorePackageLiterals.EFACTORY_EPACKAGE:
                    this.ePackage = newValue;
                    return;
            }
            _super.prototype.eSet_number_any.call(this, featureID, newValue);
        };
        return EFactoryBase;
    }(EModelElementImpl_1.EModelElementImpl));
    exports.EFactoryBase = EFactoryBase;
});
//# sourceMappingURL=EFactoryBase.js.map