import { Animal } from "../Abstract_Class/Animal";
import { Edible } from "../Interface_Class/Edible";

export class Chicken extends Animal implements Edible {
    makeSound() {
        return "ooooo!"
    }
    howToEat() {
        {
            return "Ate!"
        }
    }
}