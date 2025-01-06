import { chooseType } from "./chooseType";

export class Pokemon{
    number: number;
    namePokemon: string;
    type: string;
    weight: number;
    heigth: number;

    constructor(number: number, namePokemon: string, type: string, weight: number, heigth: number){
        this.number = number;
        this.namePokemon = namePokemon;
        this.type = type;
        this.weight = weight;
        this.heigth = heigth
    }

    delay(ms: number): Promise<void>{
        return new Promise((resolve) => setTimeout(resolve, ms))
    }

    async move(moviment: string){
        const lines: string[] = [
            `${this.namePokemon} usou ${moviment}!`,
            `${chooseType(this.type)}`,
            "Uau! em cheio..."
        ]

        lines.forEach( async (line) => {
            await this.delay(5000)
            return line
        })
    }
}

