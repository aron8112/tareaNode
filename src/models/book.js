const { DataTypes } = require('sequelize');
const {
  sequelize,
} = require('../config/db-config');
const LibraryModel = require('./library');

const BooksModel = sequelize.define('books', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    unique: true,
  },
  isbn: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  author: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  year: {
    type: DataTypes.INTEGER,
  },
});

module.exports = BooksModel;
