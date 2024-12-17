import { chooseType } from "./chooseType";

class Pokemon{
    number: number;
    namePokemon: string;
    type: string;
    weigth: number;
    heigth: number;

    constructor(number: number, namePokemon: string, type: string, weigth: number, heigth: number){
        this.number = number;
        this.namePokemon = namePokemon;
        this.type = type;
        this.weigth = weigth;
        this.heigth = heigth
    }

    delay(ms: number): Promise<void>{
        return new Promise((resolve) => setTimeout(resolve, ms))
    }

    async move(moviment: string){
        const texts:Array<string | any> = [
        `${this.namePokemon} usou ${moviment}`,
        await this.delay(2000),
        `${chooseType(this.type)}`,
        await this.delay(2000),
        'Uau! Foi super efetivo!'
        ]

        return texts
    }
}


const charmander = new Pokemon(3, 'charmander', 'fire', 30, 50)
charmander.move('fire ball')