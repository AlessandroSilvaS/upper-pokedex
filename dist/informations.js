const nickNameOfUserInput = document.getElementById('nick');
const pokemonNameOfUserInput = document.getElementById("pokemon");
const ipOfTheMachineUser = document.getElementById("ip-machine");
const inputSubmit = document.getElementById("ready");
export let mailPokemonName = 'pikachu';
function mailInformations() {
    mailPokemonName = pokemonNameOfUserInput.value;
    window.location.href = './poke-infor.html';
}
inputSubmit.addEventListener('click', () => {
    mailInformations();
});
