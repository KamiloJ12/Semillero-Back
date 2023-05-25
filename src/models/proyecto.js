'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Proyecto extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Proyecto.hasMany(models.IntegranteProyecto, { foreignKey: 'id_integrante' });
    }
  }
  Proyecto.init({
    nombre: DataTypes.STRING,
    descripcion: DataTypes.STRING,
    fecha_inicio: DataTypes.DATE,
    fecha_fin: DataTypes.DATE,
    director: DataTypes.STRING,
    linea_investigacion: DataTypes.STRING,
    estado: DataTypes.ENUM('Activo', 'Inactivo'),
    documento: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Proyecto',
  });
  return Proyecto;
};