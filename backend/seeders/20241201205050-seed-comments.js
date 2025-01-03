'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('comments', [
      {
        placeId: 1,
        content: 'Amazing food and great service!',
        rant: false,
        authorId: 1,
      },
      {
        placeId: 2,
        content: 'Not impressed with the cleanliness.',
        rant: true,
        authorId: 2,
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('comments', null, {});
  },
};

