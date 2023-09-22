// Este componente tiene la responsabilidad de mostrar cards
//----------------------------------------------
//Importa los componentes necesarios de las bibliotecas
import { NavLink } from 'react-router-dom';
import './card.css';
//----------------------------------------------
// Define el componente
const Card = (props) =>
{
    return (
        <div className = 'container'>
            <div className = 'cardContainer'>
                <div className = 'cardHeader'>
                    <p className = 'cardName'> {props.name}</p>
                </div>
                <div className = 'cardImageContainer'>
                    <img src = {props.sprites} alt = {props.name} className = "cardImage" />
                </div>
                <div className = 'cardDescription'>
                    <div className = "cardStats">
                        <p>Types: {props.types}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
//----------------------------------------------
// Exporta el componente
export default Card;