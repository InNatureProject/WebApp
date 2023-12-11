// Importações
const express           = require("express");
const cors              = require("cors");
const bodyParser        = require("body-parser");
const db                = require("./functions/Banco/Plantas");
const cookieParser      = require("cookie-parser");
const multer            = require("multer");

// Controladores
const Logar             = require("./functions/Usuario/Logar");
const Logado            = require("./functions/Usuario/Logado");
const Deslogar          = require("./functions/Usuario/Deslogar");
const Cadastrar         = require("./functions/Usuario/Cadastrar");
const Validar           = require("./functions/Usuario/Validar");
const LogarM            = require("./functions/UsuarioMobile/Logar");
const CadastrarM        = require("./functions/UsuarioMobile/Cadastrar");
const eFavorita         = require("./functions/Usuario/EFavorita");
const Favoritar         = require("./functions/Usuario/Favoritar");
const Comentar          = require("./functions/Usuario/Comentar");
const { desFavoritar }  = require("./functions/Banco/FavoPlanta");
const LerComentarios    = require("./functions/Banco/Comment").lerComentarios;
const UsuarioImagens    = require("./functions/Usuario/Imagem");
const { lerComentarios } = require("./functions/Banco/Comment");
// App
const app          = new express();



const imgs = ["https://fenixculatra.github.io/PlantasMedicinais/imagens/capim-limao.jpg", "https://fenixculatra.github.io/PlantasMedicinais/imagens/hortela.jpg", "https://fenixculatra.github.io/PlantasMedicinais/imagens/camomila.jpg"]


//Configs
app.set("view engine", "ejs");
app.set("views", "./public/pages");
app.use(cors());
app.use(express.static(__dirname + "/public"));
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());
app.use(cookieParser());
const upload = multer({});

const indexAcess = (req, res) => {
    res.render("index", {imgs:imgs});
}

//Generate
app.get("/", (req, res) => {
    indexAcess(req, res);
})

app.get("/index", (req, res) => {
    indexAcess(req, res);
})



app.get("/cadastro-usuario", async (req, res) => {
    if (await Logado(req).result) {
        res.redirect("usuario");
    } else {
        res.render("cadastro-usuario");
        
    }
})

app.get("/cadastro-planta", async (req, res) => {
    let log = await Logado(req);
    if (log.result) {
        if (log.data.permissao == 'A' || log.data.permissao == 'C') {
            res.render('cadastro-planta', {propriedades: await db.getPropriedades()})
        } else {
            res.render('error', {erro: "Você não tem Permissão"})
        }
        
    } else {
        res.render('error', {erro: 'Precisa de Login e Permissão para acessar essa página'})
    }
    
})

app.get("/cadastro-preparo", async (req, res) => {
    let log = await Logado(req);
    if (log.result) {
        if (log.data.permissao == 'A' || log.data.permissao == 'C') {
            res.render('cadastro-preparo')
        } else {
            res.render('error', {erro: "Você não tem Permissão"})
        }
        
    } else {
        res.render('error', {erro: 'Precisa de Login e Permissão para acessar essa página'})
    }
    
})

app.get("/login", async (req, res) => {
    if (await Logado(req).result) {
        res.redirect("usuario");
    } else {
        res.render("login");
    }
    
})

app.get("/usuario", async (req, res) => {
    let log1 = await Logado(req);
    
    if (log1.result) {
        let data = '';
        if (log1.data.permissao == 'A') {
            data = 'objects/cadastro';
        }
        res.render("usuario", {nome: log1.data.nome, email: log1.data.email, data: data});
    } else {
        res.redirect("/login");
    }
})

app.get("/plantas", async (req, res) => {
    let j = await db.getAllPlantas(50);
    res.render("plantas", {plantas: j});
})

app.get("/plantas/:id", async (req, res) => {
    let r3 = req.params.id.replace("&", " "); // criar validação para tira caracteres especiais utilizando replace
    r3 = r3.replace(/[`"`,`'`,"/","(",")",";","*","$","&","@","#","%","[","]","{","}",`,`,"£","¢","*","!",":","|"]/g,"");//aqui está a validação
    let j = await db.searchPlanta(r3);

    res.render("plantas", {plantas: j});
})

app.get("/planta/:id", async (req, res) => {
    let r = await parseInt(req.params.id);
    let log = await Logado(req);
    let favo = "";
    if (log.result) {
        if (await eFavorita(log.data.id, req.params.id)) {
            favo = "https://innatureproject.github.io/innatureimages/filled_star.png";
        } else {
            favo = "https://innatureproject.github.io/innatureimages/outlined_star.png";
        }
    }
    if (isNaN(r)) {
        res.render("error", {erro: "Valor inválido"})
    }
    else {
        let p = await db.getPlanta(r);
        let pp = await db.getPlantaPreparos(r);
        let cm = await LerComentarios(r);
        res.render("planta", {planta:p, preparos: pp, favo: favo, comentarios: cm});
    }
    
    
})

app.get("/favoritos", async (req, res) => {
    let log1 = await Logado(req);
    if (log1.result) {
        let r1 = await db.getFavoritos(log1.data.id);
        res.render("favoritos", {plantas: r1});
    } else {
        res.render("error", {erro: "Login deve ser realizado para favoritar plantas."});
    }
})

app.get("/command/planta/:id", async (req, res) => {
    res.send(await db.getPlanta(req.params.id));
})

app.get("/command/plantas", async (req, res) => {
    res.send(await db.getAllPlantas(50));
})

app.get("/command/plantapreparo/:id", async (req, res) => {
    res.send(await db.getPlantaPreparos(req.params.id));
})

app.post("/command/logar", upload.none(), async (req, res) => {
    let log = await LogarM(req.body);
    res.send({result: true, data: {log}});
})


app.post("/command/cadastrar", upload.none(), async (req, res) => {
    let cadastro = await CadastrarM(req.body, res);
    res.send(cadastro);
})

app.post("/command/favoritos", async (req, res) => {
    let log = await Logado(req.body.Token);
    if (log.result) {
        res.send({result: true, data: await db.getFavoritos(log.data.id)});
    } else {
        res.send({result: false, erro: "login não finalizado"})
    }
})


app.post("/command/getImagem", async (req, res) => {
    let log = await Logado(req.body.Token);
    if (log.result) {
        res.send({result: true, data: await UsuarioImagens.getImagem(log.data.id)});
    } else {
        res.send({result: false, erro: "login não finalizado"})
    }
})

app.post("/command/getImagem/:id", async (req, res) => {
        res.send({result: true, data: await UsuarioImagens.getImagem(req.params.id)});
})

app.post("/command/setImagem", async (req, res) => {
    let log = await Logado(req.body.Token);
    if (log.result) {
        res.send({result: true, data: await UsuarioImagens.setImagem(log.data.id, req.body.url)});
    } else {
        res.send({result: false, erro: "login não finalizado"})
    }
})

app.post("/command/favoritar", async (req, res) => {
    res.send(await Favoritar(req.body));
})

app.post("/command/ehFavorito", async (req, res) => {
    let log = await Logado(req.body.Token);
    if (log.result) {
        res.send({result: await eFavorita(req.body)});
    } else {
        res.send({result: false});
    }
    
})

app.get("/command/getComentarios/:id", async (req, res) => {
    res.send(await lerComentarios(req.params.id));
})

app.post("/command/comentar", async (req, res) => {
    let log = await Logado(req.body.Token);
    if (log.result) {
        res.send({result: true, data: await Comentar(req.body, log.data.id)});
    } else {
        res.send({result: false, data: 'Você não está logado'});
    }
    
})



app.post("/api/users/logar", async (req, res) => {
    res.send(await Logar(req.body, res));
})

app.post("/api/users/cadastrar", async (req, res) => {
    res.send(await Cadastrar(req.body, res));
})

app.get("/api/users/deslogar", async (req, res) => {
    res.send(await Deslogar(res));
})

app.post("/api/users/favoritar", async (req, res) => {
    res.send(await Favoritar(req.body));
})

app.post("/api/users/comentar", async (req, res) => {
    let log = await Logado(req);
    if (log.result) {
        res.send(await Comentar(req.body, log.data.id));
    } else {
        res.send({error: true, data: 'Você não está logado'});
    }
    
})

app.post("/api/users/setImagem", async (req, res) => {
    let log = await Logado(req.cookies.Token);
    if (log.result) {
        res.send({result: true, data: await UsuarioImagens.setImagem(log.data.id, req.body.url)});
    } else {
        res.send({result: false, erro: "login não finalizado"});
    }
})

app.listen(port = 3000, () => {
    console.log("Servidor está online na porta 3000");
    
})

// module.exports = {app}