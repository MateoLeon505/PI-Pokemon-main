// Este módulo tiene la responsabilidad de definir las rutas
//----------------------------------------------
const { Router } = require('express');
const pokemonsRouter = Router();
//-------------------------------------
// Importar todos Handlers
const {
    getPokemons,
    getPokemonById,
    getPokemonByTypes,
    postPokemon 
  } = require('../handlers/pokemonHandlers');
//-------------------------------------
// Definición de las rutas 
pokemonsRouter.get("/pokemons", getPokemons);

pokemonsRouter.get("/pokemons/:idPokemon", getPokemonById);

pokemonsRouter.get("/types", getPokemonByTypes);

pokemonsRouter.post("/pokemons", postPokemon);
//-------------------------------------
// Exportación del enrutador
module.exports = pokemonsRouter;
