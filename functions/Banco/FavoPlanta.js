const pool = require("./Connection");

const Favoritar = (id_usr, id_plt) => {
  console.log(`insert into usuario_planta values (${id_usr},${id_plt})`);
    return new Promise((resolve, reject) => {
        pool.query(`insert into usuario_planta values (${id_usr},${id_plt})`, [], (error, results) => {
            if (error) {
                reject(error);
            } else {
                resolve(results);
            }
        })
    })
}

const desFavoritar = (id_usr, id_plt) => {
    return new Promise((resolve, reject) => {
        pool.query(`delete from usuario_planta
        where fk_usuario_cod_usr = ${id_usr} and fk_planta_cod_plt = ${id_plt}`, [], (error, results) => {
            if (error) {
                reject(error);
            } else {
                resolve(results);
            }
        })
    })
}

const getFavorita = (cod_usr, cod_plt) => {
    return new Promise((resolve, reject) => {
      pool.query(`select * from usuario_planta
      where fk_usuario_cod_usr = ${cod_usr} and fk_planta_cod_plt = ${cod_plt}`, [], (error, results) => {
        if (error) {
          reject(error);
        } else {
          resolve(results.rows)
        }
      });
    });
  };

  const getFavoritas = (cod_usr) => {
    return new Promise((resolve, reject) => {
      pool.query(`select * from usuario_planta
      where fk_usuario_cod_usr = ${cod_usr}`, [], (error, results) => {
        if (error) {
          reject(error);
        } else {
          resolve(results.rows)
        }
      });
    });
  };

module.exports = {Favoritar, desFavoritar, getFavorita, getFavoritas};