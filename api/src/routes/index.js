// Este módulo tiene la responsabilidad de definir las rutas
//----------------------------------------------
const { Router } = require('express');
const pokemonsRouter = Router();
//-------------------------------------
// Importar todos Handlers
const {
    getPokemonsHandler,
    getPokemonByIdHandler,
    getPokemonTypeHandler,
    createPokemonHandler 
  } = require('../handlers/pokemonHandlers');
//-------------------------------------
// Definición de las rutas 
pokemonsRouter.get("/pokemons", getPokemonsHandler);

pokemonsRouter.get("/pokemons/:idPokemon", getPokemonByIdHandler);

pokemonsRouter.get("/types", getPokemonTypeHandler);

pokemonsRouter.post("/pokemons", createPokemonHandler);
//-------------------------------------
// Exportación del enrutador
module.exports = pokemonsRouter;
