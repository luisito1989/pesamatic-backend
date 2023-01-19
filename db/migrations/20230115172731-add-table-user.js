'use strict';

const { USER_TABLE, UserSchema } = require('./../models/users.model');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    queryInterface.createTable(USER_TABLE, UserSchema);
  },

  async down (queryInterface, Sequelize) {
    queryInterface.dropTable(USER_TABLE);
  }
};
