import { informationsOfTemplate } from "./main.js";
const nickNameOfUserInput = document.getElementById('nick');
const pokemonNameOfUserInput = document.getElementById("pokemon");
const ipOfTheMachineUser = document.getElementById("ip-machine");
const inputSubmit = document.getElementById("ready");
inputSubmit.addEventListener('click', () => {
    let pokemonNameOfUserString = pokemonNameOfUserInput.value;
    informationsOfTemplate(pokemonNameOfUserString);
    window.location.href = 'http://127.0.0.1:5500/templates/poke-infor.html';
});
