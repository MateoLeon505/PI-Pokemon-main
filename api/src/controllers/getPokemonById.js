// Este módulo tiene la responsabilidad de traer un Pokemon por Id
//-------------------------------------
// Importación de módulos
const axios = require("axios"); // Para solicitudes HTTP
const { Pokemon, Type } = require('../db'); // Trae los modelos
//-------------------------------------
const getPokemonById = async (id, source) => 
{
    let pokemon;
    
    if (source === "api") // Si la fuente es la API
    {
      // Traer el Pokémon de la API
      const apiResponse = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`);
      const apiData = apiResponse.data;
      pokemon =  
      {
        id: apiData.id,
        name: apiData.name,
        sprites: apiData.sprites.front_default,
        hp: apiData.stats[0].base_stat,
        attack: apiData.stats[1].base_stat,
        defense: apiData.stats[2].base_stat,
        speed: apiData.stats[5].base_stat,
        height: apiData.height,
        weight: apiData.weight,
        types: apiData.types.map((tipos) =>
        {
            return tipos.type.name;
        })
       }
    } 
    else // Si la fuente es bdd
    {
        // Trae el Pokémon de la bd
        const dbPokemonById = await Pokemon.findByPk(id, 
        {
            include: 
            {
                model: Type,
                as: 'types',
            },
            attributes: 
            {
                exclude: ['custom'],
            },
        });
        //---------------------------------
        // Estructura de datos del Pokémon 
        pokemon = 
        {
            id: dbPokemonById.id,
            name: dbPokemonById.name,
            sprites: dbPokemonById.sprites,
            hp: dbPokemonById.hp,
            attack: dbPokemonById.attack,
            defense: dbPokemonById.defense,
            speed: dbPokemonById.speed,
            height: dbPokemonById.height,
            weight: dbPokemonById.weight,
            types: dbPokemonById.types.map((type) => type.name),
        };
    }
    //---------------------------------
    return pokemon;
};
//-------------------------------------
module.exports = { getPokemonById };
