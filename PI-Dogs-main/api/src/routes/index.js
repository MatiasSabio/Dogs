const { Router } = require("express");
const cors = require("cors");
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const dogsRoute = require("./dogs");
const temperamentRoute = require("./temperaments");
const addDogRoute = require("./addDog");

const router = Router();
router.use(cors());
// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.use("/dogs", dogsRoute);
router.use("/temperaments", temperamentRoute);
router.use("/addDog", addDogRoute);

module.exports = router;
