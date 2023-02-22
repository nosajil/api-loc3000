const CarsController = require("../controllers/cars");

module.exports = server => {
    server.get("/", (req, res) => {
        // console.log('Page bien chargé');
        res.send("Bienvenue sur la page d'accueil de l'API loc3000");
    });

    server.get('/cars', (req, res) => {
        CarsController.getAll(req, res);
    });

    server.get('cars/:id', (req, res) => {
        CarsController.get(req, res);
    });

    server.post("/cars", (req, res) => {
        CarsController.create(req, res);
    });

    server.delete("/cars/:id", (req, res) => {
        CarsController.delete(req, res);
    });

    server.get("*", (req, res) => {
        res.status(404).send('Nothing here!');
    });
}