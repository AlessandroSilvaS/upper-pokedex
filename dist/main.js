"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = __importDefault(require("axios"));
axios_1.default.get('https://pokeapi.co/api/v2/pokemon/ditto').then((response) => {
    console.log(response.data);
}).catch((error) => {
    console.log(error);
});
console.log('olá mundo!');
