'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Eventos', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      titulo: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      imagen: {
        type: Sequelize.STRING
      },
      descripcion: {
        type: Sequelize.STRING(2500),
        allowNull: false,
      },
      fecha_inicio: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      fecha_fin: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      fecha_inicio_inscripcion: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      fecha_fin_inscripcion: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      ubicacion: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      contacto: {
        type: Sequelize.STRING
      },
      enlace: {
        type: Sequelize.STRING,
      },
      estado: {
        type: Sequelize.STRING,
        allowNull: false,
        values: ['Pendiente', 'En Curso', 'Completado', 'Inactivo'],
        defaultValue: "Pendiente",
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
    await queryInterface.dropTable('Eventos');
  }
};