const { Temperament } = require("../db");
const router = require("express").Router();


router.get("/", (req, res, next) => {
    Temperament.findAll()
    .then(temperament => {
        res.json(temperament)
    })
})

module.exports = router;