import {Shape} from "./Shape";
import { InteraceResizeable } from "./InterfaceResizeable";
export class Circle extends Shape implements InteraceResizeable {
    radius: number;

    constructor(name: string, radius: number) {
        super(name);
        this.radius = radius;
    }

    calculateArea(): number {
        return Math.PI * Math.pow(this.radius, 2);
    }

    calculatePerimeter(): number {
        return Math.PI * this.radius * 2;
    }

    resize(rate: number): any {
        rate = rate / 100;
        this.radius = this.radius*(1 + rate)
        return `Radius = ${this.radius}`;
    }
}
