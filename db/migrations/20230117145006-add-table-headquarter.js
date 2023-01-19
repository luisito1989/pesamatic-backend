'use strict';

const { HEADQUARTER_TABLE, HeadquarterSchema } = require('../models/headquater.model');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    queryInterface.createTable(HEADQUARTER_TABLE, HeadquarterSchema);
  },

  async down (queryInterface, Sequelize) {
    queryInterface.dropTable(HEADQUARTER_TABLE);
  }
};
