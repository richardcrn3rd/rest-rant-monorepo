'use strict';
const bcrypt = require('bcrypt');

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('users', [
      {
        name: 'Alice',
        email: 'alice@example.com',
        role: 'admin', // Valid value
        password_digest: await bcrypt.hash('password123', 10),
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Bob',
        email: 'bob@example.com',
        role: 'user', // Valid value
        password_digest: await bcrypt.hash('password456', 10),
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('users', {
      email: { [Sequelize.Op.in]: ['alice@example.com', 'bob@example.com'] },
    });
  },
};
