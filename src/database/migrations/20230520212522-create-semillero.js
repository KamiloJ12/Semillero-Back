'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Semilleros', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      mision: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      vision: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      facebook: {
        type: Sequelize.STRING
      },
      youtube: {
        type: Sequelize.STRING
      },
      gmail: {
        type: Sequelize.STRING
      },
      twitter: {
        type: Sequelize.STRING
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
    await queryInterface.dropTable('Semilleros');
  }
};