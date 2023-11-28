const pool = require("./Connection");

const comentar = (cod_usr, cod_plt, descricao) => {
    return new Promise((resolve, reject) => {
        pool.query(`insert into COMENTARIO (FK_USUARIO_cod_usr, FK_PLANTA_cod_plt, descricao)
        values (${cod_usr}, ${cod_plt}, ${descricao});`, [], (error, results) => {
            if (error) {
                reject(error);
            } else {
                resolve(results.rows);
            }
        })
    })
}

module.exports = comentar;