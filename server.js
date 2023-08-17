const express = require("express");

const pokemon = require("./models/pokemon");

const server = express();

const PORT = process.env.PORT || 3000;

server.set('view engine', 'jsx');

server.engine('jsx', require('express-react-views').createEngine());

server.get("/", (req, res) => {
    res.send('Welcome to the Pokemon App!');
});

server.get("/pokemon", (req, res) => {
    //res.send(pokemon);
    res.render('index', { pokemon });
});

server.get("/pokemon/:id", (req, res) => {
    res.send(req.params.id);
})

server.listen(PORT, ()=>{
    console.log(`Server is listening at: ${PORT}`);
});