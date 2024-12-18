import { Pokemon } from "./pokemon";
async function capture(){
    try {
        
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/charmander`);
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

capture().then((captured) => {
    const myPokemon = new Pokemon(captured.id, captured.name, captured.types[0].type.name, captured.weight, captured.height)

    const valuesPokemon: Array<string | number> = []
    const listDefaltValue: string[] = ['Number', 'Name', 'Type', 'Weight', "Height"]
    const listOfValues: HTMLUListElement[] = Array.from(document.querySelectorAll<HTMLUListElement>('.list-icon'))

    valuesPokemon.push(myPokemon.number, myPokemon.namePokemon, myPokemon.type, myPokemon.weight, myPokemon.heigth)

    const informationsOfPokemon: Array<String | number> = listOfValues.map((value, index) =>{
        return value.textContent = `${listDefaltValue[index]}: ${valuesPokemon[index]}`
    })

})
