// Este módulo tiene la responsabilidad de Traer un pokemon por Name
//-------------------------------------
// Importación de módulos
const axios = require("axios"); // Para solicitudes HTTP
const { Pokemon } = require('../db'); // Trae los modelos
//-------------------------------------
const getPokemonByName = async ( name ) =>
{
    name = name.toLowerCase(); // name en minúscula
    //-------------------------------------
    // Busca pokemon por 'name' en la bd
    const dataBasePokemonName =  await Pokemon.findOne( {where: { name: name }} );
    //-------------------------------------
    // Buscar Pokemon en bd o en API
    const result = dataBasePokemonName
    ? dataBasePokemonName
    : (await axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`)).data; // Busca pokemon por 'name' en la API
    //-------------------------------------
    return result;
}
//-------------------------------------
module.exports = { getPokemonByName };