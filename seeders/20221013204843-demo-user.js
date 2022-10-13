"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "users",
      [
        { name: "Lionel Messi", email: "nalendrapraja11@gmail.com", password: "asidu324" },
        { name: "Jesika", email: "jesika@gmail.com", password: "134dasf" },
        { name: "Galang Gemilang", email: "gemilang@gmail.com", password: "asd132412" },
        { name: "Nadira", email: "nadira@gmail.com", password: "asda4367" },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("users", null, {});
  },
};
