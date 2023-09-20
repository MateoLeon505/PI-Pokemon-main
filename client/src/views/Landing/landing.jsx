// Este componente es el Landing Page
//----------------------------------------------
import './landing.css';
import { useHistory } from 'react-router-dom';
import landingImage from '../../images/landingImage.jpg';
//----------------------------------------------
const Landing = () =>
{
    const history = useHistory();

    const handleButtonClick = () => 
    {
        history.push('/home'); // Redirige al enlace '/home' al hacer clic en el botón
    };

    return(
        <div className = 'fondo'>
            <div className = "landing-images">
                <img src = {landingImage} alt = "Pokemon APP"/>
            </div>
            <br />
            <button className = 'landingButton' onClick = {handleButtonClick}>
                Vamos!
            </button>
        </div>
    );
}
//----------------------------------------------
export default Landing;