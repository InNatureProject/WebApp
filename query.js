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

const getPlantaPreparos = (id) => {
  return new Promise((resolve, reject) => {
    pool.query(`SELECT pl.cod_plt, pr.descricao as "receita", array_agg(ind.descricao) as "indicacao", array_agg(cind.descricao) as "contraindicacao", array_agg(efc.descricao) as "efeito colateral" from planta pl 
    inner join planta_preparo pp
    on pp.fk_planta_cod_plt = pl.cod_plt
    inner join preparo pr
    on pr.cod_prp = pp.fk_preparo_cod_prp

    inner join preparo_indicacao pi
    on pi.fk_preparo_cod_prp = pr.cod_prp
    inner join indicacao ind
    on ind.cod_inc = pi.fk_indicacao_cod_inc

    inner join preparo_contraindicacao pci
    on pci.fk_preparo_cod_prp = pr.cod_prp
    inner join contraindicacao cind
    on cind.cod_cinc = pci.fk_contraindicacao_cod_cinc

    inner join preparo_efeito_colateral pefc
    on pefc.fk_preparo_cod_prp = pr.cod_prp
    inner join efeito_colateral efc
    on efc.cod_eftcol = pefc.fk_efeito_colateral_cod_eftcol

    where pl.cod_plt = ${id}
    group by pl.cod_plt, pr.descricao
    order by pl.cod_plt asc
`, [], (error, results) => {
      if (error) {
        reject(error);
      } else {
        resolve(results.rows);
      }
    });
  });
};



module.exports = {getAllPlantas, getPlanta, getPlantaPreparos, searchPlanta};