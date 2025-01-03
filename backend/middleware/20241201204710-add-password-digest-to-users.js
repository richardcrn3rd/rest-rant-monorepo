'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.addColumn('users', 'password_digest', {
      type: Sequelize.STRING,
      allowNull: false, // Assuming passwords should not be null
    });
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.removeColumn('users', 'password_digest');
  },
};
