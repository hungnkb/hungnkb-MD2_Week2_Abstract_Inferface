"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
exports.CircleCompare = void 0;
var Circle_1 = require("./Circle");
var CircleCompare = /** @class */ (function (_super) {
    __extends(CircleCompare, _super);
    function CircleCompare(radius) {
        return _super.call(this, radius) || this;
    }
    CircleCompare.prototype.compareTo = function (newCircle) {
        if (this.radius > newCircle.radius) {
            return 'This circle is bigger than this one';
        }
        else if (this.radius < newCircle.radius) {
            return 'This circle is smaller than this one';
        }
        else if (this.radius == newCircle.radius) {
            return 'This circle is equal to this one';
        }
    };
    return CircleCompare;
}(Circle_1.Circle));
exports.CircleCompare = CircleCompare;
