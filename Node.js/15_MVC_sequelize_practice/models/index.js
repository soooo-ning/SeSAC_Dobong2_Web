'use strict';
const Sequelize = require('sequelize');
let config = require(__dirname + '/../config/config.js');
console.log(config);
config = config['development'];
console.log('config', config);
const db = {};

let sequelize = new Sequelize(
  config.database,
  config.username,
  config.password,
  config,
);

db.sequelize = sequelize;
db.Sequelize = Sequelize;
db.User = require('./User')(sequelize, Sequelize);

module.exports = db;
