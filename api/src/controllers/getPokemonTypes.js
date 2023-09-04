// Este módulo tiene la responsabilidad de Traer los tipos de pokemon
//-------------------------------------
// Importación de módulos
const axios = require("axios"); // Para solicitudes HTTP
const { Type } = require('../db'); // Trae los modelos
//-------------------------------------
const getPokemonTypes = async () =>
{
    // Trae bd 'Type' 
    const bdType = await Type.findAll();
    //-------------------------------------
    if (bdType.length === 0) // Si la bd está vacía
    {
        const typesApi =  (await axios.get(`https://pokeapi.co/api/v2/type`)).data.results; // Trae 'types' de la API
        const saveTypes = typesApi.map(( type, index ) => ({ id: index + 1, name: type.name })); // Guarda types de la API 
        // Inserta registros en la bd
        await Type.bulkCreate(saveTypes);
    } 
    //-------------------------------------
    // Trae los types
    return bdType;
}
//-------------------------------------
// Exporta la función
module.exports = { getPokemonTypes };