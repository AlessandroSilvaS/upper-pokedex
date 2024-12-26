import { Pokemon } from "./pokemon.js";
const pageId = document.body.id;
async function capture(pokemon) {
    try {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);
        if (response.ok) {
            const data = await response.json();
            return data;
        }
        else {
            console.log("Error! Network fail");
        }
    }
    catch (error) {
        console.log(error);
    }
}
if (pageId === 'start') {
    const inputSubmit = document.getElementById("ready");
    inputSubmit.addEventListener('click', async () => {
        const pokemonNameOfUserInput = document.getElementById("pokemon");
        await capture(pokemonNameOfUserInput.value).then((captured) => {
            const myPokemon = new Pokemon(captured.id, captured.name, captured.types[0].type.name, captured.weight, captured.height);
            const valuesPokemon = [];
            const listDefaltValue = ['Number', 'Name', 'Type', 'Weight', "Height"];
            const listOfValues = Array.from(document.querySelectorAll('.list-icon'));
            valuesPokemon.push(myPokemon.number, myPokemon.namePokemon, myPokemon.type, myPokemon.weight, myPokemon.heigth);
            const informationsOfPokemon = listOfValues.map((value, index) => {
                return value.textContent = `${listDefaltValue[index]}: ${valuesPokemon[index]}`;
            });
            const imagePokemon = document.getElementsByClassName("image-pokemon")[0];
            imagePokemon.src = captured.sprites.front_default;
            const atacksList = Array.from(document.querySelectorAll('.box-information-atacks-item'));
            const atacksValues = atacksList.map((value, index) => {
                return value.textContent = captured.abilities[index].ability.name;
            });
        });
        window.location.href = './poke-infor.html';
    });
}
