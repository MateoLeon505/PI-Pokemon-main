// Este módulo tiene la responsabilidad de Traer TODOS los pokemon
//-------------------------------------
// Importación de módulos
const { Pokemon, Type } = require('../db'); // Trae los modelos
const axios = require("axios"); // Para solicitudes HTTP
//-------------------------------------
const getAllPokemons = async () =>
{
    // Trae pokemons de la bd
    const dataBasePokemons =  await Pokemon.findAll(
        { 
            include:
            {
                model: Type,
                as: 'types',
            },
            attributes:
            { 
                exclude: ['custom'],
            }
        }); 
    //-------------------------------
    // Limpia types
    const dbReady = dataBasePokemons.map((pokemon) =>
    {
        return{
            id: pokemon.id,
            name: pokemon.name,
            sprites: pokemon.sprites,
            hp: pokemon.hp,
            attack: pokemon.attack,
            defense: pokemon.defense,
            speed: pokemon.speed,
            height: pokemon.height,
            weight: pokemon.weight,
            types: pokemon.types.map((type) =>
            {
                return type.name;
            })
        }
    });
    //-------------------------------
    const apiPokemons = []; // Para pokemons de la api
    //-------------------------------
    let page = "https://pokeapi.co/api/v2/pokemon"; // Para obtener la página de la API
    //-------------------------------
    while (apiPokemons.length < 180 + dbReady.length ) //Alcance total pokemons API
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
                weight: detailedPokemon.weight,
                types: detailedPokemon.types.map((tipos) =>
                {
                    return tipos.type.name;
                })
            }
        })
    );
    //-------------------------------------
    return [...dbReady, ...cleanPokemons]; // Retorna TODOS los pokemon
}
//-------------------------------------
// Exporta la función
module.exports = { getAllPokemons };