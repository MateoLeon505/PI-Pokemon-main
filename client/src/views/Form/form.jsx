// Formulario para crear un nuevo pokemon
//----------------------------------------------
// Importación de módulos y librerías
import { useState } from 'react';
import { useSelector } from 'react-redux';
import axios from 'axios';
import './form.css';
import  Validation  from './Validations.js';
//----------------------------------------------
const Form = () =>
{
    // Trae Tipos de pokemon
    const types = useSelector(
        (state) => 
        {
            return state.types
        });
    const typesOptions = types.map((type) => type = type.name );
    //----------------------------------------------
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
    //----------------------------------------------
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
    //----------------------------------------------
    // Estado Validación del Formulario
    const [ isFormValid, setIsFormValid ] = useState(false);
    //----------------------------------------------
    // Validacion: ¿Está completo el formulario?
    const formValidation = (form) =>
    {
        const isValid =
            form.name !== "" &&
            form.sprites !=="" &&
            form.hp !=="" &&
            form.attack !=="" &&
            form.defense !=="" &&
            form.speed !=="" &&
            form.height !=="" &&
            form.weight !=="" &&
            form.types.length > 0;

        setIsFormValid(isValid);
        return isValid; 
    }
    //----------------------------------------------
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
    //--------------------------
    // Verifica si el tipo proporcionado está en form.types, o sea, seleccionado
    const typeSelected = (type) =>
    {
        return form.types.includes(type);
    }
    //----------------------------------------------
    //  Actualizar los cambios en el form 
    const changeHandler = (event) =>
    {
        const property = event.target.name; // Quién modificó
        const value = event.target.value; // Valor modificado

        setErrors(Validation({ ...form, [property]: value })); // Hace Validación
        setForm({ ...form, [property]: value }); // Guarda Cambios en el form
    };
    //----------------------------------------------
    // Al oprimir el botón
    const submitHandler = (event) =>
    {
        event.preventDefault(); // Para que no se refresque la page

        const nameLower = form.name.toLowerCase(); // Nombre a minúsculas antes de enviarlo
    
        formValidation(form); // Valida si está completo el formulario

        setForm({...form, name: nameLower}); // Actualiza nombre

        // Verificar si el formulario está completo antes de continuar
        if (isFormValid) 
        {
            axios.post("http://localhost:3001/pokemons", form) // La data se va a la bd
            .then((res) =>
                {
                    alert('Pokemon creado correctamente') // Aviso de que se creó
                });
            //--------------------
            // Limpia el formulaio
            setForm(
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
            

        }
        else
        {
            alert('Faltan Datos'); // Aviso de que está incompleto el formulario
        }
    }
    //----------------------------------------------    
    return(
    <div className = "form-container">
        <form onSubmit = {submitHandler}>
            <h1 className = 'pokemon-text'>Crear Pokémon</h1>
            {/*-------------------------------------------------- Errores: --------------------------------------------*/}
            <div className = 'errors-container'>
                {
                    errors.sprites && 
                        <div className = 'error-box'>
                            <span className = 'global-message'>URL inválida</span>
                        </div>
                }
            </div>
            <br />
            <br />
            {/*-------------------------------------------------- Nombre: --------------------------------------------*/}
            <div>
                <label className = 'properties' >Nombre</label>
                <input type = "text" value = {form.name} onChange = {changeHandler} name = 'name' className = 'entrada-texto'></input> 
            </div>
            {/*-------------------------------------------------- Imágen: --------------------------------------------*/}
            <div>
                <label className = 'properties' >Imagen</label>
                <div className = 'error-sprites-container'>
                    <input type = "text" value = {form.sprites} onChange = {changeHandler} name = 'sprites' placeholder = "https://example.jpg" className = 'entrada-texto'></input>
                    {errors.sprites && <span className = 'error-message'>{errors.sprites}</span>} 
                </div> 
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
            {/*------------ División stats -------------------*/}
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

            {/*-------------------------------------------------- Tipos: --------------------------------------------*/}      
            <div>
                <label className = 'properties' >Tipos</label>
                <div className = 'types-container'>
                    {
                        typesOptions.map((type)=>(
                            <div className = 'types-checkbox'>
                                <label className = 'types-checkbox-label'>
                                    <input type = "checkbox" 
                                    value = {type} 
                                    checked = {typeSelected(type)} // Determina si un type está seleccionado o NO
                                    onChange = {selectHandler}/> 
                                    {type} 
                                </label>
                            </div>
                        ))
                    }
                </div>
            </div>
            <div>
                <br />
                {/*-------------------------------------------------- Botón: --------------------------------------------*/}
                <button type = 'submit' className = 'boton' >Crear</button>
            </div>
        </form>
    </div>
    );
}
//----------------------------------------------
export default Form;
