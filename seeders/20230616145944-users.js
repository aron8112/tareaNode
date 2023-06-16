'use strict';
const bcrypt = require('bcrypt');
const salt = process.env.SALT_ROUNDS;
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('User', [
      {
        id: 1,
        username: 'Admin',
        email: 'adminapibook@gmail.com',
        password: bcrypt.hashSync('admin', salt),
        role: 0,
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
