const Sequelize = require("sequelize");
const dbConfig = require("../config/database");
const Activity = require("../models/Activity");
const User = require('../models/User')

const connection = new Sequelize(dbConfig);

User.init(connection)
Activity.init(connection)
User.associate(connection.models)
Activity.associate(connection.models)

module.exports = connection;