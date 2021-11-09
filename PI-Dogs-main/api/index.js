//                       _oo0oo_
//                      o8888888o
//                      88" . "88
//                      (| -_- |)
//                      0\  =  /0
//                    ___/`---'\___
//                  .' \\|     |// '.
//                 / \\|||  :  |||// \
//                / _||||| -:- |||||- \
//               |   | \\\  -  /// |   |
//               | \_|  ''\---/''  |_/ |
//               \  .-\__  '-'  ___/-. /
//             ___'. .'  /--.--\  `. .'___
//          ."" '<  `.___\_<|>_/___.' >' "".
//         | | :  `- \`.;`\ _ /`;.`/ - ` : | |
//         \  \ `_.   \_ __\ /__ _/   .-` /  /
//     =====`-.____`.___ \_____/___.-`___.-'=====
//                       `=---='
//     ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
const server = require("./src/app.js");
const { conn, Temperament } = require("./src/db.js");
const axios = require("axios");
const { apiKey } = process.env;

// Syncing all the models at once.
conn
  .sync({ force: true })  
  .then(() => Temperament.findAll())
  .then((temperament) => {
    // console.log('1 -- temp DB', temperament);
    if (!temperament.length) {
// console.log('2 -- no hay temp en DB');
      let temperaments = [];
      let dogTemp;
      axios
        .get(`https://api.thedogapi.com/v1/breeds?api_key=${apiKey}`)
        .then((tempAxios) => {
          tempAxios.data.forEach((dog) => {
            dogTemp = `${dog.temperament}`.split(", ");
            dogTemp.map((temp) => {             
              if (!temperaments.includes(`${temp}`)){
                temperaments.push(`${temp}`)}
            });
          });
          // console.log('3 -- temperaments', temperaments);
        return temperaments;
        })
        .then((temperaments) => {
          if (temperaments) {
            // console.log('4 -- temperaments create ', temperaments);
            temperaments.map(async (temperament) => await Temperament.create({name: temperament}));
          }
         return Temperament.findAll()
          
        })
    }
  })
  .then((t) => {
    // console.log("5 -- temperaments charged " , t );
    server.listen(3001, () => {
      console.log("%s listening at 3001"); // eslint-disable-line no-console
    });
  });
