const { DataTypes } = require("sequelize");
const { sequelize } = require("../config/db-config");

const UserModel = sequelize.define("user", {})

module.exports = UserModel; 