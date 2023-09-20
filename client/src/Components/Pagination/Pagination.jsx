// Componente para manejar la paginación
import React from 'react';
//----------------------------------------------
const Pagination = ({ pagination, allPokemons, pokemonsOnPage, page }) =>
{
    const totalOfPages = Math.ceil(allPokemons.length / pokemonsOnPage);
    const pages = [];
    //---------------
    for (let i = 0; i < totalOfPages; i++) 
    {
        pages.push(i);
    }
    
    return (
        <div>
            {pages}
        </div>
    );
}
//----------------------------------------------
export default Pagination;