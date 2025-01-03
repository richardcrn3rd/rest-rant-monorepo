module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    role: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: 'reviewer',
      validate: {
        isIn: [['reviewer', 'admin', 'user']], // Validate valid roles
      },
    },
    password_digest: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });

  return User;
};