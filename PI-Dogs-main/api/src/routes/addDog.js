const { Dog } = require("../db");
const router = require("express").Router();

router.post("/", (req, res, next) => {
  const { name, weight, height, life_span, image, temperament } =
    req.body;
    Dog.create({   
    name,
    weight,
    height,
    life_span,
    image,    
  })
    .then((NewDog) => {
      return NewDog.addTemperament(temperament);
    })
    .then((dogTemperament) => {
      res.json(dogTemperament);
    })
    .catch((err) => next(err));
});
module.exports = router;