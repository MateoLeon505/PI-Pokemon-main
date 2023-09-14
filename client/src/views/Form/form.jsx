// Formulario para crear un nuevo pokemon
//----------------------------------------------
// Importación de módulos y librerías
import { useState } from 'react';
import { useSelector } from 'react-redux';
import axios from 'axios';
import './form.css';
//----------------------------------------------
const Form = () =>
{
    // Regex para validar url de la imagen
    const urlRegex = /^(https?:\/\/)?([\w-]+\.)+[\w-]+(\/[\w-./?%&=]*)?$/;
    //------------------
    // Tipos de pokemon
    const types = useSelector(
        (state) => 
        {
            return state.types
        });
    const typesOptions = types.map((type) => type = type.name );
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
        // Sprites
        if (urlRegex.test(form.sprites))
        {
            setErrors(({...errors, sprites:"👍"}));
        }
        else
        {
            setErrors(({...errors, sprites:"❌"}));
        }
        if (form.sprites === "")
        {
            setErrors(({...errors, sprites:"💬"}));
        }
    }
    //------------------ 
    // Maneja cambios en el select múltiple
    const selectHandler = (event) =>
    {
        const selectedOption = event.target.value; //  Type seleccionado

        if (form.types.includes(selectedOption)) // Si YA está
        {
            setForm({ ...form, types: form.types.filter((type) => type !== selectedOption) }); // Quítalo
        }
        else // Si no
        {
            setForm({ ...form, types: [...form.types, selectedOption ]}); // Agrégalos
        }
    }
    //------------------ 
    //  Actualizar los cambios en el form 
    const changeHandler = (event) =>
    {
        const property = event.target.name; // Quién modificó
        const value = event.target.value; // Valor modificado

        validate({ ...form, [property]: value }); // Hace Validación

        setForm({ ...form, [property]: value }); // Guarda Cambios en el form
    };
    //------------------
    // Respuesta del botón
    const submitHandler = (event) =>
    {
        event.preventDefault(); // Para que no se refresque la page
        axios.post("http://localhost:3001/pokemons", form) // La data se va a la bd
        .then((res) =>
            {
                alert('Pokemon creado correctamente')
            });
    }
    //------------------    
    return(
    <div className = "form-container">
        <form onSubmit = {submitHandler}>
            <h1 className = 'pokemon-text'>Crear Pokémon</h1>
            
            <div>
                <label className = 'properties' >Nombre</label>
                <input type = "text" value = {form.name} onChange = {changeHandler} name = 'name' className = 'entrada-texto'></input> 
            </div>

            <div>
                <label className = 'properties' >Imagen{errors.sprites && <span>{errors.sprites}</span>}</label> 
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
                    {typesOptions.map((type)=>(
                        <div className = 'types-checkbox'>
                            <label className = 'types-checkbox-label'>
                                <input type = "checkbox" value = {type} onChange = {selectHandler}/> 
                                {type} 
                            </label>
                        </div>
                        ))
                    }
                </div>
            </div>
            <div>
                <br />
                <button type = 'sumbit' className = 'boton'>Crear</button>
            </div>
        </form>
    </div>
    );
}
//----------------------------------------------
export default Form;
