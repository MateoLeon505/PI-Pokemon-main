// Este módulo tiene la responsabilidad de definir las rutas
//----------------------------------------------
const { Router } = require('express');
const pokemonsRouter = Router();
//-------------------------------------
// Importar todos Handlers
const {
    getPokemonsHandler,
    getPokemonByIdHandler,
    getPokemonTypesHandler,
    createPokemonHandler 
  } = require('../handlers/pokemonHandlers');
//-------------------------------------
// Definición de las rutas 
pokemonsRouter.get("/pokemons", getPokemonsHandler);

pokemonsRouter.get("/pokemons/:id", getPokemonByIdHandler);

pokemonsRouter.get("/types", getPokemonTypesHandler);

pokemonsRouter.post("/pokemons", createPokemonHandler);
//-------------------------------------
// Exportación del enrutador
module.exports = pokemonsRouter;
