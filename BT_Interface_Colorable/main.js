"use strict";
exports.__esModule = true;
var Circle_1 = require("./Class/Circle");
var Rectangle_1 = require("./Class/Rectangle");
var Square_1 = require("./Class/Square");
var allElements = [];
var aCircle = new Circle_1.Circle("Circle A", 11);
var bRectangle = new Rectangle_1.Rectangle(22, 33, "Rectangle B");
var cSquare = new Square_1.Square("Square C", 44);
allElements.push(aCircle, bRectangle, cSquare);
var checkColorable = function () {
    for (var i = 0; i in allElements; i++) {
        if (allElements[i] instanceof Square_1.Square) {
            console.log("\n            ".concat(allElements[i].name, ": Perimetter = ").concat(allElements[i].calculateArea(), "\n            ").concat(allElements[i].howToColor(), "\n            "));
        }
        else {
            console.log("\n            ".concat(allElements[i].name, ": Perimetter = ").concat(allElements[i].calculateArea(), "\n            "));
        }
    }
};
checkColorable();
