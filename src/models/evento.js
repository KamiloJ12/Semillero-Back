'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Evento extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Evento.init({
    titulo: DataTypes.STRING,
    imagen: DataTypes.STRING,
    descripcion: DataTypes.STRING(2500),
    fecha_inicio: DataTypes.DATE,
    fecha_fin: DataTypes.DATE,
    fecha_inicio_inscripcion: DataTypes.DATE,
    fecha_fin_inscripcion: DataTypes.DATE,
    ubicacion: DataTypes.STRING,
    contacto: DataTypes.STRING,
    enlace: DataTypes.STRING,
    estado: DataTypes.ENUM('Pendiente', 'En Curso', 'Completado', 'Inactivo'),
  }, {
    sequelize,
    modelName: 'Evento',
  });
  return Evento;
};