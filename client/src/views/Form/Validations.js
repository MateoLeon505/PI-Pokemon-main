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
    //------------------------
    //------- Stats: ---------
    // hp:
    if (parseInt(form.hp)<0 || parseInt(form.hp)>999)
    {
        errors.hp = "⚠️";
    }
    else
    {
        errors.hp = "";
    }
    //----------
    // attack:
    if (parseInt(form.attack)<0 || parseInt(form.attack)>999)
    {
        errors.attack = "⚠️";
    }
    else
    {
        errors.attack = "";
    }
    //----------
    // defense:
    if (parseInt(form.defense)<0 || parseInt(form.defense)>999)
    {
        errors.defense = "⚠️";
    }
    else
    {
        errors.defense = "";
    }
    //----------
    // speed:
    if (parseInt(form.speed)<0 || parseInt(form.speed)>999)
    {
        errors.speed = "⚠️";
    }
    else
    {
        errors.speed = "";
    }
    //----------
    // height:
    if (parseInt(form.height)<0 || parseInt(form.height)>999)
    {
        errors.height = "⚠️";
    }
    else
    {
        errors.height = "";
    }
    //----------
    // weight:
    if (parseInt(form.weight)<0 || parseInt(form.weight)>999)
    {
        errors.weight = "⚠️";
    }
    else
    {
        errors.weight = "";
    }
    //------------------------
    return errors;
};
//----------------------------------------------
export default Validation;