const Token = require("jsonwebtoken");

async function Logado(req) {
    let Auth = null;
    if (typeof(req) == "string") {
        Auth = req;
    } else {
        try {
            console.log(req)
            if (typeof(req) == "object") {
                Auth = req.cookies.Token || null;
            }
        } catch(err) {
            return {result: false, erro: {login: "Não Existe Cookie"}}
        }
        
    }
    
    
    

    if (typeof(Auth) == "undefined" || Auth == '' || Auth == null) {
        return {result: false, erro: {login: 'Cookie sem valor'}}
    } else {
        try {
            let token = await Token.verify(Auth, 'Plantas2354Senha');
            return {result: true, data: token}
        } catch(err) {
            return {result: true, erro: {login: 'Cookie Inválido'}}

        }
    }
}

module.exports = Logado;