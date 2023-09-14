// Este módulo tiene la responsabilidad de Traer un pokemon por Name
//-------------------------------------
// Importación de módulos
const axios = require("axios"); // Para solicitudes HTTP
const { Pokemon, Type } = require('../db'); // Trae los modelos
//-------------------------------------
const getPokemonByName = async (name) => 
{
    name = name.toLowerCase(); // 'name' en minúscula
    //-------------------------------------
    // Busca pokemon por 'name' en la bd
    const dataBasePokemonName = await Pokemon.findOne(
        {
            where: { name: name },
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
    //-------------------------------------
    if (dataBasePokemonName) 
    {
        // Si el pokemon está en la base de datos
        const pokemon = 
        {
            id: dataBasePokemonName.id,
            name: dataBasePokemonName.name,
            sprites: dataBasePokemonName.sprites,
            hp: dataBasePokemonName.hp,
            attack: dataBasePokemonName.attack,
            defense: dataBasePokemonName.defense,
            speed: dataBasePokemonName.speed,
            height: dataBasePokemonName.height,
            weight: dataBasePokemonName.weight,
            types: dataBasePokemonName.types.map((type) => type.name),
        };
        return pokemon;
    } 
    else // Si no está, busca en la API
    {
        const apiResponse = await axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`);
        const apiData = apiResponse.data;
        const pokemon = 
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
            types: apiData.types.map((tipos) => tipos.type.name),
        };
        return pokemon;
    }
};
//-------------------------------------
module.exports = { getPokemonByName };