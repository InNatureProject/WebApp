const favoPlanta = require("../Banco/FavoPlanta");
const EFavorita  = require("./EFavorita");
const Logado     = require("./Logado");
const res        = require("express/lib/response");

const Favoritar = async (req, res) => {
    let dados = Logado(req);
    if (dados.result) {
        let cod_usr = dados.id;
    } else {
        return {result: false, erro: "Não Logado/Cadastrado"};
    }

    let cod_plt = req.body.planta;

    let favoBool = EFavorita(cod_usr, cod_plt);

    if (favoBool) {
        favoPlanta.Favoritar(cod_usr, cod_plt);
        return {result: true, info: "Favoritado"};
    } else {
        favoPlanta.desFavoritar(cod_usr, cod_plt);
        return {result: true, info: "Desfavoritado"};
    }
    res.sendStatus(200);
};

module.exports = Favoritar;