export function chooseType(typeOfPokemon) {
    switch (typeOfPokemon) {
        case "normal":
            return "Boom!";
        case "fire":
            return "Whoosh!";
        case "water":
            return "Splash!";
        case "electric":
            return "Zap!";
        case "ice":
            return "Crack!";
        case "fighting":
            return "Pow!";
        case "poison":
            return "Hiss!";
        case "ground":
            return "Rumble!";
        case "flying":
            return "Whoosh!";
        case "psychic":
            return "Wooo...";
        case "bug":
            return "Buzz!";
        case "rock":
            return "Clunk!";
        case "ghost":
            return "Boo!";
        case "dragon":
            return "Roar!";
        case "dark":
            return "Snikt!";
        case "steel":
            return "Clang!";
        case "fairy":
            return "Tinkle!";
        default:
            return "Unknown sound!";
    }
}
