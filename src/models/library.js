const { DataTypes } = require('sequelize');
const {
  sequelize,
} = require('../config/db-config');
const Book = require('./book');

const Library = sequelize.define(
  'Libraries',
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    location: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    phone: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    deletedAt: {
      type: DataTypes.DATE,
    },
  },
  {
    paranoid: true,
    // deletedAt: 'destroyTime',
  }
);

// LibraryModel.belongsToMany('BookModel', {
//   through: 'LibraryBook',
// });
// BookModel.belongsToMany('LibraryModel', {
//   through: 'LibraryBook',
// });

module.exports = Library;
