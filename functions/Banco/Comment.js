const pool = require("./Connection");

const comentar = (cod_usr, cod_plt, descricao) => {
    return new Promise((resolve, reject) => {
        pool.query(`insert into COMENTARIO (FK_USUARIO_cod_usr, FK_PLANTA_cod_plt, descricao)
        values (${cod_usr}, ${cod_plt}, '${descricao}')`, [], (error, results) => {
            if (error) {
                reject(error);
            } else {
                resolve(results);
            }
        })
    })
}

const lerComentarios = (cod_plt) => {
    return new Promise((resolve, reject) => {
        pool.query(`select cm.cod_cmt, us.nome, cm.descricao from COMENTARIO cm
        inner join USUARIO us
        on cm.FK_USUARIO_cod_usr = us.cod_usr
        where cm.FK_PLANTA_cod_plt = ${cod_plt};`, [], (error, results) => {
            if (error) {
                reject(error);
            } else {
                resolve(results.rows);
            }
        })
    })
}

module.exports = {comentar, lerComentarios};