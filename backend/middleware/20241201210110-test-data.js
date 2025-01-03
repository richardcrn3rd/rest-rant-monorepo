'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('users', [
      {
        name: 'Test User 1',
        email: 'test1@example.com',
        role: 'user',
        password_digest: 'dummyhashedpassword1', // Replace with a hashed value if needed
      },
      {
        name: 'Test User 2',
        email: 'test2@example.com',
        role: 'user',
        password_digest: 'dummyhashedpassword2', // Replace with a hashed value if needed
      },
    ]);

    await queryInterface.bulkInsert('places', [
      {
        name: 'Test Place 1',
        city: 'Test City',
        state: 'Test State',
        cuisines: 'Test Cuisines',
        founded: 2021,
      },
    ]);

    await queryInterface.bulkInsert('comments', [
      {
        placeId: 1,
        content: 'This is a test comment.',
        rant: false,
        authorId: 1,
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('comments', null, {});
    await queryInterface.bulkDelete('places', null, {});
    await queryInterface.bulkDelete('users', {
      email: { [Sequelize.Op.in]: ['test1@example.com', 'test2@example.com'] },
    });
  },
};
