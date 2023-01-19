'use strict';

const { CATEGORY_NAME, CategorySchema } = require('../models/categories.model');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    queryInterface.createTable(CATEGORY_NAME, CategorySchema);
  },

  async down (queryInterface, Sequelize) {
    queryInterface.dropTable(CATEGORY_NAME);
  }
};
