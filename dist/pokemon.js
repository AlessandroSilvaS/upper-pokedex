"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const chooseType_1 = require("./chooseType");
class Pokemon {
    number;
    namePokemon;
    type;
    weigth;
    heigth;
    constructor(number, namePokemon, type, weigth, heigth) {
        this.number = number;
        this.namePokemon = namePokemon;
        this.type = type;
        this.weigth = weigth;
        this.heigth = heigth;
    }
    delay(ms) {
        return new Promise((resolve) => setTimeout(resolve, ms));
    }
    async move(moviment) {
        const texts = [
            `${this.namePokemon} usou ${moviment}`,
            await this.delay(2000),
            `${(0, chooseType_1.chooseType)(this.type)}`,
            await this.delay(2000),
            'Uau! Foi super efetivo!'
        ];
        return texts;
    }
}
const charmander = new Pokemon(3, 'charmander', 'fire', 30, 50);
charmander.move('fire ball');
