"use strict";
exports.__esModule = true;
var Tiger_1 = require("./Animal/Tiger");
var Chicken_1 = require("./Animal/Chicken");
var newTiger = new Tiger_1.Tiger();
var newChicken = new Chicken_1.Chicken();
console.log(newTiger.makeSound(), newChicken.makeSound());
