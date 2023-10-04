const favoPlanta = require("../Banco/FavoPlanta");
const Logado     = require("./Logado");

const Favoritar = (req, res) => {
    let dados = Logado(req);
    if (dados.result) {
        let cod_usr = dados.id;
    } else {
        return {result: false, erro: "Não Logado/Cadastrado"};
    }

    let cod_plt = req.body.planta;

    let favoBool = favoPlanta.qFavoritar(cod_usr, cod_plt);

    if (favoBool.length == 0) {
        favoPlanta.Favoritar(cod_usr, cod_plt);
        return {result: true, info: "Favoritado"};
    } else {
        favoPlanta.desFavoritar(cod_usr, cod_plt);
        return {result: true, info: "Desfavoritado"};
    }
    
};

module.exports = Favoritar;