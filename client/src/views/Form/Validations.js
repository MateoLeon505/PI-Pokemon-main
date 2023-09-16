// Este componente Hace la validación regex para la URL de Sprites
//----------------------------------------------
const urlRegex = /^(https?:\/\/)?([\w-]+\.)+[\w-]+(\/[\w-./?%&=]*)?$/; // Regex 
let errors = {};
//----------------------------------------------
const Validation = (form) => // Recibe el estado del form
{
    // Sprites
    if (urlRegex.test(form.sprites))
    {
        errors.sprites = "";
    }
    else
    {
        errors.sprites = "⚠️";
    }
    if (form.sprites === "")
    {
        errors.sprites = "";
    }
    return errors;
};
//----------------------------------------------
export default Validation;