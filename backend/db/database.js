'use strict';

const { Sequelize } = require('sequelize');

// Initialize Sequelize instance
const sequelize = new Sequelize({
  dialect: 'sqlite', // Using SQLite
  storage: './database.sqlite', // Path to SQLite file
  logging: console.log, // Optional: Enable logging for debugging
});

// Export the sequelize instance and Sequelize library
const db = { sequelize, Sequelize };

// Sync models to the database
(async () => {
  try {
    await sequelize.sync({ force: false }); // Change `force` to `true` if you want to reset the DB each time
    console.log('Database synced successfully!');
  } catch (error) {
    console.error('Error syncing database:', error);
  }
})();

module.exports = db;
