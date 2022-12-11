import { Circle } from "./Circle";
import { comparerable } from "./Interface_Compare";

export class CircleCompare extends Circle implements comparerable {
    constructor(radius: number) {
        super(radius)
    }

    compareTo(newCircle: CircleCompare): string | undefined {
        if(this.radius > newCircle.radius) {
            return 'This circle is bigger than this one';
        }
        else if (this.radius < newCircle.radius) {
            return 'This circle is smaller than this one';
        }
        else if(this.radius == newCircle.radius) {
            return 'This circle is equal to this one';
        }
    }
}