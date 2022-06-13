import axios from 'axios';


const pokemonApi = axios.create({
    baseURL: 'https://pokeapi.co/api/v2/pokemon'
});

export default pokemonApi;