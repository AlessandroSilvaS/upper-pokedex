import { Pokemon } from "./pokemon";

const firstTemplate = document.querySelector('.first-template') as HTMLDivElement
const afterTemplate = document.querySelector('.after-template') as HTMLDivElement
const inputSubmit = document.getElementById("ready") as HTMLInputElement
const changePokemonButton = document.querySelector('.changePokemon')

async function capture(pokemon:string){
    try {
        
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);
        if(response.ok){
            const data = await response.json()
            return data
        }else{
            console.log("Error! Network fail")
        }
    
    } catch (error) {
        console.log(error)
    }
}
function changeTemplate(){
    if(firstTemplate.style.display != 'none'){

        firstTemplate.style.display = 'none';
        afterTemplate.style.display = 'block';

    }else{

        firstTemplate.style.display = 'block';
        afterTemplate.style.display = 'none';

    }
}
changePokemonButton?.addEventListener('click', () => {
    changeTemplate()
})
function getPokemon(){
    
    let pokemonNameOfUserInput = document.getElementById("pokemon") as HTMLInputElement
    
    capture(pokemonNameOfUserInput.value).then((captured) => {
        const myPokemon = new Pokemon(captured.id, captured.name, captured.types[0].type.name, captured.weight, captured.height)
        const valuesPokemon: Array<string | number> = []
        const listDefaltValue: string[] = ['Number', 'Name', 'Type', 'Weight', "Height"]
        const listOfValues: HTMLUListElement[] = Array.from(document.querySelectorAll<HTMLUListElement>('.list-icon'))
        
        valuesPokemon.push(myPokemon.number, myPokemon.namePokemon, myPokemon.type, myPokemon.weight, myPokemon.heigth)
        
        const informationsOfPokemon: Array<String | number> = listOfValues.map((value, index) =>{
            return value.textContent = `${listDefaltValue[index]}: ${valuesPokemon[index]}`
        })
        
        const imagePokemon = document.getElementsByClassName("image-pokemon")[0] as HTMLImageElement
        imagePokemon.src = captured.sprites.front_default
        
        const atacksList = Array.from(document.querySelectorAll('.box-information-atacks-item'))
        
        const atacksValues = atacksList.map((value, index) => {
            return value.textContent = captured.abilities[index].ability.name
        })
    })
    changeTemplate()
}
inputSubmit.addEventListener('click', () => {
    getPokemon()
})