'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {

    // Add seed commands here.
    // Example:
    await queryInterface.bulkInsert('Items',
      [
        {
          name: 'New Website 1',
          TodoId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'New Website 2',
          TodoId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        }
      ], {});
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('Items', null, {});
  }
};
