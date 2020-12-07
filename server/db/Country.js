const conn = require('./conn');
const { STRING } = conn.Sequelize;

const Country = conn.define('country', {
    name: STRING,
    dates: STRING,
    description: STRING
});


module.exports = Country;