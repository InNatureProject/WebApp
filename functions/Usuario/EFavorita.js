const favoPlanta = require("../Banco/FavoPlanta");
const Logado     = require("./Logado");

const PegarFavoritas = async (cod_usr, cod_plt) => {
    if (cod_usr == -1) {
        return false;
    } else {
        let Find = await favoPlanta.getFavorita(cod_usr, cod_plt)
        .then(response => {
            return response;
        })
        .catch(erro => {
            return {erro: erro}
        } );
        
        if (Find.length > 0) {
            return true;
        } else {
            return false;
        }
        
    }
    return false;
}

module.exports = PegarFavoritas;