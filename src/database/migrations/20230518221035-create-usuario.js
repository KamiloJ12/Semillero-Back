'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Usuarios', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      nombre: {
        type: Sequelize.STRING,
        allowNull: false
      },
      avatar: {
        type: Sequelize.STRING,
        allowNull: false
      },
      correo: {
        type: Sequelize.STRING,
        allowNull: false,
        isEmail: true,
        unique: true
      },
      celular: {
        type: Sequelize.STRING,
        allowNull: false
      },
      identificacion: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true
      },
      codigo: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true
      },
      edad: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      direccion: {
        type: Sequelize.STRING,
        allowNull: false
      },
      semestre_actual: {
        type: Sequelize.STRING,
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
        type: Sequelize.STRING,
        allowNull: true,
        validate: {
          passwordNotNull(value) {
            if ( (this.rol === 'Administrador' || this.rol === 'Superadministrador') && value == null) {
              throw new Error('El campo "password" no puede ser nulo para roles de administrador o superadministrador');
            }
          },
        },
      },
      rol: {
        type: Sequelize.STRING,
        values: ['Estudiante', 'Administrador', 'Superadministrador'],
        defaultValue: "Estudiante",
        allowNull: false,
      },
      estado: {
        type: Sequelize.STRING,
        allowNull: false,
        values: ['Activo', 'Inactivo'],
        defaultValue: "Activo",
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Usuarios');
  }
};