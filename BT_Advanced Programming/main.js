"use strict";
exports.__esModule = true;
var Circle_1 = require("./Class/Circle");
var Rectangle_1 = require("./Class/Rectangle");
var Square_1 = require("./Class/Square");
var elements = [];
var aCircle = new Circle_1.Circle("A Circle", 11);
var bRectangle = new Rectangle_1.Rectangle(22, 33, "B Rectangle");
var cSquare = new Square_1.Square("C Square", 44);
console.log("New A Circle: " + aCircle.resize(Math.random() * 100));
console.log("New B Rectangle: " + bRectangle.resize(Math.random() * 100));
console.log("New C Square: " + cSquare.resize(Math.random() * 100));
