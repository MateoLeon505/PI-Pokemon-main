// Este módulo tiene la responsabilidad de traer un Pokemon por Id
//-------------------------------------
// Importación de módulos
const axios = require("axios"); // Para peticiones a la API
const { Pokemon } = require('../db'); // Trae los modelos
//-------------------------------------
const getPokemonById = async ( id, source ) => 
{
    const pokemon =  
    await source === "api" 
    ? (await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`)).data 
    : await Pokemon.findByPk(id)
    return pokemon;
}
//-------------------------------------
module.exports = { getPokemonById };
