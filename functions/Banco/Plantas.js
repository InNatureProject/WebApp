const pool = require("./Connection");

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

const getPlanta = (id) => {
  return new Promise((resolve, reject) => {
    pool.query(`select * from planta where cod_plt = ${id}`, [], (error, results) => {
      if (error) {
        reject(error);
      } else {
        resolve(results.rows);
      }
    });
  });
};

const searchPlanta = (id) => {
  return new Promise((resolve, reject) => {
    pool.query(`select * from planta where nome ilike '%${id}%'`, [], (error, results) => {
      if (error) {
        reject(error);
      } else {
        resolve(results.rows);
      }
    });
  });
};

const getFavoritos = (id) => {
  return new Promise((resolve, reject) => {
    pool.query(`select pl.* from planta pl
    inner join usuario_planta up
    on up.fk_planta_cod_plt = pl.cod_plt
    where up.fk_usuario_cod_usr = ${id};`, [], (error, results) => {
      if (error) {
        reject(error);
      } else {
        resolve(results.rows);
      }
    })
  });
};


const getPlantaPreparos = (id) => {
  return new Promise((resolve, reject) => {
    pool.query(`select pr.titulo, pr.descricao as "receita", 
    (SELECT tprp.descricao from tipo_preparo tprp
    where tprp.cod_tprp = pr.fk_tipo_preparo_cod_tprp)
    as "tipo_preparo",
    (SELECT array_agg(ind.descricao) as "indicacao" from indicacao ind
    inner join preparo_indicacao pi
    on ind.cod_inc = pi.fk_indicacao_cod_inc
    where pi.fk_preparo_cod_prp = pr.cod_prp
    group by pi.fk_preparo_cod_prp)
     as "indicacao",
    (SELECT array_agg(cind.descricao) as "contraindicacao" from contraindicacao cind
    inner join preparo_contraindicacao pc
    on cind.cod_cinc = pc.fk_contraindicacao_cod_cinc
    where pc.fk_preparo_cod_prp = pr.cod_prp
    group by pc.fk_preparo_cod_prp) as "contraindicacao",
    (SELECT array_agg(efc.descricao) as "efeito colateral" from efeito_colateral efc
    inner join preparo_efeito_colateral pefc
    on efc.cod_eftcol = pefc.fk_efeito_colateral_cod_eftcol
    where pefc.fk_preparo_cod_prp = pr.cod_prp
    group by pefc.fk_preparo_cod_prp) as "efeito colateral"
     from preparo pr
    inner join planta_preparo pp
    on pr.cod_prp = pp.fk_preparo_cod_prp
    inner join planta pl
    on pp.fk_planta_cod_plt = pl.cod_plt
    where pl.cod_plt = ${id}
`, [], (error, results) => {
      if (error) {
        reject(error);
      } else {
        resolve(results.rows);
      }
    });
  });
};

const getIndicacoes = () => {
  return new Promise((resolve, reject) => {
    pool.query(`select * from indicacao`, [], (error, results) => {
      if (error) {
        reject(error);
      } else {
        resolve(results.rows);
      }
    })
  })
} 

const getPropriedades = () => {
  return new Promise((resolve, reject) => {
    pool.query(`select (select array_agg(ind.descricao) as indicacao from indicacao ind), (select array_agg(ind.descricao) as contraindicacao from contraindicacao ind), (select array_agg(ind.descricao) as efeito_colateral
    from contraindicacao ind)`, [], (error, results) => {
      if (error) {
        reject(error);
      } else {
        console.log(results.rows);
        resolve(results.rows[0]);
      }
    })
  })
}

module.exports = {getAllPlantas,
  getPlanta,
  getPlantaPreparos,
  searchPlanta,
  getFavoritos,
  getIndicacoes,
  getPropriedades
};