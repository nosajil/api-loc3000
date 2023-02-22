const CarsModel = require('../models/cars');

module.exports = {

    getAll(req, res) {
        CarsModel.find().then(cars => {
            res.send(cars);
        })
    },

    get(req, res) {
        const id = req.params.id;

        CarsModel.findById(id).then(car => {
            res.send(car);
        });
    },

    create(req, res) {
        console.log(req.body)
        const car = new CarsModel({
            title: req.body.title,
            name: req.body.name,
            options: req.body.options, 
                aircondition: req.body.aircondition,
                navigation: req.body.navigation,
                transmission: req.body.transmission,
                person: req.body.person,
            image: req.body.image,
            price: req.body.price,
            reservations: req.body.reservations
        });

        car.save().then(() => res.send("Voiture ajouté avec succès!"));
    },

    delete(req, res) {
        const id = req.params.id;
        CarsModel.findByIdAndDelete(id).then(car => res.send(`Surppression du film ${car.name}`));
    }
}