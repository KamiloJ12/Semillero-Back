'use strict';
const bcrypt = require("bcrypt");
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Usuario extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Usuario.hasMany(models.IntegranteProyecto, { foreignKey: 'id_proyecto' });
    }
  }
  Usuario.init({
    nombre: DataTypes.STRING,
    avatar: DataTypes.STRING,
    correo: DataTypes.STRING,
    celular: DataTypes.STRING,
    identificacion: DataTypes.STRING,
    codigo: DataTypes.STRING,
    edad: DataTypes.INTEGER,
    direccion: DataTypes.STRING,
    semestre_actual: {
      type: DataTypes.STRING,
      allowNull: true,
      validate: {
        semestreActualNotNull(value) {
          if ( this.rol === 'Estudiante' && value == null ) {
            throw new Error('El campo "semestre_actual" no puede ser nulo para el rol de estudiante');
          }
        },
      },
    },
    password: {
      type: DataTypes.STRING,
      allowNull: true,
      validate: {
        passwordNotNull(value) {
          if ( (this.rol === 'Administrador' || this.rol === 'Superadministrador') && value == null) {
            throw new Error('El campo "password" no puede ser nulo para roles de administrador o superadministrador');
          }
        },
      },
    },
    rol: DataTypes.ENUM('Estudiante', 'Administrador', 'Superadministrador'),
    estado: DataTypes.ENUM('Activo', 'Inactivo')
  }, {
    sequelize,
    modelName: 'Usuario',
    hooks: {
      beforeCreate: async (usuario) => {
        if(usuario.rol != 'Estudiante'){
          const salt = await bcrypt.genSalt(10);
          const hashedPassword = await bcrypt.hash(usuario.password, salt);
          usuario.password = hashedPassword;
        }
      },
      beforeUpdate: async (usuario, options) => {
        if (usuario.rol != 'Estudiante' && usuario.changed('password')) {
          const salt = await bcrypt.genSalt(10);
          const hashedPassword = await bcrypt.hash(usuario.password, salt);
          usuario.password = hashedPassword;
        }
      },
    },
  });
  return Usuario;
};