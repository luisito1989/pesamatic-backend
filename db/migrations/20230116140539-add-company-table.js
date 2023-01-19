'use strict';

const { COMPANY_TABLE, CompanySchema } = require('../models/company.model');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    queryInterface.createTable(COMPANY_TABLE, CompanySchema);
  },

  async down (queryInterface, Sequelize) {
    queryInterface.dropTable(COMPANY_TABLE);
  }
};
