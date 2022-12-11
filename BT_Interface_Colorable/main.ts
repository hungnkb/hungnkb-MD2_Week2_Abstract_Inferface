import { Circle } from "./Class/Circle";
import { Rectangle } from "./Class/Rectangle";
import { Shape } from "./Class/Shape";
import { Square } from "./Class/Square";

let allElements: any = [];

let aCircle = new Circle("Circle A", 11);
let bRectangle = new Rectangle(22, 33, "Rectangle B",);
let cSquare: Square = new Square("Square C", 44)

allElements.push(aCircle, bRectangle, cSquare)

let checkColorable = () => {
    for (let i = 0; i in allElements; i++) {
        if (allElements[i] instanceof Square) {
            console.log(`
            ${allElements[i].name}: Perimetter = ${allElements[i].calculateArea()}
            ${allElements[i].howToColor()}
            `)
        }
        else {
            console.log(`
            ${allElements[i].name}: Perimetter = ${allElements[i].calculateArea()}
            `)
        }
    }
}

checkColorable()
