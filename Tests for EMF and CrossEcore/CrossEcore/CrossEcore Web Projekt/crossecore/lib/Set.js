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
define(["require", "exports", "./AbstractCollection"], function (require, exports, AbstractCollection_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var Set = (function (_super) {
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
    }(AbstractCollection_1.AbstractCollection));
    exports.Set = Set;
});
//# sourceMappingURL=Set.js.map