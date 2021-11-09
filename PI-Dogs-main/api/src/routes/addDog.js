const { Dog , Temperament } = require("../db");
const router = require("express").Router();

router.post("/", (req, res, next) => {
  const { name, weight, height, life_span, image, temperaments } =
    req.body;
    Dog.create({   
    name,
    weight,
    height,
    life_span,
    image,    
  })
    .then((NewDog) => {
      // return temperament.forEach(el=>NewDog.addTemperament({name:el}))
      NewDog.addTemperament(temperaments)
    })
    .then((dogTemperament) => {
      res.json(dogTemperament);
    })
    .catch((err) => next(err));
});
module.exports = router;