import {Rectangle} from "./Rectangle";
import { InteraceResizeable } from "./InterfaceResizeable";

export class Square extends Rectangle implements InteraceResizeable {
    constructor(name: string,
                width: number) {
        super(width, width, name);
    }

    resize(rate: number) {
        rate = rate / 100;
        this.width = this.width * (1 + rate)
        return `Width = ${this.width}`
    }
}
