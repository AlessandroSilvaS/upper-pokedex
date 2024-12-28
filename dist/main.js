import { Pokemon } from "./pokemon.js";
const firstTemplate = document.querySelector('.first-template');
const afterTemplate = document.querySelector('.after-template');
const inputSubmit = document.getElementById("ready");
const changePokemonButton = document.querySelector('.changePokemon');
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
function changeTemplate() {
    if (firstTemplate.style.display != 'none') {
        firstTemplate.style.display = 'none';
        afterTemplate.style.display = 'block';
    }
    else {
        firstTemplate.style.display = 'block';
        afterTemplate.style.display = 'none';
    }
}
changePokemonButton?.addEventListener('click', () => {
    changeTemplate();
});
function getPokemon() {
    let pokemonNameOfUserInput = document.getElementById("pokemon");
    changeTemplate();
    capture(pokemonNameOfUserInput.value).then((captured) => {
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
}
inputSubmit.addEventListener('click', () => {
    getPokemon();
});
