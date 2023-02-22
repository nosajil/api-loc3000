const express = require("express");

const server = express();

const routes = require("./routes/cars");

const mongoose = require("mongoose");

// const bodyParser = require('body-parser');

server.use(express.json());
// server.use(bodyParser.json());

server.listen(5501, () => {
    console.log("Serveur lancé et à l'écoute sur le port 5555");

    mongoose.set('strictQuery', false);

    mongoose.connect("mongodb://127.0.0.1:27017/api-loc3000");

    const db = mongoose.connection;

    db.once("open", () => console.log("Connexion à la base api-loc3000 ok")).on("error", error => console.error("Problème durant la connexion à la base mongo", error));
});

routes(server);

