require('dotenv').config();
const express = require("express");

const pokemon = require("./models/pokemon");
const Pokemons =  require("./models/Pokemons");
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const server = express();

const PORT = process.env.PORT || 3000;

server.use(bodyParser.urlencoded({ extended: true }));

server.use(bodyParser.json());

server.set('view engine', 'jsx');

server.engine('jsx', require('express-react-views').createEngine());

mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  mongoose.connection.once('open', () => {
    console.log('connected to mongo')
  })

server.get("/", (req, res) => {
    res.send('Welcome to the Pokemon App!');
});

//Index
server.get("/pokemon", (req, res) => {
    Pokemons.find({}).then((allPokemon) => {
        console.log(allPokemon);
        res.render('index', { pokemon: allPokemon
    });
  })
    .catch(error => {
        console.error(error)
  })
});

//New
server.get("/pokemon/new", (req, res) => {
    res.render('new');
});

//Create
server.post('/pokemon/new', (req, res) => {
    const {name, image} = req.body;
    const nuevoPokemon = new Pokemons ({
      name: name,
      img: image
    });
    nuevoPokemon.save().then(() => {
    res.send('New Pokemon has been added');
        res.redirect('/pokemon')
      })
      .catch(error => {
        console.error(error)
      })
  });

//Show
server.get("/pokemon/:id", (req, res) => {
    Pokemons.findById({_id: req.params.id})
    .then((foundPokemon) => {
      res.render('show', { pokemon: foundPokemon }); 
    })
    .catch(error => {
      console.error(error);
    });
});

server.listen(PORT, ()=>{
    console.log(`Server is listening at: ${PORT}`);
});