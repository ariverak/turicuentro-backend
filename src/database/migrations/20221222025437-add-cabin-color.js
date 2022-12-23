'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return await queryInterface.addColumn(
      'cabins', // table name
      'color', // new field name
      {
        type: Sequelize.STRING,
        allowNull: true,
      },
    )
  },

  async down (queryInterface, Sequelize) {
    return await queryInterface.removeColumn('cabins', 'color')
  }
};
