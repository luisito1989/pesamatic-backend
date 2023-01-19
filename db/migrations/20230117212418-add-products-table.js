'use strict';

const { PRODUCT_TABLE, ProductSchema } = require('../models/products.model');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    queryInterface.createTable(PRODUCT_TABLE, ProductSchema);
  },

  async down (queryInterface, Sequelize) {
    queryInterface.dropTable(PRODUCT_TABLE);
  }
};
