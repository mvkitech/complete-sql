const Sequelize = require('sequelize');

const db = new Sequelize('node-complete', 'root', 'nodecomplete', {
  dialect: 'mysql',
  host: 'localhost',
});

module.exports = db;
