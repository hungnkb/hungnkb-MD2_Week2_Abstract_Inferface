import {Rectangle} from "./Rectangle";
import { Colorable } from "./InterfaceColorable";

export class Square extends Rectangle implements Colorable {
    constructor(name: string,
                width: number) {
        super(width, width, name);
    }

    howToColor() {
        return 'Color all four sides'
    }
}
