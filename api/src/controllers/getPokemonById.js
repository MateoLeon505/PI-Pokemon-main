// Este módulo tiene la responsabilidad de traer un Pokemon por Id
//-------------------------------------
// Importación de módulos
const axios = require("axios");
//---------------------
const { Pokemon, Type } = require('../db'); // Trae los modelos
//-------------------------------------
const getPokemonById = async ( id, source ) => 
{
    const pokemon = 
    source === "api" 
    ? (await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`))
    : await Pokemon.findByPK(id);
}
//-------------------------------------
module.exports = { getPokemonById };