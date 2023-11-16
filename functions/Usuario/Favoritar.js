const favoPlanta = require("../Banco/FavoPlanta");
const EFavorita  = require("./EFavorita");
const Logado     = require("./Logado");
const res        = require("express/lib/response");

const Favoritar = async (req, res) => {
    let dados = await Logado(req.Token);
    let cod_usr = null;
    if (dados.result) {
        cod_usr = dados.data.id;
    } else {
        return {result: false, erro: "Não Logado/Cadastrado"};
    }

    let cod_plt = req.Planta;

    let favoBool = await EFavorita(cod_usr, cod_plt);


    if (favoBool) {
        favoPlanta.desFavoritar(cod_usr, cod_plt);
        return {result: true, info: "desFavoritado"};
    } else {
        favoPlanta.Favoritar(cod_usr, cod_plt);
        return {result: true, info: "Favoritado"};
    }
    res.sendStatus(200);
};

module.exports = Favoritar;