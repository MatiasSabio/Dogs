const { DataTypes } = require("sequelize");

// [ ] Temperamento con las siguientes propiedades:
// ID
// Nombre

module.exports = (sequelize) =>
  sequelize.define("temperament", {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
  });
