const { DataTypes } = require('sequelize');
const {
  sequelize,
} = require('../config/db-config');
const BooksModel = require('./book');

const LibraryModel = sequelize.define('library', {
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
});

// LibraryModel.hasMany(Books);
// BooksModel.belongsTo(Library);

module.exports = LibraryModel;
