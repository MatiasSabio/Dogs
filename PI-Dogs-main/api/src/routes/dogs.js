const { Dog, Temperament } = require("../db");
const router = require("express").Router();
const axios = require("axios");
const { Op } = require("sequelize");
const { apiKey } = process.env;

router.get("/", async function (req, res, next) {
  try {
    let apiDogsAxios = await axios.get(
      `https://api.thedogapi.com/v1/breeds?api_key=${apiKey}`
    );
    let apiDogs = apiDogsAxios.data.map((dog) => {
      // let temp = dog.temperament.split(",");
      return {
        id: dog.id,
        name: dog.name,
        image: dog.image.url,
        weight: dog.weight.metric,
        height: dog.height.metric,
        life_span: dog.life_span,
        temperament: `${dog.temperament}`.split(', '),
      };
    });
    // console.log( dog.temperament);
    const { name } = req.query;
    var dogsQueryTemperaments;
    var dogsDBTemperaments;
    var apiDogsFiltered;
    if (name) {
      var dogsQuery = await Dog.findAll({
        where: {
          name: {
            [Op.iLike]: `%${name}%`,
          },
        },
        include: Temperament,
      });

      dogsQueryTemperaments = dogsQuery.map((dog) => {
        return {
          id: dog.id,
          name: dog.name,
          image: dog.image,
          height: dog.height,
          life_span: dog.life_span,
          weight: dog.weight,
          temperament: dog.temperament.map((t) => t.name),
        };
      });
      apiDogsFiltered = apiDogs.filter((dog) => {
        return dog.name.toLowerCase().includes(name.toLowerCase());
      });
      return res.json(dogsQueryTemperaments.concat(apiDogsFiltered));
    } else {
      let dogsDB = await Dog.findAll({
        include: Temperament,
      });
      console.log('perros de base de datos',dogsDB);
      dogsDBTemperaments = dogsDB.map((dog) => {
        return {
          id: dog.id,
          name: dog.name,
          image: dog.image,
          height: dog.height,
          life_span: dog.life_span,
          weight: dog.weight,
          temperament: dog.temperaments.map((t) => t.name),
        };
      });     
      // return res.json(dogsDBTemperaments.concat(apiDogs));
      return res.json(apiDogs.concat(dogsDBTemperaments));
    }
  } catch (err) {
    return next({ status: 400, message: err });
  }
});

// router.get("/:id", async (req, res, next) => {
//   try {
//     const { id } = req.params;
//     if (!id) {
//       return next("id not found");
//     }
//     var dog;
//     if (id.length > 10) {
//       var dogDB = await Dog.findByPk(id, {
//         include: Temperament,
//       });
//       dog = {
//         ...dogDB,
//         Temperament: dogDB.Temperament.map((t) => t.name),
//       };
//     } else {
//       let apiDogsAxios = await axios.get(
//         `https://api.thedogapi.com/v1/breeds?api_key=${apiKey}`
//       );
//       let apiDogs = apiDogsAxios.data.map((dog) => {
//         // let temp = dog.temperament.split(",");
//         return {
//           id: dog.id,
//           name: dog.name,
//           image: dog.image.url,
//           weight: dog.weight.metric,
//           height: dog.height.metric,
//           life_span: dog.life_span,
//           temperament: `${dog.temperament}`.split(', '),
//         };
//       });
//       dog = apiDogs.find((dog) => dog.id === id);
//     }
//     return res.json(dog);
//   } catch (err) {
//     return next({ status: 400, message: err });
//   }
// });

module.exports = router;
