/* CrossEcore is a cross-platform modeling framework that generates C#, TypeScript,
 * JavaScript, Swift code from Ecore models with embedded OCL (http://www.crossecore.org/).
 * The original Eclipse Modeling Framework is available at https://www.eclipse.org/modeling/emf/.
 *
 * contributor: Simon Schwichtenberg
 */
define(["require", "exports", "./EClassImpl"], function (require, exports, EClassImpl_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var AllInstances = (function () {
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
                    if (eclassifier instanceof EClassImpl_1.EClassImpl) {
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
                        if (subclass instanceof EClassImpl_1.EClassImpl) {
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
    exports.AllInstances = AllInstances;
});
//# sourceMappingURL=AllInstances.js.map