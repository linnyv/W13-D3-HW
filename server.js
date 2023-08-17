const express = require("express");

const pokemon = require("./models/pokemon");

const server = express();

const PORT = process.env.PORT || 3000;

server.listen(PORT, ()=>{
    console.log(`Server is listening at: ${PORT}`);
});

server.get("/", (req, res) => {
    res.send('Welcome to the Pokemon App!');
});

server.get("/pokemon", (req, res) => {
    res.send(pokemon);
});