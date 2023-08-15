const Pool = require("pg").Pool;

const pool = new Pool ({
    host: 'tuffi.db.elephantsql.com',
    port: 5432,
    database: 'onnvbvft',
    user: 'onnvbvft',
    password: 'lqyCvpH-HZxRVJl1n0y1zSTJEc4IxQXs',
});

const getAllPlantas = (quant) => {
  return new Promise((resolve, reject) => {
    pool.query(`select * from planta limit ${quant}`, [], (error, results) => {
      if (error) {
        reject(error);
      } else {
        resolve(results.rows);
      }
    });
  });
};

const getPlanta = (quant) => {
  return new Promise((resolve, reject) => {
    pool.query(`select * from planta where cod_plt = 0${quant}`, [], (error, results) => {
      if (error) {
        reject(error);
      } else {
        resolve(results.rows);
      }
    });
  });
};



module.exports = {getAllPlantas, getPlanta};