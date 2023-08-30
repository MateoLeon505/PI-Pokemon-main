// Este módulo tiene la responsabilidad de crear un nuevo Pokemon
//-------------------------------------
// Importación de módulos
const { Pokemon, Type } = require('../db'); // Trae los modelos
//-------------------------------------
// Esta función interactua con el modelo. Los métodos del modelo manejan promesas, por eso ponemos 'async'
const createPokemon = async ( id, name, sprites, hp, attack, defense, speed, height, weight ) => 
{
    // create es del modelo que devuelve promesa, por eso ponemos await
    // await: espero que esa promesa se resuelva, y luego guardo la respuesta en newPokemon
    return await Pokemon.create({id, name, sprites, hp, attack, defense, speed, height, weight}); 
}
//-------------------------------------
module.exports = { createPokemon };