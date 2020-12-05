const conn = require('./conn');
const { STRING } = conn.Sequelize;

const Continent = conn.define('continent', {
    name: STRING
});


module.exports = Continent;
