const Sequelize = require('sequelize');
const db = require('../index');

module.exports = db.define('campuses', {
  name: {
    type: Sequelize.STRING,
  },
  image: {
    type: Sequelize.STRING,
  },
});
