import { chooseType } from "./chooseType.js";
export class Pokemon {
    number;
    namePokemon;
    type;
    weight;
    heigth;
    constructor(number, namePokemon, type, weight, heigth) {
        this.number = number;
        this.namePokemon = namePokemon;
        this.type = type;
        this.weight = weight;
        this.heigth = heigth;
    }
    delay(ms) {
        return new Promise((resolve) => setTimeout(resolve, ms));
    }
    async move(moviment) {
        const lines = [
            `${this.namePokemon} usou ${moviment}!`,
            `${chooseType(this.type)}`,
            "Uau! em cheio..."
        ];
        lines.forEach(async (line) => {
            await this.delay(5000);
            return line;
        });
    }
}
