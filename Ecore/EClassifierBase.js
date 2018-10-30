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
import { ENamedElementImpl } from "ecore/ENamedElementImpl";
import { BasicEObjectImpl } from "ecore/BasicEObjectImpl";
import { OrderedSet } from "ecore/OrderedSet";
import { EcorePackageLiterals } from "ecore/EcorePackageLiterals";
///<summary>This class was generated.</summary>
var EClassifierBase = (function (_super) {
    __extends(EClassifierBase, _super);
    function EClassifierBase() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._instanceTypeName = "";
        _this._instanceClassName = "";
        _this._eTypeParameters = null;
        return _this;
        //public eGetFromEClassifier = this.eGet;
    }
    Object.defineProperty(EClassifierBase.prototype, "instanceTypeName", {
        get: function () {
            return this._instanceTypeName;
        },
        set: function (value) {
            this._instanceTypeName = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EClassifierBase.prototype, "instanceClass", {
        get: function () {
            //TODO implement derivation
            return null;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EClassifierBase.prototype, "instanceClassName", {
        get: function () {
            return this._instanceClassName;
        },
        set: function (value) {
            this._instanceClassName = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EClassifierBase.prototype, "defaultValue", {
        get: function () {
            //TODO implement derivation
            return null;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EClassifierBase.prototype, "ePackage", {
        get: function () {
            if (this.eContainerFeatureID() != EcorePackageLiterals.ECLASSIFIER_EPACKAGE)
                return null;
            return this.eInternalContainer();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EClassifierBase.prototype, "eTypeParameters", {
        get: function () {
            if (this._eTypeParameters === null) {
                this._eTypeParameters = new OrderedSet(this, EcorePackageLiterals.ECLASSIFIER_ETYPEPARAMETERS, BasicEObjectImpl.EOPPOSITE_FEATURE_BASE - EcorePackageLiterals.ECLASSIFIER_ETYPEPARAMETERS);
            }
            return this._eTypeParameters;
        },
        enumerable: true,
        configurable: true
    });
    EClassifierBase.prototype.isInstance = function (object) {
        /*TODO implement function*/
        return null;
    };
    ;
    EClassifierBase.prototype.getEAnnotation = function (source) {
        /*TODO implement function*/
        return null;
    };
    ;
    EClassifierBase.prototype.getClassifierID = function () {
        /*TODO implement function*/
        return null;
    };
    ;
    EClassifierBase.prototype.eStaticClass = function () {
        //return EcorePackageLiterals.ECLASSIFIER;
        return null;
    };
    EClassifierBase.prototype.eInverseAdd = function (otherEnd, featureID, msgs) {
        switch (featureID) {
            case EcorePackageLiterals.ECLASSIFIER_EPACKAGE:
                if (this.eInternalContainer() != null) {
                    msgs = this.eBasicRemoveFromContainer(msgs);
                }
                return this.basicSetEPackage(otherEnd, msgs);
        }
        //return this.eInverseAddFromENamedElement(otherEnd, featureID, msgs);
        return _super.prototype.eInverseAdd.call(this, otherEnd, featureID, msgs);
    };
    //public eInverseAddFromEClassifier = this.eInverseAdd;
    EClassifierBase.prototype.eInverseRemove = function (otherEnd, featureID, msgs) {
        switch (featureID) {
            case EcorePackageLiterals.ECLASSIFIER_EPACKAGE:
                return this.basicSetEPackage(null, msgs);
        }
        //return this.eInverseRemoveFromENamedElement(otherEnd, featureID, msgs);
        return _super.prototype.eInverseRemove.call(this, otherEnd, featureID, msgs);
    };
    //public eInverseRemoveFromEClassifier = this.eInverseRemove;
    EClassifierBase.prototype.basicSetEPackage = function (newobj, msgs) {
        msgs = this.eBasicSetContainer(newobj, EcorePackageLiterals.ECLASSIFIER_EPACKAGE, msgs);
        return msgs;
    };
    EClassifierBase.prototype.eGet = function (featureID, resolve, coreType) {
        switch (featureID) {
            case EcorePackageLiterals.ECLASSIFIER_EANNOTATIONS:
                return this.eAnnotations;
            case EcorePackageLiterals.ECLASSIFIER_NAME:
                return this.name;
            case EcorePackageLiterals.ECLASSIFIER_INSTANCECLASSNAME:
                return this.instanceClassName;
            case EcorePackageLiterals.ECLASSIFIER_INSTANCECLASS:
                return this.instanceClass;
            case EcorePackageLiterals.ECLASSIFIER_DEFAULTVALUE:
                return this.defaultValue;
            case EcorePackageLiterals.ECLASSIFIER_INSTANCETYPENAME:
                return this.instanceTypeName;
            case EcorePackageLiterals.ECLASSIFIER_EPACKAGE:
                return this.ePackage;
            case EcorePackageLiterals.ECLASSIFIER_ETYPEPARAMETERS:
                return this.eTypeParameters;
        }
        //return this.eGetFromENamedElement(featureID, resolve, coreType);
        return _super.prototype.eGet.call(this, featureID, resolve, coreType);
    };
    return EClassifierBase;
}(ENamedElementImpl));
export { EClassifierBase };
