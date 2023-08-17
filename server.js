const express = require("express");

const server = express();

const PORT = process.env.PORT || 3000;

server.listen(PORT, ()=>{
    console.log(`Server is listening at: ${PORT}`);
});

server.get("/", (req, res) => {
    res.send('Welcome to the Pokemon App!');
});