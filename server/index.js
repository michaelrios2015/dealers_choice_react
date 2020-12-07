const express = require('express');
const { static } = express;
const path = require('path');
const { models: {Continent, Country}, syncAndSeed} = require('./db');

const app = express();

app.use('/public', static(path.join(__dirname, '../public')));


app.get('/', (req, res, next)=>res.sendFile(path.join(__dirname, '../index.html')));

app.get('/api/continents', async(req, res, next)=> {
    try {
        res.send(await Continent.findAll());
    }
    catch (ex){
        next(ex);
    }
})

app.get('/api/continents/:id', async(req, res, next)=> {
    try {
        res.send(await Continent.findByPk(req.params.id, {include: [Country]}));
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

init();