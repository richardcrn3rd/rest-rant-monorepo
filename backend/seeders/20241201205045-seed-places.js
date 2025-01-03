'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('places', [
      {
        name: 'Pasta Palace',
        city: 'Rome',
        state: 'Italy',
        cuisines: 'Italian',
        founded: 2020,
      },
      {
        name: 'Burger Barn',
        city: 'Austin',
        state: 'Texas',
        cuisines: 'American',
        founded: 2018,
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('places', null, {});
  },
};
