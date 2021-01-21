/* CrossEcore is a cross-platform modeling framework that generates C#, TypeScript,
 * JavaScript, Swift code from Ecore models with embedded OCL (http://www.crossecore.org/).
 * The original Eclipse Modeling Framework is available at https://www.eclipse.org/modeling/emf/.
 *
 * contributor: Simon Schwichtenberg
 */
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
define(["require", "exports", "./EOperationBase"], function (require, exports, EOperationBase_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    ///<summary>This class was generated.</summary>
    var EOperationImpl = (function (_super) {
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
    }(EOperationBase_1.EOperationBase));
    exports.EOperationImpl = EOperationImpl;
});
//# sourceMappingURL=EOperationImpl.js.map