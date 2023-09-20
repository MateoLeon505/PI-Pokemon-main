// Componente para manejar los botones de paginación
import React, { useState } from 'react';
import './Pagination.css';
//----------------------------------------------
const Pagination = ({ pagination, totalOfPages }) =>
{
    const pages = [];;
    //---------------
    for (let i = 1; i <= totalOfPages; i++) { pages.push(i) }
    //---------------
    return (
        <div className = 'pagination'>
                {
                    pages.map((num) =>(
                            <button
                            key = {num}
                            className = 'botones'
                            onClick = {() => pagination(num)}>
                                {num}
                            </button>
                    ))
                }
                <br />
                <br />
        </div>
    );
}
//----------------------------------------------
// Exporta el componente
export default Pagination;
//className = {`pagination-button ${page === num ? "active" : ""}`}