'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Usuarios', [
      {
        nombre: "Juan Pérez",
        avatar: "https://example.com/avatar123.jpg",
        correo: "juanperez@example.com",
        celular: "1234567890",
        identificacion: "ABC123456",
        codigo: "12345678",
        edad: 25,
        direccion: "Calle Principal, 123",
        semestre_actual: "3",
        rol: "Estudiante",
        estado: "Activo",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nombre: "María González",
        avatar: "https://example.com/avatar987.jpg",
        correo: "mariagonzalez@example.com",
        celular: "9876543210",
        identificacion: "XYZ987654",
        codigo: "8765432771",
        edad: 25,
        direccion: "Avenida Central, 456",
        semestre_actual: "5",
        rol: "Estudiante",
        estado: "Activo",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nombre: "Carlos Rodríguez",
        avatar: "https://example.com/avatar456.jpg",
        correo: "carlosrodriguez@example.com",
        celular: "555-123-4567",
        identificacion: "DEF654321",
        codigo: "654321",
        edad: 25,
        direccion: "Calle Secundaria, 789",
        semestre_actual: "4",
        rol: "Estudiante",
        estado: "Activo",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nombre: "Luisa Martínez",
        avatar: "https://example.com/avatar234.jpg",
        correo: "luisamartinez@example.com",
        celular: "7777777777",
        identificacion: "JKL654321",
        codigo: "54321678",
        edad: 25,
        direccion: "Calle Secundaria, 321",
        semestre_actual: "7",
        rol: "Estudiante",
        estado: "Activo",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nombre: "Brayan Ricardo Macias Lazaro",
        avatar: "https://example.com/avatar901.jpg",
        correo: "lauraherrera@example.com",
        celular: "3204396627",
        identificacion: "100557422",
        codigo: "1151746",
        edad: 25,
        direccion: "Calle Secundaria, 987",
        password: "$2b$10$pK6Lu.smiASzrbKeobWDwe4U2ePoee5gvx4ZQZtm47VeG1/aSdH6i",
        rol: "Superadministrador",
        estado: "Activo",
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Usuarios', null, {});
  }
};
