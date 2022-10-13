"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "items",
      [
        { name: "Arduino", stock: 50, category: "electronic", price: 50000 },
        { name: "Ayam Penyet", stock: 100, category: "food and beverage", price: 15000 },
        { name: "Jos Susu", stock: 40, category: "food and beverage", price: 7000 },
        { name: "Solder", category: "electronic", stock: 20, price: 7000 },
        { name: "Cardigan", stock: 10, category: "fashion", price: 120000 },
        { name: "Nasi Goreng", stock: 12, category: "food and beverage", price: 17000 },
        { name: "Levis", stock: 40, category: "fashion", price: 20000 },
        { name: "Vans Black", stock: 10, category: "fashion", price: 50000 },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("items", null, {});
  },
};
