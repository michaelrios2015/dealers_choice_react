const conn = require('./conn');
const Continent = require('./Continent');
const Country = require('./Country');


Continent.hasMany(Country);
Country.belongsTo(Continent);

const syncAndSeed = async()=> {
    await conn.sync({ force:true });
    await Promise.all([
        Continent.create({ name: 'Africa' }),
        Continent.create({ name: 'Asia' }),
        Continent.create({ name: 'Europe' })
    ]);
    await Promise.all([
        Country.create({ name: 'Mali', dates: 'Summer 2016', description: 'SO NICE!!', continentId: 1 }),
        Country.create({ name: 'Ethiopia', dates: 'Fall 2016', description: 'SO NICE!!', continentId: 1 }),
        Country.create({ name: 'China',  dates: 'Fall 2017', description: 'SO NICE!!', continentId: 2 }),
        Country.create({ name: 'Vietnam', dates: 'Fall 2017', description: 'SO NICE!!', continentId: 2 }),
        Country.create({ name: 'Spain',  dates: 'Spring 2015', description: 'SO NICE!!', continentId: 3 }),
        Country.create({ name: 'England',  dates: 'Summer 1990', description: 'SO NICE!!', continentId: 3 })
    ]);


};

module.exports = {
    models: {
        Continent,
        Country
    },
    syncAndSeed
};