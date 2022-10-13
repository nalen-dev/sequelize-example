"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "users",
      [
        { name: "Admin 1", email: "admin1@gmail.com", password: "binarian123", role: "admin" },
        { name: "Admin 2", email: "admin2@gmail.com", password: "binarian123", role: "admin" },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("users", null, {});
  },
};
