// Formulario para crear un nuevo pokemon
//----------------------------------------------
// Importación de módulos y librerías
import { useState } from 'react';
import './form.css';
//----------------------------------------------
const Form = () =>
{
    // Regex para url de la imagen
    const urlRegex = /^(https?:\/\/)?([\w-]+\.)+[\w-]+(\/[\w-./?%&=]*)?$/;
    //------------------
    // Estado
    const [ form, setForm ] = useState(
        {
            name: "",
            sprites: "",
            hp: "",
            attack: "",
            defense: "",
            speed: "",
            height: "",
            weight: "",
            types: [],
        });
    //------------------
    // Estado de Errores
    const [ errors, setErrors ] = useState(
        {
            name: "",
            sprites: "",
            hp: "",
            attack: "",
            defense: "",
            speed: "",
            height: "",
            weight: "",
            types: [],
        });
    //------------------
    // Validaciones: Cuando se haga un cambio, quiero validar
    const validate = (form) => // Recibe el estado del form
    {
        if (urlRegex.test(form.sprites))
        {
            console.log(`URL: ${form.sprites} Correcta👍`);
        }
        else
        {
            console.log(`URL: ${form.sprites} inválida😞❌`);
        }
    }
    //------------------ 
    // Tipos de pokemon
    const typesOptions = ['bug', 'dark', 'dragon', 'electric', 'fairy', 'fighting', 'fire', 'flying', 
    'ghost', 'grass', 'ground', 'ice', 'normal', 'poison', 'psychic', 'rock', 'shadow', 'steel', 'unknown', 'water'];
    //------------------ 
    // Maneja cambios en el select múltiple
    const selectHandler = (event) =>
    {
        const selectedOption = event.target.value;

        if (form.types.includes(selectedOption)) 
        {
            setForm({ ...form, types: form.types.filter((t) => t !== selectedOption) });
        }
        else
        {
            setForm((prevState) => ({
                ...prevState,
                types: prevState.types.concat(selectedOption),
            }));
        }
    }
    //------------------ 
    //  Actualizar los cambios en el form 
    const changeHandler = (event) =>
    {
        const property = event.target.name; // Quién modificó
        const value = event.target.value; // Valor modificado
        setForm({ ...form, [property]: value }); // Guarda Cambios en el form
        validate(form);
    };
    //------------------    
    return(
    <div className = "form-container">
        <form>
            <h1 className = 'pokemon-text'>Crear Pokémon</h1>
            
            <div>
                <label className = 'properties' >Nombre</label>
                <input type = "text" value = {form.name} onChange = {changeHandler} name = 'name' className = 'entrada-texto'></input> 
            </div>

            <div>
                <label className = 'properties' >Imagen</label>
                <input type = "text" value = {form.sprites} onChange = {changeHandler} name = 'sprites' placeholder = "https://example.jpg" className = 'entrada-texto'></input> 
            </div>
            {/*-------------------------------------------------- Stats: --------------------------------------------*/}
            <div className = 'stats-container'>

                <div className = 'stat'>
                    <label className = 'properties' >Vida</label>
                    <input type = "number" min = "0" step = "100" max = "999" value = {form.hp} onChange = {changeHandler} name = 'hp'  placeholder = "0 - 999" className = 'entrada-stats'></input> 
                </div>

                <div className = 'stat'>
                    <label className = 'properties' >Ataque</label>
                    <input type = "number" min = "0" step = "100" max = "999" value = {form.attack} onChange = {changeHandler} name = 'attack' placeholder = "0 - 999" className = 'entrada-stats' ></input> 
                </div>

                <div className = 'stat'>
                    <label className = 'properties' >Defensa</label>
                    <input type = "number" min = "0" step = "100" max = "999" value = {form.defense} onChange = {changeHandler} name = 'defense' placeholder = "0 - 999" className = 'entrada-stats' ></input> 
                </div>

            </div>

            <div className = 'stats-container'>


                <div className = 'stat'>
                    <label className = 'properties' >Velocidad</label>
                    <input type = "number" min = "0" step = "100" max = "999" value = {form.speed} onChange = {changeHandler} name = 'speed' placeholder = "0 - 999" className = 'entrada-stats' ></input> 
                </div>

                <div className = 'stat'>
                    <label className = 'properties' >Altura</label>
                    <input type = "number" min = "0" step = "100" max = "999" value = {form.height} onChange = {changeHandler} name = 'height' placeholder = "0 - 999" className = 'entrada-stats' ></input> 
                </div>

                <div className = 'stat'>
                    <label className = 'properties' >Peso</label>
                    <input type = "number" min = "0" step = "100" max = "999" value = {form.weight} onChange = {changeHandler} name = 'weight' placeholder = "0 - 999" className = 'entrada-stats' ></input> 
                </div>
            </div>

            <div>
                <label className = 'properties' >Tipos</label>
                <div className = 'types-container'>
                    {typesOptions && 
                    typesOptions.map((type)=>(
                        <div className = 'types-checkbox'>
                            <label key = {type} className = 'types-checkbox-label'>
                            <input type = "checkbox" value = {type} onChange = {selectHandler}/> {type} 
                            </label>
                        </div>
                        ))
                    };
                </div>
            </div>
            <div>
                <br />
                <button className = 'boton'>Crear</button>
            </div>
        </form>
    </div>
    );
}
//----------------------------------------------
export default Form;
