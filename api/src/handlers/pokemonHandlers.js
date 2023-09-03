// Handlers: Este módulo tiene la responsabilidad de manejar las solicitudes y rutas
//-------------------------------------
// Importación de controllers
const { createPokemon } = require("../controllers/createPokemon");
const { getPokemonById } = require("../controllers/getPokemonById");
const { getAllPokemons } = require("../controllers/getAllPokemons");
const { getPokemonByName } = require("../controllers/getPokemonByName");
//-------------------------------------
// GET | Traer: Pokemon por nombre o traer TODOS
const getPokemonsHandler = async (req, res) =>
{
  const { name } = req.query;

  try 
  {
    const result = name ? await getPokemonByName(name) : await getAllPokemons(); 
    res.status(200).json(result); 
  } 
  catch (error) 
  {
    res.status(404).send({message:`Error al buscar Pokemon: (${error.message})`});
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
    res.status(404).send({message:`Error al buscar con ese id: (${error.message})`});
  }
}
//-------------------------------------
// GET | Traer: Pokemon por tipo
const getPokemonTypesHandler = () =>
{
  res.status(200).send("NIY: Traigo pokemon por tipo");
}
//-------------------------------------
// POST | Crear: Pokemon 
const createPokemonHandler = async (req, res) =>
{ 
  try 
  {
    const { id, name, sprites, hp, attack, defense, speed, height, weight } = req.body;
    const newPokemon = await createPokemon( id, name, sprites, hp, attack, defense, speed, height, weight );
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