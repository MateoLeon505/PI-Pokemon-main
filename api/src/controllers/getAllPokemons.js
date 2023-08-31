// Este módulo tiene la responsabilidad de Traer un pokemon por Name
//-------------------------------------
// Importación de módulos
const { Pokemon } = require('../db'); // Trae los modelos
const axios = require("axios");
//-------------------------------------
const getAllPokemons = async () =>
{
    const dataBasePokemons =  await Pokemon.findAll();
    const apiPokemons = [];
    // const apiPokemons = await axios.get(`https://pokeapi.co/api/v2/pokemon`).data;
    let nextPage = "https://pokeapi.co/api/v2/pokemon"; 

    while (apiPokemons.length < 200 + dataBasePokemons.length)
    {
        const response = await axios.get(nextPage);
        const pokemonsOnPage = response.data.results; 
        nextPageUrl = response.data.next; 

        apiPokemons.push(...pokemonsOnPage);
    }

    return [...dataBasePokemons, ...apiPokemons];
}
//-------------------------------------
module.exports = { getAllPokemons };