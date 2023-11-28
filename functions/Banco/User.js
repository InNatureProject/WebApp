const pool = require("./Connection");
const md5 = require("md5");

const find = (email, senha) => {
    return new Promise((resolve, reject) => {
      pool.query(`select * from usuario
      where email = '${email}' and senha = '${md5(senha)}'`, [], (error, results) => {
        if (error) {
          reject(error);
        } else {
          resolve(results.rows);
        }
      });
    });
  };



module.exports = {find}