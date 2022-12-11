import {Shape} from "./Shape";
import { InteraceResizeable } from "./InterfaceResizeable";

export class Rectangle extends Shape implements InteraceResizeable {
    width: number;
    height: number;

    constructor(width: number,
                height: number,
                name: string) {
        super(name);
        this.width = width;
        this.height = height;
    }

    calculateArea(): number {
        return this.width * this.height;
    }

    calculatePerimeter(): number {
        return (this.width + this.height) * 2;
    }

    resize(rate: number) {
        rate = rate / 100;
        this.width = this.width * (1 + rate);
        this.height = this.height * (1 + rate);
        return `Width = ${this.width} - Heigth = ${this.height}`
    }
}
