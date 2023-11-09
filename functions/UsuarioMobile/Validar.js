const validarEmail = async (email) => {
    console.log(email);
    if (!(email.indexOf("@") > -1 || !(email.indexOf("@") == email.lastIndexOf("@")))) {
        return false;
    }

    let comp = email.split("@");
    let v1 = comp[1].length - comp[1].replace(/[.]/g, "").length;
    if (!(v1 > 0 && v1 < 3)) {
        // console.log(comp[1].length,comp[1].replaceAll(".").length);

        return false;
    }
    if (!(comp[1].indexOf(".com") > -1)) {
        console.log('erro')
        return false;
    }
    if (!(comp[0].replace(/[a-z, 0-9, .]/g, "").length == 0)) {
        return false;
    }

    return true;
}

const validarSenha = async (senha) =>  {
    if (typeof(senha) != "string") {
        return false;
    }

    if (senha.length < 6 || senha.length > 20) {
        return false;
    }
    
    return true;
}

module.exports = {validarEmail, validarSenha};