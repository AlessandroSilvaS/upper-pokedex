import { informationsOfTemplate } from "./main"

const nickNameOfUserInput = document.getElementById('nick') as HTMLInputElement
const pokemonNameOfUserInput = document.getElementById("pokemon") as HTMLInputElement
const ipOfTheMachineUser = document.getElementById("ip-machine") as HTMLInputElement
const inputSubmit = document.getElementById("ready") as HTMLInputElement

inputSubmit.addEventListener('click', () => {
    let pokemonNameOfUserString = pokemonNameOfUserInput.value
    informationsOfTemplate(pokemonNameOfUserString)
    window.location.href = '../templates/poke-infor.html'
})