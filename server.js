const express = require('express');
const { static } = express;
const path = require('path');

const app = express();

app.use('/dist', static(path.join(__dirname, 'dist')));

app.get('/', (req, res, next)=>res.sendFile(path.join(__dirname, 'index.html')));

app.get('/api/continents', async(req, res, next)=> {
    try {
        res.send(await Continent.findAll());
    }
    catch (ex){
        next(ex);
    }
})

const init = async()=> {
    try {
        await syncAndSeed();
        const port  = process.env.port || 3000;
        app.listen(port, ()=> console.log(`listening on port ${port}`));

    }
    catch(ex){
        console.log(ex);
    }
}

const Sequelize = require('sequelize');
const { STRING } = Sequelize;
const conn = new Sequelize(process.env.DATABASE_URL || 'postgres://postgres:JerryPine@localhost/mommys_travels');

const Continent = conn.define('continent', {
    name: STRING
});

const syncAndSeed = async()=> {
    await conn.sync({ force:true });
    await Promise.all([
        Continent.create({ name: 'Africa' }),
        Continent.create({ name: 'Asia' }),
        Continent.create({ name: 'Europe' })
    ]);
};

init();