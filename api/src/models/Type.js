
// La responsabilidad de este módulo es configurar y definir la estructura del modelo
//--------------------------------------
// proporciona tipos de datos
const { DataTypes } = require('sequelize');
//--------------------------------------
module.exports = (sequelize) => {
  sequelize.define('type',{
    id: { 
      type:DataTypes.INTEGER,
      autoIncrement:true,
      primaryKey:true,
    },
    name:{
       type:DataTypes.STRING,
       allowNull:false,
       unique:true
    }
  },{
    timestamps : false // No se generan las marcas de tiempo "created_at" y "updated_at" en la bd
  })
}
