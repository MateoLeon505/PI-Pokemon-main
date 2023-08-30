// Esta función tiene habilitado interactuar con el modelo
// Los métodos del modelo manejan promesas, por eso ponemos 'async'
//-------------------------------------
const { Pokemon, Type } = require('../db');
//-------------------------------------
const createPokemon = async ( id, name, sprites, hp, attack, defense, speed, height, weight ) => 
{
    // create es del modelo que devuelve promesa, por eso ponemos await
    // await: espero que esa promesa se resuelva, y luego guardo la respuesta en newPokemon
    return await Pokemon.create({id, name, sprites, hp, attack, defense, speed, height, weight}); 
}
//-------------------------------------
module.exports = {createPokemon};