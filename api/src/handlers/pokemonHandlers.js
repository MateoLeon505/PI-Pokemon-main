// Handlers: Este módulo tiene la responsabilidad de manejar las solicitudes y rutas
//-------------------------------------
// Importación de controllers
const { createPokemon } = require("../controllers/createPokemon");
//-------------------------------------
// GET | Traer: TODOS los Pokemon o por nombre
const getPokemons = (req, res) =>
{
    const { name } = req.query;
    // GET | Traer: Pokemon por Nombre
    if (name) 
    {
        const { name } = req.query;
        res.status(200).send(`NIY: Traigo pokemon por el nombre ${name}`);
    }
    // GET | Traer: Todos los Pokemon 
    else
    {
        res.status(200).send("NIY: Traigo TODOS los Pokemons");
    }
}
//-------------------------------------
// GET | Traer: Pokemon por ID 
const getPokemonById = (req, res) => 
{
  const { idPokemon } = req.params;
  res.status(200).send(`NIY: Traigo el Detalle del pokemon ${idPokemon}`);
}
//-------------------------------------
// GET | Traer: Pokemon por tipo
const getPokemonByTypes = () =>
{
  res.status(200).send("NIY: Traigo pokemon por tipo");
}
//-------------------------------------
// POST | Crear: Pokemon 
const postPokemon = async (req, res) =>
{ 
  try 
  {
    const { id, name, sprites, hp, attack, defense, speed, height, weight } = req.body;
    const newPokemon = await createPokemon( id, name, sprites, hp, attack, defense, speed, height, weight );
    res.status(201).json(newPokemon); 
  } 
  catch (error) 
  {
    res.status(400).json({error: error.message});
  }
}
//-------------------------------------
module.exports = {
    getPokemons,
    getPokemonById,  
    getPokemonByTypes, 
    postPokemon
};