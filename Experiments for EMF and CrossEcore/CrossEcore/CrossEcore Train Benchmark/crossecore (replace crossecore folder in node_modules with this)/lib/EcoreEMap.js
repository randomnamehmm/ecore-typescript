define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var EcoreEMap = (function () {
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
    exports.EcoreEMap = EcoreEMap;
});
//# sourceMappingURL=EcoreEMap.js.map