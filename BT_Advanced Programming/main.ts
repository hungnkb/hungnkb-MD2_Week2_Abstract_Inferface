import { Circle } from "./Class/Circle";
import { Rectangle } from "./Class/Rectangle";
import { Square } from "./Class/Square";

let elements = [];

let aCircle = new Circle("A Circle", 11);
let bRectangle = new Rectangle(22, 33, "B Rectangle",);
let cSquare = new Square("C Square", 44)

console.log("New A Circle: " + aCircle.resize(Math.random() * 100))
console.log("New B Rectangle: " + bRectangle.resize(Math.random() * 100))
console.log("New C Square: " + cSquare.resize(Math.random() * 100))

