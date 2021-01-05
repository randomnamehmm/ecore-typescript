var lib =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/app.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/crossecore/src/AbstractCollection.ts":
/*!***********************************************************!*\
  !*** ./node_modules/crossecore/src/AbstractCollection.ts ***!
  \***********************************************************/
/*! exports provided: AbstractCollection */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AbstractCollection", function() { return AbstractCollection; });
/* harmony import */ var _ArrayList__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ArrayList */ "./node_modules/crossecore/src/ArrayList.ts");
/* harmony import */ var _NotificationImpl__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./NotificationImpl */ "./node_modules/crossecore/src/NotificationImpl.ts");
/* harmony import */ var _ENotificationImpl__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ENotificationImpl */ "./node_modules/crossecore/src/ENotificationImpl.ts");
/* CrossEcore is a cross-platform modeling framework that generates C#, TypeScript,
 * JavaScript, Swift code from Ecore models with embedded OCL (http://www.crossecore.org/).
 * The original Eclipse Modeling Framework is available at https://www.eclipse.org/modeling/emf/.
 *
 * contributor: Simon Schwichtenberg
 */
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();



var AbstractCollection = /** @class */ (function (_super) {
    __extends(AbstractCollection, _super);
    //protected internalCollection:ArrayList<T>;
    /*
    constructor(owner:InternalEObject ,  featureId:number)
    {

        super( owner, featureId, AbstractCollection.NO_FEATURE)
    }
    */
    function AbstractCollection(owner, featureId, oppositeFeatureId) {
        var _this = _super.call(this) || this;
        _this.featureId = AbstractCollection.NO_FEATURE;
        _this.oppositeFeatureId = AbstractCollection.NO_FEATURE;
        _this.createNotification = function (eventType, oldValue, newValue, index, wasSet) {
            return new _ENotificationImpl__WEBPACK_IMPORTED_MODULE_2__["ENotificationImpl"](_this.owner, eventType, _this.featureId, oldValue, newValue);
        };
        //protected isUnique:boolean = true;
        _this.isUnique = function () {
            return false;
        };
        //Base functions START
        /*
         public new void Add(T element)
         {
         add(element);
         }
         */
        _this.add = function (element) {
            if (_this.isUnique() && _this.containsX(element)) {
                return false;
            }
            else {
                _this.addUnique(element);
                return true;
            }
        };
        _this.addAll = function (collection) {
            for (var _i = 0, collection_1 = collection; _i < collection_1.length; _i++) {
                var item = collection_1[_i];
                _this.add(item); //TODO push or add?
            }
            return true; //TODO
        };
        _this.remove = function (item) {
            if (_this.containsX(item)) {
                _this.remove_(item);
                return true;
            }
            else {
                return false;
            }
        };
        _this.remove_ = function (element) {
            if (_this.isNotificationRequired()) {
                var notifications = null;
                //bool oldIsSet = isSet();
                var oldIsSet = _this.size() != 0;
                /*
                 if (hasShadow())
                 {
                 notifications = shadowRemove(basicGet(index), null);
                 }
                 */
                _this.removeX(element);
                var oldObject = element;
                //TODO determine index if possible
                var index = 1000;
                var notification = _this.createNotification(_NotificationImpl__WEBPACK_IMPORTED_MODULE_1__["NotificationImpl"].REMOVE, oldObject, null, index, oldIsSet);
                if (_this.hasInverse() && oldObject != null) {
                    notifications = _this.inverseRemove(oldObject, notifications);
                    if (notifications == null) {
                        _this.dispatchNotification(notification);
                    }
                    else {
                        notifications.add(notification);
                        notifications.dispatch();
                    }
                }
                else {
                    if (notifications == null) {
                        _this.dispatchNotification(notification);
                    }
                    else {
                        notifications.add(notification);
                        notifications.dispatch();
                    }
                }
                return oldObject;
            }
            else {
                _this.removeX(element);
                var oldObject = element;
                if (_this.hasInverse() && oldObject != null) {
                    var notifications = _this.inverseRemove(oldObject, null);
                    if (notifications != null)
                        notifications.dispatch();
                }
                return oldObject;
            }
        };
        //Base functions END
        //EcoreEList START
        _this.isNotificationRequired = function () {
            if (_this.owner != null) {
                return _this.owner.eNotificationRequired();
            }
            return false;
        };
        _this.basicAdd = function (element, notifications) {
            if (_this.isNotificationRequired()) {
                var index = _this.length;
                var oldIsSet = _this.length > 0; // isSet();
                //doAddUnique(index, object);
                _this.push(element);
                var notification = _this.createNotification(_NotificationImpl__WEBPACK_IMPORTED_MODULE_1__["NotificationImpl"].ADD, null, element, index, oldIsSet);
                if (notifications == null) {
                    notifications = notification;
                }
                else {
                    notifications.add(notification);
                }
            }
            else {
                _this.push(element);
            }
            return notifications;
        };
        _this.basicRemove = function (element, notifications) {
            //int index = indexOf(object);
            //if (index != -1)
            if (_this.containsX(element)) {
                if (_this.isNotificationRequired()) {
                    //bool oldIsSet = isSet();
                    var oldIsSet = _this.size() != 0;
                    //Object oldObject = doRemove(index);
                    var oldObject = element;
                    //TODO fix me:
                    var index = 1000;
                    _this.removeX(element);
                    var notification = _this.createNotification(_NotificationImpl__WEBPACK_IMPORTED_MODULE_1__["NotificationImpl"].REMOVE, oldObject, null, index, oldIsSet);
                    if (notifications == null) {
                        notifications = notification;
                    }
                    else {
                        notifications.add(notification);
                    }
                }
                else {
                    //doRemove(index);
                    _this.removeX(element);
                }
            }
            return notifications;
        };
        _this.inverseAdd = function (element, notifications) {
            //Double assertions: see https://basarat.gitbooks.io/typescript/content/docs/types/type-assertion.html
            var internalEObject = element;
            if (_this.hasNavigableInverse()) {
                if (!_this.hasInstanceClass()) {
                    return internalEObject.eInverseAdd(_this.owner, internalEObject.eClass().getFeatureID(_this.getInverseEReference()), null, notifications);
                }
                else {
                    return internalEObject.eInverseAdd(_this.owner, _this.oppositeFeatureId, _this.getInverseFeatureClass(), notifications);
                }
            }
            else {
                return internalEObject.eInverseAdd(_this.owner, AbstractCollection.EOPPOSITE_FEATURE_BASE - _this.featureId, null, notifications);
            }
        };
        _this.inverseRemove = function (element, notifications) {
            var internalEObject = element;
            if (_this.hasNavigableInverse()) {
                if (!_this.hasInstanceClass()) {
                    return internalEObject.eInverseRemove(_this.owner, internalEObject.eClass().getFeatureID(_this.getInverseEReference()), null, notifications);
                }
                else {
                    return internalEObject.eInverseRemove(_this.owner, _this.oppositeFeatureId, _this.getInverseFeatureClass(), notifications);
                }
            }
            else {
                return internalEObject.eInverseRemove(_this.owner, AbstractCollection.EOPPOSITE_FEATURE_BASE - _this.featureId, null, notifications);
            }
        };
        _this.hasNavigableInverse = function () {
            return _this.oppositeFeatureId >= 0;
        };
        _this.hasInstanceClass = function () {
            //from EcoreEList, needed for generics
            return true;
        };
        _this.hasInverse = function () {
            return _this.oppositeFeatureId != AbstractCollection.NO_FEATURE;
            /*
             try
             {
             //non-navigable inverse is the containment feature
             var eclass = _owner.eClass();
             var estructuralfeatures = eclass.eStructuralFeatures;
    
             var ereference = _owner.eClass().getEStructuralFeature(_featureId) as EReference;
    
             return ereference.eOpposite.containment;
             }
             catch (NullReferenceException e)
             {
             return false;
             }
             */
        };
        _this.getEStructuralFeature = function () {
            //from EcoreEList
            //return owner.eClass().getEStructuralFeature(getFeatureID());
            return _this.owner.eClass().getEStructuralFeature(_this.featureId);
        };
        _this.getInverseEReference = function () {
            //from EcoreEList
            //return ((EReference)getEStructuralFeature()).getEOpposite();
            return _this.getEStructuralFeature().eOpposite;
        };
        _this.getInverseFeatureClass = function () {
            //from EcoreEList
            //return ((EClass)getEStructuralFeature().getEType()).getInstanceClass();
            //TODO fix
            //return ((EClass)getEStructuralFeature().eType).instanceClass;
            return null;
        };
        _this.dispatchNotification = function (notification) {
            //from EcoreElist
            _this.owner.eNotify(notification);
        };
        _this.addUnique = function (element) {
            if (_this.isNotificationRequired()) {
                //int index = size;
                var index = _this.size();
                //boolean oldIsSet = isSet();
                var oldIsSet = _this.notEmpty();
                //doAddUnique(object);
                _this.addX(element);
                var notification = _this.createNotification(_NotificationImpl__WEBPACK_IMPORTED_MODULE_1__["NotificationImpl"].ADD, null, element, index, oldIsSet);
                if (_this.hasInverse()) {
                    var notifications = _this.inverseAdd(element, null);
                    /*
                     if (hasShadow())
                     {
                     notifications = shadowAdd(object, notifications);
                     }
                     */
                    if (notifications == null) {
                        _this.dispatchNotification(notification);
                    }
                    else {
                        notifications.add(notification);
                        notifications.dispatch();
                    }
                }
                else {
                    _this.dispatchNotification(notification);
                }
            }
            else {
                //doAddUnique(object);
                _this.addX(element);
                if (_this.hasInverse()) {
                    var notifications = _this.inverseAdd(element, null);
                    if (notifications != null) {
                        notifications.dispatch();
                    }
                }
            }
        };
        //EcoreEList END
        //OCL START
        _this.sortedBy = function (lambda) {
            new Error("NotImplemented");
        };
        /*
        public Collection<T2> flatten<T2> = ()=>
        {
    
            var result = new Set<T2>();
    
            for (let element:any in internalCollection)
            {
                if (element instanceof Collection<T2>)
                {
    
                    var subcollection = <Collection<T2>> element;
                    for (let e:T2 of subcollection.flatten<T2>().asSet())
                    {
                        result.add(e);
                    }
    
                }
            else if (element instanceof T2)
                {
                    var e = <T2>element;
                    result.add(e);
    
                }
            }
    
            return result;
    
        }
        */
        _this.equals = function (c) {
            throw new Error("operation not implemented");
        };
        _this.notEquals = function (c) {
            return !_this.equals(c);
        };
        _this.size = function () {
            return _this.length;
        };
        /* Already defined in Array.prototype
         public includes = (element:T):boolean=>{

         return this.indexOf(element)!==-1;
         }
         */
        //FIXME
        _this.includes___ = function (element) {
            return _this.containsX(element);
        };
        _this.excludes = function (element) {
            return !_this.containsX(element);
        };
        _this.count = function (element) {
            throw new Error("operation not implemented");
        };
        _this.includesAll = function (c) {
            throw new Error("operation not implemented");
        };
        _this.excludesAll = function (c) {
            throw new Error("operation not implemented");
        };
        _this.isEmpty = function () {
            return _this.length === 0;
        };
        _this.notEmpty = function () {
            return _this.length > 0;
        };
        _this.max = function () {
            throw new Error("operation not implemented");
        };
        _this.min = function () {
            throw new Error("operation not implemented");
        };
        _this.sum = function () {
            throw new Error("operation not implemented");
        };
        _this.any = function (lambda) {
            //TODO nullpointer
            return _this.filter(lambda)[0];
        };
        _this.exists = function (lambda) {
            return _this.some(lambda);
        };
        _this.forAll = function (lambda) {
            return _this.every(lambda);
        };
        _this.owner = owner !== undefined ? owner : null;
        _this.featureId = featureId !== undefined ? featureId : AbstractCollection.NO_FEATURE;
        _this.oppositeFeatureId = oppositeFeatureId !== undefined ? oppositeFeatureId : AbstractCollection.NO_FEATURE;
        return _this;
        //this.internalCollection = new ArrayList<T>();
    }
    AbstractCollection.EOPPOSITE_FEATURE_BASE = -1;
    AbstractCollection.NO_FEATURE = Number.MIN_VALUE;
    return AbstractCollection;
}(_ArrayList__WEBPACK_IMPORTED_MODULE_0__["ArrayList"]));

//}


/***/ }),

/***/ "./node_modules/crossecore/src/AllInstances.ts":
/*!*****************************************************!*\
  !*** ./node_modules/crossecore/src/AllInstances.ts ***!
  \*****************************************************/
/*! exports provided: AllInstances */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AllInstances", function() { return AllInstances; });
/* harmony import */ var _EClassImpl__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./EClassImpl */ "./node_modules/crossecore/src/EClassImpl.ts");
/* CrossEcore is a cross-platform modeling framework that generates C#, TypeScript,
 * JavaScript, Swift code from Ecore models with embedded OCL (http://www.crossecore.org/).
 * The original Eclipse Modeling Framework is available at https://www.eclipse.org/modeling/emf/.
 *
 * contributor: Simon Schwichtenberg
 */

var AllInstances = /** @class */ (function () {
    function AllInstances() {
        this.instances = new Map();
        this.subclasses = new Map();
    }
    AllInstances.prototype.put = function (i, classname) {
        var list;
        if (this.instances.has(classname)) {
            list = this.instances.get(classname);
        }
        else {
            list = new Array();
        }
        list.push(i);
        this.instances.set(classname, list);
    };
    AllInstances.prototype.allInstances = function (eclass) {
        var result = new Array();
        if (this.subclasses.size === 0) {
            for (var _i = 0, _a = eclass.ePackage.eClassifiers; _i < _a.length; _i++) {
                var eclassifier = _a[_i];
                if (eclassifier instanceof _EClassImpl__WEBPACK_IMPORTED_MODULE_0__["EClassImpl"]) {
                    if (!this.subclasses.has(eclassifier)) {
                        this.subclasses.set(eclassifier, new Array());
                    }
                    for (var _b = 0, _c = eclassifier.eSuperTypes; _b < _c.length; _b++) {
                        var supertype = _c[_b];
                        if (!this.subclasses.has(supertype)) {
                            this.subclasses.set(supertype, new Array());
                        }
                        var list = this.subclasses.get(supertype);
                        list.push(eclassifier);
                        this.subclasses.set(supertype, list);
                    }
                }
            }
        }
        console.log("here " + this.subclasses.size);
        var queue = new Array(); //this.subclasses.get(eclass);
        queue.push(eclass);
        do {
            var next = queue.shift();
            if (this.instances.has(next.name)) {
                console.log(next.name + ": " + this.instances.get(next.name).length);
                for (var _d = 0, _e = this.instances.get(next.name); _d < _e.length; _d++) {
                    var y = _e[_d];
                    result.push(y);
                }
            }
            if (this.subclasses.has(next)) {
                for (var _f = 0, _g = this.subclasses.get(next); _f < _g.length; _f++) {
                    var subclass = _g[_f];
                    if (subclass instanceof _EClassImpl__WEBPACK_IMPORTED_MODULE_0__["EClassImpl"]) {
                        queue.push(subclass);
                    }
                }
            }
        } while (queue.length > 0);
        return result;
    };
    AllInstances.INSTANCE = new AllInstances();
    return AllInstances;
}());



/***/ }),

/***/ "./node_modules/crossecore/src/ArrayList.ts":
/*!**************************************************!*\
  !*** ./node_modules/crossecore/src/ArrayList.ts ***!
  \**************************************************/
/*! exports provided: ArrayList */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArrayList", function() { return ArrayList; });
/* CrossEcore is a cross-platform modeling framework that generates C#, TypeScript,
 * JavaScript, Swift code from Ecore models with embedded OCL (http://www.crossecore.org/).
 * The original Eclipse Modeling Framework is available at https://www.eclipse.org/modeling/emf/.
 *
 * contributor: Simon Schwichtenberg
 */
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var ArrayList = /** @class */ (function (_super) {
    __extends(ArrayList, _super);
    function ArrayList() {
        /*
        private array:Array<T> = new Array<T>();
    
        get length():number{
            return this.array.length;
        }
    
        public push = (element:T):void=>{
            this.array.push(element);
        }
    
        public filter = (lambda):T[]=>{
            //TODO set type of lambda
            return this.array.filter(lambda);
        }
    
        public every = (lambda):boolean=>{
            //TODO set type of lambda
            return this.array.every(lambda);
        }
    
        public some = (lambda):boolean=>{
            //TODO set type of lambda
            return this.array.some(lambda);
        }
        */
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.containsX = function (element) {
            return _this.indexOf(element) > -1;
        };
        _this.sizeX = function () {
            return _this.length;
        };
        _this.addX = function (element) {
            _this.push(element);
            return true;
        };
        _this.removeX = function (element) {
            var index = _this.indexOf(element);
            if (index > -1) {
                _this.splice(index, 1);
                return true;
            }
            return false;
        };
        _this.isEmptyX = function () {
            return _this.length === 0;
        };
        _this.clear = function () {
            _this.splice(0, _this.length);
        };
        return _this;
    }
    return ArrayList;
}(Array));



/***/ }),

/***/ "./node_modules/crossecore/src/BasicEObjectImpl.ts":
/*!*********************************************************!*\
  !*** ./node_modules/crossecore/src/BasicEObjectImpl.ts ***!
  \*********************************************************/
/*! exports provided: BasicEObjectImpl */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BasicEObjectImpl", function() { return BasicEObjectImpl; });
/* harmony import */ var _BasicNotifierImpl__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./BasicNotifierImpl */ "./node_modules/crossecore/src/BasicNotifierImpl.ts");
/* harmony import */ var _OrderedSet__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./OrderedSet */ "./node_modules/crossecore/src/OrderedSet.ts");
/* CrossEcore is a cross-platform modeling framework that generates C#, TypeScript,
 * JavaScript, Swift code from Ecore models with embedded OCL (http://www.crossecore.org/).
 * The original Eclipse Modeling Framework is available at https://www.eclipse.org/modeling/emf/.
 *
 * contributor: Simon Schwichtenberg
 */
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();


var BasicEObjectImpl = /** @class */ (function (_super) {
    __extends(BasicEObjectImpl, _super);
    function BasicEObjectImpl() {
        var _this = _super.call(this) || this;
        _this._eContainer = null;
        _this._eContainerFeatureID = -1;
        _this._eStaticClass = null;
        _this._uuid = BasicEObjectImpl.generateUUID();
        return _this;
    }
    BasicEObjectImpl.prototype.eBasicSetContainer = function (newContainer, newContainerFeatureID, notifications) {
        this.eBasicSetContainer_(newContainer, newContainerFeatureID);
        return notifications;
    };
    //TODO fix quickfix for overloading
    BasicEObjectImpl.prototype.eBasicSetContainer_ = function (newContainer, newContainerFeatureID) {
        this._eContainer = newContainer;
        this._eContainerFeatureID = newContainerFeatureID;
    };
    BasicEObjectImpl.prototype.eInternalContainer = function () {
        return this._eContainer;
    };
    BasicEObjectImpl.prototype.eContainerFeatureID = function () {
        return this._eContainerFeatureID;
    };
    BasicEObjectImpl.prototype.eBasicRemoveFromContainer = function (notifications) {
        return notifications;
    };
    BasicEObjectImpl.prototype.eGet = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        if (args.length === 1) {
            return this.eGet_EStructuralFeature(args[0]);
        }
        else if (args.length === 2) {
            return this.eGet_EStructuralFeature_boolean(args[0], args[1]);
        }
        else if (args.length === 3) {
            if (typeof args[0] === "number" &&
                typeof args[1] === "boolean" &&
                typeof args[2] === "boolean") {
                return this.eGet_number_boolean_boolean(args[0], args[1], args[2]);
            }
            else {
                return this.eGet_EStructuralFeature_boolean_boolean(args[0], args[1], args[2]);
            }
        }
    };
    BasicEObjectImpl.prototype.eGet_EStructuralFeature_boolean_boolean = function (feature, resolve, coreType) {
        var featureID = this.eDerivedStructuralFeatureID_EStructuralFeature(feature);
        /*
         if (featureID >= 0)
         {
         */
        return this.eGet(featureID, resolve, coreType);
        /*
         }
         else
         {
         return eOpenGet(eFeature, resolve);
         }
         */
    };
    BasicEObjectImpl.prototype.eGet_number_boolean_boolean = function (featureID, resolve, coreType) {
        var eFeature = this.eClass().getEStructuralFeature(featureID);
        return eFeature;
    };
    BasicEObjectImpl.prototype.eDerivedStructuralFeatureID_EStructuralFeature = function (eStructuralFeature) {
        var containerClass = eStructuralFeature.getContainerClass();
        /*
         Class <?> containerClass = eStructuralFeature.getContainerClass();
         if (containerClass == null)
         {
         return eClass().getFeatureID(eStructuralFeature);
         }
         else
         {
         assert eClass().getEAllStructuralFeatures().contains(eStructuralFeature) : "The feature '" + eStructuralFeature.getName() + "' is not a valid feature";
         */
        return this.eDerivedStructuralFeatureID_number_Function(eStructuralFeature.getFeatureID(), containerClass);
        /*}*/
    };
    BasicEObjectImpl.prototype.eDerivedStructuralFeatureID_number_Function = function (baseFeatureID, baseClass) {
        return baseFeatureID;
    };
    BasicEObjectImpl.prototype.eDerivedStructuralFeatureID = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        if (args.length === 1) {
            return this.eDerivedStructuralFeatureID_EStructuralFeature(args[0]);
        }
        else if (args.length === 2) {
            return this.eDerivedStructuralFeatureID_number_Function(args[0], args[1]);
        }
    };
    BasicEObjectImpl.prototype.eClass = function () {
        return this.eStaticClass();
    };
    // Subclasses MUST override this function
    BasicEObjectImpl.prototype.eStaticClass = function () {
        return this._eStaticClass;
    };
    BasicEObjectImpl.prototype.eInverseAdd = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        if (args.length === 4) {
            return this.eInverseAdd4(args[0], args[1], args[2], args[3]);
        }
        else {
            return this.eInverseAdd3(args[0], args[1], args[2]);
        }
    };
    //public eInverseAddFromBasicEObjectImpl = this.eInverseAdd;
    BasicEObjectImpl.prototype.eInverseAdd4 = function (otherEnd, featureID, baseClass, msgs) {
        if (featureID >= 0) {
            //return eInverseAdd(otherEnd, eDerivedStructuralFeatureID(featureID, baseClass), msgs);
            return this.eInverseAdd3(otherEnd, featureID, msgs);
        }
        else {
            if (this.eInternalContainer() != null) {
                msgs = this.eBasicRemoveFromContainer(msgs);
            }
            return this.eBasicSetContainer(otherEnd, featureID, msgs);
        }
        //return this.eInverseAdd(otherEnd, featureID, msgs);
    };
    BasicEObjectImpl.prototype.eInverseRemove = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        if (args.length === 4) {
            return this.eInverseRemove4(args[0], args[1], args[2], args[3]);
        }
        else {
            return this.eInverseRemove3(args[0], args[1], args[2]);
        }
    };
    //public eInverseRemoveFromBasicEObjectImpl = this.eInverseRemove;
    BasicEObjectImpl.prototype.eInverseAdd3 = function (otherEnd, featureID, msgs) {
        //return eDynamicInverseAdd(otherEnd, featureID, msgs);
        //call generated function
        return msgs;
    };
    //TODO fix quickfix and create a delegator mehtod for eInverseRemove
    BasicEObjectImpl.prototype.eInverseRemove4 = function (otherEnd, featureID, baseClass, msgs) {
        if (featureID >= 0) {
            //return eInverseRemove(otherEnd, eDerivedStructuralFeatureID(featureID, baseClass), msgs);
            return this.eInverseRemove(otherEnd, featureID, msgs);
        }
        else {
            return this.eBasicSetContainer(null, featureID, msgs);
        }
    };
    BasicEObjectImpl.prototype.eInverseRemove3 = function (otherEnd, featureID, msgs) {
        //return eDynamicInverseRemove(otherEnd, featureID, msgs);
        return msgs;
    };
    BasicEObjectImpl.prototype.eIsSet = function (feature) {
        /*TODO implement function*/
        return null;
    };
    ;
    BasicEObjectImpl.prototype.eContainmentFeature = function () {
        /*TODO implement function*/
        return null;
    };
    ;
    BasicEObjectImpl.prototype.eIsProxy = function () {
        /*TODO implement function*/
        return null;
    };
    ;
    BasicEObjectImpl.prototype.eContainingFeature = function () {
        /*TODO implement function*/
        return null;
    };
    ;
    BasicEObjectImpl.prototype.eContainer = function () {
        /*TODO implement function*/
        return null;
    };
    ;
    BasicEObjectImpl.prototype.eInvoke = function (operation, args) {
        /*TODO implement function*/
        return null;
    };
    ;
    BasicEObjectImpl.prototype.eSet = function (feature, newValue) {
        var featureID = this.eDerivedStructuralFeatureID_EStructuralFeature(feature);
        /*
        if (featureID >= 0)
        {
        */
        this.eSet_number_any(featureID, newValue);
        /*}
        else
        {
            eOpenSet(eFeature, newValue);
        }
        */
    };
    ;
    BasicEObjectImpl.prototype.eSet_number_any = function (featureId, newValue) {
        //is overridden by subclasses
    };
    ;
    BasicEObjectImpl.prototype.eResource = function () {
        /*TODO implement function*/
        return null;
    };
    ;
    BasicEObjectImpl.prototype.eContents = function () {
        var result = new _OrderedSet__WEBPACK_IMPORTED_MODULE_1__["OrderedSet"]();
        for (var _i = 0, _a = this.eClass().eAllReferences; _i < _a.length; _i++) {
            var feature = _a[_i];
            if (feature.containment) {
                if (feature.many) {
                    var list = this.eGet(feature);
                    for (var _b = 0, list_1 = list; _b < list_1.length; _b++) {
                        var item = list_1[_b];
                        //TODO could be addAll
                        result.add(item);
                    }
                }
                else {
                    var other = this.eGet(feature);
                    if (other !== null) {
                        result.add(other);
                    }
                }
            }
        }
        return result;
    };
    ;
    BasicEObjectImpl.prototype.eCrossReferences = function () {
        /*TODO implement function*/
        return null;
    };
    ;
    BasicEObjectImpl.prototype.eAllContents = function () {
        /*TODO implement function*/
        return null;
    };
    ;
    BasicEObjectImpl.prototype.eGet_EStructuralFeature = function (feature) {
        return this.eGet_EStructuralFeature_boolean(feature, true);
    };
    ;
    BasicEObjectImpl.prototype.eGet_EStructuralFeature_boolean = function (feature, resolve) {
        return this.eGet_EStructuralFeature_boolean_boolean(feature, true, true);
    };
    ;
    BasicEObjectImpl.prototype.eUnset = function (feature) {
        /*TODO implement function*/
        return null;
    };
    ;
    BasicEObjectImpl.prototype.eURIFragmentSegment = function (eFeature, eObject) {
        return undefined;
    };
    BasicEObjectImpl.prototype.eObjectForURIFragmentSegment = function (uriFragmentSegment) {
        return undefined;
    };
    BasicEObjectImpl.prototype.eSetClass = function (eClass) {
    };
    BasicEObjectImpl.prototype.eBaseStructuralFeatureID = function (derivedFeatureID, baseClass) {
        return undefined;
    };
    BasicEObjectImpl.prototype.eDerivedOperationID = function (baseOperationID, baseClass) {
        return undefined;
    };
    BasicEObjectImpl.prototype.eResolveProxy = function (proxy) {
        return undefined;
    };
    BasicEObjectImpl.generateUUID = function () {
        var d = new Date().getTime();
        var uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
            var r = (d + Math.random() * 16) % 16 | 0;
            d = Math.floor(d / 16);
            return (c == 'x' ? r : (r & 0x7 | 0x8)).toString(16);
        });
        return uuid;
    };
    BasicEObjectImpl.EOPPOSITE_FEATURE_BASE = -1;
    return BasicEObjectImpl;
}(_BasicNotifierImpl__WEBPACK_IMPORTED_MODULE_0__["BasicNotifierImpl"]));



/***/ }),

/***/ "./node_modules/crossecore/src/BasicNotifierImpl.ts":
/*!**********************************************************!*\
  !*** ./node_modules/crossecore/src/BasicNotifierImpl.ts ***!
  \**********************************************************/
/*! exports provided: BasicNotifierImpl */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BasicNotifierImpl", function() { return BasicNotifierImpl; });
/* CrossEcore is a cross-platform modeling framework that generates C#, TypeScript,
 * JavaScript, Swift code from Ecore models with embedded OCL (http://www.crossecore.org/).
 * The original Eclipse Modeling Framework is available at https://www.eclipse.org/modeling/emf/.
 *
 * contributor: Simon Schwichtenberg
 */
var BasicNotifierImpl = /** @class */ (function () {
    function BasicNotifierImpl() {
        var _this = this;
        this._eAdapters = null;
        this.eAdapters = function () {
            if (_this._eAdapters == null) {
                _this._eAdapters = new Array();
            }
            return _this._eAdapters;
        };
        //protected BasicEList<Adapter> eBasicAdapters()
        this.eBasicAdapters = function () {
            return null;
        };
        this.eNotify = function (notification) {
            for (var _i = 0, _a = _this.eAdapters(); _i < _a.length; _i++) {
                var adapter = _a[_i];
                adapter.notifyChanged(notification);
            }
        };
        this.eNotificationRequired = function () {
            return _this.eAdapters().length > 0;
        };
    }
    return BasicNotifierImpl;
}());



/***/ }),

/***/ "./node_modules/crossecore/src/EAnnotationBase.ts":
/*!********************************************************!*\
  !*** ./node_modules/crossecore/src/EAnnotationBase.ts ***!
  \********************************************************/
/*! exports provided: EAnnotationBase */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EAnnotationBase", function() { return EAnnotationBase; });
/* harmony import */ var _OrderedSet__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./OrderedSet */ "./node_modules/crossecore/src/OrderedSet.ts");
/* harmony import */ var _ENotificationImpl__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ENotificationImpl */ "./node_modules/crossecore/src/ENotificationImpl.ts");
/* harmony import */ var _NotificationImpl__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./NotificationImpl */ "./node_modules/crossecore/src/NotificationImpl.ts");
/* harmony import */ var _EcoreEMap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./EcoreEMap */ "./node_modules/crossecore/src/EcoreEMap.ts");
/* harmony import */ var _EStringToStringMapEntryBase__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./EStringToStringMapEntryBase */ "./node_modules/crossecore/src/EStringToStringMapEntryBase.ts");
/* harmony import */ var _EcorePackageLiterals__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./EcorePackageLiterals */ "./node_modules/crossecore/src/EcorePackageLiterals.ts");
/* harmony import */ var _BasicEObjectImpl__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./BasicEObjectImpl */ "./node_modules/crossecore/src/BasicEObjectImpl.ts");
/* harmony import */ var _EModelElementImpl__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./EModelElementImpl */ "./node_modules/crossecore/src/EModelElementImpl.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();








var EAnnotationBase = /** @class */ (function (_super) {
    __extends(EAnnotationBase, _super);
    function EAnnotationBase() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._source = '';
        _this._contents = null;
        _this._references = null;
        return _this;
    }
    Object.defineProperty(EAnnotationBase.prototype, "source", {
        get: function () {
            return this._source;
        },
        set: function (value) {
            this._source = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(EAnnotationBase.prototype, "details", {
        get: function () {
            if (this._details === null) {
                this._details = new _EcoreEMap__WEBPACK_IMPORTED_MODULE_3__["EcoreEMap"](_EStringToStringMapEntryBase__WEBPACK_IMPORTED_MODULE_4__["EStringToStringMapEntryBase"].eStaticClass, _EStringToStringMapEntryBase__WEBPACK_IMPORTED_MODULE_4__["EStringToStringMapEntryBase"], this, _EcorePackageLiterals__WEBPACK_IMPORTED_MODULE_5__["EcorePackageLiterals"].EANNOTATION_DETAILS);
            }
            return this._details;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(EAnnotationBase.prototype, "eModelElement", {
        get: function () {
            if (this.eContainerFeatureID() != _EcorePackageLiterals__WEBPACK_IMPORTED_MODULE_5__["EcorePackageLiterals"].EANNOTATION_EMODELELEMENT)
                return null;
            return this.eInternalContainer();
        },
        set: function (value) {
            if (value != this.eInternalContainer()) {
                var msgs = null;
                if (this.eInternalContainer() != null) {
                    msgs = this.eInternalContainer().eInverseRemove(this, _EcorePackageLiterals__WEBPACK_IMPORTED_MODULE_5__["EcorePackageLiterals"].EMODELELEMENT_EANNOTATIONS, /*EAnnotation*/ null, msgs);
                }
                if (value != null) {
                    msgs = value.eInverseAdd(this, _EcorePackageLiterals__WEBPACK_IMPORTED_MODULE_5__["EcorePackageLiterals"].EMODELELEMENT_EANNOTATIONS, /*EAnnotation*/ null, msgs);
                }
                msgs = this.basicSetEModelElement(value, msgs);
                if (msgs != null) {
                    msgs.dispatch();
                }
            }
            else if (this.eNotificationRequired()) {
                this.eNotify(new _ENotificationImpl__WEBPACK_IMPORTED_MODULE_1__["ENotificationImpl"](this, _NotificationImpl__WEBPACK_IMPORTED_MODULE_2__["NotificationImpl"].SET, _EcorePackageLiterals__WEBPACK_IMPORTED_MODULE_5__["EcorePackageLiterals"].EANNOTATION_EMODELELEMENT, value, value));
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(EAnnotationBase.prototype, "contents", {
        get: function () {
            if (this._contents === null) {
                this._contents = new _OrderedSet__WEBPACK_IMPORTED_MODULE_0__["OrderedSet"](this, _EcorePackageLiterals__WEBPACK_IMPORTED_MODULE_5__["EcorePackageLiterals"].EANNOTATION_CONTENTS, _BasicEObjectImpl__WEBPACK_IMPORTED_MODULE_6__["BasicEObjectImpl"].EOPPOSITE_FEATURE_BASE - _EcorePackageLiterals__WEBPACK_IMPORTED_MODULE_5__["EcorePackageLiterals"].EANNOTATION_CONTENTS);
            }
            return this._contents;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(EAnnotationBase.prototype, "references", {
        get: function () {
            if (this._references === null) {
                this._references = new _OrderedSet__WEBPACK_IMPORTED_MODULE_0__["OrderedSet"](this, _EcorePackageLiterals__WEBPACK_IMPORTED_MODULE_5__["EcorePackageLiterals"].EANNOTATION_REFERENCES, _BasicEObjectImpl__WEBPACK_IMPORTED_MODULE_6__["BasicEObjectImpl"].EOPPOSITE_FEATURE_BASE - _EcorePackageLiterals__WEBPACK_IMPORTED_MODULE_5__["EcorePackageLiterals"].EANNOTATION_REFERENCES);
            }
            return this._references;
        },
        enumerable: false,
        configurable: true
    });
    EAnnotationBase.prototype.eStaticClass = function () {
        return EAnnotationBase.eStaticClass;
    };
    EAnnotationBase.prototype.eInverseAdd = function (otherEnd, featureID, msgs) {
        switch (featureID) {
            case _EcorePackageLiterals__WEBPACK_IMPORTED_MODULE_5__["EcorePackageLiterals"].EANNOTATION_EMODELELEMENT:
                if (this.eInternalContainer() != null) {
                    msgs = this.eBasicRemoveFromContainer(msgs);
                }
                return this.basicSetEModelElement(otherEnd, msgs);
        }
        //return this.eInverseAddFromEModelElement(otherEnd, featureID, msgs);
        return _super.prototype.eInverseAdd.call(this, otherEnd, featureID, msgs);
    };
    //public eInverseAddFromEAnnotation = this.eInverseAdd;
    EAnnotationBase.prototype.eInverseRemove = function (otherEnd, featureID, msgs) {
        switch (featureID) {
            case _EcorePackageLiterals__WEBPACK_IMPORTED_MODULE_5__["EcorePackageLiterals"].EANNOTATION_EMODELELEMENT:
                return this.basicSetEModelElement(null, msgs);
        }
        //return this.eInverseRemoveFromEModelElement(otherEnd, featureID, msgs);
        return _super.prototype.eInverseRemove.call(this, otherEnd, featureID, msgs);
    };
    //public eInverseRemoveFromEAnnotation = this.eInverseRemove;
    EAnnotationBase.prototype.basicSetEModelElement = function (newobj, msgs) {
        msgs = this.eBasicSetContainer(newobj, _EcorePackageLiterals__WEBPACK_IMPORTED_MODULE_5__["EcorePackageLiterals"].EANNOTATION_EMODELELEMENT, msgs);
        return msgs;
    };
    EAnnotationBase.prototype.eGet_number_boolean_boolean = function (featureID, resolve, coreType) {
        switch (featureID) {
            case _EcorePackageLiterals__WEBPACK_IMPORTED_MODULE_5__["EcorePackageLiterals"].EANNOTATION_EANNOTATIONS:
                return this.eAnnotations;
            case _EcorePackageLiterals__WEBPACK_IMPORTED_MODULE_5__["EcorePackageLiterals"].EANNOTATION_SOURCE:
                return this.source;
            case _EcorePackageLiterals__WEBPACK_IMPORTED_MODULE_5__["EcorePackageLiterals"].EANNOTATION_DETAILS:
                return this.details;
            case _EcorePackageLiterals__WEBPACK_IMPORTED_MODULE_5__["EcorePackageLiterals"].EANNOTATION_EMODELELEMENT:
                return this.eModelElement;
            case _EcorePackageLiterals__WEBPACK_IMPORTED_MODULE_5__["EcorePackageLiterals"].EANNOTATION_CONTENTS:
                return this.contents;
            case _EcorePackageLiterals__WEBPACK_IMPORTED_MODULE_5__["EcorePackageLiterals"].EANNOTATION_REFERENCES:
                return this.references;
        }
        //return this.eGetFromEModelElement(featureID, resolve, coreType);
        return _super.prototype.eGet.call(this, featureID, resolve, coreType);
    };
    EAnnotationBase.prototype.eSet_number_any = function (featureID, newValue) {
        switch (featureID) {
            case _EcorePackageLiterals__WEBPACK_IMPORTED_MODULE_5__["EcorePackageLiterals"].EANNOTATION_SOURCE:
                this.source = newValue;
                return;
            case _EcorePackageLiterals__WEBPACK_IMPORTED_MODULE_5__["EcorePackageLiterals"].EANNOTATION_DETAILS:
                this.details.set(newValue);
                return;
            case _EcorePackageLiterals__WEBPACK_IMPORTED_MODULE_5__["EcorePackageLiterals"].EANNOTATION_EMODELELEMENT:
                this.eModelElement = newValue;
                return;
            case _EcorePackageLiterals__WEBPACK_IMPORTED_MODULE_5__["EcorePackageLiterals"].EANNOTATION_CONTENTS:
                this.contents.clear();
                this.contents.addAll(newValue);
                return;
            case _EcorePackageLiterals__WEBPACK_IMPORTED_MODULE_5__["EcorePackageLiterals"].EANNOTATION_REFERENCES:
                this.references.clear();
                this.references.addAll(newValue);
                return;
        }
        _super.prototype.eSet_number_any.call(this, featureID, newValue);
    };
    return EAnnotationBase;
}(_EModelElementImpl__WEBPACK_IMPORTED_MODULE_7__["EModelElementImpl"]));



/***/ }),

/***/ "./node_modules/crossecore/src/EAnnotationImpl.ts":
/*!********************************************************!*\
  !*** ./node_modules/crossecore/src/EAnnotationImpl.ts ***!
  \********************************************************/
/*! exports provided: EAnnotationImpl */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EAnnotationImpl", function() { return EAnnotationImpl; });
/* harmony import */ var _EAnnotationBase__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./EAnnotationBase */ "./node_modules/crossecore/src/EAnnotationBase.ts");
/* CrossEcore is a cross-platform modeling framework that generates C#, TypeScript,
 * JavaScript, Swift code from Ecore models with embedded OCL (http://www.crossecore.org/).
 * The original Eclipse Modeling Framework is available at https://www.eclipse.org/modeling/emf/.
 *
 * contributor: Simon Schwichtenberg
 */
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

///<summary>This class was generated.</summary>
var EAnnotationImpl = /** @class */ (function (_super) {
    __extends(EAnnotationImpl, _super);
    function EAnnotationImpl() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return EAnnotationImpl;
}(_EAnnotationBase__WEBPACK_IMPORTED_MODULE_0__["EAnnotationBase"]));



/***/ }),

/***/ "./node_modules/crossecore/src/EAttributeBase.ts":
/*!*******************************************************!*\
  !*** ./node_modules/crossecore/src/EAttributeBase.ts ***!
  \*******************************************************/
/*! exports provided: EAttributeBase */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EAttributeBase", function() { return EAttributeBase; });
/* harmony import */ var _EStructuralFeatureImpl__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./EStructuralFeatureImpl */ "./node_modules/crossecore/src/EStructuralFeatureImpl.ts");
/* harmony import */ var _EcorePackageLiterals__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./EcorePackageLiterals */ "./node_modules/crossecore/src/EcorePackageLiterals.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();


var EAttributeBase = /** @class */ (function (_super) {
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
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(EAttributeBase.prototype, "eAttributeType", {
        get: function () {
            //TODO implement derivation
            return null;
        },
        enumerable: false,
        configurable: true
    });
    EAttributeBase.prototype.eStaticClass = function () {
        return EAttributeBase.eStaticClass;
    };
    EAttributeBase.prototype.eGet_number_boolean_boolean = function (featureID, resolve, coreType) {
        switch (featureID) {
            case _EcorePackageLiterals__WEBPACK_IMPORTED_MODULE_1__["EcorePackageLiterals"].EATTRIBUTE_EANNOTATIONS:
                return this.eAnnotations;
            case _EcorePackageLiterals__WEBPACK_IMPORTED_MODULE_1__["EcorePackageLiterals"].EATTRIBUTE_NAME:
                return this.name;
            case _EcorePackageLiterals__WEBPACK_IMPORTED_MODULE_1__["EcorePackageLiterals"].EATTRIBUTE_ORDERED:
                return this.ordered;
            case _EcorePackageLiterals__WEBPACK_IMPORTED_MODULE_1__["EcorePackageLiterals"].EATTRIBUTE_UNIQUE:
                return this.unique;
            case _EcorePackageLiterals__WEBPACK_IMPORTED_MODULE_1__["EcorePackageLiterals"].EATTRIBUTE_LOWERBOUND:
                return this.lowerBound;
            case _EcorePackageLiterals__WEBPACK_IMPORTED_MODULE_1__["EcorePackageLiterals"].EATTRIBUTE_UPPERBOUND:
                return this.upperBound;
            case _EcorePackageLiterals__WEBPACK_IMPORTED_MODULE_1__["EcorePackageLiterals"].EATTRIBUTE_MANY:
                return this.many;
            case _EcorePackageLiterals__WEBPACK_IMPORTED_MODULE_1__["EcorePackageLiterals"].EATTRIBUTE_REQUIRED:
                return this.required;
            case _EcorePackageLiterals__WEBPACK_IMPORTED_MODULE_1__["EcorePackageLiterals"].EATTRIBUTE_ETYPE:
                return this.eType;
            case _EcorePackageLiterals__WEBPACK_IMPORTED_MODULE_1__["EcorePackageLiterals"].EATTRIBUTE_EGENERICTYPE:
                return this.eGenericType;
            case _EcorePackageLiterals__WEBPACK_IMPORTED_MODULE_1__["EcorePackageLiterals"].EATTRIBUTE_CHANGEABLE:
                return this.changeable;
            case _EcorePackageLiterals__WEBPACK_IMPORTED_MODULE_1__["EcorePackageLiterals"].EATTRIBUTE_VOLATILE:
                return this.volatile;
            case _EcorePackageLiterals__WEBPACK_IMPORTED_MODULE_1__["EcorePackageLiterals"].EATTRIBUTE_TRANSIENT:
                return this.transient;
            case _EcorePackageLiterals__WEBPACK_IMPORTED_MODULE_1__["EcorePackageLiterals"].EATTRIBUTE_DEFAULTVALUELITERAL:
                return this.defaultValueLiteral;
            case _EcorePackageLiterals__WEBPACK_IMPORTED_MODULE_1__["EcorePackageLiterals"].EATTRIBUTE_DEFAULTVALUE:
                return this.defaultValue;
            case _EcorePackageLiterals__WEBPACK_IMPORTED_MODULE_1__["EcorePackageLiterals"].EATTRIBUTE_UNSETTABLE:
                return this.unsettable;
            case _EcorePackageLiterals__WEBPACK_IMPORTED_MODULE_1__["EcorePackageLiterals"].EATTRIBUTE_DERIVED:
                return this.derived;
            case _EcorePackageLiterals__WEBPACK_IMPORTED_MODULE_1__["EcorePackageLiterals"].EATTRIBUTE_ECONTAININGCLASS:
                return this.eContainingClass;
            case _EcorePackageLiterals__WEBPACK_IMPORTED_MODULE_1__["EcorePackageLiterals"].EATTRIBUTE_ID:
                return this.iD;
            case _EcorePackageLiterals__WEBPACK_IMPORTED_MODULE_1__["EcorePackageLiterals"].EATTRIBUTE_EATTRIBUTETYPE:
                return this.eAttributeType;
        }
        //return this.eGetFromEStructuralFeature(featureID, resolve, coreType);
        return _super.prototype.eGet.call(this, featureID, resolve, coreType);
    };
    EAttributeBase.prototype.eSet_number_any = function (featureID, newValue) {
        switch (featureID) {
            case _EcorePackageLiterals__WEBPACK_IMPORTED_MODULE_1__["EcorePackageLiterals"].EATTRIBUTE_ID:
                this.iD = newValue;
                return;
        }
        _super.prototype.eSet_number_any.call(this, featureID, newValue);
    };
    return EAttributeBase;
}(_EStructuralFeatureImpl__WEBPACK_IMPORTED_MODULE_0__["EStructuralFeatureImpl"]));



/***/ }),

/***/ "./node_modules/crossecore/src/EAttributeImpl.ts":
/*!*******************************************************!*\
  !*** ./node_modules/crossecore/src/EAttributeImpl.ts ***!
  \*******************************************************/
/*! exports provided: EAttributeImpl */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EAttributeImpl", function() { return EAttributeImpl; });
/* harmony import */ var _EAttributeBase__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./EAttributeBase */ "./node_modules/crossecore/src/EAttributeBase.ts");
/* CrossEcore is a cross-platform modeling framework that generates C#, TypeScript,
 * JavaScript, Swift code from Ecore models with embedded OCL (http://www.crossecore.org/).
 * The original Eclipse Modeling Framework is available at https://www.eclipse.org/modeling/emf/.
 *
 * contributor: Simon Schwichtenberg
 */
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

///<summary>This class was generated.</summary>
var EAttributeImpl = /** @class */ (function (_super) {
    __extends(EAttributeImpl, _super);
    function EAttributeImpl() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    //implement your generated class here
    EAttributeImpl.prototype.getFeatureID = function () {
        return this.featureID;
    };
    ;
    return EAttributeImpl;
}(_EAttributeBase__WEBPACK_IMPORTED_MODULE_0__["EAttributeBase"]));



/***/ }),

/***/ "./node_modules/crossecore/src/EClassBase.ts":
/*!***************************************************!*\
  !*** ./node_modules/crossecore/src/EClassBase.ts ***!
  \***************************************************/
/*! exports provided: EClassBase */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EClassBase", function() { return EClassBase; });
/* harmony import */ var _OrderedSet__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./OrderedSet */ "./node_modules/crossecore/src/OrderedSet.ts");
/* harmony import */ var _EcorePackageLiterals__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./EcorePackageLiterals */ "./node_modules/crossecore/src/EcorePackageLiterals.ts");
/* harmony import */ var _BasicEObjectImpl__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./BasicEObjectImpl */ "./node_modules/crossecore/src/BasicEObjectImpl.ts");
/* harmony import */ var _EClassifierImpl__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./EClassifierImpl */ "./node_modules/crossecore/src/EClassifierImpl.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();




var EClassBase = /** @class */ (function (_super) {
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
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(EClassBase.prototype, "interface", {
        get: function () {
            return this._interface;
        },
        set: function (value) {
            this._interface = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(EClassBase.prototype, "eSuperTypes", {
        get: function () {
            if (this._eSuperTypes === null) {
                this._eSuperTypes = new _OrderedSet__WEBPACK_IMPORTED_MODULE_0__["OrderedSet"](this, _EcorePackageLiterals__WEBPACK_IMPORTED_MODULE_1__["EcorePackageLiterals"].ECLASS_ESUPERTYPES, _BasicEObjectImpl__WEBPACK_IMPORTED_MODULE_2__["BasicEObjectImpl"].EOPPOSITE_FEATURE_BASE - _EcorePackageLiterals__WEBPACK_IMPORTED_MODULE_1__["EcorePackageLiterals"].ECLASS_ESUPERTYPES);
            }
            return this._eSuperTypes;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(EClassBase.prototype, "eOperations", {
        get: function () {
            if (this._eOperations === null) {
                this._eOperations = new _OrderedSet__WEBPACK_IMPORTED_MODULE_0__["OrderedSet"](this, _EcorePackageLiterals__WEBPACK_IMPORTED_MODULE_1__["EcorePackageLiterals"].ECLASS_EOPERATIONS, _EcorePackageLiterals__WEBPACK_IMPORTED_MODULE_1__["EcorePackageLiterals"].EOPERATION_ECONTAININGCLASS);
            }
            return this._eOperations;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(EClassBase.prototype, "eAllAttributes", {
        get: function () {
            //TODO implement derivation
            return null;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(EClassBase.prototype, "eAllReferences", {
        get: function () {
            //TODO implement derivation
            return null;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(EClassBase.prototype, "eReferences", {
        get: function () {
            //TODO implement derivation
            return null;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(EClassBase.prototype, "eAttributes", {
        get: function () {
            //TODO implement derivation
            return null;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(EClassBase.prototype, "eAllContainments", {
        get: function () {
            //TODO implement derivation
            return null;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(EClassBase.prototype, "eAllOperations", {
        get: function () {
            //TODO implement derivation
            return null;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(EClassBase.prototype, "eAllStructuralFeatures", {
        get: function () {
            //TODO implement derivation
            return null;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(EClassBase.prototype, "eAllSuperTypes", {
        get: function () {
            //TODO implement derivation
            return null;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(EClassBase.prototype, "eIDAttribute", {
        get: function () {
            //TODO implement derivation
            return null;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(EClassBase.prototype, "eStructuralFeatures", {
        get: function () {
            if (this._eStructuralFeatures === null) {
                this._eStructuralFeatures = new _OrderedSet__WEBPACK_IMPORTED_MODULE_0__["OrderedSet"](this, _EcorePackageLiterals__WEBPACK_IMPORTED_MODULE_1__["EcorePackageLiterals"].ECLASS_ESTRUCTURALFEATURES, _EcorePackageLiterals__WEBPACK_IMPORTED_MODULE_1__["EcorePackageLiterals"].ESTRUCTURALFEATURE_ECONTAININGCLASS);
            }
            return this._eStructuralFeatures;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(EClassBase.prototype, "eGenericSuperTypes", {
        get: function () {
            if (this._eGenericSuperTypes === null) {
                this._eGenericSuperTypes = new _OrderedSet__WEBPACK_IMPORTED_MODULE_0__["OrderedSet"](this, _EcorePackageLiterals__WEBPACK_IMPORTED_MODULE_1__["EcorePackageLiterals"].ECLASS_EGENERICSUPERTYPES, _BasicEObjectImpl__WEBPACK_IMPORTED_MODULE_2__["BasicEObjectImpl"].EOPPOSITE_FEATURE_BASE - _EcorePackageLiterals__WEBPACK_IMPORTED_MODULE_1__["EcorePackageLiterals"].ECLASS_EGENERICSUPERTYPES);
            }
            return this._eGenericSuperTypes;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(EClassBase.prototype, "eAllGenericSuperTypes", {
        get: function () {
            //TODO implement derivation
            return null;
        },
        enumerable: false,
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
            case _EcorePackageLiterals__WEBPACK_IMPORTED_MODULE_1__["EcorePackageLiterals"].ECLASS_EOPERATIONS:
                return this.eOperations.basicAdd(otherEnd, msgs);
            case _EcorePackageLiterals__WEBPACK_IMPORTED_MODULE_1__["EcorePackageLiterals"].ECLASS_ESTRUCTURALFEATURES:
                return this.eStructuralFeatures.basicAdd(otherEnd, msgs);
        }
        //return this.eInverseAddFromEClassifier(otherEnd, featureID, msgs);
        return _super.prototype.eInverseAdd.call(this, otherEnd, featureID, msgs);
    };
    //public eInverseAddFromEClass = this.eInverseAdd;
    EClassBase.prototype.eInverseRemove = function (otherEnd, featureID, msgs) {
        switch (featureID) {
            case _EcorePackageLiterals__WEBPACK_IMPORTED_MODULE_1__["EcorePackageLiterals"].ECLASS_EOPERATIONS:
                return this.eOperations.basicRemove(otherEnd, msgs);
            case _EcorePackageLiterals__WEBPACK_IMPORTED_MODULE_1__["EcorePackageLiterals"].ECLASS_ESTRUCTURALFEATURES:
                return this.eStructuralFeatures.basicRemove(otherEnd, msgs);
        }
        //return this.eInverseRemoveFromEClassifier(otherEnd, featureID, msgs);
        return _super.prototype.eInverseRemove.call(this, otherEnd, featureID, msgs);
    };
    //public eInverseRemoveFromEClass = this.eInverseRemove;
    EClassBase.prototype.eGet_number_boolean_boolean = function (featureID, resolve, coreType) {
        switch (featureID) {
            case _EcorePackageLiterals__WEBPACK_IMPORTED_MODULE_1__["EcorePackageLiterals"].ECLASS_EANNOTATIONS:
                return this.eAnnotations;
            case _EcorePackageLiterals__WEBPACK_IMPORTED_MODULE_1__["EcorePackageLiterals"].ECLASS_NAME:
                return this.name;
            case _EcorePackageLiterals__WEBPACK_IMPORTED_MODULE_1__["EcorePackageLiterals"].ECLASS_INSTANCECLASSNAME:
                return this.instanceClassName;
            case _EcorePackageLiterals__WEBPACK_IMPORTED_MODULE_1__["EcorePackageLiterals"].ECLASS_INSTANCECLASS:
                return this.instanceClass;
            case _EcorePackageLiterals__WEBPACK_IMPORTED_MODULE_1__["EcorePackageLiterals"].ECLASS_DEFAULTVALUE:
                return this.defaultValue;
            case _EcorePackageLiterals__WEBPACK_IMPORTED_MODULE_1__["EcorePackageLiterals"].ECLASS_INSTANCETYPENAME:
                return this.instanceTypeName;
            case _EcorePackageLiterals__WEBPACK_IMPORTED_MODULE_1__["EcorePackageLiterals"].ECLASS_EPACKAGE:
                return this.ePackage;
            case _EcorePackageLiterals__WEBPACK_IMPORTED_MODULE_1__["EcorePackageLiterals"].ECLASS_ETYPEPARAMETERS:
                return this.eTypeParameters;
            case _EcorePackageLiterals__WEBPACK_IMPORTED_MODULE_1__["EcorePackageLiterals"].ECLASS_ABSTRACT:
                return this.abstract;
            case _EcorePackageLiterals__WEBPACK_IMPORTED_MODULE_1__["EcorePackageLiterals"].ECLASS_INTERFACE:
                return this.interface;
            case _EcorePackageLiterals__WEBPACK_IMPORTED_MODULE_1__["EcorePackageLiterals"].ECLASS_ESUPERTYPES:
                return this.eSuperTypes;
            case _EcorePackageLiterals__WEBPACK_IMPORTED_MODULE_1__["EcorePackageLiterals"].ECLASS_EOPERATIONS:
                return this.eOperations;
            case _EcorePackageLiterals__WEBPACK_IMPORTED_MODULE_1__["EcorePackageLiterals"].ECLASS_EALLATTRIBUTES:
                return this.eAllAttributes;
            case _EcorePackageLiterals__WEBPACK_IMPORTED_MODULE_1__["EcorePackageLiterals"].ECLASS_EALLREFERENCES:
                return this.eAllReferences;
            case _EcorePackageLiterals__WEBPACK_IMPORTED_MODULE_1__["EcorePackageLiterals"].ECLASS_EREFERENCES:
                return this.eReferences;
            case _EcorePackageLiterals__WEBPACK_IMPORTED_MODULE_1__["EcorePackageLiterals"].ECLASS_EATTRIBUTES:
                return this.eAttributes;
            case _EcorePackageLiterals__WEBPACK_IMPORTED_MODULE_1__["EcorePackageLiterals"].ECLASS_EALLCONTAINMENTS:
                return this.eAllContainments;
            case _EcorePackageLiterals__WEBPACK_IMPORTED_MODULE_1__["EcorePackageLiterals"].ECLASS_EALLOPERATIONS:
                return this.eAllOperations;
            case _EcorePackageLiterals__WEBPACK_IMPORTED_MODULE_1__["EcorePackageLiterals"].ECLASS_EALLSTRUCTURALFEATURES:
                return this.eAllStructuralFeatures;
            case _EcorePackageLiterals__WEBPACK_IMPORTED_MODULE_1__["EcorePackageLiterals"].ECLASS_EALLSUPERTYPES:
                return this.eAllSuperTypes;
            case _EcorePackageLiterals__WEBPACK_IMPORTED_MODULE_1__["EcorePackageLiterals"].ECLASS_EIDATTRIBUTE:
                return this.eIDAttribute;
            case _EcorePackageLiterals__WEBPACK_IMPORTED_MODULE_1__["EcorePackageLiterals"].ECLASS_ESTRUCTURALFEATURES:
                return this.eStructuralFeatures;
            case _EcorePackageLiterals__WEBPACK_IMPORTED_MODULE_1__["EcorePackageLiterals"].ECLASS_EGENERICSUPERTYPES:
                return this.eGenericSuperTypes;
            case _EcorePackageLiterals__WEBPACK_IMPORTED_MODULE_1__["EcorePackageLiterals"].ECLASS_EALLGENERICSUPERTYPES:
                return this.eAllGenericSuperTypes;
        }
        //return this.eGetFromEClassifier(featureID, resolve, coreType);
        return _super.prototype.eGet.call(this, featureID, resolve, coreType);
    };
    EClassBase.prototype.eSet_number_any = function (featureID, newValue) {
        switch (featureID) {
            case _EcorePackageLiterals__WEBPACK_IMPORTED_MODULE_1__["EcorePackageLiterals"].ECLASS_ABSTRACT:
                this.abstract = newValue;
                return;
            case _EcorePackageLiterals__WEBPACK_IMPORTED_MODULE_1__["EcorePackageLiterals"].ECLASS_INTERFACE:
                this.interface = newValue;
                return;
            case _EcorePackageLiterals__WEBPACK_IMPORTED_MODULE_1__["EcorePackageLiterals"].ECLASS_ESUPERTYPES:
                this.eSuperTypes.clear();
                this.eSuperTypes.addAll(newValue);
                return;
            case _EcorePackageLiterals__WEBPACK_IMPORTED_MODULE_1__["EcorePackageLiterals"].ECLASS_EOPERATIONS:
                this.eOperations.clear();
                this.eOperations.addAll(newValue);
                return;
            case _EcorePackageLiterals__WEBPACK_IMPORTED_MODULE_1__["EcorePackageLiterals"].ECLASS_ESTRUCTURALFEATURES:
                this.eStructuralFeatures.clear();
                this.eStructuralFeatures.addAll(newValue);
                return;
            case _EcorePackageLiterals__WEBPACK_IMPORTED_MODULE_1__["EcorePackageLiterals"].ECLASS_EGENERICSUPERTYPES:
                this.eGenericSuperTypes.clear();
                this.eGenericSuperTypes.addAll(newValue);
                return;
        }
        _super.prototype.eSet_number_any.call(this, featureID, newValue);
    };
    return EClassBase;
}(_EClassifierImpl__WEBPACK_IMPORTED_MODULE_3__["EClassifierImpl"]));



/***/ }),

/***/ "./node_modules/crossecore/src/EClassImpl.ts":
/*!***************************************************!*\
  !*** ./node_modules/crossecore/src/EClassImpl.ts ***!
  \***************************************************/
/*! exports provided: EClassImpl */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EClassImpl", function() { return EClassImpl; });
/* harmony import */ var _EClassBase__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./EClassBase */ "./node_modules/crossecore/src/EClassBase.ts");
/* harmony import */ var _OrderedSet__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./OrderedSet */ "./node_modules/crossecore/src/OrderedSet.ts");
/* harmony import */ var _EAttributeBase__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./EAttributeBase */ "./node_modules/crossecore/src/EAttributeBase.ts");
/* harmony import */ var _EReferenceBase__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./EReferenceBase */ "./node_modules/crossecore/src/EReferenceBase.ts");
/* CrossEcore is a cross-platform modeling framework that generates C#, TypeScript,
 * JavaScript, Swift code from Ecore models with embedded OCL (http://www.crossecore.org/).
 * The original Eclipse Modeling Framework is available at https://www.eclipse.org/modeling/emf/.
 *
 * contributor: Simon Schwichtenberg
 */
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();




///<summary>This class was generated.</summary>
var EClassImpl = /** @class */ (function (_super) {
    __extends(EClassImpl, _super);
    function EClassImpl() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(EClassImpl.prototype, "eAttributes", {
        get: function () {
            //TODO use ocl select/collect
            var result = new _OrderedSet__WEBPACK_IMPORTED_MODULE_1__["OrderedSet"]();
            this.eStructuralFeatures.forEach(function (f) {
                if (f instanceof _EAttributeBase__WEBPACK_IMPORTED_MODULE_2__["EAttributeBase"]) {
                    result.add(f);
                }
            });
            return result;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(EClassImpl.prototype, "eReferences", {
        get: function () {
            //TODO use ocl select/collect
            var result = new _OrderedSet__WEBPACK_IMPORTED_MODULE_1__["OrderedSet"]();
            this.eStructuralFeatures.forEach(function (f) {
                if (f instanceof _EReferenceBase__WEBPACK_IMPORTED_MODULE_3__["EReferenceBase"]) {
                    result.add(f);
                }
            });
            return result;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(EClassImpl.prototype, "eAllSuperTypes", {
        get: function () {
            var result = new _OrderedSet__WEBPACK_IMPORTED_MODULE_1__["OrderedSet"]();
            var queue = new Array();
            this.eSuperTypes.forEach(function (parent) {
                queue.push(parent);
                result.add(parent);
            });
            while (queue.length > 0) {
                var next = queue.shift();
                next.eSuperTypes.forEach(function (parent) {
                    queue.push(parent);
                    result.add(parent);
                });
            }
            return result;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(EClassImpl.prototype, "eAllAttributes", {
        get: function () {
            var result = new _OrderedSet__WEBPACK_IMPORTED_MODULE_1__["OrderedSet"]();
            this.eAttributes.forEach(function (a) {
                result.add(a);
            });
            this.eAllSuperTypes.forEach(function (t) {
                t.eAttributes.forEach(function (a) {
                    result.add(a);
                });
            });
            return result;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(EClassImpl.prototype, "eAllReferences", {
        get: function () {
            var result = new _OrderedSet__WEBPACK_IMPORTED_MODULE_1__["OrderedSet"]();
            this.eReferences.forEach(function (a) {
                result.add(a);
            });
            this.eAllSuperTypes.forEach(function (t) {
                t.eReferences.forEach(function (a) {
                    result.add(a);
                });
            });
            return result;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(EClassImpl.prototype, "eAllStructuralFeatures", {
        get: function () {
            var result = new _OrderedSet__WEBPACK_IMPORTED_MODULE_1__["OrderedSet"]();
            var eclassifiers = this.eAllSuperTypes;
            eclassifiers.add(this);
            for (var _i = 0, eclassifiers_1 = eclassifiers; _i < eclassifiers_1.length; _i++) {
                var eclassifier = eclassifiers_1[_i];
                for (var _a = 0, _b = eclassifier.eStructuralFeatures; _a < _b.length; _a++) {
                    var feature = _b[_a];
                    result.add(feature);
                }
            }
            //return this.eAllSuperTypes.collect2(e => e.eStructuralFeatures);
            return result;
        },
        enumerable: false,
        configurable: true
    });
    EClassImpl.prototype.getEStructuralFeature_string = function (featureName) {
        for (var _i = 0, _a = this.eAllStructuralFeatures; _i < _a.length; _i++) {
            var feature = _a[_i];
            if (feature.name === featureName) {
                return feature;
            }
        }
        return null;
    };
    ;
    return EClassImpl;
}(_EClassBase__WEBPACK_IMPORTED_MODULE_0__["EClassBase"]));



/***/ }),

/***/ "./node_modules/crossecore/src/EClassifierBase.ts":
/*!********************************************************!*\
  !*** ./node_modules/crossecore/src/EClassifierBase.ts ***!
  \********************************************************/
/*! exports provided: EClassifierBase */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EClassifierBase", function() { return EClassifierBase; });
/* harmony import */ var _OrderedSet__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./OrderedSet */ "./node_modules/crossecore/src/OrderedSet.ts");
/* harmony import */ var _EcorePackageLiterals__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./EcorePackageLiterals */ "./node_modules/crossecore/src/EcorePackageLiterals.ts");
/* harmony import */ var _BasicEObjectImpl__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./BasicEObjectImpl */ "./node_modules/crossecore/src/BasicEObjectImpl.ts");
/* harmony import */ var _ENamedElementImpl__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ENamedElementImpl */ "./node_modules/crossecore/src/ENamedElementImpl.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();




var EClassifierBase = /** @class */ (function (_super) {
    __extends(EClassifierBase, _super);
    function EClassifierBase() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._instanceClassName = '';
        _this._instanceTypeName = '';
        _this._eTypeParameters = null;
        return _this;
    }
    Object.defineProperty(EClassifierBase.prototype, "instanceClassName", {
        get: function () {
            return this._instanceClassName;
        },
        set: function (value) {
            this._instanceClassName = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(EClassifierBase.prototype, "instanceClass", {
        get: function () {
            //TODO implement derivation
            return null;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(EClassifierBase.prototype, "defaultValue", {
        get: function () {
            //TODO implement derivation
            return null;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(EClassifierBase.prototype, "instanceTypeName", {
        get: function () {
            return this._instanceTypeName;
        },
        set: function (value) {
            this._instanceTypeName = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(EClassifierBase.prototype, "ePackage", {
        get: function () {
            if (this.eContainerFeatureID() != _EcorePackageLiterals__WEBPACK_IMPORTED_MODULE_1__["EcorePackageLiterals"].ECLASSIFIER_EPACKAGE)
                return null;
            return this.eInternalContainer();
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(EClassifierBase.prototype, "eTypeParameters", {
        get: function () {
            if (this._eTypeParameters === null) {
                this._eTypeParameters = new _OrderedSet__WEBPACK_IMPORTED_MODULE_0__["OrderedSet"](this, _EcorePackageLiterals__WEBPACK_IMPORTED_MODULE_1__["EcorePackageLiterals"].ECLASSIFIER_ETYPEPARAMETERS, _BasicEObjectImpl__WEBPACK_IMPORTED_MODULE_2__["BasicEObjectImpl"].EOPPOSITE_FEATURE_BASE - _EcorePackageLiterals__WEBPACK_IMPORTED_MODULE_1__["EcorePackageLiterals"].ECLASSIFIER_ETYPEPARAMETERS);
            }
            return this._eTypeParameters;
        },
        enumerable: false,
        configurable: true
    });
    EClassifierBase.prototype.isInstance = function (object) {
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
        return EClassifierBase.eStaticClass;
    };
    EClassifierBase.prototype.eInverseAdd = function (otherEnd, featureID, msgs) {
        switch (featureID) {
            case _EcorePackageLiterals__WEBPACK_IMPORTED_MODULE_1__["EcorePackageLiterals"].ECLASSIFIER_EPACKAGE:
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
            case _EcorePackageLiterals__WEBPACK_IMPORTED_MODULE_1__["EcorePackageLiterals"].ECLASSIFIER_EPACKAGE:
                return this.basicSetEPackage(null, msgs);
        }
        //return this.eInverseRemoveFromENamedElement(otherEnd, featureID, msgs);
        return _super.prototype.eInverseRemove.call(this, otherEnd, featureID, msgs);
    };
    //public eInverseRemoveFromEClassifier = this.eInverseRemove;
    EClassifierBase.prototype.basicSetEPackage = function (newobj, msgs) {
        msgs = this.eBasicSetContainer(newobj, _EcorePackageLiterals__WEBPACK_IMPORTED_MODULE_1__["EcorePackageLiterals"].ECLASSIFIER_EPACKAGE, msgs);
        return msgs;
    };
    EClassifierBase.prototype.eGet_number_boolean_boolean = function (featureID, resolve, coreType) {
        switch (featureID) {
            case _EcorePackageLiterals__WEBPACK_IMPORTED_MODULE_1__["EcorePackageLiterals"].ECLASSIFIER_EANNOTATIONS:
                return this.eAnnotations;
            case _EcorePackageLiterals__WEBPACK_IMPORTED_MODULE_1__["EcorePackageLiterals"].ECLASSIFIER_NAME:
                return this.name;
            case _EcorePackageLiterals__WEBPACK_IMPORTED_MODULE_1__["EcorePackageLiterals"].ECLASSIFIER_INSTANCECLASSNAME:
                return this.instanceClassName;
            case _EcorePackageLiterals__WEBPACK_IMPORTED_MODULE_1__["EcorePackageLiterals"].ECLASSIFIER_INSTANCECLASS:
                return this.instanceClass;
            case _EcorePackageLiterals__WEBPACK_IMPORTED_MODULE_1__["EcorePackageLiterals"].ECLASSIFIER_DEFAULTVALUE:
                return this.defaultValue;
            case _EcorePackageLiterals__WEBPACK_IMPORTED_MODULE_1__["EcorePackageLiterals"].ECLASSIFIER_INSTANCETYPENAME:
                return this.instanceTypeName;
            case _EcorePackageLiterals__WEBPACK_IMPORTED_MODULE_1__["EcorePackageLiterals"].ECLASSIFIER_EPACKAGE:
                return this.ePackage;
            case _EcorePackageLiterals__WEBPACK_IMPORTED_MODULE_1__["EcorePackageLiterals"].ECLASSIFIER_ETYPEPARAMETERS:
                return this.eTypeParameters;
        }
        //return this.eGetFromENamedElement(featureID, resolve, coreType);
        return _super.prototype.eGet.call(this, featureID, resolve, coreType);
    };
    EClassifierBase.prototype.eSet_number_any = function (featureID, newValue) {
        switch (featureID) {
            case _EcorePackageLiterals__WEBPACK_IMPORTED_MODULE_1__["EcorePackageLiterals"].ECLASSIFIER_INSTANCECLASSNAME:
                this.instanceClassName = newValue;
                return;
            case _EcorePackageLiterals__WEBPACK_IMPORTED_MODULE_1__["EcorePackageLiterals"].ECLASSIFIER_INSTANCETYPENAME:
                this.instanceTypeName = newValue;
                return;
            case _EcorePackageLiterals__WEBPACK_IMPORTED_MODULE_1__["EcorePackageLiterals"].ECLASSIFIER_ETYPEPARAMETERS:
                this.eTypeParameters.clear();
                this.eTypeParameters.addAll(newValue);
                return;
        }
        _super.prototype.eSet_number_any.call(this, featureID, newValue);
    };
    return EClassifierBase;
}(_ENamedElementImpl__WEBPACK_IMPORTED_MODULE_3__["ENamedElementImpl"]));



/***/ }),

/***/ "./node_modules/crossecore/src/EClassifierImpl.ts":
/*!********************************************************!*\
  !*** ./node_modules/crossecore/src/EClassifierImpl.ts ***!
  \********************************************************/
/*! exports provided: EClassifierImpl */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EClassifierImpl", function() { return EClassifierImpl; });
/* harmony import */ var _EClassifierBase__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./EClassifierBase */ "./node_modules/crossecore/src/EClassifierBase.ts");
/* CrossEcore is a cross-platform modeling framework that generates C#, TypeScript,
 * JavaScript, Swift code from Ecore models with embedded OCL (http://www.crossecore.org/).
 * The original Eclipse Modeling Framework is available at https://www.eclipse.org/modeling/emf/.
 *
 * contributor: Simon Schwichtenberg
 */
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

///<summary>This class was generated.</summary>
var EClassifierImpl = /** @class */ (function (_super) {
    __extends(EClassifierImpl, _super);
    function EClassifierImpl() {
        //implement your generated class here
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.metaObjectID = -1;
        _this.setClassifierID = function (id) {
            _this.metaObjectID = id;
        };
        _this.setGeneratedInstanceClass = function (isGenerated) {
            if (isGenerated) {
                if (_this.generatedInstanceClassName == null) {
                    _this.generatedInstanceClassName = _this.instanceClassName;
                    _this.instanceClassName = null;
                }
            }
            else if (_this.generatedInstanceClassName != null) {
                _this.instanceClassName = _this.generatedInstanceClassName;
                _this.generatedInstanceClassName = null;
            }
        };
        _this.basicSetInstanceTypeName = function (newInstanceTypeName) {
            var oldInstanceTypeName = _this.instanceTypeName;
            _this.instanceTypeName = newInstanceTypeName;
            /*
             if (eNotificationRequired())
             {
             eNotify
             (new ENotificationImpl(this, Notification.SET, EcorePackage.ECLASSIFIER__INSTANCE_TYPE_NAME, oldInstanceTypeName, newInstanceTypeName));
             }
             */
        };
        _this._instanceClass = null;
        return _this;
    }
    Object.defineProperty(EClassifierImpl.prototype, "instanceClass", {
        get: function () {
            return this._instanceClass;
        },
        set: function (value) {
            this._instanceClass = value;
        },
        enumerable: false,
        configurable: true
    });
    EClassifierImpl.prototype.getClassifierID = function () {
        if (this.metaObjectID == -1) {
            this.metaObjectID = this.computeClassifierID();
        }
        return this.metaObjectID;
    };
    EClassifierImpl.prototype.computeClassifierID = function () {
        return this.ePackage != null ?
            this.ePackage.eClassifiers.indexOf(this) :
            -1;
    };
    return EClassifierImpl;
}(_EClassifierBase__WEBPACK_IMPORTED_MODULE_0__["EClassifierBase"]));



/***/ }),

/***/ "./node_modules/crossecore/src/EDataTypeBase.ts":
/*!******************************************************!*\
  !*** ./node_modules/crossecore/src/EDataTypeBase.ts ***!
  \******************************************************/
/*! exports provided: EDataTypeBase */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EDataTypeBase", function() { return EDataTypeBase; });
/* harmony import */ var _EcorePackageLiterals__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./EcorePackageLiterals */ "./node_modules/crossecore/src/EcorePackageLiterals.ts");
/* harmony import */ var _EClassifierImpl__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./EClassifierImpl */ "./node_modules/crossecore/src/EClassifierImpl.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();


var EDataTypeBase = /** @class */ (function (_super) {
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
        enumerable: false,
        configurable: true
    });
    EDataTypeBase.prototype.eStaticClass = function () {
        return EDataTypeBase.eStaticClass;
    };
    EDataTypeBase.prototype.eGet_number_boolean_boolean = function (featureID, resolve, coreType) {
        switch (featureID) {
            case _EcorePackageLiterals__WEBPACK_IMPORTED_MODULE_0__["EcorePackageLiterals"].EDATATYPE_EANNOTATIONS:
                return this.eAnnotations;
            case _EcorePackageLiterals__WEBPACK_IMPORTED_MODULE_0__["EcorePackageLiterals"].EDATATYPE_NAME:
                return this.name;
            case _EcorePackageLiterals__WEBPACK_IMPORTED_MODULE_0__["EcorePackageLiterals"].EDATATYPE_INSTANCECLASSNAME:
                return this.instanceClassName;
            case _EcorePackageLiterals__WEBPACK_IMPORTED_MODULE_0__["EcorePackageLiterals"].EDATATYPE_INSTANCECLASS:
                return this.instanceClass;
            case _EcorePackageLiterals__WEBPACK_IMPORTED_MODULE_0__["EcorePackageLiterals"].EDATATYPE_DEFAULTVALUE:
                return this.defaultValue;
            case _EcorePackageLiterals__WEBPACK_IMPORTED_MODULE_0__["EcorePackageLiterals"].EDATATYPE_INSTANCETYPENAME:
                return this.instanceTypeName;
            case _EcorePackageLiterals__WEBPACK_IMPORTED_MODULE_0__["EcorePackageLiterals"].EDATATYPE_EPACKAGE:
                return this.ePackage;
            case _EcorePackageLiterals__WEBPACK_IMPORTED_MODULE_0__["EcorePackageLiterals"].EDATATYPE_ETYPEPARAMETERS:
                return this.eTypeParameters;
            case _EcorePackageLiterals__WEBPACK_IMPORTED_MODULE_0__["EcorePackageLiterals"].EDATATYPE_SERIALIZABLE:
                return this.serializable;
        }
        //return this.eGetFromEClassifier(featureID, resolve, coreType);
        return _super.prototype.eGet.call(this, featureID, resolve, coreType);
    };
    EDataTypeBase.prototype.eSet_number_any = function (featureID, newValue) {
        switch (featureID) {
            case _EcorePackageLiterals__WEBPACK_IMPORTED_MODULE_0__["EcorePackageLiterals"].EDATATYPE_SERIALIZABLE:
                this.serializable = newValue;
                return;
        }
        _super.prototype.eSet_number_any.call(this, featureID, newValue);
    };
    return EDataTypeBase;
}(_EClassifierImpl__WEBPACK_IMPORTED_MODULE_1__["EClassifierImpl"]));



/***/ }),

/***/ "./node_modules/crossecore/src/EDataTypeImpl.ts":
/*!******************************************************!*\
  !*** ./node_modules/crossecore/src/EDataTypeImpl.ts ***!
  \******************************************************/
/*! exports provided: EDataTypeImpl */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EDataTypeImpl", function() { return EDataTypeImpl; });
/* harmony import */ var _EDataTypeBase__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./EDataTypeBase */ "./node_modules/crossecore/src/EDataTypeBase.ts");
/* CrossEcore is a cross-platform modeling framework that generates C#, TypeScript,
 * JavaScript, Swift code from Ecore models with embedded OCL (http://www.crossecore.org/).
 * The original Eclipse Modeling Framework is available at https://www.eclipse.org/modeling/emf/.
 *
 * contributor: Simon Schwichtenberg
 */
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

///<summary>This class was generated.</summary>
var EDataTypeImpl = /** @class */ (function (_super) {
    __extends(EDataTypeImpl, _super);
    function EDataTypeImpl() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return EDataTypeImpl;
}(_EDataTypeBase__WEBPACK_IMPORTED_MODULE_0__["EDataTypeBase"]));



/***/ }),

/***/ "./node_modules/crossecore/src/EEnumBase.ts":
/*!**************************************************!*\
  !*** ./node_modules/crossecore/src/EEnumBase.ts ***!
  \**************************************************/
/*! exports provided: EEnumBase */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EEnumBase", function() { return EEnumBase; });
/* harmony import */ var _OrderedSet__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./OrderedSet */ "./node_modules/crossecore/src/OrderedSet.ts");
/* harmony import */ var _EDataTypeImpl__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./EDataTypeImpl */ "./node_modules/crossecore/src/EDataTypeImpl.ts");
/* harmony import */ var _EcorePackageLiterals__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./EcorePackageLiterals */ "./node_modules/crossecore/src/EcorePackageLiterals.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();



var EEnumBase = /** @class */ (function (_super) {
    __extends(EEnumBase, _super);
    function EEnumBase() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._eLiterals = null;
        return _this;
    }
    Object.defineProperty(EEnumBase.prototype, "eLiterals", {
        get: function () {
            if (this._eLiterals === null) {
                this._eLiterals = new _OrderedSet__WEBPACK_IMPORTED_MODULE_0__["OrderedSet"](this, _EcorePackageLiterals__WEBPACK_IMPORTED_MODULE_2__["EcorePackageLiterals"].EENUM_ELITERALS, _EcorePackageLiterals__WEBPACK_IMPORTED_MODULE_2__["EcorePackageLiterals"].EENUMLITERAL_EENUM);
            }
            return this._eLiterals;
        },
        enumerable: false,
        configurable: true
    });
    EEnumBase.prototype.getEEnumLiteral = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        if (typeof args[0] === "string") {
            return this.getEEnumLiteral_string(args[0]);
        }
        if (typeof args[0] === "number") {
            return this.getEEnumLiteral_number(args[0]);
        }
    };
    ;
    EEnumBase.prototype.getEEnumLiteral_string = function (name) {
        /*TODO implement function*/
        return null;
    };
    ;
    EEnumBase.prototype.getEEnumLiteral_number = function (value) {
        /*TODO implement function*/
        return null;
    };
    ;
    EEnumBase.prototype.getEEnumLiteralByLiteral = function (literal) {
        /*TODO implement function*/
        return null;
    };
    ;
    EEnumBase.prototype.eStaticClass = function () {
        return EEnumBase.eStaticClass;
    };
    EEnumBase.prototype.eInverseAdd = function (otherEnd, featureID, msgs) {
        switch (featureID) {
            case _EcorePackageLiterals__WEBPACK_IMPORTED_MODULE_2__["EcorePackageLiterals"].EENUM_ELITERALS:
                return this.eLiterals.basicAdd(otherEnd, msgs);
        }
        //return this.eInverseAddFromEDataType(otherEnd, featureID, msgs);
        return _super.prototype.eInverseAdd.call(this, otherEnd, featureID, msgs);
    };
    //public eInverseAddFromEEnum = this.eInverseAdd;
    EEnumBase.prototype.eInverseRemove = function (otherEnd, featureID, msgs) {
        switch (featureID) {
            case _EcorePackageLiterals__WEBPACK_IMPORTED_MODULE_2__["EcorePackageLiterals"].EENUM_ELITERALS:
                return this.eLiterals.basicRemove(otherEnd, msgs);
        }
        //return this.eInverseRemoveFromEDataType(otherEnd, featureID, msgs);
        return _super.prototype.eInverseRemove.call(this, otherEnd, featureID, msgs);
    };
    //public eInverseRemoveFromEEnum = this.eInverseRemove;
    EEnumBase.prototype.eGet_number_boolean_boolean = function (featureID, resolve, coreType) {
        switch (featureID) {
            case _EcorePackageLiterals__WEBPACK_IMPORTED_MODULE_2__["EcorePackageLiterals"].EENUM_EANNOTATIONS:
                return this.eAnnotations;
            case _EcorePackageLiterals__WEBPACK_IMPORTED_MODULE_2__["EcorePackageLiterals"].EENUM_NAME:
                return this.name;
            case _EcorePackageLiterals__WEBPACK_IMPORTED_MODULE_2__["EcorePackageLiterals"].EENUM_INSTANCECLASSNAME:
                return this.instanceClassName;
            case _EcorePackageLiterals__WEBPACK_IMPORTED_MODULE_2__["EcorePackageLiterals"].EENUM_INSTANCECLASS:
                return this.instanceClass;
            case _EcorePackageLiterals__WEBPACK_IMPORTED_MODULE_2__["EcorePackageLiterals"].EENUM_DEFAULTVALUE:
                return this.defaultValue;
            case _EcorePackageLiterals__WEBPACK_IMPORTED_MODULE_2__["EcorePackageLiterals"].EENUM_INSTANCETYPENAME:
                return this.instanceTypeName;
            case _EcorePackageLiterals__WEBPACK_IMPORTED_MODULE_2__["EcorePackageLiterals"].EENUM_EPACKAGE:
                return this.ePackage;
            case _EcorePackageLiterals__WEBPACK_IMPORTED_MODULE_2__["EcorePackageLiterals"].EENUM_ETYPEPARAMETERS:
                return this.eTypeParameters;
            case _EcorePackageLiterals__WEBPACK_IMPORTED_MODULE_2__["EcorePackageLiterals"].EENUM_SERIALIZABLE:
                return this.serializable;
            case _EcorePackageLiterals__WEBPACK_IMPORTED_MODULE_2__["EcorePackageLiterals"].EENUM_ELITERALS:
                return this.eLiterals;
        }
        //return this.eGetFromEDataType(featureID, resolve, coreType);
        return _super.prototype.eGet.call(this, featureID, resolve, coreType);
    };
    EEnumBase.prototype.eSet_number_any = function (featureID, newValue) {
        switch (featureID) {
            case _EcorePackageLiterals__WEBPACK_IMPORTED_MODULE_2__["EcorePackageLiterals"].EENUM_ELITERALS:
                this.eLiterals.clear();
                this.eLiterals.addAll(newValue);
                return;
        }
        _super.prototype.eSet_number_any.call(this, featureID, newValue);
    };
    return EEnumBase;
}(_EDataTypeImpl__WEBPACK_IMPORTED_MODULE_1__["EDataTypeImpl"]));



/***/ }),

/***/ "./node_modules/crossecore/src/EEnumImpl.ts":
/*!**************************************************!*\
  !*** ./node_modules/crossecore/src/EEnumImpl.ts ***!
  \**************************************************/
/*! exports provided: EEnumImpl */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EEnumImpl", function() { return EEnumImpl; });
/* harmony import */ var _EEnumBase__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./EEnumBase */ "./node_modules/crossecore/src/EEnumBase.ts");
/* CrossEcore is a cross-platform modeling framework that generates C#, TypeScript,
 * JavaScript, Swift code from Ecore models with embedded OCL (http://www.crossecore.org/).
 * The original Eclipse Modeling Framework is available at https://www.eclipse.org/modeling/emf/.
 *
 * contributor: Simon Schwichtenberg
 */
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

///<summary>This class was generated.</summary>
var EEnumImpl = /** @class */ (function (_super) {
    __extends(EEnumImpl, _super);
    function EEnumImpl() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return EEnumImpl;
}(_EEnumBase__WEBPACK_IMPORTED_MODULE_0__["EEnumBase"]));



/***/ }),

/***/ "./node_modules/crossecore/src/EEnumLiteralBase.ts":
/*!*********************************************************!*\
  !*** ./node_modules/crossecore/src/EEnumLiteralBase.ts ***!
  \*********************************************************/
/*! exports provided: EEnumLiteralBase */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EEnumLiteralBase", function() { return EEnumLiteralBase; });
/* harmony import */ var _ENamedElementImpl__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ENamedElementImpl */ "./node_modules/crossecore/src/ENamedElementImpl.ts");
/* harmony import */ var _EcorePackageLiterals__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./EcorePackageLiterals */ "./node_modules/crossecore/src/EcorePackageLiterals.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();


var EEnumLiteralBase = /** @class */ (function (_super) {
    __extends(EEnumLiteralBase, _super);
    function EEnumLiteralBase() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._value = 0;
        _this._instance = null;
        _this._literal = '';
        return _this;
    }
    Object.defineProperty(EEnumLiteralBase.prototype, "value", {
        get: function () {
            return this._value;
        },
        set: function (value) {
            this._value = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(EEnumLiteralBase.prototype, "instance", {
        get: function () {
            return this._instance;
        },
        set: function (value) {
            this._instance = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(EEnumLiteralBase.prototype, "literal", {
        get: function () {
            return this._literal;
        },
        set: function (value) {
            this._literal = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(EEnumLiteralBase.prototype, "eEnum", {
        get: function () {
            if (this.eContainerFeatureID() != _EcorePackageLiterals__WEBPACK_IMPORTED_MODULE_1__["EcorePackageLiterals"].EENUMLITERAL_EENUM)
                return null;
            return this.eInternalContainer();
        },
        enumerable: false,
        configurable: true
    });
    EEnumLiteralBase.prototype.eStaticClass = function () {
        return EEnumLiteralBase.eStaticClass;
    };
    EEnumLiteralBase.prototype.eInverseAdd = function (otherEnd, featureID, msgs) {
        switch (featureID) {
            case _EcorePackageLiterals__WEBPACK_IMPORTED_MODULE_1__["EcorePackageLiterals"].EENUMLITERAL_EENUM:
                if (this.eInternalContainer() != null) {
                    msgs = this.eBasicRemoveFromContainer(msgs);
                }
                return this.basicSetEEnum(otherEnd, msgs);
        }
        //return this.eInverseAddFromENamedElement(otherEnd, featureID, msgs);
        return _super.prototype.eInverseAdd.call(this, otherEnd, featureID, msgs);
    };
    //public eInverseAddFromEEnumLiteral = this.eInverseAdd;
    EEnumLiteralBase.prototype.eInverseRemove = function (otherEnd, featureID, msgs) {
        switch (featureID) {
            case _EcorePackageLiterals__WEBPACK_IMPORTED_MODULE_1__["EcorePackageLiterals"].EENUMLITERAL_EENUM:
                return this.basicSetEEnum(null, msgs);
        }
        //return this.eInverseRemoveFromENamedElement(otherEnd, featureID, msgs);
        return _super.prototype.eInverseRemove.call(this, otherEnd, featureID, msgs);
    };
    //public eInverseRemoveFromEEnumLiteral = this.eInverseRemove;
    EEnumLiteralBase.prototype.basicSetEEnum = function (newobj, msgs) {
        msgs = this.eBasicSetContainer(newobj, _EcorePackageLiterals__WEBPACK_IMPORTED_MODULE_1__["EcorePackageLiterals"].EENUMLITERAL_EENUM, msgs);
        return msgs;
    };
    EEnumLiteralBase.prototype.eGet_number_boolean_boolean = function (featureID, resolve, coreType) {
        switch (featureID) {
            case _EcorePackageLiterals__WEBPACK_IMPORTED_MODULE_1__["EcorePackageLiterals"].EENUMLITERAL_EANNOTATIONS:
                return this.eAnnotations;
            case _EcorePackageLiterals__WEBPACK_IMPORTED_MODULE_1__["EcorePackageLiterals"].EENUMLITERAL_NAME:
                return this.name;
            case _EcorePackageLiterals__WEBPACK_IMPORTED_MODULE_1__["EcorePackageLiterals"].EENUMLITERAL_VALUE:
                return this.value;
            case _EcorePackageLiterals__WEBPACK_IMPORTED_MODULE_1__["EcorePackageLiterals"].EENUMLITERAL_INSTANCE:
                return this.instance;
            case _EcorePackageLiterals__WEBPACK_IMPORTED_MODULE_1__["EcorePackageLiterals"].EENUMLITERAL_LITERAL:
                return this.literal;
            case _EcorePackageLiterals__WEBPACK_IMPORTED_MODULE_1__["EcorePackageLiterals"].EENUMLITERAL_EENUM:
                return this.eEnum;
        }
        //return this.eGetFromENamedElement(featureID, resolve, coreType);
        return _super.prototype.eGet.call(this, featureID, resolve, coreType);
    };
    EEnumLiteralBase.prototype.eSet_number_any = function (featureID, newValue) {
        switch (featureID) {
            case _EcorePackageLiterals__WEBPACK_IMPORTED_MODULE_1__["EcorePackageLiterals"].EENUMLITERAL_VALUE:
                this.value = newValue;
                return;
            case _EcorePackageLiterals__WEBPACK_IMPORTED_MODULE_1__["EcorePackageLiterals"].EENUMLITERAL_INSTANCE:
                this.instance = newValue;
                return;
            case _EcorePackageLiterals__WEBPACK_IMPORTED_MODULE_1__["EcorePackageLiterals"].EENUMLITERAL_LITERAL:
                this.literal = newValue;
                return;
        }
        _super.prototype.eSet_number_any.call(this, featureID, newValue);
    };
    return EEnumLiteralBase;
}(_ENamedElementImpl__WEBPACK_IMPORTED_MODULE_0__["ENamedElementImpl"]));



/***/ }),

/***/ "./node_modules/crossecore/src/EEnumLiteralImpl.ts":
/*!*********************************************************!*\
  !*** ./node_modules/crossecore/src/EEnumLiteralImpl.ts ***!
  \*********************************************************/
/*! exports provided: EEnumLiteralImpl */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EEnumLiteralImpl", function() { return EEnumLiteralImpl; });
/* harmony import */ var _EEnumLiteralBase__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./EEnumLiteralBase */ "./node_modules/crossecore/src/EEnumLiteralBase.ts");
/* CrossEcore is a cross-platform modeling framework that generates C#, TypeScript,
 * JavaScript, Swift code from Ecore models with embedded OCL (http://www.crossecore.org/).
 * The original Eclipse Modeling Framework is available at https://www.eclipse.org/modeling/emf/.
 *
 * contributor: Simon Schwichtenberg
 */
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

///<summary>This class was generated.</summary>
var EEnumLiteralImpl = /** @class */ (function (_super) {
    __extends(EEnumLiteralImpl, _super);
    function EEnumLiteralImpl() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return EEnumLiteralImpl;
}(_EEnumLiteralBase__WEBPACK_IMPORTED_MODULE_0__["EEnumLiteralBase"]));



/***/ }),

/***/ "./node_modules/crossecore/src/EFactoryBase.ts":
/*!*****************************************************!*\
  !*** ./node_modules/crossecore/src/EFactoryBase.ts ***!
  \*****************************************************/
/*! exports provided: EFactoryBase */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EFactoryBase", function() { return EFactoryBase; });
/* harmony import */ var _ENotificationImpl__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ENotificationImpl */ "./node_modules/crossecore/src/ENotificationImpl.ts");
/* harmony import */ var _NotificationImpl__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./NotificationImpl */ "./node_modules/crossecore/src/NotificationImpl.ts");
/* harmony import */ var _EcorePackageLiterals__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./EcorePackageLiterals */ "./node_modules/crossecore/src/EcorePackageLiterals.ts");
/* harmony import */ var _EModelElementImpl__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./EModelElementImpl */ "./node_modules/crossecore/src/EModelElementImpl.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();




var EFactoryBase = /** @class */ (function (_super) {
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
                    msgs = (this._ePackage).eInverseRemove(this, _EcorePackageLiterals__WEBPACK_IMPORTED_MODULE_2__["EcorePackageLiterals"].EPACKAGE_EFACTORYINSTANCE, /*EFactory*/ null, msgs);
                }
                if (value != null) {
                    msgs = value.eInverseAdd(this, _EcorePackageLiterals__WEBPACK_IMPORTED_MODULE_2__["EcorePackageLiterals"].EPACKAGE_EFACTORYINSTANCE, /*EFactory*/ null, msgs);
                }
                msgs = this.basicSetEPackage(value, msgs);
                if (msgs != null) {
                    msgs.dispatch();
                }
            }
            else if (this.eNotificationRequired()) {
                this.eNotify(new _ENotificationImpl__WEBPACK_IMPORTED_MODULE_0__["ENotificationImpl"](this, _NotificationImpl__WEBPACK_IMPORTED_MODULE_1__["NotificationImpl"].SET, _EcorePackageLiterals__WEBPACK_IMPORTED_MODULE_2__["EcorePackageLiterals"].EFACTORY_EPACKAGE, value, value));
            }
        },
        enumerable: false,
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
            case _EcorePackageLiterals__WEBPACK_IMPORTED_MODULE_2__["EcorePackageLiterals"].EFACTORY_EPACKAGE:
                if (this._ePackage != null) {
                    msgs = this._ePackage.eInverseRemove(this, _EcorePackageLiterals__WEBPACK_IMPORTED_MODULE_2__["EcorePackageLiterals"].EFACTORY_EPACKAGE, /*EPackage*/ null, msgs);
                }
                return this.basicSetEPackage(otherEnd, msgs);
        }
        //return this.eInverseAddFromEModelElement(otherEnd, featureID, msgs);
        return _super.prototype.eInverseAdd.call(this, otherEnd, featureID, msgs);
    };
    //public eInverseAddFromEFactory = this.eInverseAdd;
    EFactoryBase.prototype.eInverseRemove = function (otherEnd, featureID, msgs) {
        switch (featureID) {
            case _EcorePackageLiterals__WEBPACK_IMPORTED_MODULE_2__["EcorePackageLiterals"].EFACTORY_EPACKAGE:
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
            var notification = new _ENotificationImpl__WEBPACK_IMPORTED_MODULE_0__["ENotificationImpl"](this, _NotificationImpl__WEBPACK_IMPORTED_MODULE_1__["NotificationImpl"].SET, _EcorePackageLiterals__WEBPACK_IMPORTED_MODULE_2__["EcorePackageLiterals"].EFACTORY_EPACKAGE, oldobj, newobj);
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
            case _EcorePackageLiterals__WEBPACK_IMPORTED_MODULE_2__["EcorePackageLiterals"].EFACTORY_EANNOTATIONS:
                return this.eAnnotations;
            case _EcorePackageLiterals__WEBPACK_IMPORTED_MODULE_2__["EcorePackageLiterals"].EFACTORY_EPACKAGE:
                return this.ePackage;
        }
        //return this.eGetFromEModelElement(featureID, resolve, coreType);
        return _super.prototype.eGet.call(this, featureID, resolve, coreType);
    };
    EFactoryBase.prototype.eSet_number_any = function (featureID, newValue) {
        switch (featureID) {
            case _EcorePackageLiterals__WEBPACK_IMPORTED_MODULE_2__["EcorePackageLiterals"].EFACTORY_EPACKAGE:
                this.ePackage = newValue;
                return;
        }
        _super.prototype.eSet_number_any.call(this, featureID, newValue);
    };
    return EFactoryBase;
}(_EModelElementImpl__WEBPACK_IMPORTED_MODULE_3__["EModelElementImpl"]));



/***/ }),

/***/ "./node_modules/crossecore/src/EFactoryImpl.ts":
/*!*****************************************************!*\
  !*** ./node_modules/crossecore/src/EFactoryImpl.ts ***!
  \*****************************************************/
/*! exports provided: EFactoryImpl */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EFactoryImpl", function() { return EFactoryImpl; });
/* harmony import */ var _EFactoryBase__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./EFactoryBase */ "./node_modules/crossecore/src/EFactoryBase.ts");
/* CrossEcore is a cross-platform modeling framework that generates C#, TypeScript,
 * JavaScript, Swift code from Ecore models with embedded OCL (http://www.crossecore.org/).
 * The original Eclipse Modeling Framework is available at https://www.eclipse.org/modeling/emf/.
 *
 * contributor: Simon Schwichtenberg
 */
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

///<summary>This class was generated.</summary>
var EFactoryImpl = /** @class */ (function (_super) {
    __extends(EFactoryImpl, _super);
    function EFactoryImpl() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return EFactoryImpl;
}(_EFactoryBase__WEBPACK_IMPORTED_MODULE_0__["EFactoryBase"]));



/***/ }),

/***/ "./node_modules/crossecore/src/EGenericTypeBase.ts":
/*!*********************************************************!*\
  !*** ./node_modules/crossecore/src/EGenericTypeBase.ts ***!
  \*********************************************************/
/*! exports provided: EGenericTypeBase */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EGenericTypeBase", function() { return EGenericTypeBase; });
/* harmony import */ var _OrderedSet__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./OrderedSet */ "./node_modules/crossecore/src/OrderedSet.ts");
/* harmony import */ var _ENotificationImpl__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ENotificationImpl */ "./node_modules/crossecore/src/ENotificationImpl.ts");
/* harmony import */ var _NotificationImpl__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./NotificationImpl */ "./node_modules/crossecore/src/NotificationImpl.ts");
/* harmony import */ var _EcorePackageLiterals__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./EcorePackageLiterals */ "./node_modules/crossecore/src/EcorePackageLiterals.ts");
/* harmony import */ var _BasicEObjectImpl__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./BasicEObjectImpl */ "./node_modules/crossecore/src/BasicEObjectImpl.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();





var EGenericTypeBase = /** @class */ (function (_super) {
    __extends(EGenericTypeBase, _super);
    function EGenericTypeBase() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._eUpperBound = null;
        _this._eTypeArguments = null;
        _this._eLowerBound = null;
        _this._eTypeParameter = null;
        _this._eClassifier = null;
        return _this;
    }
    Object.defineProperty(EGenericTypeBase.prototype, "eUpperBound", {
        get: function () {
            return this._eUpperBound;
        },
        set: function (value) {
            if (value != this._eUpperBound) {
                var msgs = null;
                if (this._eUpperBound != null) {
                    msgs = (this._eUpperBound).eInverseRemove(this, _BasicEObjectImpl__WEBPACK_IMPORTED_MODULE_4__["BasicEObjectImpl"].EOPPOSITE_FEATURE_BASE - _EcorePackageLiterals__WEBPACK_IMPORTED_MODULE_3__["EcorePackageLiterals"].EGENERICTYPE_EUPPERBOUND, /*null*/ null, msgs);
                }
                if (value != null) {
                    msgs = value.eInverseAdd(this, _BasicEObjectImpl__WEBPACK_IMPORTED_MODULE_4__["BasicEObjectImpl"].EOPPOSITE_FEATURE_BASE - _EcorePackageLiterals__WEBPACK_IMPORTED_MODULE_3__["EcorePackageLiterals"].EGENERICTYPE_EUPPERBOUND, /*null*/ null, msgs);
                }
                msgs = this.basicSetEUpperBound(value, msgs);
                if (msgs != null) {
                    msgs.dispatch();
                }
            }
            else if (this.eNotificationRequired()) {
                this.eNotify(new _ENotificationImpl__WEBPACK_IMPORTED_MODULE_1__["ENotificationImpl"](this, _NotificationImpl__WEBPACK_IMPORTED_MODULE_2__["NotificationImpl"].SET, _EcorePackageLiterals__WEBPACK_IMPORTED_MODULE_3__["EcorePackageLiterals"].EGENERICTYPE_EUPPERBOUND, value, value));
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(EGenericTypeBase.prototype, "eTypeArguments", {
        get: function () {
            if (this._eTypeArguments === null) {
                this._eTypeArguments = new _OrderedSet__WEBPACK_IMPORTED_MODULE_0__["OrderedSet"](this, _EcorePackageLiterals__WEBPACK_IMPORTED_MODULE_3__["EcorePackageLiterals"].EGENERICTYPE_ETYPEARGUMENTS, _BasicEObjectImpl__WEBPACK_IMPORTED_MODULE_4__["BasicEObjectImpl"].EOPPOSITE_FEATURE_BASE - _EcorePackageLiterals__WEBPACK_IMPORTED_MODULE_3__["EcorePackageLiterals"].EGENERICTYPE_ETYPEARGUMENTS);
            }
            return this._eTypeArguments;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(EGenericTypeBase.prototype, "eRawType", {
        get: function () {
            //TODO implement derivation
            return null;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(EGenericTypeBase.prototype, "eLowerBound", {
        get: function () {
            return this._eLowerBound;
        },
        set: function (value) {
            if (value != this._eLowerBound) {
                var msgs = null;
                if (this._eLowerBound != null) {
                    msgs = (this._eLowerBound).eInverseRemove(this, _BasicEObjectImpl__WEBPACK_IMPORTED_MODULE_4__["BasicEObjectImpl"].EOPPOSITE_FEATURE_BASE - _EcorePackageLiterals__WEBPACK_IMPORTED_MODULE_3__["EcorePackageLiterals"].EGENERICTYPE_ELOWERBOUND, /*null*/ null, msgs);
                }
                if (value != null) {
                    msgs = value.eInverseAdd(this, _BasicEObjectImpl__WEBPACK_IMPORTED_MODULE_4__["BasicEObjectImpl"].EOPPOSITE_FEATURE_BASE - _EcorePackageLiterals__WEBPACK_IMPORTED_MODULE_3__["EcorePackageLiterals"].EGENERICTYPE_ELOWERBOUND, /*null*/ null, msgs);
                }
                msgs = this.basicSetELowerBound(value, msgs);
                if (msgs != null) {
                    msgs.dispatch();
                }
            }
            else if (this.eNotificationRequired()) {
                this.eNotify(new _ENotificationImpl__WEBPACK_IMPORTED_MODULE_1__["ENotificationImpl"](this, _NotificationImpl__WEBPACK_IMPORTED_MODULE_2__["NotificationImpl"].SET, _EcorePackageLiterals__WEBPACK_IMPORTED_MODULE_3__["EcorePackageLiterals"].EGENERICTYPE_ELOWERBOUND, value, value));
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(EGenericTypeBase.prototype, "eTypeParameter", {
        get: function () {
            return this._eTypeParameter;
        },
        set: function (value) {
            var oldvalue = this._eTypeParameter;
            this._eTypeParameter = value;
            if (this.eNotificationRequired()) {
                this.eNotify(new _ENotificationImpl__WEBPACK_IMPORTED_MODULE_1__["ENotificationImpl"](this, _NotificationImpl__WEBPACK_IMPORTED_MODULE_2__["NotificationImpl"].SET, _EcorePackageLiterals__WEBPACK_IMPORTED_MODULE_3__["EcorePackageLiterals"].EGENERICTYPE_ETYPEPARAMETER, oldvalue, value));
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(EGenericTypeBase.prototype, "eClassifier", {
        get: function () {
            return this._eClassifier;
        },
        set: function (value) {
            var oldvalue = this._eClassifier;
            this._eClassifier = value;
            if (this.eNotificationRequired()) {
                this.eNotify(new _ENotificationImpl__WEBPACK_IMPORTED_MODULE_1__["ENotificationImpl"](this, _NotificationImpl__WEBPACK_IMPORTED_MODULE_2__["NotificationImpl"].SET, _EcorePackageLiterals__WEBPACK_IMPORTED_MODULE_3__["EcorePackageLiterals"].EGENERICTYPE_ECLASSIFIER, oldvalue, value));
            }
        },
        enumerable: false,
        configurable: true
    });
    EGenericTypeBase.prototype.isInstance = function (object) {
        /*TODO implement function*/
        return null;
    };
    ;
    EGenericTypeBase.prototype.eStaticClass = function () {
        return EGenericTypeBase.eStaticClass;
    };
    EGenericTypeBase.prototype.basicSetETypeParameter = function (newobj, msgs) {
        var oldobj = this._eTypeParameter;
        this._eTypeParameter = newobj;
        if (this.eNotificationRequired()) {
            var notification = new _ENotificationImpl__WEBPACK_IMPORTED_MODULE_1__["ENotificationImpl"](this, _NotificationImpl__WEBPACK_IMPORTED_MODULE_2__["NotificationImpl"].SET, _EcorePackageLiterals__WEBPACK_IMPORTED_MODULE_3__["EcorePackageLiterals"].EGENERICTYPE_ETYPEPARAMETER, oldobj, newobj);
            if (msgs == null) {
                msgs = notification;
            }
            else {
                msgs.add(notification);
            }
        }
        return msgs;
    };
    EGenericTypeBase.prototype.basicSetELowerBound = function (newobj, msgs) {
        var oldobj = this._eLowerBound;
        this._eLowerBound = newobj;
        if (this.eNotificationRequired()) {
            var notification = new _ENotificationImpl__WEBPACK_IMPORTED_MODULE_1__["ENotificationImpl"](this, _NotificationImpl__WEBPACK_IMPORTED_MODULE_2__["NotificationImpl"].SET, _EcorePackageLiterals__WEBPACK_IMPORTED_MODULE_3__["EcorePackageLiterals"].EGENERICTYPE_ELOWERBOUND, oldobj, newobj);
            if (msgs == null) {
                msgs = notification;
            }
            else {
                msgs.add(notification);
            }
        }
        return msgs;
    };
    EGenericTypeBase.prototype.basicSetEClassifier = function (newobj, msgs) {
        var oldobj = this._eClassifier;
        this._eClassifier = newobj;
        if (this.eNotificationRequired()) {
            var notification = new _ENotificationImpl__WEBPACK_IMPORTED_MODULE_1__["ENotificationImpl"](this, _NotificationImpl__WEBPACK_IMPORTED_MODULE_2__["NotificationImpl"].SET, _EcorePackageLiterals__WEBPACK_IMPORTED_MODULE_3__["EcorePackageLiterals"].EGENERICTYPE_ECLASSIFIER, oldobj, newobj);
            if (msgs == null) {
                msgs = notification;
            }
            else {
                msgs.add(notification);
            }
        }
        return msgs;
    };
    EGenericTypeBase.prototype.basicSetEUpperBound = function (newobj, msgs) {
        var oldobj = this._eUpperBound;
        this._eUpperBound = newobj;
        if (this.eNotificationRequired()) {
            var notification = new _ENotificationImpl__WEBPACK_IMPORTED_MODULE_1__["ENotificationImpl"](this, _NotificationImpl__WEBPACK_IMPORTED_MODULE_2__["NotificationImpl"].SET, _EcorePackageLiterals__WEBPACK_IMPORTED_MODULE_3__["EcorePackageLiterals"].EGENERICTYPE_EUPPERBOUND, oldobj, newobj);
            if (msgs == null) {
                msgs = notification;
            }
            else {
                msgs.add(notification);
            }
        }
        return msgs;
    };
    EGenericTypeBase.prototype.eGet_number_boolean_boolean = function (featureID, resolve, coreType) {
        switch (featureID) {
            case _EcorePackageLiterals__WEBPACK_IMPORTED_MODULE_3__["EcorePackageLiterals"].EGENERICTYPE_EUPPERBOUND:
                return this.eUpperBound;
            case _EcorePackageLiterals__WEBPACK_IMPORTED_MODULE_3__["EcorePackageLiterals"].EGENERICTYPE_ETYPEARGUMENTS:
                return this.eTypeArguments;
            case _EcorePackageLiterals__WEBPACK_IMPORTED_MODULE_3__["EcorePackageLiterals"].EGENERICTYPE_ERAWTYPE:
                return this.eRawType;
            case _EcorePackageLiterals__WEBPACK_IMPORTED_MODULE_3__["EcorePackageLiterals"].EGENERICTYPE_ELOWERBOUND:
                return this.eLowerBound;
            case _EcorePackageLiterals__WEBPACK_IMPORTED_MODULE_3__["EcorePackageLiterals"].EGENERICTYPE_ETYPEPARAMETER:
                return this.eTypeParameter;
            case _EcorePackageLiterals__WEBPACK_IMPORTED_MODULE_3__["EcorePackageLiterals"].EGENERICTYPE_ECLASSIFIER:
                return this.eClassifier;
        }
        //return this.eGetFromBasicEObjectImpl(featureID, resolve, coreType);
        return _super.prototype.eGet.call(this, featureID, resolve, coreType);
    };
    EGenericTypeBase.prototype.eSet_number_any = function (featureID, newValue) {
        switch (featureID) {
            case _EcorePackageLiterals__WEBPACK_IMPORTED_MODULE_3__["EcorePackageLiterals"].EGENERICTYPE_EUPPERBOUND:
                this.eUpperBound = newValue;
                return;
            case _EcorePackageLiterals__WEBPACK_IMPORTED_MODULE_3__["EcorePackageLiterals"].EGENERICTYPE_ETYPEARGUMENTS:
                this.eTypeArguments.clear();
                this.eTypeArguments.addAll(newValue);
                return;
            case _EcorePackageLiterals__WEBPACK_IMPORTED_MODULE_3__["EcorePackageLiterals"].EGENERICTYPE_ELOWERBOUND:
                this.eLowerBound = newValue;
                return;
            case _EcorePackageLiterals__WEBPACK_IMPORTED_MODULE_3__["EcorePackageLiterals"].EGENERICTYPE_ETYPEPARAMETER:
                this.eTypeParameter = newValue;
                return;
            case _EcorePackageLiterals__WEBPACK_IMPORTED_MODULE_3__["EcorePackageLiterals"].EGENERICTYPE_ECLASSIFIER:
                this.eClassifier = newValue;
                return;
        }
        _super.prototype.eSet_number_any.call(this, featureID, newValue);
    };
    return EGenericTypeBase;
}(_BasicEObjectImpl__WEBPACK_IMPORTED_MODULE_4__["BasicEObjectImpl"]));



/***/ }),

/***/ "./node_modules/crossecore/src/EGenericTypeImpl.ts":
/*!*********************************************************!*\
  !*** ./node_modules/crossecore/src/EGenericTypeImpl.ts ***!
  \*********************************************************/
/*! exports provided: EGenericTypeImpl */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EGenericTypeImpl", function() { return EGenericTypeImpl; });
/* harmony import */ var _EGenericTypeBase__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./EGenericTypeBase */ "./node_modules/crossecore/src/EGenericTypeBase.ts");
/* CrossEcore is a cross-platform modeling framework that generates C#, TypeScript,
 * JavaScript, Swift code from Ecore models with embedded OCL (http://www.crossecore.org/).
 * The original Eclipse Modeling Framework is available at https://www.eclipse.org/modeling/emf/.
 *
 * contributor: Simon Schwichtenberg
 */
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

///<summary>This class was generated.</summary>
var EGenericTypeImpl = /** @class */ (function (_super) {
    __extends(EGenericTypeImpl, _super);
    function EGenericTypeImpl() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return EGenericTypeImpl;
}(_EGenericTypeBase__WEBPACK_IMPORTED_MODULE_0__["EGenericTypeBase"]));



/***/ }),

/***/ "./node_modules/crossecore/src/EModelElementBase.ts":
/*!**********************************************************!*\
  !*** ./node_modules/crossecore/src/EModelElementBase.ts ***!
  \**********************************************************/
/*! exports provided: EModelElementBase */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EModelElementBase", function() { return EModelElementBase; });
/* harmony import */ var _OrderedSet__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./OrderedSet */ "./node_modules/crossecore/src/OrderedSet.ts");
/* harmony import */ var _EcorePackageLiterals__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./EcorePackageLiterals */ "./node_modules/crossecore/src/EcorePackageLiterals.ts");
/* harmony import */ var _BasicEObjectImpl__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./BasicEObjectImpl */ "./node_modules/crossecore/src/BasicEObjectImpl.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();



var EModelElementBase = /** @class */ (function (_super) {
    __extends(EModelElementBase, _super);
    function EModelElementBase() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._eAnnotations = null;
        return _this;
    }
    Object.defineProperty(EModelElementBase.prototype, "eAnnotations", {
        get: function () {
            if (this._eAnnotations === null) {
                this._eAnnotations = new _OrderedSet__WEBPACK_IMPORTED_MODULE_0__["OrderedSet"](this, _EcorePackageLiterals__WEBPACK_IMPORTED_MODULE_1__["EcorePackageLiterals"].EMODELELEMENT_EANNOTATIONS, _EcorePackageLiterals__WEBPACK_IMPORTED_MODULE_1__["EcorePackageLiterals"].EANNOTATION_EMODELELEMENT);
            }
            return this._eAnnotations;
        },
        enumerable: false,
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
            case _EcorePackageLiterals__WEBPACK_IMPORTED_MODULE_1__["EcorePackageLiterals"].EMODELELEMENT_EANNOTATIONS:
                return this.eAnnotations.basicAdd(otherEnd, msgs);
        }
        //return this.eInverseAddFromBasicEObjectImpl(otherEnd, featureID, msgs);
        return _super.prototype.eInverseAdd.call(this, otherEnd, featureID, msgs);
    };
    //public eInverseAddFromEModelElement = this.eInverseAdd;
    EModelElementBase.prototype.eInverseRemove = function (otherEnd, featureID, msgs) {
        switch (featureID) {
            case _EcorePackageLiterals__WEBPACK_IMPORTED_MODULE_1__["EcorePackageLiterals"].EMODELELEMENT_EANNOTATIONS:
                return this.eAnnotations.basicRemove(otherEnd, msgs);
        }
        //return this.eInverseRemoveFromBasicEObjectImpl(otherEnd, featureID, msgs);
        return _super.prototype.eInverseRemove.call(this, otherEnd, featureID, msgs);
    };
    //public eInverseRemoveFromEModelElement = this.eInverseRemove;
    EModelElementBase.prototype.eGet_number_boolean_boolean = function (featureID, resolve, coreType) {
        switch (featureID) {
            case _EcorePackageLiterals__WEBPACK_IMPORTED_MODULE_1__["EcorePackageLiterals"].EMODELELEMENT_EANNOTATIONS:
                return this.eAnnotations;
        }
        //return this.eGetFromBasicEObjectImpl(featureID, resolve, coreType);
        return _super.prototype.eGet.call(this, featureID, resolve, coreType);
    };
    EModelElementBase.prototype.eSet_number_any = function (featureID, newValue) {
        switch (featureID) {
            case _EcorePackageLiterals__WEBPACK_IMPORTED_MODULE_1__["EcorePackageLiterals"].EMODELELEMENT_EANNOTATIONS:
                this.eAnnotations.clear();
                this.eAnnotations.addAll(newValue);
                return;
        }
        _super.prototype.eSet_number_any.call(this, featureID, newValue);
    };
    return EModelElementBase;
}(_BasicEObjectImpl__WEBPACK_IMPORTED_MODULE_2__["BasicEObjectImpl"]));



/***/ }),

/***/ "./node_modules/crossecore/src/EModelElementImpl.ts":
/*!**********************************************************!*\
  !*** ./node_modules/crossecore/src/EModelElementImpl.ts ***!
  \**********************************************************/
/*! exports provided: EModelElementImpl */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EModelElementImpl", function() { return EModelElementImpl; });
/* harmony import */ var _EModelElementBase__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./EModelElementBase */ "./node_modules/crossecore/src/EModelElementBase.ts");
/* CrossEcore is a cross-platform modeling framework that generates C#, TypeScript,
 * JavaScript, Swift code from Ecore models with embedded OCL (http://www.crossecore.org/).
 * The original Eclipse Modeling Framework is available at https://www.eclipse.org/modeling/emf/.
 *
 * contributor: Simon Schwichtenberg
 */
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

///<summary>This class was generated.</summary>
var EModelElementImpl = /** @class */ (function (_super) {
    __extends(EModelElementImpl, _super);
    function EModelElementImpl() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return EModelElementImpl;
}(_EModelElementBase__WEBPACK_IMPORTED_MODULE_0__["EModelElementBase"]));



/***/ }),

/***/ "./node_modules/crossecore/src/ENamedElementBase.ts":
/*!**********************************************************!*\
  !*** ./node_modules/crossecore/src/ENamedElementBase.ts ***!
  \**********************************************************/
/*! exports provided: ENamedElementBase */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ENamedElementBase", function() { return ENamedElementBase; });
/* harmony import */ var _EModelElementImpl__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./EModelElementImpl */ "./node_modules/crossecore/src/EModelElementImpl.ts");
/* harmony import */ var _EcorePackageLiterals__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./EcorePackageLiterals */ "./node_modules/crossecore/src/EcorePackageLiterals.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();


var ENamedElementBase = /** @class */ (function (_super) {
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
        enumerable: false,
        configurable: true
    });
    ENamedElementBase.prototype.eStaticClass = function () {
        return ENamedElementBase.eStaticClass;
    };
    ENamedElementBase.prototype.eGet_number_boolean_boolean = function (featureID, resolve, coreType) {
        switch (featureID) {
            case _EcorePackageLiterals__WEBPACK_IMPORTED_MODULE_1__["EcorePackageLiterals"].ENAMEDELEMENT_EANNOTATIONS:
                return this.eAnnotations;
            case _EcorePackageLiterals__WEBPACK_IMPORTED_MODULE_1__["EcorePackageLiterals"].ENAMEDELEMENT_NAME:
                return this.name;
        }
        //return this.eGetFromEModelElement(featureID, resolve, coreType);
        return _super.prototype.eGet.call(this, featureID, resolve, coreType);
    };
    ENamedElementBase.prototype.eSet_number_any = function (featureID, newValue) {
        switch (featureID) {
            case _EcorePackageLiterals__WEBPACK_IMPORTED_MODULE_1__["EcorePackageLiterals"].ENAMEDELEMENT_NAME:
                this.name = newValue;
                return;
        }
        _super.prototype.eSet_number_any.call(this, featureID, newValue);
    };
    return ENamedElementBase;
}(_EModelElementImpl__WEBPACK_IMPORTED_MODULE_0__["EModelElementImpl"]));



/***/ }),

/***/ "./node_modules/crossecore/src/ENamedElementImpl.ts":
/*!**********************************************************!*\
  !*** ./node_modules/crossecore/src/ENamedElementImpl.ts ***!
  \**********************************************************/
/*! exports provided: ENamedElementImpl */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ENamedElementImpl", function() { return ENamedElementImpl; });
/* harmony import */ var _ENamedElementBase__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ENamedElementBase */ "./node_modules/crossecore/src/ENamedElementBase.ts");
/* CrossEcore is a cross-platform modeling framework that generates C#, TypeScript,
 * JavaScript, Swift code from Ecore models with embedded OCL (http://www.crossecore.org/).
 * The original Eclipse Modeling Framework is available at https://www.eclipse.org/modeling/emf/.
 *
 * contributor: Simon Schwichtenberg
 */
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

///<summary>This class was generated.</summary>
var ENamedElementImpl = /** @class */ (function (_super) {
    __extends(ENamedElementImpl, _super);
    function ENamedElementImpl() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return ENamedElementImpl;
}(_ENamedElementBase__WEBPACK_IMPORTED_MODULE_0__["ENamedElementBase"]));



/***/ }),

/***/ "./node_modules/crossecore/src/ENotificationImpl.ts":
/*!**********************************************************!*\
  !*** ./node_modules/crossecore/src/ENotificationImpl.ts ***!
  \**********************************************************/
/*! exports provided: ENotificationImpl */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ENotificationImpl", function() { return ENotificationImpl; });
/* harmony import */ var _NotificationImpl__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./NotificationImpl */ "./node_modules/crossecore/src/NotificationImpl.ts");
/* CrossEcore is a cross-platform modeling framework that generates C#, TypeScript,
 * JavaScript, Swift code from Ecore models with embedded OCL (http://www.crossecore.org/).
 * The original Eclipse Modeling Framework is available at https://www.eclipse.org/modeling/emf/.
 *
 * contributor: Simon Schwichtenberg
 */
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var ENotificationImpl = /** @class */ (function (_super) {
    __extends(ENotificationImpl, _super);
    /*
    public constructor( notifier:InternalEObject, eventType:number , featureID:number, oldValue:any, newValue:any){
        this(notifier, eventType, featureID, oldValue, newValue, NotificationImpl.NO_INDEX)
    }
    */
    function ENotificationImpl(notifier, eventType, featureID, oldValue, newValue, position) {
        var _this = _super.call(this, eventType, oldValue, newValue, position, false) || this;
        _this.featureID = _NotificationImpl__WEBPACK_IMPORTED_MODULE_0__["NotificationImpl"].NO_FEATURE_ID;
        _this.getFeature = function () {
            if (_this.feature == null && _this.featureID != _NotificationImpl__WEBPACK_IMPORTED_MODULE_0__["NotificationImpl"].NO_FEATURE_ID) {
                var eClass = _this.notifier.eClass();
                _this.feature = eClass.getEStructuralFeature(_this.featureID);
            }
            return _this.feature;
        };
        _this.notifier = notifier;
        _this.featureID = featureID;
        return _this;
    }
    ENotificationImpl.prototype.getNotifier = function () {
        return this.notifier;
    };
    return ENotificationImpl;
}(_NotificationImpl__WEBPACK_IMPORTED_MODULE_0__["NotificationImpl"]));



/***/ }),

/***/ "./node_modules/crossecore/src/EObjectBase.ts":
/*!****************************************************!*\
  !*** ./node_modules/crossecore/src/EObjectBase.ts ***!
  \****************************************************/
/*! exports provided: EObjectBase */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EObjectBase", function() { return EObjectBase; });
/* harmony import */ var _EStructuralFeatureImpl__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./EStructuralFeatureImpl */ "./node_modules/crossecore/src/EStructuralFeatureImpl.ts");
/* harmony import */ var _BasicEObjectImpl__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./BasicEObjectImpl */ "./node_modules/crossecore/src/BasicEObjectImpl.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();


var EObjectBase = /** @class */ (function (_super) {
    __extends(EObjectBase, _super);
    function EObjectBase() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    EObjectBase.prototype.eIsSet = function (feature) {
        /*TODO implement function*/
        return null;
    };
    ;
    EObjectBase.prototype.eContainmentFeature = function () {
        /*TODO implement function*/
        return null;
    };
    ;
    EObjectBase.prototype.eContainingFeature = function () {
        /*TODO implement function*/
        return null;
    };
    ;
    EObjectBase.prototype.eIsProxy = function () {
        /*TODO implement function*/
        return null;
    };
    ;
    EObjectBase.prototype.eClass = function () {
        /*TODO implement function*/
        return null;
    };
    ;
    EObjectBase.prototype.eContainer = function () {
        /*TODO implement function*/
        return null;
    };
    ;
    EObjectBase.prototype.eInvoke = function (operation, arguments_) {
        /*TODO implement function*/
        return null;
    };
    ;
    EObjectBase.prototype.eSet = function (feature, newValue) {
        /*TODO implement function*/
        return null;
    };
    ;
    EObjectBase.prototype.eContents = function () {
        /*TODO implement function*/
        return null;
    };
    ;
    EObjectBase.prototype.eResource = function () {
        /*TODO implement function*/
        return null;
    };
    ;
    EObjectBase.prototype.eCrossReferences = function () {
        /*TODO implement function*/
        return null;
    };
    ;
    EObjectBase.prototype.eAllContents = function () {
        /*TODO implement function*/
        return null;
    };
    ;
    EObjectBase.prototype.eGet = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        if (args[0] instanceof _EStructuralFeatureImpl__WEBPACK_IMPORTED_MODULE_0__["EStructuralFeatureImpl"] &&
            typeof args[1] === "boolean") {
            return this.eGet_EStructuralFeature_boolean(args[0], args[1]);
        }
        if (args[0] instanceof _EStructuralFeatureImpl__WEBPACK_IMPORTED_MODULE_0__["EStructuralFeatureImpl"]) {
            return this.eGet_EStructuralFeature(args[0]);
        }
    };
    ;
    EObjectBase.prototype.eGet_EStructuralFeature_boolean = function (feature, resolve) {
        /*TODO implement function*/
        return null;
    };
    ;
    EObjectBase.prototype.eGet_EStructuralFeature = function (feature) {
        /*TODO implement function*/
        return null;
    };
    ;
    EObjectBase.prototype.eUnset = function (feature) {
        /*TODO implement function*/
        return null;
    };
    ;
    EObjectBase.prototype.eStaticClass = function () {
        return EObjectBase.eStaticClass;
    };
    EObjectBase.prototype.eGet_number_boolean_boolean = function (featureID, resolve, coreType) {
        //return this.eGetFromBasicEObjectImpl(featureID, resolve, coreType);
        return _super.prototype.eGet.call(this, featureID, resolve, coreType);
    };
    EObjectBase.prototype.eSet_number_any = function (featureID, newValue) {
        switch (featureID) {
        }
        _super.prototype.eSet_number_any.call(this, featureID, newValue);
    };
    return EObjectBase;
}(_BasicEObjectImpl__WEBPACK_IMPORTED_MODULE_1__["BasicEObjectImpl"]));



/***/ }),

/***/ "./node_modules/crossecore/src/EObjectImpl.ts":
/*!****************************************************!*\
  !*** ./node_modules/crossecore/src/EObjectImpl.ts ***!
  \****************************************************/
/*! exports provided: EObjectImpl */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EObjectImpl", function() { return EObjectImpl; });
/* harmony import */ var _EObjectBase__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./EObjectBase */ "./node_modules/crossecore/src/EObjectBase.ts");
/* CrossEcore is a cross-platform modeling framework that generates C#, TypeScript,
 * JavaScript, Swift code from Ecore models with embedded OCL (http://www.crossecore.org/).
 * The original Eclipse Modeling Framework is available at https://www.eclipse.org/modeling/emf/.
 *
 * contributor: Simon Schwichtenberg
 */
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

///<summary>This class was generated.</summary>
var EObjectImpl = /** @class */ (function (_super) {
    __extends(EObjectImpl, _super);
    function EObjectImpl() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return EObjectImpl;
}(_EObjectBase__WEBPACK_IMPORTED_MODULE_0__["EObjectBase"]));



/***/ }),

/***/ "./node_modules/crossecore/src/EOperationBase.ts":
/*!*******************************************************!*\
  !*** ./node_modules/crossecore/src/EOperationBase.ts ***!
  \*******************************************************/
/*! exports provided: EOperationBase */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EOperationBase", function() { return EOperationBase; });
/* harmony import */ var _OrderedSet__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./OrderedSet */ "./node_modules/crossecore/src/OrderedSet.ts");
/* harmony import */ var _EcorePackageLiterals__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./EcorePackageLiterals */ "./node_modules/crossecore/src/EcorePackageLiterals.ts");
/* harmony import */ var _BasicEObjectImpl__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./BasicEObjectImpl */ "./node_modules/crossecore/src/BasicEObjectImpl.ts");
/* harmony import */ var _ETypedElementImpl__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ETypedElementImpl */ "./node_modules/crossecore/src/ETypedElementImpl.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();




var EOperationBase = /** @class */ (function (_super) {
    __extends(EOperationBase, _super);
    function EOperationBase() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._eTypeParameters = null;
        _this._eParameters = null;
        _this._eExceptions = null;
        _this._eGenericExceptions = null;
        return _this;
    }
    Object.defineProperty(EOperationBase.prototype, "eContainingClass", {
        get: function () {
            if (this.eContainerFeatureID() != _EcorePackageLiterals__WEBPACK_IMPORTED_MODULE_1__["EcorePackageLiterals"].EOPERATION_ECONTAININGCLASS)
                return null;
            return this.eInternalContainer();
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(EOperationBase.prototype, "eTypeParameters", {
        get: function () {
            if (this._eTypeParameters === null) {
                this._eTypeParameters = new _OrderedSet__WEBPACK_IMPORTED_MODULE_0__["OrderedSet"](this, _EcorePackageLiterals__WEBPACK_IMPORTED_MODULE_1__["EcorePackageLiterals"].EOPERATION_ETYPEPARAMETERS, _BasicEObjectImpl__WEBPACK_IMPORTED_MODULE_2__["BasicEObjectImpl"].EOPPOSITE_FEATURE_BASE - _EcorePackageLiterals__WEBPACK_IMPORTED_MODULE_1__["EcorePackageLiterals"].EOPERATION_ETYPEPARAMETERS);
            }
            return this._eTypeParameters;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(EOperationBase.prototype, "eParameters", {
        get: function () {
            if (this._eParameters === null) {
                this._eParameters = new _OrderedSet__WEBPACK_IMPORTED_MODULE_0__["OrderedSet"](this, _EcorePackageLiterals__WEBPACK_IMPORTED_MODULE_1__["EcorePackageLiterals"].EOPERATION_EPARAMETERS, _EcorePackageLiterals__WEBPACK_IMPORTED_MODULE_1__["EcorePackageLiterals"].EPARAMETER_EOPERATION);
            }
            return this._eParameters;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(EOperationBase.prototype, "eExceptions", {
        get: function () {
            if (this._eExceptions === null) {
                this._eExceptions = new _OrderedSet__WEBPACK_IMPORTED_MODULE_0__["OrderedSet"](this, _EcorePackageLiterals__WEBPACK_IMPORTED_MODULE_1__["EcorePackageLiterals"].EOPERATION_EEXCEPTIONS, _BasicEObjectImpl__WEBPACK_IMPORTED_MODULE_2__["BasicEObjectImpl"].EOPPOSITE_FEATURE_BASE - _EcorePackageLiterals__WEBPACK_IMPORTED_MODULE_1__["EcorePackageLiterals"].EOPERATION_EEXCEPTIONS);
            }
            return this._eExceptions;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(EOperationBase.prototype, "eGenericExceptions", {
        get: function () {
            if (this._eGenericExceptions === null) {
                this._eGenericExceptions = new _OrderedSet__WEBPACK_IMPORTED_MODULE_0__["OrderedSet"](this, _EcorePackageLiterals__WEBPACK_IMPORTED_MODULE_1__["EcorePackageLiterals"].EOPERATION_EGENERICEXCEPTIONS, _BasicEObjectImpl__WEBPACK_IMPORTED_MODULE_2__["BasicEObjectImpl"].EOPPOSITE_FEATURE_BASE - _EcorePackageLiterals__WEBPACK_IMPORTED_MODULE_1__["EcorePackageLiterals"].EOPERATION_EGENERICEXCEPTIONS);
            }
            return this._eGenericExceptions;
        },
        enumerable: false,
        configurable: true
    });
    EOperationBase.prototype.isOverrideOf = function (someOperation) {
        /*TODO implement function*/
        return null;
    };
    ;
    EOperationBase.prototype.getOperationID = function () {
        /*TODO implement function*/
        return null;
    };
    ;
    EOperationBase.prototype.eStaticClass = function () {
        return EOperationBase.eStaticClass;
    };
    EOperationBase.prototype.eInverseAdd = function (otherEnd, featureID, msgs) {
        switch (featureID) {
            case _EcorePackageLiterals__WEBPACK_IMPORTED_MODULE_1__["EcorePackageLiterals"].EOPERATION_ECONTAININGCLASS:
                if (this.eInternalContainer() != null) {
                    msgs = this.eBasicRemoveFromContainer(msgs);
                }
                return this.basicSetEContainingClass(otherEnd, msgs);
            case _EcorePackageLiterals__WEBPACK_IMPORTED_MODULE_1__["EcorePackageLiterals"].EOPERATION_EPARAMETERS:
                return this.eParameters.basicAdd(otherEnd, msgs);
        }
        //return this.eInverseAddFromETypedElement(otherEnd, featureID, msgs);
        return _super.prototype.eInverseAdd.call(this, otherEnd, featureID, msgs);
    };
    //public eInverseAddFromEOperation = this.eInverseAdd;
    EOperationBase.prototype.eInverseRemove = function (otherEnd, featureID, msgs) {
        switch (featureID) {
            case _EcorePackageLiterals__WEBPACK_IMPORTED_MODULE_1__["EcorePackageLiterals"].EOPERATION_ECONTAININGCLASS:
                return this.basicSetEContainingClass(null, msgs);
            case _EcorePackageLiterals__WEBPACK_IMPORTED_MODULE_1__["EcorePackageLiterals"].EOPERATION_EPARAMETERS:
                return this.eParameters.basicRemove(otherEnd, msgs);
        }
        //return this.eInverseRemoveFromETypedElement(otherEnd, featureID, msgs);
        return _super.prototype.eInverseRemove.call(this, otherEnd, featureID, msgs);
    };
    //public eInverseRemoveFromEOperation = this.eInverseRemove;
    EOperationBase.prototype.basicSetEContainingClass = function (newobj, msgs) {
        msgs = this.eBasicSetContainer(newobj, _EcorePackageLiterals__WEBPACK_IMPORTED_MODULE_1__["EcorePackageLiterals"].EOPERATION_ECONTAININGCLASS, msgs);
        return msgs;
    };
    EOperationBase.prototype.eGet_number_boolean_boolean = function (featureID, resolve, coreType) {
        switch (featureID) {
            case _EcorePackageLiterals__WEBPACK_IMPORTED_MODULE_1__["EcorePackageLiterals"].EOPERATION_EANNOTATIONS:
                return this.eAnnotations;
            case _EcorePackageLiterals__WEBPACK_IMPORTED_MODULE_1__["EcorePackageLiterals"].EOPERATION_NAME:
                return this.name;
            case _EcorePackageLiterals__WEBPACK_IMPORTED_MODULE_1__["EcorePackageLiterals"].EOPERATION_ORDERED:
                return this.ordered;
            case _EcorePackageLiterals__WEBPACK_IMPORTED_MODULE_1__["EcorePackageLiterals"].EOPERATION_UNIQUE:
                return this.unique;
            case _EcorePackageLiterals__WEBPACK_IMPORTED_MODULE_1__["EcorePackageLiterals"].EOPERATION_LOWERBOUND:
                return this.lowerBound;
            case _EcorePackageLiterals__WEBPACK_IMPORTED_MODULE_1__["EcorePackageLiterals"].EOPERATION_UPPERBOUND:
                return this.upperBound;
            case _EcorePackageLiterals__WEBPACK_IMPORTED_MODULE_1__["EcorePackageLiterals"].EOPERATION_MANY:
                return this.many;
            case _EcorePackageLiterals__WEBPACK_IMPORTED_MODULE_1__["EcorePackageLiterals"].EOPERATION_REQUIRED:
                return this.required;
            case _EcorePackageLiterals__WEBPACK_IMPORTED_MODULE_1__["EcorePackageLiterals"].EOPERATION_ETYPE:
                return this.eType;
            case _EcorePackageLiterals__WEBPACK_IMPORTED_MODULE_1__["EcorePackageLiterals"].EOPERATION_EGENERICTYPE:
                return this.eGenericType;
            case _EcorePackageLiterals__WEBPACK_IMPORTED_MODULE_1__["EcorePackageLiterals"].EOPERATION_ECONTAININGCLASS:
                return this.eContainingClass;
            case _EcorePackageLiterals__WEBPACK_IMPORTED_MODULE_1__["EcorePackageLiterals"].EOPERATION_ETYPEPARAMETERS:
                return this.eTypeParameters;
            case _EcorePackageLiterals__WEBPACK_IMPORTED_MODULE_1__["EcorePackageLiterals"].EOPERATION_EPARAMETERS:
                return this.eParameters;
            case _EcorePackageLiterals__WEBPACK_IMPORTED_MODULE_1__["EcorePackageLiterals"].EOPERATION_EEXCEPTIONS:
                return this.eExceptions;
            case _EcorePackageLiterals__WEBPACK_IMPORTED_MODULE_1__["EcorePackageLiterals"].EOPERATION_EGENERICEXCEPTIONS:
                return this.eGenericExceptions;
        }
        //return this.eGetFromETypedElement(featureID, resolve, coreType);
        return _super.prototype.eGet.call(this, featureID, resolve, coreType);
    };
    EOperationBase.prototype.eSet_number_any = function (featureID, newValue) {
        switch (featureID) {
            case _EcorePackageLiterals__WEBPACK_IMPORTED_MODULE_1__["EcorePackageLiterals"].EOPERATION_ETYPEPARAMETERS:
                this.eTypeParameters.clear();
                this.eTypeParameters.addAll(newValue);
                return;
            case _EcorePackageLiterals__WEBPACK_IMPORTED_MODULE_1__["EcorePackageLiterals"].EOPERATION_EPARAMETERS:
                this.eParameters.clear();
                this.eParameters.addAll(newValue);
                return;
            case _EcorePackageLiterals__WEBPACK_IMPORTED_MODULE_1__["EcorePackageLiterals"].EOPERATION_EEXCEPTIONS:
                this.eExceptions.clear();
                this.eExceptions.addAll(newValue);
                return;
            case _EcorePackageLiterals__WEBPACK_IMPORTED_MODULE_1__["EcorePackageLiterals"].EOPERATION_EGENERICEXCEPTIONS:
                this.eGenericExceptions.clear();
                this.eGenericExceptions.addAll(newValue);
                return;
        }
        _super.prototype.eSet_number_any.call(this, featureID, newValue);
    };
    return EOperationBase;
}(_ETypedElementImpl__WEBPACK_IMPORTED_MODULE_3__["ETypedElementImpl"]));



/***/ }),

/***/ "./node_modules/crossecore/src/EOperationImpl.ts":
/*!*******************************************************!*\
  !*** ./node_modules/crossecore/src/EOperationImpl.ts ***!
  \*******************************************************/
/*! exports provided: EOperationImpl */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EOperationImpl", function() { return EOperationImpl; });
/* harmony import */ var _EOperationBase__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./EOperationBase */ "./node_modules/crossecore/src/EOperationBase.ts");
/* CrossEcore is a cross-platform modeling framework that generates C#, TypeScript,
 * JavaScript, Swift code from Ecore models with embedded OCL (http://www.crossecore.org/).
 * The original Eclipse Modeling Framework is available at https://www.eclipse.org/modeling/emf/.
 *
 * contributor: Simon Schwichtenberg
 */
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

///<summary>This class was generated.</summary>
var EOperationImpl = /** @class */ (function (_super) {
    __extends(EOperationImpl, _super);
    function EOperationImpl() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.operationID = -1;
        _this.setOperationID = function (id) {
            _this.operationID = id;
        };
        return _this;
    }
    return EOperationImpl;
}(_EOperationBase__WEBPACK_IMPORTED_MODULE_0__["EOperationBase"]));



/***/ }),

/***/ "./node_modules/crossecore/src/EPackageBase.ts":
/*!*****************************************************!*\
  !*** ./node_modules/crossecore/src/EPackageBase.ts ***!
  \*****************************************************/
/*! exports provided: EPackageBase */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EPackageBase", function() { return EPackageBase; });
/* harmony import */ var _OrderedSet__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./OrderedSet */ "./node_modules/crossecore/src/OrderedSet.ts");
/* harmony import */ var _ENotificationImpl__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ENotificationImpl */ "./node_modules/crossecore/src/ENotificationImpl.ts");
/* harmony import */ var _NotificationImpl__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./NotificationImpl */ "./node_modules/crossecore/src/NotificationImpl.ts");
/* harmony import */ var _EcorePackageLiterals__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./EcorePackageLiterals */ "./node_modules/crossecore/src/EcorePackageLiterals.ts");
/* harmony import */ var _ENamedElementImpl__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ENamedElementImpl */ "./node_modules/crossecore/src/ENamedElementImpl.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();





var EPackageBase = /** @class */ (function (_super) {
    __extends(EPackageBase, _super);
    function EPackageBase() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._nsURI = '';
        _this._nsPrefix = '';
        _this._eFactoryInstance = null;
        _this._eClassifiers = null;
        _this._eSubpackages = null;
        return _this;
    }
    Object.defineProperty(EPackageBase.prototype, "nsURI", {
        get: function () {
            return this._nsURI;
        },
        set: function (value) {
            this._nsURI = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(EPackageBase.prototype, "nsPrefix", {
        get: function () {
            return this._nsPrefix;
        },
        set: function (value) {
            this._nsPrefix = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(EPackageBase.prototype, "eFactoryInstance", {
        get: function () {
            return this._eFactoryInstance;
        },
        set: function (value) {
            if (value != this._eFactoryInstance) {
                var msgs = null;
                if (this._eFactoryInstance != null) {
                    msgs = (this._eFactoryInstance).eInverseRemove(this, _EcorePackageLiterals__WEBPACK_IMPORTED_MODULE_3__["EcorePackageLiterals"].EFACTORY_EPACKAGE, /*EPackage*/ null, msgs);
                }
                if (value != null) {
                    msgs = value.eInverseAdd(this, _EcorePackageLiterals__WEBPACK_IMPORTED_MODULE_3__["EcorePackageLiterals"].EFACTORY_EPACKAGE, /*EPackage*/ null, msgs);
                }
                msgs = this.basicSetEFactoryInstance(value, msgs);
                if (msgs != null) {
                    msgs.dispatch();
                }
            }
            else if (this.eNotificationRequired()) {
                this.eNotify(new _ENotificationImpl__WEBPACK_IMPORTED_MODULE_1__["ENotificationImpl"](this, _NotificationImpl__WEBPACK_IMPORTED_MODULE_2__["NotificationImpl"].SET, _EcorePackageLiterals__WEBPACK_IMPORTED_MODULE_3__["EcorePackageLiterals"].EPACKAGE_EFACTORYINSTANCE, value, value));
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(EPackageBase.prototype, "eClassifiers", {
        get: function () {
            if (this._eClassifiers === null) {
                this._eClassifiers = new _OrderedSet__WEBPACK_IMPORTED_MODULE_0__["OrderedSet"](this, _EcorePackageLiterals__WEBPACK_IMPORTED_MODULE_3__["EcorePackageLiterals"].EPACKAGE_ECLASSIFIERS, _EcorePackageLiterals__WEBPACK_IMPORTED_MODULE_3__["EcorePackageLiterals"].ECLASSIFIER_EPACKAGE);
            }
            return this._eClassifiers;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(EPackageBase.prototype, "eSubpackages", {
        get: function () {
            if (this._eSubpackages === null) {
                this._eSubpackages = new _OrderedSet__WEBPACK_IMPORTED_MODULE_0__["OrderedSet"](this, _EcorePackageLiterals__WEBPACK_IMPORTED_MODULE_3__["EcorePackageLiterals"].EPACKAGE_ESUBPACKAGES, _EcorePackageLiterals__WEBPACK_IMPORTED_MODULE_3__["EcorePackageLiterals"].EPACKAGE_ESUPERPACKAGE);
            }
            return this._eSubpackages;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(EPackageBase.prototype, "eSuperPackage", {
        get: function () {
            if (this.eContainerFeatureID() != _EcorePackageLiterals__WEBPACK_IMPORTED_MODULE_3__["EcorePackageLiterals"].EPACKAGE_ESUPERPACKAGE)
                return null;
            return this.eInternalContainer();
        },
        enumerable: false,
        configurable: true
    });
    EPackageBase.prototype.getEClassifier = function (name) {
        /*TODO implement function*/
        return null;
    };
    ;
    EPackageBase.prototype.eStaticClass = function () {
        return EPackageBase.eStaticClass;
    };
    EPackageBase.prototype.eInverseAdd = function (otherEnd, featureID, msgs) {
        switch (featureID) {
            case _EcorePackageLiterals__WEBPACK_IMPORTED_MODULE_3__["EcorePackageLiterals"].EPACKAGE_EFACTORYINSTANCE:
                if (this._eFactoryInstance != null) {
                    msgs = this._eFactoryInstance.eInverseRemove(this, _EcorePackageLiterals__WEBPACK_IMPORTED_MODULE_3__["EcorePackageLiterals"].EPACKAGE_EFACTORYINSTANCE, /*EFactory*/ null, msgs);
                }
                return this.basicSetEFactoryInstance(otherEnd, msgs);
            case _EcorePackageLiterals__WEBPACK_IMPORTED_MODULE_3__["EcorePackageLiterals"].EPACKAGE_ESUBPACKAGES:
                return this.eSubpackages.basicAdd(otherEnd, msgs);
            case _EcorePackageLiterals__WEBPACK_IMPORTED_MODULE_3__["EcorePackageLiterals"].EPACKAGE_ECLASSIFIERS:
                return this.eClassifiers.basicAdd(otherEnd, msgs);
            case _EcorePackageLiterals__WEBPACK_IMPORTED_MODULE_3__["EcorePackageLiterals"].EPACKAGE_ESUPERPACKAGE:
                if (this.eInternalContainer() != null) {
                    msgs = this.eBasicRemoveFromContainer(msgs);
                }
                return this.basicSetESuperPackage(otherEnd, msgs);
        }
        //return this.eInverseAddFromENamedElement(otherEnd, featureID, msgs);
        return _super.prototype.eInverseAdd.call(this, otherEnd, featureID, msgs);
    };
    //public eInverseAddFromEPackage = this.eInverseAdd;
    EPackageBase.prototype.eInverseRemove = function (otherEnd, featureID, msgs) {
        switch (featureID) {
            case _EcorePackageLiterals__WEBPACK_IMPORTED_MODULE_3__["EcorePackageLiterals"].EPACKAGE_EFACTORYINSTANCE:
                return this.basicSetEFactoryInstance(null, msgs);
            case _EcorePackageLiterals__WEBPACK_IMPORTED_MODULE_3__["EcorePackageLiterals"].EPACKAGE_ESUBPACKAGES:
                return this.eSubpackages.basicRemove(otherEnd, msgs);
            case _EcorePackageLiterals__WEBPACK_IMPORTED_MODULE_3__["EcorePackageLiterals"].EPACKAGE_ECLASSIFIERS:
                return this.eClassifiers.basicRemove(otherEnd, msgs);
            case _EcorePackageLiterals__WEBPACK_IMPORTED_MODULE_3__["EcorePackageLiterals"].EPACKAGE_ESUPERPACKAGE:
                return this.basicSetESuperPackage(null, msgs);
        }
        //return this.eInverseRemoveFromENamedElement(otherEnd, featureID, msgs);
        return _super.prototype.eInverseRemove.call(this, otherEnd, featureID, msgs);
    };
    //public eInverseRemoveFromEPackage = this.eInverseRemove;
    EPackageBase.prototype.basicSetEFactoryInstance = function (newobj, msgs) {
        var oldobj = this._eFactoryInstance;
        this._eFactoryInstance = newobj;
        if (this.eNotificationRequired()) {
            var notification = new _ENotificationImpl__WEBPACK_IMPORTED_MODULE_1__["ENotificationImpl"](this, _NotificationImpl__WEBPACK_IMPORTED_MODULE_2__["NotificationImpl"].SET, _EcorePackageLiterals__WEBPACK_IMPORTED_MODULE_3__["EcorePackageLiterals"].EPACKAGE_EFACTORYINSTANCE, oldobj, newobj);
            if (msgs == null) {
                msgs = notification;
            }
            else {
                msgs.add(notification);
            }
        }
        return msgs;
    };
    EPackageBase.prototype.basicSetESuperPackage = function (newobj, msgs) {
        msgs = this.eBasicSetContainer(newobj, _EcorePackageLiterals__WEBPACK_IMPORTED_MODULE_3__["EcorePackageLiterals"].EPACKAGE_ESUPERPACKAGE, msgs);
        return msgs;
    };
    EPackageBase.prototype.eGet_number_boolean_boolean = function (featureID, resolve, coreType) {
        switch (featureID) {
            case _EcorePackageLiterals__WEBPACK_IMPORTED_MODULE_3__["EcorePackageLiterals"].EPACKAGE_EANNOTATIONS:
                return this.eAnnotations;
            case _EcorePackageLiterals__WEBPACK_IMPORTED_MODULE_3__["EcorePackageLiterals"].EPACKAGE_NAME:
                return this.name;
            case _EcorePackageLiterals__WEBPACK_IMPORTED_MODULE_3__["EcorePackageLiterals"].EPACKAGE_NSURI:
                return this.nsURI;
            case _EcorePackageLiterals__WEBPACK_IMPORTED_MODULE_3__["EcorePackageLiterals"].EPACKAGE_NSPREFIX:
                return this.nsPrefix;
            case _EcorePackageLiterals__WEBPACK_IMPORTED_MODULE_3__["EcorePackageLiterals"].EPACKAGE_EFACTORYINSTANCE:
                return this.eFactoryInstance;
            case _EcorePackageLiterals__WEBPACK_IMPORTED_MODULE_3__["EcorePackageLiterals"].EPACKAGE_ECLASSIFIERS:
                return this.eClassifiers;
            case _EcorePackageLiterals__WEBPACK_IMPORTED_MODULE_3__["EcorePackageLiterals"].EPACKAGE_ESUBPACKAGES:
                return this.eSubpackages;
            case _EcorePackageLiterals__WEBPACK_IMPORTED_MODULE_3__["EcorePackageLiterals"].EPACKAGE_ESUPERPACKAGE:
                return this.eSuperPackage;
        }
        //return this.eGetFromENamedElement(featureID, resolve, coreType);
        return _super.prototype.eGet.call(this, featureID, resolve, coreType);
    };
    EPackageBase.prototype.eSet_number_any = function (featureID, newValue) {
        switch (featureID) {
            case _EcorePackageLiterals__WEBPACK_IMPORTED_MODULE_3__["EcorePackageLiterals"].EPACKAGE_NSURI:
                this.nsURI = newValue;
                return;
            case _EcorePackageLiterals__WEBPACK_IMPORTED_MODULE_3__["EcorePackageLiterals"].EPACKAGE_NSPREFIX:
                this.nsPrefix = newValue;
                return;
            case _EcorePackageLiterals__WEBPACK_IMPORTED_MODULE_3__["EcorePackageLiterals"].EPACKAGE_EFACTORYINSTANCE:
                this.eFactoryInstance = newValue;
                return;
            case _EcorePackageLiterals__WEBPACK_IMPORTED_MODULE_3__["EcorePackageLiterals"].EPACKAGE_ECLASSIFIERS:
                this.eClassifiers.clear();
                this.eClassifiers.addAll(newValue);
                return;
            case _EcorePackageLiterals__WEBPACK_IMPORTED_MODULE_3__["EcorePackageLiterals"].EPACKAGE_ESUBPACKAGES:
                this.eSubpackages.clear();
                this.eSubpackages.addAll(newValue);
                return;
        }
        _super.prototype.eSet_number_any.call(this, featureID, newValue);
    };
    return EPackageBase;
}(_ENamedElementImpl__WEBPACK_IMPORTED_MODULE_4__["ENamedElementImpl"]));



/***/ }),

/***/ "./node_modules/crossecore/src/EPackageImpl.ts":
/*!*****************************************************!*\
  !*** ./node_modules/crossecore/src/EPackageImpl.ts ***!
  \*****************************************************/
/*! exports provided: EPackageImpl */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EPackageImpl", function() { return EPackageImpl; });
/* harmony import */ var _EPackageBase__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./EPackageBase */ "./node_modules/crossecore/src/EPackageBase.ts");
/* CrossEcore is a cross-platform modeling framework that generates C#, TypeScript,
 * JavaScript, Swift code from Ecore models with embedded OCL (http://www.crossecore.org/).
 * The original Eclipse Modeling Framework is available at https://www.eclipse.org/modeling/emf/.
 *
 * contributor: Simon Schwichtenberg
 */
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
///<summary>This class was generated.</summary>

var EPackageImpl = /** @class */ (function (_super) {
    __extends(EPackageImpl, _super);
    function EPackageImpl() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.createEClass = function (id) {
            var c = _this.ecoreFactory.createEClass();
            c.setClassifierID(id);
            _this.eClassifiers.add(c);
            return c;
        };
        _this.createEEnum = function (id) {
            var e = _this.ecoreFactory.createEEnum();
            e.setClassifierID(id);
            _this.eClassifiers.add(e);
            return e;
        };
        _this.createEDataType = function (id) {
            var d = _this.ecoreFactory.createEDataType();
            d.setClassifierID(id);
            _this.eClassifiers.add(d);
            return d;
        };
        _this.createEAttribute = function (owner, id) {
            var a = _this.ecoreFactory.createEAttribute();
            a.setFeatureID(id);
            owner.eStructuralFeatures.add(a);
        };
        _this.createEReference = function (owner, id) {
            var r = _this.ecoreFactory.createEReference();
            r.setFeatureID(id);
            owner.eStructuralFeatures.add(r);
        };
        _this.createEOperation = function (owner, id) {
            var o = _this.ecoreFactory.createEOperation();
            o.setOperationID(id);
            owner.eOperations.add(o);
        };
        _this.initEClass_ = function (c, instanceClass, name, isAbstract, isInterface, isGenerated) {
            _this.initEClassifier(c, _this.ecorePackage.getEClass(), instanceClass, name, isGenerated);
            c.abstract = isAbstract;
            c.interface = isInterface;
            return c;
        };
        _this.initEClass = function (c, instanceClass, name, isAbstract, isInterface, isGenerated, instanceTypeName) {
            instanceTypeName = instanceTypeName !== undefined ? instanceTypeName : null;
            _this.initEClass_(c, instanceClass, name, isAbstract, isInterface, isGenerated);
            if (instanceTypeName != null) {
                _this.setInstanceTypeName(c, instanceTypeName);
            }
            return c;
        };
        _this.initEDataType_ = function (d, instanceClass, name, isSerializable) {
            _this.initEClassifier(d, _this.ecorePackage.getEDataType(), instanceClass, name, false);
            d.serializable = isSerializable;
            return d;
        };
        _this.initEDataType__ = function (d, instanceClass, name, isSerializable, isGenerated) {
            _this.initEClassifier(d, _this.ecorePackage.getEDataType(), instanceClass, name, isGenerated);
            d.serializable = isSerializable;
            return d;
        };
        _this.initEDataType = function (d, instanceClass, name, isSerializable, isGenerated, instanceTypeName) {
            isGenerated = isGenerated !== undefined ? isGenerated : false;
            instanceTypeName = instanceTypeName !== undefined ? instanceTypeName : null;
            _this.initEDataType__(d, instanceClass, name, isSerializable, isGenerated);
            if (instanceTypeName != null) {
                _this.setInstanceTypeName(d, instanceTypeName);
            }
            return d;
        };
        _this.initEClassifier_ = function (o, metaObject, instanceClass, name) {
            o.name = name;
            if (instanceClass != null) {
                o.instanceClass = instanceClass;
            }
        };
        _this.initEClassifier = function (o, metaObject, instanceClass, name, isGenerated) {
            o.name = name;
            if (instanceClass != null) {
                o.instanceClass = instanceClass;
            }
            if (isGenerated !== undefined && isGenerated) {
                _this.setGeneratedClassName(o);
            }
        };
        _this.setGeneratedClassName = function (eClassifier) {
            eClassifier.setGeneratedInstanceClass(true);
        };
        _this.setInstanceTypeName = function (eClassifier, instanceTypeName) {
            eClassifier.basicSetInstanceTypeName(instanceTypeName);
        };
        //a:EAttribute, type:EClassifier, name:string, defaultValue:string , lowerBound:number, upperBound:number, isTransient:boolean, isVolatile:boolean, isChangeable:boolean, isUnsettable:boolean, isID:boolean, isUnique:boolean, isDerived:boolean):EAttribute=>
        //a:EAttribute,type:EClassifier, name:string, defaultValue:string, lowerBound:number, upperBound:number, isTransient:boolean, isVolatile:boolean, isChangeable:boolean, isUnsettable:boolean, isID:boolean, isUnique:boolean, isDerived:boolean, isOrdered:boolean):EAttribute=>
        //a:EAttribute, type:EClassifier, name:string, defaultValue:string, lowerBound:number, upperBound:number, containerClass:Function, isTransient:boolean, isVolatile:boolean, isChangeable:boolean, isUnsettable:boolean, isID:boolean, isUnique:boolean, isDerived:boolean, isOrdered:boolean):EAttribute=>
        //a:EAttribute, type:EGenericType, name:string, defaultValue:string, lowerBound:number, upperBound:number, containerClass:Function, isTransient:boolean, isVolatile:boolean, isChangeable:boolean, isUnsettable:boolean, isID:boolean, isUnique:boolean, isDerived:boolean, isOrdered:boolean):EAttribute=>
        _this.initEAttribute13 = function (a, type, name, defaultValue, lowerBound, upperBound, isTransient, isVolatile, isChangeable, isUnsettable, isID, isUnique, isDerived) {
            return _this.initEAttribute14(a, type, name, defaultValue, lowerBound, upperBound, isTransient, isVolatile, isChangeable, isUnsettable, isID, isUnique, isDerived, true);
        };
        _this.initEAttribute14 = function (a, type, name, defaultValue, lowerBound, upperBound, isTransient, isVolatile, isChangeable, isUnsettable, isID, isUnique, isDerived, isOrdered) {
            _this.initEAttribute_EClassifier(a, type, name, defaultValue, lowerBound, upperBound, a.eContainer().instanceClass, isTransient, isVolatile, isChangeable, isUnsettable, isID, isUnique, isDerived, isOrdered);
            return a;
        };
        _this.initEAttribute_EClassifier = function (a, type, name, defaultValue, lowerBound, upperBound, containerClass, isTransient, isVolatile, isChangeable, isUnsettable, isID, isUnique, isDerived, isOrdered) {
            _this.initEStructuralFeature_EClassifier(a, type, name, defaultValue, lowerBound, upperBound, containerClass, isTransient, isVolatile, isChangeable, isUnsettable, isUnique, isDerived, isOrdered);
            a.iD = isID;
            return a;
        };
        _this.initEAttribute_EGenericType = function (a, type, name, defaultValue, lowerBound, upperBound, containerClass, isTransient, isVolatile, isChangeable, isUnsettable, isID, isUnique, isDerived, isOrdered) {
            _this.initEStructuralFeature_EGenericType(a, type, name, defaultValue, lowerBound, upperBound, containerClass, isTransient, isVolatile, isChangeable, isUnsettable, isUnique, isDerived, isOrdered);
            a.iD = isID;
            return a;
        };
        _this.initEStructuralFeature_EClassifier = function (s, type, name, defaultValue, lowerBound, upperBound, containerClass, isTransient, isVolatile, isChangeable, isUnsettable, isUnique, isDerived, isOrdered) {
            s.name = name;
            s.setContainerClass(containerClass);
            s.transient = isTransient;
            s.volatile = isVolatile;
            s.changeable = isChangeable;
            s.unsettable = isUnsettable;
            s.unique = isUnique;
            s.derived = isDerived;
            s.ordered = isOrdered;
            s.lowerBound = lowerBound;
            s.upperBound = upperBound;
            s.eType = type;
            if (defaultValue != null) {
                s.defaultValueLiteral = defaultValue;
            }
        };
        _this.initEStructuralFeature_EGenericType = function (s, type, name, defaultValue, lowerBound, upperBound, containerClass, isTransient, isVolatile, isChangeable, isUnsettable, isUnique, isDerived, isOrdered) {
            s.name = name;
            s.setContainerClass(containerClass);
            s.transient = isTransient;
            s.volatile = isVolatile;
            s.changeable = isChangeable;
            s.unsettable = isUnsettable;
            s.unique = isUnique;
            s.derived = isDerived;
            s.ordered = isOrdered;
            s.lowerBound = lowerBound;
            s.upperBound = upperBound;
            s.eGenericType = type;
            if (defaultValue != null) {
                s.defaultValueLiteral = defaultValue;
            }
        };
        _this.IS_RESOLVABLE = true;
        _this.initEReference = function (r, type, otherEnd, name, defaultValue, lowerBound, upperBound, containerClass, isTransient, isVolatile, isChangeable, isContainment, isResolveProxies, isUnsettable, isUnique, isDerived, isOrdered) {
            _this.initEStructuralFeature_EClassifier(r, type, name, defaultValue, lowerBound, upperBound, containerClass, isTransient, isVolatile, isChangeable, isUnsettable, isUnique, isDerived, isOrdered);
            r.containment = isContainment;
            if (otherEnd != null) {
                r.eOpposite = otherEnd;
            }
            r.resolveProxies = isResolveProxies;
            return r;
        };
        //TODO fix quickfix for method overloading
        _this.initEReference_EGenericType = function (r, type, otherEnd, name, defaultValue, lowerBound, upperBound, containerClass, isTransient, isVolatile, isChangeable, isContainment, isResolveProxies, isUnsettable, isUnique, isDerived, isOrdered) {
            _this.initEStructuralFeature_EGenericType(r, type, name, defaultValue, lowerBound, upperBound, containerClass, isTransient, isVolatile, isChangeable, isUnsettable, isUnique, isDerived, isOrdered);
            r.containment = isContainment;
            if (otherEnd != null) {
                r.eOpposite = otherEnd;
            }
            r.resolveProxies = isResolveProxies;
            return r;
        };
        _this.addEOperation_1 = function (owner, type, name) {
            var o = _this.ecoreFactory.createEOperation();
            _this.initEOperation_1(o, type, name);
            owner.eOperations.add(o);
            return o;
        };
        _this.addEOperation_2 = function (owner, type, name, lowerBound, upperBound) {
            var o = _this.ecoreFactory.createEOperation();
            _this.initEOperation_2(o, type, name, lowerBound, upperBound);
            owner.eOperations.add(o);
            return o;
        };
        _this.addEOperation_3 = function (owner, type, name, lowerBound, upperBound, isUnique, isOrdered) {
            var o = _this.ecoreFactory.createEOperation();
            _this.initEOperation_3(o, type, name, lowerBound, upperBound, isUnique, isOrdered);
            owner.eOperations.add(o);
            return o;
        };
        _this.initEOperation_1 = function (eOperation, type, name) {
            eOperation.eType = type;
            eOperation.name = name;
            return eOperation;
        };
        _this.initEOperation_2 = function (eOperation, type, name, lowerBound, upperBound) {
            _this.initEOperation_1(eOperation, type, name);
            eOperation.lowerBound = lowerBound;
            eOperation.upperBound = upperBound;
            return eOperation;
        };
        _this.initEOperation_3 = function (eOperation, type, name, lowerBound, upperBound, isUnique, isOrdered) {
            _this.initEOperation_2(eOperation, type, name, lowerBound, upperBound);
            eOperation.unique = isUnique;
            eOperation.ordered = isOrdered;
            return eOperation;
        };
        _this.initEOperation_4 = function (eOperation, eGenericType) {
            eOperation.eGenericType = eGenericType;
        };
        return _this;
    }
    /*
    constructor(packageURI?:string, factory?:EcoreFactory)
    {
        super();
        this.ecoreFactory = factory;
        this.ecorePackage = this as any as EcorePackage;


    }

    */
    /*
     constructor (packageURI?:string, factory?:EFactory)
     {
        //TODO registry
        super();

         if(packageURI!==undefined && factory!==undefined){

            if (factory === EcoreFactoryInstance.eINSTANCE as any as EFactory)
             {
                 this.ecorePackage = this as any as EcorePackage;
                 this.ecoreFactory = factory as any as EcoreFactory;
             }
             else
             {
                 this.ecorePackage = EcorePackageImpl.eINSTANCE;
                 this.ecoreFactory = EcoreFactoryInstance.eINSTANCE;
             }
         }
         else{
             this.ecoreFactory = EcoreFactoryInstance.eINSTANCE;
             this.ecorePackage = EcorePackageImpl.eINSTANCE;
         }

     }
     */
    EPackageImpl.prototype.getEClassifier = function (name) {
        for (var _i = 0, _a = this.eClassifiers; _i < _a.length; _i++) {
            var eclassifier = _a[_i];
            if (eclassifier.name === name) {
                return eclassifier;
            }
        }
        return null;
    };
    ;
    EPackageImpl.prototype.initEEnum = function (e, instanceClass, name) {
        this.initEClassifier(e, this.ecorePackage.getEEnum(), instanceClass, name, true);
        return e;
    };
    EPackageImpl.IS_ABSTRACT = true;
    EPackageImpl.IS_INTERFACE = true;
    EPackageImpl.IS_GENERATED_INSTANCE_CLASS = true;
    EPackageImpl.IS_SERIALIZABLE = true;
    EPackageImpl.IS_DERIVED = true;
    EPackageImpl.IS_TRANSIENT = true;
    EPackageImpl.IS_VOLATILE = true;
    EPackageImpl.IS_CHANGEABLE = true;
    EPackageImpl.IS_UNSETTABLE = true;
    EPackageImpl.IS_UNIQUE = true;
    EPackageImpl.IS_ID = true;
    EPackageImpl.IS_ORDERED = true;
    EPackageImpl.IS_COMPOSITE = true;
    EPackageImpl.IS_RESOLVE_PROXIES = true;
    return EPackageImpl;
}(_EPackageBase__WEBPACK_IMPORTED_MODULE_0__["EPackageBase"]));



/***/ }),

/***/ "./node_modules/crossecore/src/EParameterBase.ts":
/*!*******************************************************!*\
  !*** ./node_modules/crossecore/src/EParameterBase.ts ***!
  \*******************************************************/
/*! exports provided: EParameterBase */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EParameterBase", function() { return EParameterBase; });
/* harmony import */ var _EcorePackageLiterals__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./EcorePackageLiterals */ "./node_modules/crossecore/src/EcorePackageLiterals.ts");
/* harmony import */ var _ETypedElementImpl__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ETypedElementImpl */ "./node_modules/crossecore/src/ETypedElementImpl.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();


var EParameterBase = /** @class */ (function (_super) {
    __extends(EParameterBase, _super);
    function EParameterBase() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(EParameterBase.prototype, "eOperation", {
        get: function () {
            if (this.eContainerFeatureID() != _EcorePackageLiterals__WEBPACK_IMPORTED_MODULE_0__["EcorePackageLiterals"].EPARAMETER_EOPERATION)
                return null;
            return this.eInternalContainer();
        },
        enumerable: false,
        configurable: true
    });
    EParameterBase.prototype.eStaticClass = function () {
        return EParameterBase.eStaticClass;
    };
    EParameterBase.prototype.eInverseAdd = function (otherEnd, featureID, msgs) {
        switch (featureID) {
            case _EcorePackageLiterals__WEBPACK_IMPORTED_MODULE_0__["EcorePackageLiterals"].EPARAMETER_EOPERATION:
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
            case _EcorePackageLiterals__WEBPACK_IMPORTED_MODULE_0__["EcorePackageLiterals"].EPARAMETER_EOPERATION:
                return this.basicSetEOperation(null, msgs);
        }
        //return this.eInverseRemoveFromETypedElement(otherEnd, featureID, msgs);
        return _super.prototype.eInverseRemove.call(this, otherEnd, featureID, msgs);
    };
    //public eInverseRemoveFromEParameter = this.eInverseRemove;
    EParameterBase.prototype.basicSetEOperation = function (newobj, msgs) {
        msgs = this.eBasicSetContainer(newobj, _EcorePackageLiterals__WEBPACK_IMPORTED_MODULE_0__["EcorePackageLiterals"].EPARAMETER_EOPERATION, msgs);
        return msgs;
    };
    EParameterBase.prototype.eGet_number_boolean_boolean = function (featureID, resolve, coreType) {
        switch (featureID) {
            case _EcorePackageLiterals__WEBPACK_IMPORTED_MODULE_0__["EcorePackageLiterals"].EPARAMETER_EANNOTATIONS:
                return this.eAnnotations;
            case _EcorePackageLiterals__WEBPACK_IMPORTED_MODULE_0__["EcorePackageLiterals"].EPARAMETER_NAME:
                return this.name;
            case _EcorePackageLiterals__WEBPACK_IMPORTED_MODULE_0__["EcorePackageLiterals"].EPARAMETER_ORDERED:
                return this.ordered;
            case _EcorePackageLiterals__WEBPACK_IMPORTED_MODULE_0__["EcorePackageLiterals"].EPARAMETER_UNIQUE:
                return this.unique;
            case _EcorePackageLiterals__WEBPACK_IMPORTED_MODULE_0__["EcorePackageLiterals"].EPARAMETER_LOWERBOUND:
                return this.lowerBound;
            case _EcorePackageLiterals__WEBPACK_IMPORTED_MODULE_0__["EcorePackageLiterals"].EPARAMETER_UPPERBOUND:
                return this.upperBound;
            case _EcorePackageLiterals__WEBPACK_IMPORTED_MODULE_0__["EcorePackageLiterals"].EPARAMETER_MANY:
                return this.many;
            case _EcorePackageLiterals__WEBPACK_IMPORTED_MODULE_0__["EcorePackageLiterals"].EPARAMETER_REQUIRED:
                return this.required;
            case _EcorePackageLiterals__WEBPACK_IMPORTED_MODULE_0__["EcorePackageLiterals"].EPARAMETER_ETYPE:
                return this.eType;
            case _EcorePackageLiterals__WEBPACK_IMPORTED_MODULE_0__["EcorePackageLiterals"].EPARAMETER_EGENERICTYPE:
                return this.eGenericType;
            case _EcorePackageLiterals__WEBPACK_IMPORTED_MODULE_0__["EcorePackageLiterals"].EPARAMETER_EOPERATION:
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
}(_ETypedElementImpl__WEBPACK_IMPORTED_MODULE_1__["ETypedElementImpl"]));



/***/ }),

/***/ "./node_modules/crossecore/src/EParameterImpl.ts":
/*!*******************************************************!*\
  !*** ./node_modules/crossecore/src/EParameterImpl.ts ***!
  \*******************************************************/
/*! exports provided: EParameterImpl */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EParameterImpl", function() { return EParameterImpl; });
/* harmony import */ var _EParameterBase__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./EParameterBase */ "./node_modules/crossecore/src/EParameterBase.ts");
/* CrossEcore is a cross-platform modeling framework that generates C#, TypeScript,
 * JavaScript, Swift code from Ecore models with embedded OCL (http://www.crossecore.org/).
 * The original Eclipse Modeling Framework is available at https://www.eclipse.org/modeling/emf/.
 *
 * contributor: Simon Schwichtenberg
 */
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

///<summary>This class was generated.</summary>
var EParameterImpl = /** @class */ (function (_super) {
    __extends(EParameterImpl, _super);
    function EParameterImpl() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return EParameterImpl;
}(_EParameterBase__WEBPACK_IMPORTED_MODULE_0__["EParameterBase"]));



/***/ }),

/***/ "./node_modules/crossecore/src/EReferenceBase.ts":
/*!*******************************************************!*\
  !*** ./node_modules/crossecore/src/EReferenceBase.ts ***!
  \*******************************************************/
/*! exports provided: EReferenceBase */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EReferenceBase", function() { return EReferenceBase; });
/* harmony import */ var _OrderedSet__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./OrderedSet */ "./node_modules/crossecore/src/OrderedSet.ts");
/* harmony import */ var _ENotificationImpl__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ENotificationImpl */ "./node_modules/crossecore/src/ENotificationImpl.ts");
/* harmony import */ var _NotificationImpl__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./NotificationImpl */ "./node_modules/crossecore/src/NotificationImpl.ts");
/* harmony import */ var _EStructuralFeatureImpl__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./EStructuralFeatureImpl */ "./node_modules/crossecore/src/EStructuralFeatureImpl.ts");
/* harmony import */ var _EcorePackageLiterals__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./EcorePackageLiterals */ "./node_modules/crossecore/src/EcorePackageLiterals.ts");
/* harmony import */ var _BasicEObjectImpl__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./BasicEObjectImpl */ "./node_modules/crossecore/src/BasicEObjectImpl.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();






var EReferenceBase = /** @class */ (function (_super) {
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
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(EReferenceBase.prototype, "container", {
        get: function () {
            //TODO implement derivation
            return null;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(EReferenceBase.prototype, "resolveProxies", {
        get: function () {
            return this._resolveProxies;
        },
        set: function (value) {
            this._resolveProxies = value;
        },
        enumerable: false,
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
                this.eNotify(new _ENotificationImpl__WEBPACK_IMPORTED_MODULE_1__["ENotificationImpl"](this, _NotificationImpl__WEBPACK_IMPORTED_MODULE_2__["NotificationImpl"].SET, _EcorePackageLiterals__WEBPACK_IMPORTED_MODULE_4__["EcorePackageLiterals"].EREFERENCE_EOPPOSITE, oldvalue, value));
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(EReferenceBase.prototype, "eReferenceType", {
        get: function () {
            //TODO implement derivation
            return null;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(EReferenceBase.prototype, "eKeys", {
        get: function () {
            if (this._eKeys === null) {
                this._eKeys = new _OrderedSet__WEBPACK_IMPORTED_MODULE_0__["OrderedSet"](this, _EcorePackageLiterals__WEBPACK_IMPORTED_MODULE_4__["EcorePackageLiterals"].EREFERENCE_EKEYS, _BasicEObjectImpl__WEBPACK_IMPORTED_MODULE_5__["BasicEObjectImpl"].EOPPOSITE_FEATURE_BASE - _EcorePackageLiterals__WEBPACK_IMPORTED_MODULE_4__["EcorePackageLiterals"].EREFERENCE_EKEYS);
            }
            return this._eKeys;
        },
        enumerable: false,
        configurable: true
    });
    EReferenceBase.prototype.eStaticClass = function () {
        return EReferenceBase.eStaticClass;
    };
    EReferenceBase.prototype.basicSetEOpposite = function (newobj, msgs) {
        var oldobj = this._eOpposite;
        this._eOpposite = newobj;
        if (this.eNotificationRequired()) {
            var notification = new _ENotificationImpl__WEBPACK_IMPORTED_MODULE_1__["ENotificationImpl"](this, _NotificationImpl__WEBPACK_IMPORTED_MODULE_2__["NotificationImpl"].SET, _EcorePackageLiterals__WEBPACK_IMPORTED_MODULE_4__["EcorePackageLiterals"].EREFERENCE_EOPPOSITE, oldobj, newobj);
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
            case _EcorePackageLiterals__WEBPACK_IMPORTED_MODULE_4__["EcorePackageLiterals"].EREFERENCE_EANNOTATIONS:
                return this.eAnnotations;
            case _EcorePackageLiterals__WEBPACK_IMPORTED_MODULE_4__["EcorePackageLiterals"].EREFERENCE_NAME:
                return this.name;
            case _EcorePackageLiterals__WEBPACK_IMPORTED_MODULE_4__["EcorePackageLiterals"].EREFERENCE_ORDERED:
                return this.ordered;
            case _EcorePackageLiterals__WEBPACK_IMPORTED_MODULE_4__["EcorePackageLiterals"].EREFERENCE_UNIQUE:
                return this.unique;
            case _EcorePackageLiterals__WEBPACK_IMPORTED_MODULE_4__["EcorePackageLiterals"].EREFERENCE_LOWERBOUND:
                return this.lowerBound;
            case _EcorePackageLiterals__WEBPACK_IMPORTED_MODULE_4__["EcorePackageLiterals"].EREFERENCE_UPPERBOUND:
                return this.upperBound;
            case _EcorePackageLiterals__WEBPACK_IMPORTED_MODULE_4__["EcorePackageLiterals"].EREFERENCE_MANY:
                return this.many;
            case _EcorePackageLiterals__WEBPACK_IMPORTED_MODULE_4__["EcorePackageLiterals"].EREFERENCE_REQUIRED:
                return this.required;
            case _EcorePackageLiterals__WEBPACK_IMPORTED_MODULE_4__["EcorePackageLiterals"].EREFERENCE_ETYPE:
                return this.eType;
            case _EcorePackageLiterals__WEBPACK_IMPORTED_MODULE_4__["EcorePackageLiterals"].EREFERENCE_EGENERICTYPE:
                return this.eGenericType;
            case _EcorePackageLiterals__WEBPACK_IMPORTED_MODULE_4__["EcorePackageLiterals"].EREFERENCE_CHANGEABLE:
                return this.changeable;
            case _EcorePackageLiterals__WEBPACK_IMPORTED_MODULE_4__["EcorePackageLiterals"].EREFERENCE_VOLATILE:
                return this.volatile;
            case _EcorePackageLiterals__WEBPACK_IMPORTED_MODULE_4__["EcorePackageLiterals"].EREFERENCE_TRANSIENT:
                return this.transient;
            case _EcorePackageLiterals__WEBPACK_IMPORTED_MODULE_4__["EcorePackageLiterals"].EREFERENCE_DEFAULTVALUELITERAL:
                return this.defaultValueLiteral;
            case _EcorePackageLiterals__WEBPACK_IMPORTED_MODULE_4__["EcorePackageLiterals"].EREFERENCE_DEFAULTVALUE:
                return this.defaultValue;
            case _EcorePackageLiterals__WEBPACK_IMPORTED_MODULE_4__["EcorePackageLiterals"].EREFERENCE_UNSETTABLE:
                return this.unsettable;
            case _EcorePackageLiterals__WEBPACK_IMPORTED_MODULE_4__["EcorePackageLiterals"].EREFERENCE_DERIVED:
                return this.derived;
            case _EcorePackageLiterals__WEBPACK_IMPORTED_MODULE_4__["EcorePackageLiterals"].EREFERENCE_ECONTAININGCLASS:
                return this.eContainingClass;
            case _EcorePackageLiterals__WEBPACK_IMPORTED_MODULE_4__["EcorePackageLiterals"].EREFERENCE_CONTAINMENT:
                return this.containment;
            case _EcorePackageLiterals__WEBPACK_IMPORTED_MODULE_4__["EcorePackageLiterals"].EREFERENCE_CONTAINER:
                return this.container;
            case _EcorePackageLiterals__WEBPACK_IMPORTED_MODULE_4__["EcorePackageLiterals"].EREFERENCE_RESOLVEPROXIES:
                return this.resolveProxies;
            case _EcorePackageLiterals__WEBPACK_IMPORTED_MODULE_4__["EcorePackageLiterals"].EREFERENCE_EOPPOSITE:
                return this.eOpposite;
            case _EcorePackageLiterals__WEBPACK_IMPORTED_MODULE_4__["EcorePackageLiterals"].EREFERENCE_EREFERENCETYPE:
                return this.eReferenceType;
            case _EcorePackageLiterals__WEBPACK_IMPORTED_MODULE_4__["EcorePackageLiterals"].EREFERENCE_EKEYS:
                return this.eKeys;
        }
        //return this.eGetFromEStructuralFeature(featureID, resolve, coreType);
        return _super.prototype.eGet.call(this, featureID, resolve, coreType);
    };
    EReferenceBase.prototype.eSet_number_any = function (featureID, newValue) {
        switch (featureID) {
            case _EcorePackageLiterals__WEBPACK_IMPORTED_MODULE_4__["EcorePackageLiterals"].EREFERENCE_CONTAINMENT:
                this.containment = newValue;
                return;
            case _EcorePackageLiterals__WEBPACK_IMPORTED_MODULE_4__["EcorePackageLiterals"].EREFERENCE_RESOLVEPROXIES:
                this.resolveProxies = newValue;
                return;
            case _EcorePackageLiterals__WEBPACK_IMPORTED_MODULE_4__["EcorePackageLiterals"].EREFERENCE_EOPPOSITE:
                this.eOpposite = newValue;
                return;
            case _EcorePackageLiterals__WEBPACK_IMPORTED_MODULE_4__["EcorePackageLiterals"].EREFERENCE_EKEYS:
                this.eKeys.clear();
                this.eKeys.addAll(newValue);
                return;
        }
        _super.prototype.eSet_number_any.call(this, featureID, newValue);
    };
    return EReferenceBase;
}(_EStructuralFeatureImpl__WEBPACK_IMPORTED_MODULE_3__["EStructuralFeatureImpl"]));



/***/ }),

/***/ "./node_modules/crossecore/src/EReferenceImpl.ts":
/*!*******************************************************!*\
  !*** ./node_modules/crossecore/src/EReferenceImpl.ts ***!
  \*******************************************************/
/*! exports provided: EReferenceImpl */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EReferenceImpl", function() { return EReferenceImpl; });
/* harmony import */ var _EReferenceBase__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./EReferenceBase */ "./node_modules/crossecore/src/EReferenceBase.ts");
/* CrossEcore is a cross-platform modeling framework that generates C#, TypeScript,
 * JavaScript, Swift code from Ecore models with embedded OCL (http://www.crossecore.org/).
 * The original Eclipse Modeling Framework is available at https://www.eclipse.org/modeling/emf/.
 *
 * contributor: Simon Schwichtenberg
 */
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

///<summary>This class was generated.</summary>
var EReferenceImpl = /** @class */ (function (_super) {
    __extends(EReferenceImpl, _super);
    function EReferenceImpl() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    EReferenceImpl.prototype.getFeatureID = function () {
        return this.featureID;
    };
    ;
    return EReferenceImpl;
}(_EReferenceBase__WEBPACK_IMPORTED_MODULE_0__["EReferenceBase"]));



/***/ }),

/***/ "./node_modules/crossecore/src/EStringToStringMapEntryBase.ts":
/*!********************************************************************!*\
  !*** ./node_modules/crossecore/src/EStringToStringMapEntryBase.ts ***!
  \********************************************************************/
/*! exports provided: EStringToStringMapEntryBase */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EStringToStringMapEntryBase", function() { return EStringToStringMapEntryBase; });
/* harmony import */ var _EcorePackageLiterals__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./EcorePackageLiterals */ "./node_modules/crossecore/src/EcorePackageLiterals.ts");
/* harmony import */ var _BasicEObjectImpl__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./BasicEObjectImpl */ "./node_modules/crossecore/src/BasicEObjectImpl.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();


var EStringToStringMapEntryBase = /** @class */ (function (_super) {
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
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(EStringToStringMapEntryBase.prototype, "value", {
        get: function () {
            return this._value;
        },
        set: function (value) {
            this._value = value;
        },
        enumerable: false,
        configurable: true
    });
    EStringToStringMapEntryBase.prototype.eStaticClass = function () {
        return EStringToStringMapEntryBase.eStaticClass;
    };
    EStringToStringMapEntryBase.prototype.eGet_number_boolean_boolean = function (featureID, resolve, coreType) {
        switch (featureID) {
            case _EcorePackageLiterals__WEBPACK_IMPORTED_MODULE_0__["EcorePackageLiterals"].ESTRINGTOSTRINGMAPENTRY_KEY:
                return this.key;
            case _EcorePackageLiterals__WEBPACK_IMPORTED_MODULE_0__["EcorePackageLiterals"].ESTRINGTOSTRINGMAPENTRY_VALUE:
                return this.value;
        }
        //return this.eGetFromBasicEObjectImpl(featureID, resolve, coreType);
        return _super.prototype.eGet.call(this, featureID, resolve, coreType);
    };
    EStringToStringMapEntryBase.prototype.eSet_number_any = function (featureID, newValue) {
        switch (featureID) {
            case _EcorePackageLiterals__WEBPACK_IMPORTED_MODULE_0__["EcorePackageLiterals"].ESTRINGTOSTRINGMAPENTRY_KEY:
                this.key = newValue;
                return;
            case _EcorePackageLiterals__WEBPACK_IMPORTED_MODULE_0__["EcorePackageLiterals"].ESTRINGTOSTRINGMAPENTRY_VALUE:
                this.value = newValue;
                return;
        }
        _super.prototype.eSet_number_any.call(this, featureID, newValue);
    };
    return EStringToStringMapEntryBase;
}(_BasicEObjectImpl__WEBPACK_IMPORTED_MODULE_1__["BasicEObjectImpl"]));



/***/ }),

/***/ "./node_modules/crossecore/src/EStringToStringMapEntryImpl.ts":
/*!********************************************************************!*\
  !*** ./node_modules/crossecore/src/EStringToStringMapEntryImpl.ts ***!
  \********************************************************************/
/*! exports provided: EStringToStringMapEntryImpl */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EStringToStringMapEntryImpl", function() { return EStringToStringMapEntryImpl; });
/* harmony import */ var _EStringToStringMapEntryBase__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./EStringToStringMapEntryBase */ "./node_modules/crossecore/src/EStringToStringMapEntryBase.ts");
/* CrossEcore is a cross-platform modeling framework that generates C#, TypeScript,
 * JavaScript, Swift code from Ecore models with embedded OCL (http://www.crossecore.org/).
 * The original Eclipse Modeling Framework is available at https://www.eclipse.org/modeling/emf/.
 *
 * contributor: Simon Schwichtenberg
 */
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

///<summary>This class was generated.</summary>
var EStringToStringMapEntryImpl = /** @class */ (function (_super) {
    __extends(EStringToStringMapEntryImpl, _super);
    function EStringToStringMapEntryImpl() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return EStringToStringMapEntryImpl;
}(_EStringToStringMapEntryBase__WEBPACK_IMPORTED_MODULE_0__["EStringToStringMapEntryBase"]));



/***/ }),

/***/ "./node_modules/crossecore/src/EStructuralFeatureBase.ts":
/*!***************************************************************!*\
  !*** ./node_modules/crossecore/src/EStructuralFeatureBase.ts ***!
  \***************************************************************/
/*! exports provided: EStructuralFeatureBase */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EStructuralFeatureBase", function() { return EStructuralFeatureBase; });
/* harmony import */ var _EcorePackageLiterals__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./EcorePackageLiterals */ "./node_modules/crossecore/src/EcorePackageLiterals.ts");
/* harmony import */ var _ETypedElementImpl__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ETypedElementImpl */ "./node_modules/crossecore/src/ETypedElementImpl.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();


var EStructuralFeatureBase = /** @class */ (function (_super) {
    __extends(EStructuralFeatureBase, _super);
    function EStructuralFeatureBase() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._changeable = false;
        _this._volatile = false;
        _this._transient = false;
        _this._defaultValueLiteral = '';
        _this._unsettable = false;
        _this._derived = false;
        return _this;
    }
    Object.defineProperty(EStructuralFeatureBase.prototype, "changeable", {
        get: function () {
            return this._changeable;
        },
        set: function (value) {
            this._changeable = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(EStructuralFeatureBase.prototype, "volatile", {
        get: function () {
            return this._volatile;
        },
        set: function (value) {
            this._volatile = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(EStructuralFeatureBase.prototype, "transient", {
        get: function () {
            return this._transient;
        },
        set: function (value) {
            this._transient = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(EStructuralFeatureBase.prototype, "defaultValueLiteral", {
        get: function () {
            return this._defaultValueLiteral;
        },
        set: function (value) {
            this._defaultValueLiteral = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(EStructuralFeatureBase.prototype, "defaultValue", {
        get: function () {
            //TODO implement derivation
            return null;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(EStructuralFeatureBase.prototype, "unsettable", {
        get: function () {
            return this._unsettable;
        },
        set: function (value) {
            this._unsettable = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(EStructuralFeatureBase.prototype, "derived", {
        get: function () {
            return this._derived;
        },
        set: function (value) {
            this._derived = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(EStructuralFeatureBase.prototype, "eContainingClass", {
        get: function () {
            if (this.eContainerFeatureID() != _EcorePackageLiterals__WEBPACK_IMPORTED_MODULE_0__["EcorePackageLiterals"].ESTRUCTURALFEATURE_ECONTAININGCLASS)
                return null;
            return this.eInternalContainer();
        },
        enumerable: false,
        configurable: true
    });
    EStructuralFeatureBase.prototype.getContainerClass = function () {
        /*TODO implement function*/
        return null;
    };
    ;
    EStructuralFeatureBase.prototype.getFeatureID = function () {
        /*TODO implement function*/
        return null;
    };
    ;
    EStructuralFeatureBase.prototype.eStaticClass = function () {
        return EStructuralFeatureBase.eStaticClass;
    };
    EStructuralFeatureBase.prototype.eInverseAdd = function (otherEnd, featureID, msgs) {
        switch (featureID) {
            case _EcorePackageLiterals__WEBPACK_IMPORTED_MODULE_0__["EcorePackageLiterals"].ESTRUCTURALFEATURE_ECONTAININGCLASS:
                if (this.eInternalContainer() != null) {
                    msgs = this.eBasicRemoveFromContainer(msgs);
                }
                return this.basicSetEContainingClass(otherEnd, msgs);
        }
        //return this.eInverseAddFromETypedElement(otherEnd, featureID, msgs);
        return _super.prototype.eInverseAdd.call(this, otherEnd, featureID, msgs);
    };
    //public eInverseAddFromEStructuralFeature = this.eInverseAdd;
    EStructuralFeatureBase.prototype.eInverseRemove = function (otherEnd, featureID, msgs) {
        switch (featureID) {
            case _EcorePackageLiterals__WEBPACK_IMPORTED_MODULE_0__["EcorePackageLiterals"].ESTRUCTURALFEATURE_ECONTAININGCLASS:
                return this.basicSetEContainingClass(null, msgs);
        }
        //return this.eInverseRemoveFromETypedElement(otherEnd, featureID, msgs);
        return _super.prototype.eInverseRemove.call(this, otherEnd, featureID, msgs);
    };
    //public eInverseRemoveFromEStructuralFeature = this.eInverseRemove;
    EStructuralFeatureBase.prototype.basicSetEContainingClass = function (newobj, msgs) {
        msgs = this.eBasicSetContainer(newobj, _EcorePackageLiterals__WEBPACK_IMPORTED_MODULE_0__["EcorePackageLiterals"].ESTRUCTURALFEATURE_ECONTAININGCLASS, msgs);
        return msgs;
    };
    EStructuralFeatureBase.prototype.eGet_number_boolean_boolean = function (featureID, resolve, coreType) {
        switch (featureID) {
            case _EcorePackageLiterals__WEBPACK_IMPORTED_MODULE_0__["EcorePackageLiterals"].ESTRUCTURALFEATURE_EANNOTATIONS:
                return this.eAnnotations;
            case _EcorePackageLiterals__WEBPACK_IMPORTED_MODULE_0__["EcorePackageLiterals"].ESTRUCTURALFEATURE_NAME:
                return this.name;
            case _EcorePackageLiterals__WEBPACK_IMPORTED_MODULE_0__["EcorePackageLiterals"].ESTRUCTURALFEATURE_ORDERED:
                return this.ordered;
            case _EcorePackageLiterals__WEBPACK_IMPORTED_MODULE_0__["EcorePackageLiterals"].ESTRUCTURALFEATURE_UNIQUE:
                return this.unique;
            case _EcorePackageLiterals__WEBPACK_IMPORTED_MODULE_0__["EcorePackageLiterals"].ESTRUCTURALFEATURE_LOWERBOUND:
                return this.lowerBound;
            case _EcorePackageLiterals__WEBPACK_IMPORTED_MODULE_0__["EcorePackageLiterals"].ESTRUCTURALFEATURE_UPPERBOUND:
                return this.upperBound;
            case _EcorePackageLiterals__WEBPACK_IMPORTED_MODULE_0__["EcorePackageLiterals"].ESTRUCTURALFEATURE_MANY:
                return this.many;
            case _EcorePackageLiterals__WEBPACK_IMPORTED_MODULE_0__["EcorePackageLiterals"].ESTRUCTURALFEATURE_REQUIRED:
                return this.required;
            case _EcorePackageLiterals__WEBPACK_IMPORTED_MODULE_0__["EcorePackageLiterals"].ESTRUCTURALFEATURE_ETYPE:
                return this.eType;
            case _EcorePackageLiterals__WEBPACK_IMPORTED_MODULE_0__["EcorePackageLiterals"].ESTRUCTURALFEATURE_EGENERICTYPE:
                return this.eGenericType;
            case _EcorePackageLiterals__WEBPACK_IMPORTED_MODULE_0__["EcorePackageLiterals"].ESTRUCTURALFEATURE_CHANGEABLE:
                return this.changeable;
            case _EcorePackageLiterals__WEBPACK_IMPORTED_MODULE_0__["EcorePackageLiterals"].ESTRUCTURALFEATURE_VOLATILE:
                return this.volatile;
            case _EcorePackageLiterals__WEBPACK_IMPORTED_MODULE_0__["EcorePackageLiterals"].ESTRUCTURALFEATURE_TRANSIENT:
                return this.transient;
            case _EcorePackageLiterals__WEBPACK_IMPORTED_MODULE_0__["EcorePackageLiterals"].ESTRUCTURALFEATURE_DEFAULTVALUELITERAL:
                return this.defaultValueLiteral;
            case _EcorePackageLiterals__WEBPACK_IMPORTED_MODULE_0__["EcorePackageLiterals"].ESTRUCTURALFEATURE_DEFAULTVALUE:
                return this.defaultValue;
            case _EcorePackageLiterals__WEBPACK_IMPORTED_MODULE_0__["EcorePackageLiterals"].ESTRUCTURALFEATURE_UNSETTABLE:
                return this.unsettable;
            case _EcorePackageLiterals__WEBPACK_IMPORTED_MODULE_0__["EcorePackageLiterals"].ESTRUCTURALFEATURE_DERIVED:
                return this.derived;
            case _EcorePackageLiterals__WEBPACK_IMPORTED_MODULE_0__["EcorePackageLiterals"].ESTRUCTURALFEATURE_ECONTAININGCLASS:
                return this.eContainingClass;
        }
        //return this.eGetFromETypedElement(featureID, resolve, coreType);
        return _super.prototype.eGet.call(this, featureID, resolve, coreType);
    };
    EStructuralFeatureBase.prototype.eSet_number_any = function (featureID, newValue) {
        switch (featureID) {
            case _EcorePackageLiterals__WEBPACK_IMPORTED_MODULE_0__["EcorePackageLiterals"].ESTRUCTURALFEATURE_CHANGEABLE:
                this.changeable = newValue;
                return;
            case _EcorePackageLiterals__WEBPACK_IMPORTED_MODULE_0__["EcorePackageLiterals"].ESTRUCTURALFEATURE_VOLATILE:
                this.volatile = newValue;
                return;
            case _EcorePackageLiterals__WEBPACK_IMPORTED_MODULE_0__["EcorePackageLiterals"].ESTRUCTURALFEATURE_TRANSIENT:
                this.transient = newValue;
                return;
            case _EcorePackageLiterals__WEBPACK_IMPORTED_MODULE_0__["EcorePackageLiterals"].ESTRUCTURALFEATURE_DEFAULTVALUELITERAL:
                this.defaultValueLiteral = newValue;
                return;
            case _EcorePackageLiterals__WEBPACK_IMPORTED_MODULE_0__["EcorePackageLiterals"].ESTRUCTURALFEATURE_UNSETTABLE:
                this.unsettable = newValue;
                return;
            case _EcorePackageLiterals__WEBPACK_IMPORTED_MODULE_0__["EcorePackageLiterals"].ESTRUCTURALFEATURE_DERIVED:
                this.derived = newValue;
                return;
        }
        _super.prototype.eSet_number_any.call(this, featureID, newValue);
    };
    return EStructuralFeatureBase;
}(_ETypedElementImpl__WEBPACK_IMPORTED_MODULE_1__["ETypedElementImpl"]));



/***/ }),

/***/ "./node_modules/crossecore/src/EStructuralFeatureImpl.ts":
/*!***************************************************************!*\
  !*** ./node_modules/crossecore/src/EStructuralFeatureImpl.ts ***!
  \***************************************************************/
/*! exports provided: EStructuralFeatureImpl */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EStructuralFeatureImpl", function() { return EStructuralFeatureImpl; });
/* harmony import */ var _EStructuralFeatureBase__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./EStructuralFeatureBase */ "./node_modules/crossecore/src/EStructuralFeatureBase.ts");
/* CrossEcore is a cross-platform modeling framework that generates C#, TypeScript,
 * JavaScript, Swift code from Ecore models with embedded OCL (http://www.crossecore.org/).
 * The original Eclipse Modeling Framework is available at https://www.eclipse.org/modeling/emf/.
 *
 * contributor: Simon Schwichtenberg
 */
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

///<summary>This class was generated.</summary>
var EStructuralFeatureImpl = /** @class */ (function (_super) {
    __extends(EStructuralFeatureImpl, _super);
    function EStructuralFeatureImpl() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.featureID = -1;
        _this.setContainerClass = function (f) {
            _this.containerClass_ = f;
        };
        return _this;
    }
    EStructuralFeatureImpl.prototype.setFeatureID = function (id) {
        this.featureID = id;
    };
    EStructuralFeatureImpl.prototype.getFeatureID = function () {
        return this.featureID;
    };
    ;
    EStructuralFeatureImpl.prototype.getContainerClass = function () {
        return this.containerClass_;
    };
    ;
    return EStructuralFeatureImpl;
}(_EStructuralFeatureBase__WEBPACK_IMPORTED_MODULE_0__["EStructuralFeatureBase"]));



/***/ }),

/***/ "./node_modules/crossecore/src/ETypeParameterBase.ts":
/*!***********************************************************!*\
  !*** ./node_modules/crossecore/src/ETypeParameterBase.ts ***!
  \***********************************************************/
/*! exports provided: ETypeParameterBase */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ETypeParameterBase", function() { return ETypeParameterBase; });
/* harmony import */ var _OrderedSet__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./OrderedSet */ "./node_modules/crossecore/src/OrderedSet.ts");
/* harmony import */ var _ENamedElementImpl__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ENamedElementImpl */ "./node_modules/crossecore/src/ENamedElementImpl.ts");
/* harmony import */ var _EcorePackageLiterals__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./EcorePackageLiterals */ "./node_modules/crossecore/src/EcorePackageLiterals.ts");
/* harmony import */ var _BasicEObjectImpl__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./BasicEObjectImpl */ "./node_modules/crossecore/src/BasicEObjectImpl.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();




var ETypeParameterBase = /** @class */ (function (_super) {
    __extends(ETypeParameterBase, _super);
    function ETypeParameterBase() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._eBounds = null;
        return _this;
    }
    Object.defineProperty(ETypeParameterBase.prototype, "eBounds", {
        get: function () {
            if (this._eBounds === null) {
                this._eBounds = new _OrderedSet__WEBPACK_IMPORTED_MODULE_0__["OrderedSet"](this, _EcorePackageLiterals__WEBPACK_IMPORTED_MODULE_2__["EcorePackageLiterals"].ETYPEPARAMETER_EBOUNDS, _BasicEObjectImpl__WEBPACK_IMPORTED_MODULE_3__["BasicEObjectImpl"].EOPPOSITE_FEATURE_BASE - _EcorePackageLiterals__WEBPACK_IMPORTED_MODULE_2__["EcorePackageLiterals"].ETYPEPARAMETER_EBOUNDS);
            }
            return this._eBounds;
        },
        enumerable: false,
        configurable: true
    });
    ETypeParameterBase.prototype.eStaticClass = function () {
        return ETypeParameterBase.eStaticClass;
    };
    ETypeParameterBase.prototype.eGet_number_boolean_boolean = function (featureID, resolve, coreType) {
        switch (featureID) {
            case _EcorePackageLiterals__WEBPACK_IMPORTED_MODULE_2__["EcorePackageLiterals"].ETYPEPARAMETER_EANNOTATIONS:
                return this.eAnnotations;
            case _EcorePackageLiterals__WEBPACK_IMPORTED_MODULE_2__["EcorePackageLiterals"].ETYPEPARAMETER_NAME:
                return this.name;
            case _EcorePackageLiterals__WEBPACK_IMPORTED_MODULE_2__["EcorePackageLiterals"].ETYPEPARAMETER_EBOUNDS:
                return this.eBounds;
        }
        //return this.eGetFromENamedElement(featureID, resolve, coreType);
        return _super.prototype.eGet.call(this, featureID, resolve, coreType);
    };
    ETypeParameterBase.prototype.eSet_number_any = function (featureID, newValue) {
        switch (featureID) {
            case _EcorePackageLiterals__WEBPACK_IMPORTED_MODULE_2__["EcorePackageLiterals"].ETYPEPARAMETER_EBOUNDS:
                this.eBounds.clear();
                this.eBounds.addAll(newValue);
                return;
        }
        _super.prototype.eSet_number_any.call(this, featureID, newValue);
    };
    return ETypeParameterBase;
}(_ENamedElementImpl__WEBPACK_IMPORTED_MODULE_1__["ENamedElementImpl"]));



/***/ }),

/***/ "./node_modules/crossecore/src/ETypeParameterImpl.ts":
/*!***********************************************************!*\
  !*** ./node_modules/crossecore/src/ETypeParameterImpl.ts ***!
  \***********************************************************/
/*! exports provided: ETypeParameterImpl */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ETypeParameterImpl", function() { return ETypeParameterImpl; });
/* harmony import */ var _ETypeParameterBase__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ETypeParameterBase */ "./node_modules/crossecore/src/ETypeParameterBase.ts");
/* CrossEcore is a cross-platform modeling framework that generates C#, TypeScript,
 * JavaScript, Swift code from Ecore models with embedded OCL (http://www.crossecore.org/).
 * The original Eclipse Modeling Framework is available at https://www.eclipse.org/modeling/emf/.
 *
 * contributor: Simon Schwichtenberg
 */
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

///<summary>This class was generated.</summary>
var ETypeParameterImpl = /** @class */ (function (_super) {
    __extends(ETypeParameterImpl, _super);
    function ETypeParameterImpl() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return ETypeParameterImpl;
}(_ETypeParameterBase__WEBPACK_IMPORTED_MODULE_0__["ETypeParameterBase"]));



/***/ }),

/***/ "./node_modules/crossecore/src/ETypedElementBase.ts":
/*!**********************************************************!*\
  !*** ./node_modules/crossecore/src/ETypedElementBase.ts ***!
  \**********************************************************/
/*! exports provided: ETypedElementBase */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ETypedElementBase", function() { return ETypedElementBase; });
/* harmony import */ var _ENotificationImpl__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ENotificationImpl */ "./node_modules/crossecore/src/ENotificationImpl.ts");
/* harmony import */ var _NotificationImpl__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./NotificationImpl */ "./node_modules/crossecore/src/NotificationImpl.ts");
/* harmony import */ var _ENamedElementImpl__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ENamedElementImpl */ "./node_modules/crossecore/src/ENamedElementImpl.ts");
/* harmony import */ var _EcorePackageLiterals__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./EcorePackageLiterals */ "./node_modules/crossecore/src/EcorePackageLiterals.ts");
/* harmony import */ var _BasicEObjectImpl__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./BasicEObjectImpl */ "./node_modules/crossecore/src/BasicEObjectImpl.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();





var ETypedElementBase = /** @class */ (function (_super) {
    __extends(ETypedElementBase, _super);
    function ETypedElementBase() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._ordered = false;
        _this._unique = false;
        _this._lowerBound = 0;
        _this._upperBound = 0;
        _this._eType = null;
        _this._eGenericType = null;
        return _this;
    }
    Object.defineProperty(ETypedElementBase.prototype, "ordered", {
        get: function () {
            return this._ordered;
        },
        set: function (value) {
            this._ordered = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ETypedElementBase.prototype, "unique", {
        get: function () {
            return this._unique;
        },
        set: function (value) {
            this._unique = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ETypedElementBase.prototype, "lowerBound", {
        get: function () {
            return this._lowerBound;
        },
        set: function (value) {
            this._lowerBound = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ETypedElementBase.prototype, "upperBound", {
        get: function () {
            return this._upperBound;
        },
        set: function (value) {
            this._upperBound = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ETypedElementBase.prototype, "many", {
        get: function () {
            //TODO implement derivation
            return null;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ETypedElementBase.prototype, "required", {
        get: function () {
            //TODO implement derivation
            return null;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ETypedElementBase.prototype, "eType", {
        get: function () {
            return this._eType;
        },
        set: function (value) {
            var oldvalue = this._eType;
            this._eType = value;
            if (this.eNotificationRequired()) {
                this.eNotify(new _ENotificationImpl__WEBPACK_IMPORTED_MODULE_0__["ENotificationImpl"](this, _NotificationImpl__WEBPACK_IMPORTED_MODULE_1__["NotificationImpl"].SET, _EcorePackageLiterals__WEBPACK_IMPORTED_MODULE_3__["EcorePackageLiterals"].ETYPEDELEMENT_ETYPE, oldvalue, value));
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ETypedElementBase.prototype, "eGenericType", {
        get: function () {
            return this._eGenericType;
        },
        set: function (value) {
            if (value != this._eGenericType) {
                var msgs = null;
                if (this._eGenericType != null) {
                    msgs = (this._eGenericType).eInverseRemove(this, _BasicEObjectImpl__WEBPACK_IMPORTED_MODULE_4__["BasicEObjectImpl"].EOPPOSITE_FEATURE_BASE - _EcorePackageLiterals__WEBPACK_IMPORTED_MODULE_3__["EcorePackageLiterals"].ETYPEDELEMENT_EGENERICTYPE, /*null*/ null, msgs);
                }
                if (value != null) {
                    msgs = value.eInverseAdd(this, _BasicEObjectImpl__WEBPACK_IMPORTED_MODULE_4__["BasicEObjectImpl"].EOPPOSITE_FEATURE_BASE - _EcorePackageLiterals__WEBPACK_IMPORTED_MODULE_3__["EcorePackageLiterals"].ETYPEDELEMENT_EGENERICTYPE, /*null*/ null, msgs);
                }
                msgs = this.basicSetEGenericType(value, msgs);
                if (msgs != null) {
                    msgs.dispatch();
                }
            }
            else if (this.eNotificationRequired()) {
                this.eNotify(new _ENotificationImpl__WEBPACK_IMPORTED_MODULE_0__["ENotificationImpl"](this, _NotificationImpl__WEBPACK_IMPORTED_MODULE_1__["NotificationImpl"].SET, _EcorePackageLiterals__WEBPACK_IMPORTED_MODULE_3__["EcorePackageLiterals"].ETYPEDELEMENT_EGENERICTYPE, value, value));
            }
        },
        enumerable: false,
        configurable: true
    });
    ETypedElementBase.prototype.eStaticClass = function () {
        return ETypedElementBase.eStaticClass;
    };
    ETypedElementBase.prototype.basicSetEGenericType = function (newobj, msgs) {
        var oldobj = this._eGenericType;
        this._eGenericType = newobj;
        if (this.eNotificationRequired()) {
            var notification = new _ENotificationImpl__WEBPACK_IMPORTED_MODULE_0__["ENotificationImpl"](this, _NotificationImpl__WEBPACK_IMPORTED_MODULE_1__["NotificationImpl"].SET, _EcorePackageLiterals__WEBPACK_IMPORTED_MODULE_3__["EcorePackageLiterals"].ETYPEDELEMENT_EGENERICTYPE, oldobj, newobj);
            if (msgs == null) {
                msgs = notification;
            }
            else {
                msgs.add(notification);
            }
        }
        return msgs;
    };
    ETypedElementBase.prototype.basicSetEType = function (newobj, msgs) {
        var oldobj = this._eType;
        this._eType = newobj;
        if (this.eNotificationRequired()) {
            var notification = new _ENotificationImpl__WEBPACK_IMPORTED_MODULE_0__["ENotificationImpl"](this, _NotificationImpl__WEBPACK_IMPORTED_MODULE_1__["NotificationImpl"].SET, _EcorePackageLiterals__WEBPACK_IMPORTED_MODULE_3__["EcorePackageLiterals"].ETYPEDELEMENT_ETYPE, oldobj, newobj);
            if (msgs == null) {
                msgs = notification;
            }
            else {
                msgs.add(notification);
            }
        }
        return msgs;
    };
    ETypedElementBase.prototype.eGet_number_boolean_boolean = function (featureID, resolve, coreType) {
        switch (featureID) {
            case _EcorePackageLiterals__WEBPACK_IMPORTED_MODULE_3__["EcorePackageLiterals"].ETYPEDELEMENT_EANNOTATIONS:
                return this.eAnnotations;
            case _EcorePackageLiterals__WEBPACK_IMPORTED_MODULE_3__["EcorePackageLiterals"].ETYPEDELEMENT_NAME:
                return this.name;
            case _EcorePackageLiterals__WEBPACK_IMPORTED_MODULE_3__["EcorePackageLiterals"].ETYPEDELEMENT_ORDERED:
                return this.ordered;
            case _EcorePackageLiterals__WEBPACK_IMPORTED_MODULE_3__["EcorePackageLiterals"].ETYPEDELEMENT_UNIQUE:
                return this.unique;
            case _EcorePackageLiterals__WEBPACK_IMPORTED_MODULE_3__["EcorePackageLiterals"].ETYPEDELEMENT_LOWERBOUND:
                return this.lowerBound;
            case _EcorePackageLiterals__WEBPACK_IMPORTED_MODULE_3__["EcorePackageLiterals"].ETYPEDELEMENT_UPPERBOUND:
                return this.upperBound;
            case _EcorePackageLiterals__WEBPACK_IMPORTED_MODULE_3__["EcorePackageLiterals"].ETYPEDELEMENT_MANY:
                return this.many;
            case _EcorePackageLiterals__WEBPACK_IMPORTED_MODULE_3__["EcorePackageLiterals"].ETYPEDELEMENT_REQUIRED:
                return this.required;
            case _EcorePackageLiterals__WEBPACK_IMPORTED_MODULE_3__["EcorePackageLiterals"].ETYPEDELEMENT_ETYPE:
                return this.eType;
            case _EcorePackageLiterals__WEBPACK_IMPORTED_MODULE_3__["EcorePackageLiterals"].ETYPEDELEMENT_EGENERICTYPE:
                return this.eGenericType;
        }
        //return this.eGetFromENamedElement(featureID, resolve, coreType);
        return _super.prototype.eGet.call(this, featureID, resolve, coreType);
    };
    ETypedElementBase.prototype.eSet_number_any = function (featureID, newValue) {
        switch (featureID) {
            case _EcorePackageLiterals__WEBPACK_IMPORTED_MODULE_3__["EcorePackageLiterals"].ETYPEDELEMENT_ORDERED:
                this.ordered = newValue;
                return;
            case _EcorePackageLiterals__WEBPACK_IMPORTED_MODULE_3__["EcorePackageLiterals"].ETYPEDELEMENT_UNIQUE:
                this.unique = newValue;
                return;
            case _EcorePackageLiterals__WEBPACK_IMPORTED_MODULE_3__["EcorePackageLiterals"].ETYPEDELEMENT_LOWERBOUND:
                this.lowerBound = newValue;
                return;
            case _EcorePackageLiterals__WEBPACK_IMPORTED_MODULE_3__["EcorePackageLiterals"].ETYPEDELEMENT_UPPERBOUND:
                this.upperBound = newValue;
                return;
            case _EcorePackageLiterals__WEBPACK_IMPORTED_MODULE_3__["EcorePackageLiterals"].ETYPEDELEMENT_ETYPE:
                this.eType = newValue;
                return;
            case _EcorePackageLiterals__WEBPACK_IMPORTED_MODULE_3__["EcorePackageLiterals"].ETYPEDELEMENT_EGENERICTYPE:
                this.eGenericType = newValue;
                return;
        }
        _super.prototype.eSet_number_any.call(this, featureID, newValue);
    };
    return ETypedElementBase;
}(_ENamedElementImpl__WEBPACK_IMPORTED_MODULE_2__["ENamedElementImpl"]));



/***/ }),

/***/ "./node_modules/crossecore/src/ETypedElementImpl.ts":
/*!**********************************************************!*\
  !*** ./node_modules/crossecore/src/ETypedElementImpl.ts ***!
  \**********************************************************/
/*! exports provided: ETypedElementImpl */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ETypedElementImpl", function() { return ETypedElementImpl; });
/* harmony import */ var _ETypedElementBase__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ETypedElementBase */ "./node_modules/crossecore/src/ETypedElementBase.ts");
/* CrossEcore is a cross-platform modeling framework that generates C#, TypeScript,
 * JavaScript, Swift code from Ecore models with embedded OCL (http://www.crossecore.org/).
 * The original Eclipse Modeling Framework is available at https://www.eclipse.org/modeling/emf/.
 *
 * contributor: Simon Schwichtenberg
 */
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

///<summary>This class was generated.</summary>
var ETypedElementImpl = /** @class */ (function (_super) {
    __extends(ETypedElementImpl, _super);
    function ETypedElementImpl() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(ETypedElementImpl.prototype, "many", {
        get: function () {
            return this.upperBound == -1 || this.upperBound > 1;
        },
        enumerable: false,
        configurable: true
    });
    return ETypedElementImpl;
}(_ETypedElementBase__WEBPACK_IMPORTED_MODULE_0__["ETypedElementBase"]));



/***/ }),

/***/ "./node_modules/crossecore/src/EcoreEMap.ts":
/*!**************************************************!*\
  !*** ./node_modules/crossecore/src/EcoreEMap.ts ***!
  \**************************************************/
/*! exports provided: EcoreEMap */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EcoreEMap", function() { return EcoreEMap; });
var EcoreEMap = /** @class */ (function () {
    function EcoreEMap(entryEClass, entryClass, owner, featureID) {
        this.entryClass = entryClass;
        this.entryEClass = entryEClass;
        this.hashmap = {};
    }
    EcoreEMap.prototype.get = function (key) {
        return this.hashmap[key];
    };
    EcoreEMap.prototype.put = function (key, value) {
        var oldValue;
        if (this.containsKey(key)) {
            oldValue = this.hashmap[key];
        }
        this.hashmap[key] = value;
        return oldValue;
    };
    EcoreEMap.prototype.set = function (value) {
        this.hashmap = {};
        this.putAll(value);
    };
    EcoreEMap.prototype.containsKey = function (key) {
        return this.hashmap[key] !== undefined;
    };
    EcoreEMap.prototype.putAll = function (map) {
        for (var prop in map) {
            if (map.hasOwnProperty(prop)) {
                this.hashmap.put(prop, map[prop]);
            }
        }
    };
    EcoreEMap.prototype.isEmpty = function () {
        for (var prop in this.hashmap) {
            if (this.hashmap.hasOwnProperty(prop)) {
                return false;
            }
        }
        return true;
    };
    return EcoreEMap;
}());



/***/ }),

/***/ "./node_modules/crossecore/src/EcoreFactoryImpl.ts":
/*!*********************************************************!*\
  !*** ./node_modules/crossecore/src/EcoreFactoryImpl.ts ***!
  \*********************************************************/
/*! exports provided: EcoreFactoryImpl */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EcoreFactoryImpl", function() { return EcoreFactoryImpl; });
/* harmony import */ var _EStructuralFeatureImpl__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./EStructuralFeatureImpl */ "./node_modules/crossecore/src/EStructuralFeatureImpl.ts");
/* harmony import */ var _EDataTypeImpl__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./EDataTypeImpl */ "./node_modules/crossecore/src/EDataTypeImpl.ts");
/* harmony import */ var _EReferenceImpl__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./EReferenceImpl */ "./node_modules/crossecore/src/EReferenceImpl.ts");
/* harmony import */ var _EAnnotationImpl__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./EAnnotationImpl */ "./node_modules/crossecore/src/EAnnotationImpl.ts");
/* harmony import */ var _EAttributeImpl__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./EAttributeImpl */ "./node_modules/crossecore/src/EAttributeImpl.ts");
/* harmony import */ var _EClassImpl__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./EClassImpl */ "./node_modules/crossecore/src/EClassImpl.ts");
/* harmony import */ var _EModelElementImpl__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./EModelElementImpl */ "./node_modules/crossecore/src/EModelElementImpl.ts");
/* harmony import */ var _ENamedElementImpl__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./ENamedElementImpl */ "./node_modules/crossecore/src/ENamedElementImpl.ts");
/* harmony import */ var _EStringToStringMapEntryImpl__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./EStringToStringMapEntryImpl */ "./node_modules/crossecore/src/EStringToStringMapEntryImpl.ts");
/* harmony import */ var _ETypedElementImpl__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./ETypedElementImpl */ "./node_modules/crossecore/src/ETypedElementImpl.ts");
/* harmony import */ var _EFactoryImpl__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./EFactoryImpl */ "./node_modules/crossecore/src/EFactoryImpl.ts");
/* harmony import */ var _EParameterImpl__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./EParameterImpl */ "./node_modules/crossecore/src/EParameterImpl.ts");
/* harmony import */ var _EObjectImpl__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./EObjectImpl */ "./node_modules/crossecore/src/EObjectImpl.ts");
/* harmony import */ var _EEnumLiteralImpl__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./EEnumLiteralImpl */ "./node_modules/crossecore/src/EEnumLiteralImpl.ts");
/* harmony import */ var _EGenericTypeImpl__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./EGenericTypeImpl */ "./node_modules/crossecore/src/EGenericTypeImpl.ts");
/* harmony import */ var _EPackageImpl__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./EPackageImpl */ "./node_modules/crossecore/src/EPackageImpl.ts");
/* harmony import */ var _ETypeParameterImpl__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./ETypeParameterImpl */ "./node_modules/crossecore/src/ETypeParameterImpl.ts");
/* harmony import */ var _EClassifierImpl__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./EClassifierImpl */ "./node_modules/crossecore/src/EClassifierImpl.ts");
/* harmony import */ var _EEnumImpl__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./EEnumImpl */ "./node_modules/crossecore/src/EEnumImpl.ts");
/* harmony import */ var _AllInstances__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./AllInstances */ "./node_modules/crossecore/src/AllInstances.ts");
/* harmony import */ var _EOperationImpl__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./EOperationImpl */ "./node_modules/crossecore/src/EOperationImpl.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();





















var EcoreFactoryImpl = /** @class */ (function (_super) {
    __extends(EcoreFactoryImpl, _super);
    function EcoreFactoryImpl() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.createEAttribute = function () {
            var theEAttribute = new _EAttributeImpl__WEBPACK_IMPORTED_MODULE_4__["EAttributeImpl"]();
            _AllInstances__WEBPACK_IMPORTED_MODULE_19__["AllInstances"].INSTANCE.put(theEAttribute, "EAttribute");
            return theEAttribute;
        };
        _this.createEAnnotation = function () {
            var theEAnnotation = new _EAnnotationImpl__WEBPACK_IMPORTED_MODULE_3__["EAnnotationImpl"]();
            _AllInstances__WEBPACK_IMPORTED_MODULE_19__["AllInstances"].INSTANCE.put(theEAnnotation, "EAnnotation");
            return theEAnnotation;
        };
        _this.createEClass = function () {
            var theEClass = new _EClassImpl__WEBPACK_IMPORTED_MODULE_5__["EClassImpl"]();
            _AllInstances__WEBPACK_IMPORTED_MODULE_19__["AllInstances"].INSTANCE.put(theEClass, "EClass");
            return theEClass;
        };
        _this.createEClassifier = function () {
            var theEClassifier = new _EClassifierImpl__WEBPACK_IMPORTED_MODULE_17__["EClassifierImpl"]();
            _AllInstances__WEBPACK_IMPORTED_MODULE_19__["AllInstances"].INSTANCE.put(theEClassifier, "EClassifier");
            return theEClassifier;
        };
        _this.createEDataType = function () {
            var theEDataType = new _EDataTypeImpl__WEBPACK_IMPORTED_MODULE_1__["EDataTypeImpl"]();
            _AllInstances__WEBPACK_IMPORTED_MODULE_19__["AllInstances"].INSTANCE.put(theEDataType, "EDataType");
            return theEDataType;
        };
        _this.createEEnum = function () {
            var theEEnum = new _EEnumImpl__WEBPACK_IMPORTED_MODULE_18__["EEnumImpl"]();
            _AllInstances__WEBPACK_IMPORTED_MODULE_19__["AllInstances"].INSTANCE.put(theEEnum, "EEnum");
            return theEEnum;
        };
        _this.createEEnumLiteral = function () {
            var theEEnumLiteral = new _EEnumLiteralImpl__WEBPACK_IMPORTED_MODULE_13__["EEnumLiteralImpl"]();
            _AllInstances__WEBPACK_IMPORTED_MODULE_19__["AllInstances"].INSTANCE.put(theEEnumLiteral, "EEnumLiteral");
            return theEEnumLiteral;
        };
        _this.createEFactory = function () {
            var theEFactory = new _EFactoryImpl__WEBPACK_IMPORTED_MODULE_10__["EFactoryImpl"]();
            _AllInstances__WEBPACK_IMPORTED_MODULE_19__["AllInstances"].INSTANCE.put(theEFactory, "EFactory");
            return theEFactory;
        };
        _this.createEModelElement = function () {
            var theEModelElement = new _EModelElementImpl__WEBPACK_IMPORTED_MODULE_6__["EModelElementImpl"]();
            _AllInstances__WEBPACK_IMPORTED_MODULE_19__["AllInstances"].INSTANCE.put(theEModelElement, "EModelElement");
            return theEModelElement;
        };
        _this.createENamedElement = function () {
            var theENamedElement = new _ENamedElementImpl__WEBPACK_IMPORTED_MODULE_7__["ENamedElementImpl"]();
            _AllInstances__WEBPACK_IMPORTED_MODULE_19__["AllInstances"].INSTANCE.put(theENamedElement, "ENamedElement");
            return theENamedElement;
        };
        _this.createEObject = function () {
            var theEObject = new _EObjectImpl__WEBPACK_IMPORTED_MODULE_12__["EObjectImpl"]();
            _AllInstances__WEBPACK_IMPORTED_MODULE_19__["AllInstances"].INSTANCE.put(theEObject, "EObject");
            return theEObject;
        };
        _this.createEOperation = function () {
            var theEOperation = new _EOperationImpl__WEBPACK_IMPORTED_MODULE_20__["EOperationImpl"]();
            _AllInstances__WEBPACK_IMPORTED_MODULE_19__["AllInstances"].INSTANCE.put(theEOperation, "EOperation");
            return theEOperation;
        };
        _this.createEPackage = function () {
            var theEPackage = new _EPackageImpl__WEBPACK_IMPORTED_MODULE_15__["EPackageImpl"]();
            _AllInstances__WEBPACK_IMPORTED_MODULE_19__["AllInstances"].INSTANCE.put(theEPackage, "EPackage");
            return theEPackage;
        };
        _this.createEParameter = function () {
            var theEParameter = new _EParameterImpl__WEBPACK_IMPORTED_MODULE_11__["EParameterImpl"]();
            _AllInstances__WEBPACK_IMPORTED_MODULE_19__["AllInstances"].INSTANCE.put(theEParameter, "EParameter");
            return theEParameter;
        };
        _this.createEReference = function () {
            var theEReference = new _EReferenceImpl__WEBPACK_IMPORTED_MODULE_2__["EReferenceImpl"]();
            _AllInstances__WEBPACK_IMPORTED_MODULE_19__["AllInstances"].INSTANCE.put(theEReference, "EReference");
            return theEReference;
        };
        _this.createEStructuralFeature = function () {
            var theEStructuralFeature = new _EStructuralFeatureImpl__WEBPACK_IMPORTED_MODULE_0__["EStructuralFeatureImpl"]();
            _AllInstances__WEBPACK_IMPORTED_MODULE_19__["AllInstances"].INSTANCE.put(theEStructuralFeature, "EStructuralFeature");
            return theEStructuralFeature;
        };
        _this.createETypedElement = function () {
            var theETypedElement = new _ETypedElementImpl__WEBPACK_IMPORTED_MODULE_9__["ETypedElementImpl"]();
            _AllInstances__WEBPACK_IMPORTED_MODULE_19__["AllInstances"].INSTANCE.put(theETypedElement, "ETypedElement");
            return theETypedElement;
        };
        _this.createEStringToStringMapEntry = function () {
            var theEStringToStringMapEntry = new _EStringToStringMapEntryImpl__WEBPACK_IMPORTED_MODULE_8__["EStringToStringMapEntryImpl"]();
            _AllInstances__WEBPACK_IMPORTED_MODULE_19__["AllInstances"].INSTANCE.put(theEStringToStringMapEntry, "EStringToStringMapEntry");
            return theEStringToStringMapEntry;
        };
        _this.createEGenericType = function () {
            var theEGenericType = new _EGenericTypeImpl__WEBPACK_IMPORTED_MODULE_14__["EGenericTypeImpl"]();
            _AllInstances__WEBPACK_IMPORTED_MODULE_19__["AllInstances"].INSTANCE.put(theEGenericType, "EGenericType");
            return theEGenericType;
        };
        _this.createETypeParameter = function () {
            var theETypeParameter = new _ETypeParameterImpl__WEBPACK_IMPORTED_MODULE_16__["ETypeParameterImpl"]();
            _AllInstances__WEBPACK_IMPORTED_MODULE_19__["AllInstances"].INSTANCE.put(theETypeParameter, "ETypeParameter");
            return theETypeParameter;
        };
        return _this;
    }
    EcoreFactoryImpl.init = function () {
        return new EcoreFactoryImpl();
    };
    EcoreFactoryImpl.prototype.create = function (eClass) {
        switch (eClass.getClassifierID()) {
            case 0: return this.createEAttribute();
            case 1: return this.createEAnnotation();
            case 2: return this.createEClass();
            case 4: return this.createEDataType();
            case 5: return this.createEEnum();
            case 6: return this.createEEnumLiteral();
            case 7: return this.createEFactory();
            case 10: return this.createEObject();
            case 11: return this.createEOperation();
            case 12: return this.createEPackage();
            case 13: return this.createEParameter();
            case 14: return this.createEReference();
            case 48: return this.createEStringToStringMapEntry();
            case 50: return this.createEGenericType();
            case 51: return this.createETypeParameter();
            default:
                throw new Error("The class '" + eClass.name + "' is not a valid classifier");
        }
    };
    EcoreFactoryImpl.prototype.createFromString = function (eDataType, initialValue) {
        switch (eDataType.getClassifierID()) {
            case 17: //EcorePackageImpl.EBIGDECIMAL
                return this.createEBigDecimalFromString(eDataType, initialValue);
            case 18: //EcorePackageImpl.EBIGINTEGER
                return this.createEBigIntegerFromString(eDataType, initialValue);
            case 19: //EcorePackageImpl.EBOOLEAN
                return this.createEBooleanFromString(eDataType, initialValue);
            case 20: //EcorePackageImpl.EBOOLEANOBJECT
                return this.createEBooleanObjectFromString(eDataType, initialValue);
            case 21: //EcorePackageImpl.EBYTE
                return this.createEByteFromString(eDataType, initialValue);
            case 22: //EcorePackageImpl.EBYTEARRAY
                return this.createEByteArrayFromString(eDataType, initialValue);
            case 23: //EcorePackageImpl.EBYTEOBJECT
                return this.createEByteObjectFromString(eDataType, initialValue);
            case 24: //EcorePackageImpl.ECHAR
                return this.createECharFromString(eDataType, initialValue);
            case 25: //EcorePackageImpl.ECHARACTEROBJECT
                return this.createECharacterObjectFromString(eDataType, initialValue);
            case 26: //EcorePackageImpl.EDATE
                return this.createEDateFromString(eDataType, initialValue);
            case 28: //EcorePackageImpl.EDOUBLE
                return this.createEDoubleFromString(eDataType, initialValue);
            case 29: //EcorePackageImpl.EDOUBLEOBJECT
                return this.createEDoubleObjectFromString(eDataType, initialValue);
            case 34: //EcorePackageImpl.EFLOAT
                return this.createEFloatFromString(eDataType, initialValue);
            case 35: //EcorePackageImpl.EFLOATOBJECT
                return this.createEFloatObjectFromString(eDataType, initialValue);
            case 36: //EcorePackageImpl.EINT
                return this.createEIntFromString(eDataType, initialValue);
            case 37: //EcorePackageImpl.EINTEGEROBJECT
                return this.createEIntegerObjectFromString(eDataType, initialValue);
            case 38: //EcorePackageImpl.EJAVACLASS
                return this.createEJavaClassFromString(eDataType, initialValue);
            case 39: //EcorePackageImpl.EJAVAOBJECT
                return this.createEJavaObjectFromString(eDataType, initialValue);
            case 40: //EcorePackageImpl.ELONG
                return this.createELongFromString(eDataType, initialValue);
            case 41: //EcorePackageImpl.ELONGOBJECT
                return this.createELongObjectFromString(eDataType, initialValue);
            case 45: //EcorePackageImpl.ESHORT
                return this.createEShortFromString(eDataType, initialValue);
            case 46: //EcorePackageImpl.ESHORTOBJECT
                return this.createEShortObjectFromString(eDataType, initialValue);
            case 47: //EcorePackageImpl.ESTRING
                return this.createEStringFromString(eDataType, initialValue);
            default:
                throw new Error("The datatype '" + eDataType.name + "' is not a valid classifier");
        }
    };
    EcoreFactoryImpl.prototype.convertToString = function (eDataType, instanceValue) {
        switch (eDataType.getClassifierID()) {
            case 17: //EcorePackageImpl.EBIGDECIMAL
                return this.convertEBigDecimalToString(eDataType, instanceValue);
            case 18: //EcorePackageImpl.EBIGINTEGER
                return this.convertEBigIntegerToString(eDataType, instanceValue);
            case 19: //EcorePackageImpl.EBOOLEAN
                return this.convertEBooleanToString(eDataType, instanceValue);
            case 20: //EcorePackageImpl.EBOOLEANOBJECT
                return this.convertEBooleanObjectToString(eDataType, instanceValue);
            case 21: //EcorePackageImpl.EBYTE
                return this.convertEByteToString(eDataType, instanceValue);
            case 22: //EcorePackageImpl.EBYTEARRAY
                return this.convertEByteArrayToString(eDataType, instanceValue);
            case 23: //EcorePackageImpl.EBYTEOBJECT
                return this.convertEByteObjectToString(eDataType, instanceValue);
            case 24: //EcorePackageImpl.ECHAR
                return this.convertECharToString(eDataType, instanceValue);
            case 25: //EcorePackageImpl.ECHARACTEROBJECT
                return this.convertECharacterObjectToString(eDataType, instanceValue);
            case 26: //EcorePackageImpl.EDATE
                return this.convertEDateToString(eDataType, instanceValue);
            case 28: //EcorePackageImpl.EDOUBLE
                return this.convertEDoubleToString(eDataType, instanceValue);
            case 29: //EcorePackageImpl.EDOUBLEOBJECT
                return this.convertEDoubleObjectToString(eDataType, instanceValue);
            case 34: //EcorePackageImpl.EFLOAT
                return this.convertEFloatToString(eDataType, instanceValue);
            case 35: //EcorePackageImpl.EFLOATOBJECT
                return this.convertEFloatObjectToString(eDataType, instanceValue);
            case 36: //EcorePackageImpl.EINT
                return this.convertEIntToString(eDataType, instanceValue);
            case 37: //EcorePackageImpl.EINTEGEROBJECT
                return this.convertEIntegerObjectToString(eDataType, instanceValue);
            case 38: //EcorePackageImpl.EJAVACLASS
                return this.convertEJavaClassToString(eDataType, instanceValue);
            case 39: //EcorePackageImpl.EJAVAOBJECT
                return this.convertEJavaObjectToString(eDataType, instanceValue);
            case 40: //EcorePackageImpl.ELONG
                return this.convertELongToString(eDataType, instanceValue);
            case 41: //EcorePackageImpl.ELONGOBJECT
                return this.convertELongObjectToString(eDataType, instanceValue);
            case 45: //EcorePackageImpl.ESHORT
                return this.convertEShortToString(eDataType, instanceValue);
            case 46: //EcorePackageImpl.ESHORTOBJECT
                return this.convertEShortObjectToString(eDataType, instanceValue);
            case 47: //EcorePackageImpl.ESTRING
                return this.convertEStringToString(eDataType, instanceValue);
            default:
                throw new Error("The datatype '" + eDataType.name + "' is not a valid classifier");
        }
    };
    EcoreFactoryImpl.prototype.createEBigDecimalFromString = function (eDataType, initialValue) {
        return initialValue == null ? null : JSON.parse(initialValue);
    };
    EcoreFactoryImpl.prototype.convertEBigDecimalToString = function (eDataType, instanceValue) {
        return instanceValue === null ? null : JSON.stringify(instanceValue);
    };
    EcoreFactoryImpl.prototype.createEBigIntegerFromString = function (eDataType, initialValue) {
        return initialValue == null ? null : JSON.parse(initialValue);
    };
    EcoreFactoryImpl.prototype.convertEBigIntegerToString = function (eDataType, instanceValue) {
        return instanceValue === null ? null : JSON.stringify(instanceValue);
    };
    EcoreFactoryImpl.prototype.createEBooleanFromString = function (eDataType, initialValue) {
        return initialValue == null ? null : JSON.parse(initialValue);
    };
    EcoreFactoryImpl.prototype.convertEBooleanToString = function (eDataType, instanceValue) {
        return instanceValue === null ? null : JSON.stringify(instanceValue);
    };
    EcoreFactoryImpl.prototype.createEBooleanObjectFromString = function (eDataType, initialValue) {
        return initialValue == null ? null : JSON.parse(initialValue);
    };
    EcoreFactoryImpl.prototype.convertEBooleanObjectToString = function (eDataType, instanceValue) {
        return instanceValue === null ? null : JSON.stringify(instanceValue);
    };
    EcoreFactoryImpl.prototype.createEByteFromString = function (eDataType, initialValue) {
        return initialValue == null ? null : JSON.parse(initialValue);
    };
    EcoreFactoryImpl.prototype.convertEByteToString = function (eDataType, instanceValue) {
        return instanceValue === null ? null : JSON.stringify(instanceValue);
    };
    EcoreFactoryImpl.prototype.createEByteArrayFromString = function (eDataType, initialValue) {
        return initialValue == null ? null : JSON.parse(initialValue);
    };
    EcoreFactoryImpl.prototype.convertEByteArrayToString = function (eDataType, instanceValue) {
        return instanceValue === null ? null : JSON.stringify(instanceValue);
    };
    EcoreFactoryImpl.prototype.createEByteObjectFromString = function (eDataType, initialValue) {
        return initialValue == null ? null : JSON.parse(initialValue);
    };
    EcoreFactoryImpl.prototype.convertEByteObjectToString = function (eDataType, instanceValue) {
        return instanceValue === null ? null : JSON.stringify(instanceValue);
    };
    EcoreFactoryImpl.prototype.createECharFromString = function (eDataType, initialValue) {
        return initialValue == null ? null : JSON.parse(initialValue);
    };
    EcoreFactoryImpl.prototype.convertECharToString = function (eDataType, instanceValue) {
        return instanceValue === null ? null : JSON.stringify(instanceValue);
    };
    EcoreFactoryImpl.prototype.createECharacterObjectFromString = function (eDataType, initialValue) {
        return initialValue == null ? null : JSON.parse(initialValue);
    };
    EcoreFactoryImpl.prototype.convertECharacterObjectToString = function (eDataType, instanceValue) {
        return instanceValue === null ? null : JSON.stringify(instanceValue);
    };
    EcoreFactoryImpl.prototype.createEDateFromString = function (eDataType, initialValue) {
        return initialValue == null ? null : JSON.parse(initialValue);
    };
    EcoreFactoryImpl.prototype.convertEDateToString = function (eDataType, instanceValue) {
        return instanceValue === null ? null : JSON.stringify(instanceValue);
    };
    EcoreFactoryImpl.prototype.createEDoubleFromString = function (eDataType, initialValue) {
        return initialValue == null ? null : JSON.parse(initialValue);
    };
    EcoreFactoryImpl.prototype.convertEDoubleToString = function (eDataType, instanceValue) {
        return instanceValue === null ? null : JSON.stringify(instanceValue);
    };
    EcoreFactoryImpl.prototype.createEDoubleObjectFromString = function (eDataType, initialValue) {
        return initialValue == null ? null : JSON.parse(initialValue);
    };
    EcoreFactoryImpl.prototype.convertEDoubleObjectToString = function (eDataType, instanceValue) {
        return instanceValue === null ? null : JSON.stringify(instanceValue);
    };
    EcoreFactoryImpl.prototype.createEFloatFromString = function (eDataType, initialValue) {
        return initialValue == null ? null : JSON.parse(initialValue);
    };
    EcoreFactoryImpl.prototype.convertEFloatToString = function (eDataType, instanceValue) {
        return instanceValue === null ? null : JSON.stringify(instanceValue);
    };
    EcoreFactoryImpl.prototype.createEFloatObjectFromString = function (eDataType, initialValue) {
        return initialValue == null ? null : JSON.parse(initialValue);
    };
    EcoreFactoryImpl.prototype.convertEFloatObjectToString = function (eDataType, instanceValue) {
        return instanceValue === null ? null : JSON.stringify(instanceValue);
    };
    EcoreFactoryImpl.prototype.createEIntFromString = function (eDataType, initialValue) {
        return initialValue == null ? null : JSON.parse(initialValue);
    };
    EcoreFactoryImpl.prototype.convertEIntToString = function (eDataType, instanceValue) {
        return instanceValue === null ? null : JSON.stringify(instanceValue);
    };
    EcoreFactoryImpl.prototype.createEIntegerObjectFromString = function (eDataType, initialValue) {
        return initialValue == null ? null : JSON.parse(initialValue);
    };
    EcoreFactoryImpl.prototype.convertEIntegerObjectToString = function (eDataType, instanceValue) {
        return instanceValue === null ? null : JSON.stringify(instanceValue);
    };
    EcoreFactoryImpl.prototype.createEJavaClassFromString = function (eDataType, initialValue) {
        return initialValue == null ? null : JSON.parse(initialValue);
    };
    EcoreFactoryImpl.prototype.convertEJavaClassToString = function (eDataType, instanceValue) {
        return instanceValue === null ? null : JSON.stringify(instanceValue);
    };
    EcoreFactoryImpl.prototype.createEJavaObjectFromString = function (eDataType, initialValue) {
        return initialValue == null ? null : JSON.parse(initialValue);
    };
    EcoreFactoryImpl.prototype.convertEJavaObjectToString = function (eDataType, instanceValue) {
        return instanceValue === null ? null : JSON.stringify(instanceValue);
    };
    EcoreFactoryImpl.prototype.createELongFromString = function (eDataType, initialValue) {
        return initialValue == null ? null : JSON.parse(initialValue);
    };
    EcoreFactoryImpl.prototype.convertELongToString = function (eDataType, instanceValue) {
        return instanceValue === null ? null : JSON.stringify(instanceValue);
    };
    EcoreFactoryImpl.prototype.createELongObjectFromString = function (eDataType, initialValue) {
        return initialValue == null ? null : JSON.parse(initialValue);
    };
    EcoreFactoryImpl.prototype.convertELongObjectToString = function (eDataType, instanceValue) {
        return instanceValue === null ? null : JSON.stringify(instanceValue);
    };
    EcoreFactoryImpl.prototype.createEShortFromString = function (eDataType, initialValue) {
        return initialValue == null ? null : JSON.parse(initialValue);
    };
    EcoreFactoryImpl.prototype.convertEShortToString = function (eDataType, instanceValue) {
        return instanceValue === null ? null : JSON.stringify(instanceValue);
    };
    EcoreFactoryImpl.prototype.createEShortObjectFromString = function (eDataType, initialValue) {
        return initialValue == null ? null : JSON.parse(initialValue);
    };
    EcoreFactoryImpl.prototype.convertEShortObjectToString = function (eDataType, instanceValue) {
        return instanceValue === null ? null : JSON.stringify(instanceValue);
    };
    EcoreFactoryImpl.prototype.createEStringFromString = function (eDataType, initialValue) {
        return initialValue == null ? null : JSON.parse(initialValue);
    };
    EcoreFactoryImpl.prototype.convertEStringToString = function (eDataType, instanceValue) {
        return instanceValue === null ? null : JSON.stringify(instanceValue);
    };
    EcoreFactoryImpl.eINSTANCE = EcoreFactoryImpl.init();
    return EcoreFactoryImpl;
}(_EFactoryImpl__WEBPACK_IMPORTED_MODULE_10__["EFactoryImpl"]));



/***/ }),

/***/ "./node_modules/crossecore/src/EcorePackageImpl.ts":
/*!*********************************************************!*\
  !*** ./node_modules/crossecore/src/EcorePackageImpl.ts ***!
  \*********************************************************/
/*! exports provided: EcorePackageImpl */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EcorePackageImpl", function() { return EcorePackageImpl; });
/* harmony import */ var _EEnumBase__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./EEnumBase */ "./node_modules/crossecore/src/EEnumBase.ts");
/* harmony import */ var _EAttributeBase__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./EAttributeBase */ "./node_modules/crossecore/src/EAttributeBase.ts");
/* harmony import */ var _EFactoryBase__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./EFactoryBase */ "./node_modules/crossecore/src/EFactoryBase.ts");
/* harmony import */ var _EStringToStringMapEntryImpl__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./EStringToStringMapEntryImpl */ "./node_modules/crossecore/src/EStringToStringMapEntryImpl.ts");
/* harmony import */ var _EcoreFactoryImpl__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./EcoreFactoryImpl */ "./node_modules/crossecore/src/EcoreFactoryImpl.ts");
/* harmony import */ var _EEnumImpl__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./EEnumImpl */ "./node_modules/crossecore/src/EEnumImpl.ts");
/* harmony import */ var _ETypedElementBase__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ETypedElementBase */ "./node_modules/crossecore/src/ETypedElementBase.ts");
/* harmony import */ var _EStructuralFeatureBase__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./EStructuralFeatureBase */ "./node_modules/crossecore/src/EStructuralFeatureBase.ts");
/* harmony import */ var _EClassBase__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./EClassBase */ "./node_modules/crossecore/src/EClassBase.ts");
/* harmony import */ var _EAnnotationImpl__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./EAnnotationImpl */ "./node_modules/crossecore/src/EAnnotationImpl.ts");
/* harmony import */ var _ENamedElementBase__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./ENamedElementBase */ "./node_modules/crossecore/src/ENamedElementBase.ts");
/* harmony import */ var _EModelElementBase__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./EModelElementBase */ "./node_modules/crossecore/src/EModelElementBase.ts");
/* harmony import */ var _EFactoryImpl__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./EFactoryImpl */ "./node_modules/crossecore/src/EFactoryImpl.ts");
/* harmony import */ var _EOperationImpl__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./EOperationImpl */ "./node_modules/crossecore/src/EOperationImpl.ts");
/* harmony import */ var _ETypeParameterBase__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./ETypeParameterBase */ "./node_modules/crossecore/src/ETypeParameterBase.ts");
/* harmony import */ var _EPackageImpl__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./EPackageImpl */ "./node_modules/crossecore/src/EPackageImpl.ts");
/* harmony import */ var _EStructuralFeatureImpl__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./EStructuralFeatureImpl */ "./node_modules/crossecore/src/EStructuralFeatureImpl.ts");
/* harmony import */ var _EReferenceBase__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./EReferenceBase */ "./node_modules/crossecore/src/EReferenceBase.ts");
/* harmony import */ var _EModelElementImpl__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./EModelElementImpl */ "./node_modules/crossecore/src/EModelElementImpl.ts");
/* harmony import */ var _EGenericTypeImpl__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./EGenericTypeImpl */ "./node_modules/crossecore/src/EGenericTypeImpl.ts");
/* harmony import */ var _EClassifierBase__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./EClassifierBase */ "./node_modules/crossecore/src/EClassifierBase.ts");
/* harmony import */ var _EDataTypeBase__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./EDataTypeBase */ "./node_modules/crossecore/src/EDataTypeBase.ts");
/* harmony import */ var _EOperationBase__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./EOperationBase */ "./node_modules/crossecore/src/EOperationBase.ts");
/* harmony import */ var _EEnumLiteralImpl__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./EEnumLiteralImpl */ "./node_modules/crossecore/src/EEnumLiteralImpl.ts");
/* harmony import */ var _EObjectBase__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./EObjectBase */ "./node_modules/crossecore/src/EObjectBase.ts");
/* harmony import */ var _EAnnotationBase__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./EAnnotationBase */ "./node_modules/crossecore/src/EAnnotationBase.ts");
/* harmony import */ var _EPackageBase__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./EPackageBase */ "./node_modules/crossecore/src/EPackageBase.ts");
/* harmony import */ var _EEnumLiteralBase__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./EEnumLiteralBase */ "./node_modules/crossecore/src/EEnumLiteralBase.ts");
/* harmony import */ var _EObjectImpl__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./EObjectImpl */ "./node_modules/crossecore/src/EObjectImpl.ts");
/* harmony import */ var _EParameterImpl__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./EParameterImpl */ "./node_modules/crossecore/src/EParameterImpl.ts");
/* harmony import */ var _EDataTypeImpl__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./EDataTypeImpl */ "./node_modules/crossecore/src/EDataTypeImpl.ts");
/* harmony import */ var _EClassifierImpl__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./EClassifierImpl */ "./node_modules/crossecore/src/EClassifierImpl.ts");
/* harmony import */ var _EReferenceImpl__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./EReferenceImpl */ "./node_modules/crossecore/src/EReferenceImpl.ts");
/* harmony import */ var _ETypeParameterImpl__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./ETypeParameterImpl */ "./node_modules/crossecore/src/ETypeParameterImpl.ts");
/* harmony import */ var _EAttributeImpl__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./EAttributeImpl */ "./node_modules/crossecore/src/EAttributeImpl.ts");
/* harmony import */ var _EParameterBase__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./EParameterBase */ "./node_modules/crossecore/src/EParameterBase.ts");
/* harmony import */ var _EGenericTypeBase__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./EGenericTypeBase */ "./node_modules/crossecore/src/EGenericTypeBase.ts");
/* harmony import */ var _ETypedElementImpl__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ./ETypedElementImpl */ "./node_modules/crossecore/src/ETypedElementImpl.ts");
/* harmony import */ var _ENamedElementImpl__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ./ENamedElementImpl */ "./node_modules/crossecore/src/ENamedElementImpl.ts");
/* harmony import */ var _EStringToStringMapEntryBase__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ./EStringToStringMapEntryBase */ "./node_modules/crossecore/src/EStringToStringMapEntryBase.ts");
/* harmony import */ var _EClassImpl__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! ./EClassImpl */ "./node_modules/crossecore/src/EClassImpl.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();









































var EcorePackageImpl = /** @class */ (function (_super) {
    __extends(EcorePackageImpl, _super);
    function EcorePackageImpl() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.isCreated = false;
        _this.createPackageContents = function () {
            if (_this.isCreated)
                return;
            _this.isCreated = true;
            _this.EAttributeEClass = _this.createEClass(EcorePackageImpl.EATTRIBUTE);
            _EAttributeBase__WEBPACK_IMPORTED_MODULE_1__["EAttributeBase"].eStaticClass = _this.EAttributeEClass;
            _this.createEAttribute(_this.EAttributeEClass, EcorePackageImpl.EATTRIBUTE_ID);
            _this.createEReference(_this.EAttributeEClass, EcorePackageImpl.EATTRIBUTE_EATTRIBUTETYPE);
            _this.EAnnotationEClass = _this.createEClass(EcorePackageImpl.EANNOTATION);
            _EAnnotationBase__WEBPACK_IMPORTED_MODULE_25__["EAnnotationBase"].eStaticClass = _this.EAnnotationEClass;
            _this.createEAttribute(_this.EAnnotationEClass, EcorePackageImpl.EANNOTATION_SOURCE);
            _this.createEReference(_this.EAnnotationEClass, EcorePackageImpl.EANNOTATION_DETAILS);
            _this.createEReference(_this.EAnnotationEClass, EcorePackageImpl.EANNOTATION_EMODELELEMENT);
            _this.createEReference(_this.EAnnotationEClass, EcorePackageImpl.EANNOTATION_CONTENTS);
            _this.createEReference(_this.EAnnotationEClass, EcorePackageImpl.EANNOTATION_REFERENCES);
            _this.EClassEClass = _this.createEClass(EcorePackageImpl.ECLASS);
            _EClassBase__WEBPACK_IMPORTED_MODULE_8__["EClassBase"].eStaticClass = _this.EClassEClass;
            _this.createEAttribute(_this.EClassEClass, EcorePackageImpl.ECLASS_ABSTRACT);
            _this.createEAttribute(_this.EClassEClass, EcorePackageImpl.ECLASS_INTERFACE);
            _this.createEReference(_this.EClassEClass, EcorePackageImpl.ECLASS_ESUPERTYPES);
            _this.createEReference(_this.EClassEClass, EcorePackageImpl.ECLASS_EOPERATIONS);
            _this.createEReference(_this.EClassEClass, EcorePackageImpl.ECLASS_EALLATTRIBUTES);
            _this.createEReference(_this.EClassEClass, EcorePackageImpl.ECLASS_EALLREFERENCES);
            _this.createEReference(_this.EClassEClass, EcorePackageImpl.ECLASS_EREFERENCES);
            _this.createEReference(_this.EClassEClass, EcorePackageImpl.ECLASS_EATTRIBUTES);
            _this.createEReference(_this.EClassEClass, EcorePackageImpl.ECLASS_EALLCONTAINMENTS);
            _this.createEReference(_this.EClassEClass, EcorePackageImpl.ECLASS_EALLOPERATIONS);
            _this.createEReference(_this.EClassEClass, EcorePackageImpl.ECLASS_EALLSTRUCTURALFEATURES);
            _this.createEReference(_this.EClassEClass, EcorePackageImpl.ECLASS_EALLSUPERTYPES);
            _this.createEReference(_this.EClassEClass, EcorePackageImpl.ECLASS_EIDATTRIBUTE);
            _this.createEReference(_this.EClassEClass, EcorePackageImpl.ECLASS_ESTRUCTURALFEATURES);
            _this.createEReference(_this.EClassEClass, EcorePackageImpl.ECLASS_EGENERICSUPERTYPES);
            _this.createEReference(_this.EClassEClass, EcorePackageImpl.ECLASS_EALLGENERICSUPERTYPES);
            _this.createEOperation(_this.EClassEClass, EcorePackageImpl.ECLASS___ISSUPERTYPEOF__SOMECLASS);
            _this.createEOperation(_this.EClassEClass, EcorePackageImpl.ECLASS___GETFEATURECOUNT);
            _this.createEOperation(_this.EClassEClass, EcorePackageImpl.ECLASS___GETESTRUCTURALFEATURE__FEATUREID);
            _this.createEOperation(_this.EClassEClass, EcorePackageImpl.ECLASS___GETFEATUREID__FEATURE);
            _this.createEOperation(_this.EClassEClass, EcorePackageImpl.ECLASS___GETESTRUCTURALFEATURE__FEATURENAME);
            _this.createEOperation(_this.EClassEClass, EcorePackageImpl.ECLASS___GETOPERATIONCOUNT);
            _this.createEOperation(_this.EClassEClass, EcorePackageImpl.ECLASS___GETEOPERATION__OPERATIONID);
            _this.createEOperation(_this.EClassEClass, EcorePackageImpl.ECLASS___GETOPERATIONID__OPERATION);
            _this.createEOperation(_this.EClassEClass, EcorePackageImpl.ECLASS___GETOVERRIDE__OPERATION);
            _this.createEOperation(_this.EClassEClass, EcorePackageImpl.ECLASS___GETFEATURETYPE__FEATURE);
            _this.EClassifierEClass = _this.createEClass(EcorePackageImpl.ECLASSIFIER);
            _EClassifierBase__WEBPACK_IMPORTED_MODULE_20__["EClassifierBase"].eStaticClass = _this.EClassifierEClass;
            _this.createEAttribute(_this.EClassifierEClass, EcorePackageImpl.ECLASSIFIER_INSTANCECLASSNAME);
            _this.createEAttribute(_this.EClassifierEClass, EcorePackageImpl.ECLASSIFIER_INSTANCECLASS);
            _this.createEAttribute(_this.EClassifierEClass, EcorePackageImpl.ECLASSIFIER_DEFAULTVALUE);
            _this.createEAttribute(_this.EClassifierEClass, EcorePackageImpl.ECLASSIFIER_INSTANCETYPENAME);
            _this.createEReference(_this.EClassifierEClass, EcorePackageImpl.ECLASSIFIER_EPACKAGE);
            _this.createEReference(_this.EClassifierEClass, EcorePackageImpl.ECLASSIFIER_ETYPEPARAMETERS);
            _this.createEOperation(_this.EClassifierEClass, EcorePackageImpl.ECLASSIFIER___ISINSTANCE__OBJECT);
            _this.createEOperation(_this.EClassifierEClass, EcorePackageImpl.ECLASSIFIER___GETCLASSIFIERID);
            _this.EDataTypeEClass = _this.createEClass(EcorePackageImpl.EDATATYPE);
            _EDataTypeBase__WEBPACK_IMPORTED_MODULE_21__["EDataTypeBase"].eStaticClass = _this.EDataTypeEClass;
            _this.createEAttribute(_this.EDataTypeEClass, EcorePackageImpl.EDATATYPE_SERIALIZABLE);
            _this.EEnumEClass = _this.createEClass(EcorePackageImpl.EENUM);
            _EEnumBase__WEBPACK_IMPORTED_MODULE_0__["EEnumBase"].eStaticClass = _this.EEnumEClass;
            _this.createEReference(_this.EEnumEClass, EcorePackageImpl.EENUM_ELITERALS);
            _this.createEOperation(_this.EEnumEClass, EcorePackageImpl.EENUM___GETEENUMLITERAL__NAME);
            _this.createEOperation(_this.EEnumEClass, EcorePackageImpl.EENUM___GETEENUMLITERAL__VALUE);
            _this.createEOperation(_this.EEnumEClass, EcorePackageImpl.EENUM___GETEENUMLITERALBYLITERAL__LITERAL);
            _this.EEnumLiteralEClass = _this.createEClass(EcorePackageImpl.EENUMLITERAL);
            _EEnumLiteralBase__WEBPACK_IMPORTED_MODULE_27__["EEnumLiteralBase"].eStaticClass = _this.EEnumLiteralEClass;
            _this.createEAttribute(_this.EEnumLiteralEClass, EcorePackageImpl.EENUMLITERAL_VALUE);
            _this.createEAttribute(_this.EEnumLiteralEClass, EcorePackageImpl.EENUMLITERAL_INSTANCE);
            _this.createEAttribute(_this.EEnumLiteralEClass, EcorePackageImpl.EENUMLITERAL_LITERAL);
            _this.createEReference(_this.EEnumLiteralEClass, EcorePackageImpl.EENUMLITERAL_EENUM);
            _this.EFactoryEClass = _this.createEClass(EcorePackageImpl.EFACTORY);
            _EFactoryBase__WEBPACK_IMPORTED_MODULE_2__["EFactoryBase"].eStaticClass = _this.EFactoryEClass;
            _this.createEReference(_this.EFactoryEClass, EcorePackageImpl.EFACTORY_EPACKAGE);
            _this.createEOperation(_this.EFactoryEClass, EcorePackageImpl.EFACTORY___CREATE__ECLASS);
            _this.createEOperation(_this.EFactoryEClass, EcorePackageImpl.EFACTORY___CREATEFROMSTRING__EDATATYPE__LITERALVALUE);
            _this.createEOperation(_this.EFactoryEClass, EcorePackageImpl.EFACTORY___CONVERTTOSTRING__EDATATYPE__INSTANCEVALUE);
            _this.EModelElementEClass = _this.createEClass(EcorePackageImpl.EMODELELEMENT);
            _EModelElementBase__WEBPACK_IMPORTED_MODULE_11__["EModelElementBase"].eStaticClass = _this.EModelElementEClass;
            _this.createEReference(_this.EModelElementEClass, EcorePackageImpl.EMODELELEMENT_EANNOTATIONS);
            _this.createEOperation(_this.EModelElementEClass, EcorePackageImpl.EMODELELEMENT___GETEANNOTATION__SOURCE);
            _this.ENamedElementEClass = _this.createEClass(EcorePackageImpl.ENAMEDELEMENT);
            _ENamedElementBase__WEBPACK_IMPORTED_MODULE_10__["ENamedElementBase"].eStaticClass = _this.ENamedElementEClass;
            _this.createEAttribute(_this.ENamedElementEClass, EcorePackageImpl.ENAMEDELEMENT_NAME);
            _this.EObjectEClass = _this.createEClass(EcorePackageImpl.EOBJECT);
            _EObjectBase__WEBPACK_IMPORTED_MODULE_24__["EObjectBase"].eStaticClass = _this.EObjectEClass;
            _this.createEOperation(_this.EObjectEClass, EcorePackageImpl.EOBJECT___ECLASS);
            _this.createEOperation(_this.EObjectEClass, EcorePackageImpl.EOBJECT___EISPROXY);
            _this.createEOperation(_this.EObjectEClass, EcorePackageImpl.EOBJECT___ERESOURCE);
            _this.createEOperation(_this.EObjectEClass, EcorePackageImpl.EOBJECT___ECONTAINER);
            _this.createEOperation(_this.EObjectEClass, EcorePackageImpl.EOBJECT___ECONTAININGFEATURE);
            _this.createEOperation(_this.EObjectEClass, EcorePackageImpl.EOBJECT___ECONTAINMENTFEATURE);
            _this.createEOperation(_this.EObjectEClass, EcorePackageImpl.EOBJECT___ECONTENTS);
            _this.createEOperation(_this.EObjectEClass, EcorePackageImpl.EOBJECT___EALLCONTENTS);
            _this.createEOperation(_this.EObjectEClass, EcorePackageImpl.EOBJECT___ECROSSREFERENCES);
            _this.createEOperation(_this.EObjectEClass, EcorePackageImpl.EOBJECT___EGET__FEATURE);
            _this.createEOperation(_this.EObjectEClass, EcorePackageImpl.EOBJECT___EGET__FEATURE__RESOLVE);
            _this.createEOperation(_this.EObjectEClass, EcorePackageImpl.EOBJECT___ESET__FEATURE__NEWVALUE);
            _this.createEOperation(_this.EObjectEClass, EcorePackageImpl.EOBJECT___EISSET__FEATURE);
            _this.createEOperation(_this.EObjectEClass, EcorePackageImpl.EOBJECT___EUNSET__FEATURE);
            _this.createEOperation(_this.EObjectEClass, EcorePackageImpl.EOBJECT___EINVOKE__OPERATION__ARGUMENTS);
            _this.EOperationEClass = _this.createEClass(EcorePackageImpl.EOPERATION);
            _EOperationBase__WEBPACK_IMPORTED_MODULE_22__["EOperationBase"].eStaticClass = _this.EOperationEClass;
            _this.createEReference(_this.EOperationEClass, EcorePackageImpl.EOPERATION_ECONTAININGCLASS);
            _this.createEReference(_this.EOperationEClass, EcorePackageImpl.EOPERATION_ETYPEPARAMETERS);
            _this.createEReference(_this.EOperationEClass, EcorePackageImpl.EOPERATION_EPARAMETERS);
            _this.createEReference(_this.EOperationEClass, EcorePackageImpl.EOPERATION_EEXCEPTIONS);
            _this.createEReference(_this.EOperationEClass, EcorePackageImpl.EOPERATION_EGENERICEXCEPTIONS);
            _this.createEOperation(_this.EOperationEClass, EcorePackageImpl.EOPERATION___GETOPERATIONID);
            _this.createEOperation(_this.EOperationEClass, EcorePackageImpl.EOPERATION___ISOVERRIDEOF__SOMEOPERATION);
            _this.EPackageEClass = _this.createEClass(EcorePackageImpl.EPACKAGE);
            _EPackageBase__WEBPACK_IMPORTED_MODULE_26__["EPackageBase"].eStaticClass = _this.EPackageEClass;
            _this.createEAttribute(_this.EPackageEClass, EcorePackageImpl.EPACKAGE_NSURI);
            _this.createEAttribute(_this.EPackageEClass, EcorePackageImpl.EPACKAGE_NSPREFIX);
            _this.createEReference(_this.EPackageEClass, EcorePackageImpl.EPACKAGE_EFACTORYINSTANCE);
            _this.createEReference(_this.EPackageEClass, EcorePackageImpl.EPACKAGE_ECLASSIFIERS);
            _this.createEReference(_this.EPackageEClass, EcorePackageImpl.EPACKAGE_ESUBPACKAGES);
            _this.createEReference(_this.EPackageEClass, EcorePackageImpl.EPACKAGE_ESUPERPACKAGE);
            _this.createEOperation(_this.EPackageEClass, EcorePackageImpl.EPACKAGE___GETECLASSIFIER__NAME);
            _this.EParameterEClass = _this.createEClass(EcorePackageImpl.EPARAMETER);
            _EParameterBase__WEBPACK_IMPORTED_MODULE_35__["EParameterBase"].eStaticClass = _this.EParameterEClass;
            _this.createEReference(_this.EParameterEClass, EcorePackageImpl.EPARAMETER_EOPERATION);
            _this.EReferenceEClass = _this.createEClass(EcorePackageImpl.EREFERENCE);
            _EReferenceBase__WEBPACK_IMPORTED_MODULE_17__["EReferenceBase"].eStaticClass = _this.EReferenceEClass;
            _this.createEAttribute(_this.EReferenceEClass, EcorePackageImpl.EREFERENCE_CONTAINMENT);
            _this.createEAttribute(_this.EReferenceEClass, EcorePackageImpl.EREFERENCE_CONTAINER);
            _this.createEAttribute(_this.EReferenceEClass, EcorePackageImpl.EREFERENCE_RESOLVEPROXIES);
            _this.createEReference(_this.EReferenceEClass, EcorePackageImpl.EREFERENCE_EOPPOSITE);
            _this.createEReference(_this.EReferenceEClass, EcorePackageImpl.EREFERENCE_EREFERENCETYPE);
            _this.createEReference(_this.EReferenceEClass, EcorePackageImpl.EREFERENCE_EKEYS);
            _this.EStructuralFeatureEClass = _this.createEClass(EcorePackageImpl.ESTRUCTURALFEATURE);
            _EStructuralFeatureBase__WEBPACK_IMPORTED_MODULE_7__["EStructuralFeatureBase"].eStaticClass = _this.EStructuralFeatureEClass;
            _this.createEAttribute(_this.EStructuralFeatureEClass, EcorePackageImpl.ESTRUCTURALFEATURE_CHANGEABLE);
            _this.createEAttribute(_this.EStructuralFeatureEClass, EcorePackageImpl.ESTRUCTURALFEATURE_VOLATILE);
            _this.createEAttribute(_this.EStructuralFeatureEClass, EcorePackageImpl.ESTRUCTURALFEATURE_TRANSIENT);
            _this.createEAttribute(_this.EStructuralFeatureEClass, EcorePackageImpl.ESTRUCTURALFEATURE_DEFAULTVALUELITERAL);
            _this.createEAttribute(_this.EStructuralFeatureEClass, EcorePackageImpl.ESTRUCTURALFEATURE_DEFAULTVALUE);
            _this.createEAttribute(_this.EStructuralFeatureEClass, EcorePackageImpl.ESTRUCTURALFEATURE_UNSETTABLE);
            _this.createEAttribute(_this.EStructuralFeatureEClass, EcorePackageImpl.ESTRUCTURALFEATURE_DERIVED);
            _this.createEReference(_this.EStructuralFeatureEClass, EcorePackageImpl.ESTRUCTURALFEATURE_ECONTAININGCLASS);
            _this.createEOperation(_this.EStructuralFeatureEClass, EcorePackageImpl.ESTRUCTURALFEATURE___GETFEATUREID);
            _this.createEOperation(_this.EStructuralFeatureEClass, EcorePackageImpl.ESTRUCTURALFEATURE___GETCONTAINERCLASS);
            _this.ETypedElementEClass = _this.createEClass(EcorePackageImpl.ETYPEDELEMENT);
            _ETypedElementBase__WEBPACK_IMPORTED_MODULE_6__["ETypedElementBase"].eStaticClass = _this.ETypedElementEClass;
            _this.createEAttribute(_this.ETypedElementEClass, EcorePackageImpl.ETYPEDELEMENT_ORDERED);
            _this.createEAttribute(_this.ETypedElementEClass, EcorePackageImpl.ETYPEDELEMENT_UNIQUE);
            _this.createEAttribute(_this.ETypedElementEClass, EcorePackageImpl.ETYPEDELEMENT_LOWERBOUND);
            _this.createEAttribute(_this.ETypedElementEClass, EcorePackageImpl.ETYPEDELEMENT_UPPERBOUND);
            _this.createEAttribute(_this.ETypedElementEClass, EcorePackageImpl.ETYPEDELEMENT_MANY);
            _this.createEAttribute(_this.ETypedElementEClass, EcorePackageImpl.ETYPEDELEMENT_REQUIRED);
            _this.createEReference(_this.ETypedElementEClass, EcorePackageImpl.ETYPEDELEMENT_ETYPE);
            _this.createEReference(_this.ETypedElementEClass, EcorePackageImpl.ETYPEDELEMENT_EGENERICTYPE);
            _this.EStringToStringMapEntryEClass = _this.createEClass(EcorePackageImpl.ESTRINGTOSTRINGMAPENTRY);
            _EStringToStringMapEntryBase__WEBPACK_IMPORTED_MODULE_39__["EStringToStringMapEntryBase"].eStaticClass = _this.EStringToStringMapEntryEClass;
            _this.createEAttribute(_this.EStringToStringMapEntryEClass, EcorePackageImpl.ESTRINGTOSTRINGMAPENTRY_KEY);
            _this.createEAttribute(_this.EStringToStringMapEntryEClass, EcorePackageImpl.ESTRINGTOSTRINGMAPENTRY_VALUE);
            _this.EGenericTypeEClass = _this.createEClass(EcorePackageImpl.EGENERICTYPE);
            _EGenericTypeBase__WEBPACK_IMPORTED_MODULE_36__["EGenericTypeBase"].eStaticClass = _this.EGenericTypeEClass;
            _this.createEReference(_this.EGenericTypeEClass, EcorePackageImpl.EGENERICTYPE_EUPPERBOUND);
            _this.createEReference(_this.EGenericTypeEClass, EcorePackageImpl.EGENERICTYPE_ETYPEARGUMENTS);
            _this.createEReference(_this.EGenericTypeEClass, EcorePackageImpl.EGENERICTYPE_ERAWTYPE);
            _this.createEReference(_this.EGenericTypeEClass, EcorePackageImpl.EGENERICTYPE_ELOWERBOUND);
            _this.createEReference(_this.EGenericTypeEClass, EcorePackageImpl.EGENERICTYPE_ETYPEPARAMETER);
            _this.createEReference(_this.EGenericTypeEClass, EcorePackageImpl.EGENERICTYPE_ECLASSIFIER);
            _this.createEOperation(_this.EGenericTypeEClass, EcorePackageImpl.EGENERICTYPE___ISINSTANCE__OBJECT);
            _this.ETypeParameterEClass = _this.createEClass(EcorePackageImpl.ETYPEPARAMETER);
            _ETypeParameterBase__WEBPACK_IMPORTED_MODULE_14__["ETypeParameterBase"].eStaticClass = _this.ETypeParameterEClass;
            _this.createEReference(_this.ETypeParameterEClass, EcorePackageImpl.ETYPEPARAMETER_EBOUNDS);
            _this.EBigDecimalEDataType = _this.createEDataType(EcorePackageImpl.EBIGDECIMAL);
            _this.EBigIntegerEDataType = _this.createEDataType(EcorePackageImpl.EBIGINTEGER);
            _this.EBooleanEDataType = _this.createEDataType(EcorePackageImpl.EBOOLEAN);
            _this.EBooleanObjectEDataType = _this.createEDataType(EcorePackageImpl.EBOOLEANOBJECT);
            _this.EByteEDataType = _this.createEDataType(EcorePackageImpl.EBYTE);
            _this.EByteArrayEDataType = _this.createEDataType(EcorePackageImpl.EBYTEARRAY);
            _this.EByteObjectEDataType = _this.createEDataType(EcorePackageImpl.EBYTEOBJECT);
            _this.ECharEDataType = _this.createEDataType(EcorePackageImpl.ECHAR);
            _this.ECharacterObjectEDataType = _this.createEDataType(EcorePackageImpl.ECHARACTEROBJECT);
            _this.EDateEDataType = _this.createEDataType(EcorePackageImpl.EDATE);
            _this.EDiagnosticChainEDataType = _this.createEDataType(EcorePackageImpl.EDIAGNOSTICCHAIN);
            _this.EDoubleEDataType = _this.createEDataType(EcorePackageImpl.EDOUBLE);
            _this.EDoubleObjectEDataType = _this.createEDataType(EcorePackageImpl.EDOUBLEOBJECT);
            _this.EEListEDataType = _this.createEDataType(EcorePackageImpl.EELIST);
            _this.EEnumeratorEDataType = _this.createEDataType(EcorePackageImpl.EENUMERATOR);
            _this.EFeatureMapEDataType = _this.createEDataType(EcorePackageImpl.EFEATUREMAP);
            _this.EFeatureMapEntryEDataType = _this.createEDataType(EcorePackageImpl.EFEATUREMAPENTRY);
            _this.EFloatEDataType = _this.createEDataType(EcorePackageImpl.EFLOAT);
            _this.EFloatObjectEDataType = _this.createEDataType(EcorePackageImpl.EFLOATOBJECT);
            _this.EIntEDataType = _this.createEDataType(EcorePackageImpl.EINT);
            _this.EIntegerObjectEDataType = _this.createEDataType(EcorePackageImpl.EINTEGEROBJECT);
            _this.EJavaClassEDataType = _this.createEDataType(EcorePackageImpl.EJAVACLASS);
            _this.EJavaObjectEDataType = _this.createEDataType(EcorePackageImpl.EJAVAOBJECT);
            _this.ELongEDataType = _this.createEDataType(EcorePackageImpl.ELONG);
            _this.ELongObjectEDataType = _this.createEDataType(EcorePackageImpl.ELONGOBJECT);
            _this.EMapEDataType = _this.createEDataType(EcorePackageImpl.EMAP);
            _this.EResourceEDataType = _this.createEDataType(EcorePackageImpl.ERESOURCE);
            _this.EResourceSetEDataType = _this.createEDataType(EcorePackageImpl.ERESOURCESET);
            _this.EShortEDataType = _this.createEDataType(EcorePackageImpl.ESHORT);
            _this.EShortObjectEDataType = _this.createEDataType(EcorePackageImpl.ESHORTOBJECT);
            _this.EStringEDataType = _this.createEDataType(EcorePackageImpl.ESTRING);
            _this.ETreeIteratorEDataType = _this.createEDataType(EcorePackageImpl.ETREEITERATOR);
            _this.EInvocationTargetExceptionEDataType = _this.createEDataType(EcorePackageImpl.EINVOCATIONTARGETEXCEPTION);
        };
        _this.isInitialized = false;
        _this.initializePackageContents = function () {
            if (_this.isInitialized)
                return;
            _this.isInitialized = true;
            // Initialize package
            _this.name = EcorePackageImpl.eNAME;
            _this.nsPrefix = EcorePackageImpl.eNS_PREFIX;
            _this.nsURI = EcorePackageImpl.eNS_URI;
            _this.EAttributeEClass.eSuperTypes.add(_this.getEStructuralFeature());
            _this.EAnnotationEClass.eSuperTypes.add(_this.getEModelElement());
            _this.EClassEClass.eSuperTypes.add(_this.getEClassifier_());
            _this.EClassifierEClass.eSuperTypes.add(_this.getENamedElement());
            _this.EDataTypeEClass.eSuperTypes.add(_this.getEClassifier_());
            _this.EEnumEClass.eSuperTypes.add(_this.getEDataType());
            _this.EEnumLiteralEClass.eSuperTypes.add(_this.getENamedElement());
            _this.EFactoryEClass.eSuperTypes.add(_this.getEModelElement());
            _this.ENamedElementEClass.eSuperTypes.add(_this.getEModelElement());
            _this.EOperationEClass.eSuperTypes.add(_this.getETypedElement());
            _this.EPackageEClass.eSuperTypes.add(_this.getENamedElement());
            _this.EParameterEClass.eSuperTypes.add(_this.getETypedElement());
            _this.EReferenceEClass.eSuperTypes.add(_this.getEStructuralFeature());
            _this.EStructuralFeatureEClass.eSuperTypes.add(_this.getETypedElement());
            _this.ETypedElementEClass.eSuperTypes.add(_this.getENamedElement());
            _this.ETypeParameterEClass.eSuperTypes.add(_this.getENamedElement());
            var op = null;
            _this.initEClass(_this.EAttributeEClass, _EAttributeImpl__WEBPACK_IMPORTED_MODULE_34__["EAttributeImpl"], "EAttribute", !_EPackageImpl__WEBPACK_IMPORTED_MODULE_15__["EPackageImpl"].IS_ABSTRACT, !_EPackageImpl__WEBPACK_IMPORTED_MODULE_15__["EPackageImpl"].IS_INTERFACE, _EPackageImpl__WEBPACK_IMPORTED_MODULE_15__["EPackageImpl"].IS_GENERATED_INSTANCE_CLASS);
            _this.initEAttribute_EClassifier(_this.getEAttribute_ID(), _this.ecorePackage.getEBoolean(), "iD", "false", 0, 1, _EAttributeImpl__WEBPACK_IMPORTED_MODULE_34__["EAttributeImpl"], !_EPackageImpl__WEBPACK_IMPORTED_MODULE_15__["EPackageImpl"].IS_TRANSIENT, !_EPackageImpl__WEBPACK_IMPORTED_MODULE_15__["EPackageImpl"].IS_VOLATILE, _EPackageImpl__WEBPACK_IMPORTED_MODULE_15__["EPackageImpl"].IS_CHANGEABLE, !_EPackageImpl__WEBPACK_IMPORTED_MODULE_15__["EPackageImpl"].IS_UNSETTABLE, !_EPackageImpl__WEBPACK_IMPORTED_MODULE_15__["EPackageImpl"].IS_ID, _EPackageImpl__WEBPACK_IMPORTED_MODULE_15__["EPackageImpl"].IS_UNIQUE, !_EPackageImpl__WEBPACK_IMPORTED_MODULE_15__["EPackageImpl"].IS_DERIVED, _EPackageImpl__WEBPACK_IMPORTED_MODULE_15__["EPackageImpl"].IS_ORDERED);
            _this.initEReference(_this.getEAttribute_EAttributeType(), _this.ecorePackage.getEDataType(), null, "eAttributeType", null, 1, 1, _EAttributeImpl__WEBPACK_IMPORTED_MODULE_34__["EAttributeImpl"], _EPackageImpl__WEBPACK_IMPORTED_MODULE_15__["EPackageImpl"].IS_TRANSIENT, _EPackageImpl__WEBPACK_IMPORTED_MODULE_15__["EPackageImpl"].IS_VOLATILE, !_EPackageImpl__WEBPACK_IMPORTED_MODULE_15__["EPackageImpl"].IS_CHANGEABLE, !_EPackageImpl__WEBPACK_IMPORTED_MODULE_15__["EPackageImpl"].IS_COMPOSITE, _EPackageImpl__WEBPACK_IMPORTED_MODULE_15__["EPackageImpl"].IS_RESOLVE_PROXIES, !_EPackageImpl__WEBPACK_IMPORTED_MODULE_15__["EPackageImpl"].IS_UNSETTABLE, _EPackageImpl__WEBPACK_IMPORTED_MODULE_15__["EPackageImpl"].IS_UNIQUE, _EPackageImpl__WEBPACK_IMPORTED_MODULE_15__["EPackageImpl"].IS_DERIVED, _EPackageImpl__WEBPACK_IMPORTED_MODULE_15__["EPackageImpl"].IS_ORDERED);
            _this.initEClass(_this.EAnnotationEClass, _EAnnotationImpl__WEBPACK_IMPORTED_MODULE_9__["EAnnotationImpl"], "EAnnotation", !_EPackageImpl__WEBPACK_IMPORTED_MODULE_15__["EPackageImpl"].IS_ABSTRACT, !_EPackageImpl__WEBPACK_IMPORTED_MODULE_15__["EPackageImpl"].IS_INTERFACE, _EPackageImpl__WEBPACK_IMPORTED_MODULE_15__["EPackageImpl"].IS_GENERATED_INSTANCE_CLASS);
            _this.initEAttribute_EClassifier(_this.getEAnnotation_Source(), _this.ecorePackage.getEString(), "source", null, 0, 1, _EAnnotationImpl__WEBPACK_IMPORTED_MODULE_9__["EAnnotationImpl"], !_EPackageImpl__WEBPACK_IMPORTED_MODULE_15__["EPackageImpl"].IS_TRANSIENT, !_EPackageImpl__WEBPACK_IMPORTED_MODULE_15__["EPackageImpl"].IS_VOLATILE, _EPackageImpl__WEBPACK_IMPORTED_MODULE_15__["EPackageImpl"].IS_CHANGEABLE, !_EPackageImpl__WEBPACK_IMPORTED_MODULE_15__["EPackageImpl"].IS_UNSETTABLE, !_EPackageImpl__WEBPACK_IMPORTED_MODULE_15__["EPackageImpl"].IS_ID, _EPackageImpl__WEBPACK_IMPORTED_MODULE_15__["EPackageImpl"].IS_UNIQUE, !_EPackageImpl__WEBPACK_IMPORTED_MODULE_15__["EPackageImpl"].IS_DERIVED, _EPackageImpl__WEBPACK_IMPORTED_MODULE_15__["EPackageImpl"].IS_ORDERED);
            _this.initEReference(_this.getEAnnotation_Details(), _this.ecorePackage.getEStringToStringMapEntry(), null, "details", null, 0, -1, _EAnnotationImpl__WEBPACK_IMPORTED_MODULE_9__["EAnnotationImpl"], !_EPackageImpl__WEBPACK_IMPORTED_MODULE_15__["EPackageImpl"].IS_TRANSIENT, !_EPackageImpl__WEBPACK_IMPORTED_MODULE_15__["EPackageImpl"].IS_VOLATILE, _EPackageImpl__WEBPACK_IMPORTED_MODULE_15__["EPackageImpl"].IS_CHANGEABLE, _EPackageImpl__WEBPACK_IMPORTED_MODULE_15__["EPackageImpl"].IS_COMPOSITE, !_EPackageImpl__WEBPACK_IMPORTED_MODULE_15__["EPackageImpl"].IS_RESOLVE_PROXIES, !_EPackageImpl__WEBPACK_IMPORTED_MODULE_15__["EPackageImpl"].IS_UNSETTABLE, _EPackageImpl__WEBPACK_IMPORTED_MODULE_15__["EPackageImpl"].IS_UNIQUE, !_EPackageImpl__WEBPACK_IMPORTED_MODULE_15__["EPackageImpl"].IS_DERIVED, _EPackageImpl__WEBPACK_IMPORTED_MODULE_15__["EPackageImpl"].IS_ORDERED);
            _this.initEReference(_this.getEAnnotation_EModelElement(), _this.ecorePackage.getEModelElement(), _this.getEModelElement_EAnnotations(), "eModelElement", null, 0, 1, _EAnnotationImpl__WEBPACK_IMPORTED_MODULE_9__["EAnnotationImpl"], _EPackageImpl__WEBPACK_IMPORTED_MODULE_15__["EPackageImpl"].IS_TRANSIENT, !_EPackageImpl__WEBPACK_IMPORTED_MODULE_15__["EPackageImpl"].IS_VOLATILE, _EPackageImpl__WEBPACK_IMPORTED_MODULE_15__["EPackageImpl"].IS_CHANGEABLE, !_EPackageImpl__WEBPACK_IMPORTED_MODULE_15__["EPackageImpl"].IS_COMPOSITE, !_EPackageImpl__WEBPACK_IMPORTED_MODULE_15__["EPackageImpl"].IS_RESOLVE_PROXIES, !_EPackageImpl__WEBPACK_IMPORTED_MODULE_15__["EPackageImpl"].IS_UNSETTABLE, _EPackageImpl__WEBPACK_IMPORTED_MODULE_15__["EPackageImpl"].IS_UNIQUE, !_EPackageImpl__WEBPACK_IMPORTED_MODULE_15__["EPackageImpl"].IS_DERIVED, _EPackageImpl__WEBPACK_IMPORTED_MODULE_15__["EPackageImpl"].IS_ORDERED);
            _this.initEReference(_this.getEAnnotation_Contents(), _this.ecorePackage.getEObject(), null, "contents", null, 0, -1, _EAnnotationImpl__WEBPACK_IMPORTED_MODULE_9__["EAnnotationImpl"], !_EPackageImpl__WEBPACK_IMPORTED_MODULE_15__["EPackageImpl"].IS_TRANSIENT, !_EPackageImpl__WEBPACK_IMPORTED_MODULE_15__["EPackageImpl"].IS_VOLATILE, _EPackageImpl__WEBPACK_IMPORTED_MODULE_15__["EPackageImpl"].IS_CHANGEABLE, _EPackageImpl__WEBPACK_IMPORTED_MODULE_15__["EPackageImpl"].IS_COMPOSITE, !_EPackageImpl__WEBPACK_IMPORTED_MODULE_15__["EPackageImpl"].IS_RESOLVE_PROXIES, !_EPackageImpl__WEBPACK_IMPORTED_MODULE_15__["EPackageImpl"].IS_UNSETTABLE, _EPackageImpl__WEBPACK_IMPORTED_MODULE_15__["EPackageImpl"].IS_UNIQUE, !_EPackageImpl__WEBPACK_IMPORTED_MODULE_15__["EPackageImpl"].IS_DERIVED, _EPackageImpl__WEBPACK_IMPORTED_MODULE_15__["EPackageImpl"].IS_ORDERED);
            _this.initEReference(_this.getEAnnotation_References(), _this.ecorePackage.getEObject(), null, "references", null, 0, -1, _EAnnotationImpl__WEBPACK_IMPORTED_MODULE_9__["EAnnotationImpl"], !_EPackageImpl__WEBPACK_IMPORTED_MODULE_15__["EPackageImpl"].IS_TRANSIENT, !_EPackageImpl__WEBPACK_IMPORTED_MODULE_15__["EPackageImpl"].IS_VOLATILE, _EPackageImpl__WEBPACK_IMPORTED_MODULE_15__["EPackageImpl"].IS_CHANGEABLE, !_EPackageImpl__WEBPACK_IMPORTED_MODULE_15__["EPackageImpl"].IS_COMPOSITE, _EPackageImpl__WEBPACK_IMPORTED_MODULE_15__["EPackageImpl"].IS_RESOLVE_PROXIES, !_EPackageImpl__WEBPACK_IMPORTED_MODULE_15__["EPackageImpl"].IS_UNSETTABLE, _EPackageImpl__WEBPACK_IMPORTED_MODULE_15__["EPackageImpl"].IS_UNIQUE, !_EPackageImpl__WEBPACK_IMPORTED_MODULE_15__["EPackageImpl"].IS_DERIVED, _EPackageImpl__WEBPACK_IMPORTED_MODULE_15__["EPackageImpl"].IS_ORDERED);
            _this.initEClass(_this.EClassEClass, _EClassImpl__WEBPACK_IMPORTED_MODULE_40__["EClassImpl"], "EClass", !_EPackageImpl__WEBPACK_IMPORTED_MODULE_15__["EPackageImpl"].IS_ABSTRACT, !_EPackageImpl__WEBPACK_IMPORTED_MODULE_15__["EPackageImpl"].IS_INTERFACE, _EPackageImpl__WEBPACK_IMPORTED_MODULE_15__["EPackageImpl"].IS_GENERATED_INSTANCE_CLASS);
            _this.initEAttribute_EClassifier(_this.getEClass_Abstract(), _this.ecorePackage.getEBoolean(), "abstract", "false", 0, 1, _EClassImpl__WEBPACK_IMPORTED_MODULE_40__["EClassImpl"], !_EPackageImpl__WEBPACK_IMPORTED_MODULE_15__["EPackageImpl"].IS_TRANSIENT, !_EPackageImpl__WEBPACK_IMPORTED_MODULE_15__["EPackageImpl"].IS_VOLATILE, _EPackageImpl__WEBPACK_IMPORTED_MODULE_15__["EPackageImpl"].IS_CHANGEABLE, !_EPackageImpl__WEBPACK_IMPORTED_MODULE_15__["EPackageImpl"].IS_UNSETTABLE, !_EPackageImpl__WEBPACK_IMPORTED_MODULE_15__["EPackageImpl"].IS_ID, _EPackageImpl__WEBPACK_IMPORTED_MODULE_15__["EPackageImpl"].IS_UNIQUE, !_EPackageImpl__WEBPACK_IMPORTED_MODULE_15__["EPackageImpl"].IS_DERIVED, _EPackageImpl__WEBPACK_IMPORTED_MODULE_15__["EPackageImpl"].IS_ORDERED);
            _this.initEAttribute_EClassifier(_this.getEClass_Interface(), _this.ecorePackage.getEBoolean(), "interface", "false", 0, 1, _EClassImpl__WEBPACK_IMPORTED_MODULE_40__["EClassImpl"], !_EPackageImpl__WEBPACK_IMPORTED_MODULE_15__["EPackageImpl"].IS_TRANSIENT, !_EPackageImpl__WEBPACK_IMPORTED_MODULE_15__["EPackageImpl"].IS_VOLATILE, _EPackageImpl__WEBPACK_IMPORTED_MODULE_15__["EPackageImpl"].IS_CHANGEABLE, !_EPackageImpl__WEBPACK_IMPORTED_MODULE_15__["EPackageImpl"].IS_UNSETTABLE, !_EPackageImpl__WEBPACK_IMPORTED_MODULE_15__["EPackageImpl"].IS_ID, _EPackageImpl__WEBPACK_IMPORTED_MODULE_15__["EPackageImpl"].IS_UNIQUE, !_EPackageImpl__WEBPACK_IMPORTED_MODULE_15__["EPackageImpl"].IS_DERIVED, _EPackageImpl__WEBPACK_IMPORTED_MODULE_15__["EPackageImpl"].IS_ORDERED);
            _this.initEReference(_this.getEClass_ESuperTypes(), _this.ecorePackage.getEClass(), null, "eSuperTypes", null, 0, -1, _EClassImpl__WEBPACK_IMPORTED_MODULE_40__["EClassImpl"], !_EPackageImpl__WEBPACK_IMPORTED_MODULE_15__["EPackageImpl"].IS_TRANSIENT, !_EPackageImpl__WEBPACK_IMPORTED_MODULE_15__["EPackageImpl"].IS_VOLATILE, _EPackageImpl__WEBPACK_IMPORTED_MODULE_15__["EPackageImpl"].IS_CHANGEABLE, !_EPackageImpl__WEBPACK_IMPORTED_MODULE_15__["EPackageImpl"].IS_COMPOSITE, _EPackageImpl__WEBPACK_IMPORTED_MODULE_15__["EPackageImpl"].IS_RESOLVE_PROXIES, _EPackageImpl__WEBPACK_IMPORTED_MODULE_15__["EPackageImpl"].IS_UNSETTABLE, _EPackageImpl__WEBPACK_IMPORTED_MODULE_15__["EPackageImpl"].IS_UNIQUE, !_EPackageImpl__WEBPACK_IMPORTED_MODULE_15__["EPackageImpl"].IS_DERIVED, _EPackageImpl__WEBPACK_IMPORTED_MODULE_15__["EPackageImpl"].IS_ORDERED);
            _this.initEReference(_this.getEClass_EOperations(), _this.ecorePackage.getEOperation(), _this.getEOperation_EContainingClass(), "eOperations", null, 0, -1, _EClassImpl__WEBPACK_IMPORTED_MODULE_40__["EClassImpl"], !_EPackageImpl__WEBPACK_IMPORTED_MODULE_15__["EPackageImpl"].IS_TRANSIENT, !_EPackageImpl__WEBPACK_IMPORTED_MODULE_15__["EPackageImpl"].IS_VOLATILE, _EPackageImpl__WEBPACK_IMPORTED_MODULE_15__["EPackageImpl"].IS_CHANGEABLE, _EPackageImpl__WEBPACK_IMPORTED_MODULE_15__["EPackageImpl"].IS_COMPOSITE, !_EPackageImpl__WEBPACK_IMPORTED_MODULE_15__["EPackageImpl"].IS_RESOLVE_PROXIES, !_EPackageImpl__WEBPACK_IMPORTED_MODULE_15__["EPackageImpl"].IS_UNSETTABLE, _EPackageImpl__WEBPACK_IMPORTED_MODULE_15__["EPackageImpl"].IS_UNIQUE, !_EPackageImpl__WEBPACK_IMPORTED_MODULE_15__["EPackageImpl"].IS_DERIVED, _EPackageImpl__WEBPACK_IMPORTED_MODULE_15__["EPackageImpl"].IS_ORDERED);
            _this.initEReference(_this.getEClass_EAllAttributes(), _this.ecorePackage.getEAttribute(), null, "eAllAttributes", null, 0, -1, _EClassImpl__WEBPACK_IMPORTED_MODULE_40__["EClassImpl"], _EPackageImpl__WEBPACK_IMPORTED_MODULE_15__["EPackageImpl"].IS_TRANSIENT, _EPackageImpl__WEBPACK_IMPORTED_MODULE_15__["EPackageImpl"].IS_VOLATILE, !_EPackageImpl__WEBPACK_IMPORTED_MODULE_15__["EPackageImpl"].IS_CHANGEABLE, !_EPackageImpl__WEBPACK_IMPORTED_MODULE_15__["EPackageImpl"].IS_COMPOSITE, _EPackageImpl__WEBPACK_IMPORTED_MODULE_15__["EPackageImpl"].IS_RESOLVE_PROXIES, !_EPackageImpl__WEBPACK_IMPORTED_MODULE_15__["EPackageImpl"].IS_UNSETTABLE, _EPackageImpl__WEBPACK_IMPORTED_MODULE_15__["EPackageImpl"].IS_UNIQUE, _EPackageImpl__WEBPACK_IMPORTED_MODULE_15__["EPackageImpl"].IS_DERIVED, _EPackageImpl__WEBPACK_IMPORTED_MODULE_15__["EPackageImpl"].IS_ORDERED);
            _this.initEReference(_this.getEClass_EAllReferences(), _this.ecorePackage.getEReference(), null, "eAllReferences", null, 0, -1, _EClassImpl__WEBPACK_IMPORTED_MODULE_40__["EClassImpl"], _EPackageImpl__WEBPACK_IMPORTED_MODULE_15__["EPackageImpl"].IS_TRANSIENT, _EPackageImpl__WEBPACK_IMPORTED_MODULE_15__["EPackageImpl"].IS_VOLATILE, !_EPackageImpl__WEBPACK_IMPORTED_MODULE_15__["EPackageImpl"].IS_CHANGEABLE, !_EPackageImpl__WEBPACK_IMPORTED_MODULE_15__["EPackageImpl"].IS_COMPOSITE, _EPackageImpl__WEBPACK_IMPORTED_MODULE_15__["EPackageImpl"].IS_RESOLVE_PROXIES, !_EPackageImpl__WEBPACK_IMPORTED_MODULE_15__["EPackageImpl"].IS_UNSETTABLE, _EPackageImpl__WEBPACK_IMPORTED_MODULE_15__["EPackageImpl"].IS_UNIQUE, _EPackageImpl__WEBPACK_IMPORTED_MODULE_15__["EPackageImpl"].IS_DERIVED, _EPackageImpl__WEBPACK_IMPORTED_MODULE_15__["EPackageImpl"].IS_ORDERED);
            _this.initEReference(_this.getEClass_EReferences(), _this.ecorePackage.getEReference(), null, "eReferences", null, 0, -1, _EClassImpl__WEBPACK_IMPORTED_MODULE_40__["EClassImpl"], _EPackageImpl__WEBPACK_IMPORTED_MODULE_15__["EPackageImpl"].IS_TRANSIENT, _EPackageImpl__WEBPACK_IMPORTED_MODULE_15__["EPackageImpl"].IS_VOLATILE, !_EPackageImpl__WEBPACK_IMPORTED_MODULE_15__["EPackageImpl"].IS_CHANGEABLE, !_EPackageImpl__WEBPACK_IMPORTED_MODULE_15__["EPackageImpl"].IS_COMPOSITE, _EPackageImpl__WEBPACK_IMPORTED_MODULE_15__["EPackageImpl"].IS_RESOLVE_PROXIES, !_EPackageImpl__WEBPACK_IMPORTED_MODULE_15__["EPackageImpl"].IS_UNSETTABLE, _EPackageImpl__WEBPACK_IMPORTED_MODULE_15__["EPackageImpl"].IS_UNIQUE, _EPackageImpl__WEBPACK_IMPORTED_MODULE_15__["EPackageImpl"].IS_DERIVED, _EPackageImpl__WEBPACK_IMPORTED_MODULE_15__["EPackageImpl"].IS_ORDERED);
            _this.initEReference(_this.getEClass_EAttributes(), _this.ecorePackage.getEAttribute(), null, "eAttributes", null, 0, -1, _EClassImpl__WEBPACK_IMPORTED_MODULE_40__["EClassImpl"], _EPackageImpl__WEBPACK_IMPORTED_MODULE_15__["EPackageImpl"].IS_TRANSIENT, _EPackageImpl__WEBPACK_IMPORTED_MODULE_15__["EPackageImpl"].IS_VOLATILE, !_EPackageImpl__WEBPACK_IMPORTED_MODULE_15__["EPackageImpl"].IS_CHANGEABLE, !_EPackageImpl__WEBPACK_IMPORTED_MODULE_15__["EPackageImpl"].IS_COMPOSITE, _EPackageImpl__WEBPACK_IMPORTED_MODULE_15__["EPackageImpl"].IS_RESOLVE_PROXIES, !_EPackageImpl__WEBPACK_IMPORTED_MODULE_15__["EPackageImpl"].IS_UNSETTABLE, _EPackageImpl__WEBPACK_IMPORTED_MODULE_15__["EPackageImpl"].IS_UNIQUE, _EPackageImpl__WEBPACK_IMPORTED_MODULE_15__["EPackageImpl"].IS_DERIVED, _EPackageImpl__WEBPACK_IMPORTED_MODULE_15__["EPackageImpl"].IS_ORDERED);
            _this.initEReference(_this.getEClass_EAllContainments(), _this.ecorePackage.getEReference(), null, "eAllContainments", null, 0, -1, _EClassImpl__WEBPACK_IMPORTED_MODULE_40__["EClassImpl"], _EPackageImpl__WEBPACK_IMPORTED_MODULE_15__["EPackageImpl"].IS_TRANSIENT, _EPackageImpl__WEBPACK_IMPORTED_MODULE_15__["EPackageImpl"].IS_VOLATILE, !_EPackageImpl__WEBPACK_IMPORTED_MODULE_15__["EPackageImpl"].IS_CHANGEABLE, !_EPackageImpl__WEBPACK_IMPORTED_MODULE_15__["EPackageImpl"].IS_COMPOSITE, _EPackageImpl__WEBPACK_IMPORTED_MODULE_15__["EPackageImpl"].IS_RESOLVE_PROXIES, !_EPackageImpl__WEBPACK_IMPORTED_MODULE_15__["EPackageImpl"].IS_UNSETTABLE, _EPackageImpl__WEBPACK_IMPORTED_MODULE_15__["EPackageImpl"].IS_UNIQUE, _EPackageImpl__WEBPACK_IMPORTED_MODULE_15__["EPackageImpl"].IS_DERIVED, _EPackageImpl__WEBPACK_IMPORTED_MODULE_15__["EPackageImpl"].IS_ORDERED);
            _this.initEReference(_this.getEClass_EAllOperations(), _this.ecorePackage.getEOperation(), null, "eAllOperations", null, 0, -1, _EClassImpl__WEBPACK_IMPORTED_MODULE_40__["EClassImpl"], _EPackageImpl__WEBPACK_IMPORTED_MODULE_15__["EPackageImpl"].IS_TRANSIENT, _EPackageImpl__WEBPACK_IMPORTED_MODULE_15__["EPackageImpl"].IS_VOLATILE, !_EPackageImpl__WEBPACK_IMPORTED_MODULE_15__["EPackageImpl"].IS_CHANGEABLE, !_EPackageImpl__WEBPACK_IMPORTED_MODULE_15__["EPackageImpl"].IS_COMPOSITE, _EPackageImpl__WEBPACK_IMPORTED_MODULE_15__["EPackageImpl"].IS_RESOLVE_PROXIES, !_EPackageImpl__WEBPACK_IMPORTED_MODULE_15__["EPackageImpl"].IS_UNSETTABLE, _EPackageImpl__WEBPACK_IMPORTED_MODULE_15__["EPackageImpl"].IS_UNIQUE, _EPackageImpl__WEBPACK_IMPORTED_MODULE_15__["EPackageImpl"].IS_DERIVED, _EPackageImpl__WEBPACK_IMPORTED_MODULE_15__["EPackageImpl"].IS_ORDERED);
            _this.initEReference(_this.getEClass_EAllStructuralFeatures(), _this.ecorePackage.getEStructuralFeature(), null, "eAllStructuralFeatures", null, 0, -1, _EClassImpl__WEBPACK_IMPORTED_MODULE_40__["EClassImpl"], _EPackageImpl__WEBPACK_IMPORTED_MODULE_15__["EPackageImpl"].IS_TRANSIENT, _EPackageImpl__WEBPACK_IMPORTED_MODULE_15__["EPackageImpl"].IS_VOLATILE, !_EPackageImpl__WEBPACK_IMPORTED_MODULE_15__["EPackageImpl"].IS_CHANGEABLE, !_EPackageImpl__WEBPACK_IMPORTED_MODULE_15__["EPackageImpl"].IS_COMPOSITE, _EPackageImpl__WEBPACK_IMPORTED_MODULE_15__["EPackageImpl"].IS_RESOLVE_PROXIES, !_EPackageImpl__WEBPACK_IMPORTED_MODULE_15__["EPackageImpl"].IS_UNSETTABLE, _EPackageImpl__WEBPACK_IMPORTED_MODULE_15__["EPackageImpl"].IS_UNIQUE, _EPackageImpl__WEBPACK_IMPORTED_MODULE_15__["EPackageImpl"].IS_DERIVED, _EPackageImpl__WEBPACK_IMPORTED_MODULE_15__["EPackageImpl"].IS_ORDERED);
            _this.initEReference(_this.getEClass_EAllSuperTypes(), _this.ecorePackage.getEClass(), null, "eAllSuperTypes", null, 0, -1, _EClassImpl__WEBPACK_IMPORTED_MODULE_40__["EClassImpl"], _EPackageImpl__WEBPACK_IMPORTED_MODULE_15__["EPackageImpl"].IS_TRANSIENT, _EPackageImpl__WEBPACK_IMPORTED_MODULE_15__["EPackageImpl"].IS_VOLATILE, !_EPackageImpl__WEBPACK_IMPORTED_MODULE_15__["EPackageImpl"].IS_CHANGEABLE, !_EPackageImpl__WEBPACK_IMPORTED_MODULE_15__["EPackageImpl"].IS_COMPOSITE, _EPackageImpl__WEBPACK_IMPORTED_MODULE_15__["EPackageImpl"].IS_RESOLVE_PROXIES, !_EPackageImpl__WEBPACK_IMPORTED_MODULE_15__["EPackageImpl"].IS_UNSETTABLE, _EPackageImpl__WEBPACK_IMPORTED_MODULE_15__["EPackageImpl"].IS_UNIQUE, _EPackageImpl__WEBPACK_IMPORTED_MODULE_15__["EPackageImpl"].IS_DERIVED, _EPackageImpl__WEBPACK_IMPORTED_MODULE_15__["EPackageImpl"].IS_ORDERED);
            _this.initEReference(_this.getEClass_EIDAttribute(), _this.ecorePackage.getEAttribute(), null, "eIDAttribute", null, 0, 1, _EClassImpl__WEBPACK_IMPORTED_MODULE_40__["EClassImpl"], _EPackageImpl__WEBPACK_IMPORTED_MODULE_15__["EPackageImpl"].IS_TRANSIENT, _EPackageImpl__WEBPACK_IMPORTED_MODULE_15__["EPackageImpl"].IS_VOLATILE, !_EPackageImpl__WEBPACK_IMPORTED_MODULE_15__["EPackageImpl"].IS_CHANGEABLE, !_EPackageImpl__WEBPACK_IMPORTED_MODULE_15__["EPackageImpl"].IS_COMPOSITE, !_EPackageImpl__WEBPACK_IMPORTED_MODULE_15__["EPackageImpl"].IS_RESOLVE_PROXIES, !_EPackageImpl__WEBPACK_IMPORTED_MODULE_15__["EPackageImpl"].IS_UNSETTABLE, _EPackageImpl__WEBPACK_IMPORTED_MODULE_15__["EPackageImpl"].IS_UNIQUE, _EPackageImpl__WEBPACK_IMPORTED_MODULE_15__["EPackageImpl"].IS_DERIVED, _EPackageImpl__WEBPACK_IMPORTED_MODULE_15__["EPackageImpl"].IS_ORDERED);
            _this.initEReference(_this.getEClass_EStructuralFeatures(), _this.ecorePackage.getEStructuralFeature(), _this.getEStructuralFeature_EContainingClass(), "eStructuralFeatures", null, 0, -1, _EClassImpl__WEBPACK_IMPORTED_MODULE_40__["EClassImpl"], !_EPackageImpl__WEBPACK_IMPORTED_MODULE_15__["EPackageImpl"].IS_TRANSIENT, !_EPackageImpl__WEBPACK_IMPORTED_MODULE_15__["EPackageImpl"].IS_VOLATILE, _EPackageImpl__WEBPACK_IMPORTED_MODULE_15__["EPackageImpl"].IS_CHANGEABLE, _EPackageImpl__WEBPACK_IMPORTED_MODULE_15__["EPackageImpl"].IS_COMPOSITE, !_EPackageImpl__WEBPACK_IMPORTED_MODULE_15__["EPackageImpl"].IS_RESOLVE_PROXIES, !_EPackageImpl__WEBPACK_IMPORTED_MODULE_15__["EPackageImpl"].IS_UNSETTABLE, _EPackageImpl__WEBPACK_IMPORTED_MODULE_15__["EPackageImpl"].IS_UNIQUE, !_EPackageImpl__WEBPACK_IMPORTED_MODULE_15__["EPackageImpl"].IS_DERIVED, _EPackageImpl__WEBPACK_IMPORTED_MODULE_15__["EPackageImpl"].IS_ORDERED);
            _this.initEReference(_this.getEClass_EGenericSuperTypes(), _this.ecorePackage.getEGenericType(), null, "eGenericSuperTypes", null, 0, -1, _EClassImpl__WEBPACK_IMPORTED_MODULE_40__["EClassImpl"], !_EPackageImpl__WEBPACK_IMPORTED_MODULE_15__["EPackageImpl"].IS_TRANSIENT, !_EPackageImpl__WEBPACK_IMPORTED_MODULE_15__["EPackageImpl"].IS_VOLATILE, _EPackageImpl__WEBPACK_IMPORTED_MODULE_15__["EPackageImpl"].IS_CHANGEABLE, _EPackageImpl__WEBPACK_IMPORTED_MODULE_15__["EPackageImpl"].IS_COMPOSITE, !_EPackageImpl__WEBPACK_IMPORTED_MODULE_15__["EPackageImpl"].IS_RESOLVE_PROXIES, _EPackageImpl__WEBPACK_IMPORTED_MODULE_15__["EPackageImpl"].IS_UNSETTABLE, _EPackageImpl__WEBPACK_IMPORTED_MODULE_15__["EPackageImpl"].IS_UNIQUE, !_EPackageImpl__WEBPACK_IMPORTED_MODULE_15__["EPackageImpl"].IS_DERIVED, _EPackageImpl__WEBPACK_IMPORTED_MODULE_15__["EPackageImpl"].IS_ORDERED);
            _this.initEReference(_this.getEClass_EAllGenericSuperTypes(), _this.ecorePackage.getEGenericType(), null, "eAllGenericSuperTypes", null, 0, -1, _EClassImpl__WEBPACK_IMPORTED_MODULE_40__["EClassImpl"], _EPackageImpl__WEBPACK_IMPORTED_MODULE_15__["EPackageImpl"].IS_TRANSIENT, _EPackageImpl__WEBPACK_IMPORTED_MODULE_15__["EPackageImpl"].IS_VOLATILE, !_EPackageImpl__WEBPACK_IMPORTED_MODULE_15__["EPackageImpl"].IS_CHANGEABLE, !_EPackageImpl__WEBPACK_IMPORTED_MODULE_15__["EPackageImpl"].IS_COMPOSITE, _EPackageImpl__WEBPACK_IMPORTED_MODULE_15__["EPackageImpl"].IS_RESOLVE_PROXIES, !_EPackageImpl__WEBPACK_IMPORTED_MODULE_15__["EPackageImpl"].IS_UNSETTABLE, _EPackageImpl__WEBPACK_IMPORTED_MODULE_15__["EPackageImpl"].IS_UNIQUE, _EPackageImpl__WEBPACK_IMPORTED_MODULE_15__["EPackageImpl"].IS_DERIVED, _EPackageImpl__WEBPACK_IMPORTED_MODULE_15__["EPackageImpl"].IS_ORDERED);
            //TODO add initEOperation to EPackageImpl
            op = _this.initEOperation_3(_this.getEClass__IsSuperTypeOf__SomeClass(), _this.ecorePackage.getEBoolean(), "isSuperTypeOf", 0, 1, _EPackageImpl__WEBPACK_IMPORTED_MODULE_15__["EPackageImpl"].IS_UNIQUE, _EPackageImpl__WEBPACK_IMPORTED_MODULE_15__["EPackageImpl"].IS_ORDERED);
            //TODO add addEParameter to EPackageImpl
            //this.addEParameter_3(op, this.getEClass(), "someClass", 0, 1, EPackageImpl.IS_UNIQUE, EPackageImpl.IS_ORDERED);
            //TODO add initEOperation to EPackageImpl
            op = _this.initEOperation_3(_this.getEClass__GetFeatureCount__(), _this.ecorePackage.getEInt(), "getFeatureCount", 0, 1, _EPackageImpl__WEBPACK_IMPORTED_MODULE_15__["EPackageImpl"].IS_UNIQUE, _EPackageImpl__WEBPACK_IMPORTED_MODULE_15__["EPackageImpl"].IS_ORDERED);
            //TODO add initEOperation to EPackageImpl
            op = _this.initEOperation_3(_this.getEClass__GetEStructuralFeature__FeatureID(), _this.ecorePackage.getEStructuralFeature(), "getEStructuralFeature", 0, 1, _EPackageImpl__WEBPACK_IMPORTED_MODULE_15__["EPackageImpl"].IS_UNIQUE, _EPackageImpl__WEBPACK_IMPORTED_MODULE_15__["EPackageImpl"].IS_ORDERED);
            //TODO add addEParameter to EPackageImpl
            //this.addEParameter_3(op, this.getEClass(), "featureID", 0, 1, EPackageImpl.IS_UNIQUE, EPackageImpl.IS_ORDERED);
            //TODO add initEOperation to EPackageImpl
            op = _this.initEOperation_3(_this.getEClass__GetFeatureID__Feature(), _this.ecorePackage.getEInt(), "getFeatureID", 0, 1, _EPackageImpl__WEBPACK_IMPORTED_MODULE_15__["EPackageImpl"].IS_UNIQUE, _EPackageImpl__WEBPACK_IMPORTED_MODULE_15__["EPackageImpl"].IS_ORDERED);
            //TODO add addEParameter to EPackageImpl
            //this.addEParameter_3(op, this.getEClass(), "feature", 0, 1, EPackageImpl.IS_UNIQUE, EPackageImpl.IS_ORDERED);
            //TODO add initEOperation to EPackageImpl
            op = _this.initEOperation_3(_this.getEClass__GetEStructuralFeature__FeatureName(), _this.ecorePackage.getEStructuralFeature(), "getEStructuralFeature", 0, 1, _EPackageImpl__WEBPACK_IMPORTED_MODULE_15__["EPackageImpl"].IS_UNIQUE, _EPackageImpl__WEBPACK_IMPORTED_MODULE_15__["EPackageImpl"].IS_ORDERED);
            //TODO add addEParameter to EPackageImpl
            //this.addEParameter_3(op, this.getEClass(), "featureName", 0, 1, EPackageImpl.IS_UNIQUE, EPackageImpl.IS_ORDERED);
            //TODO add initEOperation to EPackageImpl
            op = _this.initEOperation_3(_this.getEClass__GetOperationCount__(), _this.ecorePackage.getEInt(), "getOperationCount", 0, 1, _EPackageImpl__WEBPACK_IMPORTED_MODULE_15__["EPackageImpl"].IS_UNIQUE, _EPackageImpl__WEBPACK_IMPORTED_MODULE_15__["EPackageImpl"].IS_ORDERED);
            //TODO add initEOperation to EPackageImpl
            op = _this.initEOperation_3(_this.getEClass__GetEOperation__OperationID(), _this.ecorePackage.getEOperation(), "getEOperation", 0, 1, _EPackageImpl__WEBPACK_IMPORTED_MODULE_15__["EPackageImpl"].IS_UNIQUE, _EPackageImpl__WEBPACK_IMPORTED_MODULE_15__["EPackageImpl"].IS_ORDERED);
            //TODO add addEParameter to EPackageImpl
            //this.addEParameter_3(op, this.getEClass(), "operationID", 0, 1, EPackageImpl.IS_UNIQUE, EPackageImpl.IS_ORDERED);
            //TODO add initEOperation to EPackageImpl
            op = _this.initEOperation_3(_this.getEClass__GetOperationID__Operation(), _this.ecorePackage.getEInt(), "getOperationID", 0, 1, _EPackageImpl__WEBPACK_IMPORTED_MODULE_15__["EPackageImpl"].IS_UNIQUE, _EPackageImpl__WEBPACK_IMPORTED_MODULE_15__["EPackageImpl"].IS_ORDERED);
            //TODO add addEParameter to EPackageImpl
            //this.addEParameter_3(op, this.getEClass(), "operation", 0, 1, EPackageImpl.IS_UNIQUE, EPackageImpl.IS_ORDERED);
            //TODO add initEOperation to EPackageImpl
            op = _this.initEOperation_3(_this.getEClass__GetOverride__Operation(), _this.ecorePackage.getEOperation(), "getOverride", 0, 1, _EPackageImpl__WEBPACK_IMPORTED_MODULE_15__["EPackageImpl"].IS_UNIQUE, _EPackageImpl__WEBPACK_IMPORTED_MODULE_15__["EPackageImpl"].IS_ORDERED);
            //TODO add addEParameter to EPackageImpl
            //this.addEParameter_3(op, this.getEClass(), "operation", 0, 1, EPackageImpl.IS_UNIQUE, EPackageImpl.IS_ORDERED);
            //TODO add initEOperation to EPackageImpl
            op = _this.initEOperation_3(_this.getEClass__GetFeatureType__Feature(), _this.ecorePackage.getEGenericType(), "getFeatureType", 0, 1, _EPackageImpl__WEBPACK_IMPORTED_MODULE_15__["EPackageImpl"].IS_UNIQUE, _EPackageImpl__WEBPACK_IMPORTED_MODULE_15__["EPackageImpl"].IS_ORDERED);
            //TODO add addEParameter to EPackageImpl
            //this.addEParameter_3(op, this.getEClass(), "feature", 0, 1, EPackageImpl.IS_UNIQUE, EPackageImpl.IS_ORDERED);
            _this.initEClass(_this.EClassifierEClass, _EClassifierImpl__WEBPACK_IMPORTED_MODULE_31__["EClassifierImpl"], "EClassifier", _EPackageImpl__WEBPACK_IMPORTED_MODULE_15__["EPackageImpl"].IS_ABSTRACT, !_EPackageImpl__WEBPACK_IMPORTED_MODULE_15__["EPackageImpl"].IS_INTERFACE, _EPackageImpl__WEBPACK_IMPORTED_MODULE_15__["EPackageImpl"].IS_GENERATED_INSTANCE_CLASS);
            _this.initEAttribute_EClassifier(_this.getEClassifier_InstanceClassName(), _this.ecorePackage.getEString(), "instanceClassName", null, 0, 1, _EClassifierImpl__WEBPACK_IMPORTED_MODULE_31__["EClassifierImpl"], !_EPackageImpl__WEBPACK_IMPORTED_MODULE_15__["EPackageImpl"].IS_TRANSIENT, _EPackageImpl__WEBPACK_IMPORTED_MODULE_15__["EPackageImpl"].IS_VOLATILE, _EPackageImpl__WEBPACK_IMPORTED_MODULE_15__["EPackageImpl"].IS_CHANGEABLE, _EPackageImpl__WEBPACK_IMPORTED_MODULE_15__["EPackageImpl"].IS_UNSETTABLE, !_EPackageImpl__WEBPACK_IMPORTED_MODULE_15__["EPackageImpl"].IS_ID, _EPackageImpl__WEBPACK_IMPORTED_MODULE_15__["EPackageImpl"].IS_UNIQUE, !_EPackageImpl__WEBPACK_IMPORTED_MODULE_15__["EPackageImpl"].IS_DERIVED, _EPackageImpl__WEBPACK_IMPORTED_MODULE_15__["EPackageImpl"].IS_ORDERED);
            _this.initEAttribute_EClassifier(_this.getEClassifier_InstanceClass(), _this.ecorePackage.getEJavaClass(), "instanceClass", null, 0, 1, _EClassifierImpl__WEBPACK_IMPORTED_MODULE_31__["EClassifierImpl"], _EPackageImpl__WEBPACK_IMPORTED_MODULE_15__["EPackageImpl"].IS_TRANSIENT, _EPackageImpl__WEBPACK_IMPORTED_MODULE_15__["EPackageImpl"].IS_VOLATILE, !_EPackageImpl__WEBPACK_IMPORTED_MODULE_15__["EPackageImpl"].IS_CHANGEABLE, !_EPackageImpl__WEBPACK_IMPORTED_MODULE_15__["EPackageImpl"].IS_UNSETTABLE, !_EPackageImpl__WEBPACK_IMPORTED_MODULE_15__["EPackageImpl"].IS_ID, _EPackageImpl__WEBPACK_IMPORTED_MODULE_15__["EPackageImpl"].IS_UNIQUE, _EPackageImpl__WEBPACK_IMPORTED_MODULE_15__["EPackageImpl"].IS_DERIVED, _EPackageImpl__WEBPACK_IMPORTED_MODULE_15__["EPackageImpl"].IS_ORDERED);
            _this.initEAttribute_EClassifier(_this.getEClassifier_DefaultValue(), _this.ecorePackage.getEJavaObject(), "defaultValue", null, 0, 1, _EClassifierImpl__WEBPACK_IMPORTED_MODULE_31__["EClassifierImpl"], _EPackageImpl__WEBPACK_IMPORTED_MODULE_15__["EPackageImpl"].IS_TRANSIENT, _EPackageImpl__WEBPACK_IMPORTED_MODULE_15__["EPackageImpl"].IS_VOLATILE, !_EPackageImpl__WEBPACK_IMPORTED_MODULE_15__["EPackageImpl"].IS_CHANGEABLE, !_EPackageImpl__WEBPACK_IMPORTED_MODULE_15__["EPackageImpl"].IS_UNSETTABLE, !_EPackageImpl__WEBPACK_IMPORTED_MODULE_15__["EPackageImpl"].IS_ID, _EPackageImpl__WEBPACK_IMPORTED_MODULE_15__["EPackageImpl"].IS_UNIQUE, _EPackageImpl__WEBPACK_IMPORTED_MODULE_15__["EPackageImpl"].IS_DERIVED, _EPackageImpl__WEBPACK_IMPORTED_MODULE_15__["EPackageImpl"].IS_ORDERED);
            _this.initEAttribute_EClassifier(_this.getEClassifier_InstanceTypeName(), _this.ecorePackage.getEString(), "instanceTypeName", null, 0, 1, _EClassifierImpl__WEBPACK_IMPORTED_MODULE_31__["EClassifierImpl"], !_EPackageImpl__WEBPACK_IMPORTED_MODULE_15__["EPackageImpl"].IS_TRANSIENT, _EPackageImpl__WEBPACK_IMPORTED_MODULE_15__["EPackageImpl"].IS_VOLATILE, _EPackageImpl__WEBPACK_IMPORTED_MODULE_15__["EPackageImpl"].IS_CHANGEABLE, _EPackageImpl__WEBPACK_IMPORTED_MODULE_15__["EPackageImpl"].IS_UNSETTABLE, !_EPackageImpl__WEBPACK_IMPORTED_MODULE_15__["EPackageImpl"].IS_ID, _EPackageImpl__WEBPACK_IMPORTED_MODULE_15__["EPackageImpl"].IS_UNIQUE, !_EPackageImpl__WEBPACK_IMPORTED_MODULE_15__["EPackageImpl"].IS_DERIVED, _EPackageImpl__WEBPACK_IMPORTED_MODULE_15__["EPackageImpl"].IS_ORDERED);
            _this.initEReference(_this.getEClassifier_EPackage(), _this.ecorePackage.getEPackage(), _this.getEPackage_EClassifiers(), "ePackage", null, 0, 1, _EClassifierImpl__WEBPACK_IMPORTED_MODULE_31__["EClassifierImpl"], _EPackageImpl__WEBPACK_IMPORTED_MODULE_15__["EPackageImpl"].IS_TRANSIENT, !_EPackageImpl__WEBPACK_IMPORTED_MODULE_15__["EPackageImpl"].IS_VOLATILE, !_EPackageImpl__WEBPACK_IMPORTED_MODULE_15__["EPackageImpl"].IS_CHANGEABLE, !_EPackageImpl__WEBPACK_IMPORTED_MODULE_15__["EPackageImpl"].IS_COMPOSITE, _EPackageImpl__WEBPACK_IMPORTED_MODULE_15__["EPackageImpl"].IS_RESOLVE_PROXIES, !_EPackageImpl__WEBPACK_IMPORTED_MODULE_15__["EPackageImpl"].IS_UNSETTABLE, _EPackageImpl__WEBPACK_IMPORTED_MODULE_15__["EPackageImpl"].IS_UNIQUE, !_EPackageImpl__WEBPACK_IMPORTED_MODULE_15__["EPackageImpl"].IS_DERIVED, _EPackageImpl__WEBPACK_IMPORTED_MODULE_15__["EPackageImpl"].IS_ORDERED);
            _this.initEReference(_this.getEClassifier_ETypeParameters(), _this.ecorePackage.getETypeParameter(), null, "eTypeParameters", null, 0, -1, _EClassifierImpl__WEBPACK_IMPORTED_MODULE_31__["EClassifierImpl"], !_EPackageImpl__WEBPACK_IMPORTED_MODULE_15__["EPackageImpl"].IS_TRANSIENT, !_EPackageImpl__WEBPACK_IMPORTED_MODULE_15__["EPackageImpl"].IS_VOLATILE, _EPackageImpl__WEBPACK_IMPORTED_MODULE_15__["EPackageImpl"].IS_CHANGEABLE, _EPackageImpl__WEBPACK_IMPORTED_MODULE_15__["EPackageImpl"].IS_COMPOSITE, _EPackageImpl__WEBPACK_IMPORTED_MODULE_15__["EPackageImpl"].IS_RESOLVE_PROXIES, !_EPackageImpl__WEBPACK_IMPORTED_MODULE_15__["EPackageImpl"].IS_UNSETTABLE, _EPackageImpl__WEBPACK_IMPORTED_MODULE_15__["EPackageImpl"].IS_UNIQUE, !_EPackageImpl__WEBPACK_IMPORTED_MODULE_15__["EPackageImpl"].IS_DERIVED, _EPackageImpl__WEBPACK_IMPORTED_MODULE_15__["EPackageImpl"].IS_ORDERED);
            //TODO add initEOperation to EPackageImpl
            op = _this.initEOperation_3(_this.getEClassifier__IsInstance__Object(), _this.ecorePackage.getEBoolean(), "isInstance", 0, 1, _EPackageImpl__WEBPACK_IMPORTED_MODULE_15__["EPackageImpl"].IS_UNIQUE, _EPackageImpl__WEBPACK_IMPORTED_MODULE_15__["EPackageImpl"].IS_ORDERED);
            //TODO add addEParameter to EPackageImpl
            //this.addEParameter_3(op, this.getEClassifier_(), "object", 0, 1, EPackageImpl.IS_UNIQUE, EPackageImpl.IS_ORDERED);
            //TODO add initEOperation to EPackageImpl
            op = _this.initEOperation_3(_this.getEClassifier__GetClassifierID__(), _this.ecorePackage.getEInt(), "getClassifierID", 0, 1, _EPackageImpl__WEBPACK_IMPORTED_MODULE_15__["EPackageImpl"].IS_UNIQUE, _EPackageImpl__WEBPACK_IMPORTED_MODULE_15__["EPackageImpl"].IS_ORDERED);
            _this.initEClass(_this.EDataTypeEClass, _EDataTypeImpl__WEBPACK_IMPORTED_MODULE_30__["EDataTypeImpl"], "EDataType", !_EPackageImpl__WEBPACK_IMPORTED_MODULE_15__["EPackageImpl"].IS_ABSTRACT, !_EPackageImpl__WEBPACK_IMPORTED_MODULE_15__["EPackageImpl"].IS_INTERFACE, _EPackageImpl__WEBPACK_IMPORTED_MODULE_15__["EPackageImpl"].IS_GENERATED_INSTANCE_CLASS);
            _this.initEAttribute_EClassifier(_this.getEDataType_Serializable(), _this.ecorePackage.getEBoolean(), "serializable", "true", 0, 1, _EDataTypeImpl__WEBPACK_IMPORTED_MODULE_30__["EDataTypeImpl"], !_EPackageImpl__WEBPACK_IMPORTED_MODULE_15__["EPackageImpl"].IS_TRANSIENT, !_EPackageImpl__WEBPACK_IMPORTED_MODULE_15__["EPackageImpl"].IS_VOLATILE, _EPackageImpl__WEBPACK_IMPORTED_MODULE_15__["EPackageImpl"].IS_CHANGEABLE, !_EPackageImpl__WEBPACK_IMPORTED_MODULE_15__["EPackageImpl"].IS_UNSETTABLE, !_EPackageImpl__WEBPACK_IMPORTED_MODULE_15__["EPackageImpl"].IS_ID, _EPackageImpl__WEBPACK_IMPORTED_MODULE_15__["EPackageImpl"].IS_UNIQUE, !_EPackageImpl__WEBPACK_IMPORTED_MODULE_15__["EPackageImpl"].IS_DERIVED, _EPackageImpl__WEBPACK_IMPORTED_MODULE_15__["EPackageImpl"].IS_ORDERED);
            _this.initEClass(_this.EEnumEClass, _EEnumImpl__WEBPACK_IMPORTED_MODULE_5__["EEnumImpl"], "EEnum", !_EPackageImpl__WEBPACK_IMPORTED_MODULE_15__["EPackageImpl"].IS_ABSTRACT, !_EPackageImpl__WEBPACK_IMPORTED_MODULE_15__["EPackageImpl"].IS_INTERFACE, _EPackageImpl__WEBPACK_IMPORTED_MODULE_15__["EPackageImpl"].IS_GENERATED_INSTANCE_CLASS);
            _this.initEReference(_this.getEEnum_ELiterals(), _this.ecorePackage.getEEnumLiteral(), _this.getEEnumLiteral_EEnum(), "eLiterals", null, 0, -1, _EEnumImpl__WEBPACK_IMPORTED_MODULE_5__["EEnumImpl"], !_EPackageImpl__WEBPACK_IMPORTED_MODULE_15__["EPackageImpl"].IS_TRANSIENT, !_EPackageImpl__WEBPACK_IMPORTED_MODULE_15__["EPackageImpl"].IS_VOLATILE, _EPackageImpl__WEBPACK_IMPORTED_MODULE_15__["EPackageImpl"].IS_CHANGEABLE, _EPackageImpl__WEBPACK_IMPORTED_MODULE_15__["EPackageImpl"].IS_COMPOSITE, !_EPackageImpl__WEBPACK_IMPORTED_MODULE_15__["EPackageImpl"].IS_RESOLVE_PROXIES, !_EPackageImpl__WEBPACK_IMPORTED_MODULE_15__["EPackageImpl"].IS_UNSETTABLE, _EPackageImpl__WEBPACK_IMPORTED_MODULE_15__["EPackageImpl"].IS_UNIQUE, !_EPackageImpl__WEBPACK_IMPORTED_MODULE_15__["EPackageImpl"].IS_DERIVED, _EPackageImpl__WEBPACK_IMPORTED_MODULE_15__["EPackageImpl"].IS_ORDERED);
            //TODO add initEOperation to EPackageImpl
            op = _this.initEOperation_3(_this.getEEnum__GetEEnumLiteral__Name(), _this.ecorePackage.getEEnumLiteral(), "getEEnumLiteral", 0, 1, _EPackageImpl__WEBPACK_IMPORTED_MODULE_15__["EPackageImpl"].IS_UNIQUE, _EPackageImpl__WEBPACK_IMPORTED_MODULE_15__["EPackageImpl"].IS_ORDERED);
            //TODO add addEParameter to EPackageImpl
            //this.addEParameter_3(op, this.getEEnum(), "name", 0, 1, EPackageImpl.IS_UNIQUE, EPackageImpl.IS_ORDERED);
            //TODO add initEOperation to EPackageImpl
            op = _this.initEOperation_3(_this.getEEnum__GetEEnumLiteral__Value(), _this.ecorePackage.getEEnumLiteral(), "getEEnumLiteral", 0, 1, _EPackageImpl__WEBPACK_IMPORTED_MODULE_15__["EPackageImpl"].IS_UNIQUE, _EPackageImpl__WEBPACK_IMPORTED_MODULE_15__["EPackageImpl"].IS_ORDERED);
            //TODO add addEParameter to EPackageImpl
            //this.addEParameter_3(op, this.getEEnum(), "value", 0, 1, EPackageImpl.IS_UNIQUE, EPackageImpl.IS_ORDERED);
            //TODO add initEOperation to EPackageImpl
            op = _this.initEOperation_3(_this.getEEnum__GetEEnumLiteralByLiteral__Literal(), _this.ecorePackage.getEEnumLiteral(), "getEEnumLiteralByLiteral", 0, 1, _EPackageImpl__WEBPACK_IMPORTED_MODULE_15__["EPackageImpl"].IS_UNIQUE, _EPackageImpl__WEBPACK_IMPORTED_MODULE_15__["EPackageImpl"].IS_ORDERED);
            //TODO add addEParameter to EPackageImpl
            //this.addEParameter_3(op, this.getEEnum(), "literal", 0, 1, EPackageImpl.IS_UNIQUE, EPackageImpl.IS_ORDERED);
            _this.initEClass(_this.EEnumLiteralEClass, _EEnumLiteralImpl__WEBPACK_IMPORTED_MODULE_23__["EEnumLiteralImpl"], "EEnumLiteral", !_EPackageImpl__WEBPACK_IMPORTED_MODULE_15__["EPackageImpl"].IS_ABSTRACT, !_EPackageImpl__WEBPACK_IMPORTED_MODULE_15__["EPackageImpl"].IS_INTERFACE, _EPackageImpl__WEBPACK_IMPORTED_MODULE_15__["EPackageImpl"].IS_GENERATED_INSTANCE_CLASS);
            _this.initEAttribute_EClassifier(_this.getEEnumLiteral_Value(), _this.ecorePackage.getEInt(), "value", "0", 0, 1, _EEnumLiteralImpl__WEBPACK_IMPORTED_MODULE_23__["EEnumLiteralImpl"], !_EPackageImpl__WEBPACK_IMPORTED_MODULE_15__["EPackageImpl"].IS_TRANSIENT, !_EPackageImpl__WEBPACK_IMPORTED_MODULE_15__["EPackageImpl"].IS_VOLATILE, _EPackageImpl__WEBPACK_IMPORTED_MODULE_15__["EPackageImpl"].IS_CHANGEABLE, !_EPackageImpl__WEBPACK_IMPORTED_MODULE_15__["EPackageImpl"].IS_UNSETTABLE, !_EPackageImpl__WEBPACK_IMPORTED_MODULE_15__["EPackageImpl"].IS_ID, _EPackageImpl__WEBPACK_IMPORTED_MODULE_15__["EPackageImpl"].IS_UNIQUE, !_EPackageImpl__WEBPACK_IMPORTED_MODULE_15__["EPackageImpl"].IS_DERIVED, _EPackageImpl__WEBPACK_IMPORTED_MODULE_15__["EPackageImpl"].IS_ORDERED);
            _this.initEAttribute_EClassifier(_this.getEEnumLiteral_Instance(), _this.ecorePackage.getEEnumerator(), "instance", null, 0, 1, _EEnumLiteralImpl__WEBPACK_IMPORTED_MODULE_23__["EEnumLiteralImpl"], _EPackageImpl__WEBPACK_IMPORTED_MODULE_15__["EPackageImpl"].IS_TRANSIENT, !_EPackageImpl__WEBPACK_IMPORTED_MODULE_15__["EPackageImpl"].IS_VOLATILE, _EPackageImpl__WEBPACK_IMPORTED_MODULE_15__["EPackageImpl"].IS_CHANGEABLE, !_EPackageImpl__WEBPACK_IMPORTED_MODULE_15__["EPackageImpl"].IS_UNSETTABLE, !_EPackageImpl__WEBPACK_IMPORTED_MODULE_15__["EPackageImpl"].IS_ID, _EPackageImpl__WEBPACK_IMPORTED_MODULE_15__["EPackageImpl"].IS_UNIQUE, !_EPackageImpl__WEBPACK_IMPORTED_MODULE_15__["EPackageImpl"].IS_DERIVED, _EPackageImpl__WEBPACK_IMPORTED_MODULE_15__["EPackageImpl"].IS_ORDERED);
            _this.initEAttribute_EClassifier(_this.getEEnumLiteral_Literal(), _this.ecorePackage.getEString(), "literal", null, 0, 1, _EEnumLiteralImpl__WEBPACK_IMPORTED_MODULE_23__["EEnumLiteralImpl"], !_EPackageImpl__WEBPACK_IMPORTED_MODULE_15__["EPackageImpl"].IS_TRANSIENT, !_EPackageImpl__WEBPACK_IMPORTED_MODULE_15__["EPackageImpl"].IS_VOLATILE, _EPackageImpl__WEBPACK_IMPORTED_MODULE_15__["EPackageImpl"].IS_CHANGEABLE, !_EPackageImpl__WEBPACK_IMPORTED_MODULE_15__["EPackageImpl"].IS_UNSETTABLE, !_EPackageImpl__WEBPACK_IMPORTED_MODULE_15__["EPackageImpl"].IS_ID, _EPackageImpl__WEBPACK_IMPORTED_MODULE_15__["EPackageImpl"].IS_UNIQUE, !_EPackageImpl__WEBPACK_IMPORTED_MODULE_15__["EPackageImpl"].IS_DERIVED, _EPackageImpl__WEBPACK_IMPORTED_MODULE_15__["EPackageImpl"].IS_ORDERED);
            _this.initEReference(_this.getEEnumLiteral_EEnum(), _this.ecorePackage.getEEnum(), _this.getEEnum_ELiterals(), "eEnum", null, 0, 1, _EEnumLiteralImpl__WEBPACK_IMPORTED_MODULE_23__["EEnumLiteralImpl"], _EPackageImpl__WEBPACK_IMPORTED_MODULE_15__["EPackageImpl"].IS_TRANSIENT, !_EPackageImpl__WEBPACK_IMPORTED_MODULE_15__["EPackageImpl"].IS_VOLATILE, !_EPackageImpl__WEBPACK_IMPORTED_MODULE_15__["EPackageImpl"].IS_CHANGEABLE, !_EPackageImpl__WEBPACK_IMPORTED_MODULE_15__["EPackageImpl"].IS_COMPOSITE, !_EPackageImpl__WEBPACK_IMPORTED_MODULE_15__["EPackageImpl"].IS_RESOLVE_PROXIES, !_EPackageImpl__WEBPACK_IMPORTED_MODULE_15__["EPackageImpl"].IS_UNSETTABLE, _EPackageImpl__WEBPACK_IMPORTED_MODULE_15__["EPackageImpl"].IS_UNIQUE, !_EPackageImpl__WEBPACK_IMPORTED_MODULE_15__["EPackageImpl"].IS_DERIVED, _EPackageImpl__WEBPACK_IMPORTED_MODULE_15__["EPackageImpl"].IS_ORDERED);
            _this.initEClass(_this.EFactoryEClass, _EFactoryImpl__WEBPACK_IMPORTED_MODULE_12__["EFactoryImpl"], "EFactory", !_EPackageImpl__WEBPACK_IMPORTED_MODULE_15__["EPackageImpl"].IS_ABSTRACT, !_EPackageImpl__WEBPACK_IMPORTED_MODULE_15__["EPackageImpl"].IS_INTERFACE, _EPackageImpl__WEBPACK_IMPORTED_MODULE_15__["EPackageImpl"].IS_GENERATED_INSTANCE_CLASS);
            _this.initEReference(_this.getEFactory_EPackage(), _this.ecorePackage.getEPackage(), _this.getEPackage_EFactoryInstance(), "ePackage", null, 1, 1, _EFactoryImpl__WEBPACK_IMPORTED_MODULE_12__["EFactoryImpl"], _EPackageImpl__WEBPACK_IMPORTED_MODULE_15__["EPackageImpl"].IS_TRANSIENT, !_EPackageImpl__WEBPACK_IMPORTED_MODULE_15__["EPackageImpl"].IS_VOLATILE, _EPackageImpl__WEBPACK_IMPORTED_MODULE_15__["EPackageImpl"].IS_CHANGEABLE, !_EPackageImpl__WEBPACK_IMPORTED_MODULE_15__["EPackageImpl"].IS_COMPOSITE, !_EPackageImpl__WEBPACK_IMPORTED_MODULE_15__["EPackageImpl"].IS_RESOLVE_PROXIES, !_EPackageImpl__WEBPACK_IMPORTED_MODULE_15__["EPackageImpl"].IS_UNSETTABLE, _EPackageImpl__WEBPACK_IMPORTED_MODULE_15__["EPackageImpl"].IS_UNIQUE, !_EPackageImpl__WEBPACK_IMPORTED_MODULE_15__["EPackageImpl"].IS_DERIVED, _EPackageImpl__WEBPACK_IMPORTED_MODULE_15__["EPackageImpl"].IS_ORDERED);
            //TODO add initEOperation to EPackageImpl
            op = _this.initEOperation_3(_this.getEFactory__Create__EClass(), _this.ecorePackage.getEObject(), "create", 0, 1, _EPackageImpl__WEBPACK_IMPORTED_MODULE_15__["EPackageImpl"].IS_UNIQUE, _EPackageImpl__WEBPACK_IMPORTED_MODULE_15__["EPackageImpl"].IS_ORDERED);
            //TODO add addEParameter to EPackageImpl
            //this.addEParameter_3(op, this.getEFactory(), "eClass", 0, 1, EPackageImpl.IS_UNIQUE, EPackageImpl.IS_ORDERED);
            //TODO add initEOperation to EPackageImpl
            op = _this.initEOperation_3(_this.getEFactory__CreateFromString__EDataType__LiteralValue(), _this.ecorePackage.getEJavaObject(), "createFromString", 0, 1, _EPackageImpl__WEBPACK_IMPORTED_MODULE_15__["EPackageImpl"].IS_UNIQUE, _EPackageImpl__WEBPACK_IMPORTED_MODULE_15__["EPackageImpl"].IS_ORDERED);
            //TODO add addEParameter to EPackageImpl
            //this.addEParameter_3(op, this.getEFactory(), "eDataType", 0, 1, EPackageImpl.IS_UNIQUE, EPackageImpl.IS_ORDERED);
            //TODO add addEParameter to EPackageImpl
            //this.addEParameter_3(op, this.getEFactory(), "literalValue", 0, 1, EPackageImpl.IS_UNIQUE, EPackageImpl.IS_ORDERED);
            //TODO add initEOperation to EPackageImpl
            op = _this.initEOperation_3(_this.getEFactory__ConvertToString__EDataType__InstanceValue(), _this.ecorePackage.getEString(), "convertToString", 0, 1, _EPackageImpl__WEBPACK_IMPORTED_MODULE_15__["EPackageImpl"].IS_UNIQUE, _EPackageImpl__WEBPACK_IMPORTED_MODULE_15__["EPackageImpl"].IS_ORDERED);
            //TODO add addEParameter to EPackageImpl
            //this.addEParameter_3(op, this.getEFactory(), "eDataType", 0, 1, EPackageImpl.IS_UNIQUE, EPackageImpl.IS_ORDERED);
            //TODO add addEParameter to EPackageImpl
            //this.addEParameter_3(op, this.getEFactory(), "instanceValue", 0, 1, EPackageImpl.IS_UNIQUE, EPackageImpl.IS_ORDERED);
            _this.initEClass(_this.EModelElementEClass, _EModelElementImpl__WEBPACK_IMPORTED_MODULE_18__["EModelElementImpl"], "EModelElement", _EPackageImpl__WEBPACK_IMPORTED_MODULE_15__["EPackageImpl"].IS_ABSTRACT, !_EPackageImpl__WEBPACK_IMPORTED_MODULE_15__["EPackageImpl"].IS_INTERFACE, _EPackageImpl__WEBPACK_IMPORTED_MODULE_15__["EPackageImpl"].IS_GENERATED_INSTANCE_CLASS);
            _this.initEReference(_this.getEModelElement_EAnnotations(), _this.ecorePackage.getEAnnotation_(), _this.getEAnnotation_EModelElement(), "eAnnotations", null, 0, -1, _EModelElementImpl__WEBPACK_IMPORTED_MODULE_18__["EModelElementImpl"], !_EPackageImpl__WEBPACK_IMPORTED_MODULE_15__["EPackageImpl"].IS_TRANSIENT, !_EPackageImpl__WEBPACK_IMPORTED_MODULE_15__["EPackageImpl"].IS_VOLATILE, _EPackageImpl__WEBPACK_IMPORTED_MODULE_15__["EPackageImpl"].IS_CHANGEABLE, _EPackageImpl__WEBPACK_IMPORTED_MODULE_15__["EPackageImpl"].IS_COMPOSITE, !_EPackageImpl__WEBPACK_IMPORTED_MODULE_15__["EPackageImpl"].IS_RESOLVE_PROXIES, !_EPackageImpl__WEBPACK_IMPORTED_MODULE_15__["EPackageImpl"].IS_UNSETTABLE, _EPackageImpl__WEBPACK_IMPORTED_MODULE_15__["EPackageImpl"].IS_UNIQUE, !_EPackageImpl__WEBPACK_IMPORTED_MODULE_15__["EPackageImpl"].IS_DERIVED, _EPackageImpl__WEBPACK_IMPORTED_MODULE_15__["EPackageImpl"].IS_ORDERED);
            //TODO add initEOperation to EPackageImpl
            op = _this.initEOperation_3(_this.getEModelElement__GetEAnnotation__Source(), _this.ecorePackage.getEAnnotation_(), "getEAnnotation", 0, 1, _EPackageImpl__WEBPACK_IMPORTED_MODULE_15__["EPackageImpl"].IS_UNIQUE, _EPackageImpl__WEBPACK_IMPORTED_MODULE_15__["EPackageImpl"].IS_ORDERED);
            //TODO add addEParameter to EPackageImpl
            //this.addEParameter_3(op, this.getEModelElement(), "source", 0, 1, EPackageImpl.IS_UNIQUE, EPackageImpl.IS_ORDERED);
            _this.initEClass(_this.ENamedElementEClass, _ENamedElementImpl__WEBPACK_IMPORTED_MODULE_38__["ENamedElementImpl"], "ENamedElement", _EPackageImpl__WEBPACK_IMPORTED_MODULE_15__["EPackageImpl"].IS_ABSTRACT, !_EPackageImpl__WEBPACK_IMPORTED_MODULE_15__["EPackageImpl"].IS_INTERFACE, _EPackageImpl__WEBPACK_IMPORTED_MODULE_15__["EPackageImpl"].IS_GENERATED_INSTANCE_CLASS);
            _this.initEAttribute_EClassifier(_this.getENamedElement_Name(), _this.ecorePackage.getEString(), "name", null, 0, 1, _ENamedElementImpl__WEBPACK_IMPORTED_MODULE_38__["ENamedElementImpl"], !_EPackageImpl__WEBPACK_IMPORTED_MODULE_15__["EPackageImpl"].IS_TRANSIENT, !_EPackageImpl__WEBPACK_IMPORTED_MODULE_15__["EPackageImpl"].IS_VOLATILE, _EPackageImpl__WEBPACK_IMPORTED_MODULE_15__["EPackageImpl"].IS_CHANGEABLE, !_EPackageImpl__WEBPACK_IMPORTED_MODULE_15__["EPackageImpl"].IS_UNSETTABLE, !_EPackageImpl__WEBPACK_IMPORTED_MODULE_15__["EPackageImpl"].IS_ID, _EPackageImpl__WEBPACK_IMPORTED_MODULE_15__["EPackageImpl"].IS_UNIQUE, !_EPackageImpl__WEBPACK_IMPORTED_MODULE_15__["EPackageImpl"].IS_DERIVED, _EPackageImpl__WEBPACK_IMPORTED_MODULE_15__["EPackageImpl"].IS_ORDERED);
            _this.initEClass(_this.EObjectEClass, _EObjectImpl__WEBPACK_IMPORTED_MODULE_28__["EObjectImpl"], "EObject", !_EPackageImpl__WEBPACK_IMPORTED_MODULE_15__["EPackageImpl"].IS_ABSTRACT, !_EPackageImpl__WEBPACK_IMPORTED_MODULE_15__["EPackageImpl"].IS_INTERFACE, _EPackageImpl__WEBPACK_IMPORTED_MODULE_15__["EPackageImpl"].IS_GENERATED_INSTANCE_CLASS);
            //TODO add initEOperation to EPackageImpl
            op = _this.initEOperation_3(_this.getEObject__EClass__(), _this.ecorePackage.getEClass(), "eClass", 0, 1, _EPackageImpl__WEBPACK_IMPORTED_MODULE_15__["EPackageImpl"].IS_UNIQUE, _EPackageImpl__WEBPACK_IMPORTED_MODULE_15__["EPackageImpl"].IS_ORDERED);
            //TODO add initEOperation to EPackageImpl
            op = _this.initEOperation_3(_this.getEObject__EIsProxy__(), _this.ecorePackage.getEBoolean(), "eIsProxy", 0, 1, _EPackageImpl__WEBPACK_IMPORTED_MODULE_15__["EPackageImpl"].IS_UNIQUE, _EPackageImpl__WEBPACK_IMPORTED_MODULE_15__["EPackageImpl"].IS_ORDERED);
            //TODO add initEOperation to EPackageImpl
            op = _this.initEOperation_3(_this.getEObject__EResource__(), _this.ecorePackage.getEResource(), "eResource", 0, 1, _EPackageImpl__WEBPACK_IMPORTED_MODULE_15__["EPackageImpl"].IS_UNIQUE, _EPackageImpl__WEBPACK_IMPORTED_MODULE_15__["EPackageImpl"].IS_ORDERED);
            //TODO add initEOperation to EPackageImpl
            op = _this.initEOperation_3(_this.getEObject__EContainer__(), _this.ecorePackage.getEObject(), "eContainer", 0, 1, _EPackageImpl__WEBPACK_IMPORTED_MODULE_15__["EPackageImpl"].IS_UNIQUE, _EPackageImpl__WEBPACK_IMPORTED_MODULE_15__["EPackageImpl"].IS_ORDERED);
            //TODO add initEOperation to EPackageImpl
            op = _this.initEOperation_3(_this.getEObject__EContainingFeature__(), _this.ecorePackage.getEStructuralFeature(), "eContainingFeature", 0, 1, _EPackageImpl__WEBPACK_IMPORTED_MODULE_15__["EPackageImpl"].IS_UNIQUE, _EPackageImpl__WEBPACK_IMPORTED_MODULE_15__["EPackageImpl"].IS_ORDERED);
            //TODO add initEOperation to EPackageImpl
            op = _this.initEOperation_3(_this.getEObject__EContainmentFeature__(), _this.ecorePackage.getEReference(), "eContainmentFeature", 0, 1, _EPackageImpl__WEBPACK_IMPORTED_MODULE_15__["EPackageImpl"].IS_UNIQUE, _EPackageImpl__WEBPACK_IMPORTED_MODULE_15__["EPackageImpl"].IS_ORDERED);
            //TODO add initEOperation to EPackageImpl
            op = _this.initEOperation_3(_this.getEObject__EContents__(), _this.ecorePackage.getEEList(), "eContents", 0, 1, _EPackageImpl__WEBPACK_IMPORTED_MODULE_15__["EPackageImpl"].IS_UNIQUE, _EPackageImpl__WEBPACK_IMPORTED_MODULE_15__["EPackageImpl"].IS_ORDERED);
            //TODO add initEOperation to EPackageImpl
            op = _this.initEOperation_3(_this.getEObject__EAllContents__(), _this.ecorePackage.getETreeIterator(), "eAllContents", 0, 1, _EPackageImpl__WEBPACK_IMPORTED_MODULE_15__["EPackageImpl"].IS_UNIQUE, _EPackageImpl__WEBPACK_IMPORTED_MODULE_15__["EPackageImpl"].IS_ORDERED);
            //TODO add initEOperation to EPackageImpl
            op = _this.initEOperation_3(_this.getEObject__ECrossReferences__(), _this.ecorePackage.getEEList(), "eCrossReferences", 0, 1, _EPackageImpl__WEBPACK_IMPORTED_MODULE_15__["EPackageImpl"].IS_UNIQUE, _EPackageImpl__WEBPACK_IMPORTED_MODULE_15__["EPackageImpl"].IS_ORDERED);
            //TODO add initEOperation to EPackageImpl
            op = _this.initEOperation_3(_this.getEObject__EGet__Feature(), _this.ecorePackage.getEJavaObject(), "eGet", 0, 1, _EPackageImpl__WEBPACK_IMPORTED_MODULE_15__["EPackageImpl"].IS_UNIQUE, _EPackageImpl__WEBPACK_IMPORTED_MODULE_15__["EPackageImpl"].IS_ORDERED);
            //TODO add addEParameter to EPackageImpl
            //this.addEParameter_3(op, this.getEObject(), "feature", 0, 1, EPackageImpl.IS_UNIQUE, EPackageImpl.IS_ORDERED);
            //TODO add initEOperation to EPackageImpl
            op = _this.initEOperation_3(_this.getEObject__EGet__Feature__Resolve(), _this.ecorePackage.getEJavaObject(), "eGet", 0, 1, _EPackageImpl__WEBPACK_IMPORTED_MODULE_15__["EPackageImpl"].IS_UNIQUE, _EPackageImpl__WEBPACK_IMPORTED_MODULE_15__["EPackageImpl"].IS_ORDERED);
            //TODO add addEParameter to EPackageImpl
            //this.addEParameter_3(op, this.getEObject(), "feature", 0, 1, EPackageImpl.IS_UNIQUE, EPackageImpl.IS_ORDERED);
            //TODO add addEParameter to EPackageImpl
            //this.addEParameter_3(op, this.getEObject(), "resolve", 0, 1, EPackageImpl.IS_UNIQUE, EPackageImpl.IS_ORDERED);
            //TODO add initEOperation to EPackageImpl
            op = _this.initEOperation_3(_this.getEObject__ESet__Feature__NewValue(), null, "eSet", 0, 1, _EPackageImpl__WEBPACK_IMPORTED_MODULE_15__["EPackageImpl"].IS_UNIQUE, _EPackageImpl__WEBPACK_IMPORTED_MODULE_15__["EPackageImpl"].IS_ORDERED);
            //TODO add addEParameter to EPackageImpl
            //this.addEParameter_3(op, this.getEObject(), "feature", 0, 1, EPackageImpl.IS_UNIQUE, EPackageImpl.IS_ORDERED);
            //TODO add addEParameter to EPackageImpl
            //this.addEParameter_3(op, this.getEObject(), "newValue", 0, 1, EPackageImpl.IS_UNIQUE, EPackageImpl.IS_ORDERED);
            //TODO add initEOperation to EPackageImpl
            op = _this.initEOperation_3(_this.getEObject__EIsSet__Feature(), _this.ecorePackage.getEBoolean(), "eIsSet", 0, 1, _EPackageImpl__WEBPACK_IMPORTED_MODULE_15__["EPackageImpl"].IS_UNIQUE, _EPackageImpl__WEBPACK_IMPORTED_MODULE_15__["EPackageImpl"].IS_ORDERED);
            //TODO add addEParameter to EPackageImpl
            //this.addEParameter_3(op, this.getEObject(), "feature", 0, 1, EPackageImpl.IS_UNIQUE, EPackageImpl.IS_ORDERED);
            //TODO add initEOperation to EPackageImpl
            op = _this.initEOperation_3(_this.getEObject__EUnset__Feature(), null, "eUnset", 0, 1, _EPackageImpl__WEBPACK_IMPORTED_MODULE_15__["EPackageImpl"].IS_UNIQUE, _EPackageImpl__WEBPACK_IMPORTED_MODULE_15__["EPackageImpl"].IS_ORDERED);
            //TODO add addEParameter to EPackageImpl
            //this.addEParameter_3(op, this.getEObject(), "feature", 0, 1, EPackageImpl.IS_UNIQUE, EPackageImpl.IS_ORDERED);
            //TODO add initEOperation to EPackageImpl
            op = _this.initEOperation_3(_this.getEObject__EInvoke__Operation__Arguments(), _this.ecorePackage.getEJavaObject(), "eInvoke", 0, 1, _EPackageImpl__WEBPACK_IMPORTED_MODULE_15__["EPackageImpl"].IS_UNIQUE, _EPackageImpl__WEBPACK_IMPORTED_MODULE_15__["EPackageImpl"].IS_ORDERED);
            //TODO add addEParameter to EPackageImpl
            //this.addEParameter_3(op, this.getEObject(), "operation", 0, 1, EPackageImpl.IS_UNIQUE, EPackageImpl.IS_ORDERED);
            //TODO add addEParameter to EPackageImpl
            //this.addEParameter_3(op, this.getEObject(), "arguments", 0, 1, EPackageImpl.IS_UNIQUE, EPackageImpl.IS_ORDERED);
            _this.initEClass(_this.EOperationEClass, _EOperationImpl__WEBPACK_IMPORTED_MODULE_13__["EOperationImpl"], "EOperation", !_EPackageImpl__WEBPACK_IMPORTED_MODULE_15__["EPackageImpl"].IS_ABSTRACT, !_EPackageImpl__WEBPACK_IMPORTED_MODULE_15__["EPackageImpl"].IS_INTERFACE, _EPackageImpl__WEBPACK_IMPORTED_MODULE_15__["EPackageImpl"].IS_GENERATED_INSTANCE_CLASS);
            _this.initEReference(_this.getEOperation_EContainingClass(), _this.ecorePackage.getEClass(), _this.getEClass_EOperations(), "eContainingClass", null, 0, 1, _EOperationImpl__WEBPACK_IMPORTED_MODULE_13__["EOperationImpl"], _EPackageImpl__WEBPACK_IMPORTED_MODULE_15__["EPackageImpl"].IS_TRANSIENT, !_EPackageImpl__WEBPACK_IMPORTED_MODULE_15__["EPackageImpl"].IS_VOLATILE, !_EPackageImpl__WEBPACK_IMPORTED_MODULE_15__["EPackageImpl"].IS_CHANGEABLE, !_EPackageImpl__WEBPACK_IMPORTED_MODULE_15__["EPackageImpl"].IS_COMPOSITE, !_EPackageImpl__WEBPACK_IMPORTED_MODULE_15__["EPackageImpl"].IS_RESOLVE_PROXIES, !_EPackageImpl__WEBPACK_IMPORTED_MODULE_15__["EPackageImpl"].IS_UNSETTABLE, _EPackageImpl__WEBPACK_IMPORTED_MODULE_15__["EPackageImpl"].IS_UNIQUE, !_EPackageImpl__WEBPACK_IMPORTED_MODULE_15__["EPackageImpl"].IS_DERIVED, _EPackageImpl__WEBPACK_IMPORTED_MODULE_15__["EPackageImpl"].IS_ORDERED);
            _this.initEReference(_this.getEOperation_ETypeParameters(), _this.ecorePackage.getETypeParameter(), null, "eTypeParameters", null, 0, -1, _EOperationImpl__WEBPACK_IMPORTED_MODULE_13__["EOperationImpl"], !_EPackageImpl__WEBPACK_IMPORTED_MODULE_15__["EPackageImpl"].IS_TRANSIENT, !_EPackageImpl__WEBPACK_IMPORTED_MODULE_15__["EPackageImpl"].IS_VOLATILE, _EPackageImpl__WEBPACK_IMPORTED_MODULE_15__["EPackageImpl"].IS_CHANGEABLE, _EPackageImpl__WEBPACK_IMPORTED_MODULE_15__["EPackageImpl"].IS_COMPOSITE, _EPackageImpl__WEBPACK_IMPORTED_MODULE_15__["EPackageImpl"].IS_RESOLVE_PROXIES, !_EPackageImpl__WEBPACK_IMPORTED_MODULE_15__["EPackageImpl"].IS_UNSETTABLE, _EPackageImpl__WEBPACK_IMPORTED_MODULE_15__["EPackageImpl"].IS_UNIQUE, !_EPackageImpl__WEBPACK_IMPORTED_MODULE_15__["EPackageImpl"].IS_DERIVED, _EPackageImpl__WEBPACK_IMPORTED_MODULE_15__["EPackageImpl"].IS_ORDERED);
            _this.initEReference(_this.getEOperation_EParameters(), _this.ecorePackage.getEParameter(), _this.getEParameter_EOperation(), "eParameters", null, 0, -1, _EOperationImpl__WEBPACK_IMPORTED_MODULE_13__["EOperationImpl"], !_EPackageImpl__WEBPACK_IMPORTED_MODULE_15__["EPackageImpl"].IS_TRANSIENT, !_EPackageImpl__WEBPACK_IMPORTED_MODULE_15__["EPackageImpl"].IS_VOLATILE, _EPackageImpl__WEBPACK_IMPORTED_MODULE_15__["EPackageImpl"].IS_CHANGEABLE, _EPackageImpl__WEBPACK_IMPORTED_MODULE_15__["EPackageImpl"].IS_COMPOSITE, !_EPackageImpl__WEBPACK_IMPORTED_MODULE_15__["EPackageImpl"].IS_RESOLVE_PROXIES, !_EPackageImpl__WEBPACK_IMPORTED_MODULE_15__["EPackageImpl"].IS_UNSETTABLE, _EPackageImpl__WEBPACK_IMPORTED_MODULE_15__["EPackageImpl"].IS_UNIQUE, !_EPackageImpl__WEBPACK_IMPORTED_MODULE_15__["EPackageImpl"].IS_DERIVED, _EPackageImpl__WEBPACK_IMPORTED_MODULE_15__["EPackageImpl"].IS_ORDERED);
            _this.initEReference(_this.getEOperation_EExceptions(), _this.ecorePackage.getEClassifier_(), null, "eExceptions", null, 0, -1, _EOperationImpl__WEBPACK_IMPORTED_MODULE_13__["EOperationImpl"], !_EPackageImpl__WEBPACK_IMPORTED_MODULE_15__["EPackageImpl"].IS_TRANSIENT, !_EPackageImpl__WEBPACK_IMPORTED_MODULE_15__["EPackageImpl"].IS_VOLATILE, _EPackageImpl__WEBPACK_IMPORTED_MODULE_15__["EPackageImpl"].IS_CHANGEABLE, !_EPackageImpl__WEBPACK_IMPORTED_MODULE_15__["EPackageImpl"].IS_COMPOSITE, _EPackageImpl__WEBPACK_IMPORTED_MODULE_15__["EPackageImpl"].IS_RESOLVE_PROXIES, _EPackageImpl__WEBPACK_IMPORTED_MODULE_15__["EPackageImpl"].IS_UNSETTABLE, _EPackageImpl__WEBPACK_IMPORTED_MODULE_15__["EPackageImpl"].IS_UNIQUE, !_EPackageImpl__WEBPACK_IMPORTED_MODULE_15__["EPackageImpl"].IS_DERIVED, _EPackageImpl__WEBPACK_IMPORTED_MODULE_15__["EPackageImpl"].IS_ORDERED);
            _this.initEReference(_this.getEOperation_EGenericExceptions(), _this.ecorePackage.getEGenericType(), null, "eGenericExceptions", null, 0, -1, _EOperationImpl__WEBPACK_IMPORTED_MODULE_13__["EOperationImpl"], !_EPackageImpl__WEBPACK_IMPORTED_MODULE_15__["EPackageImpl"].IS_TRANSIENT, !_EPackageImpl__WEBPACK_IMPORTED_MODULE_15__["EPackageImpl"].IS_VOLATILE, _EPackageImpl__WEBPACK_IMPORTED_MODULE_15__["EPackageImpl"].IS_CHANGEABLE, _EPackageImpl__WEBPACK_IMPORTED_MODULE_15__["EPackageImpl"].IS_COMPOSITE, !_EPackageImpl__WEBPACK_IMPORTED_MODULE_15__["EPackageImpl"].IS_RESOLVE_PROXIES, _EPackageImpl__WEBPACK_IMPORTED_MODULE_15__["EPackageImpl"].IS_UNSETTABLE, _EPackageImpl__WEBPACK_IMPORTED_MODULE_15__["EPackageImpl"].IS_UNIQUE, !_EPackageImpl__WEBPACK_IMPORTED_MODULE_15__["EPackageImpl"].IS_DERIVED, _EPackageImpl__WEBPACK_IMPORTED_MODULE_15__["EPackageImpl"].IS_ORDERED);
            //TODO add initEOperation to EPackageImpl
            op = _this.initEOperation_3(_this.getEOperation__GetOperationID__(), _this.ecorePackage.getEInt(), "getOperationID", 0, 1, _EPackageImpl__WEBPACK_IMPORTED_MODULE_15__["EPackageImpl"].IS_UNIQUE, _EPackageImpl__WEBPACK_IMPORTED_MODULE_15__["EPackageImpl"].IS_ORDERED);
            //TODO add initEOperation to EPackageImpl
            op = _this.initEOperation_3(_this.getEOperation__IsOverrideOf__SomeOperation(), _this.ecorePackage.getEBoolean(), "isOverrideOf", 0, 1, _EPackageImpl__WEBPACK_IMPORTED_MODULE_15__["EPackageImpl"].IS_UNIQUE, _EPackageImpl__WEBPACK_IMPORTED_MODULE_15__["EPackageImpl"].IS_ORDERED);
            //TODO add addEParameter to EPackageImpl
            //this.addEParameter_3(op, this.getEOperation(), "someOperation", 0, 1, EPackageImpl.IS_UNIQUE, EPackageImpl.IS_ORDERED);
            _this.initEClass(_this.EPackageEClass, _EPackageImpl__WEBPACK_IMPORTED_MODULE_15__["EPackageImpl"], "EPackage", !_EPackageImpl__WEBPACK_IMPORTED_MODULE_15__["EPackageImpl"].IS_ABSTRACT, !_EPackageImpl__WEBPACK_IMPORTED_MODULE_15__["EPackageImpl"].IS_INTERFACE, _EPackageImpl__WEBPACK_IMPORTED_MODULE_15__["EPackageImpl"].IS_GENERATED_INSTANCE_CLASS);
            _this.initEAttribute_EClassifier(_this.getEPackage_NsURI(), _this.ecorePackage.getEString(), "nsURI", null, 0, 1, _EPackageImpl__WEBPACK_IMPORTED_MODULE_15__["EPackageImpl"], !_EPackageImpl__WEBPACK_IMPORTED_MODULE_15__["EPackageImpl"].IS_TRANSIENT, !_EPackageImpl__WEBPACK_IMPORTED_MODULE_15__["EPackageImpl"].IS_VOLATILE, _EPackageImpl__WEBPACK_IMPORTED_MODULE_15__["EPackageImpl"].IS_CHANGEABLE, !_EPackageImpl__WEBPACK_IMPORTED_MODULE_15__["EPackageImpl"].IS_UNSETTABLE, !_EPackageImpl__WEBPACK_IMPORTED_MODULE_15__["EPackageImpl"].IS_ID, _EPackageImpl__WEBPACK_IMPORTED_MODULE_15__["EPackageImpl"].IS_UNIQUE, !_EPackageImpl__WEBPACK_IMPORTED_MODULE_15__["EPackageImpl"].IS_DERIVED, _EPackageImpl__WEBPACK_IMPORTED_MODULE_15__["EPackageImpl"].IS_ORDERED);
            _this.initEAttribute_EClassifier(_this.getEPackage_NsPrefix(), _this.ecorePackage.getEString(), "nsPrefix", null, 0, 1, _EPackageImpl__WEBPACK_IMPORTED_MODULE_15__["EPackageImpl"], !_EPackageImpl__WEBPACK_IMPORTED_MODULE_15__["EPackageImpl"].IS_TRANSIENT, !_EPackageImpl__WEBPACK_IMPORTED_MODULE_15__["EPackageImpl"].IS_VOLATILE, _EPackageImpl__WEBPACK_IMPORTED_MODULE_15__["EPackageImpl"].IS_CHANGEABLE, !_EPackageImpl__WEBPACK_IMPORTED_MODULE_15__["EPackageImpl"].IS_UNSETTABLE, !_EPackageImpl__WEBPACK_IMPORTED_MODULE_15__["EPackageImpl"].IS_ID, _EPackageImpl__WEBPACK_IMPORTED_MODULE_15__["EPackageImpl"].IS_UNIQUE, !_EPackageImpl__WEBPACK_IMPORTED_MODULE_15__["EPackageImpl"].IS_DERIVED, _EPackageImpl__WEBPACK_IMPORTED_MODULE_15__["EPackageImpl"].IS_ORDERED);
            _this.initEReference(_this.getEPackage_EFactoryInstance(), _this.ecorePackage.getEFactory(), _this.getEFactory_EPackage(), "eFactoryInstance", null, 1, 1, _EPackageImpl__WEBPACK_IMPORTED_MODULE_15__["EPackageImpl"], _EPackageImpl__WEBPACK_IMPORTED_MODULE_15__["EPackageImpl"].IS_TRANSIENT, !_EPackageImpl__WEBPACK_IMPORTED_MODULE_15__["EPackageImpl"].IS_VOLATILE, _EPackageImpl__WEBPACK_IMPORTED_MODULE_15__["EPackageImpl"].IS_CHANGEABLE, !_EPackageImpl__WEBPACK_IMPORTED_MODULE_15__["EPackageImpl"].IS_COMPOSITE, !_EPackageImpl__WEBPACK_IMPORTED_MODULE_15__["EPackageImpl"].IS_RESOLVE_PROXIES, !_EPackageImpl__WEBPACK_IMPORTED_MODULE_15__["EPackageImpl"].IS_UNSETTABLE, _EPackageImpl__WEBPACK_IMPORTED_MODULE_15__["EPackageImpl"].IS_UNIQUE, !_EPackageImpl__WEBPACK_IMPORTED_MODULE_15__["EPackageImpl"].IS_DERIVED, _EPackageImpl__WEBPACK_IMPORTED_MODULE_15__["EPackageImpl"].IS_ORDERED);
            _this.initEReference(_this.getEPackage_EClassifiers(), _this.ecorePackage.getEClassifier_(), _this.getEClassifier_EPackage(), "eClassifiers", null, 0, -1, _EPackageImpl__WEBPACK_IMPORTED_MODULE_15__["EPackageImpl"], !_EPackageImpl__WEBPACK_IMPORTED_MODULE_15__["EPackageImpl"].IS_TRANSIENT, !_EPackageImpl__WEBPACK_IMPORTED_MODULE_15__["EPackageImpl"].IS_VOLATILE, _EPackageImpl__WEBPACK_IMPORTED_MODULE_15__["EPackageImpl"].IS_CHANGEABLE, _EPackageImpl__WEBPACK_IMPORTED_MODULE_15__["EPackageImpl"].IS_COMPOSITE, _EPackageImpl__WEBPACK_IMPORTED_MODULE_15__["EPackageImpl"].IS_RESOLVE_PROXIES, !_EPackageImpl__WEBPACK_IMPORTED_MODULE_15__["EPackageImpl"].IS_UNSETTABLE, _EPackageImpl__WEBPACK_IMPORTED_MODULE_15__["EPackageImpl"].IS_UNIQUE, !_EPackageImpl__WEBPACK_IMPORTED_MODULE_15__["EPackageImpl"].IS_DERIVED, _EPackageImpl__WEBPACK_IMPORTED_MODULE_15__["EPackageImpl"].IS_ORDERED);
            _this.initEReference(_this.getEPackage_ESubpackages(), _this.ecorePackage.getEPackage(), _this.getEPackage_ESuperPackage(), "eSubpackages", null, 0, -1, _EPackageImpl__WEBPACK_IMPORTED_MODULE_15__["EPackageImpl"], !_EPackageImpl__WEBPACK_IMPORTED_MODULE_15__["EPackageImpl"].IS_TRANSIENT, !_EPackageImpl__WEBPACK_IMPORTED_MODULE_15__["EPackageImpl"].IS_VOLATILE, _EPackageImpl__WEBPACK_IMPORTED_MODULE_15__["EPackageImpl"].IS_CHANGEABLE, _EPackageImpl__WEBPACK_IMPORTED_MODULE_15__["EPackageImpl"].IS_COMPOSITE, _EPackageImpl__WEBPACK_IMPORTED_MODULE_15__["EPackageImpl"].IS_RESOLVE_PROXIES, !_EPackageImpl__WEBPACK_IMPORTED_MODULE_15__["EPackageImpl"].IS_UNSETTABLE, _EPackageImpl__WEBPACK_IMPORTED_MODULE_15__["EPackageImpl"].IS_UNIQUE, !_EPackageImpl__WEBPACK_IMPORTED_MODULE_15__["EPackageImpl"].IS_DERIVED, _EPackageImpl__WEBPACK_IMPORTED_MODULE_15__["EPackageImpl"].IS_ORDERED);
            _this.initEReference(_this.getEPackage_ESuperPackage(), _this.ecorePackage.getEPackage(), _this.getEPackage_ESubpackages(), "eSuperPackage", null, 0, 1, _EPackageImpl__WEBPACK_IMPORTED_MODULE_15__["EPackageImpl"], _EPackageImpl__WEBPACK_IMPORTED_MODULE_15__["EPackageImpl"].IS_TRANSIENT, !_EPackageImpl__WEBPACK_IMPORTED_MODULE_15__["EPackageImpl"].IS_VOLATILE, !_EPackageImpl__WEBPACK_IMPORTED_MODULE_15__["EPackageImpl"].IS_CHANGEABLE, !_EPackageImpl__WEBPACK_IMPORTED_MODULE_15__["EPackageImpl"].IS_COMPOSITE, _EPackageImpl__WEBPACK_IMPORTED_MODULE_15__["EPackageImpl"].IS_RESOLVE_PROXIES, !_EPackageImpl__WEBPACK_IMPORTED_MODULE_15__["EPackageImpl"].IS_UNSETTABLE, _EPackageImpl__WEBPACK_IMPORTED_MODULE_15__["EPackageImpl"].IS_UNIQUE, !_EPackageImpl__WEBPACK_IMPORTED_MODULE_15__["EPackageImpl"].IS_DERIVED, _EPackageImpl__WEBPACK_IMPORTED_MODULE_15__["EPackageImpl"].IS_ORDERED);
            //TODO add initEOperation to EPackageImpl
            op = _this.initEOperation_3(_this.getEPackage__GetEClassifier__Name(), _this.ecorePackage.getEClassifier_(), "getEClassifier", 0, 1, _EPackageImpl__WEBPACK_IMPORTED_MODULE_15__["EPackageImpl"].IS_UNIQUE, _EPackageImpl__WEBPACK_IMPORTED_MODULE_15__["EPackageImpl"].IS_ORDERED);
            //TODO add addEParameter to EPackageImpl
            //this.addEParameter_3(op, this.getEPackage(), "name", 0, 1, EPackageImpl.IS_UNIQUE, EPackageImpl.IS_ORDERED);
            _this.initEClass(_this.EParameterEClass, _EParameterImpl__WEBPACK_IMPORTED_MODULE_29__["EParameterImpl"], "EParameter", !_EPackageImpl__WEBPACK_IMPORTED_MODULE_15__["EPackageImpl"].IS_ABSTRACT, !_EPackageImpl__WEBPACK_IMPORTED_MODULE_15__["EPackageImpl"].IS_INTERFACE, _EPackageImpl__WEBPACK_IMPORTED_MODULE_15__["EPackageImpl"].IS_GENERATED_INSTANCE_CLASS);
            _this.initEReference(_this.getEParameter_EOperation(), _this.ecorePackage.getEOperation(), _this.getEOperation_EParameters(), "eOperation", null, 0, 1, _EParameterImpl__WEBPACK_IMPORTED_MODULE_29__["EParameterImpl"], _EPackageImpl__WEBPACK_IMPORTED_MODULE_15__["EPackageImpl"].IS_TRANSIENT, !_EPackageImpl__WEBPACK_IMPORTED_MODULE_15__["EPackageImpl"].IS_VOLATILE, !_EPackageImpl__WEBPACK_IMPORTED_MODULE_15__["EPackageImpl"].IS_CHANGEABLE, !_EPackageImpl__WEBPACK_IMPORTED_MODULE_15__["EPackageImpl"].IS_COMPOSITE, !_EPackageImpl__WEBPACK_IMPORTED_MODULE_15__["EPackageImpl"].IS_RESOLVE_PROXIES, !_EPackageImpl__WEBPACK_IMPORTED_MODULE_15__["EPackageImpl"].IS_UNSETTABLE, _EPackageImpl__WEBPACK_IMPORTED_MODULE_15__["EPackageImpl"].IS_UNIQUE, !_EPackageImpl__WEBPACK_IMPORTED_MODULE_15__["EPackageImpl"].IS_DERIVED, _EPackageImpl__WEBPACK_IMPORTED_MODULE_15__["EPackageImpl"].IS_ORDERED);
            _this.initEClass(_this.EReferenceEClass, _EReferenceImpl__WEBPACK_IMPORTED_MODULE_32__["EReferenceImpl"], "EReference", !_EPackageImpl__WEBPACK_IMPORTED_MODULE_15__["EPackageImpl"].IS_ABSTRACT, !_EPackageImpl__WEBPACK_IMPORTED_MODULE_15__["EPackageImpl"].IS_INTERFACE, _EPackageImpl__WEBPACK_IMPORTED_MODULE_15__["EPackageImpl"].IS_GENERATED_INSTANCE_CLASS);
            _this.initEAttribute_EClassifier(_this.getEReference_Containment(), _this.ecorePackage.getEBoolean(), "containment", "false", 0, 1, _EReferenceImpl__WEBPACK_IMPORTED_MODULE_32__["EReferenceImpl"], !_EPackageImpl__WEBPACK_IMPORTED_MODULE_15__["EPackageImpl"].IS_TRANSIENT, !_EPackageImpl__WEBPACK_IMPORTED_MODULE_15__["EPackageImpl"].IS_VOLATILE, _EPackageImpl__WEBPACK_IMPORTED_MODULE_15__["EPackageImpl"].IS_CHANGEABLE, !_EPackageImpl__WEBPACK_IMPORTED_MODULE_15__["EPackageImpl"].IS_UNSETTABLE, !_EPackageImpl__WEBPACK_IMPORTED_MODULE_15__["EPackageImpl"].IS_ID, _EPackageImpl__WEBPACK_IMPORTED_MODULE_15__["EPackageImpl"].IS_UNIQUE, !_EPackageImpl__WEBPACK_IMPORTED_MODULE_15__["EPackageImpl"].IS_DERIVED, _EPackageImpl__WEBPACK_IMPORTED_MODULE_15__["EPackageImpl"].IS_ORDERED);
            _this.initEAttribute_EClassifier(_this.getEReference_Container(), _this.ecorePackage.getEBoolean(), "container", "false", 0, 1, _EReferenceImpl__WEBPACK_IMPORTED_MODULE_32__["EReferenceImpl"], _EPackageImpl__WEBPACK_IMPORTED_MODULE_15__["EPackageImpl"].IS_TRANSIENT, _EPackageImpl__WEBPACK_IMPORTED_MODULE_15__["EPackageImpl"].IS_VOLATILE, !_EPackageImpl__WEBPACK_IMPORTED_MODULE_15__["EPackageImpl"].IS_CHANGEABLE, !_EPackageImpl__WEBPACK_IMPORTED_MODULE_15__["EPackageImpl"].IS_UNSETTABLE, !_EPackageImpl__WEBPACK_IMPORTED_MODULE_15__["EPackageImpl"].IS_ID, _EPackageImpl__WEBPACK_IMPORTED_MODULE_15__["EPackageImpl"].IS_UNIQUE, _EPackageImpl__WEBPACK_IMPORTED_MODULE_15__["EPackageImpl"].IS_DERIVED, _EPackageImpl__WEBPACK_IMPORTED_MODULE_15__["EPackageImpl"].IS_ORDERED);
            _this.initEAttribute_EClassifier(_this.getEReference_ResolveProxies(), _this.ecorePackage.getEBoolean(), "resolveProxies", "true", 0, 1, _EReferenceImpl__WEBPACK_IMPORTED_MODULE_32__["EReferenceImpl"], !_EPackageImpl__WEBPACK_IMPORTED_MODULE_15__["EPackageImpl"].IS_TRANSIENT, !_EPackageImpl__WEBPACK_IMPORTED_MODULE_15__["EPackageImpl"].IS_VOLATILE, _EPackageImpl__WEBPACK_IMPORTED_MODULE_15__["EPackageImpl"].IS_CHANGEABLE, !_EPackageImpl__WEBPACK_IMPORTED_MODULE_15__["EPackageImpl"].IS_UNSETTABLE, !_EPackageImpl__WEBPACK_IMPORTED_MODULE_15__["EPackageImpl"].IS_ID, _EPackageImpl__WEBPACK_IMPORTED_MODULE_15__["EPackageImpl"].IS_UNIQUE, !_EPackageImpl__WEBPACK_IMPORTED_MODULE_15__["EPackageImpl"].IS_DERIVED, _EPackageImpl__WEBPACK_IMPORTED_MODULE_15__["EPackageImpl"].IS_ORDERED);
            _this.initEReference(_this.getEReference_EOpposite(), _this.ecorePackage.getEReference(), null, "eOpposite", null, 0, 1, _EReferenceImpl__WEBPACK_IMPORTED_MODULE_32__["EReferenceImpl"], !_EPackageImpl__WEBPACK_IMPORTED_MODULE_15__["EPackageImpl"].IS_TRANSIENT, !_EPackageImpl__WEBPACK_IMPORTED_MODULE_15__["EPackageImpl"].IS_VOLATILE, _EPackageImpl__WEBPACK_IMPORTED_MODULE_15__["EPackageImpl"].IS_CHANGEABLE, !_EPackageImpl__WEBPACK_IMPORTED_MODULE_15__["EPackageImpl"].IS_COMPOSITE, _EPackageImpl__WEBPACK_IMPORTED_MODULE_15__["EPackageImpl"].IS_RESOLVE_PROXIES, !_EPackageImpl__WEBPACK_IMPORTED_MODULE_15__["EPackageImpl"].IS_UNSETTABLE, _EPackageImpl__WEBPACK_IMPORTED_MODULE_15__["EPackageImpl"].IS_UNIQUE, !_EPackageImpl__WEBPACK_IMPORTED_MODULE_15__["EPackageImpl"].IS_DERIVED, _EPackageImpl__WEBPACK_IMPORTED_MODULE_15__["EPackageImpl"].IS_ORDERED);
            _this.initEReference(_this.getEReference_EReferenceType(), _this.ecorePackage.getEClass(), null, "eReferenceType", null, 1, 1, _EReferenceImpl__WEBPACK_IMPORTED_MODULE_32__["EReferenceImpl"], _EPackageImpl__WEBPACK_IMPORTED_MODULE_15__["EPackageImpl"].IS_TRANSIENT, _EPackageImpl__WEBPACK_IMPORTED_MODULE_15__["EPackageImpl"].IS_VOLATILE, !_EPackageImpl__WEBPACK_IMPORTED_MODULE_15__["EPackageImpl"].IS_CHANGEABLE, !_EPackageImpl__WEBPACK_IMPORTED_MODULE_15__["EPackageImpl"].IS_COMPOSITE, _EPackageImpl__WEBPACK_IMPORTED_MODULE_15__["EPackageImpl"].IS_RESOLVE_PROXIES, !_EPackageImpl__WEBPACK_IMPORTED_MODULE_15__["EPackageImpl"].IS_UNSETTABLE, _EPackageImpl__WEBPACK_IMPORTED_MODULE_15__["EPackageImpl"].IS_UNIQUE, _EPackageImpl__WEBPACK_IMPORTED_MODULE_15__["EPackageImpl"].IS_DERIVED, _EPackageImpl__WEBPACK_IMPORTED_MODULE_15__["EPackageImpl"].IS_ORDERED);
            _this.initEReference(_this.getEReference_EKeys(), _this.ecorePackage.getEAttribute(), null, "eKeys", null, 0, -1, _EReferenceImpl__WEBPACK_IMPORTED_MODULE_32__["EReferenceImpl"], !_EPackageImpl__WEBPACK_IMPORTED_MODULE_15__["EPackageImpl"].IS_TRANSIENT, !_EPackageImpl__WEBPACK_IMPORTED_MODULE_15__["EPackageImpl"].IS_VOLATILE, _EPackageImpl__WEBPACK_IMPORTED_MODULE_15__["EPackageImpl"].IS_CHANGEABLE, !_EPackageImpl__WEBPACK_IMPORTED_MODULE_15__["EPackageImpl"].IS_COMPOSITE, _EPackageImpl__WEBPACK_IMPORTED_MODULE_15__["EPackageImpl"].IS_RESOLVE_PROXIES, !_EPackageImpl__WEBPACK_IMPORTED_MODULE_15__["EPackageImpl"].IS_UNSETTABLE, _EPackageImpl__WEBPACK_IMPORTED_MODULE_15__["EPackageImpl"].IS_UNIQUE, !_EPackageImpl__WEBPACK_IMPORTED_MODULE_15__["EPackageImpl"].IS_DERIVED, _EPackageImpl__WEBPACK_IMPORTED_MODULE_15__["EPackageImpl"].IS_ORDERED);
            _this.initEClass(_this.EStructuralFeatureEClass, _EStructuralFeatureImpl__WEBPACK_IMPORTED_MODULE_16__["EStructuralFeatureImpl"], "EStructuralFeature", _EPackageImpl__WEBPACK_IMPORTED_MODULE_15__["EPackageImpl"].IS_ABSTRACT, !_EPackageImpl__WEBPACK_IMPORTED_MODULE_15__["EPackageImpl"].IS_INTERFACE, _EPackageImpl__WEBPACK_IMPORTED_MODULE_15__["EPackageImpl"].IS_GENERATED_INSTANCE_CLASS);
            _this.initEAttribute_EClassifier(_this.getEStructuralFeature_Changeable(), _this.ecorePackage.getEBoolean(), "changeable", "true", 0, 1, _EStructuralFeatureImpl__WEBPACK_IMPORTED_MODULE_16__["EStructuralFeatureImpl"], !_EPackageImpl__WEBPACK_IMPORTED_MODULE_15__["EPackageImpl"].IS_TRANSIENT, !_EPackageImpl__WEBPACK_IMPORTED_MODULE_15__["EPackageImpl"].IS_VOLATILE, _EPackageImpl__WEBPACK_IMPORTED_MODULE_15__["EPackageImpl"].IS_CHANGEABLE, !_EPackageImpl__WEBPACK_IMPORTED_MODULE_15__["EPackageImpl"].IS_UNSETTABLE, !_EPackageImpl__WEBPACK_IMPORTED_MODULE_15__["EPackageImpl"].IS_ID, _EPackageImpl__WEBPACK_IMPORTED_MODULE_15__["EPackageImpl"].IS_UNIQUE, !_EPackageImpl__WEBPACK_IMPORTED_MODULE_15__["EPackageImpl"].IS_DERIVED, _EPackageImpl__WEBPACK_IMPORTED_MODULE_15__["EPackageImpl"].IS_ORDERED);
            _this.initEAttribute_EClassifier(_this.getEStructuralFeature_Volatile(), _this.ecorePackage.getEBoolean(), "volatile", "false", 0, 1, _EStructuralFeatureImpl__WEBPACK_IMPORTED_MODULE_16__["EStructuralFeatureImpl"], !_EPackageImpl__WEBPACK_IMPORTED_MODULE_15__["EPackageImpl"].IS_TRANSIENT, !_EPackageImpl__WEBPACK_IMPORTED_MODULE_15__["EPackageImpl"].IS_VOLATILE, _EPackageImpl__WEBPACK_IMPORTED_MODULE_15__["EPackageImpl"].IS_CHANGEABLE, !_EPackageImpl__WEBPACK_IMPORTED_MODULE_15__["EPackageImpl"].IS_UNSETTABLE, !_EPackageImpl__WEBPACK_IMPORTED_MODULE_15__["EPackageImpl"].IS_ID, _EPackageImpl__WEBPACK_IMPORTED_MODULE_15__["EPackageImpl"].IS_UNIQUE, !_EPackageImpl__WEBPACK_IMPORTED_MODULE_15__["EPackageImpl"].IS_DERIVED, _EPackageImpl__WEBPACK_IMPORTED_MODULE_15__["EPackageImpl"].IS_ORDERED);
            _this.initEAttribute_EClassifier(_this.getEStructuralFeature_Transient(), _this.ecorePackage.getEBoolean(), "transient", "false", 0, 1, _EStructuralFeatureImpl__WEBPACK_IMPORTED_MODULE_16__["EStructuralFeatureImpl"], !_EPackageImpl__WEBPACK_IMPORTED_MODULE_15__["EPackageImpl"].IS_TRANSIENT, !_EPackageImpl__WEBPACK_IMPORTED_MODULE_15__["EPackageImpl"].IS_VOLATILE, _EPackageImpl__WEBPACK_IMPORTED_MODULE_15__["EPackageImpl"].IS_CHANGEABLE, !_EPackageImpl__WEBPACK_IMPORTED_MODULE_15__["EPackageImpl"].IS_UNSETTABLE, !_EPackageImpl__WEBPACK_IMPORTED_MODULE_15__["EPackageImpl"].IS_ID, _EPackageImpl__WEBPACK_IMPORTED_MODULE_15__["EPackageImpl"].IS_UNIQUE, !_EPackageImpl__WEBPACK_IMPORTED_MODULE_15__["EPackageImpl"].IS_DERIVED, _EPackageImpl__WEBPACK_IMPORTED_MODULE_15__["EPackageImpl"].IS_ORDERED);
            _this.initEAttribute_EClassifier(_this.getEStructuralFeature_DefaultValueLiteral(), _this.ecorePackage.getEString(), "defaultValueLiteral", null, 0, 1, _EStructuralFeatureImpl__WEBPACK_IMPORTED_MODULE_16__["EStructuralFeatureImpl"], !_EPackageImpl__WEBPACK_IMPORTED_MODULE_15__["EPackageImpl"].IS_TRANSIENT, !_EPackageImpl__WEBPACK_IMPORTED_MODULE_15__["EPackageImpl"].IS_VOLATILE, _EPackageImpl__WEBPACK_IMPORTED_MODULE_15__["EPackageImpl"].IS_CHANGEABLE, !_EPackageImpl__WEBPACK_IMPORTED_MODULE_15__["EPackageImpl"].IS_UNSETTABLE, !_EPackageImpl__WEBPACK_IMPORTED_MODULE_15__["EPackageImpl"].IS_ID, _EPackageImpl__WEBPACK_IMPORTED_MODULE_15__["EPackageImpl"].IS_UNIQUE, !_EPackageImpl__WEBPACK_IMPORTED_MODULE_15__["EPackageImpl"].IS_DERIVED, _EPackageImpl__WEBPACK_IMPORTED_MODULE_15__["EPackageImpl"].IS_ORDERED);
            _this.initEAttribute_EClassifier(_this.getEStructuralFeature_DefaultValue(), _this.ecorePackage.getEJavaObject(), "defaultValue", null, 0, 1, _EStructuralFeatureImpl__WEBPACK_IMPORTED_MODULE_16__["EStructuralFeatureImpl"], _EPackageImpl__WEBPACK_IMPORTED_MODULE_15__["EPackageImpl"].IS_TRANSIENT, _EPackageImpl__WEBPACK_IMPORTED_MODULE_15__["EPackageImpl"].IS_VOLATILE, !_EPackageImpl__WEBPACK_IMPORTED_MODULE_15__["EPackageImpl"].IS_CHANGEABLE, !_EPackageImpl__WEBPACK_IMPORTED_MODULE_15__["EPackageImpl"].IS_UNSETTABLE, !_EPackageImpl__WEBPACK_IMPORTED_MODULE_15__["EPackageImpl"].IS_ID, _EPackageImpl__WEBPACK_IMPORTED_MODULE_15__["EPackageImpl"].IS_UNIQUE, _EPackageImpl__WEBPACK_IMPORTED_MODULE_15__["EPackageImpl"].IS_DERIVED, _EPackageImpl__WEBPACK_IMPORTED_MODULE_15__["EPackageImpl"].IS_ORDERED);
            _this.initEAttribute_EClassifier(_this.getEStructuralFeature_Unsettable(), _this.ecorePackage.getEBoolean(), "unsettable", "false", 0, 1, _EStructuralFeatureImpl__WEBPACK_IMPORTED_MODULE_16__["EStructuralFeatureImpl"], !_EPackageImpl__WEBPACK_IMPORTED_MODULE_15__["EPackageImpl"].IS_TRANSIENT, !_EPackageImpl__WEBPACK_IMPORTED_MODULE_15__["EPackageImpl"].IS_VOLATILE, _EPackageImpl__WEBPACK_IMPORTED_MODULE_15__["EPackageImpl"].IS_CHANGEABLE, !_EPackageImpl__WEBPACK_IMPORTED_MODULE_15__["EPackageImpl"].IS_UNSETTABLE, !_EPackageImpl__WEBPACK_IMPORTED_MODULE_15__["EPackageImpl"].IS_ID, _EPackageImpl__WEBPACK_IMPORTED_MODULE_15__["EPackageImpl"].IS_UNIQUE, !_EPackageImpl__WEBPACK_IMPORTED_MODULE_15__["EPackageImpl"].IS_DERIVED, _EPackageImpl__WEBPACK_IMPORTED_MODULE_15__["EPackageImpl"].IS_ORDERED);
            _this.initEAttribute_EClassifier(_this.getEStructuralFeature_Derived(), _this.ecorePackage.getEBoolean(), "derived", "false", 0, 1, _EStructuralFeatureImpl__WEBPACK_IMPORTED_MODULE_16__["EStructuralFeatureImpl"], !_EPackageImpl__WEBPACK_IMPORTED_MODULE_15__["EPackageImpl"].IS_TRANSIENT, !_EPackageImpl__WEBPACK_IMPORTED_MODULE_15__["EPackageImpl"].IS_VOLATILE, _EPackageImpl__WEBPACK_IMPORTED_MODULE_15__["EPackageImpl"].IS_CHANGEABLE, !_EPackageImpl__WEBPACK_IMPORTED_MODULE_15__["EPackageImpl"].IS_UNSETTABLE, !_EPackageImpl__WEBPACK_IMPORTED_MODULE_15__["EPackageImpl"].IS_ID, _EPackageImpl__WEBPACK_IMPORTED_MODULE_15__["EPackageImpl"].IS_UNIQUE, !_EPackageImpl__WEBPACK_IMPORTED_MODULE_15__["EPackageImpl"].IS_DERIVED, _EPackageImpl__WEBPACK_IMPORTED_MODULE_15__["EPackageImpl"].IS_ORDERED);
            _this.initEReference(_this.getEStructuralFeature_EContainingClass(), _this.ecorePackage.getEClass(), _this.getEClass_EStructuralFeatures(), "eContainingClass", null, 0, 1, _EStructuralFeatureImpl__WEBPACK_IMPORTED_MODULE_16__["EStructuralFeatureImpl"], _EPackageImpl__WEBPACK_IMPORTED_MODULE_15__["EPackageImpl"].IS_TRANSIENT, !_EPackageImpl__WEBPACK_IMPORTED_MODULE_15__["EPackageImpl"].IS_VOLATILE, !_EPackageImpl__WEBPACK_IMPORTED_MODULE_15__["EPackageImpl"].IS_CHANGEABLE, !_EPackageImpl__WEBPACK_IMPORTED_MODULE_15__["EPackageImpl"].IS_COMPOSITE, !_EPackageImpl__WEBPACK_IMPORTED_MODULE_15__["EPackageImpl"].IS_RESOLVE_PROXIES, !_EPackageImpl__WEBPACK_IMPORTED_MODULE_15__["EPackageImpl"].IS_UNSETTABLE, _EPackageImpl__WEBPACK_IMPORTED_MODULE_15__["EPackageImpl"].IS_UNIQUE, !_EPackageImpl__WEBPACK_IMPORTED_MODULE_15__["EPackageImpl"].IS_DERIVED, _EPackageImpl__WEBPACK_IMPORTED_MODULE_15__["EPackageImpl"].IS_ORDERED);
            //TODO add initEOperation to EPackageImpl
            op = _this.initEOperation_3(_this.getEStructuralFeature__GetFeatureID__(), _this.ecorePackage.getEInt(), "getFeatureID", 0, 1, _EPackageImpl__WEBPACK_IMPORTED_MODULE_15__["EPackageImpl"].IS_UNIQUE, _EPackageImpl__WEBPACK_IMPORTED_MODULE_15__["EPackageImpl"].IS_ORDERED);
            //TODO add initEOperation to EPackageImpl
            op = _this.initEOperation_3(_this.getEStructuralFeature__GetContainerClass__(), _this.ecorePackage.getEJavaClass(), "getContainerClass", 0, 1, _EPackageImpl__WEBPACK_IMPORTED_MODULE_15__["EPackageImpl"].IS_UNIQUE, _EPackageImpl__WEBPACK_IMPORTED_MODULE_15__["EPackageImpl"].IS_ORDERED);
            _this.initEClass(_this.ETypedElementEClass, _ETypedElementImpl__WEBPACK_IMPORTED_MODULE_37__["ETypedElementImpl"], "ETypedElement", _EPackageImpl__WEBPACK_IMPORTED_MODULE_15__["EPackageImpl"].IS_ABSTRACT, !_EPackageImpl__WEBPACK_IMPORTED_MODULE_15__["EPackageImpl"].IS_INTERFACE, _EPackageImpl__WEBPACK_IMPORTED_MODULE_15__["EPackageImpl"].IS_GENERATED_INSTANCE_CLASS);
            _this.initEAttribute_EClassifier(_this.getETypedElement_Ordered(), _this.ecorePackage.getEBoolean(), "ordered", "true", 0, 1, _ETypedElementImpl__WEBPACK_IMPORTED_MODULE_37__["ETypedElementImpl"], !_EPackageImpl__WEBPACK_IMPORTED_MODULE_15__["EPackageImpl"].IS_TRANSIENT, !_EPackageImpl__WEBPACK_IMPORTED_MODULE_15__["EPackageImpl"].IS_VOLATILE, _EPackageImpl__WEBPACK_IMPORTED_MODULE_15__["EPackageImpl"].IS_CHANGEABLE, !_EPackageImpl__WEBPACK_IMPORTED_MODULE_15__["EPackageImpl"].IS_UNSETTABLE, !_EPackageImpl__WEBPACK_IMPORTED_MODULE_15__["EPackageImpl"].IS_ID, _EPackageImpl__WEBPACK_IMPORTED_MODULE_15__["EPackageImpl"].IS_UNIQUE, !_EPackageImpl__WEBPACK_IMPORTED_MODULE_15__["EPackageImpl"].IS_DERIVED, _EPackageImpl__WEBPACK_IMPORTED_MODULE_15__["EPackageImpl"].IS_ORDERED);
            _this.initEAttribute_EClassifier(_this.getETypedElement_Unique(), _this.ecorePackage.getEBoolean(), "unique", "true", 0, 1, _ETypedElementImpl__WEBPACK_IMPORTED_MODULE_37__["ETypedElementImpl"], !_EPackageImpl__WEBPACK_IMPORTED_MODULE_15__["EPackageImpl"].IS_TRANSIENT, !_EPackageImpl__WEBPACK_IMPORTED_MODULE_15__["EPackageImpl"].IS_VOLATILE, _EPackageImpl__WEBPACK_IMPORTED_MODULE_15__["EPackageImpl"].IS_CHANGEABLE, !_EPackageImpl__WEBPACK_IMPORTED_MODULE_15__["EPackageImpl"].IS_UNSETTABLE, !_EPackageImpl__WEBPACK_IMPORTED_MODULE_15__["EPackageImpl"].IS_ID, _EPackageImpl__WEBPACK_IMPORTED_MODULE_15__["EPackageImpl"].IS_UNIQUE, !_EPackageImpl__WEBPACK_IMPORTED_MODULE_15__["EPackageImpl"].IS_DERIVED, _EPackageImpl__WEBPACK_IMPORTED_MODULE_15__["EPackageImpl"].IS_ORDERED);
            _this.initEAttribute_EClassifier(_this.getETypedElement_LowerBound(), _this.ecorePackage.getEInt(), "lowerBound", "0", 0, 1, _ETypedElementImpl__WEBPACK_IMPORTED_MODULE_37__["ETypedElementImpl"], !_EPackageImpl__WEBPACK_IMPORTED_MODULE_15__["EPackageImpl"].IS_TRANSIENT, !_EPackageImpl__WEBPACK_IMPORTED_MODULE_15__["EPackageImpl"].IS_VOLATILE, _EPackageImpl__WEBPACK_IMPORTED_MODULE_15__["EPackageImpl"].IS_CHANGEABLE, !_EPackageImpl__WEBPACK_IMPORTED_MODULE_15__["EPackageImpl"].IS_UNSETTABLE, !_EPackageImpl__WEBPACK_IMPORTED_MODULE_15__["EPackageImpl"].IS_ID, _EPackageImpl__WEBPACK_IMPORTED_MODULE_15__["EPackageImpl"].IS_UNIQUE, !_EPackageImpl__WEBPACK_IMPORTED_MODULE_15__["EPackageImpl"].IS_DERIVED, _EPackageImpl__WEBPACK_IMPORTED_MODULE_15__["EPackageImpl"].IS_ORDERED);
            _this.initEAttribute_EClassifier(_this.getETypedElement_UpperBound(), _this.ecorePackage.getEInt(), "upperBound", "1", 0, 1, _ETypedElementImpl__WEBPACK_IMPORTED_MODULE_37__["ETypedElementImpl"], !_EPackageImpl__WEBPACK_IMPORTED_MODULE_15__["EPackageImpl"].IS_TRANSIENT, !_EPackageImpl__WEBPACK_IMPORTED_MODULE_15__["EPackageImpl"].IS_VOLATILE, _EPackageImpl__WEBPACK_IMPORTED_MODULE_15__["EPackageImpl"].IS_CHANGEABLE, !_EPackageImpl__WEBPACK_IMPORTED_MODULE_15__["EPackageImpl"].IS_UNSETTABLE, !_EPackageImpl__WEBPACK_IMPORTED_MODULE_15__["EPackageImpl"].IS_ID, _EPackageImpl__WEBPACK_IMPORTED_MODULE_15__["EPackageImpl"].IS_UNIQUE, !_EPackageImpl__WEBPACK_IMPORTED_MODULE_15__["EPackageImpl"].IS_DERIVED, _EPackageImpl__WEBPACK_IMPORTED_MODULE_15__["EPackageImpl"].IS_ORDERED);
            _this.initEAttribute_EClassifier(_this.getETypedElement_Many(), _this.ecorePackage.getEBoolean(), "many", "false", 0, 1, _ETypedElementImpl__WEBPACK_IMPORTED_MODULE_37__["ETypedElementImpl"], _EPackageImpl__WEBPACK_IMPORTED_MODULE_15__["EPackageImpl"].IS_TRANSIENT, _EPackageImpl__WEBPACK_IMPORTED_MODULE_15__["EPackageImpl"].IS_VOLATILE, !_EPackageImpl__WEBPACK_IMPORTED_MODULE_15__["EPackageImpl"].IS_CHANGEABLE, !_EPackageImpl__WEBPACK_IMPORTED_MODULE_15__["EPackageImpl"].IS_UNSETTABLE, !_EPackageImpl__WEBPACK_IMPORTED_MODULE_15__["EPackageImpl"].IS_ID, _EPackageImpl__WEBPACK_IMPORTED_MODULE_15__["EPackageImpl"].IS_UNIQUE, _EPackageImpl__WEBPACK_IMPORTED_MODULE_15__["EPackageImpl"].IS_DERIVED, _EPackageImpl__WEBPACK_IMPORTED_MODULE_15__["EPackageImpl"].IS_ORDERED);
            _this.initEAttribute_EClassifier(_this.getETypedElement_Required(), _this.ecorePackage.getEBoolean(), "required", "false", 0, 1, _ETypedElementImpl__WEBPACK_IMPORTED_MODULE_37__["ETypedElementImpl"], _EPackageImpl__WEBPACK_IMPORTED_MODULE_15__["EPackageImpl"].IS_TRANSIENT, _EPackageImpl__WEBPACK_IMPORTED_MODULE_15__["EPackageImpl"].IS_VOLATILE, !_EPackageImpl__WEBPACK_IMPORTED_MODULE_15__["EPackageImpl"].IS_CHANGEABLE, !_EPackageImpl__WEBPACK_IMPORTED_MODULE_15__["EPackageImpl"].IS_UNSETTABLE, !_EPackageImpl__WEBPACK_IMPORTED_MODULE_15__["EPackageImpl"].IS_ID, _EPackageImpl__WEBPACK_IMPORTED_MODULE_15__["EPackageImpl"].IS_UNIQUE, _EPackageImpl__WEBPACK_IMPORTED_MODULE_15__["EPackageImpl"].IS_DERIVED, _EPackageImpl__WEBPACK_IMPORTED_MODULE_15__["EPackageImpl"].IS_ORDERED);
            _this.initEReference(_this.getETypedElement_EType(), _this.ecorePackage.getEClassifier_(), null, "eType", null, 0, 1, _ETypedElementImpl__WEBPACK_IMPORTED_MODULE_37__["ETypedElementImpl"], !_EPackageImpl__WEBPACK_IMPORTED_MODULE_15__["EPackageImpl"].IS_TRANSIENT, _EPackageImpl__WEBPACK_IMPORTED_MODULE_15__["EPackageImpl"].IS_VOLATILE, _EPackageImpl__WEBPACK_IMPORTED_MODULE_15__["EPackageImpl"].IS_CHANGEABLE, !_EPackageImpl__WEBPACK_IMPORTED_MODULE_15__["EPackageImpl"].IS_COMPOSITE, _EPackageImpl__WEBPACK_IMPORTED_MODULE_15__["EPackageImpl"].IS_RESOLVE_PROXIES, _EPackageImpl__WEBPACK_IMPORTED_MODULE_15__["EPackageImpl"].IS_UNSETTABLE, _EPackageImpl__WEBPACK_IMPORTED_MODULE_15__["EPackageImpl"].IS_UNIQUE, !_EPackageImpl__WEBPACK_IMPORTED_MODULE_15__["EPackageImpl"].IS_DERIVED, _EPackageImpl__WEBPACK_IMPORTED_MODULE_15__["EPackageImpl"].IS_ORDERED);
            _this.initEReference(_this.getETypedElement_EGenericType(), _this.ecorePackage.getEGenericType(), null, "eGenericType", null, 0, 1, _ETypedElementImpl__WEBPACK_IMPORTED_MODULE_37__["ETypedElementImpl"], !_EPackageImpl__WEBPACK_IMPORTED_MODULE_15__["EPackageImpl"].IS_TRANSIENT, _EPackageImpl__WEBPACK_IMPORTED_MODULE_15__["EPackageImpl"].IS_VOLATILE, _EPackageImpl__WEBPACK_IMPORTED_MODULE_15__["EPackageImpl"].IS_CHANGEABLE, _EPackageImpl__WEBPACK_IMPORTED_MODULE_15__["EPackageImpl"].IS_COMPOSITE, !_EPackageImpl__WEBPACK_IMPORTED_MODULE_15__["EPackageImpl"].IS_RESOLVE_PROXIES, _EPackageImpl__WEBPACK_IMPORTED_MODULE_15__["EPackageImpl"].IS_UNSETTABLE, _EPackageImpl__WEBPACK_IMPORTED_MODULE_15__["EPackageImpl"].IS_UNIQUE, !_EPackageImpl__WEBPACK_IMPORTED_MODULE_15__["EPackageImpl"].IS_DERIVED, _EPackageImpl__WEBPACK_IMPORTED_MODULE_15__["EPackageImpl"].IS_ORDERED);
            _this.initEClass(_this.EStringToStringMapEntryEClass, _EStringToStringMapEntryImpl__WEBPACK_IMPORTED_MODULE_3__["EStringToStringMapEntryImpl"], "EStringToStringMapEntry", !_EPackageImpl__WEBPACK_IMPORTED_MODULE_15__["EPackageImpl"].IS_ABSTRACT, !_EPackageImpl__WEBPACK_IMPORTED_MODULE_15__["EPackageImpl"].IS_INTERFACE, _EPackageImpl__WEBPACK_IMPORTED_MODULE_15__["EPackageImpl"].IS_GENERATED_INSTANCE_CLASS);
            _this.initEAttribute_EClassifier(_this.getEStringToStringMapEntry_Key(), _this.ecorePackage.getEString(), "key", null, 0, 1, _EStringToStringMapEntryImpl__WEBPACK_IMPORTED_MODULE_3__["EStringToStringMapEntryImpl"], !_EPackageImpl__WEBPACK_IMPORTED_MODULE_15__["EPackageImpl"].IS_TRANSIENT, !_EPackageImpl__WEBPACK_IMPORTED_MODULE_15__["EPackageImpl"].IS_VOLATILE, _EPackageImpl__WEBPACK_IMPORTED_MODULE_15__["EPackageImpl"].IS_CHANGEABLE, !_EPackageImpl__WEBPACK_IMPORTED_MODULE_15__["EPackageImpl"].IS_UNSETTABLE, !_EPackageImpl__WEBPACK_IMPORTED_MODULE_15__["EPackageImpl"].IS_ID, _EPackageImpl__WEBPACK_IMPORTED_MODULE_15__["EPackageImpl"].IS_UNIQUE, !_EPackageImpl__WEBPACK_IMPORTED_MODULE_15__["EPackageImpl"].IS_DERIVED, _EPackageImpl__WEBPACK_IMPORTED_MODULE_15__["EPackageImpl"].IS_ORDERED);
            _this.initEAttribute_EClassifier(_this.getEStringToStringMapEntry_Value(), _this.ecorePackage.getEString(), "value", null, 0, 1, _EStringToStringMapEntryImpl__WEBPACK_IMPORTED_MODULE_3__["EStringToStringMapEntryImpl"], !_EPackageImpl__WEBPACK_IMPORTED_MODULE_15__["EPackageImpl"].IS_TRANSIENT, !_EPackageImpl__WEBPACK_IMPORTED_MODULE_15__["EPackageImpl"].IS_VOLATILE, _EPackageImpl__WEBPACK_IMPORTED_MODULE_15__["EPackageImpl"].IS_CHANGEABLE, !_EPackageImpl__WEBPACK_IMPORTED_MODULE_15__["EPackageImpl"].IS_UNSETTABLE, !_EPackageImpl__WEBPACK_IMPORTED_MODULE_15__["EPackageImpl"].IS_ID, _EPackageImpl__WEBPACK_IMPORTED_MODULE_15__["EPackageImpl"].IS_UNIQUE, !_EPackageImpl__WEBPACK_IMPORTED_MODULE_15__["EPackageImpl"].IS_DERIVED, _EPackageImpl__WEBPACK_IMPORTED_MODULE_15__["EPackageImpl"].IS_ORDERED);
            _this.initEClass(_this.EGenericTypeEClass, _EGenericTypeImpl__WEBPACK_IMPORTED_MODULE_19__["EGenericTypeImpl"], "EGenericType", !_EPackageImpl__WEBPACK_IMPORTED_MODULE_15__["EPackageImpl"].IS_ABSTRACT, !_EPackageImpl__WEBPACK_IMPORTED_MODULE_15__["EPackageImpl"].IS_INTERFACE, _EPackageImpl__WEBPACK_IMPORTED_MODULE_15__["EPackageImpl"].IS_GENERATED_INSTANCE_CLASS);
            _this.initEReference(_this.getEGenericType_EUpperBound(), _this.ecorePackage.getEGenericType(), null, "eUpperBound", null, 0, 1, _EGenericTypeImpl__WEBPACK_IMPORTED_MODULE_19__["EGenericTypeImpl"], !_EPackageImpl__WEBPACK_IMPORTED_MODULE_15__["EPackageImpl"].IS_TRANSIENT, !_EPackageImpl__WEBPACK_IMPORTED_MODULE_15__["EPackageImpl"].IS_VOLATILE, _EPackageImpl__WEBPACK_IMPORTED_MODULE_15__["EPackageImpl"].IS_CHANGEABLE, _EPackageImpl__WEBPACK_IMPORTED_MODULE_15__["EPackageImpl"].IS_COMPOSITE, !_EPackageImpl__WEBPACK_IMPORTED_MODULE_15__["EPackageImpl"].IS_RESOLVE_PROXIES, !_EPackageImpl__WEBPACK_IMPORTED_MODULE_15__["EPackageImpl"].IS_UNSETTABLE, _EPackageImpl__WEBPACK_IMPORTED_MODULE_15__["EPackageImpl"].IS_UNIQUE, !_EPackageImpl__WEBPACK_IMPORTED_MODULE_15__["EPackageImpl"].IS_DERIVED, _EPackageImpl__WEBPACK_IMPORTED_MODULE_15__["EPackageImpl"].IS_ORDERED);
            _this.initEReference(_this.getEGenericType_ETypeArguments(), _this.ecorePackage.getEGenericType(), null, "eTypeArguments", null, 0, -1, _EGenericTypeImpl__WEBPACK_IMPORTED_MODULE_19__["EGenericTypeImpl"], !_EPackageImpl__WEBPACK_IMPORTED_MODULE_15__["EPackageImpl"].IS_TRANSIENT, !_EPackageImpl__WEBPACK_IMPORTED_MODULE_15__["EPackageImpl"].IS_VOLATILE, _EPackageImpl__WEBPACK_IMPORTED_MODULE_15__["EPackageImpl"].IS_CHANGEABLE, _EPackageImpl__WEBPACK_IMPORTED_MODULE_15__["EPackageImpl"].IS_COMPOSITE, !_EPackageImpl__WEBPACK_IMPORTED_MODULE_15__["EPackageImpl"].IS_RESOLVE_PROXIES, !_EPackageImpl__WEBPACK_IMPORTED_MODULE_15__["EPackageImpl"].IS_UNSETTABLE, _EPackageImpl__WEBPACK_IMPORTED_MODULE_15__["EPackageImpl"].IS_UNIQUE, !_EPackageImpl__WEBPACK_IMPORTED_MODULE_15__["EPackageImpl"].IS_DERIVED, _EPackageImpl__WEBPACK_IMPORTED_MODULE_15__["EPackageImpl"].IS_ORDERED);
            _this.initEReference(_this.getEGenericType_ERawType(), _this.ecorePackage.getEClassifier_(), null, "eRawType", null, 1, 1, _EGenericTypeImpl__WEBPACK_IMPORTED_MODULE_19__["EGenericTypeImpl"], _EPackageImpl__WEBPACK_IMPORTED_MODULE_15__["EPackageImpl"].IS_TRANSIENT, !_EPackageImpl__WEBPACK_IMPORTED_MODULE_15__["EPackageImpl"].IS_VOLATILE, !_EPackageImpl__WEBPACK_IMPORTED_MODULE_15__["EPackageImpl"].IS_CHANGEABLE, !_EPackageImpl__WEBPACK_IMPORTED_MODULE_15__["EPackageImpl"].IS_COMPOSITE, _EPackageImpl__WEBPACK_IMPORTED_MODULE_15__["EPackageImpl"].IS_RESOLVE_PROXIES, !_EPackageImpl__WEBPACK_IMPORTED_MODULE_15__["EPackageImpl"].IS_UNSETTABLE, _EPackageImpl__WEBPACK_IMPORTED_MODULE_15__["EPackageImpl"].IS_UNIQUE, _EPackageImpl__WEBPACK_IMPORTED_MODULE_15__["EPackageImpl"].IS_DERIVED, _EPackageImpl__WEBPACK_IMPORTED_MODULE_15__["EPackageImpl"].IS_ORDERED);
            _this.initEReference(_this.getEGenericType_ELowerBound(), _this.ecorePackage.getEGenericType(), null, "eLowerBound", null, 0, 1, _EGenericTypeImpl__WEBPACK_IMPORTED_MODULE_19__["EGenericTypeImpl"], !_EPackageImpl__WEBPACK_IMPORTED_MODULE_15__["EPackageImpl"].IS_TRANSIENT, !_EPackageImpl__WEBPACK_IMPORTED_MODULE_15__["EPackageImpl"].IS_VOLATILE, _EPackageImpl__WEBPACK_IMPORTED_MODULE_15__["EPackageImpl"].IS_CHANGEABLE, _EPackageImpl__WEBPACK_IMPORTED_MODULE_15__["EPackageImpl"].IS_COMPOSITE, !_EPackageImpl__WEBPACK_IMPORTED_MODULE_15__["EPackageImpl"].IS_RESOLVE_PROXIES, !_EPackageImpl__WEBPACK_IMPORTED_MODULE_15__["EPackageImpl"].IS_UNSETTABLE, _EPackageImpl__WEBPACK_IMPORTED_MODULE_15__["EPackageImpl"].IS_UNIQUE, !_EPackageImpl__WEBPACK_IMPORTED_MODULE_15__["EPackageImpl"].IS_DERIVED, _EPackageImpl__WEBPACK_IMPORTED_MODULE_15__["EPackageImpl"].IS_ORDERED);
            _this.initEReference(_this.getEGenericType_ETypeParameter(), _this.ecorePackage.getETypeParameter(), null, "eTypeParameter", null, 0, 1, _EGenericTypeImpl__WEBPACK_IMPORTED_MODULE_19__["EGenericTypeImpl"], !_EPackageImpl__WEBPACK_IMPORTED_MODULE_15__["EPackageImpl"].IS_TRANSIENT, !_EPackageImpl__WEBPACK_IMPORTED_MODULE_15__["EPackageImpl"].IS_VOLATILE, _EPackageImpl__WEBPACK_IMPORTED_MODULE_15__["EPackageImpl"].IS_CHANGEABLE, !_EPackageImpl__WEBPACK_IMPORTED_MODULE_15__["EPackageImpl"].IS_COMPOSITE, !_EPackageImpl__WEBPACK_IMPORTED_MODULE_15__["EPackageImpl"].IS_RESOLVE_PROXIES, !_EPackageImpl__WEBPACK_IMPORTED_MODULE_15__["EPackageImpl"].IS_UNSETTABLE, _EPackageImpl__WEBPACK_IMPORTED_MODULE_15__["EPackageImpl"].IS_UNIQUE, !_EPackageImpl__WEBPACK_IMPORTED_MODULE_15__["EPackageImpl"].IS_DERIVED, _EPackageImpl__WEBPACK_IMPORTED_MODULE_15__["EPackageImpl"].IS_ORDERED);
            _this.initEReference(_this.getEGenericType_EClassifier(), _this.ecorePackage.getEClassifier_(), null, "eClassifier", null, 0, 1, _EGenericTypeImpl__WEBPACK_IMPORTED_MODULE_19__["EGenericTypeImpl"], !_EPackageImpl__WEBPACK_IMPORTED_MODULE_15__["EPackageImpl"].IS_TRANSIENT, !_EPackageImpl__WEBPACK_IMPORTED_MODULE_15__["EPackageImpl"].IS_VOLATILE, _EPackageImpl__WEBPACK_IMPORTED_MODULE_15__["EPackageImpl"].IS_CHANGEABLE, !_EPackageImpl__WEBPACK_IMPORTED_MODULE_15__["EPackageImpl"].IS_COMPOSITE, _EPackageImpl__WEBPACK_IMPORTED_MODULE_15__["EPackageImpl"].IS_RESOLVE_PROXIES, !_EPackageImpl__WEBPACK_IMPORTED_MODULE_15__["EPackageImpl"].IS_UNSETTABLE, _EPackageImpl__WEBPACK_IMPORTED_MODULE_15__["EPackageImpl"].IS_UNIQUE, !_EPackageImpl__WEBPACK_IMPORTED_MODULE_15__["EPackageImpl"].IS_DERIVED, _EPackageImpl__WEBPACK_IMPORTED_MODULE_15__["EPackageImpl"].IS_ORDERED);
            //TODO add initEOperation to EPackageImpl
            op = _this.initEOperation_3(_this.getEGenericType__IsInstance__Object(), _this.ecorePackage.getEBoolean(), "isInstance", 0, 1, _EPackageImpl__WEBPACK_IMPORTED_MODULE_15__["EPackageImpl"].IS_UNIQUE, _EPackageImpl__WEBPACK_IMPORTED_MODULE_15__["EPackageImpl"].IS_ORDERED);
            //TODO add addEParameter to EPackageImpl
            //this.addEParameter_3(op, this.getEGenericType(), "object", 0, 1, EPackageImpl.IS_UNIQUE, EPackageImpl.IS_ORDERED);
            _this.initEClass(_this.ETypeParameterEClass, _ETypeParameterImpl__WEBPACK_IMPORTED_MODULE_33__["ETypeParameterImpl"], "ETypeParameter", !_EPackageImpl__WEBPACK_IMPORTED_MODULE_15__["EPackageImpl"].IS_ABSTRACT, !_EPackageImpl__WEBPACK_IMPORTED_MODULE_15__["EPackageImpl"].IS_INTERFACE, _EPackageImpl__WEBPACK_IMPORTED_MODULE_15__["EPackageImpl"].IS_GENERATED_INSTANCE_CLASS);
            _this.initEReference(_this.getETypeParameter_EBounds(), _this.ecorePackage.getEGenericType(), null, "eBounds", null, 0, -1, _ETypeParameterImpl__WEBPACK_IMPORTED_MODULE_33__["ETypeParameterImpl"], !_EPackageImpl__WEBPACK_IMPORTED_MODULE_15__["EPackageImpl"].IS_TRANSIENT, !_EPackageImpl__WEBPACK_IMPORTED_MODULE_15__["EPackageImpl"].IS_VOLATILE, _EPackageImpl__WEBPACK_IMPORTED_MODULE_15__["EPackageImpl"].IS_CHANGEABLE, _EPackageImpl__WEBPACK_IMPORTED_MODULE_15__["EPackageImpl"].IS_COMPOSITE, !_EPackageImpl__WEBPACK_IMPORTED_MODULE_15__["EPackageImpl"].IS_RESOLVE_PROXIES, !_EPackageImpl__WEBPACK_IMPORTED_MODULE_15__["EPackageImpl"].IS_UNSETTABLE, _EPackageImpl__WEBPACK_IMPORTED_MODULE_15__["EPackageImpl"].IS_UNIQUE, !_EPackageImpl__WEBPACK_IMPORTED_MODULE_15__["EPackageImpl"].IS_DERIVED, _EPackageImpl__WEBPACK_IMPORTED_MODULE_15__["EPackageImpl"].IS_ORDERED);
            _this.initEDataType(_this.EBigDecimalEDataType, null, "EBigDecimal", _EPackageImpl__WEBPACK_IMPORTED_MODULE_15__["EPackageImpl"].IS_SERIALIZABLE, !_EPackageImpl__WEBPACK_IMPORTED_MODULE_15__["EPackageImpl"].IS_GENERATED_INSTANCE_CLASS);
            _this.initEDataType(_this.EBigIntegerEDataType, null, "EBigInteger", _EPackageImpl__WEBPACK_IMPORTED_MODULE_15__["EPackageImpl"].IS_SERIALIZABLE, !_EPackageImpl__WEBPACK_IMPORTED_MODULE_15__["EPackageImpl"].IS_GENERATED_INSTANCE_CLASS);
            _this.initEDataType(_this.EBooleanEDataType, null, "EBoolean", _EPackageImpl__WEBPACK_IMPORTED_MODULE_15__["EPackageImpl"].IS_SERIALIZABLE, !_EPackageImpl__WEBPACK_IMPORTED_MODULE_15__["EPackageImpl"].IS_GENERATED_INSTANCE_CLASS);
            _this.initEDataType(_this.EBooleanObjectEDataType, null, "EBooleanObject", _EPackageImpl__WEBPACK_IMPORTED_MODULE_15__["EPackageImpl"].IS_SERIALIZABLE, !_EPackageImpl__WEBPACK_IMPORTED_MODULE_15__["EPackageImpl"].IS_GENERATED_INSTANCE_CLASS);
            _this.initEDataType(_this.EByteEDataType, null, "EByte", _EPackageImpl__WEBPACK_IMPORTED_MODULE_15__["EPackageImpl"].IS_SERIALIZABLE, !_EPackageImpl__WEBPACK_IMPORTED_MODULE_15__["EPackageImpl"].IS_GENERATED_INSTANCE_CLASS);
            _this.initEDataType(_this.EByteArrayEDataType, null, "EByteArray", _EPackageImpl__WEBPACK_IMPORTED_MODULE_15__["EPackageImpl"].IS_SERIALIZABLE, !_EPackageImpl__WEBPACK_IMPORTED_MODULE_15__["EPackageImpl"].IS_GENERATED_INSTANCE_CLASS);
            _this.initEDataType(_this.EByteObjectEDataType, null, "EByteObject", _EPackageImpl__WEBPACK_IMPORTED_MODULE_15__["EPackageImpl"].IS_SERIALIZABLE, !_EPackageImpl__WEBPACK_IMPORTED_MODULE_15__["EPackageImpl"].IS_GENERATED_INSTANCE_CLASS);
            _this.initEDataType(_this.ECharEDataType, null, "EChar", _EPackageImpl__WEBPACK_IMPORTED_MODULE_15__["EPackageImpl"].IS_SERIALIZABLE, !_EPackageImpl__WEBPACK_IMPORTED_MODULE_15__["EPackageImpl"].IS_GENERATED_INSTANCE_CLASS);
            _this.initEDataType(_this.ECharacterObjectEDataType, null, "ECharacterObject", _EPackageImpl__WEBPACK_IMPORTED_MODULE_15__["EPackageImpl"].IS_SERIALIZABLE, !_EPackageImpl__WEBPACK_IMPORTED_MODULE_15__["EPackageImpl"].IS_GENERATED_INSTANCE_CLASS);
            _this.initEDataType(_this.EDateEDataType, null, "EDate", _EPackageImpl__WEBPACK_IMPORTED_MODULE_15__["EPackageImpl"].IS_SERIALIZABLE, !_EPackageImpl__WEBPACK_IMPORTED_MODULE_15__["EPackageImpl"].IS_GENERATED_INSTANCE_CLASS);
            _this.initEDataType(_this.EDiagnosticChainEDataType, null, "EDiagnosticChain", !_EPackageImpl__WEBPACK_IMPORTED_MODULE_15__["EPackageImpl"].IS_SERIALIZABLE, !_EPackageImpl__WEBPACK_IMPORTED_MODULE_15__["EPackageImpl"].IS_GENERATED_INSTANCE_CLASS);
            _this.initEDataType(_this.EDoubleEDataType, null, "EDouble", _EPackageImpl__WEBPACK_IMPORTED_MODULE_15__["EPackageImpl"].IS_SERIALIZABLE, !_EPackageImpl__WEBPACK_IMPORTED_MODULE_15__["EPackageImpl"].IS_GENERATED_INSTANCE_CLASS);
            _this.initEDataType(_this.EDoubleObjectEDataType, null, "EDoubleObject", _EPackageImpl__WEBPACK_IMPORTED_MODULE_15__["EPackageImpl"].IS_SERIALIZABLE, !_EPackageImpl__WEBPACK_IMPORTED_MODULE_15__["EPackageImpl"].IS_GENERATED_INSTANCE_CLASS);
            _this.initEDataType(_this.EEListEDataType, null, "EEList", !_EPackageImpl__WEBPACK_IMPORTED_MODULE_15__["EPackageImpl"].IS_SERIALIZABLE, !_EPackageImpl__WEBPACK_IMPORTED_MODULE_15__["EPackageImpl"].IS_GENERATED_INSTANCE_CLASS);
            _this.initEDataType(_this.EEnumeratorEDataType, null, "EEnumerator", !_EPackageImpl__WEBPACK_IMPORTED_MODULE_15__["EPackageImpl"].IS_SERIALIZABLE, !_EPackageImpl__WEBPACK_IMPORTED_MODULE_15__["EPackageImpl"].IS_GENERATED_INSTANCE_CLASS);
            _this.initEDataType(_this.EFeatureMapEDataType, null, "EFeatureMap", !_EPackageImpl__WEBPACK_IMPORTED_MODULE_15__["EPackageImpl"].IS_SERIALIZABLE, !_EPackageImpl__WEBPACK_IMPORTED_MODULE_15__["EPackageImpl"].IS_GENERATED_INSTANCE_CLASS);
            _this.initEDataType(_this.EFeatureMapEntryEDataType, null, "EFeatureMapEntry", !_EPackageImpl__WEBPACK_IMPORTED_MODULE_15__["EPackageImpl"].IS_SERIALIZABLE, !_EPackageImpl__WEBPACK_IMPORTED_MODULE_15__["EPackageImpl"].IS_GENERATED_INSTANCE_CLASS);
            _this.initEDataType(_this.EFloatEDataType, null, "EFloat", _EPackageImpl__WEBPACK_IMPORTED_MODULE_15__["EPackageImpl"].IS_SERIALIZABLE, !_EPackageImpl__WEBPACK_IMPORTED_MODULE_15__["EPackageImpl"].IS_GENERATED_INSTANCE_CLASS);
            _this.initEDataType(_this.EFloatObjectEDataType, null, "EFloatObject", _EPackageImpl__WEBPACK_IMPORTED_MODULE_15__["EPackageImpl"].IS_SERIALIZABLE, !_EPackageImpl__WEBPACK_IMPORTED_MODULE_15__["EPackageImpl"].IS_GENERATED_INSTANCE_CLASS);
            _this.initEDataType(_this.EIntEDataType, null, "EInt", _EPackageImpl__WEBPACK_IMPORTED_MODULE_15__["EPackageImpl"].IS_SERIALIZABLE, !_EPackageImpl__WEBPACK_IMPORTED_MODULE_15__["EPackageImpl"].IS_GENERATED_INSTANCE_CLASS);
            _this.initEDataType(_this.EIntegerObjectEDataType, null, "EIntegerObject", _EPackageImpl__WEBPACK_IMPORTED_MODULE_15__["EPackageImpl"].IS_SERIALIZABLE, !_EPackageImpl__WEBPACK_IMPORTED_MODULE_15__["EPackageImpl"].IS_GENERATED_INSTANCE_CLASS);
            _this.initEDataType(_this.EJavaClassEDataType, null, "EJavaClass", _EPackageImpl__WEBPACK_IMPORTED_MODULE_15__["EPackageImpl"].IS_SERIALIZABLE, !_EPackageImpl__WEBPACK_IMPORTED_MODULE_15__["EPackageImpl"].IS_GENERATED_INSTANCE_CLASS);
            _this.initEDataType(_this.EJavaObjectEDataType, null, "EJavaObject", _EPackageImpl__WEBPACK_IMPORTED_MODULE_15__["EPackageImpl"].IS_SERIALIZABLE, !_EPackageImpl__WEBPACK_IMPORTED_MODULE_15__["EPackageImpl"].IS_GENERATED_INSTANCE_CLASS);
            _this.initEDataType(_this.ELongEDataType, null, "ELong", _EPackageImpl__WEBPACK_IMPORTED_MODULE_15__["EPackageImpl"].IS_SERIALIZABLE, !_EPackageImpl__WEBPACK_IMPORTED_MODULE_15__["EPackageImpl"].IS_GENERATED_INSTANCE_CLASS);
            _this.initEDataType(_this.ELongObjectEDataType, null, "ELongObject", _EPackageImpl__WEBPACK_IMPORTED_MODULE_15__["EPackageImpl"].IS_SERIALIZABLE, !_EPackageImpl__WEBPACK_IMPORTED_MODULE_15__["EPackageImpl"].IS_GENERATED_INSTANCE_CLASS);
            _this.initEDataType(_this.EMapEDataType, null, "EMap", !_EPackageImpl__WEBPACK_IMPORTED_MODULE_15__["EPackageImpl"].IS_SERIALIZABLE, !_EPackageImpl__WEBPACK_IMPORTED_MODULE_15__["EPackageImpl"].IS_GENERATED_INSTANCE_CLASS);
            _this.initEDataType(_this.EResourceEDataType, null, "EResource", !_EPackageImpl__WEBPACK_IMPORTED_MODULE_15__["EPackageImpl"].IS_SERIALIZABLE, !_EPackageImpl__WEBPACK_IMPORTED_MODULE_15__["EPackageImpl"].IS_GENERATED_INSTANCE_CLASS);
            _this.initEDataType(_this.EResourceSetEDataType, null, "EResourceSet", !_EPackageImpl__WEBPACK_IMPORTED_MODULE_15__["EPackageImpl"].IS_SERIALIZABLE, !_EPackageImpl__WEBPACK_IMPORTED_MODULE_15__["EPackageImpl"].IS_GENERATED_INSTANCE_CLASS);
            _this.initEDataType(_this.EShortEDataType, null, "EShort", _EPackageImpl__WEBPACK_IMPORTED_MODULE_15__["EPackageImpl"].IS_SERIALIZABLE, !_EPackageImpl__WEBPACK_IMPORTED_MODULE_15__["EPackageImpl"].IS_GENERATED_INSTANCE_CLASS);
            _this.initEDataType(_this.EShortObjectEDataType, null, "EShortObject", _EPackageImpl__WEBPACK_IMPORTED_MODULE_15__["EPackageImpl"].IS_SERIALIZABLE, !_EPackageImpl__WEBPACK_IMPORTED_MODULE_15__["EPackageImpl"].IS_GENERATED_INSTANCE_CLASS);
            _this.initEDataType(_this.EStringEDataType, null, "EString", _EPackageImpl__WEBPACK_IMPORTED_MODULE_15__["EPackageImpl"].IS_SERIALIZABLE, !_EPackageImpl__WEBPACK_IMPORTED_MODULE_15__["EPackageImpl"].IS_GENERATED_INSTANCE_CLASS);
            _this.initEDataType(_this.ETreeIteratorEDataType, null, "ETreeIterator", !_EPackageImpl__WEBPACK_IMPORTED_MODULE_15__["EPackageImpl"].IS_SERIALIZABLE, !_EPackageImpl__WEBPACK_IMPORTED_MODULE_15__["EPackageImpl"].IS_GENERATED_INSTANCE_CLASS);
            _this.initEDataType(_this.EInvocationTargetExceptionEDataType, null, "EInvocationTargetException", !_EPackageImpl__WEBPACK_IMPORTED_MODULE_15__["EPackageImpl"].IS_SERIALIZABLE, !_EPackageImpl__WEBPACK_IMPORTED_MODULE_15__["EPackageImpl"].IS_GENERATED_INSTANCE_CLASS);
        };
        _this.EAttributeEClass = null;
        _this.EAnnotationEClass = null;
        _this.EClassEClass = null;
        _this.EClassifierEClass = null;
        _this.EDataTypeEClass = null;
        _this.EEnumEClass = null;
        _this.EEnumLiteralEClass = null;
        _this.EFactoryEClass = null;
        _this.EModelElementEClass = null;
        _this.ENamedElementEClass = null;
        _this.EObjectEClass = null;
        _this.EOperationEClass = null;
        _this.EPackageEClass = null;
        _this.EParameterEClass = null;
        _this.EReferenceEClass = null;
        _this.EStructuralFeatureEClass = null;
        _this.ETypedElementEClass = null;
        _this.EStringToStringMapEntryEClass = null;
        _this.EGenericTypeEClass = null;
        _this.ETypeParameterEClass = null;
        _this.EBigDecimalEDataType = null;
        _this.EBigIntegerEDataType = null;
        _this.EBooleanEDataType = null;
        _this.EBooleanObjectEDataType = null;
        _this.EByteEDataType = null;
        _this.EByteArrayEDataType = null;
        _this.EByteObjectEDataType = null;
        _this.ECharEDataType = null;
        _this.ECharacterObjectEDataType = null;
        _this.EDateEDataType = null;
        _this.EDiagnosticChainEDataType = null;
        _this.EDoubleEDataType = null;
        _this.EDoubleObjectEDataType = null;
        _this.EEListEDataType = null;
        _this.EEnumeratorEDataType = null;
        _this.EFeatureMapEDataType = null;
        _this.EFeatureMapEntryEDataType = null;
        _this.EFloatEDataType = null;
        _this.EFloatObjectEDataType = null;
        _this.EIntEDataType = null;
        _this.EIntegerObjectEDataType = null;
        _this.EJavaClassEDataType = null;
        _this.EJavaObjectEDataType = null;
        _this.ELongEDataType = null;
        _this.ELongObjectEDataType = null;
        _this.EMapEDataType = null;
        _this.EResourceEDataType = null;
        _this.EResourceSetEDataType = null;
        _this.EShortEDataType = null;
        _this.EShortObjectEDataType = null;
        _this.EStringEDataType = null;
        _this.ETreeIteratorEDataType = null;
        _this.EInvocationTargetExceptionEDataType = null;
        _this.getEModelElement = function () { return _this.EModelElementEClass; };
        _this.getEModelElement_EAnnotations = function () { return _this.EModelElementEClass.eStructuralFeatures.at(0); };
        _this.getEModelElement__GetEAnnotation__Source = function () { return _this.EModelElementEClass.eOperations.at(0); };
        _this.getENamedElement = function () { return _this.ENamedElementEClass; };
        _this.getENamedElement_Name = function () { return _this.ENamedElementEClass.eStructuralFeatures.at(0); };
        _this.getETypedElement = function () { return _this.ETypedElementEClass; };
        _this.getETypedElement_Ordered = function () { return _this.ETypedElementEClass.eStructuralFeatures.at(0); };
        _this.getETypedElement_Unique = function () { return _this.ETypedElementEClass.eStructuralFeatures.at(1); };
        _this.getETypedElement_LowerBound = function () { return _this.ETypedElementEClass.eStructuralFeatures.at(2); };
        _this.getETypedElement_UpperBound = function () { return _this.ETypedElementEClass.eStructuralFeatures.at(3); };
        _this.getETypedElement_Many = function () { return _this.ETypedElementEClass.eStructuralFeatures.at(4); };
        _this.getETypedElement_Required = function () { return _this.ETypedElementEClass.eStructuralFeatures.at(5); };
        _this.getETypedElement_EType = function () { return _this.ETypedElementEClass.eStructuralFeatures.at(6); };
        _this.getETypedElement_EGenericType = function () { return _this.ETypedElementEClass.eStructuralFeatures.at(7); };
        _this.getEStructuralFeature = function () { return _this.EStructuralFeatureEClass; };
        _this.getEStructuralFeature_Changeable = function () { return _this.EStructuralFeatureEClass.eStructuralFeatures.at(0); };
        _this.getEStructuralFeature_Volatile = function () { return _this.EStructuralFeatureEClass.eStructuralFeatures.at(1); };
        _this.getEStructuralFeature_Transient = function () { return _this.EStructuralFeatureEClass.eStructuralFeatures.at(2); };
        _this.getEStructuralFeature_DefaultValueLiteral = function () { return _this.EStructuralFeatureEClass.eStructuralFeatures.at(3); };
        _this.getEStructuralFeature_DefaultValue = function () { return _this.EStructuralFeatureEClass.eStructuralFeatures.at(4); };
        _this.getEStructuralFeature_Unsettable = function () { return _this.EStructuralFeatureEClass.eStructuralFeatures.at(5); };
        _this.getEStructuralFeature_Derived = function () { return _this.EStructuralFeatureEClass.eStructuralFeatures.at(6); };
        _this.getEStructuralFeature_EContainingClass = function () { return _this.EStructuralFeatureEClass.eStructuralFeatures.at(7); };
        _this.getEStructuralFeature__GetFeatureID__ = function () { return _this.EStructuralFeatureEClass.eOperations.at(0); };
        _this.getEStructuralFeature__GetContainerClass__ = function () { return _this.EStructuralFeatureEClass.eOperations.at(1); };
        _this.getEAttribute = function () { return _this.EAttributeEClass; };
        _this.getEAttribute_ID = function () { return _this.EAttributeEClass.eStructuralFeatures.at(0); };
        _this.getEAttribute_EAttributeType = function () { return _this.EAttributeEClass.eStructuralFeatures.at(1); };
        _this.getEAnnotation_ = function () { return _this.EAnnotationEClass; };
        _this.getEAnnotation_Source = function () { return _this.EAnnotationEClass.eStructuralFeatures.at(0); };
        _this.getEAnnotation_Details = function () { return _this.EAnnotationEClass.eStructuralFeatures.at(1); };
        _this.getEAnnotation_EModelElement = function () { return _this.EAnnotationEClass.eStructuralFeatures.at(2); };
        _this.getEAnnotation_Contents = function () { return _this.EAnnotationEClass.eStructuralFeatures.at(3); };
        _this.getEAnnotation_References = function () { return _this.EAnnotationEClass.eStructuralFeatures.at(4); };
        _this.getEClassifier_ = function () { return _this.EClassifierEClass; };
        _this.getEClassifier_InstanceClassName = function () { return _this.EClassifierEClass.eStructuralFeatures.at(0); };
        _this.getEClassifier_InstanceClass = function () { return _this.EClassifierEClass.eStructuralFeatures.at(1); };
        _this.getEClassifier_DefaultValue = function () { return _this.EClassifierEClass.eStructuralFeatures.at(2); };
        _this.getEClassifier_InstanceTypeName = function () { return _this.EClassifierEClass.eStructuralFeatures.at(3); };
        _this.getEClassifier_EPackage = function () { return _this.EClassifierEClass.eStructuralFeatures.at(4); };
        _this.getEClassifier_ETypeParameters = function () { return _this.EClassifierEClass.eStructuralFeatures.at(5); };
        _this.getEClassifier__IsInstance__Object = function () { return _this.EClassifierEClass.eOperations.at(0); };
        _this.getEClassifier__GetClassifierID__ = function () { return _this.EClassifierEClass.eOperations.at(1); };
        _this.getEClass = function () { return _this.EClassEClass; };
        _this.getEClass_Abstract = function () { return _this.EClassEClass.eStructuralFeatures.at(0); };
        _this.getEClass_Interface = function () { return _this.EClassEClass.eStructuralFeatures.at(1); };
        _this.getEClass_ESuperTypes = function () { return _this.EClassEClass.eStructuralFeatures.at(2); };
        _this.getEClass_EOperations = function () { return _this.EClassEClass.eStructuralFeatures.at(3); };
        _this.getEClass_EAllAttributes = function () { return _this.EClassEClass.eStructuralFeatures.at(4); };
        _this.getEClass_EAllReferences = function () { return _this.EClassEClass.eStructuralFeatures.at(5); };
        _this.getEClass_EReferences = function () { return _this.EClassEClass.eStructuralFeatures.at(6); };
        _this.getEClass_EAttributes = function () { return _this.EClassEClass.eStructuralFeatures.at(7); };
        _this.getEClass_EAllContainments = function () { return _this.EClassEClass.eStructuralFeatures.at(8); };
        _this.getEClass_EAllOperations = function () { return _this.EClassEClass.eStructuralFeatures.at(9); };
        _this.getEClass_EAllStructuralFeatures = function () { return _this.EClassEClass.eStructuralFeatures.at(10); };
        _this.getEClass_EAllSuperTypes = function () { return _this.EClassEClass.eStructuralFeatures.at(11); };
        _this.getEClass_EIDAttribute = function () { return _this.EClassEClass.eStructuralFeatures.at(12); };
        _this.getEClass_EStructuralFeatures = function () { return _this.EClassEClass.eStructuralFeatures.at(13); };
        _this.getEClass_EGenericSuperTypes = function () { return _this.EClassEClass.eStructuralFeatures.at(14); };
        _this.getEClass_EAllGenericSuperTypes = function () { return _this.EClassEClass.eStructuralFeatures.at(15); };
        _this.getEClass__IsSuperTypeOf__SomeClass = function () { return _this.EClassEClass.eOperations.at(0); };
        _this.getEClass__GetFeatureCount__ = function () { return _this.EClassEClass.eOperations.at(1); };
        _this.getEClass__GetEStructuralFeature__FeatureID = function () { return _this.EClassEClass.eOperations.at(2); };
        _this.getEClass__GetFeatureID__Feature = function () { return _this.EClassEClass.eOperations.at(3); };
        _this.getEClass__GetEStructuralFeature__FeatureName = function () { return _this.EClassEClass.eOperations.at(4); };
        _this.getEClass__GetOperationCount__ = function () { return _this.EClassEClass.eOperations.at(5); };
        _this.getEClass__GetEOperation__OperationID = function () { return _this.EClassEClass.eOperations.at(6); };
        _this.getEClass__GetOperationID__Operation = function () { return _this.EClassEClass.eOperations.at(7); };
        _this.getEClass__GetOverride__Operation = function () { return _this.EClassEClass.eOperations.at(8); };
        _this.getEClass__GetFeatureType__Feature = function () { return _this.EClassEClass.eOperations.at(9); };
        _this.getEDataType = function () { return _this.EDataTypeEClass; };
        _this.getEDataType_Serializable = function () { return _this.EDataTypeEClass.eStructuralFeatures.at(0); };
        _this.getEEnum = function () { return _this.EEnumEClass; };
        _this.getEEnum_ELiterals = function () { return _this.EEnumEClass.eStructuralFeatures.at(0); };
        _this.getEEnum__GetEEnumLiteral__Name = function () { return _this.EEnumEClass.eOperations.at(0); };
        _this.getEEnum__GetEEnumLiteral__Value = function () { return _this.EEnumEClass.eOperations.at(1); };
        _this.getEEnum__GetEEnumLiteralByLiteral__Literal = function () { return _this.EEnumEClass.eOperations.at(2); };
        _this.getEEnumLiteral = function () { return _this.EEnumLiteralEClass; };
        _this.getEEnumLiteral_Value = function () { return _this.EEnumLiteralEClass.eStructuralFeatures.at(0); };
        _this.getEEnumLiteral_Instance = function () { return _this.EEnumLiteralEClass.eStructuralFeatures.at(1); };
        _this.getEEnumLiteral_Literal = function () { return _this.EEnumLiteralEClass.eStructuralFeatures.at(2); };
        _this.getEEnumLiteral_EEnum = function () { return _this.EEnumLiteralEClass.eStructuralFeatures.at(3); };
        _this.getEFactory = function () { return _this.EFactoryEClass; };
        _this.getEFactory_EPackage = function () { return _this.EFactoryEClass.eStructuralFeatures.at(0); };
        _this.getEFactory__Create__EClass = function () { return _this.EFactoryEClass.eOperations.at(0); };
        _this.getEFactory__CreateFromString__EDataType__LiteralValue = function () { return _this.EFactoryEClass.eOperations.at(1); };
        _this.getEFactory__ConvertToString__EDataType__InstanceValue = function () { return _this.EFactoryEClass.eOperations.at(2); };
        _this.getEObject = function () { return _this.EObjectEClass; };
        _this.getEObject__EClass__ = function () { return _this.EObjectEClass.eOperations.at(0); };
        _this.getEObject__EIsProxy__ = function () { return _this.EObjectEClass.eOperations.at(1); };
        _this.getEObject__EResource__ = function () { return _this.EObjectEClass.eOperations.at(2); };
        _this.getEObject__EContainer__ = function () { return _this.EObjectEClass.eOperations.at(3); };
        _this.getEObject__EContainingFeature__ = function () { return _this.EObjectEClass.eOperations.at(4); };
        _this.getEObject__EContainmentFeature__ = function () { return _this.EObjectEClass.eOperations.at(5); };
        _this.getEObject__EContents__ = function () { return _this.EObjectEClass.eOperations.at(6); };
        _this.getEObject__EAllContents__ = function () { return _this.EObjectEClass.eOperations.at(7); };
        _this.getEObject__ECrossReferences__ = function () { return _this.EObjectEClass.eOperations.at(8); };
        _this.getEObject__EGet__Feature = function () { return _this.EObjectEClass.eOperations.at(9); };
        _this.getEObject__EGet__Feature__Resolve = function () { return _this.EObjectEClass.eOperations.at(10); };
        _this.getEObject__ESet__Feature__NewValue = function () { return _this.EObjectEClass.eOperations.at(11); };
        _this.getEObject__EIsSet__Feature = function () { return _this.EObjectEClass.eOperations.at(12); };
        _this.getEObject__EUnset__Feature = function () { return _this.EObjectEClass.eOperations.at(13); };
        _this.getEObject__EInvoke__Operation__Arguments = function () { return _this.EObjectEClass.eOperations.at(14); };
        _this.getEOperation = function () { return _this.EOperationEClass; };
        _this.getEOperation_EContainingClass = function () { return _this.EOperationEClass.eStructuralFeatures.at(0); };
        _this.getEOperation_ETypeParameters = function () { return _this.EOperationEClass.eStructuralFeatures.at(1); };
        _this.getEOperation_EParameters = function () { return _this.EOperationEClass.eStructuralFeatures.at(2); };
        _this.getEOperation_EExceptions = function () { return _this.EOperationEClass.eStructuralFeatures.at(3); };
        _this.getEOperation_EGenericExceptions = function () { return _this.EOperationEClass.eStructuralFeatures.at(4); };
        _this.getEOperation__GetOperationID__ = function () { return _this.EOperationEClass.eOperations.at(0); };
        _this.getEOperation__IsOverrideOf__SomeOperation = function () { return _this.EOperationEClass.eOperations.at(1); };
        _this.getEPackage = function () { return _this.EPackageEClass; };
        _this.getEPackage_NsURI = function () { return _this.EPackageEClass.eStructuralFeatures.at(0); };
        _this.getEPackage_NsPrefix = function () { return _this.EPackageEClass.eStructuralFeatures.at(1); };
        _this.getEPackage_EFactoryInstance = function () { return _this.EPackageEClass.eStructuralFeatures.at(2); };
        _this.getEPackage_EClassifiers = function () { return _this.EPackageEClass.eStructuralFeatures.at(3); };
        _this.getEPackage_ESubpackages = function () { return _this.EPackageEClass.eStructuralFeatures.at(4); };
        _this.getEPackage_ESuperPackage = function () { return _this.EPackageEClass.eStructuralFeatures.at(5); };
        _this.getEPackage__GetEClassifier__Name = function () { return _this.EPackageEClass.eOperations.at(0); };
        _this.getEParameter = function () { return _this.EParameterEClass; };
        _this.getEParameter_EOperation = function () { return _this.EParameterEClass.eStructuralFeatures.at(0); };
        _this.getEReference = function () { return _this.EReferenceEClass; };
        _this.getEReference_Containment = function () { return _this.EReferenceEClass.eStructuralFeatures.at(0); };
        _this.getEReference_Container = function () { return _this.EReferenceEClass.eStructuralFeatures.at(1); };
        _this.getEReference_ResolveProxies = function () { return _this.EReferenceEClass.eStructuralFeatures.at(2); };
        _this.getEReference_EOpposite = function () { return _this.EReferenceEClass.eStructuralFeatures.at(3); };
        _this.getEReference_EReferenceType = function () { return _this.EReferenceEClass.eStructuralFeatures.at(4); };
        _this.getEReference_EKeys = function () { return _this.EReferenceEClass.eStructuralFeatures.at(5); };
        _this.getEStringToStringMapEntry = function () { return _this.EStringToStringMapEntryEClass; };
        _this.getEStringToStringMapEntry_Key = function () { return _this.EStringToStringMapEntryEClass.eStructuralFeatures.at(0); };
        _this.getEStringToStringMapEntry_Value = function () { return _this.EStringToStringMapEntryEClass.eStructuralFeatures.at(1); };
        _this.getEGenericType = function () { return _this.EGenericTypeEClass; };
        _this.getEGenericType_EUpperBound = function () { return _this.EGenericTypeEClass.eStructuralFeatures.at(0); };
        _this.getEGenericType_ETypeArguments = function () { return _this.EGenericTypeEClass.eStructuralFeatures.at(1); };
        _this.getEGenericType_ERawType = function () { return _this.EGenericTypeEClass.eStructuralFeatures.at(2); };
        _this.getEGenericType_ELowerBound = function () { return _this.EGenericTypeEClass.eStructuralFeatures.at(3); };
        _this.getEGenericType_ETypeParameter = function () { return _this.EGenericTypeEClass.eStructuralFeatures.at(4); };
        _this.getEGenericType_EClassifier = function () { return _this.EGenericTypeEClass.eStructuralFeatures.at(5); };
        _this.getEGenericType__IsInstance__Object = function () { return _this.EGenericTypeEClass.eOperations.at(0); };
        _this.getETypeParameter = function () { return _this.ETypeParameterEClass; };
        _this.getETypeParameter_EBounds = function () { return _this.ETypeParameterEClass.eStructuralFeatures.at(0); };
        _this.getEBigDecimal = function () { return _this.EBigDecimalEDataType; };
        _this.getEBigInteger = function () { return _this.EBigIntegerEDataType; };
        _this.getEBoolean = function () { return _this.EBooleanEDataType; };
        _this.getEBooleanObject = function () { return _this.EBooleanObjectEDataType; };
        _this.getEByte = function () { return _this.EByteEDataType; };
        _this.getEByteArray = function () { return _this.EByteArrayEDataType; };
        _this.getEByteObject = function () { return _this.EByteObjectEDataType; };
        _this.getEChar = function () { return _this.ECharEDataType; };
        _this.getECharacterObject = function () { return _this.ECharacterObjectEDataType; };
        _this.getEDate = function () { return _this.EDateEDataType; };
        _this.getEDiagnosticChain = function () { return _this.EDiagnosticChainEDataType; };
        _this.getEDouble = function () { return _this.EDoubleEDataType; };
        _this.getEDoubleObject = function () { return _this.EDoubleObjectEDataType; };
        _this.getEEList = function () { return _this.EEListEDataType; };
        _this.getEEnumerator = function () { return _this.EEnumeratorEDataType; };
        _this.getEFeatureMap = function () { return _this.EFeatureMapEDataType; };
        _this.getEFeatureMapEntry = function () { return _this.EFeatureMapEntryEDataType; };
        _this.getEFloat = function () { return _this.EFloatEDataType; };
        _this.getEFloatObject = function () { return _this.EFloatObjectEDataType; };
        _this.getEInt = function () { return _this.EIntEDataType; };
        _this.getEIntegerObject = function () { return _this.EIntegerObjectEDataType; };
        _this.getEJavaClass = function () { return _this.EJavaClassEDataType; };
        _this.getEJavaObject = function () { return _this.EJavaObjectEDataType; };
        _this.getELong = function () { return _this.ELongEDataType; };
        _this.getELongObject = function () { return _this.ELongObjectEDataType; };
        _this.getEMap = function () { return _this.EMapEDataType; };
        _this.getEResource = function () { return _this.EResourceEDataType; };
        _this.getEResourceSet = function () { return _this.EResourceSetEDataType; };
        _this.getEShort = function () { return _this.EShortEDataType; };
        _this.getEShortObject = function () { return _this.EShortObjectEDataType; };
        _this.getEString = function () { return _this.EStringEDataType; };
        _this.getETreeIterator = function () { return _this.ETreeIteratorEDataType; };
        _this.getEInvocationTargetException = function () { return _this.EInvocationTargetExceptionEDataType; };
        return _this;
        /*
        public static Literals = {
            EATTRIBUTE: EcorePackageImpl.eINSTANCE.getEAttribute(),
            
            EANNOTATION: EcorePackageImpl.eINSTANCE.getEAnnotation_(),
            
            ECLASS: EcorePackageImpl.eINSTANCE.getEClass(),
            
            ECLASSIFIER: EcorePackageImpl.eINSTANCE.getEClassifier_(),
            
            EDATATYPE: EcorePackageImpl.eINSTANCE.getEDataType(),
            
            EENUM: EcorePackageImpl.eINSTANCE.getEEnum(),
            
            EENUMLITERAL: EcorePackageImpl.eINSTANCE.getEEnumLiteral(),
            
            EFACTORY: EcorePackageImpl.eINSTANCE.getEFactory(),
            
            EMODELELEMENT: EcorePackageImpl.eINSTANCE.getEModelElement(),
            
            ENAMEDELEMENT: EcorePackageImpl.eINSTANCE.getENamedElement(),
            
            EOBJECT: EcorePackageImpl.eINSTANCE.getEObject(),
            
            EOPERATION: EcorePackageImpl.eINSTANCE.getEOperation(),
            
            EPACKAGE: EcorePackageImpl.eINSTANCE.getEPackage(),
            
            EPARAMETER: EcorePackageImpl.eINSTANCE.getEParameter(),
            
            EREFERENCE: EcorePackageImpl.eINSTANCE.getEReference(),
            
            ESTRUCTURALFEATURE: EcorePackageImpl.eINSTANCE.getEStructuralFeature(),
            
            ETYPEDELEMENT: EcorePackageImpl.eINSTANCE.getETypedElement(),
            
            EBIGDECIMAL: EcorePackageImpl.eINSTANCE.getEBigDecimal(),
            EBIGINTEGER: EcorePackageImpl.eINSTANCE.getEBigInteger(),
            EBOOLEAN: EcorePackageImpl.eINSTANCE.getEBoolean(),
            EBOOLEANOBJECT: EcorePackageImpl.eINSTANCE.getEBooleanObject(),
            EBYTE: EcorePackageImpl.eINSTANCE.getEByte(),
            EBYTEARRAY: EcorePackageImpl.eINSTANCE.getEByteArray(),
            EBYTEOBJECT: EcorePackageImpl.eINSTANCE.getEByteObject(),
            ECHAR: EcorePackageImpl.eINSTANCE.getEChar(),
            ECHARACTEROBJECT: EcorePackageImpl.eINSTANCE.getECharacterObject(),
            EDATE: EcorePackageImpl.eINSTANCE.getEDate(),
            EDIAGNOSTICCHAIN: EcorePackageImpl.eINSTANCE.getEDiagnosticChain(),
            EDOUBLE: EcorePackageImpl.eINSTANCE.getEDouble(),
            EDOUBLEOBJECT: EcorePackageImpl.eINSTANCE.getEDoubleObject(),
            EELIST: EcorePackageImpl.eINSTANCE.getEEList(),
            EENUMERATOR: EcorePackageImpl.eINSTANCE.getEEnumerator(),
            EFEATUREMAP: EcorePackageImpl.eINSTANCE.getEFeatureMap(),
            EFEATUREMAPENTRY: EcorePackageImpl.eINSTANCE.getEFeatureMapEntry(),
            EFLOAT: EcorePackageImpl.eINSTANCE.getEFloat(),
            EFLOATOBJECT: EcorePackageImpl.eINSTANCE.getEFloatObject(),
            EINT: EcorePackageImpl.eINSTANCE.getEInt(),
            EINTEGEROBJECT: EcorePackageImpl.eINSTANCE.getEIntegerObject(),
            EJAVACLASS: EcorePackageImpl.eINSTANCE.getEJavaClass(),
            EJAVAOBJECT: EcorePackageImpl.eINSTANCE.getEJavaObject(),
            ELONG: EcorePackageImpl.eINSTANCE.getELong(),
            ELONGOBJECT: EcorePackageImpl.eINSTANCE.getELongObject(),
            EMAP: EcorePackageImpl.eINSTANCE.getEMap(),
            ERESOURCE: EcorePackageImpl.eINSTANCE.getEResource(),
            ERESOURCESET: EcorePackageImpl.eINSTANCE.getEResourceSet(),
            ESHORT: EcorePackageImpl.eINSTANCE.getEShort(),
            ESHORTOBJECT: EcorePackageImpl.eINSTANCE.getEShortObject(),
            ESTRING: EcorePackageImpl.eINSTANCE.getEString(),
            ESTRINGTOSTRINGMAPENTRY: EcorePackageImpl.eINSTANCE.getEStringToStringMapEntry(),
            
            ETREEITERATOR: EcorePackageImpl.eINSTANCE.getETreeIterator(),
            EGENERICTYPE: EcorePackageImpl.eINSTANCE.getEGenericType(),
            
            ETYPEPARAMETER: EcorePackageImpl.eINSTANCE.getETypeParameter(),
            
            EINVOCATIONTARGETEXCEPTION: EcorePackageImpl.eINSTANCE.getEInvocationTargetException(),
            EMODELELEMENT_EANNOTATIONS: EcorePackageImpl.eINSTANCE.getEModelElement_EAnnotations(),
            ENAMEDELEMENT_NAME: EcorePackageImpl.eINSTANCE.getENamedElement_Name(),
            ETYPEDELEMENT_ORDERED: EcorePackageImpl.eINSTANCE.getETypedElement_Ordered(),
            ETYPEDELEMENT_UNIQUE: EcorePackageImpl.eINSTANCE.getETypedElement_Unique(),
            ETYPEDELEMENT_LOWERBOUND: EcorePackageImpl.eINSTANCE.getETypedElement_LowerBound(),
            ETYPEDELEMENT_UPPERBOUND: EcorePackageImpl.eINSTANCE.getETypedElement_UpperBound(),
            ETYPEDELEMENT_MANY: EcorePackageImpl.eINSTANCE.getETypedElement_Many(),
            ETYPEDELEMENT_REQUIRED: EcorePackageImpl.eINSTANCE.getETypedElement_Required(),
            ETYPEDELEMENT_ETYPE: EcorePackageImpl.eINSTANCE.getETypedElement_EType(),
            ETYPEDELEMENT_EGENERICTYPE: EcorePackageImpl.eINSTANCE.getETypedElement_EGenericType(),
            ESTRUCTURALFEATURE_CHANGEABLE: EcorePackageImpl.eINSTANCE.getEStructuralFeature_Changeable(),
            ESTRUCTURALFEATURE_VOLATILE: EcorePackageImpl.eINSTANCE.getEStructuralFeature_Volatile(),
            ESTRUCTURALFEATURE_TRANSIENT: EcorePackageImpl.eINSTANCE.getEStructuralFeature_Transient(),
            ESTRUCTURALFEATURE_DEFAULTVALUELITERAL: EcorePackageImpl.eINSTANCE.getEStructuralFeature_DefaultValueLiteral(),
            ESTRUCTURALFEATURE_DEFAULTVALUE: EcorePackageImpl.eINSTANCE.getEStructuralFeature_DefaultValue(),
            ESTRUCTURALFEATURE_UNSETTABLE: EcorePackageImpl.eINSTANCE.getEStructuralFeature_Unsettable(),
            ESTRUCTURALFEATURE_DERIVED: EcorePackageImpl.eINSTANCE.getEStructuralFeature_Derived(),
            ESTRUCTURALFEATURE_ECONTAININGCLASS: EcorePackageImpl.eINSTANCE.getEStructuralFeature_EContainingClass(),
            EATTRIBUTE_ID: EcorePackageImpl.eINSTANCE.getEAttribute_ID(),
            EATTRIBUTE_EATTRIBUTETYPE: EcorePackageImpl.eINSTANCE.getEAttribute_EAttributeType(),
            EANNOTATION_SOURCE: EcorePackageImpl.eINSTANCE.getEAnnotation_Source(),
            EANNOTATION_DETAILS: EcorePackageImpl.eINSTANCE.getEAnnotation_Details(),
            EANNOTATION_EMODELELEMENT: EcorePackageImpl.eINSTANCE.getEAnnotation_EModelElement(),
            EANNOTATION_CONTENTS: EcorePackageImpl.eINSTANCE.getEAnnotation_Contents(),
            EANNOTATION_REFERENCES: EcorePackageImpl.eINSTANCE.getEAnnotation_References(),
            ECLASSIFIER_INSTANCECLASSNAME: EcorePackageImpl.eINSTANCE.getEClassifier_InstanceClassName(),
            ECLASSIFIER_INSTANCECLASS: EcorePackageImpl.eINSTANCE.getEClassifier_InstanceClass(),
            ECLASSIFIER_DEFAULTVALUE: EcorePackageImpl.eINSTANCE.getEClassifier_DefaultValue(),
            ECLASSIFIER_INSTANCETYPENAME: EcorePackageImpl.eINSTANCE.getEClassifier_InstanceTypeName(),
            ECLASSIFIER_EPACKAGE: EcorePackageImpl.eINSTANCE.getEClassifier_EPackage(),
            ECLASSIFIER_ETYPEPARAMETERS: EcorePackageImpl.eINSTANCE.getEClassifier_ETypeParameters(),
            ECLASS_ABSTRACT: EcorePackageImpl.eINSTANCE.getEClass_Abstract(),
            ECLASS_INTERFACE: EcorePackageImpl.eINSTANCE.getEClass_Interface(),
            ECLASS_ESUPERTYPES: EcorePackageImpl.eINSTANCE.getEClass_ESuperTypes(),
            ECLASS_EOPERATIONS: EcorePackageImpl.eINSTANCE.getEClass_EOperations(),
            ECLASS_EALLATTRIBUTES: EcorePackageImpl.eINSTANCE.getEClass_EAllAttributes(),
            ECLASS_EALLREFERENCES: EcorePackageImpl.eINSTANCE.getEClass_EAllReferences(),
            ECLASS_EREFERENCES: EcorePackageImpl.eINSTANCE.getEClass_EReferences(),
            ECLASS_EATTRIBUTES: EcorePackageImpl.eINSTANCE.getEClass_EAttributes(),
            ECLASS_EALLCONTAINMENTS: EcorePackageImpl.eINSTANCE.getEClass_EAllContainments(),
            ECLASS_EALLOPERATIONS: EcorePackageImpl.eINSTANCE.getEClass_EAllOperations(),
            ECLASS_EALLSTRUCTURALFEATURES: EcorePackageImpl.eINSTANCE.getEClass_EAllStructuralFeatures(),
            ECLASS_EALLSUPERTYPES: EcorePackageImpl.eINSTANCE.getEClass_EAllSuperTypes(),
            ECLASS_EIDATTRIBUTE: EcorePackageImpl.eINSTANCE.getEClass_EIDAttribute(),
            ECLASS_ESTRUCTURALFEATURES: EcorePackageImpl.eINSTANCE.getEClass_EStructuralFeatures(),
            ECLASS_EGENERICSUPERTYPES: EcorePackageImpl.eINSTANCE.getEClass_EGenericSuperTypes(),
            ECLASS_EALLGENERICSUPERTYPES: EcorePackageImpl.eINSTANCE.getEClass_EAllGenericSuperTypes(),
            EDATATYPE_SERIALIZABLE: EcorePackageImpl.eINSTANCE.getEDataType_Serializable(),
            EENUM_ELITERALS: EcorePackageImpl.eINSTANCE.getEEnum_ELiterals(),
            EENUMLITERAL_VALUE: EcorePackageImpl.eINSTANCE.getEEnumLiteral_Value(),
            EENUMLITERAL_INSTANCE: EcorePackageImpl.eINSTANCE.getEEnumLiteral_Instance(),
            EENUMLITERAL_LITERAL: EcorePackageImpl.eINSTANCE.getEEnumLiteral_Literal(),
            EENUMLITERAL_EENUM: EcorePackageImpl.eINSTANCE.getEEnumLiteral_EEnum(),
            EFACTORY_EPACKAGE: EcorePackageImpl.eINSTANCE.getEFactory_EPackage(),
            EOPERATION_ECONTAININGCLASS: EcorePackageImpl.eINSTANCE.getEOperation_EContainingClass(),
            EOPERATION_ETYPEPARAMETERS: EcorePackageImpl.eINSTANCE.getEOperation_ETypeParameters(),
            EOPERATION_EPARAMETERS: EcorePackageImpl.eINSTANCE.getEOperation_EParameters(),
            EOPERATION_EEXCEPTIONS: EcorePackageImpl.eINSTANCE.getEOperation_EExceptions(),
            EOPERATION_EGENERICEXCEPTIONS: EcorePackageImpl.eINSTANCE.getEOperation_EGenericExceptions(),
            EPACKAGE_NSURI: EcorePackageImpl.eINSTANCE.getEPackage_NsURI(),
            EPACKAGE_NSPREFIX: EcorePackageImpl.eINSTANCE.getEPackage_NsPrefix(),
            EPACKAGE_EFACTORYINSTANCE: EcorePackageImpl.eINSTANCE.getEPackage_EFactoryInstance(),
            EPACKAGE_ECLASSIFIERS: EcorePackageImpl.eINSTANCE.getEPackage_EClassifiers(),
            EPACKAGE_ESUBPACKAGES: EcorePackageImpl.eINSTANCE.getEPackage_ESubpackages(),
            EPACKAGE_ESUPERPACKAGE: EcorePackageImpl.eINSTANCE.getEPackage_ESuperPackage(),
            EPARAMETER_EOPERATION: EcorePackageImpl.eINSTANCE.getEParameter_EOperation(),
            EREFERENCE_CONTAINMENT: EcorePackageImpl.eINSTANCE.getEReference_Containment(),
            EREFERENCE_CONTAINER: EcorePackageImpl.eINSTANCE.getEReference_Container(),
            EREFERENCE_RESOLVEPROXIES: EcorePackageImpl.eINSTANCE.getEReference_ResolveProxies(),
            EREFERENCE_EOPPOSITE: EcorePackageImpl.eINSTANCE.getEReference_EOpposite(),
            EREFERENCE_EREFERENCETYPE: EcorePackageImpl.eINSTANCE.getEReference_EReferenceType(),
            EREFERENCE_EKEYS: EcorePackageImpl.eINSTANCE.getEReference_EKeys(),
            ESTRINGTOSTRINGMAPENTRY_KEY: EcorePackageImpl.eINSTANCE.getEStringToStringMapEntry_Key(),
            ESTRINGTOSTRINGMAPENTRY_VALUE: EcorePackageImpl.eINSTANCE.getEStringToStringMapEntry_Value(),
            EGENERICTYPE_EUPPERBOUND: EcorePackageImpl.eINSTANCE.getEGenericType_EUpperBound(),
            EGENERICTYPE_ETYPEARGUMENTS: EcorePackageImpl.eINSTANCE.getEGenericType_ETypeArguments(),
            EGENERICTYPE_ERAWTYPE: EcorePackageImpl.eINSTANCE.getEGenericType_ERawType(),
            EGENERICTYPE_ELOWERBOUND: EcorePackageImpl.eINSTANCE.getEGenericType_ELowerBound(),
            EGENERICTYPE_ETYPEPARAMETER: EcorePackageImpl.eINSTANCE.getEGenericType_ETypeParameter(),
            EGENERICTYPE_ECLASSIFIER: EcorePackageImpl.eINSTANCE.getEGenericType_EClassifier(),
            ETYPEPARAMETER_EBOUNDS: EcorePackageImpl.eINSTANCE.getETypeParameter_EBounds()
        }
        */
    }
    /*
    constructor(){
        //no private constructors in TypeScript
        super(EcorePackageImpl.eNS_URI, EcoreFactoryImpl.eINSTANCE as any as EFactory);
    }
    */
    EcorePackageImpl.init = function () {
        // Obtain or create and register package
        var theEcorePackage = new EcorePackageImpl();
        theEcorePackage.ecorePackage = theEcorePackage;
        theEcorePackage.ecoreFactory = _EcoreFactoryImpl__WEBPACK_IMPORTED_MODULE_4__["EcoreFactoryImpl"].eINSTANCE;
        // Create package meta-data objects
        theEcorePackage.createPackageContents();
        // Initialize created meta-data
        theEcorePackage.initializePackageContents();
        return theEcorePackage;
    };
    EcorePackageImpl.eNAME = "ecore";
    EcorePackageImpl.eNS_URI = "http://www.eclipse.org/emf/2002/Ecore";
    EcorePackageImpl.eNS_PREFIX = "ecore";
    EcorePackageImpl.EMODELELEMENT = 8;
    EcorePackageImpl.EMODELELEMENT_FEATURE_COUNT = 1;
    EcorePackageImpl.EMODELELEMENT_OPERATION_COUNT = 1;
    EcorePackageImpl.EMODELELEMENT_EANNOTATIONS = 0;
    EcorePackageImpl.EMODELELEMENT___GETEANNOTATION__SOURCE = 0;
    EcorePackageImpl.ENAMEDELEMENT = 9;
    EcorePackageImpl.ENAMEDELEMENT_FEATURE_COUNT = EcorePackageImpl.EMODELELEMENT_FEATURE_COUNT + 1;
    EcorePackageImpl.ENAMEDELEMENT_OPERATION_COUNT = EcorePackageImpl.EMODELELEMENT_OPERATION_COUNT + 0;
    EcorePackageImpl.ENAMEDELEMENT_EANNOTATIONS = 0;
    EcorePackageImpl.ENAMEDELEMENT_NAME = 1;
    EcorePackageImpl.ETYPEDELEMENT = 16;
    EcorePackageImpl.ETYPEDELEMENT_FEATURE_COUNT = EcorePackageImpl.ENAMEDELEMENT_FEATURE_COUNT + 8;
    EcorePackageImpl.ETYPEDELEMENT_OPERATION_COUNT = EcorePackageImpl.ENAMEDELEMENT_OPERATION_COUNT + 0;
    EcorePackageImpl.ETYPEDELEMENT_EANNOTATIONS = 0;
    EcorePackageImpl.ETYPEDELEMENT_NAME = 1;
    EcorePackageImpl.ETYPEDELEMENT_ORDERED = 2;
    EcorePackageImpl.ETYPEDELEMENT_UNIQUE = 3;
    EcorePackageImpl.ETYPEDELEMENT_LOWERBOUND = 4;
    EcorePackageImpl.ETYPEDELEMENT_UPPERBOUND = 5;
    EcorePackageImpl.ETYPEDELEMENT_MANY = 6;
    EcorePackageImpl.ETYPEDELEMENT_REQUIRED = 7;
    EcorePackageImpl.ETYPEDELEMENT_ETYPE = 8;
    EcorePackageImpl.ETYPEDELEMENT_EGENERICTYPE = 9;
    EcorePackageImpl.ESTRUCTURALFEATURE = 15;
    EcorePackageImpl.ESTRUCTURALFEATURE_FEATURE_COUNT = EcorePackageImpl.ETYPEDELEMENT_FEATURE_COUNT + 8;
    EcorePackageImpl.ESTRUCTURALFEATURE_OPERATION_COUNT = EcorePackageImpl.ETYPEDELEMENT_OPERATION_COUNT + 2;
    EcorePackageImpl.ESTRUCTURALFEATURE_EANNOTATIONS = 0;
    EcorePackageImpl.ESTRUCTURALFEATURE_NAME = 1;
    EcorePackageImpl.ESTRUCTURALFEATURE_ORDERED = 2;
    EcorePackageImpl.ESTRUCTURALFEATURE_UNIQUE = 3;
    EcorePackageImpl.ESTRUCTURALFEATURE_LOWERBOUND = 4;
    EcorePackageImpl.ESTRUCTURALFEATURE_UPPERBOUND = 5;
    EcorePackageImpl.ESTRUCTURALFEATURE_MANY = 6;
    EcorePackageImpl.ESTRUCTURALFEATURE_REQUIRED = 7;
    EcorePackageImpl.ESTRUCTURALFEATURE_ETYPE = 8;
    EcorePackageImpl.ESTRUCTURALFEATURE_EGENERICTYPE = 9;
    EcorePackageImpl.ESTRUCTURALFEATURE_CHANGEABLE = 10;
    EcorePackageImpl.ESTRUCTURALFEATURE_VOLATILE = 11;
    EcorePackageImpl.ESTRUCTURALFEATURE_TRANSIENT = 12;
    EcorePackageImpl.ESTRUCTURALFEATURE_DEFAULTVALUELITERAL = 13;
    EcorePackageImpl.ESTRUCTURALFEATURE_DEFAULTVALUE = 14;
    EcorePackageImpl.ESTRUCTURALFEATURE_UNSETTABLE = 15;
    EcorePackageImpl.ESTRUCTURALFEATURE_DERIVED = 16;
    EcorePackageImpl.ESTRUCTURALFEATURE_ECONTAININGCLASS = 17;
    EcorePackageImpl.ESTRUCTURALFEATURE___GETFEATUREID = 0;
    EcorePackageImpl.ESTRUCTURALFEATURE___GETCONTAINERCLASS = 1;
    EcorePackageImpl.EATTRIBUTE = 0;
    EcorePackageImpl.EATTRIBUTE_FEATURE_COUNT = EcorePackageImpl.ESTRUCTURALFEATURE_FEATURE_COUNT + 2;
    EcorePackageImpl.EATTRIBUTE_OPERATION_COUNT = EcorePackageImpl.ESTRUCTURALFEATURE_OPERATION_COUNT + 0;
    EcorePackageImpl.EATTRIBUTE_EANNOTATIONS = 0;
    EcorePackageImpl.EATTRIBUTE_NAME = 1;
    EcorePackageImpl.EATTRIBUTE_ORDERED = 2;
    EcorePackageImpl.EATTRIBUTE_UNIQUE = 3;
    EcorePackageImpl.EATTRIBUTE_LOWERBOUND = 4;
    EcorePackageImpl.EATTRIBUTE_UPPERBOUND = 5;
    EcorePackageImpl.EATTRIBUTE_MANY = 6;
    EcorePackageImpl.EATTRIBUTE_REQUIRED = 7;
    EcorePackageImpl.EATTRIBUTE_ETYPE = 8;
    EcorePackageImpl.EATTRIBUTE_EGENERICTYPE = 9;
    EcorePackageImpl.EATTRIBUTE_CHANGEABLE = 10;
    EcorePackageImpl.EATTRIBUTE_VOLATILE = 11;
    EcorePackageImpl.EATTRIBUTE_TRANSIENT = 12;
    EcorePackageImpl.EATTRIBUTE_DEFAULTVALUELITERAL = 13;
    EcorePackageImpl.EATTRIBUTE_DEFAULTVALUE = 14;
    EcorePackageImpl.EATTRIBUTE_UNSETTABLE = 15;
    EcorePackageImpl.EATTRIBUTE_DERIVED = 16;
    EcorePackageImpl.EATTRIBUTE_ECONTAININGCLASS = 17;
    EcorePackageImpl.EATTRIBUTE_ID = 18;
    EcorePackageImpl.EATTRIBUTE_EATTRIBUTETYPE = 19;
    EcorePackageImpl.EANNOTATION = 1;
    EcorePackageImpl.EANNOTATION_FEATURE_COUNT = EcorePackageImpl.EMODELELEMENT_FEATURE_COUNT + 5;
    EcorePackageImpl.EANNOTATION_OPERATION_COUNT = EcorePackageImpl.EMODELELEMENT_OPERATION_COUNT + 0;
    EcorePackageImpl.EANNOTATION_EANNOTATIONS = 0;
    EcorePackageImpl.EANNOTATION_SOURCE = 1;
    EcorePackageImpl.EANNOTATION_DETAILS = 2;
    EcorePackageImpl.EANNOTATION_EMODELELEMENT = 3;
    EcorePackageImpl.EANNOTATION_CONTENTS = 4;
    EcorePackageImpl.EANNOTATION_REFERENCES = 5;
    EcorePackageImpl.ECLASSIFIER = 3;
    EcorePackageImpl.ECLASSIFIER_FEATURE_COUNT = EcorePackageImpl.ENAMEDELEMENT_FEATURE_COUNT + 6;
    EcorePackageImpl.ECLASSIFIER_OPERATION_COUNT = EcorePackageImpl.ENAMEDELEMENT_OPERATION_COUNT + 2;
    EcorePackageImpl.ECLASSIFIER_EANNOTATIONS = 0;
    EcorePackageImpl.ECLASSIFIER_NAME = 1;
    EcorePackageImpl.ECLASSIFIER_INSTANCECLASSNAME = 2;
    EcorePackageImpl.ECLASSIFIER_INSTANCECLASS = 3;
    EcorePackageImpl.ECLASSIFIER_DEFAULTVALUE = 4;
    EcorePackageImpl.ECLASSIFIER_INSTANCETYPENAME = 5;
    EcorePackageImpl.ECLASSIFIER_EPACKAGE = 6;
    EcorePackageImpl.ECLASSIFIER_ETYPEPARAMETERS = 7;
    EcorePackageImpl.ECLASSIFIER___ISINSTANCE__OBJECT = 0;
    EcorePackageImpl.ECLASSIFIER___GETCLASSIFIERID = 1;
    EcorePackageImpl.ECLASS = 2;
    EcorePackageImpl.ECLASS_FEATURE_COUNT = EcorePackageImpl.ECLASSIFIER_FEATURE_COUNT + 16;
    EcorePackageImpl.ECLASS_OPERATION_COUNT = EcorePackageImpl.ECLASSIFIER_OPERATION_COUNT + 10;
    EcorePackageImpl.ECLASS_EANNOTATIONS = 0;
    EcorePackageImpl.ECLASS_NAME = 1;
    EcorePackageImpl.ECLASS_INSTANCECLASSNAME = 2;
    EcorePackageImpl.ECLASS_INSTANCECLASS = 3;
    EcorePackageImpl.ECLASS_DEFAULTVALUE = 4;
    EcorePackageImpl.ECLASS_INSTANCETYPENAME = 5;
    EcorePackageImpl.ECLASS_EPACKAGE = 6;
    EcorePackageImpl.ECLASS_ETYPEPARAMETERS = 7;
    EcorePackageImpl.ECLASS_ABSTRACT = 8;
    EcorePackageImpl.ECLASS_INTERFACE = 9;
    EcorePackageImpl.ECLASS_ESUPERTYPES = 10;
    EcorePackageImpl.ECLASS_EOPERATIONS = 11;
    EcorePackageImpl.ECLASS_EALLATTRIBUTES = 12;
    EcorePackageImpl.ECLASS_EALLREFERENCES = 13;
    EcorePackageImpl.ECLASS_EREFERENCES = 14;
    EcorePackageImpl.ECLASS_EATTRIBUTES = 15;
    EcorePackageImpl.ECLASS_EALLCONTAINMENTS = 16;
    EcorePackageImpl.ECLASS_EALLOPERATIONS = 17;
    EcorePackageImpl.ECLASS_EALLSTRUCTURALFEATURES = 18;
    EcorePackageImpl.ECLASS_EALLSUPERTYPES = 19;
    EcorePackageImpl.ECLASS_EIDATTRIBUTE = 20;
    EcorePackageImpl.ECLASS_ESTRUCTURALFEATURES = 21;
    EcorePackageImpl.ECLASS_EGENERICSUPERTYPES = 22;
    EcorePackageImpl.ECLASS_EALLGENERICSUPERTYPES = 23;
    EcorePackageImpl.ECLASS___ISSUPERTYPEOF__SOMECLASS = 0;
    EcorePackageImpl.ECLASS___GETFEATURECOUNT = 1;
    EcorePackageImpl.ECLASS___GETESTRUCTURALFEATURE__FEATUREID = 2;
    EcorePackageImpl.ECLASS___GETFEATUREID__FEATURE = 3;
    EcorePackageImpl.ECLASS___GETESTRUCTURALFEATURE__FEATURENAME = 4;
    EcorePackageImpl.ECLASS___GETOPERATIONCOUNT = 5;
    EcorePackageImpl.ECLASS___GETEOPERATION__OPERATIONID = 6;
    EcorePackageImpl.ECLASS___GETOPERATIONID__OPERATION = 7;
    EcorePackageImpl.ECLASS___GETOVERRIDE__OPERATION = 8;
    EcorePackageImpl.ECLASS___GETFEATURETYPE__FEATURE = 9;
    EcorePackageImpl.EDATATYPE = 4;
    EcorePackageImpl.EDATATYPE_FEATURE_COUNT = EcorePackageImpl.ECLASSIFIER_FEATURE_COUNT + 1;
    EcorePackageImpl.EDATATYPE_OPERATION_COUNT = EcorePackageImpl.ECLASSIFIER_OPERATION_COUNT + 0;
    EcorePackageImpl.EDATATYPE_EANNOTATIONS = 0;
    EcorePackageImpl.EDATATYPE_NAME = 1;
    EcorePackageImpl.EDATATYPE_INSTANCECLASSNAME = 2;
    EcorePackageImpl.EDATATYPE_INSTANCECLASS = 3;
    EcorePackageImpl.EDATATYPE_DEFAULTVALUE = 4;
    EcorePackageImpl.EDATATYPE_INSTANCETYPENAME = 5;
    EcorePackageImpl.EDATATYPE_EPACKAGE = 6;
    EcorePackageImpl.EDATATYPE_ETYPEPARAMETERS = 7;
    EcorePackageImpl.EDATATYPE_SERIALIZABLE = 8;
    EcorePackageImpl.EENUM = 5;
    EcorePackageImpl.EENUM_FEATURE_COUNT = EcorePackageImpl.EDATATYPE_FEATURE_COUNT + 1;
    EcorePackageImpl.EENUM_OPERATION_COUNT = EcorePackageImpl.EDATATYPE_OPERATION_COUNT + 3;
    EcorePackageImpl.EENUM_EANNOTATIONS = 0;
    EcorePackageImpl.EENUM_NAME = 1;
    EcorePackageImpl.EENUM_INSTANCECLASSNAME = 2;
    EcorePackageImpl.EENUM_INSTANCECLASS = 3;
    EcorePackageImpl.EENUM_DEFAULTVALUE = 4;
    EcorePackageImpl.EENUM_INSTANCETYPENAME = 5;
    EcorePackageImpl.EENUM_EPACKAGE = 6;
    EcorePackageImpl.EENUM_ETYPEPARAMETERS = 7;
    EcorePackageImpl.EENUM_SERIALIZABLE = 8;
    EcorePackageImpl.EENUM_ELITERALS = 9;
    EcorePackageImpl.EENUM___GETEENUMLITERAL__NAME = 0;
    EcorePackageImpl.EENUM___GETEENUMLITERAL__VALUE = 1;
    EcorePackageImpl.EENUM___GETEENUMLITERALBYLITERAL__LITERAL = 2;
    EcorePackageImpl.EENUMLITERAL = 6;
    EcorePackageImpl.EENUMLITERAL_FEATURE_COUNT = EcorePackageImpl.ENAMEDELEMENT_FEATURE_COUNT + 4;
    EcorePackageImpl.EENUMLITERAL_OPERATION_COUNT = EcorePackageImpl.ENAMEDELEMENT_OPERATION_COUNT + 0;
    EcorePackageImpl.EENUMLITERAL_EANNOTATIONS = 0;
    EcorePackageImpl.EENUMLITERAL_NAME = 1;
    EcorePackageImpl.EENUMLITERAL_VALUE = 2;
    EcorePackageImpl.EENUMLITERAL_INSTANCE = 3;
    EcorePackageImpl.EENUMLITERAL_LITERAL = 4;
    EcorePackageImpl.EENUMLITERAL_EENUM = 5;
    EcorePackageImpl.EFACTORY = 7;
    EcorePackageImpl.EFACTORY_FEATURE_COUNT = EcorePackageImpl.EMODELELEMENT_FEATURE_COUNT + 1;
    EcorePackageImpl.EFACTORY_OPERATION_COUNT = EcorePackageImpl.EMODELELEMENT_OPERATION_COUNT + 3;
    EcorePackageImpl.EFACTORY_EANNOTATIONS = 0;
    EcorePackageImpl.EFACTORY_EPACKAGE = 1;
    EcorePackageImpl.EFACTORY___CREATE__ECLASS = 0;
    EcorePackageImpl.EFACTORY___CREATEFROMSTRING__EDATATYPE__LITERALVALUE = 1;
    EcorePackageImpl.EFACTORY___CONVERTTOSTRING__EDATATYPE__INSTANCEVALUE = 2;
    EcorePackageImpl.EOBJECT = 10;
    EcorePackageImpl.EOBJECT_FEATURE_COUNT = 0;
    EcorePackageImpl.EOBJECT_OPERATION_COUNT = 15;
    EcorePackageImpl.EOBJECT___ECLASS = 0;
    EcorePackageImpl.EOBJECT___EISPROXY = 1;
    EcorePackageImpl.EOBJECT___ERESOURCE = 2;
    EcorePackageImpl.EOBJECT___ECONTAINER = 3;
    EcorePackageImpl.EOBJECT___ECONTAININGFEATURE = 4;
    EcorePackageImpl.EOBJECT___ECONTAINMENTFEATURE = 5;
    EcorePackageImpl.EOBJECT___ECONTENTS = 6;
    EcorePackageImpl.EOBJECT___EALLCONTENTS = 7;
    EcorePackageImpl.EOBJECT___ECROSSREFERENCES = 8;
    EcorePackageImpl.EOBJECT___EGET__FEATURE = 9;
    EcorePackageImpl.EOBJECT___EGET__FEATURE__RESOLVE = 10;
    EcorePackageImpl.EOBJECT___ESET__FEATURE__NEWVALUE = 11;
    EcorePackageImpl.EOBJECT___EISSET__FEATURE = 12;
    EcorePackageImpl.EOBJECT___EUNSET__FEATURE = 13;
    EcorePackageImpl.EOBJECT___EINVOKE__OPERATION__ARGUMENTS = 14;
    EcorePackageImpl.EOPERATION = 11;
    EcorePackageImpl.EOPERATION_FEATURE_COUNT = EcorePackageImpl.ETYPEDELEMENT_FEATURE_COUNT + 5;
    EcorePackageImpl.EOPERATION_OPERATION_COUNT = EcorePackageImpl.ETYPEDELEMENT_OPERATION_COUNT + 2;
    EcorePackageImpl.EOPERATION_EANNOTATIONS = 0;
    EcorePackageImpl.EOPERATION_NAME = 1;
    EcorePackageImpl.EOPERATION_ORDERED = 2;
    EcorePackageImpl.EOPERATION_UNIQUE = 3;
    EcorePackageImpl.EOPERATION_LOWERBOUND = 4;
    EcorePackageImpl.EOPERATION_UPPERBOUND = 5;
    EcorePackageImpl.EOPERATION_MANY = 6;
    EcorePackageImpl.EOPERATION_REQUIRED = 7;
    EcorePackageImpl.EOPERATION_ETYPE = 8;
    EcorePackageImpl.EOPERATION_EGENERICTYPE = 9;
    EcorePackageImpl.EOPERATION_ECONTAININGCLASS = 10;
    EcorePackageImpl.EOPERATION_ETYPEPARAMETERS = 11;
    EcorePackageImpl.EOPERATION_EPARAMETERS = 12;
    EcorePackageImpl.EOPERATION_EEXCEPTIONS = 13;
    EcorePackageImpl.EOPERATION_EGENERICEXCEPTIONS = 14;
    EcorePackageImpl.EOPERATION___GETOPERATIONID = 0;
    EcorePackageImpl.EOPERATION___ISOVERRIDEOF__SOMEOPERATION = 1;
    EcorePackageImpl.EPACKAGE = 12;
    EcorePackageImpl.EPACKAGE_FEATURE_COUNT = EcorePackageImpl.ENAMEDELEMENT_FEATURE_COUNT + 6;
    EcorePackageImpl.EPACKAGE_OPERATION_COUNT = EcorePackageImpl.ENAMEDELEMENT_OPERATION_COUNT + 1;
    EcorePackageImpl.EPACKAGE_EANNOTATIONS = 0;
    EcorePackageImpl.EPACKAGE_NAME = 1;
    EcorePackageImpl.EPACKAGE_NSURI = 2;
    EcorePackageImpl.EPACKAGE_NSPREFIX = 3;
    EcorePackageImpl.EPACKAGE_EFACTORYINSTANCE = 4;
    EcorePackageImpl.EPACKAGE_ECLASSIFIERS = 5;
    EcorePackageImpl.EPACKAGE_ESUBPACKAGES = 6;
    EcorePackageImpl.EPACKAGE_ESUPERPACKAGE = 7;
    EcorePackageImpl.EPACKAGE___GETECLASSIFIER__NAME = 0;
    EcorePackageImpl.EPARAMETER = 13;
    EcorePackageImpl.EPARAMETER_FEATURE_COUNT = EcorePackageImpl.ETYPEDELEMENT_FEATURE_COUNT + 1;
    EcorePackageImpl.EPARAMETER_OPERATION_COUNT = EcorePackageImpl.ETYPEDELEMENT_OPERATION_COUNT + 0;
    EcorePackageImpl.EPARAMETER_EANNOTATIONS = 0;
    EcorePackageImpl.EPARAMETER_NAME = 1;
    EcorePackageImpl.EPARAMETER_ORDERED = 2;
    EcorePackageImpl.EPARAMETER_UNIQUE = 3;
    EcorePackageImpl.EPARAMETER_LOWERBOUND = 4;
    EcorePackageImpl.EPARAMETER_UPPERBOUND = 5;
    EcorePackageImpl.EPARAMETER_MANY = 6;
    EcorePackageImpl.EPARAMETER_REQUIRED = 7;
    EcorePackageImpl.EPARAMETER_ETYPE = 8;
    EcorePackageImpl.EPARAMETER_EGENERICTYPE = 9;
    EcorePackageImpl.EPARAMETER_EOPERATION = 10;
    EcorePackageImpl.EREFERENCE = 14;
    EcorePackageImpl.EREFERENCE_FEATURE_COUNT = EcorePackageImpl.ESTRUCTURALFEATURE_FEATURE_COUNT + 6;
    EcorePackageImpl.EREFERENCE_OPERATION_COUNT = EcorePackageImpl.ESTRUCTURALFEATURE_OPERATION_COUNT + 0;
    EcorePackageImpl.EREFERENCE_EANNOTATIONS = 0;
    EcorePackageImpl.EREFERENCE_NAME = 1;
    EcorePackageImpl.EREFERENCE_ORDERED = 2;
    EcorePackageImpl.EREFERENCE_UNIQUE = 3;
    EcorePackageImpl.EREFERENCE_LOWERBOUND = 4;
    EcorePackageImpl.EREFERENCE_UPPERBOUND = 5;
    EcorePackageImpl.EREFERENCE_MANY = 6;
    EcorePackageImpl.EREFERENCE_REQUIRED = 7;
    EcorePackageImpl.EREFERENCE_ETYPE = 8;
    EcorePackageImpl.EREFERENCE_EGENERICTYPE = 9;
    EcorePackageImpl.EREFERENCE_CHANGEABLE = 10;
    EcorePackageImpl.EREFERENCE_VOLATILE = 11;
    EcorePackageImpl.EREFERENCE_TRANSIENT = 12;
    EcorePackageImpl.EREFERENCE_DEFAULTVALUELITERAL = 13;
    EcorePackageImpl.EREFERENCE_DEFAULTVALUE = 14;
    EcorePackageImpl.EREFERENCE_UNSETTABLE = 15;
    EcorePackageImpl.EREFERENCE_DERIVED = 16;
    EcorePackageImpl.EREFERENCE_ECONTAININGCLASS = 17;
    EcorePackageImpl.EREFERENCE_CONTAINMENT = 18;
    EcorePackageImpl.EREFERENCE_CONTAINER = 19;
    EcorePackageImpl.EREFERENCE_RESOLVEPROXIES = 20;
    EcorePackageImpl.EREFERENCE_EOPPOSITE = 21;
    EcorePackageImpl.EREFERENCE_EREFERENCETYPE = 22;
    EcorePackageImpl.EREFERENCE_EKEYS = 23;
    EcorePackageImpl.ESTRINGTOSTRINGMAPENTRY = 48;
    EcorePackageImpl.ESTRINGTOSTRINGMAPENTRY_FEATURE_COUNT = 2;
    EcorePackageImpl.ESTRINGTOSTRINGMAPENTRY_OPERATION_COUNT = 0;
    EcorePackageImpl.ESTRINGTOSTRINGMAPENTRY_KEY = 0;
    EcorePackageImpl.ESTRINGTOSTRINGMAPENTRY_VALUE = 1;
    EcorePackageImpl.EGENERICTYPE = 50;
    EcorePackageImpl.EGENERICTYPE_FEATURE_COUNT = 6;
    EcorePackageImpl.EGENERICTYPE_OPERATION_COUNT = 1;
    EcorePackageImpl.EGENERICTYPE_EUPPERBOUND = 0;
    EcorePackageImpl.EGENERICTYPE_ETYPEARGUMENTS = 1;
    EcorePackageImpl.EGENERICTYPE_ERAWTYPE = 2;
    EcorePackageImpl.EGENERICTYPE_ELOWERBOUND = 3;
    EcorePackageImpl.EGENERICTYPE_ETYPEPARAMETER = 4;
    EcorePackageImpl.EGENERICTYPE_ECLASSIFIER = 5;
    EcorePackageImpl.EGENERICTYPE___ISINSTANCE__OBJECT = 0;
    EcorePackageImpl.ETYPEPARAMETER = 51;
    EcorePackageImpl.ETYPEPARAMETER_FEATURE_COUNT = EcorePackageImpl.ENAMEDELEMENT_FEATURE_COUNT + 1;
    EcorePackageImpl.ETYPEPARAMETER_OPERATION_COUNT = EcorePackageImpl.ENAMEDELEMENT_OPERATION_COUNT + 0;
    EcorePackageImpl.ETYPEPARAMETER_EANNOTATIONS = 0;
    EcorePackageImpl.ETYPEPARAMETER_NAME = 1;
    EcorePackageImpl.ETYPEPARAMETER_EBOUNDS = 2;
    EcorePackageImpl.EBIGDECIMAL = 17;
    EcorePackageImpl.EBIGINTEGER = 18;
    EcorePackageImpl.EBOOLEAN = 19;
    EcorePackageImpl.EBOOLEANOBJECT = 20;
    EcorePackageImpl.EBYTE = 21;
    EcorePackageImpl.EBYTEARRAY = 22;
    EcorePackageImpl.EBYTEOBJECT = 23;
    EcorePackageImpl.ECHAR = 24;
    EcorePackageImpl.ECHARACTEROBJECT = 25;
    EcorePackageImpl.EDATE = 26;
    EcorePackageImpl.EDIAGNOSTICCHAIN = 27;
    EcorePackageImpl.EDOUBLE = 28;
    EcorePackageImpl.EDOUBLEOBJECT = 29;
    EcorePackageImpl.EELIST = 30;
    EcorePackageImpl.EENUMERATOR = 31;
    EcorePackageImpl.EFEATUREMAP = 32;
    EcorePackageImpl.EFEATUREMAPENTRY = 33;
    EcorePackageImpl.EFLOAT = 34;
    EcorePackageImpl.EFLOATOBJECT = 35;
    EcorePackageImpl.EINT = 36;
    EcorePackageImpl.EINTEGEROBJECT = 37;
    EcorePackageImpl.EJAVACLASS = 38;
    EcorePackageImpl.EJAVAOBJECT = 39;
    EcorePackageImpl.ELONG = 40;
    EcorePackageImpl.ELONGOBJECT = 41;
    EcorePackageImpl.EMAP = 42;
    EcorePackageImpl.ERESOURCE = 43;
    EcorePackageImpl.ERESOURCESET = 44;
    EcorePackageImpl.ESHORT = 45;
    EcorePackageImpl.ESHORTOBJECT = 46;
    EcorePackageImpl.ESTRING = 47;
    EcorePackageImpl.ETREEITERATOR = 49;
    EcorePackageImpl.EINVOCATIONTARGETEXCEPTION = 52;
    /*Important: Call init() AFTER metaobject ids have been assigned.*/
    EcorePackageImpl.eINSTANCE = EcorePackageImpl.init();
    return EcorePackageImpl;
}(_EPackageImpl__WEBPACK_IMPORTED_MODULE_15__["EPackageImpl"]));



/***/ }),

/***/ "./node_modules/crossecore/src/EcorePackageLiterals.ts":
/*!*************************************************************!*\
  !*** ./node_modules/crossecore/src/EcorePackageLiterals.ts ***!
  \*************************************************************/
/*! exports provided: EcorePackageLiterals */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EcorePackageLiterals", function() { return EcorePackageLiterals; });
var EcorePackageLiterals = /** @class */ (function () {
    function EcorePackageLiterals() {
    }
    EcorePackageLiterals.EMODELELEMENT = 8;
    EcorePackageLiterals.EMODELELEMENT_FEATURE_COUNT = 1;
    EcorePackageLiterals.EMODELELEMENT_OPERATION_COUNT = 1;
    EcorePackageLiterals.EMODELELEMENT_EANNOTATIONS = 0;
    EcorePackageLiterals.ENAMEDELEMENT = 9;
    EcorePackageLiterals.ENAMEDELEMENT_FEATURE_COUNT = EcorePackageLiterals.EMODELELEMENT_FEATURE_COUNT + 1;
    EcorePackageLiterals.ENAMEDELEMENT_OPERATION_COUNT = EcorePackageLiterals.EMODELELEMENT_OPERATION_COUNT + 0;
    EcorePackageLiterals.ENAMEDELEMENT_EANNOTATIONS = 0;
    EcorePackageLiterals.ENAMEDELEMENT_NAME = 1;
    EcorePackageLiterals.ETYPEDELEMENT = 16;
    EcorePackageLiterals.ETYPEDELEMENT_FEATURE_COUNT = EcorePackageLiterals.ENAMEDELEMENT_FEATURE_COUNT + 8;
    EcorePackageLiterals.ETYPEDELEMENT_OPERATION_COUNT = EcorePackageLiterals.ENAMEDELEMENT_OPERATION_COUNT + 0;
    EcorePackageLiterals.ETYPEDELEMENT_EANNOTATIONS = 0;
    EcorePackageLiterals.ETYPEDELEMENT_NAME = 1;
    EcorePackageLiterals.ETYPEDELEMENT_ORDERED = 2;
    EcorePackageLiterals.ETYPEDELEMENT_UNIQUE = 3;
    EcorePackageLiterals.ETYPEDELEMENT_LOWERBOUND = 4;
    EcorePackageLiterals.ETYPEDELEMENT_UPPERBOUND = 5;
    EcorePackageLiterals.ETYPEDELEMENT_MANY = 6;
    EcorePackageLiterals.ETYPEDELEMENT_REQUIRED = 7;
    EcorePackageLiterals.ETYPEDELEMENT_ETYPE = 8;
    EcorePackageLiterals.ETYPEDELEMENT_EGENERICTYPE = 9;
    EcorePackageLiterals.ESTRUCTURALFEATURE = 15;
    EcorePackageLiterals.ESTRUCTURALFEATURE_FEATURE_COUNT = EcorePackageLiterals.ETYPEDELEMENT_FEATURE_COUNT + 8;
    EcorePackageLiterals.ESTRUCTURALFEATURE_OPERATION_COUNT = EcorePackageLiterals.ETYPEDELEMENT_OPERATION_COUNT + 2;
    EcorePackageLiterals.ESTRUCTURALFEATURE_EANNOTATIONS = 0;
    EcorePackageLiterals.ESTRUCTURALFEATURE_NAME = 1;
    EcorePackageLiterals.ESTRUCTURALFEATURE_ORDERED = 2;
    EcorePackageLiterals.ESTRUCTURALFEATURE_UNIQUE = 3;
    EcorePackageLiterals.ESTRUCTURALFEATURE_LOWERBOUND = 4;
    EcorePackageLiterals.ESTRUCTURALFEATURE_UPPERBOUND = 5;
    EcorePackageLiterals.ESTRUCTURALFEATURE_MANY = 6;
    EcorePackageLiterals.ESTRUCTURALFEATURE_REQUIRED = 7;
    EcorePackageLiterals.ESTRUCTURALFEATURE_ETYPE = 8;
    EcorePackageLiterals.ESTRUCTURALFEATURE_EGENERICTYPE = 9;
    EcorePackageLiterals.ESTRUCTURALFEATURE_CHANGEABLE = 10;
    EcorePackageLiterals.ESTRUCTURALFEATURE_VOLATILE = 11;
    EcorePackageLiterals.ESTRUCTURALFEATURE_TRANSIENT = 12;
    EcorePackageLiterals.ESTRUCTURALFEATURE_DEFAULTVALUELITERAL = 13;
    EcorePackageLiterals.ESTRUCTURALFEATURE_DEFAULTVALUE = 14;
    EcorePackageLiterals.ESTRUCTURALFEATURE_UNSETTABLE = 15;
    EcorePackageLiterals.ESTRUCTURALFEATURE_DERIVED = 16;
    EcorePackageLiterals.ESTRUCTURALFEATURE_ECONTAININGCLASS = 17;
    EcorePackageLiterals.EATTRIBUTE = 0;
    EcorePackageLiterals.EATTRIBUTE_FEATURE_COUNT = EcorePackageLiterals.ESTRUCTURALFEATURE_FEATURE_COUNT + 2;
    EcorePackageLiterals.EATTRIBUTE_OPERATION_COUNT = EcorePackageLiterals.ESTRUCTURALFEATURE_OPERATION_COUNT + 0;
    EcorePackageLiterals.EATTRIBUTE_EANNOTATIONS = 0;
    EcorePackageLiterals.EATTRIBUTE_NAME = 1;
    EcorePackageLiterals.EATTRIBUTE_ORDERED = 2;
    EcorePackageLiterals.EATTRIBUTE_UNIQUE = 3;
    EcorePackageLiterals.EATTRIBUTE_LOWERBOUND = 4;
    EcorePackageLiterals.EATTRIBUTE_UPPERBOUND = 5;
    EcorePackageLiterals.EATTRIBUTE_MANY = 6;
    EcorePackageLiterals.EATTRIBUTE_REQUIRED = 7;
    EcorePackageLiterals.EATTRIBUTE_ETYPE = 8;
    EcorePackageLiterals.EATTRIBUTE_EGENERICTYPE = 9;
    EcorePackageLiterals.EATTRIBUTE_CHANGEABLE = 10;
    EcorePackageLiterals.EATTRIBUTE_VOLATILE = 11;
    EcorePackageLiterals.EATTRIBUTE_TRANSIENT = 12;
    EcorePackageLiterals.EATTRIBUTE_DEFAULTVALUELITERAL = 13;
    EcorePackageLiterals.EATTRIBUTE_DEFAULTVALUE = 14;
    EcorePackageLiterals.EATTRIBUTE_UNSETTABLE = 15;
    EcorePackageLiterals.EATTRIBUTE_DERIVED = 16;
    EcorePackageLiterals.EATTRIBUTE_ECONTAININGCLASS = 17;
    EcorePackageLiterals.EATTRIBUTE_ID = 18;
    EcorePackageLiterals.EATTRIBUTE_EATTRIBUTETYPE = 19;
    EcorePackageLiterals.EANNOTATION = 1;
    EcorePackageLiterals.EANNOTATION_FEATURE_COUNT = EcorePackageLiterals.EMODELELEMENT_FEATURE_COUNT + 5;
    EcorePackageLiterals.EANNOTATION_OPERATION_COUNT = EcorePackageLiterals.EMODELELEMENT_OPERATION_COUNT + 0;
    EcorePackageLiterals.EANNOTATION_EANNOTATIONS = 0;
    EcorePackageLiterals.EANNOTATION_SOURCE = 1;
    EcorePackageLiterals.EANNOTATION_DETAILS = 2;
    EcorePackageLiterals.EANNOTATION_EMODELELEMENT = 3;
    EcorePackageLiterals.EANNOTATION_CONTENTS = 4;
    EcorePackageLiterals.EANNOTATION_REFERENCES = 5;
    EcorePackageLiterals.ECLASSIFIER = 3;
    EcorePackageLiterals.ECLASSIFIER_FEATURE_COUNT = EcorePackageLiterals.ENAMEDELEMENT_FEATURE_COUNT + 6;
    EcorePackageLiterals.ECLASSIFIER_OPERATION_COUNT = EcorePackageLiterals.ENAMEDELEMENT_OPERATION_COUNT + 2;
    EcorePackageLiterals.ECLASSIFIER_EANNOTATIONS = 0;
    EcorePackageLiterals.ECLASSIFIER_NAME = 1;
    EcorePackageLiterals.ECLASSIFIER_INSTANCECLASSNAME = 2;
    EcorePackageLiterals.ECLASSIFIER_INSTANCECLASS = 3;
    EcorePackageLiterals.ECLASSIFIER_DEFAULTVALUE = 4;
    EcorePackageLiterals.ECLASSIFIER_INSTANCETYPENAME = 5;
    EcorePackageLiterals.ECLASSIFIER_EPACKAGE = 6;
    EcorePackageLiterals.ECLASSIFIER_ETYPEPARAMETERS = 7;
    EcorePackageLiterals.ECLASS = 2;
    EcorePackageLiterals.ECLASS_FEATURE_COUNT = EcorePackageLiterals.ECLASSIFIER_FEATURE_COUNT + 16;
    EcorePackageLiterals.ECLASS_OPERATION_COUNT = EcorePackageLiterals.ECLASSIFIER_OPERATION_COUNT + 10;
    EcorePackageLiterals.ECLASS_EANNOTATIONS = 0;
    EcorePackageLiterals.ECLASS_NAME = 1;
    EcorePackageLiterals.ECLASS_INSTANCECLASSNAME = 2;
    EcorePackageLiterals.ECLASS_INSTANCECLASS = 3;
    EcorePackageLiterals.ECLASS_DEFAULTVALUE = 4;
    EcorePackageLiterals.ECLASS_INSTANCETYPENAME = 5;
    EcorePackageLiterals.ECLASS_EPACKAGE = 6;
    EcorePackageLiterals.ECLASS_ETYPEPARAMETERS = 7;
    EcorePackageLiterals.ECLASS_ABSTRACT = 8;
    EcorePackageLiterals.ECLASS_INTERFACE = 9;
    EcorePackageLiterals.ECLASS_ESUPERTYPES = 10;
    EcorePackageLiterals.ECLASS_EOPERATIONS = 11;
    EcorePackageLiterals.ECLASS_EALLATTRIBUTES = 12;
    EcorePackageLiterals.ECLASS_EALLREFERENCES = 13;
    EcorePackageLiterals.ECLASS_EREFERENCES = 14;
    EcorePackageLiterals.ECLASS_EATTRIBUTES = 15;
    EcorePackageLiterals.ECLASS_EALLCONTAINMENTS = 16;
    EcorePackageLiterals.ECLASS_EALLOPERATIONS = 17;
    EcorePackageLiterals.ECLASS_EALLSTRUCTURALFEATURES = 18;
    EcorePackageLiterals.ECLASS_EALLSUPERTYPES = 19;
    EcorePackageLiterals.ECLASS_EIDATTRIBUTE = 20;
    EcorePackageLiterals.ECLASS_ESTRUCTURALFEATURES = 21;
    EcorePackageLiterals.ECLASS_EGENERICSUPERTYPES = 22;
    EcorePackageLiterals.ECLASS_EALLGENERICSUPERTYPES = 23;
    EcorePackageLiterals.EDATATYPE = 4;
    EcorePackageLiterals.EDATATYPE_FEATURE_COUNT = EcorePackageLiterals.ECLASSIFIER_FEATURE_COUNT + 1;
    EcorePackageLiterals.EDATATYPE_OPERATION_COUNT = EcorePackageLiterals.ECLASSIFIER_OPERATION_COUNT + 0;
    EcorePackageLiterals.EDATATYPE_EANNOTATIONS = 0;
    EcorePackageLiterals.EDATATYPE_NAME = 1;
    EcorePackageLiterals.EDATATYPE_INSTANCECLASSNAME = 2;
    EcorePackageLiterals.EDATATYPE_INSTANCECLASS = 3;
    EcorePackageLiterals.EDATATYPE_DEFAULTVALUE = 4;
    EcorePackageLiterals.EDATATYPE_INSTANCETYPENAME = 5;
    EcorePackageLiterals.EDATATYPE_EPACKAGE = 6;
    EcorePackageLiterals.EDATATYPE_ETYPEPARAMETERS = 7;
    EcorePackageLiterals.EDATATYPE_SERIALIZABLE = 8;
    EcorePackageLiterals.EENUM = 5;
    EcorePackageLiterals.EENUM_FEATURE_COUNT = EcorePackageLiterals.EDATATYPE_FEATURE_COUNT + 1;
    EcorePackageLiterals.EENUM_OPERATION_COUNT = EcorePackageLiterals.EDATATYPE_OPERATION_COUNT + 3;
    EcorePackageLiterals.EENUM_EANNOTATIONS = 0;
    EcorePackageLiterals.EENUM_NAME = 1;
    EcorePackageLiterals.EENUM_INSTANCECLASSNAME = 2;
    EcorePackageLiterals.EENUM_INSTANCECLASS = 3;
    EcorePackageLiterals.EENUM_DEFAULTVALUE = 4;
    EcorePackageLiterals.EENUM_INSTANCETYPENAME = 5;
    EcorePackageLiterals.EENUM_EPACKAGE = 6;
    EcorePackageLiterals.EENUM_ETYPEPARAMETERS = 7;
    EcorePackageLiterals.EENUM_SERIALIZABLE = 8;
    EcorePackageLiterals.EENUM_ELITERALS = 9;
    EcorePackageLiterals.EENUMLITERAL = 6;
    EcorePackageLiterals.EENUMLITERAL_FEATURE_COUNT = EcorePackageLiterals.ENAMEDELEMENT_FEATURE_COUNT + 4;
    EcorePackageLiterals.EENUMLITERAL_OPERATION_COUNT = EcorePackageLiterals.ENAMEDELEMENT_OPERATION_COUNT + 0;
    EcorePackageLiterals.EENUMLITERAL_EANNOTATIONS = 0;
    EcorePackageLiterals.EENUMLITERAL_NAME = 1;
    EcorePackageLiterals.EENUMLITERAL_VALUE = 2;
    EcorePackageLiterals.EENUMLITERAL_INSTANCE = 3;
    EcorePackageLiterals.EENUMLITERAL_LITERAL = 4;
    EcorePackageLiterals.EENUMLITERAL_EENUM = 5;
    EcorePackageLiterals.EFACTORY = 7;
    EcorePackageLiterals.EFACTORY_FEATURE_COUNT = EcorePackageLiterals.EMODELELEMENT_FEATURE_COUNT + 1;
    EcorePackageLiterals.EFACTORY_OPERATION_COUNT = EcorePackageLiterals.EMODELELEMENT_OPERATION_COUNT + 3;
    EcorePackageLiterals.EFACTORY_EANNOTATIONS = 0;
    EcorePackageLiterals.EFACTORY_EPACKAGE = 1;
    EcorePackageLiterals.EOBJECT = 10;
    EcorePackageLiterals.EOBJECT_FEATURE_COUNT = 0;
    EcorePackageLiterals.EOBJECT_OPERATION_COUNT = 15;
    EcorePackageLiterals.EOPERATION = 11;
    EcorePackageLiterals.EOPERATION_FEATURE_COUNT = EcorePackageLiterals.ETYPEDELEMENT_FEATURE_COUNT + 5;
    EcorePackageLiterals.EOPERATION_OPERATION_COUNT = EcorePackageLiterals.ETYPEDELEMENT_OPERATION_COUNT + 2;
    EcorePackageLiterals.EOPERATION_EANNOTATIONS = 0;
    EcorePackageLiterals.EOPERATION_NAME = 1;
    EcorePackageLiterals.EOPERATION_ORDERED = 2;
    EcorePackageLiterals.EOPERATION_UNIQUE = 3;
    EcorePackageLiterals.EOPERATION_LOWERBOUND = 4;
    EcorePackageLiterals.EOPERATION_UPPERBOUND = 5;
    EcorePackageLiterals.EOPERATION_MANY = 6;
    EcorePackageLiterals.EOPERATION_REQUIRED = 7;
    EcorePackageLiterals.EOPERATION_ETYPE = 8;
    EcorePackageLiterals.EOPERATION_EGENERICTYPE = 9;
    EcorePackageLiterals.EOPERATION_ECONTAININGCLASS = 10;
    EcorePackageLiterals.EOPERATION_ETYPEPARAMETERS = 11;
    EcorePackageLiterals.EOPERATION_EPARAMETERS = 12;
    EcorePackageLiterals.EOPERATION_EEXCEPTIONS = 13;
    EcorePackageLiterals.EOPERATION_EGENERICEXCEPTIONS = 14;
    EcorePackageLiterals.EPACKAGE = 12;
    EcorePackageLiterals.EPACKAGE_FEATURE_COUNT = EcorePackageLiterals.ENAMEDELEMENT_FEATURE_COUNT + 6;
    EcorePackageLiterals.EPACKAGE_OPERATION_COUNT = EcorePackageLiterals.ENAMEDELEMENT_OPERATION_COUNT + 1;
    EcorePackageLiterals.EPACKAGE_EANNOTATIONS = 0;
    EcorePackageLiterals.EPACKAGE_NAME = 1;
    EcorePackageLiterals.EPACKAGE_NSURI = 2;
    EcorePackageLiterals.EPACKAGE_NSPREFIX = 3;
    EcorePackageLiterals.EPACKAGE_EFACTORYINSTANCE = 4;
    EcorePackageLiterals.EPACKAGE_ECLASSIFIERS = 5;
    EcorePackageLiterals.EPACKAGE_ESUBPACKAGES = 6;
    EcorePackageLiterals.EPACKAGE_ESUPERPACKAGE = 7;
    EcorePackageLiterals.EPARAMETER = 13;
    EcorePackageLiterals.EPARAMETER_FEATURE_COUNT = EcorePackageLiterals.ETYPEDELEMENT_FEATURE_COUNT + 1;
    EcorePackageLiterals.EPARAMETER_OPERATION_COUNT = EcorePackageLiterals.ETYPEDELEMENT_OPERATION_COUNT + 0;
    EcorePackageLiterals.EPARAMETER_EANNOTATIONS = 0;
    EcorePackageLiterals.EPARAMETER_NAME = 1;
    EcorePackageLiterals.EPARAMETER_ORDERED = 2;
    EcorePackageLiterals.EPARAMETER_UNIQUE = 3;
    EcorePackageLiterals.EPARAMETER_LOWERBOUND = 4;
    EcorePackageLiterals.EPARAMETER_UPPERBOUND = 5;
    EcorePackageLiterals.EPARAMETER_MANY = 6;
    EcorePackageLiterals.EPARAMETER_REQUIRED = 7;
    EcorePackageLiterals.EPARAMETER_ETYPE = 8;
    EcorePackageLiterals.EPARAMETER_EGENERICTYPE = 9;
    EcorePackageLiterals.EPARAMETER_EOPERATION = 10;
    EcorePackageLiterals.EREFERENCE = 14;
    EcorePackageLiterals.EREFERENCE_FEATURE_COUNT = EcorePackageLiterals.ESTRUCTURALFEATURE_FEATURE_COUNT + 6;
    EcorePackageLiterals.EREFERENCE_OPERATION_COUNT = EcorePackageLiterals.ESTRUCTURALFEATURE_OPERATION_COUNT + 0;
    EcorePackageLiterals.EREFERENCE_EANNOTATIONS = 0;
    EcorePackageLiterals.EREFERENCE_NAME = 1;
    EcorePackageLiterals.EREFERENCE_ORDERED = 2;
    EcorePackageLiterals.EREFERENCE_UNIQUE = 3;
    EcorePackageLiterals.EREFERENCE_LOWERBOUND = 4;
    EcorePackageLiterals.EREFERENCE_UPPERBOUND = 5;
    EcorePackageLiterals.EREFERENCE_MANY = 6;
    EcorePackageLiterals.EREFERENCE_REQUIRED = 7;
    EcorePackageLiterals.EREFERENCE_ETYPE = 8;
    EcorePackageLiterals.EREFERENCE_EGENERICTYPE = 9;
    EcorePackageLiterals.EREFERENCE_CHANGEABLE = 10;
    EcorePackageLiterals.EREFERENCE_VOLATILE = 11;
    EcorePackageLiterals.EREFERENCE_TRANSIENT = 12;
    EcorePackageLiterals.EREFERENCE_DEFAULTVALUELITERAL = 13;
    EcorePackageLiterals.EREFERENCE_DEFAULTVALUE = 14;
    EcorePackageLiterals.EREFERENCE_UNSETTABLE = 15;
    EcorePackageLiterals.EREFERENCE_DERIVED = 16;
    EcorePackageLiterals.EREFERENCE_ECONTAININGCLASS = 17;
    EcorePackageLiterals.EREFERENCE_CONTAINMENT = 18;
    EcorePackageLiterals.EREFERENCE_CONTAINER = 19;
    EcorePackageLiterals.EREFERENCE_RESOLVEPROXIES = 20;
    EcorePackageLiterals.EREFERENCE_EOPPOSITE = 21;
    EcorePackageLiterals.EREFERENCE_EREFERENCETYPE = 22;
    EcorePackageLiterals.EREFERENCE_EKEYS = 23;
    EcorePackageLiterals.ESTRINGTOSTRINGMAPENTRY = 48;
    EcorePackageLiterals.ESTRINGTOSTRINGMAPENTRY_FEATURE_COUNT = 2;
    EcorePackageLiterals.ESTRINGTOSTRINGMAPENTRY_OPERATION_COUNT = 0;
    EcorePackageLiterals.ESTRINGTOSTRINGMAPENTRY_KEY = 0;
    EcorePackageLiterals.ESTRINGTOSTRINGMAPENTRY_VALUE = 1;
    EcorePackageLiterals.EGENERICTYPE = 50;
    EcorePackageLiterals.EGENERICTYPE_FEATURE_COUNT = 6;
    EcorePackageLiterals.EGENERICTYPE_OPERATION_COUNT = 1;
    EcorePackageLiterals.EGENERICTYPE_EUPPERBOUND = 0;
    EcorePackageLiterals.EGENERICTYPE_ETYPEARGUMENTS = 1;
    EcorePackageLiterals.EGENERICTYPE_ERAWTYPE = 2;
    EcorePackageLiterals.EGENERICTYPE_ELOWERBOUND = 3;
    EcorePackageLiterals.EGENERICTYPE_ETYPEPARAMETER = 4;
    EcorePackageLiterals.EGENERICTYPE_ECLASSIFIER = 5;
    EcorePackageLiterals.ETYPEPARAMETER = 51;
    EcorePackageLiterals.ETYPEPARAMETER_FEATURE_COUNT = EcorePackageLiterals.ENAMEDELEMENT_FEATURE_COUNT + 1;
    EcorePackageLiterals.ETYPEPARAMETER_OPERATION_COUNT = EcorePackageLiterals.ENAMEDELEMENT_OPERATION_COUNT + 0;
    EcorePackageLiterals.ETYPEPARAMETER_EANNOTATIONS = 0;
    EcorePackageLiterals.ETYPEPARAMETER_NAME = 1;
    EcorePackageLiterals.ETYPEPARAMETER_EBOUNDS = 2;
    EcorePackageLiterals.EBIGDECIMAL = 17;
    EcorePackageLiterals.EBIGINTEGER = 18;
    EcorePackageLiterals.EBOOLEAN = 19;
    EcorePackageLiterals.EBOOLEANOBJECT = 20;
    EcorePackageLiterals.EBYTE = 21;
    EcorePackageLiterals.EBYTEARRAY = 22;
    EcorePackageLiterals.EBYTEOBJECT = 23;
    EcorePackageLiterals.ECHAR = 24;
    EcorePackageLiterals.ECHARACTEROBJECT = 25;
    EcorePackageLiterals.EDATE = 26;
    EcorePackageLiterals.EDIAGNOSTICCHAIN = 27;
    EcorePackageLiterals.EDOUBLE = 28;
    EcorePackageLiterals.EDOUBLEOBJECT = 29;
    EcorePackageLiterals.EELIST = 30;
    EcorePackageLiterals.EENUMERATOR = 31;
    EcorePackageLiterals.EFEATUREMAP = 32;
    EcorePackageLiterals.EFEATUREMAPENTRY = 33;
    EcorePackageLiterals.EFLOAT = 34;
    EcorePackageLiterals.EFLOATOBJECT = 35;
    EcorePackageLiterals.EINT = 36;
    EcorePackageLiterals.EINTEGEROBJECT = 37;
    EcorePackageLiterals.EJAVACLASS = 38;
    EcorePackageLiterals.EJAVAOBJECT = 39;
    EcorePackageLiterals.ELONG = 40;
    EcorePackageLiterals.ELONGOBJECT = 41;
    EcorePackageLiterals.EMAP = 42;
    EcorePackageLiterals.ERESOURCE = 43;
    EcorePackageLiterals.ERESOURCESET = 44;
    EcorePackageLiterals.ESHORT = 45;
    EcorePackageLiterals.ESHORTOBJECT = 46;
    EcorePackageLiterals.ESTRING = 47;
    EcorePackageLiterals.ETREEITERATOR = 49;
    EcorePackageLiterals.EINVOCATIONTARGETEXCEPTION = 52;
    return EcorePackageLiterals;
}());



/***/ }),

/***/ "./node_modules/crossecore/src/NotificationImpl.ts":
/*!*********************************************************!*\
  !*** ./node_modules/crossecore/src/NotificationImpl.ts ***!
  \*********************************************************/
/*! exports provided: NotificationImpl */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotificationImpl", function() { return NotificationImpl; });
/* CrossEcore is a cross-platform modeling framework that generates C#, TypeScript,
 * JavaScript, Swift code from Ecore models with embedded OCL (http://www.crossecore.org/).
 * The original Eclipse Modeling Framework is available at https://www.eclipse.org/modeling/emf/.
 *
 * contributor: Simon Schwichtenberg
 */
var NotificationImpl = /** @class */ (function () {
    /*
     public NotificationImpl(int eventType, object oldValue, object newValue): this(eventType, oldValue, newValue, NO_INDEX)
     {

     }

     public NotificationImpl(int eventType, object oldValue, object newValue, bool isSetChange): this(eventType, oldValue, newValue, isSetChange ? IS_SET_CHANGE_INDEX : NO_INDEX)
     {

     }
     */
    function NotificationImpl(eventType, oldValue, newValue, position, wasSet) {
        var _this = this;
        /**
         * !!! NO CONSTRUCTOR OVERLOADING ALLOWED IN TYPESCRIPT !!!
         */
        /*
        public constructor(eventType:number, oldValue:any, newValue:any, position:number)
        {

            this.eventType = eventType;
            this.oldValue = oldValue;
            this.newValue = newValue;
            this.position = position;
            this.primitiveType = NotificationImpl.PRIMITIVE_TYPE_OBJECT;

        }
        */
        this.add = function (notification) {
            return _this.next.add(notification);
        };
        this.dispatch = function () {
            var notifier = _this.getNotifier();
            if (notifier != null && _this.getEventType() != -1) {
                notifier.eNotify(_this);
            }
            if (_this.next != null) {
                _this.next.dispatch();
            }
        };
        this.eventType = eventType;
        this.oldValue = oldValue;
        this.newValue = newValue;
        this.position = position;
        this.primitiveType = NotificationImpl.PRIMITIVE_TYPE_OBJECT;
        if (wasSet != undefined && !wasSet) {
            this.position = NotificationImpl.IS_SET_CHANGE_INDEX - position - 1;
        }
    }
    NotificationImpl.prototype.getNotifier = function () {
        return null;
    };
    NotificationImpl.prototype.getEventType = function () {
        return this.eventType;
    };
    NotificationImpl.prototype.getNewValue = function () {
        return this.newValue;
    };
    NotificationImpl.SET = 1;
    NotificationImpl.UNSET = 2;
    NotificationImpl.ADD = 2;
    NotificationImpl.REMOVE = 3;
    NotificationImpl.ADD_MANY = 5;
    NotificationImpl.REMOVE_MANY = 6;
    NotificationImpl.MOVE = 7;
    NotificationImpl.NO_INDEX = -1;
    NotificationImpl.IS_SET_CHANGE_INDEX = NotificationImpl.NO_INDEX - 1;
    NotificationImpl.NO_FEATURE_ID = -1;
    NotificationImpl.PRIMITIVE_TYPE_OBJECT = -1;
    return NotificationImpl;
}());



/***/ }),

/***/ "./node_modules/crossecore/src/OrderedSet.ts":
/*!***************************************************!*\
  !*** ./node_modules/crossecore/src/OrderedSet.ts ***!
  \***************************************************/
/*! exports provided: OrderedSet */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderedSet", function() { return OrderedSet; });
/* harmony import */ var _AbstractCollection__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AbstractCollection */ "./node_modules/crossecore/src/AbstractCollection.ts");
/* CrossEcore is a cross-platform modeling framework that generates C#, TypeScript,
 * JavaScript, Swift code from Ecore models with embedded OCL (http://www.crossecore.org/).
 * The original Eclipse Modeling Framework is available at https://www.eclipse.org/modeling/emf/.
 *
 * contributor: Simon Schwichtenberg
 */
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var OrderedSet = /** @class */ (function (_super) {
    __extends(OrderedSet, _super);
    function OrderedSet() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.isUnique = function () {
            return true;
        };
        _this.at = function (index) {
            return _this[index];
        };
        _this.select = function (lambda) {
            var result = new OrderedSet();
            _this.filter(lambda).forEach(function (element) { result.add(element); });
            return result;
        };
        _this.collect = function (lambda) {
            var result = new OrderedSet();
            for (var element in _this) {
                result.add(lambda.call(element));
            }
            return result;
        };
        _this.collect2 = function (lambda) {
            var result = new OrderedSet();
            for (var element in _this) {
                var e = lambda.call(element);
                for (var i = 0; i < e.size(); i++) {
                    var ee = e[i];
                    result.add(ee);
                }
            }
            return result;
        };
        return _this;
    }
    return OrderedSet;
}(_AbstractCollection__WEBPACK_IMPORTED_MODULE_0__["AbstractCollection"]));



/***/ }),

/***/ "./node_modules/crossecore/src/Set.ts":
/*!********************************************!*\
  !*** ./node_modules/crossecore/src/Set.ts ***!
  \********************************************/
/*! exports provided: Set */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Set", function() { return Set; });
/* harmony import */ var _AbstractCollection__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AbstractCollection */ "./node_modules/crossecore/src/AbstractCollection.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
/* CrossEcore is a cross-platform modeling framework that generates C#, TypeScript,
 * JavaScript, Swift code from Ecore models with embedded OCL (http://www.crossecore.org/).
 * The original Eclipse Modeling Framework is available at https://www.eclipse.org/modeling/emf/.
 *
 * contributor: Simon Schwichtenberg
 */

var Set = /** @class */ (function (_super) {
    __extends(Set, _super);
    function Set() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.isUnique = function () {
            return true;
        };
        _this.select = function (lambda) {
            var result = new Set();
            _this.filter(lambda).forEach(function (element) {
                result.add(element);
            });
            return result;
        };
        _this.asSequence = function () {
            var result = new Set();
            for (var _i = 0, _a = _this; _i < _a.length; _i++) {
                var item = _a[_i];
                result.push(item);
            }
            return result;
        };
        return _this;
    }
    return Set;
}(_AbstractCollection__WEBPACK_IMPORTED_MODULE_0__["AbstractCollection"]));



/***/ }),

/***/ "./node_modules/crossecore/src/XmiResource.ts":
/*!****************************************************!*\
  !*** ./node_modules/crossecore/src/XmiResource.ts ***!
  \****************************************************/
/*! exports provided: XmiResource */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "XmiResource", function() { return XmiResource; });
/* harmony import */ var _EcorePackageImpl__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./EcorePackageImpl */ "./node_modules/crossecore/src/EcorePackageImpl.ts");
/* harmony import */ var _EcoreFactoryImpl__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./EcoreFactoryImpl */ "./node_modules/crossecore/src/EcoreFactoryImpl.ts");
/* harmony import */ var _EReferenceImpl__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./EReferenceImpl */ "./node_modules/crossecore/src/EReferenceImpl.ts");
/* harmony import */ var _EClassImpl__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./EClassImpl */ "./node_modules/crossecore/src/EClassImpl.ts");
/* harmony import */ var _ENamedElementImpl__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ENamedElementImpl */ "./node_modules/crossecore/src/ENamedElementImpl.ts");
/* harmony import */ var _EAttributeImpl__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./EAttributeImpl */ "./node_modules/crossecore/src/EAttributeImpl.ts");
/* harmony import */ var _EDataTypeImpl__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./EDataTypeImpl */ "./node_modules/crossecore/src/EDataTypeImpl.ts");
/* CrossEcore is a cross-platform modeling framework that generates C#, TypeScript,
 * JavaScript, Swift code from Ecore models with embedded OCL (http://www.crossecore.org/).
 * The original Eclipse Modeling Framework is available at https://www.eclipse.org/modeling/emf/.
 *
 * contributor: Simon Schwichtenberg, Peter Digas
 */







var format = __webpack_require__(/*! xml-formatter */ "./node_modules/xml-formatter/index.js");
var XmiResource = /** @class */ (function () {
    function XmiResource(epackage, efactory, domParser) {
        var _this = this;
        this.factory = _EcoreFactoryImpl__WEBPACK_IMPORTED_MODULE_1__["EcoreFactoryImpl"].eINSTANCE;
        this.epackage = _EcorePackageImpl__WEBPACK_IMPORTED_MODULE_0__["EcorePackageImpl"].eINSTANCE; //TODO make dynamic
        this.error_occured = false;
        // für BA erstellt
        // HOW TO USE: übergebe alle relevanten EObjects als Array in die Funktion save -> wird zu einem XMI String serialisiert
        this.save = function (eobjects) {
            if (null == eobjects) {
                console.error("Error: no eobjects passed!");
                return "";
            }
            // Duplikate rausfiltern
            eobjects = _this.filterDuplicates(eobjects);
            if (!_this.validateMulitiplicities(eobjects)) {
                return "";
            }
            _this.doc = document.implementation.createDocument("", "", null);
            // wenn es nur ein EObject gibt, braucht man kein äußeres xmi:XMI
            if (eobjects.length > 1) {
                var outer = _this.doc.createElement("xmi:XMI");
                outer.setAttribute("xmi:version", "2.0");
                outer.setAttribute("xmlns:xmi", "http://www.omg.org/XMI");
                outer.setAttribute("xmlns:" + _this.epackage.name, _this.epackage.nsURI);
                _this.doc.appendChild(outer);
            }
            if (!_this.collectReferencesToSerialize(eobjects)) {
                return "";
            }
            for (var _i = 0, eobjects_1 = eobjects; _i < eobjects_1.length; _i++) {
                var eobject = eobjects_1[_i];
                _this.process_eobject(eobject, eobjects.length == 1);
            }
            if (1 == eobjects.length) {
                var eclass = eobjects[0].eClass();
                var name_1 = _this.epackage.name + ':' + eclass.name;
                _this.doc.getElementsByTagName(name_1)[0].setAttribute("xmi:version", "2.0");
                _this.doc.getElementsByTagName(name_1)[0].setAttribute("xmlns:xmi", "http://www.omg.org/XMI");
                _this.doc.getElementsByTagName(name_1)[0].setAttribute("xmlns:" + _this.epackage.name, _this.epackage.nsURI);
            }
            if (_this.error_occured) {
                return "";
            }
            var serializer = new XMLSerializer();
            var xmlStr = serializer.serializeToString(_this.doc);
            xmlStr = '<?xml version="1.0" encoding="ASCII"?>'.concat(xmlStr);
            xmlStr = xmlStr.trim();
            xmlStr = format(xmlStr, {
                collapseContent: true
            });
            // für Kompatibilität mit EMF
            var re = new RegExp(_this.epackage.name, 'g');
            xmlStr = xmlStr.replace(re, _this.epackage.nsPrefix);
            return xmlStr;
        };
        // für BA erstellt
        // damit nur Referenzen zu EObjects serialisiert werden, die auch selbst serialisiert werden
        this.collectReferencesToSerialize = function (eobjects) {
            var ret = true;
            for (var _i = 0, eobjects_2 = eobjects; _i < eobjects_2.length; _i++) {
                var eobject = eobjects_2[_i];
                // wenn dassele EObject mehrfach serialisiert werden soll oder auch nochmal in anderen
                // containments liegt, gebe falsch zurück
                var registered_eobject = _this.eobjectRegistry[eobject._uuid];
                if (registered_eobject !== undefined && registered_eobject != null) {
                    console.error("ERROR: TRYING TO SERIALIZE SAME EOBJECT MULTIPLE TIMES");
                    return false;
                }
                _this.eobjectRegistry[eobject._uuid] = eobject;
                var eclass = eobject.eClass();
                var references = eclass.eAllReferences;
                for (var _a = 0, references_1 = references; _a < references_1.length; _a++) {
                    var reference = references_1[_a];
                    if (reference.containment) {
                        if (reference.many) {
                            var contained_eobjects = eobject.eGet(reference);
                            var array_contained = [];
                            for (var _b = 0, contained_eobjects_1 = contained_eobjects; _b < contained_eobjects_1.length; _b++) {
                                var cont_eobject = contained_eobjects_1[_b];
                                array_contained.push(cont_eobject);
                            }
                            ret = ret && _this.collectReferencesToSerialize(array_contained);
                        }
                        else {
                            var contained_eobject = eobject.eGet(reference);
                            var array_contained = [];
                            array_contained.push(contained_eobject);
                            ret = ret && _this.collectReferencesToSerialize(array_contained);
                        }
                    }
                }
            }
            return ret;
        };
        // für BA erstellt
        this.process_eobject = function (eobject, only_one_eobject_to_serialize) {
            if (only_one_eobject_to_serialize === void 0) { only_one_eobject_to_serialize = false; }
            var eclass = eobject.eClass();
            var name = _this.epackage.name + ':' + eclass.name;
            var element = _this.doc.createElement(name);
            element.setAttribute("xmi:id", "" + eobject._uuid);
            var attributes = eclass.eAllAttributes;
            var references = eclass.eAllReferences;
            _this.addAttributes(eobject, attributes, element);
            var crossrefs = new Array();
            var containments = new Array();
            for (var _i = 0, references_2 = references; _i < references_2.length; _i++) {
                var reference = references_2[_i];
                if (reference.containment) {
                    containments.push(reference);
                }
                else {
                    crossrefs.push(reference);
                }
            }
            _this.addReferences(eobject, crossrefs, element);
            if (only_one_eobject_to_serialize) {
                _this.doc.appendChild(element);
            }
            else {
                _this.doc.getElementsByTagName("xmi:XMI")[0].appendChild(element);
            }
            for (var _a = 0, containments_1 = containments; _a < containments_1.length; _a++) {
                var ct = containments_1[_a];
                _this.process_containments(eobject, ct, element, ct.name);
            }
        };
        // für BA erstellt
        this.process_containments = function (parent_eobject, reference, element, name) {
            var child_eobjects = parent_eobject.eGet(reference);
            child_eobjects = _this.filterDuplicates(child_eobjects);
            for (var _i = 0, child_eobjects_1 = child_eobjects; _i < child_eobjects_1.length; _i++) {
                var eobject = child_eobjects_1[_i];
                var eclass = eobject.eClass();
                var attributes = eclass.eAllAttributes;
                var references = eclass.eAllReferences;
                var containment_element = _this.doc.createElement(name);
                containment_element.setAttribute("xmi:type", _this.epackage.name + ':' + eclass.name);
                containment_element.setAttribute("xmi:id", "" + eobject._uuid);
                _this.addAttributes(eobject, attributes, containment_element);
                var crossrefs = new Array();
                var containments = new Array();
                for (var _a = 0, references_3 = references; _a < references_3.length; _a++) {
                    var reference_1 = references_3[_a];
                    if (reference_1.containment) {
                        containments.push(reference_1);
                    }
                    else {
                        crossrefs.push(reference_1);
                    }
                }
                _this.addReferences(eobject, crossrefs, containment_element);
                element.appendChild(containment_element);
                // für jedes Containment, rufe rekursiv die Funktion auf
                for (var _b = 0, containments_2 = containments; _b < containments_2.length; _b++) {
                    var ct = containments_2[_b];
                    if (ct.containment) {
                        _this.process_containments(eobject, ct, containment_element, ct.name);
                    }
                }
            }
        };
        // für BA erstellt
        // fügt beim Serialisieren non-Containment Referenzen hinzu
        this.addReferences = function (eobject, crossrefs, element) {
            for (var _i = 0, crossrefs_1 = crossrefs; _i < crossrefs_1.length; _i++) {
                var cf = crossrefs_1[_i];
                var ecf = eobject.eGet(cf);
                if (cf != null && !cf.containment && !cf.derived && !cf.transient && ecf != cf.defaultValueLiteral) {
                    if (cf.many) {
                        var references = ecf;
                        var allref = "";
                        for (var _a = 0, references_4 = references; _a < references_4.length; _a++) {
                            var r = references_4[_a];
                            if (null == r) {
                                _this.error_occured = true;
                                continue;
                            }
                            // wenn EObject nicht serialisiert wird, auch Referenz nicht serialisieren
                            var registered_eobject = _this.eobjectRegistry[r._uuid];
                            if (undefined === registered_eobject || null == registered_eobject) {
                                _this.error_occured = true;
                                continue;
                            }
                            // Referenzen werden nicht mehrfach serialisiert
                            // und es werden auch keine Rückreferenzen an Kompositionen serialisiert
                            var container = eobject._eContainer;
                            if (allref.includes(r._uuid + "")
                                || (container != null && container._uuid === r._uuid)) {
                                continue;
                            }
                            allref += r._uuid + " ";
                        }
                        allref = allref.trim();
                        if ("" == allref) {
                            continue;
                        }
                        element.setAttribute(cf.name, allref);
                    }
                    else {
                        if (null == ecf) {
                            _this.error_occured = true;
                            continue;
                        }
                        // wenn EObject nicht serialisiert wird, auch Referenz nicht serialisieren
                        var registered_eobject = _this.eobjectRegistry[ecf._uuid];
                        if (undefined === registered_eobject || null == registered_eobject) {
                            _this.error_occured = true;
                            continue;
                        }
                        // Keine Rückreferenzen auf Kompositionen serialisieren
                        var container = eobject._eContainer;
                        if (container != null && container._uuid === ecf._uuid) {
                            continue;
                        }
                        element.setAttribute(cf.name, "" + ecf._uuid);
                    }
                }
            }
        };
        // für BA erstellt
        this.addAttributes = function (eobject, attributes, element) {
            for (var _i = 0, attributes_1 = attributes; _i < attributes_1.length; _i++) {
                var attribute = attributes_1[_i];
                var eattr = eobject.eGet(attribute);
                // Attributwert nicht Standardwert, da sonst unnötige Information serialisiert werden
                if (attribute != null && !attribute.derived && !attribute.transient
                    && eattr != null && eattr != attribute.defaultValueLiteral) {
                    if (attribute.many) {
                        for (var _a = 0, eattr_1 = eattr; _a < eattr_1.length; _a++) {
                            var single_attribute = eattr_1[_a];
                            var attr_elem = _this.doc.createElement(attribute.name);
                            if ("EChar" == attribute.eType.name) {
                                attr_elem.innerHTML = ("" + single_attribute).charCodeAt(0) + "";
                            }
                            else {
                                attr_elem.innerHTML = "" + single_attribute;
                            }
                            element.appendChild(attr_elem);
                        }
                    }
                    else {
                        if ("EChar" == attribute.eType.name) {
                            element.setAttribute(attribute.name, ("" + eattr).charCodeAt(0) + "");
                        }
                        else {
                            element.setAttribute(attribute.name, "" + eattr);
                        }
                    }
                }
            }
        };
        // modifiziert für BA
        // HOW TO USE: übergebe eine XMI und erhalte alle darin enthaltenen EObjects als Array zurück
        this.load = function (xml) {
            // BA Teil: Deserialisieren einer Ecore Modellinstanz
            if ("" == xml) {
                console.error("ERROR: empty instance document");
                return null;
            }
            // beim parsen störenden Teil der XMI entfernen
            xml = xml.replace('<?xml version="1.0" encoding="ASCII"?>', '');
            var parser = _this.domParser;
            var xmlDoc = parser.parseFromString(xml, "text/xml");
            // ab hier BA Teil
            if (xmlDoc.getElementsByTagName("parsererror").length > 0) {
                console.error("Error while parsing Ecore instance document!");
                return null;
            }
            var eobjects = new Array();
            // wenn es nur ein EObject gibt, dann gibt es kein äußeres xmi:XMI
            if (0 == xmlDoc.getElementsByTagName("xmi:XMI").length) {
                _this.rootnode(xmlDoc.childNodes[0]);
                eobjects.push(_this.root);
            }
            else {
                for (var i = 0; xmlDoc.childNodes[0].childNodes[i] != null; i++) {
                    if ('#text' == xmlDoc.childNodes[0].childNodes[i].nodeName) {
                        continue;
                    }
                    else {
                        _this.rootnode(xmlDoc.childNodes[0].childNodes[i]);
                        eobjects.push(_this.root);
                    }
                }
            }
            // lateResolve aus der for Schleife entfernt, damit es nur einmal am Schluss ausgeführt wird und die verbleibenden Referenzen hinzufügt
            // damit haben auch Verschiebungen der Reihenfolge in der XMI keine Auswirkungen mehr
            if (!_this.lateResolve()) {
                return null;
            }
            // this.recAllEObjectsCheck(eobjects);
            // eobjects = this.checkAllBidirectionalReferences(eobjects);
            if (!_this.validateMulitiplicities(eobjects)) {
                return null;
            }
            if (_this.error_occured) {
                return null;
            }
            return _this.filterDuplicates(eobjects);
            // Ende BA Teil
        };
        // modifiziert für BA
        this.rootnode = function (node) {
            var classifierId = node.nodeName.split(':')[1];
            var eclassifier = _this.epackage.getEClassifier(classifierId);
            if (eclassifier instanceof _EClassImpl__WEBPACK_IMPORTED_MODULE_3__["EClassImpl"]) {
                var eclass = eclassifier;
                _this.root = _this.factory.create(eclass);
                _this.addEStructuralFeatures(_this.root, node);
                // this.lateResolve(); für BA entfernt, damit nur einmal zum Schluss alle Referenzen aufgelöst werden müssen
            }
        };
        // Entfernt für BA, da nicht notwendig
        /*
        protected resolveEList = (specification:string)=>{
            let result = new Array<EObject>();
            let supertypes = specification.split(' ');
    
            if (supertypes != null)
            {
                for(let i=0;i<supertypes.length;i++){
                    //for (string s in supertypes)
    
                    let s = supertypes[i];
    
                    let supertype = this.resolveEObject(s) as EClass;
    
                    //TODO assure it is eclass
                    result.push(supertype);
                }
            }
            return result;
        }
        */
        // modifiziert für BA
        this.resolveEObject = function (specification) {
            if (specification === null) {
                return null;
            }
            else if (specification.lastIndexOf("#//") === 0) {
                var name_2 = specification.replace("#//", "");
                var segments = name_2.split("/");
                var queue = new Array();
                for (var i = 0; i < segments.length; i++) {
                    var segment = segments[i];
                    queue.push(segment);
                }
                return _this.resolveRecurr(queue, _this.root);
            }
            else if (specification.indexOf("http://www.eclipse.org/emf/2002/Ecore#") !== -1) {
                //ecore:EDataType http://www.eclipse.org/emf/2002/Ecore#//EString
                var index = specification.indexOf("http://www.eclipse.org/emf/2002/Ecore#//");
                var name_3 = specification.substring(index + 40, specification.length);
                var segments = name_3.split("/");
                var queue = new Array();
                for (var i = 0; i < segments.length; i++) {
                    var segment = segments[i];
                    queue.push(segment);
                }
                return _this.resolveRecurr(queue, _EcorePackageImpl__WEBPACK_IMPORTED_MODULE_0__["EcorePackageImpl"].eINSTANCE);
            }
            // BA Teil: Auflösen eines EObjects mittels UUID Referenz
            else {
                // gebe registriertes Objekt für die UUID zurück
                var eobj_from_registry = _this.eobjectRegistry[specification];
                if (eobj_from_registry == null) {
                    // wird bei lateResolve eine Referenz nicht aufgelöst, wird eine Fehlermeldung ausgegeben
                    console.error("ERROR: REFERENCE " + specification + " CANNOT BE RESOLVED!");
                    return null;
                }
                return _this.eobjectRegistry[specification];
            }
            // Ende BA Teil
        };
        this.resolveRecurr = function (path, current) {
            if (path.length === 0) {
                return current;
            }
            var segment = path.shift();
            //FIXME: eContents needs to return Array
            var econtents = current.eContents();
            for (var i = 0; i < econtents.length; i++) {
                var content = econtents[i];
                if (content instanceof _ENamedElementImpl__WEBPACK_IMPORTED_MODULE_4__["ENamedElementImpl"]) {
                    if (content.name === segment) {
                        return _this.resolveRecurr(path, content);
                    }
                }
            }
        };
        // modifiziert für BA
        this.addEStructuralFeatures = function (eobject, node) {
            // BA Teil
            for (var i = 0; i < node.attributes.length; i++) {
                var attribute = node.attributes[i];
                var name_4 = attribute.name;
                var value = attribute.value;
                _this.addEStructuralFeaturesHelper(eobject, name_4, value);
            }
            // Ende BA Teil
            for (var i = 0; i < node.childNodes.length; i++) {
                var child = node.childNodes[i];
                if (child.nodeType === child.ELEMENT_NODE) {
                    var element = child;
                    // BA Teil: Verarbeiten von Attributen mit many Eigenschaft
                    if (0 == element.attributes.length && element.innerHTML != "") {
                        _this.addEStructuralFeaturesHelper(eobject, element.tagName, element.innerHTML, true);
                        continue;
                    }
                    var containment_name = element.localName;
                    var containment = eobject.eClass().getEStructuralFeature(containment_name);
                    if (undefined === containment || null == containment) {
                        console.error("ERROR: UNKNOWN CONTAINMENT NAME!");
                        _this.error_occured = true;
                    }
                    // Ende BA Teil
                    if (containment instanceof _EReferenceImpl__WEBPACK_IMPORTED_MODULE_2__["EReferenceImpl"]) {
                        var containment_er = containment;
                        if (containment_er.containment) {
                            var classifierId2 = containment.eType.name;
                            for (var i_1 = 0; i_1 < element.attributes.length; i_1++) {
                                if (element.attributes[i_1].name === 'xmi:type') {
                                    classifierId2 = element.attributes[i_1].value.split(':')[1];
                                    break;
                                }
                            }
                            var eclassifier2 = _this.epackage.getEClassifier(classifierId2);
                            if (eclassifier2 instanceof _EClassImpl__WEBPACK_IMPORTED_MODULE_3__["EClassImpl"]) {
                                if (containment_er.eType.name === "EStringToStringMapEntry") {
                                    //TODO
                                    console.log("EStringToStringMapEntry");
                                }
                                else {
                                    var eclass2 = eclassifier2;
                                    var eobject2 = _this.factory.create(eclass2);
                                    if (containment_er.many) {
                                        _this.addEStructuralFeatures(eobject2, element); //TODO is Element cast safe here?
                                        var items = eobject.eGet(containment_er);
                                        var copy = items.slice();
                                        copy.push(eobject2);
                                        eobject.eSet(containment_er, copy);
                                    }
                                    else {
                                        _this.addEStructuralFeatures(eobject2, element); //TODO is Element cast safe here?
                                        (eobject2);
                                        eobject.eSet(containment_er, eobject2);
                                    }
                                }
                            }
                        }
                    }
                }
            }
        };
        // modifiziert für BA
        this.lateResolve = function () {
            for (var _i = 0, _a = _this.resolveJobs; _i < _a.length; _i++) {
                var job = _a[_i];
                var eobject = job.eObject;
                var feature = job.eStructuralFeature;
                var path = job.value;
                // BA Teil: Referenzen auflösen und Korrektheit prüfen
                if (!feature.many) {
                    var eobj_to_add = _this.resolveEObject(path);
                    // bei unaufgelösbaren Referenzen
                    if (null == eobj_to_add) {
                        console.error("ERROR: REFERENCE " + path + " CANNOT BE RESOLVED!");
                        return false;
                    }
                    // Prüfen ob Referenz den richtigen Datentyp hat
                    if (feature.eType.instanceClass.name === eobj_to_add.constructor.name
                        || eobj_to_add instanceof feature.eType.instanceClass) {
                        eobject.eSet(feature, eobj_to_add);
                    }
                    else {
                        console.error("ERROR: WRONG REFERENCE DATA TYPE!");
                        return false;
                    }
                }
                else if (feature.many) {
                    var eobj_to_add = _this.resolveEObject(path);
                    if (null == eobj_to_add) {
                        console.error("ERROR: REFERENCE " + path + " CANNOT BE RESOLVED!");
                        return false;
                    }
                    /*
                    // für bidirektionale Anpassungen mit ordered Eigenschaft
                    let temp_array = (eobject.eGet(feature) as AbstractCollection<EObject>);
                    if (temp_array.some(e => this.equal_uuid(e as BasicEObjectImpl, eobj_to_add))) {
                        // temp_array.remove(eobj_to_add);
                        temp_array.splice(temp_array.findIndex(
                            e => this.equal_uuid(e as BasicEObjectImpl, eobj_to_add)), 1);
                    }
                    */
                    // Prüfen ob Referenz den richtigen Datentyp hat
                    if (feature.eType.instanceClass.name === eobj_to_add.constructor.name
                        || eobj_to_add instanceof feature.eType.instanceClass) {
                        // push statt add verwenden, um keine automatische bidirektionale Anpassung zu triggern!!!
                        // eobject.eGet(feature).push(eobj_to_add);
                        eobject.eGet(feature).add(eobj_to_add);
                        // eobject.eSet(feature, this.resolveEList(path));
                    }
                    else {
                        console.error("ERROR: WRONG REFERENCE DATA TYPE!");
                        return false;
                    }
                }
            }
            return true;
            // Ende BA Teil
        };
        // für BA erstellt
        this.validateMulitiplicities = function (eobjects) {
            for (var _i = 0, eobjects_3 = eobjects; _i < eobjects_3.length; _i++) {
                var eobject = eobjects_3[_i];
                var eclass = eobject.eClass();
                for (var _a = 0, _b = eclass.eAllAttributes; _a < _b.length; _a++) {
                    var attribute = _b[_a];
                    if (attribute.many) {
                        var eattr = eobject.eGet(attribute);
                        if ((null == eattr && attribute.lowerBound > 0)
                            || (eattr != null
                                && (eattr.length < attribute.lowerBound
                                    || (attribute.upperBound >= 0 && eattr.length > attribute.upperBound)))) {
                            console.error("Multiplicity constraint violated!");
                            return false;
                        }
                    }
                    else {
                        var eattr = eobject.eGet(attribute);
                        if ((null == eattr && attribute.lowerBound > 0)
                            || (eattr != null && eattr.length < attribute.lowerBound)) {
                            console.error("Multiplicity constraint violated!");
                            return false;
                        }
                    }
                }
                // hier werden sowohl normale Referenzen als auch Containments aus Einhaltung der Multiplizitäten geprüft
                for (var _c = 0, _d = eclass.eAllReferences; _c < _d.length; _c++) {
                    var reference = _d[_c];
                    if (reference.many) {
                        var eref = eobject.eGet(reference);
                        if ((null == eref && reference.lowerBound > 0)
                            || (eref != null
                                && (eref.length < reference.lowerBound
                                    || (reference.upperBound >= 0 && eref.length > reference.upperBound)))) {
                            console.error("Multiplicity constraint violated!");
                            return false;
                        }
                    }
                    else {
                        var eref = eobject.eGet(reference);
                        if ((eref != null && eref.length < reference.lowerBound)
                            || (null == eref && (reference.lowerBound > 0))) {
                            console.error("Multiplicity constraint violated!");
                            return false;
                        }
                    }
                    if (reference.containment) {
                        var containment = reference;
                        var ret = _this.validateMulitiplicities(eobject.eGet(containment));
                        if (!ret) {
                            return false;
                        }
                    }
                }
            }
            return true;
        };
        this.factory = efactory;
        this.epackage = epackage;
        this.domParser = domParser;
        this.resolveJobs = [];
        this.eobjectRegistry = {};
    }
    XmiResource.prototype.filterDuplicates = function (eobjects) {
        return eobjects.filter(function (a, b, c) { return c.findIndex(function (d) { return d._uuid === a._uuid; }) === b; });
    };
    // modifiziert für BA
    XmiResource.prototype.addEStructuralFeaturesHelper = function (eobject, attr_name, attr_value, attribute_has_multiple_values) {
        if (attribute_has_multiple_values === void 0) { attribute_has_multiple_values = false; }
        // BA Teil: UUID registrieren
        if (attr_name === 'xmi:id') {
            // UUID-Object Paar registrieren, damit später die Referenzen aufgelöst werden können.
            // falls es mehrere Objekte mit derselben UUID gibt, gebe eine Fehlermeldung aus.
            if (this.eobjectRegistry[attr_value] !== undefined && this.eobjectRegistry[attr_value] != null) {
                eobject._uuid = "";
                console.error("ERROR: THE SAME UUID IS USED FOR DIFFERENT EOBJECTS!");
                return;
            }
            eobject._uuid = attr_value;
            this.eobjectRegistry[attr_value] = eobject;
            return;
        }
        else if (attr_name.includes("xmlns") || attr_name === "xmi:version" || attr_name === "xmi:type") {
            return;
        }
        // Ende BA Teil
        var estructuralfeature = eobject.eClass().getEStructuralFeature(attr_name);
        if (estructuralfeature instanceof _EAttributeImpl__WEBPACK_IMPORTED_MODULE_5__["EAttributeImpl"] && !estructuralfeature.transient
            && !estructuralfeature.derived) {
            var etype = estructuralfeature.eType;
            var value = attr_value;
            if (etype.ePackage.nsURI === "http://www.eclipse.org/emf/2002/Ecore") {
                if (etype.name == "EBigDecimal") {
                    throw new Error('not implemented');
                }
                else if (etype.name == "EBigInteger") {
                    throw new Error('not implemented');
                }
                // BA Teil: Typisierung angepasst für many
                else if (etype.name == "EBoolean") {
                    if (attribute_has_multiple_values && estructuralfeature.many) {
                        eobject.eGet(estructuralfeature).add("true" == value ? true : false);
                    }
                    else {
                        eobject.eSet(estructuralfeature, "true" == value ? true : false);
                    }
                }
                else if (etype.name == "EBooleanObject") {
                    throw new Error('not implemented');
                }
                else if (etype.name == "EByteArray") {
                    throw new Error('not implemented');
                }
                else if (etype.name == "EByteObject") {
                    throw new Error('not implemented');
                }
                else if (etype.name == "EChar") {
                    if (attribute_has_multiple_values && estructuralfeature.many) {
                        eobject.eGet(estructuralfeature).add(String.fromCharCode(value));
                    }
                    else {
                        eobject.eSet(estructuralfeature, String.fromCharCode(value));
                    }
                }
                else if (etype.name == "ECharacterObject") {
                    throw new Error('not implemented');
                }
                else if (etype.name == "EDate") {
                    if (attribute_has_multiple_values && estructuralfeature.many) {
                        eobject.eGet(estructuralfeature).add(Date.parse(value));
                    }
                    else {
                        eobject.eSet(estructuralfeature, Date.parse(value));
                    }
                }
                else if (etype.name == "EDateEDiagnosticChain") {
                    throw new Error('not implemented');
                }
                else if (etype.name == "EDiagnosticChain") {
                    throw new Error('not implemented');
                }
                else if (etype.name == "EDouble") {
                    if (attribute_has_multiple_values && estructuralfeature.many) {
                        eobject.eGet(estructuralfeature).add(+value);
                    }
                    else {
                        eobject.eSet(estructuralfeature, +value);
                    }
                }
                else if (etype.name == "EDoubleObject") {
                    throw new Error('not implemented');
                }
                //EEList
                //EEnumerator
                //EFeatureMap
                //EFeatureMapEntry
                else if (etype.name == "EFloat") {
                    if (attribute_has_multiple_values && estructuralfeature.many) {
                        eobject.eGet(estructuralfeature).add(+value);
                    }
                    else {
                        eobject.eSet(estructuralfeature, +value);
                    }
                }
                else if (etype.name == "EFloatObject") {
                    throw new Error('not implemented');
                }
                else if (etype.name == "EInt") {
                    if (attribute_has_multiple_values && estructuralfeature.many) {
                        eobject.eGet(estructuralfeature).add(+value);
                    }
                    else {
                        eobject.eSet(estructuralfeature, +value);
                    }
                }
                else if (etype.name == "EIntegerObject") {
                    throw new Error('not implemented');
                }
                //EJavaClass
                //EJavaObject
                else if (etype.name == "ELong") {
                    if (attribute_has_multiple_values && estructuralfeature.many) {
                        eobject.eGet(estructuralfeature).add(+value);
                    }
                    else {
                        eobject.eSet(estructuralfeature, +value);
                    }
                }
                else if (etype.name == "ELongObject") {
                    throw new Error('not implemented');
                }
                //EMap
                //EResource
                //EResourceSet
                else if (etype.name == "EShort") {
                    if (attribute_has_multiple_values && estructuralfeature.many) {
                        eobject.eGet(estructuralfeature).add(+value);
                    }
                    else {
                        eobject.eSet(estructuralfeature, +value);
                    }
                }
                else if (etype.name == "EShortObject") {
                    throw new Error('not implemented');
                }
                else if (etype.name == "EString") {
                    if (attribute_has_multiple_values && estructuralfeature.many) {
                        eobject.eGet(estructuralfeature).add(value);
                    }
                    else {
                        eobject.eSet(estructuralfeature, value);
                    }
                }
                // Ende BA Teil
                //ETreeIterator
                //EInvocationTargetException
            }
            // z.B. für enums
            else if (etype instanceof _EDataTypeImpl__WEBPACK_IMPORTED_MODULE_6__["EDataTypeImpl"]) {
                //TODO use namespace-factory map
                var literalvalue = this.factory.createFromString(etype, value);
                eobject.eSet(estructuralfeature, literalvalue);
            }
        }
        else if (estructuralfeature instanceof _EReferenceImpl__WEBPACK_IMPORTED_MODULE_2__["EReferenceImpl"]) {
            if (!estructuralfeature.containment) {
                this.resolve(eobject, estructuralfeature, attr_value);
            }
        }
        // BA Teil: Fehlererkennung
        else {
            console.error("ERROR: NON-EXISTENT ATTRIBUTE OR REFERENCE NAME!");
            this.error_occured = true;
        }
        // Ende BA Teil
    };
    // modifiziert für BA
    XmiResource.prototype.resolve = function (eobject, estructuralfeature, value) {
        // BA Teil: alle Referenzen für ein späteres Verarbeiten speichern
        var all_ids = value.split(" ");
        for (var i = 0; i < all_ids.length; i++) {
            var id = all_ids[i];
            /*
            if(false && this.eobjectRegistry[id]!==undefined && this.eobjectRegistry[id] != null) {

                if(estructuralfeature.many){
                    //TODO eGet is call by reference
                    (eobject.eGet(estructuralfeature) as AbstractCollection<EObject>).add(this.eobjectRegistry[id]);
                }
                else{
                    eobject.eSet(estructuralfeature, this.eobjectRegistry[id]);
                }
    
    
            }
            else{
            */
            // durch spätes auflösen aller Referenzen erspart man sich Probleme mit Ordnungen
            var resolveJob = {
                "eObject": eobject,
                "eStructuralFeature": estructuralfeature,
                "value": id
            };
            this.resolveJobs.push(resolveJob);
            // }
        }
        // Ende BA Teil
    };
    return XmiResource;
}());



/***/ }),

/***/ "./node_modules/xml-formatter/index.js":
/*!*********************************************!*\
  !*** ./node_modules/xml-formatter/index.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * @typedef {Object} XMLFormatterOptions
 *  @property {String} [indentation='    '] The value used for indentation
 *  @property {function(node): boolean} [filter] Return false to exclude the node.
 *  @property {Boolean} [collapseContent=false] True to keep content in the same line as the element. Only works if element contains at least one text node
 *  @property {String} [lineSeparator='\r\n'] The line separator to use
 *  @property {String} [whiteSpaceAtEndOfSelfclosingTag=false] to either end ad self closing tag with `<tag/>` or `<tag />`
 */
/**
 * @typedef {Object} XMLFormatterState
 * @param {String} content
 * @param {Number} level
 * @param {XMLFormatterOptions} options
 */
/**
 * @param {XMLFormatterState} state
 * @return {void}
 */
function newLine(state) {
    if (!state.options.indentation && !state.options.lineSeparator)
        return;
    state.content += state.options.lineSeparator;
    var i;
    for (i = 0; i < state.level; i++) {
        state.content += state.options.indentation;
    }
}
/**
 * @param {XMLFormatterState} state
 * @param {String} content
 * @return {void}
 */
function appendContent(state, content) {
    state.content += content;
}
/**
 * @param {Object} node
 * @param {XMLFormatterState} state
 * @param {Boolean} preserveSpace
 * @return {void}
 */
function processNode(node, state, preserveSpace) {
    if (typeof node.content === 'string') {
        processContentNode(node, state, preserveSpace);
    }
    else if (node.type === 'Element') {
        processElementNode(node, state, preserveSpace);
    }
    else if (node.type === 'ProcessingInstruction') {
        processProcessingIntruction(node, state, preserveSpace);
    }
    else {
        throw new Error('Unknown node type: ' + node.type);
    }
}
/**
 * @param {Object} node
 * @param {XMLFormatterState} state
 * @param {Boolean} preserveSpace
 * @return {void}
 */
function processContentNode(node, state, preserveSpace) {
    if (!preserveSpace) {
        node.content = node.content.trim();
    }
    if (node.content.length > 0) {
        if (!preserveSpace && state.content.length > 0) {
            newLine(state);
        }
        appendContent(state, node.content);
    }
}
/**
 * @param {Object} node
 * @param {XMLFormatterState} state
 * @param {Boolean} preserveSpace
 * @return {void}
 */
function processElementNode(node, state, preserveSpace) {
    if (!preserveSpace && state.content.length > 0) {
        newLine(state);
    }
    appendContent(state, '<' + node.name);
    processAttributes(state, node.attributes);
    if (node.children === null) {
        var selfClosingNodeClosingTag = state.options.whiteSpaceAtEndOfSelfclosingTag ? ' />' : '/>';
        // self-closing node
        appendContent(state, selfClosingNodeClosingTag);
    }
    else if (node.children.length === 0) {
        // empty node
        appendContent(state, '></' + node.name + '>');
    }
    else {
        appendContent(state, '>');
        state.level++;
        var nodePreserveSpace_1 = node.attributes['xml:space'] === 'preserve';
        if (!nodePreserveSpace_1 && state.options.collapseContent) {
            var containsTextNodes = node.children.some(function (child) {
                return child.type === 'Text' && child.content.trim() !== '';
            });
            if (containsTextNodes) {
                nodePreserveSpace_1 = true;
            }
        }
        node.children.forEach(function (child) {
            processNode(child, state, preserveSpace || nodePreserveSpace_1, state.options);
        });
        state.level--;
        if (!preserveSpace && !nodePreserveSpace_1) {
            newLine(state);
        }
        appendContent(state, '</' + node.name + '>');
    }
}
/**
 * @param {XMLFormatterState} state
 * @param {Record<String, String>} attributes
 * @return {void}
 */
function processAttributes(state, attributes) {
    Object.keys(attributes).forEach(function (attr) {
        var escaped = attributes[attr].replace(/"/g, '&quot;');
        appendContent(state, ' ' + attr + '="' + escaped + '"');
    });
}
/**
 * @param {Object} node
 * @param {XMLFormatterState} state
 * @return {void}
 */
function processProcessingIntruction(node, state) {
    if (state.content.length > 0) {
        newLine(state);
    }
    appendContent(state, '<?' + node.name);
    processAttributes(state, node.attributes);
    appendContent(state, '?>');
}
/**
 * Converts the given XML into human readable format.
 *
 * @param {String} xml
 * @param {XMLFormatterOptions} options
 * @returns {string}
 */
function format(xml, options) {
    if (options === void 0) { options = {}; }
    options.indentation = 'indentation' in options ? options.indentation : '    ';
    options.collapseContent = options.collapseContent === true;
    options.lineSeparator = 'lineSeparator' in options ? options.lineSeparator : '\r\n';
    options.whiteSpaceAtEndOfSelfclosingTag = !!options.whiteSpaceAtEndOfSelfclosingTag;
    var parser = __webpack_require__(/*! xml-parser-xo */ "./node_modules/xml-parser-xo/index.js");
    var parsedXml = parser(xml, { filter: options.filter });
    var state = { content: '', level: 0, options: options };
    if (parsedXml.declaration) {
        processProcessingIntruction(parsedXml.declaration, state);
    }
    parsedXml.children.forEach(function (child) {
        processNode(child, state, false);
    });
    return state.content;
}
module.exports = format;


/***/ }),

/***/ "./node_modules/xml-parser-xo/index.js":
/*!*********************************************!*\
  !*** ./node_modules/xml-parser-xo/index.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * @typedef {Object} ParsingOptions
 *  @property {function(node)} filter Returns false to exclude a node. Default is true.
 */
/**
 * Parse the given XML string into an object.
 *
 * @param {String} xml
 * @param {ParsingOptions} [options]
 * @return {Object}
 * @api public
 */
function parse(xml, options) {
    if (options === void 0) { options = {}; }
    options.filter = options.filter || (function () { return true; });
    function nextChild() {
        return tag() || content() || comment() || cdata();
    }
    function nextRootChild() {
        match(/\s*/);
        return tag(true) || comment() || doctype() || processingInstruction(false);
    }
    function document() {
        var decl = declaration();
        var children = [];
        var documentRootNode;
        var child = nextRootChild();
        while (child) {
            if (child.node.type === 'Element') {
                if (documentRootNode) {
                    throw new Error('Found multiple root nodes');
                }
                documentRootNode = child.node;
            }
            if (!child.excluded) {
                children.push(child.node);
            }
            child = nextRootChild();
        }
        if (!documentRootNode) {
            throw new Error('Failed to parse XML');
        }
        return {
            declaration: decl ? decl.node : null,
            root: documentRootNode,
            children: children
        };
    }
    function declaration() {
        return processingInstruction(true);
    }
    function processingInstruction(matchDeclaration) {
        var m = matchDeclaration ? match(/^<\?(xml)\s*/) : match(/^<\?([\w-:.]+)\s*/);
        if (!m)
            return;
        // tag
        var node = {
            name: m[1],
            type: 'ProcessingInstruction',
            attributes: {}
        };
        // attributes
        while (!(eos() || is('?>'))) {
            var attr = attribute();
            if (!attr)
                return node;
            node.attributes[attr.name] = attr.value;
        }
        match(/\?>/);
        return {
            excluded: matchDeclaration ? false : options.filter(node) === false,
            node: node
        };
    }
    function tag(matchRoot) {
        var m = match(/^<([\w-:.]+)\s*/);
        if (!m)
            return;
        // name
        var node = {
            type: 'Element',
            name: m[1],
            attributes: {},
            children: []
        };
        // attributes
        while (!(eos() || is('>') || is('?>') || is('/>'))) {
            var attr = attribute();
            if (!attr)
                return node;
            node.attributes[attr.name] = attr.value;
        }
        var excluded = matchRoot ? false : options.filter(node) === false;
        // self closing tag
        if (match(/^\s*\/>/)) {
            node.children = null;
            return {
                excluded: excluded,
                node: node
            };
        }
        match(/\??>/);
        if (!excluded) {
            // children
            var child = nextChild();
            while (child) {
                if (!child.excluded) {
                    node.children.push(child.node);
                }
                child = nextChild();
            }
        }
        // closing
        match(/^<\/[\w-:.]+>/);
        return {
            excluded: excluded,
            node: node
        };
    }
    function doctype() {
        var m = match(/^<!DOCTYPE\s+[^>]*>/);
        if (m) {
            var node = {
                type: 'DocumentType',
                content: m[0]
            };
            return {
                excluded: options.filter(node) === false,
                node: node
            };
        }
    }
    function cdata() {
        if (xml.startsWith('<![CDATA[')) {
            var endPositionStart = xml.indexOf(']]>');
            if (endPositionStart > -1) {
                var endPositionFinish = endPositionStart + 3;
                var node = {
                    type: 'CDATA',
                    content: xml.substring(0, endPositionFinish)
                };
                xml = xml.slice(endPositionFinish);
                return {
                    excluded: options.filter(node) === false,
                    node: node
                };
            }
        }
    }
    function comment() {
        var m = match(/^<!--[\s\S]*?-->/);
        if (m) {
            var node = {
                type: 'Comment',
                content: m[0]
            };
            return {
                excluded: options.filter(node) === false,
                node: node
            };
        }
    }
    function content() {
        var m = match(/^([^<]+)/);
        if (m) {
            var node = {
                type: 'Text',
                content: m[1]
            };
            return {
                excluded: options.filter(node) === false,
                node: node
            };
        }
    }
    function attribute() {
        var m = match(/([\w:-]+)\s*=\s*("[^"]*"|'[^']*'|\w+)\s*/);
        if (!m)
            return;
        return { name: m[1], value: strip(m[2]) };
    }
    /**
     * Strip quotes from `val`.
     */
    function strip(val) {
        return val.replace(/^['"]|['"]$/g, '');
    }
    /**
     * Match `re` and advance the string.
     */
    function match(re) {
        var m = xml.match(re);
        if (!m)
            return;
        xml = xml.slice(m[0].length);
        return m;
    }
    /**
     * End-of-source.
     */
    function eos() {
        return 0 === xml.length;
    }
    /**
     * Check for `prefix`.
     */
    function is(prefix) {
        return 0 === xml.indexOf(prefix);
    }
    xml = xml.trim();
    return document();
}
module.exports = parse;


/***/ }),

/***/ "./src/app.ts":
/*!********************!*\
  !*** ./src/app.ts ***!
  \********************/
/*! exports provided: main */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "main", function() { return main; });
/* harmony import */ var ecore_XmiResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ecore/XmiResource */ "./node_modules/crossecore/src/XmiResource.ts");
/* harmony import */ var railway_RailwayFactoryImpl__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! railway/RailwayFactoryImpl */ "./src/railway/RailwayFactoryImpl.ts");
/* harmony import */ var railway_RailwayPackageImpl__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! railway/RailwayPackageImpl */ "./src/railway/RailwayPackageImpl.ts");



// import txt from 'C:\Users\Zeus.000\Desktop\CrossEcore Train Benchmark\instances\standard_seed_19871053l\railway-1.xmi';
var railway = railway_RailwayPackageImpl__WEBPACK_IMPORTED_MODULE_2__["RailwayPackageImpl"].eINSTANCE;
var factory = railway_RailwayFactoryImpl__WEBPACK_IMPORTED_MODULE_1__["RailwayFactoryImpl"].eINSTANCE;
var xmiResource;
function main(xmi_sample, file_name) {
    console.log(file_name);
    // console.log(xmi_sample);
    var train_loaded = loadFromXMI(xmi_sample);
    // console.log(train_loaded);
    var counted = countEObjectsAndReferences(train_loaded);
    console.log("Anzahl Objekte: " + counted.no_eobj + "    Anzahl Referenzen oder Kompositionen: " + counted.no_ref);
    console.log(saveToXMI(train_loaded));
    console.log("");
}
function saveToXMI(ecore_instance_to_serialize /*, URL: string*/) {
    var t1 = performance.now();
    xmiResource = new ecore_XmiResource__WEBPACK_IMPORTED_MODULE_0__["XmiResource"](railway, factory, new DOMParser());
    var ret_save = xmiResource.save(ecore_instance_to_serialize);
    var t2 = performance.now();
    console.log("Time to save: " + (t2 - t1) / 1000.0 + "s");
    return ret_save;
}
function loadFromXMI(xmi /*URL: string*/) {
    var t1 = performance.now();
    xmiResource = new ecore_XmiResource__WEBPACK_IMPORTED_MODULE_0__["XmiResource"](railway, factory, new DOMParser());
    var ret_load = xmiResource.load(xmi);
    var t2 = performance.now();
    console.log("Time to load: " + (t2 - t1) / 1000.0 + "s");
    return ret_load;
}
;
function countEObjectsAndReferences(ecore_instance) {
    var counter = { "no_eobj": 0, "no_ref": 0 };
    if (null == ecore_instance) {
        return counter;
    }
    for (var _i = 0, ecore_instance_1 = ecore_instance; _i < ecore_instance_1.length; _i++) {
        var eobject = ecore_instance_1[_i];
        counter.no_eobj++; // zählt korrekt, habe nachgeprüft
        var eclass = eobject.eClass();
        var references = eclass.eAllReferences;
        for (var _a = 0, references_1 = references; _a < references_1.length; _a++) {
            var ref = references_1[_a];
            if (ref.many) {
                counter.no_ref += eobject.eGet(ref).length; // Achtung: es werden auch bidirektional angepasste Referenzen gezählt -> korrekt
                if (ref.containment) {
                    var counter_containment = countEObjectsAndReferences(eobject.eGet(ref));
                    counter.no_eobj += counter_containment.no_eobj;
                    counter.no_ref += counter_containment.no_ref;
                }
            }
            else {
                counter.no_ref++; // Achtung: es werden auch bidirektional angepasste Referenzen gezählt -> korrekt
                if (ref.containment) {
                    var counter_containment = countEObjectsAndReferences([eobject.eGet(ref)]);
                    counter.no_eobj += counter_containment.no_eobj;
                    counter.no_ref += counter_containment.no_ref;
                }
            }
        }
    }
    return counter;
}
// main();


/***/ }),

/***/ "./src/railway/Position.ts":
/*!*********************************!*\
  !*** ./src/railway/Position.ts ***!
  \*********************************/
/*! exports provided: Position */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Position", function() { return Position; });
var Position = /** @class */ (function () {
    function Position(value, name, literal) {
        this.value = value;
        this.name = name;
        this.literal = literal;
    }
    Position.get_string = function (literal) {
        for (var i = 0; i < this.VALUES_ARRAY.length; i++) {
            var result = this.VALUES_ARRAY[i];
            if (result.toString() === literal) {
                return result;
            }
        }
        return null;
    };
    Position.getByName = function (name) {
        for (var i = 0; i < this.VALUES_ARRAY.length; i++) {
            var result = this.VALUES_ARRAY[i];
            if (result.getName() == name) {
                return result;
            }
        }
        return null;
    };
    Position.get_number = function (value) {
        switch (value) {
            case this.FAILURE_VALUE: return this.FAILURE;
            case this.LEFT_VALUE: return this.LEFT;
            case this.RIGHT_VALUE: return this.RIGHT;
            case this.STRAIGHT_VALUE: return this.STRAIGHT;
        }
        return null;
    };
    Position.prototype.getLiteral = function () {
        return this.literal;
    };
    Position.prototype.getName = function () {
        return this.name;
    };
    Position.prototype.getValue = function () {
        return this.value;
    };
    Position.prototype.toString = function () {
        return this.literal;
    };
    Position.FAILURE_VALUE = 0;
    Position.LEFT_VALUE = 1;
    Position.RIGHT_VALUE = 2;
    Position.STRAIGHT_VALUE = 3;
    Position.FAILURE = new Position(0, "FAILURE", "FAILURE");
    Position.LEFT = new Position(1, "LEFT", "LEFT");
    Position.RIGHT = new Position(2, "RIGHT", "RIGHT");
    Position.STRAIGHT = new Position(3, "STRAIGHT", "STRAIGHT");
    Position.VALUES_ARRAY = [
        Position.FAILURE,
        Position.LEFT,
        Position.RIGHT,
        Position.STRAIGHT
    ];
    return Position;
}());



/***/ }),

/***/ "./src/railway/RailwayContainerBase.ts":
/*!*********************************************!*\
  !*** ./src/railway/RailwayContainerBase.ts ***!
  \*********************************************/
/*! exports provided: RailwayContainerBase */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RailwayContainerBase", function() { return RailwayContainerBase; });
/* harmony import */ var ecore_OrderedSet__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ecore/OrderedSet */ "./node_modules/crossecore/src/OrderedSet.ts");
/* harmony import */ var ecore_BasicEObjectImpl__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ecore/BasicEObjectImpl */ "./node_modules/crossecore/src/BasicEObjectImpl.ts");
/* harmony import */ var railway_RailwayPackageLiterals__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! railway/RailwayPackageLiterals */ "./src/railway/RailwayPackageLiterals.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();



var RailwayContainerBase = /** @class */ (function (_super) {
    __extends(RailwayContainerBase, _super);
    function RailwayContainerBase() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._invalids = null;
        _this._semaphores = null;
        _this._routes = null;
        return _this;
    }
    Object.defineProperty(RailwayContainerBase.prototype, "invalids", {
        get: function () {
            if (this._invalids === null) {
                this._invalids = new ecore_OrderedSet__WEBPACK_IMPORTED_MODULE_0__["OrderedSet"](this, railway_RailwayPackageLiterals__WEBPACK_IMPORTED_MODULE_2__["RailwayPackageLiterals"].RAILWAY_CONTAINER__INVALIDS, ecore_BasicEObjectImpl__WEBPACK_IMPORTED_MODULE_1__["BasicEObjectImpl"].EOPPOSITE_FEATURE_BASE - railway_RailwayPackageLiterals__WEBPACK_IMPORTED_MODULE_2__["RailwayPackageLiterals"].RAILWAY_CONTAINER__INVALIDS);
            }
            return this._invalids;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RailwayContainerBase.prototype, "semaphores", {
        get: function () {
            if (this._semaphores === null) {
                this._semaphores = new ecore_OrderedSet__WEBPACK_IMPORTED_MODULE_0__["OrderedSet"](this, railway_RailwayPackageLiterals__WEBPACK_IMPORTED_MODULE_2__["RailwayPackageLiterals"].RAILWAY_CONTAINER__SEMAPHORES, ecore_BasicEObjectImpl__WEBPACK_IMPORTED_MODULE_1__["BasicEObjectImpl"].EOPPOSITE_FEATURE_BASE - railway_RailwayPackageLiterals__WEBPACK_IMPORTED_MODULE_2__["RailwayPackageLiterals"].RAILWAY_CONTAINER__SEMAPHORES);
            }
            return this._semaphores;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RailwayContainerBase.prototype, "routes", {
        get: function () {
            if (this._routes === null) {
                this._routes = new ecore_OrderedSet__WEBPACK_IMPORTED_MODULE_0__["OrderedSet"](this, railway_RailwayPackageLiterals__WEBPACK_IMPORTED_MODULE_2__["RailwayPackageLiterals"].RAILWAY_CONTAINER__ROUTES, ecore_BasicEObjectImpl__WEBPACK_IMPORTED_MODULE_1__["BasicEObjectImpl"].EOPPOSITE_FEATURE_BASE - railway_RailwayPackageLiterals__WEBPACK_IMPORTED_MODULE_2__["RailwayPackageLiterals"].RAILWAY_CONTAINER__ROUTES);
            }
            return this._routes;
        },
        enumerable: false,
        configurable: true
    });
    RailwayContainerBase.prototype.eStaticClass = function () {
        return RailwayContainerBase.eStaticClass;
    };
    RailwayContainerBase.prototype.eGet_number_boolean_boolean = function (featureID, resolve, coreType) {
        switch (featureID) {
            case railway_RailwayPackageLiterals__WEBPACK_IMPORTED_MODULE_2__["RailwayPackageLiterals"].RAILWAY_CONTAINER__INVALIDS:
                return this.invalids;
            case railway_RailwayPackageLiterals__WEBPACK_IMPORTED_MODULE_2__["RailwayPackageLiterals"].RAILWAY_CONTAINER__SEMAPHORES:
                return this.semaphores;
            case railway_RailwayPackageLiterals__WEBPACK_IMPORTED_MODULE_2__["RailwayPackageLiterals"].RAILWAY_CONTAINER__ROUTES:
                return this.routes;
        }
        //return this.eGetFromBasicEObjectImpl(featureID, resolve, coreType);
        return _super.prototype.eGet.call(this, featureID, resolve, coreType);
    };
    RailwayContainerBase.prototype.eSet_number_any = function (featureID, newValue) {
        switch (featureID) {
            case railway_RailwayPackageLiterals__WEBPACK_IMPORTED_MODULE_2__["RailwayPackageLiterals"].RAILWAY_CONTAINER__INVALIDS:
                this.invalids.clear();
                this.invalids.addAll(newValue);
                return;
            case railway_RailwayPackageLiterals__WEBPACK_IMPORTED_MODULE_2__["RailwayPackageLiterals"].RAILWAY_CONTAINER__SEMAPHORES:
                this.semaphores.clear();
                this.semaphores.addAll(newValue);
                return;
            case railway_RailwayPackageLiterals__WEBPACK_IMPORTED_MODULE_2__["RailwayPackageLiterals"].RAILWAY_CONTAINER__ROUTES:
                this.routes.clear();
                this.routes.addAll(newValue);
                return;
        }
        _super.prototype.eSet_number_any.call(this, featureID, newValue);
    };
    return RailwayContainerBase;
}(ecore_BasicEObjectImpl__WEBPACK_IMPORTED_MODULE_1__["BasicEObjectImpl"]));



/***/ }),

/***/ "./src/railway/RailwayContainerImpl.ts":
/*!*********************************************!*\
  !*** ./src/railway/RailwayContainerImpl.ts ***!
  \*********************************************/
/*! exports provided: RailwayContainerImpl */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RailwayContainerImpl", function() { return RailwayContainerImpl; });
/* harmony import */ var ecore_Set__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ecore/Set */ "./node_modules/crossecore/src/Set.ts");
/* harmony import */ var railway_RailwayContainerBase__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! railway/RailwayContainerBase */ "./src/railway/RailwayContainerBase.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();


/* import Ecore*/
var RailwayContainerImpl = /** @class */ (function (_super) {
    __extends(RailwayContainerImpl, _super);
    function RailwayContainerImpl() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    RailwayContainerImpl.allInstances_ = new ecore_Set__WEBPACK_IMPORTED_MODULE_0__["Set"]();
    return RailwayContainerImpl;
}(railway_RailwayContainerBase__WEBPACK_IMPORTED_MODULE_1__["RailwayContainerBase"]));



/***/ }),

/***/ "./src/railway/RailwayElementBase.ts":
/*!*******************************************!*\
  !*** ./src/railway/RailwayElementBase.ts ***!
  \*******************************************/
/*! exports provided: RailwayElementBase */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RailwayElementBase", function() { return RailwayElementBase; });
/* harmony import */ var ecore_BasicEObjectImpl__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ecore/BasicEObjectImpl */ "./node_modules/crossecore/src/BasicEObjectImpl.ts");
/* harmony import */ var railway_RailwayPackageLiterals__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! railway/RailwayPackageLiterals */ "./src/railway/RailwayPackageLiterals.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();


var RailwayElementBase = /** @class */ (function (_super) {
    __extends(RailwayElementBase, _super);
    function RailwayElementBase() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._id = 0;
        return _this;
    }
    Object.defineProperty(RailwayElementBase.prototype, "id", {
        get: function () {
            return this._id;
        },
        set: function (value) {
            this._id = value;
        },
        enumerable: false,
        configurable: true
    });
    RailwayElementBase.prototype.eStaticClass = function () {
        return RailwayElementBase.eStaticClass;
    };
    RailwayElementBase.prototype.eGet_number_boolean_boolean = function (featureID, resolve, coreType) {
        switch (featureID) {
            case railway_RailwayPackageLiterals__WEBPACK_IMPORTED_MODULE_1__["RailwayPackageLiterals"].RAILWAY_ELEMENT__ID:
                return this.id;
        }
        //return this.eGetFromBasicEObjectImpl(featureID, resolve, coreType);
        return _super.prototype.eGet.call(this, featureID, resolve, coreType);
    };
    RailwayElementBase.prototype.eSet_number_any = function (featureID, newValue) {
        switch (featureID) {
            case railway_RailwayPackageLiterals__WEBPACK_IMPORTED_MODULE_1__["RailwayPackageLiterals"].RAILWAY_ELEMENT__ID:
                this.id = newValue;
                return;
        }
        _super.prototype.eSet_number_any.call(this, featureID, newValue);
    };
    return RailwayElementBase;
}(ecore_BasicEObjectImpl__WEBPACK_IMPORTED_MODULE_0__["BasicEObjectImpl"]));



/***/ }),

/***/ "./src/railway/RailwayElementImpl.ts":
/*!*******************************************!*\
  !*** ./src/railway/RailwayElementImpl.ts ***!
  \*******************************************/
/*! exports provided: RailwayElementImpl */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RailwayElementImpl", function() { return RailwayElementImpl; });
/* harmony import */ var ecore_Set__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ecore/Set */ "./node_modules/crossecore/src/Set.ts");
/* harmony import */ var railway_RailwayElementBase__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! railway/RailwayElementBase */ "./src/railway/RailwayElementBase.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();


/* import Ecore*/
var RailwayElementImpl = /** @class */ (function (_super) {
    __extends(RailwayElementImpl, _super);
    function RailwayElementImpl() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    RailwayElementImpl.allInstances_ = new ecore_Set__WEBPACK_IMPORTED_MODULE_0__["Set"]();
    return RailwayElementImpl;
}(railway_RailwayElementBase__WEBPACK_IMPORTED_MODULE_1__["RailwayElementBase"]));



/***/ }),

/***/ "./src/railway/RailwayFactoryImpl.ts":
/*!*******************************************!*\
  !*** ./src/railway/RailwayFactoryImpl.ts ***!
  \*******************************************/
/*! exports provided: RailwayFactoryImpl */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RailwayFactoryImpl", function() { return RailwayFactoryImpl; });
/* harmony import */ var ecore_EFactoryImpl__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ecore/EFactoryImpl */ "./node_modules/crossecore/src/EFactoryImpl.ts");
/* harmony import */ var ecore_AllInstances__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ecore/AllInstances */ "./node_modules/crossecore/src/AllInstances.ts");
/* harmony import */ var railway_RouteImpl__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! railway/RouteImpl */ "./src/railway/RouteImpl.ts");
/* harmony import */ var railway_RailwayContainerImpl__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! railway/RailwayContainerImpl */ "./src/railway/RailwayContainerImpl.ts");
/* harmony import */ var railway_Position__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! railway/Position */ "./src/railway/Position.ts");
/* harmony import */ var railway_TrackElementImpl__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! railway/TrackElementImpl */ "./src/railway/TrackElementImpl.ts");
/* harmony import */ var railway_RailwayPackageImpl__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! railway/RailwayPackageImpl */ "./src/railway/RailwayPackageImpl.ts");
/* harmony import */ var railway_SensorImpl__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! railway/SensorImpl */ "./src/railway/SensorImpl.ts");
/* harmony import */ var railway_SegmentImpl__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! railway/SegmentImpl */ "./src/railway/SegmentImpl.ts");
/* harmony import */ var railway_SwitchImpl__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! railway/SwitchImpl */ "./src/railway/SwitchImpl.ts");
/* harmony import */ var railway_SwitchPositionImpl__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! railway/SwitchPositionImpl */ "./src/railway/SwitchPositionImpl.ts");
/* harmony import */ var railway_Signal__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! railway/Signal */ "./src/railway/Signal.ts");
/* harmony import */ var railway_SemaphoreImpl__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! railway/SemaphoreImpl */ "./src/railway/SemaphoreImpl.ts");
/* harmony import */ var railway_RailwayElementImpl__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! railway/RailwayElementImpl */ "./src/railway/RailwayElementImpl.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();














var RailwayFactoryImpl = /** @class */ (function (_super) {
    __extends(RailwayFactoryImpl, _super);
    function RailwayFactoryImpl() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.createSegment = function () {
            var theSegment = new railway_SegmentImpl__WEBPACK_IMPORTED_MODULE_8__["SegmentImpl"]();
            ecore_AllInstances__WEBPACK_IMPORTED_MODULE_1__["AllInstances"].INSTANCE.put(theSegment, "Segment");
            return theSegment;
        };
        _this.createTrackElement = function () {
            var theTrackElement = new railway_TrackElementImpl__WEBPACK_IMPORTED_MODULE_5__["TrackElementImpl"]();
            ecore_AllInstances__WEBPACK_IMPORTED_MODULE_1__["AllInstances"].INSTANCE.put(theTrackElement, "TrackElement");
            return theTrackElement;
        };
        _this.createSwitch = function () {
            var theSwitch = new railway_SwitchImpl__WEBPACK_IMPORTED_MODULE_9__["SwitchImpl"]();
            ecore_AllInstances__WEBPACK_IMPORTED_MODULE_1__["AllInstances"].INSTANCE.put(theSwitch, "Switch");
            return theSwitch;
        };
        _this.createRoute = function () {
            var theRoute = new railway_RouteImpl__WEBPACK_IMPORTED_MODULE_2__["RouteImpl"]();
            ecore_AllInstances__WEBPACK_IMPORTED_MODULE_1__["AllInstances"].INSTANCE.put(theRoute, "Route");
            return theRoute;
        };
        _this.createSemaphore = function () {
            var theSemaphore = new railway_SemaphoreImpl__WEBPACK_IMPORTED_MODULE_12__["SemaphoreImpl"]();
            ecore_AllInstances__WEBPACK_IMPORTED_MODULE_1__["AllInstances"].INSTANCE.put(theSemaphore, "Semaphore");
            return theSemaphore;
        };
        _this.createSwitchPosition = function () {
            var theSwitchPosition = new railway_SwitchPositionImpl__WEBPACK_IMPORTED_MODULE_10__["SwitchPositionImpl"]();
            ecore_AllInstances__WEBPACK_IMPORTED_MODULE_1__["AllInstances"].INSTANCE.put(theSwitchPosition, "SwitchPosition");
            return theSwitchPosition;
        };
        _this.createRailwayElement = function () {
            var theRailwayElement = new railway_RailwayElementImpl__WEBPACK_IMPORTED_MODULE_13__["RailwayElementImpl"]();
            ecore_AllInstances__WEBPACK_IMPORTED_MODULE_1__["AllInstances"].INSTANCE.put(theRailwayElement, "RailwayElement");
            return theRailwayElement;
        };
        _this.createSensor = function () {
            var theSensor = new railway_SensorImpl__WEBPACK_IMPORTED_MODULE_7__["SensorImpl"]();
            ecore_AllInstances__WEBPACK_IMPORTED_MODULE_1__["AllInstances"].INSTANCE.put(theSensor, "Sensor");
            return theSensor;
        };
        _this.createRailwayContainer = function () {
            var theRailwayContainer = new railway_RailwayContainerImpl__WEBPACK_IMPORTED_MODULE_3__["RailwayContainerImpl"]();
            ecore_AllInstances__WEBPACK_IMPORTED_MODULE_1__["AllInstances"].INSTANCE.put(theRailwayContainer, "RailwayContainer");
            return theRailwayContainer;
        };
        return _this;
    }
    RailwayFactoryImpl.init = function () {
        return new RailwayFactoryImpl();
    };
    RailwayFactoryImpl.prototype.create = function (eClass) {
        switch (eClass.getClassifierID()) {
            case railway_RailwayPackageImpl__WEBPACK_IMPORTED_MODULE_6__["RailwayPackageImpl"].SEGMENT: return this.createSegment();
            case railway_RailwayPackageImpl__WEBPACK_IMPORTED_MODULE_6__["RailwayPackageImpl"].SWITCH: return this.createSwitch();
            case railway_RailwayPackageImpl__WEBPACK_IMPORTED_MODULE_6__["RailwayPackageImpl"].ROUTE: return this.createRoute();
            case railway_RailwayPackageImpl__WEBPACK_IMPORTED_MODULE_6__["RailwayPackageImpl"].SEMAPHORE: return this.createSemaphore();
            case railway_RailwayPackageImpl__WEBPACK_IMPORTED_MODULE_6__["RailwayPackageImpl"].SWITCHPOSITION: return this.createSwitchPosition();
            case railway_RailwayPackageImpl__WEBPACK_IMPORTED_MODULE_6__["RailwayPackageImpl"].SENSOR: return this.createSensor();
            case railway_RailwayPackageImpl__WEBPACK_IMPORTED_MODULE_6__["RailwayPackageImpl"].RAILWAYCONTAINER: return this.createRailwayContainer();
            default:
                throw new Error("The class '" + eClass.name + "' is not a valid classifier");
        }
    };
    RailwayFactoryImpl.prototype.createFromString = function (eDataType, initialValue) {
        switch (eDataType.getClassifierID()) {
            case railway_RailwayPackageImpl__WEBPACK_IMPORTED_MODULE_6__["RailwayPackageImpl"].SIGNAL:
                return this.createSignalFromString(eDataType, initialValue);
            case railway_RailwayPackageImpl__WEBPACK_IMPORTED_MODULE_6__["RailwayPackageImpl"].POSITION:
                return this.createPositionFromString(eDataType, initialValue);
            default:
                throw new Error("The datatype '" + eDataType.name + "' is not a valid classifier");
        }
    };
    RailwayFactoryImpl.prototype.convertToString = function (eDataType, instanceValue) {
        switch (eDataType.getClassifierID()) {
            case railway_RailwayPackageImpl__WEBPACK_IMPORTED_MODULE_6__["RailwayPackageImpl"].SIGNAL:
                return this.convertSignalToString(eDataType, instanceValue);
            case railway_RailwayPackageImpl__WEBPACK_IMPORTED_MODULE_6__["RailwayPackageImpl"].POSITION:
                return this.convertPositionToString(eDataType, instanceValue);
            default:
                throw new Error("The datatype '" + eDataType.name + "' is not a valid classifier");
        }
    };
    RailwayFactoryImpl.prototype.createSignalFromString = function (eDataType, initialValue) {
        var result = railway_Signal__WEBPACK_IMPORTED_MODULE_11__["Signal"].get_string(initialValue);
        if (result == null)
            throw new Error("The value '" + initialValue + "' is not a valid enumerator of '" + eDataType.name + "'");
        return result;
    };
    RailwayFactoryImpl.prototype.convertSignalToString = function (eDataType, instanceValue) {
        return instanceValue === null ? null : instanceValue.toString();
    };
    RailwayFactoryImpl.prototype.createPositionFromString = function (eDataType, initialValue) {
        var result = railway_Position__WEBPACK_IMPORTED_MODULE_4__["Position"].get_string(initialValue);
        if (result == null)
            throw new Error("The value '" + initialValue + "' is not a valid enumerator of '" + eDataType.name + "'");
        return result;
    };
    RailwayFactoryImpl.prototype.convertPositionToString = function (eDataType, instanceValue) {
        return instanceValue === null ? null : instanceValue.toString();
    };
    RailwayFactoryImpl.eINSTANCE = RailwayFactoryImpl.init();
    return RailwayFactoryImpl;
}(ecore_EFactoryImpl__WEBPACK_IMPORTED_MODULE_0__["EFactoryImpl"]));



/***/ }),

/***/ "./src/railway/RailwayPackageImpl.ts":
/*!*******************************************!*\
  !*** ./src/railway/RailwayPackageImpl.ts ***!
  \*******************************************/
/*! exports provided: RailwayPackageImpl */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RailwayPackageImpl", function() { return RailwayPackageImpl; });
/* harmony import */ var ecore_EPackageImpl__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ecore/EPackageImpl */ "./node_modules/crossecore/src/EPackageImpl.ts");
/* harmony import */ var ecore_EcorePackageImpl__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ecore/EcorePackageImpl */ "./node_modules/crossecore/src/EcorePackageImpl.ts");
/* harmony import */ var ecore_EcoreFactoryImpl__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ecore/EcoreFactoryImpl */ "./node_modules/crossecore/src/EcoreFactoryImpl.ts");
/* harmony import */ var railway_SwitchPositionBase__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! railway/SwitchPositionBase */ "./src/railway/SwitchPositionBase.ts");
/* harmony import */ var railway_RouteImpl__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! railway/RouteImpl */ "./src/railway/RouteImpl.ts");
/* harmony import */ var railway_RailwayContainerImpl__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! railway/RailwayContainerImpl */ "./src/railway/RailwayContainerImpl.ts");
/* harmony import */ var railway_SensorBase__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! railway/SensorBase */ "./src/railway/SensorBase.ts");
/* harmony import */ var railway_TrackElementImpl__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! railway/TrackElementImpl */ "./src/railway/TrackElementImpl.ts");
/* harmony import */ var railway_SensorImpl__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! railway/SensorImpl */ "./src/railway/SensorImpl.ts");
/* harmony import */ var railway_RailwayContainerBase__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! railway/RailwayContainerBase */ "./src/railway/RailwayContainerBase.ts");
/* harmony import */ var railway_SegmentImpl__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! railway/SegmentImpl */ "./src/railway/SegmentImpl.ts");
/* harmony import */ var railway_SwitchImpl__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! railway/SwitchImpl */ "./src/railway/SwitchImpl.ts");
/* harmony import */ var railway_SwitchPositionImpl__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! railway/SwitchPositionImpl */ "./src/railway/SwitchPositionImpl.ts");
/* harmony import */ var railway_SemaphoreBase__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! railway/SemaphoreBase */ "./src/railway/SemaphoreBase.ts");
/* harmony import */ var railway_RailwayElementBase__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! railway/RailwayElementBase */ "./src/railway/RailwayElementBase.ts");
/* harmony import */ var railway_SegmentBase__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! railway/SegmentBase */ "./src/railway/SegmentBase.ts");
/* harmony import */ var railway_TrackElementBase__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! railway/TrackElementBase */ "./src/railway/TrackElementBase.ts");
/* harmony import */ var railway_RouteBase__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! railway/RouteBase */ "./src/railway/RouteBase.ts");
/* harmony import */ var railway_SwitchBase__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! railway/SwitchBase */ "./src/railway/SwitchBase.ts");
/* harmony import */ var railway_SemaphoreImpl__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! railway/SemaphoreImpl */ "./src/railway/SemaphoreImpl.ts");
/* harmony import */ var railway_RailwayElementImpl__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! railway/RailwayElementImpl */ "./src/railway/RailwayElementImpl.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();





















var RailwayPackageImpl = /** @class */ (function (_super) {
    __extends(RailwayPackageImpl, _super);
    function RailwayPackageImpl() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.isCreated = false;
        _this.createPackageContents = function () {
            if (_this.isCreated)
                return;
            _this.isCreated = true;
            _this.SegmentEClass = _this.createEClass(RailwayPackageImpl.SEGMENT);
            railway_SegmentBase__WEBPACK_IMPORTED_MODULE_15__["SegmentBase"].eStaticClass = _this.SegmentEClass;
            _this.createEAttribute(_this.SegmentEClass, RailwayPackageImpl.SEGMENT__LENGTH);
            _this.TrackElementEClass = _this.createEClass(RailwayPackageImpl.TRACKELEMENT);
            railway_TrackElementBase__WEBPACK_IMPORTED_MODULE_16__["TrackElementBase"].eStaticClass = _this.TrackElementEClass;
            _this.createEReference(_this.TrackElementEClass, RailwayPackageImpl.TRACK_ELEMENT__SENSOR);
            _this.createEReference(_this.TrackElementEClass, RailwayPackageImpl.TRACK_ELEMENT__CONNECTS_TO);
            _this.SwitchEClass = _this.createEClass(RailwayPackageImpl.SWITCH);
            railway_SwitchBase__WEBPACK_IMPORTED_MODULE_18__["SwitchBase"].eStaticClass = _this.SwitchEClass;
            _this.createEAttribute(_this.SwitchEClass, RailwayPackageImpl.SWITCH__CURRENT_POSITION);
            _this.createEReference(_this.SwitchEClass, RailwayPackageImpl.SWITCH__POSITIONS);
            _this.RouteEClass = _this.createEClass(RailwayPackageImpl.ROUTE);
            railway_RouteBase__WEBPACK_IMPORTED_MODULE_17__["RouteBase"].eStaticClass = _this.RouteEClass;
            _this.createEReference(_this.RouteEClass, RailwayPackageImpl.ROUTE__ENTRY);
            _this.createEReference(_this.RouteEClass, RailwayPackageImpl.ROUTE__FOLLOWS);
            _this.createEReference(_this.RouteEClass, RailwayPackageImpl.ROUTE__EXIT);
            _this.createEReference(_this.RouteEClass, RailwayPackageImpl.ROUTE__DEFINED_BY);
            _this.SemaphoreEClass = _this.createEClass(RailwayPackageImpl.SEMAPHORE);
            railway_SemaphoreBase__WEBPACK_IMPORTED_MODULE_13__["SemaphoreBase"].eStaticClass = _this.SemaphoreEClass;
            _this.createEAttribute(_this.SemaphoreEClass, RailwayPackageImpl.SEMAPHORE__SIGNAL);
            _this.SwitchPositionEClass = _this.createEClass(RailwayPackageImpl.SWITCHPOSITION);
            railway_SwitchPositionBase__WEBPACK_IMPORTED_MODULE_3__["SwitchPositionBase"].eStaticClass = _this.SwitchPositionEClass;
            _this.createEReference(_this.SwitchPositionEClass, RailwayPackageImpl.SWITCH_POSITION__SWITCH);
            _this.createEAttribute(_this.SwitchPositionEClass, RailwayPackageImpl.SWITCH_POSITION__POSITION);
            _this.createEReference(_this.SwitchPositionEClass, RailwayPackageImpl.SWITCH_POSITION__ROUTE);
            _this.RailwayElementEClass = _this.createEClass(RailwayPackageImpl.RAILWAYELEMENT);
            railway_RailwayElementBase__WEBPACK_IMPORTED_MODULE_14__["RailwayElementBase"].eStaticClass = _this.RailwayElementEClass;
            _this.createEAttribute(_this.RailwayElementEClass, RailwayPackageImpl.RAILWAY_ELEMENT__ID);
            _this.SensorEClass = _this.createEClass(RailwayPackageImpl.SENSOR);
            railway_SensorBase__WEBPACK_IMPORTED_MODULE_6__["SensorBase"].eStaticClass = _this.SensorEClass;
            _this.createEReference(_this.SensorEClass, RailwayPackageImpl.SENSOR__ELEMENTS);
            _this.RailwayContainerEClass = _this.createEClass(RailwayPackageImpl.RAILWAYCONTAINER);
            railway_RailwayContainerBase__WEBPACK_IMPORTED_MODULE_9__["RailwayContainerBase"].eStaticClass = _this.RailwayContainerEClass;
            _this.createEReference(_this.RailwayContainerEClass, RailwayPackageImpl.RAILWAY_CONTAINER__INVALIDS);
            _this.createEReference(_this.RailwayContainerEClass, RailwayPackageImpl.RAILWAY_CONTAINER__SEMAPHORES);
            _this.createEReference(_this.RailwayContainerEClass, RailwayPackageImpl.RAILWAY_CONTAINER__ROUTES);
            _this.SignalEEnum = _this.createEEnum(RailwayPackageImpl.SIGNAL);
            _this.PositionEEnum = _this.createEEnum(RailwayPackageImpl.POSITION);
        };
        _this.isInitialized = false;
        _this.initializePackageContents = function () {
            if (_this.isInitialized)
                return;
            _this.isInitialized = true;
            // Initialize package
            _this.name = RailwayPackageImpl.eNAME;
            _this.nsPrefix = RailwayPackageImpl.eNS_PREFIX;
            _this.nsURI = RailwayPackageImpl.eNS_URI;
            _this.SegmentEClass.eSuperTypes.add(_this.getTrackElement());
            _this.TrackElementEClass.eSuperTypes.add(_this.getRailwayElement());
            _this.SwitchEClass.eSuperTypes.add(_this.getTrackElement());
            _this.RouteEClass.eSuperTypes.add(_this.getRailwayElement());
            _this.SemaphoreEClass.eSuperTypes.add(_this.getRailwayElement());
            _this.SwitchPositionEClass.eSuperTypes.add(_this.getRailwayElement());
            _this.SensorEClass.eSuperTypes.add(_this.getRailwayElement());
            var op = null;
            _this.initEClass(_this.SegmentEClass, railway_SegmentImpl__WEBPACK_IMPORTED_MODULE_10__["SegmentImpl"], "Segment", !ecore_EPackageImpl__WEBPACK_IMPORTED_MODULE_0__["EPackageImpl"].IS_ABSTRACT, !ecore_EPackageImpl__WEBPACK_IMPORTED_MODULE_0__["EPackageImpl"].IS_INTERFACE, ecore_EPackageImpl__WEBPACK_IMPORTED_MODULE_0__["EPackageImpl"].IS_GENERATED_INSTANCE_CLASS);
            _this.initEAttribute_EClassifier(_this.getSegment_Length(), _this.ecorePackage.getEInt(), "length", "0", 1, 1, railway_SegmentImpl__WEBPACK_IMPORTED_MODULE_10__["SegmentImpl"], !ecore_EPackageImpl__WEBPACK_IMPORTED_MODULE_0__["EPackageImpl"].IS_TRANSIENT, !ecore_EPackageImpl__WEBPACK_IMPORTED_MODULE_0__["EPackageImpl"].IS_VOLATILE, ecore_EPackageImpl__WEBPACK_IMPORTED_MODULE_0__["EPackageImpl"].IS_CHANGEABLE, !ecore_EPackageImpl__WEBPACK_IMPORTED_MODULE_0__["EPackageImpl"].IS_UNSETTABLE, !ecore_EPackageImpl__WEBPACK_IMPORTED_MODULE_0__["EPackageImpl"].IS_ID, ecore_EPackageImpl__WEBPACK_IMPORTED_MODULE_0__["EPackageImpl"].IS_UNIQUE, !ecore_EPackageImpl__WEBPACK_IMPORTED_MODULE_0__["EPackageImpl"].IS_DERIVED, ecore_EPackageImpl__WEBPACK_IMPORTED_MODULE_0__["EPackageImpl"].IS_ORDERED);
            _this.initEClass(_this.TrackElementEClass, railway_TrackElementImpl__WEBPACK_IMPORTED_MODULE_7__["TrackElementImpl"], "TrackElement", ecore_EPackageImpl__WEBPACK_IMPORTED_MODULE_0__["EPackageImpl"].IS_ABSTRACT, !ecore_EPackageImpl__WEBPACK_IMPORTED_MODULE_0__["EPackageImpl"].IS_INTERFACE, ecore_EPackageImpl__WEBPACK_IMPORTED_MODULE_0__["EPackageImpl"].IS_GENERATED_INSTANCE_CLASS);
            _this.initEReference(_this.getTrackElement_Sensor(), _this.getSensor(), _this.getSensor_Elements(), "sensor", null, 0, 1, railway_TrackElementImpl__WEBPACK_IMPORTED_MODULE_7__["TrackElementImpl"], !ecore_EPackageImpl__WEBPACK_IMPORTED_MODULE_0__["EPackageImpl"].IS_TRANSIENT, !ecore_EPackageImpl__WEBPACK_IMPORTED_MODULE_0__["EPackageImpl"].IS_VOLATILE, ecore_EPackageImpl__WEBPACK_IMPORTED_MODULE_0__["EPackageImpl"].IS_CHANGEABLE, !ecore_EPackageImpl__WEBPACK_IMPORTED_MODULE_0__["EPackageImpl"].IS_COMPOSITE, ecore_EPackageImpl__WEBPACK_IMPORTED_MODULE_0__["EPackageImpl"].IS_RESOLVE_PROXIES, !ecore_EPackageImpl__WEBPACK_IMPORTED_MODULE_0__["EPackageImpl"].IS_UNSETTABLE, ecore_EPackageImpl__WEBPACK_IMPORTED_MODULE_0__["EPackageImpl"].IS_UNIQUE, !ecore_EPackageImpl__WEBPACK_IMPORTED_MODULE_0__["EPackageImpl"].IS_DERIVED, ecore_EPackageImpl__WEBPACK_IMPORTED_MODULE_0__["EPackageImpl"].IS_ORDERED);
            _this.initEReference(_this.getTrackElement_ConnectsTo(), _this.getTrackElement(), null, "connectsTo", null, 0, -1, railway_TrackElementImpl__WEBPACK_IMPORTED_MODULE_7__["TrackElementImpl"], !ecore_EPackageImpl__WEBPACK_IMPORTED_MODULE_0__["EPackageImpl"].IS_TRANSIENT, !ecore_EPackageImpl__WEBPACK_IMPORTED_MODULE_0__["EPackageImpl"].IS_VOLATILE, ecore_EPackageImpl__WEBPACK_IMPORTED_MODULE_0__["EPackageImpl"].IS_CHANGEABLE, !ecore_EPackageImpl__WEBPACK_IMPORTED_MODULE_0__["EPackageImpl"].IS_COMPOSITE, ecore_EPackageImpl__WEBPACK_IMPORTED_MODULE_0__["EPackageImpl"].IS_RESOLVE_PROXIES, !ecore_EPackageImpl__WEBPACK_IMPORTED_MODULE_0__["EPackageImpl"].IS_UNSETTABLE, ecore_EPackageImpl__WEBPACK_IMPORTED_MODULE_0__["EPackageImpl"].IS_UNIQUE, !ecore_EPackageImpl__WEBPACK_IMPORTED_MODULE_0__["EPackageImpl"].IS_DERIVED, ecore_EPackageImpl__WEBPACK_IMPORTED_MODULE_0__["EPackageImpl"].IS_ORDERED);
            _this.initEClass(_this.SwitchEClass, railway_SwitchImpl__WEBPACK_IMPORTED_MODULE_11__["SwitchImpl"], "Switch", !ecore_EPackageImpl__WEBPACK_IMPORTED_MODULE_0__["EPackageImpl"].IS_ABSTRACT, !ecore_EPackageImpl__WEBPACK_IMPORTED_MODULE_0__["EPackageImpl"].IS_INTERFACE, ecore_EPackageImpl__WEBPACK_IMPORTED_MODULE_0__["EPackageImpl"].IS_GENERATED_INSTANCE_CLASS);
            _this.initEAttribute_EClassifier(_this.getSwitch_CurrentPosition(), _this.getPosition(), "currentPosition", "FAILURE", 1, 1, railway_SwitchImpl__WEBPACK_IMPORTED_MODULE_11__["SwitchImpl"], !ecore_EPackageImpl__WEBPACK_IMPORTED_MODULE_0__["EPackageImpl"].IS_TRANSIENT, !ecore_EPackageImpl__WEBPACK_IMPORTED_MODULE_0__["EPackageImpl"].IS_VOLATILE, ecore_EPackageImpl__WEBPACK_IMPORTED_MODULE_0__["EPackageImpl"].IS_CHANGEABLE, !ecore_EPackageImpl__WEBPACK_IMPORTED_MODULE_0__["EPackageImpl"].IS_UNSETTABLE, !ecore_EPackageImpl__WEBPACK_IMPORTED_MODULE_0__["EPackageImpl"].IS_ID, ecore_EPackageImpl__WEBPACK_IMPORTED_MODULE_0__["EPackageImpl"].IS_UNIQUE, !ecore_EPackageImpl__WEBPACK_IMPORTED_MODULE_0__["EPackageImpl"].IS_DERIVED, ecore_EPackageImpl__WEBPACK_IMPORTED_MODULE_0__["EPackageImpl"].IS_ORDERED);
            _this.initEReference(_this.getSwitch_Positions(), _this.getSwitchPosition(), _this.getSwitchPosition_Switch(), "positions", null, 0, -1, railway_SwitchImpl__WEBPACK_IMPORTED_MODULE_11__["SwitchImpl"], !ecore_EPackageImpl__WEBPACK_IMPORTED_MODULE_0__["EPackageImpl"].IS_TRANSIENT, !ecore_EPackageImpl__WEBPACK_IMPORTED_MODULE_0__["EPackageImpl"].IS_VOLATILE, ecore_EPackageImpl__WEBPACK_IMPORTED_MODULE_0__["EPackageImpl"].IS_CHANGEABLE, !ecore_EPackageImpl__WEBPACK_IMPORTED_MODULE_0__["EPackageImpl"].IS_COMPOSITE, ecore_EPackageImpl__WEBPACK_IMPORTED_MODULE_0__["EPackageImpl"].IS_RESOLVE_PROXIES, !ecore_EPackageImpl__WEBPACK_IMPORTED_MODULE_0__["EPackageImpl"].IS_UNSETTABLE, ecore_EPackageImpl__WEBPACK_IMPORTED_MODULE_0__["EPackageImpl"].IS_UNIQUE, !ecore_EPackageImpl__WEBPACK_IMPORTED_MODULE_0__["EPackageImpl"].IS_DERIVED, ecore_EPackageImpl__WEBPACK_IMPORTED_MODULE_0__["EPackageImpl"].IS_ORDERED);
            _this.initEClass(_this.RouteEClass, railway_RouteImpl__WEBPACK_IMPORTED_MODULE_4__["RouteImpl"], "Route", !ecore_EPackageImpl__WEBPACK_IMPORTED_MODULE_0__["EPackageImpl"].IS_ABSTRACT, !ecore_EPackageImpl__WEBPACK_IMPORTED_MODULE_0__["EPackageImpl"].IS_INTERFACE, ecore_EPackageImpl__WEBPACK_IMPORTED_MODULE_0__["EPackageImpl"].IS_GENERATED_INSTANCE_CLASS);
            _this.initEReference(_this.getRoute_Entry(), _this.getSemaphore(), null, "entry", null, 1, 1, railway_RouteImpl__WEBPACK_IMPORTED_MODULE_4__["RouteImpl"], !ecore_EPackageImpl__WEBPACK_IMPORTED_MODULE_0__["EPackageImpl"].IS_TRANSIENT, !ecore_EPackageImpl__WEBPACK_IMPORTED_MODULE_0__["EPackageImpl"].IS_VOLATILE, ecore_EPackageImpl__WEBPACK_IMPORTED_MODULE_0__["EPackageImpl"].IS_CHANGEABLE, !ecore_EPackageImpl__WEBPACK_IMPORTED_MODULE_0__["EPackageImpl"].IS_COMPOSITE, ecore_EPackageImpl__WEBPACK_IMPORTED_MODULE_0__["EPackageImpl"].IS_RESOLVE_PROXIES, !ecore_EPackageImpl__WEBPACK_IMPORTED_MODULE_0__["EPackageImpl"].IS_UNSETTABLE, ecore_EPackageImpl__WEBPACK_IMPORTED_MODULE_0__["EPackageImpl"].IS_UNIQUE, !ecore_EPackageImpl__WEBPACK_IMPORTED_MODULE_0__["EPackageImpl"].IS_DERIVED, ecore_EPackageImpl__WEBPACK_IMPORTED_MODULE_0__["EPackageImpl"].IS_ORDERED);
            _this.initEReference(_this.getRoute_Follows(), _this.getSwitchPosition(), _this.getSwitchPosition_Route(), "follows", null, 0, -1, railway_RouteImpl__WEBPACK_IMPORTED_MODULE_4__["RouteImpl"], !ecore_EPackageImpl__WEBPACK_IMPORTED_MODULE_0__["EPackageImpl"].IS_TRANSIENT, !ecore_EPackageImpl__WEBPACK_IMPORTED_MODULE_0__["EPackageImpl"].IS_VOLATILE, ecore_EPackageImpl__WEBPACK_IMPORTED_MODULE_0__["EPackageImpl"].IS_CHANGEABLE, ecore_EPackageImpl__WEBPACK_IMPORTED_MODULE_0__["EPackageImpl"].IS_COMPOSITE, ecore_EPackageImpl__WEBPACK_IMPORTED_MODULE_0__["EPackageImpl"].IS_RESOLVE_PROXIES, !ecore_EPackageImpl__WEBPACK_IMPORTED_MODULE_0__["EPackageImpl"].IS_UNSETTABLE, ecore_EPackageImpl__WEBPACK_IMPORTED_MODULE_0__["EPackageImpl"].IS_UNIQUE, !ecore_EPackageImpl__WEBPACK_IMPORTED_MODULE_0__["EPackageImpl"].IS_DERIVED, ecore_EPackageImpl__WEBPACK_IMPORTED_MODULE_0__["EPackageImpl"].IS_ORDERED);
            _this.initEReference(_this.getRoute_Exit(), _this.getSemaphore(), null, "exit", null, 1, 1, railway_RouteImpl__WEBPACK_IMPORTED_MODULE_4__["RouteImpl"], !ecore_EPackageImpl__WEBPACK_IMPORTED_MODULE_0__["EPackageImpl"].IS_TRANSIENT, !ecore_EPackageImpl__WEBPACK_IMPORTED_MODULE_0__["EPackageImpl"].IS_VOLATILE, ecore_EPackageImpl__WEBPACK_IMPORTED_MODULE_0__["EPackageImpl"].IS_CHANGEABLE, !ecore_EPackageImpl__WEBPACK_IMPORTED_MODULE_0__["EPackageImpl"].IS_COMPOSITE, ecore_EPackageImpl__WEBPACK_IMPORTED_MODULE_0__["EPackageImpl"].IS_RESOLVE_PROXIES, !ecore_EPackageImpl__WEBPACK_IMPORTED_MODULE_0__["EPackageImpl"].IS_UNSETTABLE, ecore_EPackageImpl__WEBPACK_IMPORTED_MODULE_0__["EPackageImpl"].IS_UNIQUE, !ecore_EPackageImpl__WEBPACK_IMPORTED_MODULE_0__["EPackageImpl"].IS_DERIVED, ecore_EPackageImpl__WEBPACK_IMPORTED_MODULE_0__["EPackageImpl"].IS_ORDERED);
            _this.initEReference(_this.getRoute_DefinedBy(), _this.getSensor(), null, "definedBy", null, 2, -1, railway_RouteImpl__WEBPACK_IMPORTED_MODULE_4__["RouteImpl"], !ecore_EPackageImpl__WEBPACK_IMPORTED_MODULE_0__["EPackageImpl"].IS_TRANSIENT, !ecore_EPackageImpl__WEBPACK_IMPORTED_MODULE_0__["EPackageImpl"].IS_VOLATILE, ecore_EPackageImpl__WEBPACK_IMPORTED_MODULE_0__["EPackageImpl"].IS_CHANGEABLE, ecore_EPackageImpl__WEBPACK_IMPORTED_MODULE_0__["EPackageImpl"].IS_COMPOSITE, ecore_EPackageImpl__WEBPACK_IMPORTED_MODULE_0__["EPackageImpl"].IS_RESOLVE_PROXIES, !ecore_EPackageImpl__WEBPACK_IMPORTED_MODULE_0__["EPackageImpl"].IS_UNSETTABLE, ecore_EPackageImpl__WEBPACK_IMPORTED_MODULE_0__["EPackageImpl"].IS_UNIQUE, !ecore_EPackageImpl__WEBPACK_IMPORTED_MODULE_0__["EPackageImpl"].IS_DERIVED, ecore_EPackageImpl__WEBPACK_IMPORTED_MODULE_0__["EPackageImpl"].IS_ORDERED);
            _this.initEClass(_this.SemaphoreEClass, railway_SemaphoreImpl__WEBPACK_IMPORTED_MODULE_19__["SemaphoreImpl"], "Semaphore", !ecore_EPackageImpl__WEBPACK_IMPORTED_MODULE_0__["EPackageImpl"].IS_ABSTRACT, !ecore_EPackageImpl__WEBPACK_IMPORTED_MODULE_0__["EPackageImpl"].IS_INTERFACE, ecore_EPackageImpl__WEBPACK_IMPORTED_MODULE_0__["EPackageImpl"].IS_GENERATED_INSTANCE_CLASS);
            _this.initEAttribute_EClassifier(_this.getSemaphore_Signal(), _this.getSignal(), "signal", "FAILURE", 1, 1, railway_SemaphoreImpl__WEBPACK_IMPORTED_MODULE_19__["SemaphoreImpl"], !ecore_EPackageImpl__WEBPACK_IMPORTED_MODULE_0__["EPackageImpl"].IS_TRANSIENT, !ecore_EPackageImpl__WEBPACK_IMPORTED_MODULE_0__["EPackageImpl"].IS_VOLATILE, ecore_EPackageImpl__WEBPACK_IMPORTED_MODULE_0__["EPackageImpl"].IS_CHANGEABLE, !ecore_EPackageImpl__WEBPACK_IMPORTED_MODULE_0__["EPackageImpl"].IS_UNSETTABLE, !ecore_EPackageImpl__WEBPACK_IMPORTED_MODULE_0__["EPackageImpl"].IS_ID, ecore_EPackageImpl__WEBPACK_IMPORTED_MODULE_0__["EPackageImpl"].IS_UNIQUE, !ecore_EPackageImpl__WEBPACK_IMPORTED_MODULE_0__["EPackageImpl"].IS_DERIVED, ecore_EPackageImpl__WEBPACK_IMPORTED_MODULE_0__["EPackageImpl"].IS_ORDERED);
            _this.initEClass(_this.SwitchPositionEClass, railway_SwitchPositionImpl__WEBPACK_IMPORTED_MODULE_12__["SwitchPositionImpl"], "SwitchPosition", !ecore_EPackageImpl__WEBPACK_IMPORTED_MODULE_0__["EPackageImpl"].IS_ABSTRACT, !ecore_EPackageImpl__WEBPACK_IMPORTED_MODULE_0__["EPackageImpl"].IS_INTERFACE, ecore_EPackageImpl__WEBPACK_IMPORTED_MODULE_0__["EPackageImpl"].IS_GENERATED_INSTANCE_CLASS);
            _this.initEAttribute_EClassifier(_this.getSwitchPosition_Position(), _this.getPosition(), "position", "FAILURE", 1, 1, railway_SwitchPositionImpl__WEBPACK_IMPORTED_MODULE_12__["SwitchPositionImpl"], !ecore_EPackageImpl__WEBPACK_IMPORTED_MODULE_0__["EPackageImpl"].IS_TRANSIENT, !ecore_EPackageImpl__WEBPACK_IMPORTED_MODULE_0__["EPackageImpl"].IS_VOLATILE, ecore_EPackageImpl__WEBPACK_IMPORTED_MODULE_0__["EPackageImpl"].IS_CHANGEABLE, !ecore_EPackageImpl__WEBPACK_IMPORTED_MODULE_0__["EPackageImpl"].IS_UNSETTABLE, !ecore_EPackageImpl__WEBPACK_IMPORTED_MODULE_0__["EPackageImpl"].IS_ID, ecore_EPackageImpl__WEBPACK_IMPORTED_MODULE_0__["EPackageImpl"].IS_UNIQUE, !ecore_EPackageImpl__WEBPACK_IMPORTED_MODULE_0__["EPackageImpl"].IS_DERIVED, ecore_EPackageImpl__WEBPACK_IMPORTED_MODULE_0__["EPackageImpl"].IS_ORDERED);
            _this.initEReference(_this.getSwitchPosition_Switch(), _this.getSwitch(), _this.getSwitch_Positions(), "switch", null, 1, 1, railway_SwitchPositionImpl__WEBPACK_IMPORTED_MODULE_12__["SwitchPositionImpl"], !ecore_EPackageImpl__WEBPACK_IMPORTED_MODULE_0__["EPackageImpl"].IS_TRANSIENT, !ecore_EPackageImpl__WEBPACK_IMPORTED_MODULE_0__["EPackageImpl"].IS_VOLATILE, ecore_EPackageImpl__WEBPACK_IMPORTED_MODULE_0__["EPackageImpl"].IS_CHANGEABLE, !ecore_EPackageImpl__WEBPACK_IMPORTED_MODULE_0__["EPackageImpl"].IS_COMPOSITE, ecore_EPackageImpl__WEBPACK_IMPORTED_MODULE_0__["EPackageImpl"].IS_RESOLVE_PROXIES, !ecore_EPackageImpl__WEBPACK_IMPORTED_MODULE_0__["EPackageImpl"].IS_UNSETTABLE, ecore_EPackageImpl__WEBPACK_IMPORTED_MODULE_0__["EPackageImpl"].IS_UNIQUE, !ecore_EPackageImpl__WEBPACK_IMPORTED_MODULE_0__["EPackageImpl"].IS_DERIVED, ecore_EPackageImpl__WEBPACK_IMPORTED_MODULE_0__["EPackageImpl"].IS_ORDERED);
            _this.initEReference(_this.getSwitchPosition_Route(), _this.getRoute(), _this.getRoute_Follows(), "route", null, 1, 1, railway_SwitchPositionImpl__WEBPACK_IMPORTED_MODULE_12__["SwitchPositionImpl"], !ecore_EPackageImpl__WEBPACK_IMPORTED_MODULE_0__["EPackageImpl"].IS_TRANSIENT, !ecore_EPackageImpl__WEBPACK_IMPORTED_MODULE_0__["EPackageImpl"].IS_VOLATILE, ecore_EPackageImpl__WEBPACK_IMPORTED_MODULE_0__["EPackageImpl"].IS_CHANGEABLE, !ecore_EPackageImpl__WEBPACK_IMPORTED_MODULE_0__["EPackageImpl"].IS_COMPOSITE, ecore_EPackageImpl__WEBPACK_IMPORTED_MODULE_0__["EPackageImpl"].IS_RESOLVE_PROXIES, !ecore_EPackageImpl__WEBPACK_IMPORTED_MODULE_0__["EPackageImpl"].IS_UNSETTABLE, ecore_EPackageImpl__WEBPACK_IMPORTED_MODULE_0__["EPackageImpl"].IS_UNIQUE, !ecore_EPackageImpl__WEBPACK_IMPORTED_MODULE_0__["EPackageImpl"].IS_DERIVED, ecore_EPackageImpl__WEBPACK_IMPORTED_MODULE_0__["EPackageImpl"].IS_ORDERED);
            _this.initEClass(_this.RailwayElementEClass, railway_RailwayElementImpl__WEBPACK_IMPORTED_MODULE_20__["RailwayElementImpl"], "RailwayElement", ecore_EPackageImpl__WEBPACK_IMPORTED_MODULE_0__["EPackageImpl"].IS_ABSTRACT, !ecore_EPackageImpl__WEBPACK_IMPORTED_MODULE_0__["EPackageImpl"].IS_INTERFACE, ecore_EPackageImpl__WEBPACK_IMPORTED_MODULE_0__["EPackageImpl"].IS_GENERATED_INSTANCE_CLASS);
            _this.initEAttribute_EClassifier(_this.getRailwayElement_Id(), _this.ecorePackage.getEInt(), "id", "0", 0, 1, railway_RailwayElementImpl__WEBPACK_IMPORTED_MODULE_20__["RailwayElementImpl"], !ecore_EPackageImpl__WEBPACK_IMPORTED_MODULE_0__["EPackageImpl"].IS_TRANSIENT, !ecore_EPackageImpl__WEBPACK_IMPORTED_MODULE_0__["EPackageImpl"].IS_VOLATILE, ecore_EPackageImpl__WEBPACK_IMPORTED_MODULE_0__["EPackageImpl"].IS_CHANGEABLE, !ecore_EPackageImpl__WEBPACK_IMPORTED_MODULE_0__["EPackageImpl"].IS_UNSETTABLE, !ecore_EPackageImpl__WEBPACK_IMPORTED_MODULE_0__["EPackageImpl"].IS_ID, ecore_EPackageImpl__WEBPACK_IMPORTED_MODULE_0__["EPackageImpl"].IS_UNIQUE, !ecore_EPackageImpl__WEBPACK_IMPORTED_MODULE_0__["EPackageImpl"].IS_DERIVED, ecore_EPackageImpl__WEBPACK_IMPORTED_MODULE_0__["EPackageImpl"].IS_ORDERED);
            _this.initEClass(_this.SensorEClass, railway_SensorImpl__WEBPACK_IMPORTED_MODULE_8__["SensorImpl"], "Sensor", !ecore_EPackageImpl__WEBPACK_IMPORTED_MODULE_0__["EPackageImpl"].IS_ABSTRACT, !ecore_EPackageImpl__WEBPACK_IMPORTED_MODULE_0__["EPackageImpl"].IS_INTERFACE, ecore_EPackageImpl__WEBPACK_IMPORTED_MODULE_0__["EPackageImpl"].IS_GENERATED_INSTANCE_CLASS);
            _this.initEReference(_this.getSensor_Elements(), _this.getTrackElement(), _this.getTrackElement_Sensor(), "elements", null, 0, -1, railway_SensorImpl__WEBPACK_IMPORTED_MODULE_8__["SensorImpl"], !ecore_EPackageImpl__WEBPACK_IMPORTED_MODULE_0__["EPackageImpl"].IS_TRANSIENT, !ecore_EPackageImpl__WEBPACK_IMPORTED_MODULE_0__["EPackageImpl"].IS_VOLATILE, ecore_EPackageImpl__WEBPACK_IMPORTED_MODULE_0__["EPackageImpl"].IS_CHANGEABLE, ecore_EPackageImpl__WEBPACK_IMPORTED_MODULE_0__["EPackageImpl"].IS_COMPOSITE, ecore_EPackageImpl__WEBPACK_IMPORTED_MODULE_0__["EPackageImpl"].IS_RESOLVE_PROXIES, !ecore_EPackageImpl__WEBPACK_IMPORTED_MODULE_0__["EPackageImpl"].IS_UNSETTABLE, ecore_EPackageImpl__WEBPACK_IMPORTED_MODULE_0__["EPackageImpl"].IS_UNIQUE, !ecore_EPackageImpl__WEBPACK_IMPORTED_MODULE_0__["EPackageImpl"].IS_DERIVED, ecore_EPackageImpl__WEBPACK_IMPORTED_MODULE_0__["EPackageImpl"].IS_ORDERED);
            _this.initEClass(_this.RailwayContainerEClass, railway_RailwayContainerImpl__WEBPACK_IMPORTED_MODULE_5__["RailwayContainerImpl"], "RailwayContainer", !ecore_EPackageImpl__WEBPACK_IMPORTED_MODULE_0__["EPackageImpl"].IS_ABSTRACT, !ecore_EPackageImpl__WEBPACK_IMPORTED_MODULE_0__["EPackageImpl"].IS_INTERFACE, ecore_EPackageImpl__WEBPACK_IMPORTED_MODULE_0__["EPackageImpl"].IS_GENERATED_INSTANCE_CLASS);
            _this.initEReference(_this.getRailwayContainer_Invalids(), _this.getRailwayElement(), null, "invalids", null, 0, -1, railway_RailwayContainerImpl__WEBPACK_IMPORTED_MODULE_5__["RailwayContainerImpl"], !ecore_EPackageImpl__WEBPACK_IMPORTED_MODULE_0__["EPackageImpl"].IS_TRANSIENT, !ecore_EPackageImpl__WEBPACK_IMPORTED_MODULE_0__["EPackageImpl"].IS_VOLATILE, ecore_EPackageImpl__WEBPACK_IMPORTED_MODULE_0__["EPackageImpl"].IS_CHANGEABLE, ecore_EPackageImpl__WEBPACK_IMPORTED_MODULE_0__["EPackageImpl"].IS_COMPOSITE, ecore_EPackageImpl__WEBPACK_IMPORTED_MODULE_0__["EPackageImpl"].IS_RESOLVE_PROXIES, !ecore_EPackageImpl__WEBPACK_IMPORTED_MODULE_0__["EPackageImpl"].IS_UNSETTABLE, ecore_EPackageImpl__WEBPACK_IMPORTED_MODULE_0__["EPackageImpl"].IS_UNIQUE, !ecore_EPackageImpl__WEBPACK_IMPORTED_MODULE_0__["EPackageImpl"].IS_DERIVED, ecore_EPackageImpl__WEBPACK_IMPORTED_MODULE_0__["EPackageImpl"].IS_ORDERED);
            _this.initEReference(_this.getRailwayContainer_Semaphores(), _this.getSemaphore(), null, "semaphores", null, 0, -1, railway_RailwayContainerImpl__WEBPACK_IMPORTED_MODULE_5__["RailwayContainerImpl"], !ecore_EPackageImpl__WEBPACK_IMPORTED_MODULE_0__["EPackageImpl"].IS_TRANSIENT, !ecore_EPackageImpl__WEBPACK_IMPORTED_MODULE_0__["EPackageImpl"].IS_VOLATILE, ecore_EPackageImpl__WEBPACK_IMPORTED_MODULE_0__["EPackageImpl"].IS_CHANGEABLE, ecore_EPackageImpl__WEBPACK_IMPORTED_MODULE_0__["EPackageImpl"].IS_COMPOSITE, ecore_EPackageImpl__WEBPACK_IMPORTED_MODULE_0__["EPackageImpl"].IS_RESOLVE_PROXIES, !ecore_EPackageImpl__WEBPACK_IMPORTED_MODULE_0__["EPackageImpl"].IS_UNSETTABLE, ecore_EPackageImpl__WEBPACK_IMPORTED_MODULE_0__["EPackageImpl"].IS_UNIQUE, !ecore_EPackageImpl__WEBPACK_IMPORTED_MODULE_0__["EPackageImpl"].IS_DERIVED, ecore_EPackageImpl__WEBPACK_IMPORTED_MODULE_0__["EPackageImpl"].IS_ORDERED);
            _this.initEReference(_this.getRailwayContainer_Routes(), _this.getRoute(), null, "routes", null, 0, -1, railway_RailwayContainerImpl__WEBPACK_IMPORTED_MODULE_5__["RailwayContainerImpl"], !ecore_EPackageImpl__WEBPACK_IMPORTED_MODULE_0__["EPackageImpl"].IS_TRANSIENT, !ecore_EPackageImpl__WEBPACK_IMPORTED_MODULE_0__["EPackageImpl"].IS_VOLATILE, ecore_EPackageImpl__WEBPACK_IMPORTED_MODULE_0__["EPackageImpl"].IS_CHANGEABLE, ecore_EPackageImpl__WEBPACK_IMPORTED_MODULE_0__["EPackageImpl"].IS_COMPOSITE, ecore_EPackageImpl__WEBPACK_IMPORTED_MODULE_0__["EPackageImpl"].IS_RESOLVE_PROXIES, !ecore_EPackageImpl__WEBPACK_IMPORTED_MODULE_0__["EPackageImpl"].IS_UNSETTABLE, ecore_EPackageImpl__WEBPACK_IMPORTED_MODULE_0__["EPackageImpl"].IS_UNIQUE, !ecore_EPackageImpl__WEBPACK_IMPORTED_MODULE_0__["EPackageImpl"].IS_DERIVED, ecore_EPackageImpl__WEBPACK_IMPORTED_MODULE_0__["EPackageImpl"].IS_ORDERED);
            // this.initEDataType(this.SignalEDataType, null, "Signal", EPackageImpl.IS_SERIALIZABLE, !EPackageImpl.IS_GENERATED_INSTANCE_CLASS);
            // this.initEDataType(this.PositionEDataType, null, "Position", EPackageImpl.IS_SERIALIZABLE, !EPackageImpl.IS_GENERATED_INSTANCE_CLASS);
            _this.initEEnum(_this.SignalEEnum, null, "Signal");
            _this.initEEnum(_this.PositionEEnum, null, "Position");
        };
        _this.SegmentEClass = null;
        _this.TrackElementEClass = null;
        _this.SwitchEClass = null;
        _this.RouteEClass = null;
        _this.SemaphoreEClass = null;
        _this.SwitchPositionEClass = null;
        _this.RailwayElementEClass = null;
        _this.SensorEClass = null;
        _this.RailwayContainerEClass = null;
        _this.SignalEEnum = null;
        _this.PositionEEnum = null;
        _this.getRailwayElement = function () { return _this.RailwayElementEClass; };
        _this.getRailwayElement_Id = function () { return _this.RailwayElementEClass.eStructuralFeatures.at(0); };
        _this.getTrackElement = function () { return _this.TrackElementEClass; };
        _this.getTrackElement_Sensor = function () { return _this.TrackElementEClass.eStructuralFeatures.at(0); };
        _this.getTrackElement_ConnectsTo = function () { return _this.TrackElementEClass.eStructuralFeatures.at(1); };
        _this.getSegment = function () { return _this.SegmentEClass; };
        _this.getSegment_Length = function () { return _this.SegmentEClass.eStructuralFeatures.at(0); };
        _this.getSwitch = function () { return _this.SwitchEClass; };
        _this.getSwitch_CurrentPosition = function () { return _this.SwitchEClass.eStructuralFeatures.at(0); };
        _this.getSwitch_Positions = function () { return _this.SwitchEClass.eStructuralFeatures.at(1); };
        _this.getRoute = function () { return _this.RouteEClass; };
        _this.getRoute_Entry = function () { return _this.RouteEClass.eStructuralFeatures.at(0); };
        _this.getRoute_Follows = function () { return _this.RouteEClass.eStructuralFeatures.at(1); };
        _this.getRoute_Exit = function () { return _this.RouteEClass.eStructuralFeatures.at(2); };
        _this.getRoute_DefinedBy = function () { return _this.RouteEClass.eStructuralFeatures.at(3); };
        _this.getSemaphore = function () { return _this.SemaphoreEClass; };
        _this.getSemaphore_Signal = function () { return _this.SemaphoreEClass.eStructuralFeatures.at(0); };
        _this.getSwitchPosition = function () { return _this.SwitchPositionEClass; };
        _this.getSwitchPosition_Switch = function () { return _this.SwitchPositionEClass.eStructuralFeatures.at(0); };
        _this.getSwitchPosition_Position = function () { return _this.SwitchPositionEClass.eStructuralFeatures.at(1); };
        _this.getSwitchPosition_Route = function () { return _this.SwitchPositionEClass.eStructuralFeatures.at(2); };
        _this.getSensor = function () { return _this.SensorEClass; };
        _this.getSensor_Elements = function () { return _this.SensorEClass.eStructuralFeatures.at(0); };
        _this.getRailwayContainer = function () { return _this.RailwayContainerEClass; };
        _this.getRailwayContainer_Invalids = function () { return _this.RailwayContainerEClass.eStructuralFeatures.at(0); };
        _this.getRailwayContainer_Semaphores = function () { return _this.RailwayContainerEClass.eStructuralFeatures.at(1); };
        _this.getRailwayContainer_Routes = function () { return _this.RailwayContainerEClass.eStructuralFeatures.at(2); };
        _this.getSignal = function () { return _this.SignalEEnum; };
        _this.getPosition = function () { return _this.PositionEEnum; };
        return _this;
        /*
        public static Literals = {
            SEGMENT: RailwayPackageImpl.eINSTANCE.getSegment(),
            
            TRACKELEMENT: RailwayPackageImpl.eINSTANCE.getTrackElement(),
            
            SWITCH: RailwayPackageImpl.eINSTANCE.getSwitch(),
            
            ROUTE: RailwayPackageImpl.eINSTANCE.getRoute(),
            
            SEMAPHORE: RailwayPackageImpl.eINSTANCE.getSemaphore(),
            
            SWITCHPOSITION: RailwayPackageImpl.eINSTANCE.getSwitchPosition(),
            
            RAILWAYELEMENT: RailwayPackageImpl.eINSTANCE.getRailwayElement(),
            
            SENSOR: RailwayPackageImpl.eINSTANCE.getSensor(),
            
            SIGNAL: RailwayPackageImpl.eINSTANCE.getSignal(),
            POSITION: RailwayPackageImpl.eINSTANCE.getPosition(),
            RAILWAYCONTAINER: RailwayPackageImpl.eINSTANCE.getRailwayContainer(),
            
            RAILWAY_ELEMENT__ID: RailwayPackageImpl.eINSTANCE.getRailwayElement_Id(),
            TRACK_ELEMENT__SENSOR: RailwayPackageImpl.eINSTANCE.getTrackElement_Sensor(),
            TRACK_ELEMENT__CONNECTS_TO: RailwayPackageImpl.eINSTANCE.getTrackElement_ConnectsTo(),
            SEGMENT__LENGTH: RailwayPackageImpl.eINSTANCE.getSegment_Length(),
            SWITCH__CURRENT_POSITION: RailwayPackageImpl.eINSTANCE.getSwitch_CurrentPosition(),
            SWITCH__POSITIONS: RailwayPackageImpl.eINSTANCE.getSwitch_Positions(),
            ROUTE__ENTRY: RailwayPackageImpl.eINSTANCE.getRoute_Entry(),
            ROUTE__FOLLOWS: RailwayPackageImpl.eINSTANCE.getRoute_Follows(),
            ROUTE__EXIT: RailwayPackageImpl.eINSTANCE.getRoute_Exit(),
            ROUTE__DEFINED_BY: RailwayPackageImpl.eINSTANCE.getRoute_DefinedBy(),
            SEMAPHORE__SIGNAL: RailwayPackageImpl.eINSTANCE.getSemaphore_Signal(),
            SWITCH_POSITION__SWITCH: RailwayPackageImpl.eINSTANCE.getSwitchPosition_Switch(),
            SWITCH_POSITION__POSITION: RailwayPackageImpl.eINSTANCE.getSwitchPosition_Position(),
            SWITCH_POSITION__ROUTE: RailwayPackageImpl.eINSTANCE.getSwitchPosition_Route(),
            SENSOR__ELEMENTS: RailwayPackageImpl.eINSTANCE.getSensor_Elements(),
            RAILWAY_CONTAINER__INVALIDS: RailwayPackageImpl.eINSTANCE.getRailwayContainer_Invalids(),
            RAILWAY_CONTAINER__SEMAPHORES: RailwayPackageImpl.eINSTANCE.getRailwayContainer_Semaphores(),
            RAILWAY_CONTAINER__ROUTES: RailwayPackageImpl.eINSTANCE.getRailwayContainer_Routes(),
            SIGNAL: RailwayPackageImpl.eINSTANCE.getSignal(),
            POSITION: RailwayPackageImpl.eINSTANCE.getPosition()
        }
        */
    }
    /*
    constructor(){
        //no private constructors in TypeScript
        super(RailwayPackageImpl.eNS_URI, RailwayFactoryImpl.eINSTANCE as any as EFactory);
    }
    */
    RailwayPackageImpl.init = function () {
        // Obtain or create and register package
        var theRailwayPackage = new RailwayPackageImpl();
        theRailwayPackage.ecorePackage = ecore_EcorePackageImpl__WEBPACK_IMPORTED_MODULE_1__["EcorePackageImpl"].eINSTANCE;
        theRailwayPackage.ecoreFactory = ecore_EcoreFactoryImpl__WEBPACK_IMPORTED_MODULE_2__["EcoreFactoryImpl"].eINSTANCE;
        // Create package meta-data objects
        theRailwayPackage.createPackageContents();
        // Initialize created meta-data
        theRailwayPackage.initializePackageContents();
        return theRailwayPackage;
    };
    RailwayPackageImpl.eNAME = "railway";
    RailwayPackageImpl.eNS_URI = "http://www.semanticweb.org/ontologies/2015/ttc/trainbenchmark";
    RailwayPackageImpl.eNS_PREFIX = "hu.bme.mit.trainbenchmark";
    RailwayPackageImpl.RAILWAYELEMENT = 6;
    RailwayPackageImpl.RAILWAYELEMENT_FEATURE_COUNT = 1;
    RailwayPackageImpl.RAILWAYELEMENT_OPERATION_COUNT = 0;
    RailwayPackageImpl.RAILWAY_ELEMENT__ID = 0;
    RailwayPackageImpl.TRACKELEMENT = 1;
    RailwayPackageImpl.TRACKELEMENT_FEATURE_COUNT = RailwayPackageImpl.RAILWAYELEMENT_FEATURE_COUNT + 2;
    RailwayPackageImpl.TRACKELEMENT_OPERATION_COUNT = RailwayPackageImpl.RAILWAYELEMENT_OPERATION_COUNT + 0;
    RailwayPackageImpl.TRACK_ELEMENT__ID = 0;
    RailwayPackageImpl.TRACK_ELEMENT__SENSOR = 1;
    RailwayPackageImpl.TRACK_ELEMENT__CONNECTS_TO = 2;
    RailwayPackageImpl.SEGMENT = 0;
    RailwayPackageImpl.SEGMENT_FEATURE_COUNT = RailwayPackageImpl.TRACKELEMENT_FEATURE_COUNT + 1;
    RailwayPackageImpl.SEGMENT_OPERATION_COUNT = RailwayPackageImpl.TRACKELEMENT_OPERATION_COUNT + 0;
    RailwayPackageImpl.SEGMENT__ID = 0;
    RailwayPackageImpl.SEGMENT__SENSOR = 1;
    RailwayPackageImpl.SEGMENT__CONNECTS_TO = 2;
    RailwayPackageImpl.SEGMENT__LENGTH = 3;
    RailwayPackageImpl.SWITCH = 2;
    RailwayPackageImpl.SWITCH_FEATURE_COUNT = RailwayPackageImpl.TRACKELEMENT_FEATURE_COUNT + 2;
    RailwayPackageImpl.SWITCH_OPERATION_COUNT = RailwayPackageImpl.TRACKELEMENT_OPERATION_COUNT + 0;
    RailwayPackageImpl.SWITCH__ID = 0;
    RailwayPackageImpl.SWITCH__SENSOR = 1;
    RailwayPackageImpl.SWITCH__CONNECTS_TO = 2;
    RailwayPackageImpl.SWITCH__CURRENT_POSITION = 3;
    RailwayPackageImpl.SWITCH__POSITIONS = 4;
    RailwayPackageImpl.ROUTE = 3;
    RailwayPackageImpl.ROUTE_FEATURE_COUNT = RailwayPackageImpl.RAILWAYELEMENT_FEATURE_COUNT + 4;
    RailwayPackageImpl.ROUTE_OPERATION_COUNT = RailwayPackageImpl.RAILWAYELEMENT_OPERATION_COUNT + 0;
    RailwayPackageImpl.ROUTE__ID = 0;
    RailwayPackageImpl.ROUTE__ENTRY = 1;
    RailwayPackageImpl.ROUTE__FOLLOWS = 2;
    RailwayPackageImpl.ROUTE__EXIT = 3;
    RailwayPackageImpl.ROUTE__DEFINED_BY = 4;
    RailwayPackageImpl.SEMAPHORE = 4;
    RailwayPackageImpl.SEMAPHORE_FEATURE_COUNT = RailwayPackageImpl.RAILWAYELEMENT_FEATURE_COUNT + 1;
    RailwayPackageImpl.SEMAPHORE_OPERATION_COUNT = RailwayPackageImpl.RAILWAYELEMENT_OPERATION_COUNT + 0;
    RailwayPackageImpl.SEMAPHORE__ID = 0;
    RailwayPackageImpl.SEMAPHORE__SIGNAL = 1;
    RailwayPackageImpl.SWITCHPOSITION = 5;
    RailwayPackageImpl.SWITCHPOSITION_FEATURE_COUNT = RailwayPackageImpl.RAILWAYELEMENT_FEATURE_COUNT + 3;
    RailwayPackageImpl.SWITCHPOSITION_OPERATION_COUNT = RailwayPackageImpl.RAILWAYELEMENT_OPERATION_COUNT + 0;
    RailwayPackageImpl.SWITCH_POSITION__ID = 0;
    RailwayPackageImpl.SWITCH_POSITION__SWITCH = 1;
    RailwayPackageImpl.SWITCH_POSITION__POSITION = 2;
    RailwayPackageImpl.SWITCH_POSITION__ROUTE = 3;
    RailwayPackageImpl.SENSOR = 7;
    RailwayPackageImpl.SENSOR_FEATURE_COUNT = RailwayPackageImpl.RAILWAYELEMENT_FEATURE_COUNT + 1;
    RailwayPackageImpl.SENSOR_OPERATION_COUNT = RailwayPackageImpl.RAILWAYELEMENT_OPERATION_COUNT + 0;
    RailwayPackageImpl.SENSOR__ID = 0;
    RailwayPackageImpl.SENSOR__ELEMENTS = 1;
    RailwayPackageImpl.RAILWAYCONTAINER = 10;
    RailwayPackageImpl.RAILWAYCONTAINER_FEATURE_COUNT = 3;
    RailwayPackageImpl.RAILWAYCONTAINER_OPERATION_COUNT = 0;
    RailwayPackageImpl.RAILWAY_CONTAINER__INVALIDS = 0;
    RailwayPackageImpl.RAILWAY_CONTAINER__SEMAPHORES = 1;
    RailwayPackageImpl.RAILWAY_CONTAINER__ROUTES = 2;
    RailwayPackageImpl.SIGNAL = 8;
    RailwayPackageImpl.POSITION = 9;
    /*Important: Call init() AFTER metaobject ids have been assigned.*/
    RailwayPackageImpl.eINSTANCE = RailwayPackageImpl.init();
    return RailwayPackageImpl;
}(ecore_EPackageImpl__WEBPACK_IMPORTED_MODULE_0__["EPackageImpl"]));



/***/ }),

/***/ "./src/railway/RailwayPackageLiterals.ts":
/*!***********************************************!*\
  !*** ./src/railway/RailwayPackageLiterals.ts ***!
  \***********************************************/
/*! exports provided: RailwayPackageLiterals */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RailwayPackageLiterals", function() { return RailwayPackageLiterals; });
var RailwayPackageLiterals = /** @class */ (function () {
    function RailwayPackageLiterals() {
    }
    RailwayPackageLiterals.RAILWAYELEMENT = 6;
    RailwayPackageLiterals.RAILWAYELEMENT_FEATURE_COUNT = 1;
    RailwayPackageLiterals.RAILWAYELEMENT_OPERATION_COUNT = 0;
    RailwayPackageLiterals.RAILWAY_ELEMENT__ID = 0;
    RailwayPackageLiterals.TRACKELEMENT = 1;
    RailwayPackageLiterals.TRACKELEMENT_FEATURE_COUNT = RailwayPackageLiterals.RAILWAYELEMENT_FEATURE_COUNT + 2;
    RailwayPackageLiterals.TRACKELEMENT_OPERATION_COUNT = RailwayPackageLiterals.RAILWAYELEMENT_OPERATION_COUNT + 0;
    RailwayPackageLiterals.TRACK_ELEMENT__ID = 0;
    RailwayPackageLiterals.TRACK_ELEMENT__SENSOR = 1;
    RailwayPackageLiterals.TRACK_ELEMENT__CONNECTS_TO = 2;
    RailwayPackageLiterals.SEGMENT = 0;
    RailwayPackageLiterals.SEGMENT_FEATURE_COUNT = RailwayPackageLiterals.TRACKELEMENT_FEATURE_COUNT + 1;
    RailwayPackageLiterals.SEGMENT_OPERATION_COUNT = RailwayPackageLiterals.TRACKELEMENT_OPERATION_COUNT + 0;
    RailwayPackageLiterals.SEGMENT__ID = 0;
    RailwayPackageLiterals.SEGMENT__SENSOR = 1;
    RailwayPackageLiterals.SEGMENT__CONNECTS_TO = 2;
    RailwayPackageLiterals.SEGMENT__LENGTH = 3;
    RailwayPackageLiterals.SWITCH = 2;
    RailwayPackageLiterals.SWITCH_FEATURE_COUNT = RailwayPackageLiterals.TRACKELEMENT_FEATURE_COUNT + 2;
    RailwayPackageLiterals.SWITCH_OPERATION_COUNT = RailwayPackageLiterals.TRACKELEMENT_OPERATION_COUNT + 0;
    RailwayPackageLiterals.SWITCH__ID = 0;
    RailwayPackageLiterals.SWITCH__SENSOR = 1;
    RailwayPackageLiterals.SWITCH__CONNECTS_TO = 2;
    RailwayPackageLiterals.SWITCH__CURRENT_POSITION = 3;
    RailwayPackageLiterals.SWITCH__POSITIONS = 4;
    RailwayPackageLiterals.ROUTE = 3;
    RailwayPackageLiterals.ROUTE_FEATURE_COUNT = RailwayPackageLiterals.RAILWAYELEMENT_FEATURE_COUNT + 4;
    RailwayPackageLiterals.ROUTE_OPERATION_COUNT = RailwayPackageLiterals.RAILWAYELEMENT_OPERATION_COUNT + 0;
    RailwayPackageLiterals.ROUTE__ID = 0;
    RailwayPackageLiterals.ROUTE__ENTRY = 1;
    RailwayPackageLiterals.ROUTE__FOLLOWS = 2;
    RailwayPackageLiterals.ROUTE__EXIT = 3;
    RailwayPackageLiterals.ROUTE__DEFINED_BY = 4;
    RailwayPackageLiterals.SEMAPHORE = 4;
    RailwayPackageLiterals.SEMAPHORE_FEATURE_COUNT = RailwayPackageLiterals.RAILWAYELEMENT_FEATURE_COUNT + 1;
    RailwayPackageLiterals.SEMAPHORE_OPERATION_COUNT = RailwayPackageLiterals.RAILWAYELEMENT_OPERATION_COUNT + 0;
    RailwayPackageLiterals.SEMAPHORE__ID = 0;
    RailwayPackageLiterals.SEMAPHORE__SIGNAL = 1;
    RailwayPackageLiterals.SWITCHPOSITION = 5;
    RailwayPackageLiterals.SWITCHPOSITION_FEATURE_COUNT = RailwayPackageLiterals.RAILWAYELEMENT_FEATURE_COUNT + 3;
    RailwayPackageLiterals.SWITCHPOSITION_OPERATION_COUNT = RailwayPackageLiterals.RAILWAYELEMENT_OPERATION_COUNT + 0;
    RailwayPackageLiterals.SWITCH_POSITION__ID = 0;
    RailwayPackageLiterals.SWITCH_POSITION__SWITCH = 1;
    RailwayPackageLiterals.SWITCH_POSITION__POSITION = 2;
    RailwayPackageLiterals.SWITCH_POSITION__ROUTE = 3;
    RailwayPackageLiterals.SENSOR = 7;
    RailwayPackageLiterals.SENSOR_FEATURE_COUNT = RailwayPackageLiterals.RAILWAYELEMENT_FEATURE_COUNT + 1;
    RailwayPackageLiterals.SENSOR_OPERATION_COUNT = RailwayPackageLiterals.RAILWAYELEMENT_OPERATION_COUNT + 0;
    RailwayPackageLiterals.SENSOR__ID = 0;
    RailwayPackageLiterals.SENSOR__ELEMENTS = 1;
    RailwayPackageLiterals.RAILWAYCONTAINER = 10;
    RailwayPackageLiterals.RAILWAYCONTAINER_FEATURE_COUNT = 3;
    RailwayPackageLiterals.RAILWAYCONTAINER_OPERATION_COUNT = 0;
    RailwayPackageLiterals.RAILWAY_CONTAINER__INVALIDS = 0;
    RailwayPackageLiterals.RAILWAY_CONTAINER__SEMAPHORES = 1;
    RailwayPackageLiterals.RAILWAY_CONTAINER__ROUTES = 2;
    RailwayPackageLiterals.SIGNAL = 8;
    RailwayPackageLiterals.POSITION = 9;
    return RailwayPackageLiterals;
}());



/***/ }),

/***/ "./src/railway/RouteBase.ts":
/*!**********************************!*\
  !*** ./src/railway/RouteBase.ts ***!
  \**********************************/
/*! exports provided: RouteBase */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RouteBase", function() { return RouteBase; });
/* harmony import */ var ecore_OrderedSet__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ecore/OrderedSet */ "./node_modules/crossecore/src/OrderedSet.ts");
/* harmony import */ var ecore_ENotificationImpl__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ecore/ENotificationImpl */ "./node_modules/crossecore/src/ENotificationImpl.ts");
/* harmony import */ var ecore_NotificationImpl__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ecore/NotificationImpl */ "./node_modules/crossecore/src/NotificationImpl.ts");
/* harmony import */ var ecore_BasicEObjectImpl__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ecore/BasicEObjectImpl */ "./node_modules/crossecore/src/BasicEObjectImpl.ts");
/* harmony import */ var railway_RailwayPackageLiterals__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! railway/RailwayPackageLiterals */ "./src/railway/RailwayPackageLiterals.ts");
/* harmony import */ var railway_RailwayElementImpl__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! railway/RailwayElementImpl */ "./src/railway/RailwayElementImpl.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();






var RouteBase = /** @class */ (function (_super) {
    __extends(RouteBase, _super);
    function RouteBase() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._entry = null;
        _this._follows = null;
        _this._exit = null;
        _this._definedBy = null;
        return _this;
    }
    Object.defineProperty(RouteBase.prototype, "entry", {
        get: function () {
            return this._entry;
        },
        set: function (value) {
            var oldvalue = this._entry;
            this._entry = value;
            if (this.eNotificationRequired()) {
                this.eNotify(new ecore_ENotificationImpl__WEBPACK_IMPORTED_MODULE_1__["ENotificationImpl"](this, ecore_NotificationImpl__WEBPACK_IMPORTED_MODULE_2__["NotificationImpl"].SET, railway_RailwayPackageLiterals__WEBPACK_IMPORTED_MODULE_4__["RailwayPackageLiterals"].ROUTE__ENTRY, oldvalue, value));
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RouteBase.prototype, "follows", {
        get: function () {
            if (this._follows === null) {
                this._follows = new ecore_OrderedSet__WEBPACK_IMPORTED_MODULE_0__["OrderedSet"](this, railway_RailwayPackageLiterals__WEBPACK_IMPORTED_MODULE_4__["RailwayPackageLiterals"].ROUTE__FOLLOWS, railway_RailwayPackageLiterals__WEBPACK_IMPORTED_MODULE_4__["RailwayPackageLiterals"].SWITCH_POSITION__ROUTE);
            }
            return this._follows;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RouteBase.prototype, "exit", {
        get: function () {
            return this._exit;
        },
        set: function (value) {
            var oldvalue = this._exit;
            this._exit = value;
            if (this.eNotificationRequired()) {
                this.eNotify(new ecore_ENotificationImpl__WEBPACK_IMPORTED_MODULE_1__["ENotificationImpl"](this, ecore_NotificationImpl__WEBPACK_IMPORTED_MODULE_2__["NotificationImpl"].SET, railway_RailwayPackageLiterals__WEBPACK_IMPORTED_MODULE_4__["RailwayPackageLiterals"].ROUTE__EXIT, oldvalue, value));
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RouteBase.prototype, "definedBy", {
        get: function () {
            if (this._definedBy === null) {
                this._definedBy = new ecore_OrderedSet__WEBPACK_IMPORTED_MODULE_0__["OrderedSet"](this, railway_RailwayPackageLiterals__WEBPACK_IMPORTED_MODULE_4__["RailwayPackageLiterals"].ROUTE__DEFINED_BY, ecore_BasicEObjectImpl__WEBPACK_IMPORTED_MODULE_3__["BasicEObjectImpl"].EOPPOSITE_FEATURE_BASE - railway_RailwayPackageLiterals__WEBPACK_IMPORTED_MODULE_4__["RailwayPackageLiterals"].ROUTE__DEFINED_BY);
            }
            return this._definedBy;
        },
        enumerable: false,
        configurable: true
    });
    RouteBase.prototype.eStaticClass = function () {
        return RouteBase.eStaticClass;
    };
    RouteBase.prototype.eInverseAdd = function (otherEnd, featureID, msgs) {
        switch (featureID) {
            case railway_RailwayPackageLiterals__WEBPACK_IMPORTED_MODULE_4__["RailwayPackageLiterals"].ROUTE__FOLLOWS:
                return this.follows.basicAdd(otherEnd, msgs);
        }
        //return this.eInverseAddFromRailwayElement(otherEnd, featureID, msgs);
        return _super.prototype.eInverseAdd.call(this, otherEnd, featureID, msgs);
    };
    //public eInverseAddFromRoute = this.eInverseAdd;
    RouteBase.prototype.eInverseRemove = function (otherEnd, featureID, msgs) {
        switch (featureID) {
            case railway_RailwayPackageLiterals__WEBPACK_IMPORTED_MODULE_4__["RailwayPackageLiterals"].ROUTE__FOLLOWS:
                return this.follows.basicRemove(otherEnd, msgs);
        }
        //return this.eInverseRemoveFromRailwayElement(otherEnd, featureID, msgs);
        return _super.prototype.eInverseRemove.call(this, otherEnd, featureID, msgs);
    };
    //public eInverseRemoveFromRoute = this.eInverseRemove;
    RouteBase.prototype.basicSetEntry = function (newobj, msgs) {
        var oldobj = this._entry;
        this._entry = newobj;
        if (this.eNotificationRequired()) {
            var notification = new ecore_ENotificationImpl__WEBPACK_IMPORTED_MODULE_1__["ENotificationImpl"](this, ecore_NotificationImpl__WEBPACK_IMPORTED_MODULE_2__["NotificationImpl"].SET, railway_RailwayPackageLiterals__WEBPACK_IMPORTED_MODULE_4__["RailwayPackageLiterals"].ROUTE__ENTRY, oldobj, newobj);
            if (msgs == null) {
                msgs = notification;
            }
            else {
                msgs.add(notification);
            }
        }
        return msgs;
    };
    RouteBase.prototype.basicSetExit = function (newobj, msgs) {
        var oldobj = this._exit;
        this._exit = newobj;
        if (this.eNotificationRequired()) {
            var notification = new ecore_ENotificationImpl__WEBPACK_IMPORTED_MODULE_1__["ENotificationImpl"](this, ecore_NotificationImpl__WEBPACK_IMPORTED_MODULE_2__["NotificationImpl"].SET, railway_RailwayPackageLiterals__WEBPACK_IMPORTED_MODULE_4__["RailwayPackageLiterals"].ROUTE__EXIT, oldobj, newobj);
            if (msgs == null) {
                msgs = notification;
            }
            else {
                msgs.add(notification);
            }
        }
        return msgs;
    };
    RouteBase.prototype.eGet_number_boolean_boolean = function (featureID, resolve, coreType) {
        switch (featureID) {
            case railway_RailwayPackageLiterals__WEBPACK_IMPORTED_MODULE_4__["RailwayPackageLiterals"].ROUTE__ID:
                return this.id;
            case railway_RailwayPackageLiterals__WEBPACK_IMPORTED_MODULE_4__["RailwayPackageLiterals"].ROUTE__ENTRY:
                return this.entry;
            case railway_RailwayPackageLiterals__WEBPACK_IMPORTED_MODULE_4__["RailwayPackageLiterals"].ROUTE__FOLLOWS:
                return this.follows;
            case railway_RailwayPackageLiterals__WEBPACK_IMPORTED_MODULE_4__["RailwayPackageLiterals"].ROUTE__EXIT:
                return this.exit;
            case railway_RailwayPackageLiterals__WEBPACK_IMPORTED_MODULE_4__["RailwayPackageLiterals"].ROUTE__DEFINED_BY:
                return this.definedBy;
        }
        //return this.eGetFromRailwayElement(featureID, resolve, coreType);
        return _super.prototype.eGet.call(this, featureID, resolve, coreType);
    };
    RouteBase.prototype.eSet_number_any = function (featureID, newValue) {
        switch (featureID) {
            case railway_RailwayPackageLiterals__WEBPACK_IMPORTED_MODULE_4__["RailwayPackageLiterals"].ROUTE__ENTRY:
                this.entry = newValue;
                return;
            case railway_RailwayPackageLiterals__WEBPACK_IMPORTED_MODULE_4__["RailwayPackageLiterals"].ROUTE__FOLLOWS:
                this.follows.clear();
                this.follows.addAll(newValue);
                return;
            case railway_RailwayPackageLiterals__WEBPACK_IMPORTED_MODULE_4__["RailwayPackageLiterals"].ROUTE__EXIT:
                this.exit = newValue;
                return;
            case railway_RailwayPackageLiterals__WEBPACK_IMPORTED_MODULE_4__["RailwayPackageLiterals"].ROUTE__DEFINED_BY:
                this.definedBy.clear();
                this.definedBy.addAll(newValue);
                return;
        }
        _super.prototype.eSet_number_any.call(this, featureID, newValue);
    };
    return RouteBase;
}(railway_RailwayElementImpl__WEBPACK_IMPORTED_MODULE_5__["RailwayElementImpl"]));



/***/ }),

/***/ "./src/railway/RouteImpl.ts":
/*!**********************************!*\
  !*** ./src/railway/RouteImpl.ts ***!
  \**********************************/
/*! exports provided: RouteImpl */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RouteImpl", function() { return RouteImpl; });
/* harmony import */ var ecore_Set__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ecore/Set */ "./node_modules/crossecore/src/Set.ts");
/* harmony import */ var railway_RouteBase__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! railway/RouteBase */ "./src/railway/RouteBase.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();


/* import Ecore*/
var RouteImpl = /** @class */ (function (_super) {
    __extends(RouteImpl, _super);
    function RouteImpl() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    RouteImpl.allInstances_ = new ecore_Set__WEBPACK_IMPORTED_MODULE_0__["Set"]();
    return RouteImpl;
}(railway_RouteBase__WEBPACK_IMPORTED_MODULE_1__["RouteBase"]));



/***/ }),

/***/ "./src/railway/SegmentBase.ts":
/*!************************************!*\
  !*** ./src/railway/SegmentBase.ts ***!
  \************************************/
/*! exports provided: SegmentBase */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SegmentBase", function() { return SegmentBase; });
/* harmony import */ var railway_TrackElementImpl__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! railway/TrackElementImpl */ "./src/railway/TrackElementImpl.ts");
/* harmony import */ var railway_RailwayPackageLiterals__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! railway/RailwayPackageLiterals */ "./src/railway/RailwayPackageLiterals.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();


var SegmentBase = /** @class */ (function (_super) {
    __extends(SegmentBase, _super);
    function SegmentBase() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._length = 0;
        return _this;
    }
    Object.defineProperty(SegmentBase.prototype, "length", {
        get: function () {
            return this._length;
        },
        set: function (value) {
            this._length = value;
        },
        enumerable: false,
        configurable: true
    });
    SegmentBase.prototype.eStaticClass = function () {
        return SegmentBase.eStaticClass;
    };
    SegmentBase.prototype.eGet_number_boolean_boolean = function (featureID, resolve, coreType) {
        switch (featureID) {
            case railway_RailwayPackageLiterals__WEBPACK_IMPORTED_MODULE_1__["RailwayPackageLiterals"].SEGMENT__ID:
                return this.id;
            case railway_RailwayPackageLiterals__WEBPACK_IMPORTED_MODULE_1__["RailwayPackageLiterals"].SEGMENT__SENSOR:
                return this.sensor;
            case railway_RailwayPackageLiterals__WEBPACK_IMPORTED_MODULE_1__["RailwayPackageLiterals"].SEGMENT__CONNECTS_TO:
                return this.connectsTo;
            case railway_RailwayPackageLiterals__WEBPACK_IMPORTED_MODULE_1__["RailwayPackageLiterals"].SEGMENT__LENGTH:
                return this.length;
        }
        //return this.eGetFromTrackElement(featureID, resolve, coreType);
        return _super.prototype.eGet.call(this, featureID, resolve, coreType);
    };
    SegmentBase.prototype.eSet_number_any = function (featureID, newValue) {
        switch (featureID) {
            case railway_RailwayPackageLiterals__WEBPACK_IMPORTED_MODULE_1__["RailwayPackageLiterals"].SEGMENT__LENGTH:
                this.length = newValue;
                return;
        }
        _super.prototype.eSet_number_any.call(this, featureID, newValue);
    };
    return SegmentBase;
}(railway_TrackElementImpl__WEBPACK_IMPORTED_MODULE_0__["TrackElementImpl"]));



/***/ }),

/***/ "./src/railway/SegmentImpl.ts":
/*!************************************!*\
  !*** ./src/railway/SegmentImpl.ts ***!
  \************************************/
/*! exports provided: SegmentImpl */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SegmentImpl", function() { return SegmentImpl; });
/* harmony import */ var ecore_Set__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ecore/Set */ "./node_modules/crossecore/src/Set.ts");
/* harmony import */ var railway_SegmentBase__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! railway/SegmentBase */ "./src/railway/SegmentBase.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();


/* import Ecore*/
var SegmentImpl = /** @class */ (function (_super) {
    __extends(SegmentImpl, _super);
    function SegmentImpl() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SegmentImpl.allInstances_ = new ecore_Set__WEBPACK_IMPORTED_MODULE_0__["Set"]();
    return SegmentImpl;
}(railway_SegmentBase__WEBPACK_IMPORTED_MODULE_1__["SegmentBase"]));



/***/ }),

/***/ "./src/railway/SemaphoreBase.ts":
/*!**************************************!*\
  !*** ./src/railway/SemaphoreBase.ts ***!
  \**************************************/
/*! exports provided: SemaphoreBase */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SemaphoreBase", function() { return SemaphoreBase; });
/* harmony import */ var railway_Signal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! railway/Signal */ "./src/railway/Signal.ts");
/* harmony import */ var railway_RailwayPackageLiterals__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! railway/RailwayPackageLiterals */ "./src/railway/RailwayPackageLiterals.ts");
/* harmony import */ var railway_RailwayElementImpl__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! railway/RailwayElementImpl */ "./src/railway/RailwayElementImpl.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();



var SemaphoreBase = /** @class */ (function (_super) {
    __extends(SemaphoreBase, _super);
    function SemaphoreBase() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._signal = railway_Signal__WEBPACK_IMPORTED_MODULE_0__["Signal"].FAILURE;
        return _this;
    }
    Object.defineProperty(SemaphoreBase.prototype, "signal", {
        get: function () {
            return this._signal;
        },
        set: function (value) {
            this._signal = value;
        },
        enumerable: false,
        configurable: true
    });
    SemaphoreBase.prototype.eStaticClass = function () {
        return SemaphoreBase.eStaticClass;
    };
    SemaphoreBase.prototype.eGet_number_boolean_boolean = function (featureID, resolve, coreType) {
        switch (featureID) {
            case railway_RailwayPackageLiterals__WEBPACK_IMPORTED_MODULE_1__["RailwayPackageLiterals"].SEMAPHORE__ID:
                return this.id;
            case railway_RailwayPackageLiterals__WEBPACK_IMPORTED_MODULE_1__["RailwayPackageLiterals"].SEMAPHORE__SIGNAL:
                return this.signal;
        }
        //return this.eGetFromRailwayElement(featureID, resolve, coreType);
        return _super.prototype.eGet.call(this, featureID, resolve, coreType);
    };
    SemaphoreBase.prototype.eSet_number_any = function (featureID, newValue) {
        switch (featureID) {
            case railway_RailwayPackageLiterals__WEBPACK_IMPORTED_MODULE_1__["RailwayPackageLiterals"].SEMAPHORE__SIGNAL:
                this.signal = newValue;
                return;
        }
        _super.prototype.eSet_number_any.call(this, featureID, newValue);
    };
    return SemaphoreBase;
}(railway_RailwayElementImpl__WEBPACK_IMPORTED_MODULE_2__["RailwayElementImpl"]));



/***/ }),

/***/ "./src/railway/SemaphoreImpl.ts":
/*!**************************************!*\
  !*** ./src/railway/SemaphoreImpl.ts ***!
  \**************************************/
/*! exports provided: SemaphoreImpl */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SemaphoreImpl", function() { return SemaphoreImpl; });
/* harmony import */ var ecore_Set__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ecore/Set */ "./node_modules/crossecore/src/Set.ts");
/* harmony import */ var railway_SemaphoreBase__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! railway/SemaphoreBase */ "./src/railway/SemaphoreBase.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();


/* import Ecore*/
var SemaphoreImpl = /** @class */ (function (_super) {
    __extends(SemaphoreImpl, _super);
    function SemaphoreImpl() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SemaphoreImpl.allInstances_ = new ecore_Set__WEBPACK_IMPORTED_MODULE_0__["Set"]();
    return SemaphoreImpl;
}(railway_SemaphoreBase__WEBPACK_IMPORTED_MODULE_1__["SemaphoreBase"]));



/***/ }),

/***/ "./src/railway/SensorBase.ts":
/*!***********************************!*\
  !*** ./src/railway/SensorBase.ts ***!
  \***********************************/
/*! exports provided: SensorBase */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SensorBase", function() { return SensorBase; });
/* harmony import */ var ecore_OrderedSet__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ecore/OrderedSet */ "./node_modules/crossecore/src/OrderedSet.ts");
/* harmony import */ var railway_RailwayPackageLiterals__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! railway/RailwayPackageLiterals */ "./src/railway/RailwayPackageLiterals.ts");
/* harmony import */ var railway_RailwayElementImpl__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! railway/RailwayElementImpl */ "./src/railway/RailwayElementImpl.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();



var SensorBase = /** @class */ (function (_super) {
    __extends(SensorBase, _super);
    function SensorBase() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._elements = null;
        return _this;
    }
    Object.defineProperty(SensorBase.prototype, "elements", {
        get: function () {
            if (this._elements === null) {
                this._elements = new ecore_OrderedSet__WEBPACK_IMPORTED_MODULE_0__["OrderedSet"](this, railway_RailwayPackageLiterals__WEBPACK_IMPORTED_MODULE_1__["RailwayPackageLiterals"].SENSOR__ELEMENTS, railway_RailwayPackageLiterals__WEBPACK_IMPORTED_MODULE_1__["RailwayPackageLiterals"].TRACK_ELEMENT__SENSOR);
            }
            return this._elements;
        },
        enumerable: false,
        configurable: true
    });
    SensorBase.prototype.eStaticClass = function () {
        return SensorBase.eStaticClass;
    };
    SensorBase.prototype.eInverseAdd = function (otherEnd, featureID, msgs) {
        switch (featureID) {
            case railway_RailwayPackageLiterals__WEBPACK_IMPORTED_MODULE_1__["RailwayPackageLiterals"].SENSOR__ELEMENTS:
                return this.elements.basicAdd(otherEnd, msgs);
        }
        //return this.eInverseAddFromRailwayElement(otherEnd, featureID, msgs);
        return _super.prototype.eInverseAdd.call(this, otherEnd, featureID, msgs);
    };
    //public eInverseAddFromSensor = this.eInverseAdd;
    SensorBase.prototype.eInverseRemove = function (otherEnd, featureID, msgs) {
        switch (featureID) {
            case railway_RailwayPackageLiterals__WEBPACK_IMPORTED_MODULE_1__["RailwayPackageLiterals"].SENSOR__ELEMENTS:
                return this.elements.basicRemove(otherEnd, msgs);
        }
        //return this.eInverseRemoveFromRailwayElement(otherEnd, featureID, msgs);
        return _super.prototype.eInverseRemove.call(this, otherEnd, featureID, msgs);
    };
    //public eInverseRemoveFromSensor = this.eInverseRemove;
    SensorBase.prototype.eGet_number_boolean_boolean = function (featureID, resolve, coreType) {
        switch (featureID) {
            case railway_RailwayPackageLiterals__WEBPACK_IMPORTED_MODULE_1__["RailwayPackageLiterals"].SENSOR__ID:
                return this.id;
            case railway_RailwayPackageLiterals__WEBPACK_IMPORTED_MODULE_1__["RailwayPackageLiterals"].SENSOR__ELEMENTS:
                return this.elements;
        }
        //return this.eGetFromRailwayElement(featureID, resolve, coreType);
        return _super.prototype.eGet.call(this, featureID, resolve, coreType);
    };
    SensorBase.prototype.eSet_number_any = function (featureID, newValue) {
        switch (featureID) {
            case railway_RailwayPackageLiterals__WEBPACK_IMPORTED_MODULE_1__["RailwayPackageLiterals"].SENSOR__ELEMENTS:
                this.elements.clear();
                this.elements.addAll(newValue);
                return;
        }
        _super.prototype.eSet_number_any.call(this, featureID, newValue);
    };
    return SensorBase;
}(railway_RailwayElementImpl__WEBPACK_IMPORTED_MODULE_2__["RailwayElementImpl"]));



/***/ }),

/***/ "./src/railway/SensorImpl.ts":
/*!***********************************!*\
  !*** ./src/railway/SensorImpl.ts ***!
  \***********************************/
/*! exports provided: SensorImpl */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SensorImpl", function() { return SensorImpl; });
/* harmony import */ var ecore_Set__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ecore/Set */ "./node_modules/crossecore/src/Set.ts");
/* harmony import */ var railway_SensorBase__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! railway/SensorBase */ "./src/railway/SensorBase.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();


/* import Ecore*/
var SensorImpl = /** @class */ (function (_super) {
    __extends(SensorImpl, _super);
    function SensorImpl() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SensorImpl.allInstances_ = new ecore_Set__WEBPACK_IMPORTED_MODULE_0__["Set"]();
    return SensorImpl;
}(railway_SensorBase__WEBPACK_IMPORTED_MODULE_1__["SensorBase"]));



/***/ }),

/***/ "./src/railway/Signal.ts":
/*!*******************************!*\
  !*** ./src/railway/Signal.ts ***!
  \*******************************/
/*! exports provided: Signal */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Signal", function() { return Signal; });
var Signal = /** @class */ (function () {
    function Signal(value, name, literal) {
        this.value = value;
        this.name = name;
        this.literal = literal;
    }
    Signal.get_string = function (literal) {
        for (var i = 0; i < this.VALUES_ARRAY.length; i++) {
            var result = this.VALUES_ARRAY[i];
            if (result.toString() === literal) {
                return result;
            }
        }
        return null;
    };
    Signal.getByName = function (name) {
        for (var i = 0; i < this.VALUES_ARRAY.length; i++) {
            var result = this.VALUES_ARRAY[i];
            if (result.getName() == name) {
                return result;
            }
        }
        return null;
    };
    Signal.get_number = function (value) {
        switch (value) {
            case this.FAILURE_VALUE: return this.FAILURE;
            case this.STOP_VALUE: return this.STOP;
            case this.GO_VALUE: return this.GO;
        }
        return null;
    };
    Signal.prototype.getLiteral = function () {
        return this.literal;
    };
    Signal.prototype.getName = function () {
        return this.name;
    };
    Signal.prototype.getValue = function () {
        return this.value;
    };
    Signal.prototype.toString = function () {
        return this.literal;
    };
    Signal.FAILURE_VALUE = 1;
    Signal.STOP_VALUE = 0;
    Signal.GO_VALUE = 2;
    Signal.FAILURE = new Signal(1, "FAILURE", "FAILURE");
    Signal.STOP = new Signal(0, "STOP", "STOP");
    Signal.GO = new Signal(2, "GO", "GO");
    Signal.VALUES_ARRAY = [
        Signal.FAILURE,
        Signal.STOP,
        Signal.GO
    ];
    return Signal;
}());



/***/ }),

/***/ "./src/railway/SwitchBase.ts":
/*!***********************************!*\
  !*** ./src/railway/SwitchBase.ts ***!
  \***********************************/
/*! exports provided: SwitchBase */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SwitchBase", function() { return SwitchBase; });
/* harmony import */ var ecore_OrderedSet__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ecore/OrderedSet */ "./node_modules/crossecore/src/OrderedSet.ts");
/* harmony import */ var railway_Position__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! railway/Position */ "./src/railway/Position.ts");
/* harmony import */ var railway_TrackElementImpl__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! railway/TrackElementImpl */ "./src/railway/TrackElementImpl.ts");
/* harmony import */ var railway_RailwayPackageLiterals__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! railway/RailwayPackageLiterals */ "./src/railway/RailwayPackageLiterals.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();




var SwitchBase = /** @class */ (function (_super) {
    __extends(SwitchBase, _super);
    function SwitchBase() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._currentPosition = railway_Position__WEBPACK_IMPORTED_MODULE_1__["Position"].FAILURE;
        _this._positions = null;
        return _this;
    }
    Object.defineProperty(SwitchBase.prototype, "currentPosition", {
        get: function () {
            return this._currentPosition;
        },
        set: function (value) {
            this._currentPosition = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SwitchBase.prototype, "positions", {
        get: function () {
            if (this._positions === null) {
                this._positions = new ecore_OrderedSet__WEBPACK_IMPORTED_MODULE_0__["OrderedSet"](this, railway_RailwayPackageLiterals__WEBPACK_IMPORTED_MODULE_3__["RailwayPackageLiterals"].SWITCH__POSITIONS, railway_RailwayPackageLiterals__WEBPACK_IMPORTED_MODULE_3__["RailwayPackageLiterals"].SWITCH_POSITION__SWITCH);
            }
            return this._positions;
        },
        enumerable: false,
        configurable: true
    });
    SwitchBase.prototype.eStaticClass = function () {
        return SwitchBase.eStaticClass;
    };
    SwitchBase.prototype.eInverseAdd = function (otherEnd, featureID, msgs) {
        switch (featureID) {
            case railway_RailwayPackageLiterals__WEBPACK_IMPORTED_MODULE_3__["RailwayPackageLiterals"].SWITCH__POSITIONS:
                return this.positions.basicAdd(otherEnd, msgs);
        }
        //return this.eInverseAddFromTrackElement(otherEnd, featureID, msgs);
        return _super.prototype.eInverseAdd.call(this, otherEnd, featureID, msgs);
    };
    //public eInverseAddFromSwitch = this.eInverseAdd;
    SwitchBase.prototype.eInverseRemove = function (otherEnd, featureID, msgs) {
        switch (featureID) {
            case railway_RailwayPackageLiterals__WEBPACK_IMPORTED_MODULE_3__["RailwayPackageLiterals"].SWITCH__POSITIONS:
                return this.positions.basicRemove(otherEnd, msgs);
        }
        //return this.eInverseRemoveFromTrackElement(otherEnd, featureID, msgs);
        return _super.prototype.eInverseRemove.call(this, otherEnd, featureID, msgs);
    };
    //public eInverseRemoveFromSwitch = this.eInverseRemove;
    SwitchBase.prototype.eGet_number_boolean_boolean = function (featureID, resolve, coreType) {
        switch (featureID) {
            case railway_RailwayPackageLiterals__WEBPACK_IMPORTED_MODULE_3__["RailwayPackageLiterals"].SWITCH__ID:
                return this.id;
            case railway_RailwayPackageLiterals__WEBPACK_IMPORTED_MODULE_3__["RailwayPackageLiterals"].SWITCH__SENSOR:
                return this.sensor;
            case railway_RailwayPackageLiterals__WEBPACK_IMPORTED_MODULE_3__["RailwayPackageLiterals"].SWITCH__CONNECTS_TO:
                return this.connectsTo;
            case railway_RailwayPackageLiterals__WEBPACK_IMPORTED_MODULE_3__["RailwayPackageLiterals"].SWITCH__CURRENT_POSITION:
                return this.currentPosition;
            case railway_RailwayPackageLiterals__WEBPACK_IMPORTED_MODULE_3__["RailwayPackageLiterals"].SWITCH__POSITIONS:
                return this.positions;
        }
        //return this.eGetFromTrackElement(featureID, resolve, coreType);
        return _super.prototype.eGet.call(this, featureID, resolve, coreType);
    };
    SwitchBase.prototype.eSet_number_any = function (featureID, newValue) {
        switch (featureID) {
            case railway_RailwayPackageLiterals__WEBPACK_IMPORTED_MODULE_3__["RailwayPackageLiterals"].SWITCH__CURRENT_POSITION:
                this.currentPosition = newValue;
                return;
            case railway_RailwayPackageLiterals__WEBPACK_IMPORTED_MODULE_3__["RailwayPackageLiterals"].SWITCH__POSITIONS:
                this.positions.clear();
                this.positions.addAll(newValue);
                return;
        }
        _super.prototype.eSet_number_any.call(this, featureID, newValue);
    };
    return SwitchBase;
}(railway_TrackElementImpl__WEBPACK_IMPORTED_MODULE_2__["TrackElementImpl"]));



/***/ }),

/***/ "./src/railway/SwitchImpl.ts":
/*!***********************************!*\
  !*** ./src/railway/SwitchImpl.ts ***!
  \***********************************/
/*! exports provided: SwitchImpl */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SwitchImpl", function() { return SwitchImpl; });
/* harmony import */ var ecore_Set__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ecore/Set */ "./node_modules/crossecore/src/Set.ts");
/* harmony import */ var railway_SwitchBase__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! railway/SwitchBase */ "./src/railway/SwitchBase.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();


/* import Ecore*/
var SwitchImpl = /** @class */ (function (_super) {
    __extends(SwitchImpl, _super);
    function SwitchImpl() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SwitchImpl.allInstances_ = new ecore_Set__WEBPACK_IMPORTED_MODULE_0__["Set"]();
    return SwitchImpl;
}(railway_SwitchBase__WEBPACK_IMPORTED_MODULE_1__["SwitchBase"]));



/***/ }),

/***/ "./src/railway/SwitchPositionBase.ts":
/*!*******************************************!*\
  !*** ./src/railway/SwitchPositionBase.ts ***!
  \*******************************************/
/*! exports provided: SwitchPositionBase */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SwitchPositionBase", function() { return SwitchPositionBase; });
/* harmony import */ var ecore_ENotificationImpl__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ecore/ENotificationImpl */ "./node_modules/crossecore/src/ENotificationImpl.ts");
/* harmony import */ var ecore_NotificationImpl__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ecore/NotificationImpl */ "./node_modules/crossecore/src/NotificationImpl.ts");
/* harmony import */ var railway_Position__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! railway/Position */ "./src/railway/Position.ts");
/* harmony import */ var railway_RailwayPackageLiterals__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! railway/RailwayPackageLiterals */ "./src/railway/RailwayPackageLiterals.ts");
/* harmony import */ var railway_RailwayElementImpl__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! railway/RailwayElementImpl */ "./src/railway/RailwayElementImpl.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();





var SwitchPositionBase = /** @class */ (function (_super) {
    __extends(SwitchPositionBase, _super);
    function SwitchPositionBase() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._position = railway_Position__WEBPACK_IMPORTED_MODULE_2__["Position"].FAILURE;
        _this._switch = null;
        return _this;
    }
    Object.defineProperty(SwitchPositionBase.prototype, "position", {
        get: function () {
            return this._position;
        },
        set: function (value) {
            this._position = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SwitchPositionBase.prototype, "switch", {
        get: function () {
            return this._switch;
        },
        set: function (value) {
            if (value != this._switch) {
                var msgs = null;
                if (this._switch != null) {
                    msgs = (this._switch).eInverseRemove(this, railway_RailwayPackageLiterals__WEBPACK_IMPORTED_MODULE_3__["RailwayPackageLiterals"].SWITCH__POSITIONS, /*SwitchPosition*/ null, msgs);
                }
                if (value != null) {
                    msgs = value.eInverseAdd(this, railway_RailwayPackageLiterals__WEBPACK_IMPORTED_MODULE_3__["RailwayPackageLiterals"].SWITCH__POSITIONS, /*SwitchPosition*/ null, msgs);
                }
                msgs = this.basicSetSwitch(value, msgs);
                if (msgs != null) {
                    msgs.dispatch();
                }
            }
            else if (this.eNotificationRequired()) {
                this.eNotify(new ecore_ENotificationImpl__WEBPACK_IMPORTED_MODULE_0__["ENotificationImpl"](this, ecore_NotificationImpl__WEBPACK_IMPORTED_MODULE_1__["NotificationImpl"].SET, railway_RailwayPackageLiterals__WEBPACK_IMPORTED_MODULE_3__["RailwayPackageLiterals"].SWITCH_POSITION__SWITCH, value, value));
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SwitchPositionBase.prototype, "route", {
        get: function () {
            if (this.eContainerFeatureID() != railway_RailwayPackageLiterals__WEBPACK_IMPORTED_MODULE_3__["RailwayPackageLiterals"].SWITCH_POSITION__ROUTE)
                return null;
            return this.eInternalContainer();
        },
        set: function (value) {
            if (value != this.eInternalContainer()) {
                var msgs = null;
                if (this.eInternalContainer() != null) {
                    msgs = this.eInternalContainer().eInverseRemove(this, railway_RailwayPackageLiterals__WEBPACK_IMPORTED_MODULE_3__["RailwayPackageLiterals"].ROUTE__FOLLOWS, /*SwitchPosition*/ null, msgs);
                }
                if (value != null) {
                    msgs = value.eInverseAdd(this, railway_RailwayPackageLiterals__WEBPACK_IMPORTED_MODULE_3__["RailwayPackageLiterals"].ROUTE__FOLLOWS, /*SwitchPosition*/ null, msgs);
                }
                msgs = this.basicSetRoute(value, msgs);
                if (msgs != null) {
                    msgs.dispatch();
                }
            }
            else if (this.eNotificationRequired()) {
                this.eNotify(new ecore_ENotificationImpl__WEBPACK_IMPORTED_MODULE_0__["ENotificationImpl"](this, ecore_NotificationImpl__WEBPACK_IMPORTED_MODULE_1__["NotificationImpl"].SET, railway_RailwayPackageLiterals__WEBPACK_IMPORTED_MODULE_3__["RailwayPackageLiterals"].SWITCH_POSITION__ROUTE, value, value));
            }
        },
        enumerable: false,
        configurable: true
    });
    SwitchPositionBase.prototype.eStaticClass = function () {
        return SwitchPositionBase.eStaticClass;
    };
    SwitchPositionBase.prototype.eInverseAdd = function (otherEnd, featureID, msgs) {
        switch (featureID) {
            case railway_RailwayPackageLiterals__WEBPACK_IMPORTED_MODULE_3__["RailwayPackageLiterals"].SWITCH_POSITION__ROUTE:
                if (this.eInternalContainer() != null) {
                    msgs = this.eBasicRemoveFromContainer(msgs);
                }
                return this.basicSetRoute(otherEnd, msgs);
            case railway_RailwayPackageLiterals__WEBPACK_IMPORTED_MODULE_3__["RailwayPackageLiterals"].SWITCH_POSITION__SWITCH:
                if (this._switch != null) {
                    msgs = this._switch.eInverseRemove(this, railway_RailwayPackageLiterals__WEBPACK_IMPORTED_MODULE_3__["RailwayPackageLiterals"].SWITCH_POSITION__SWITCH, /*Switch*/ null, msgs);
                }
                return this.basicSetSwitch(otherEnd, msgs);
        }
        //return this.eInverseAddFromRailwayElement(otherEnd, featureID, msgs);
        return _super.prototype.eInverseAdd.call(this, otherEnd, featureID, msgs);
    };
    //public eInverseAddFromSwitchPosition = this.eInverseAdd;
    SwitchPositionBase.prototype.eInverseRemove = function (otherEnd, featureID, msgs) {
        switch (featureID) {
            case railway_RailwayPackageLiterals__WEBPACK_IMPORTED_MODULE_3__["RailwayPackageLiterals"].SWITCH_POSITION__ROUTE:
                return this.basicSetRoute(null, msgs);
            case railway_RailwayPackageLiterals__WEBPACK_IMPORTED_MODULE_3__["RailwayPackageLiterals"].SWITCH_POSITION__SWITCH:
                return this.basicSetSwitch(null, msgs);
        }
        //return this.eInverseRemoveFromRailwayElement(otherEnd, featureID, msgs);
        return _super.prototype.eInverseRemove.call(this, otherEnd, featureID, msgs);
    };
    //public eInverseRemoveFromSwitchPosition = this.eInverseRemove;
    SwitchPositionBase.prototype.basicSetRoute = function (newobj, msgs) {
        msgs = this.eBasicSetContainer(newobj, railway_RailwayPackageLiterals__WEBPACK_IMPORTED_MODULE_3__["RailwayPackageLiterals"].SWITCH_POSITION__ROUTE, msgs);
        return msgs;
    };
    SwitchPositionBase.prototype.basicSetSwitch = function (newobj, msgs) {
        var oldobj = this._switch;
        this._switch = newobj;
        if (this.eNotificationRequired()) {
            var notification = new ecore_ENotificationImpl__WEBPACK_IMPORTED_MODULE_0__["ENotificationImpl"](this, ecore_NotificationImpl__WEBPACK_IMPORTED_MODULE_1__["NotificationImpl"].SET, railway_RailwayPackageLiterals__WEBPACK_IMPORTED_MODULE_3__["RailwayPackageLiterals"].SWITCH_POSITION__SWITCH, oldobj, newobj);
            if (msgs == null) {
                msgs = notification;
            }
            else {
                msgs.add(notification);
            }
        }
        return msgs;
    };
    SwitchPositionBase.prototype.eGet_number_boolean_boolean = function (featureID, resolve, coreType) {
        switch (featureID) {
            case railway_RailwayPackageLiterals__WEBPACK_IMPORTED_MODULE_3__["RailwayPackageLiterals"].SWITCH_POSITION__ID:
                return this.id;
            case railway_RailwayPackageLiterals__WEBPACK_IMPORTED_MODULE_3__["RailwayPackageLiterals"].SWITCH_POSITION__SWITCH:
                return this.switch;
            case railway_RailwayPackageLiterals__WEBPACK_IMPORTED_MODULE_3__["RailwayPackageLiterals"].SWITCH_POSITION__POSITION:
                return this.position;
            case railway_RailwayPackageLiterals__WEBPACK_IMPORTED_MODULE_3__["RailwayPackageLiterals"].SWITCH_POSITION__ROUTE:
                return this.route;
        }
        //return this.eGetFromRailwayElement(featureID, resolve, coreType);
        return _super.prototype.eGet.call(this, featureID, resolve, coreType);
    };
    SwitchPositionBase.prototype.eSet_number_any = function (featureID, newValue) {
        switch (featureID) {
            case railway_RailwayPackageLiterals__WEBPACK_IMPORTED_MODULE_3__["RailwayPackageLiterals"].SWITCH_POSITION__POSITION:
                this.position = newValue;
                return;
            case railway_RailwayPackageLiterals__WEBPACK_IMPORTED_MODULE_3__["RailwayPackageLiterals"].SWITCH_POSITION__SWITCH:
                this.switch = newValue;
                return;
            case railway_RailwayPackageLiterals__WEBPACK_IMPORTED_MODULE_3__["RailwayPackageLiterals"].SWITCH_POSITION__ROUTE:
                this.route = newValue;
                return;
        }
        _super.prototype.eSet_number_any.call(this, featureID, newValue);
    };
    return SwitchPositionBase;
}(railway_RailwayElementImpl__WEBPACK_IMPORTED_MODULE_4__["RailwayElementImpl"]));



/***/ }),

/***/ "./src/railway/SwitchPositionImpl.ts":
/*!*******************************************!*\
  !*** ./src/railway/SwitchPositionImpl.ts ***!
  \*******************************************/
/*! exports provided: SwitchPositionImpl */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SwitchPositionImpl", function() { return SwitchPositionImpl; });
/* harmony import */ var ecore_Set__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ecore/Set */ "./node_modules/crossecore/src/Set.ts");
/* harmony import */ var railway_SwitchPositionBase__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! railway/SwitchPositionBase */ "./src/railway/SwitchPositionBase.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();


/* import Ecore*/
var SwitchPositionImpl = /** @class */ (function (_super) {
    __extends(SwitchPositionImpl, _super);
    function SwitchPositionImpl() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SwitchPositionImpl.allInstances_ = new ecore_Set__WEBPACK_IMPORTED_MODULE_0__["Set"]();
    return SwitchPositionImpl;
}(railway_SwitchPositionBase__WEBPACK_IMPORTED_MODULE_1__["SwitchPositionBase"]));



/***/ }),

/***/ "./src/railway/TrackElementBase.ts":
/*!*****************************************!*\
  !*** ./src/railway/TrackElementBase.ts ***!
  \*****************************************/
/*! exports provided: TrackElementBase */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TrackElementBase", function() { return TrackElementBase; });
/* harmony import */ var ecore_OrderedSet__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ecore/OrderedSet */ "./node_modules/crossecore/src/OrderedSet.ts");
/* harmony import */ var ecore_ENotificationImpl__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ecore/ENotificationImpl */ "./node_modules/crossecore/src/ENotificationImpl.ts");
/* harmony import */ var ecore_NotificationImpl__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ecore/NotificationImpl */ "./node_modules/crossecore/src/NotificationImpl.ts");
/* harmony import */ var ecore_BasicEObjectImpl__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ecore/BasicEObjectImpl */ "./node_modules/crossecore/src/BasicEObjectImpl.ts");
/* harmony import */ var railway_RailwayPackageLiterals__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! railway/RailwayPackageLiterals */ "./src/railway/RailwayPackageLiterals.ts");
/* harmony import */ var railway_RailwayElementImpl__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! railway/RailwayElementImpl */ "./src/railway/RailwayElementImpl.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();






var TrackElementBase = /** @class */ (function (_super) {
    __extends(TrackElementBase, _super);
    function TrackElementBase() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._connectsTo = null;
        return _this;
    }
    Object.defineProperty(TrackElementBase.prototype, "sensor", {
        get: function () {
            if (this.eContainerFeatureID() != railway_RailwayPackageLiterals__WEBPACK_IMPORTED_MODULE_4__["RailwayPackageLiterals"].TRACK_ELEMENT__SENSOR)
                return null;
            return this.eInternalContainer();
        },
        set: function (value) {
            if (value != this.eInternalContainer()) {
                var msgs = null;
                if (this.eInternalContainer() != null) {
                    msgs = this.eInternalContainer().eInverseRemove(this, railway_RailwayPackageLiterals__WEBPACK_IMPORTED_MODULE_4__["RailwayPackageLiterals"].SENSOR__ELEMENTS, /*TrackElement*/ null, msgs);
                }
                if (value != null) {
                    msgs = value.eInverseAdd(this, railway_RailwayPackageLiterals__WEBPACK_IMPORTED_MODULE_4__["RailwayPackageLiterals"].SENSOR__ELEMENTS, /*TrackElement*/ null, msgs);
                }
                msgs = this.basicSetSensor(value, msgs);
                if (msgs != null) {
                    msgs.dispatch();
                }
            }
            else if (this.eNotificationRequired()) {
                this.eNotify(new ecore_ENotificationImpl__WEBPACK_IMPORTED_MODULE_1__["ENotificationImpl"](this, ecore_NotificationImpl__WEBPACK_IMPORTED_MODULE_2__["NotificationImpl"].SET, railway_RailwayPackageLiterals__WEBPACK_IMPORTED_MODULE_4__["RailwayPackageLiterals"].TRACK_ELEMENT__SENSOR, value, value));
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(TrackElementBase.prototype, "connectsTo", {
        get: function () {
            if (this._connectsTo === null) {
                this._connectsTo = new ecore_OrderedSet__WEBPACK_IMPORTED_MODULE_0__["OrderedSet"](this, railway_RailwayPackageLiterals__WEBPACK_IMPORTED_MODULE_4__["RailwayPackageLiterals"].TRACK_ELEMENT__CONNECTS_TO, ecore_BasicEObjectImpl__WEBPACK_IMPORTED_MODULE_3__["BasicEObjectImpl"].EOPPOSITE_FEATURE_BASE - railway_RailwayPackageLiterals__WEBPACK_IMPORTED_MODULE_4__["RailwayPackageLiterals"].TRACK_ELEMENT__CONNECTS_TO);
            }
            return this._connectsTo;
        },
        enumerable: false,
        configurable: true
    });
    TrackElementBase.prototype.eStaticClass = function () {
        return TrackElementBase.eStaticClass;
    };
    TrackElementBase.prototype.eInverseAdd = function (otherEnd, featureID, msgs) {
        switch (featureID) {
            case railway_RailwayPackageLiterals__WEBPACK_IMPORTED_MODULE_4__["RailwayPackageLiterals"].TRACK_ELEMENT__SENSOR:
                if (this.eInternalContainer() != null) {
                    msgs = this.eBasicRemoveFromContainer(msgs);
                }
                return this.basicSetSensor(otherEnd, msgs);
        }
        //return this.eInverseAddFromRailwayElement(otherEnd, featureID, msgs);
        return _super.prototype.eInverseAdd.call(this, otherEnd, featureID, msgs);
    };
    //public eInverseAddFromTrackElement = this.eInverseAdd;
    TrackElementBase.prototype.eInverseRemove = function (otherEnd, featureID, msgs) {
        switch (featureID) {
            case railway_RailwayPackageLiterals__WEBPACK_IMPORTED_MODULE_4__["RailwayPackageLiterals"].TRACK_ELEMENT__SENSOR:
                return this.basicSetSensor(null, msgs);
        }
        //return this.eInverseRemoveFromRailwayElement(otherEnd, featureID, msgs);
        return _super.prototype.eInverseRemove.call(this, otherEnd, featureID, msgs);
    };
    //public eInverseRemoveFromTrackElement = this.eInverseRemove;
    TrackElementBase.prototype.basicSetSensor = function (newobj, msgs) {
        msgs = this.eBasicSetContainer(newobj, railway_RailwayPackageLiterals__WEBPACK_IMPORTED_MODULE_4__["RailwayPackageLiterals"].TRACK_ELEMENT__SENSOR, msgs);
        return msgs;
    };
    TrackElementBase.prototype.eGet_number_boolean_boolean = function (featureID, resolve, coreType) {
        switch (featureID) {
            case railway_RailwayPackageLiterals__WEBPACK_IMPORTED_MODULE_4__["RailwayPackageLiterals"].TRACK_ELEMENT__ID:
                return this.id;
            case railway_RailwayPackageLiterals__WEBPACK_IMPORTED_MODULE_4__["RailwayPackageLiterals"].TRACK_ELEMENT__SENSOR:
                return this.sensor;
            case railway_RailwayPackageLiterals__WEBPACK_IMPORTED_MODULE_4__["RailwayPackageLiterals"].TRACK_ELEMENT__CONNECTS_TO:
                return this.connectsTo;
        }
        //return this.eGetFromRailwayElement(featureID, resolve, coreType);
        return _super.prototype.eGet.call(this, featureID, resolve, coreType);
    };
    TrackElementBase.prototype.eSet_number_any = function (featureID, newValue) {
        switch (featureID) {
            case railway_RailwayPackageLiterals__WEBPACK_IMPORTED_MODULE_4__["RailwayPackageLiterals"].TRACK_ELEMENT__SENSOR:
                this.sensor = newValue;
                return;
            case railway_RailwayPackageLiterals__WEBPACK_IMPORTED_MODULE_4__["RailwayPackageLiterals"].TRACK_ELEMENT__CONNECTS_TO:
                this.connectsTo.clear();
                this.connectsTo.addAll(newValue);
                return;
        }
        _super.prototype.eSet_number_any.call(this, featureID, newValue);
    };
    return TrackElementBase;
}(railway_RailwayElementImpl__WEBPACK_IMPORTED_MODULE_5__["RailwayElementImpl"]));



/***/ }),

/***/ "./src/railway/TrackElementImpl.ts":
/*!*****************************************!*\
  !*** ./src/railway/TrackElementImpl.ts ***!
  \*****************************************/
/*! exports provided: TrackElementImpl */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TrackElementImpl", function() { return TrackElementImpl; });
/* harmony import */ var ecore_Set__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ecore/Set */ "./node_modules/crossecore/src/Set.ts");
/* harmony import */ var railway_TrackElementBase__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! railway/TrackElementBase */ "./src/railway/TrackElementBase.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();


/* import Ecore*/
var TrackElementImpl = /** @class */ (function (_super) {
    __extends(TrackElementImpl, _super);
    function TrackElementImpl() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    TrackElementImpl.allInstances_ = new ecore_Set__WEBPACK_IMPORTED_MODULE_0__["Set"]();
    return TrackElementImpl;
}(railway_TrackElementBase__WEBPACK_IMPORTED_MODULE_1__["TrackElementBase"]));



/***/ })

/******/ });