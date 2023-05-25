'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class IntegranteProyecto extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      IntegranteProyecto.belongsTo(models.Proyecto);
      IntegranteProyecto.belongsTo(models.Usuario);
    }
  }
  IntegranteProyecto.init({
    id_integrante: DataTypes.INTEGER,
    id_proyecto: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'IntegranteProyecto',
  });
  return IntegranteProyecto;
};