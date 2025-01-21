'use strict';
let config = require(__dirname + '/../config/config.js');
config = config['development'];

const Sequelize = require('sequelize');
let sequelize = new Sequelize(
  config.database,
  config.username,
  config.password,
  config,
);

const db = {};
db.sequelize = sequelize;
db.Sequelize = Sequelize;
db.User = require('./User')(sequelize, Sequelize);

module.exports = db;
