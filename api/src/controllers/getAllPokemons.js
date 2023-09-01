// Este módulo tiene la responsabilidad de Traer TODOS los pokemon
//-------------------------------------
// Importación de módulos
const { Pokemon } = require('../db'); // Trae los modelos
const axios = require("axios"); // Para solicitudes HTTP
//-------------------------------------
const getAllPokemons = async () =>
{
    const dataBasePokemons =  await Pokemon.findAll({ attributes:{ exclude: ['custom'] }}); // Trae pokemons de la bd

    const apiPokemons = [];

    let page = "https://pokeapi.co/api/v2/pokemon"; // Para obtener la página de la API

    while (apiPokemons.length < 200) //Alcance total pokemons API
    {
        const response = await axios.get(page); // Petición a la página
        const pokemonsPage = response.data.results; // Trae pokemons Crudos
        page = response.data.next; // Siguiente página

        apiPokemons.push(...pokemonsPage); // Guarda la página en el array
    }
//-------------------------------------
// Trae las propiedades de los pokemon: Pokemon de API Listo ✔
    const cleanPokemons = await Promise.all(
        apiPokemons.map(async (pokemon) =>
        {
            const response = await axios.get(pokemon.url);
            const detailedPokemon = response.data;
            return {
                id: detailedPokemon.id,
                name: detailedPokemon.name,
                sprites: detailedPokemon.sprites.front_default,
                hp: detailedPokemon.stats[0].base_stat,
                attack: detailedPokemon.stats[1].base_stat,
                defense: detailedPokemon.stats[2].base_stat,
                speed: detailedPokemon.stats[5].base_stat,
                height: detailedPokemon.height,
                weight: detailedPokemon.weight
            }
        })
    );
    return [...dataBasePokemons, ...cleanPokemons]; // Retorna TODOS los pokemon
}
//-------------------------------------
// Exporta la función
module.exports = { getAllPokemons };