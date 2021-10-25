const { DataTypes } = require("sequelize");
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.

// [ ] Raza con las siguientes propiedades:
// ID *
// Nombre *
// Altura *
// Peso *
// Años de vida

module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define("dog", {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    name: { 
      type: DataTypes.STRING, 
      allowNull: false, 
      unique: true 
    },
    height: { 
      type: DataTypes.INTEGER, 
      allowNull: false 
    },
    weight: { 
      type: DataTypes.INTEGER, 
      allowNull: false 
    },
    life_span: { 
      type: DataTypes.INTEGER 
    },
  });
};
