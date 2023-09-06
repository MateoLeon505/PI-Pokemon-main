// Formulario para crear un nuevo pokemon
//----------------------------------------------
// Importación de módulos y librerías
import { useState } from 'react';
import './form.css';
//----------------------------------------------
const Form = () =>
{
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
        // Tipos de pokemon
        const typesOptions = ['bug', 'dark', 'dragon', 'electric', 'fairy', 'fighting', 'fire', 'flying', 
        'ghost', 'grass', 'ground', 'ice', 'normal', 'poison', 'psychic', 'rock', 'shadow', 'steel', 'unknown', 'water'];
        //------------------ 
        // Maneja cambios en el select múltiple
        const handleSelectChange = (event) =>
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
            setForm({ ...form, [property]: value });
        };
    //------------------    
    return(
    <div className = "form-container">
        <form>
            <h1 className = 'pokemon-text'>Crear Pokémon</h1>
            <div>
                <label htmlFor = "" >Nombre:</label>
                <input type = "text" value = {form.name} onChange = {changeHandler} name = 'name' ></input> 
            </div>
            <div>
                <label htmlFor = "" >Imagen:</label>
                <input type = "text" value = {form.sprites} onChange = {changeHandler} name = 'sprites' placeholder = "https://example.jpg"></input> 
            </div>
            <div>
                <label htmlFor="" >Vida:</label>
                <input type = "number" min = "0" step = "10" max = "999" value = {form.hp} onChange = {changeHandler} name = 'hp'  placeholder = "0 - 999"></input> 
            </div>
            <div>
                <label htmlFor = "" >Ataque:</label>
                <input type = "number" min = "0" step = "10" max = "999" value = {form.attack} onChange = {changeHandler} name = 'attack' placeholder = "0 - 999"></input> 
            </div>
            <div>
                <label htmlFor = "" >Defensa:</label>
                <input type = "number" min = "0" step = "10" max = "999" value = {form.defense} onChange = {changeHandler} name = 'defense' placeholder = "0 - 999"></input> 
            </div>
            <div>
                <label htmlFor = "" >Velocidad:</label>
                <input type = "number" min = "0" step = "10" max = "999" value = {form.speed} onChange = {changeHandler} name = 'speed' placeholder = "0 - 999"></input> 
            </div>
            <div>
                <label htmlFor = "" >Altura:</label>
                <input type = "number" min = "0" step = "10" max = "999" value = {form.height} onChange = {changeHandler} name = 'height' placeholder = "0 - 999"></input> 
            </div>
            <div>
                <label htmlFor = "" >Peso:</label>
                <input type = "number" min = "0" step = "10" max = "999" value = {form.weight} onChange = {changeHandler} name = 'weight' placeholder = "0 - 999"></input> 
            </div>
            <div>
                <label htmlFor = "" >Tipos:</label>
                <select multiple value = {form.types} onChange = {handleSelectChange} name = "types"  className = 'select'>
                    {typesOptions.map((type)=>(
                            <option key = {type} value = {type}>{type}
                            {form.types.includes(type) ? '☑' : '▢'}
                            </option>
                        ))
                    };
                </select>
            </div>
            <div>
                <button>Crear</button>
            </div>
        </form>
    </div>
    );
}
//----------------------------------------------
export default Form;
