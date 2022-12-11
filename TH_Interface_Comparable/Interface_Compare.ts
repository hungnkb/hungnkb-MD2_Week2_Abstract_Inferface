import { Circle } from "./Circle";
import { CircleCompare } from "./Circle_Compare";

export interface comparerable {
    compareTo(radius: CircleCompare): string | undefined
}