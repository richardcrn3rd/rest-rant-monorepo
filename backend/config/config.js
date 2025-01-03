module.exports = {
    development: {
      dialect: 'sqlite',
      storage: './database.sqlite', // Path to your SQLite database file
      logging: false,              // Disable logging (optional)
    },
    test: {
      dialect: 'sqlite',
      storage: ':memory:',         // Use an in-memory database for testing
      logging: false,
    },
    production: {
      dialect: 'sqlite',
      storage: './database.sqlite', // Same as development for SQLite
      logging: false,
    },
  };
  