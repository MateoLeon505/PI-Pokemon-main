// Handlers: Este módulo tiene la responsabilidad de manejar las solicitudes y rutas
//-------------------------------------
// Importación de controllers
const { createPokemon } = require("../controllers/createPokemon");
const { getPokemonById } = require("../controllers/getPokemonById");
const { getAllPokemons } = require("../controllers/getAllPokemons");
const { getPokemonByName } = require("../controllers/getPokemonByName");
const { getPokemonTypes } = require("../controllers/getPokemonTypes");
//-------------------------------------
// GET | Traer: Pokemon por nombre o traer TODOS
const getPokemonsHandler = async (req, res) =>
{
  const { name } = req.query;

  try 
  {
    const result = name ? await getPokemonByName(name) : await getAllPokemons(); 
    res.status(201).json(result); 
  } 
  catch (error) 
  {
    res.status(404).send({error: error.message});
  }
}
//-------------------------------------
// GET | Traer: Pokemon por ID 
const getPokemonByIdHandler = async (req, res) => 
{
  const { id } = req.params;
  const source = isNaN(id) ? "bdd" : "api";

  try 
  {
    const pokemon =  await getPokemonById(id, source);
    res.status(201).json(pokemon);
  } 
  catch (error) 
  {
    res.status(404).send({error: error.message});
  }
}
//-------------------------------------
// GET | Traer: Pokemon por tipo
const getPokemonTypesHandler = async ( req, res ) =>
{
  try 
  {
    const getTypes = await getPokemonTypes();
    res.status(201).json(getTypes);  
  } 
  catch (error) 
  {
    res.status(404).send({error: error.message});  
  }
}
//-------------------------------------
// POST | Crear: Pokemon 
const createPokemonHandler = async (req, res) =>
{ 
  const { id, name, sprites, hp, attack, defense, speed, height, weight, types } = req.body;

  try 
  {
    const newPokemon = await createPokemon( id, name, sprites, hp, attack, defense, speed, height, weight, types );
    res.status(201).json(newPokemon); 
  } 
  catch (error) 
  {
    res.status(404).json({error: error.message});
  }
}
//-------------------------------------
module.exports = {
    getPokemonsHandler,
    getPokemonByIdHandler,  
    getPokemonTypesHandler, 
    createPokemonHandler
};