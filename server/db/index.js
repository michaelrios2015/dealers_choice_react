const conn = require('./conn');
const Continent = require('./Continent');


const syncAndSeed = async()=> {
    await conn.sync({ force:true });
    await Promise.all([
        Continent.create({ name: 'Africa' }),
        Continent.create({ name: 'Asia' }),
        Continent.create({ name: 'Europe' })
    ]);
};

module.exports = {
    models: {
        Continent
    },
    syncAndSeed
};