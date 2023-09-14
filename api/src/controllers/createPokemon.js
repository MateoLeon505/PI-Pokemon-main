// Este módulo tiene la responsabilidad de crear un nuevo Pokemon
//-------------------------------------
// Importación de módulos
const { Pokemon, Type } = require('../db'); // Trae los modelos
//-------------------------------------
// create es del modelo que devuelve promesa, por eso ponemos await
// await: espero que esa promesa se resuelva, y luego guardo la respuesta en newPokemon
const createPokemon = async ( id, name, sprites, hp, attack, defense, speed, height, weight, types ) => 
{
    // Crea Pokemon con las propiedades recibidas
    const newPokemon = await Pokemon.create({ id, name, sprites, hp, attack, defense, speed, height, weight});
    //----------------------------
    // // Busca los 'types' en la bd que coincidan con los que me llegan
    const bringTypes = await Type.findAll(
        {
            where: 
            { 
                name: types
            },
        });
    //----------------------------
    // Asociar los tipos al Pokémon recien creado
    await newPokemon.setTypes(bringTypes);
    //----------------------------
    return newPokemon;
}
//-------------------------------------
module.exports = { createPokemon }; // Exporta el módulo