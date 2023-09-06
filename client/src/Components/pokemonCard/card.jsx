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
        <div className = 'cardContainer'>
            <p className = 'cardName'> {props.name}</p>
            <img src = {props.sprites} alt = {props.name} className = "cardImage" />
            <div className = "cardStats">
                <p> <strong>Id: </strong>{props.id}</p>
                <p><strong>HP: </strong>{props.hp}</p>
                <p><strong>Attack: </strong>{props.attack}</p>
                <p><strong>Defense: </strong>{props.defense}</p>
                <p><strong>Speed: </strong>{props.speed}</p>
                <p><strong>Height:  </strong>{props.height}</p>
                <p><strong>Weight:  </strong>{props.weight}</p>
            </div>
        </div>
    );
}
//----------------------------------------------
// Exporta el componente
export default Card;