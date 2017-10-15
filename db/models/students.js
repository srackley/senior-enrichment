const Sequelize = require('sequelize');
const db = require('../index');
const Campuses = require('./campuses');

module.exports = db.define('students', {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  email: {
    type: Sequelize.STRING,
    allowNull: false,
  },
}, {
  defaultScope: {
    include: [
      { model: Campuses },
    ],
  },
});
