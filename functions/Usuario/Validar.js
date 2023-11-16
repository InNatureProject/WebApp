const validarEmail = (email) => {
    let certo = true;
    if (!(email.indexOf("@") > -1 || !(email.indexOf("@") == email.lastIndexOf("@")))) {
        certo = false;
    }

    let comp = email.split("@");
    let v1 = comp[1].length - comp[1].replace(/[.]/g, "").length;
    if (!(v1 > 0 && v1 < 3)) {
        // console.log(comp[1].length,comp[1].replaceAll(".").length);

        certo = false;
    }
    if (!(comp[1].indexOf(".com") > -1)) {
        certo = false;
    }
    if (!(comp[0].replace(/[a-z, 0-9, .]/g, "").length == 0)) {
        certo = false;
    }

    return certo;
}

const validarSenha = (senha) =>  {
    let certo = true;
    if (typeof(senha) != "string") {
        certo = false;
    }

    if (senha.length < 6 || senha.length > 20) {
        certo = false;
    }
    
    return certo;
}

module.exports = {validarEmail, validarSenha};