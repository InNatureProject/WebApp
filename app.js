// Importações
const express      = require("express");
const cors         = require("cors");
const bodyParser   = require("body-parser");
const db           = require("./functions/Banco/Plantas");
const cookieParser = require("cookie-parser");


// Controladores
const Logar        = require("./functions/Usuario/Logar");
const Logado       = require("./functions/Usuario/Logado");
const Deslogar     = require("./functions/Usuario/Deslogar");
const Cadastrar    = require("./functions/Usuario/Cadastrar");
const Validar      = require("./functions/Usuario/Validar");
// App
const app          = new express();


const imgs = ["https://fenixculatra.github.io/PlantasMedicinais/imagens/capim-limao.jpg", "https://fenixculatra.github.io/PlantasMedicinais/imagens/hortela.jpg", "https://fenixculatra.github.io/PlantasMedicinais/imagens/camomila.jpg"]



app.set("view engine", "ejs");
app.set("views", "./public/pages");

app.use(cors());
app.use(express.static(__dirname + "/public"));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(cookieParser());

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

app.get("/cadastro-planta", (req, res) => {
    res.render("cadastro-planta");
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
        res.render("usuario", {nome: log1.data.nome, email: log1.data.email});
    } else {
        res.redirect("/login")
    }
})

app.get("/plantas", async (req, res) => {
    let j = await db.getAllPlantas(50);
    // console.log(j);
    res.render("plantas", {plantas: j});
})

app.get("/plantas/:id", async (req, res) => {
    let r3 = req.params.id.replace("&", " "); // criar validação para tira caracteres especiais utilizando replace
    r3 = r3.replace(/[`"`,`'`,"/","(",")",";","*","$","&","@","#","%","[","]","{","}",`,`,"£","¢","*","!",":","|"]/g,"");//aqui está a validação
    let j = await db.searchPlanta(r3);

    res.render("plantas", {plantas: j});
})

app.get("/planta/:id", async (req, res) => {
    let r1 = await parseInt(req.params.id);
    if (isNaN(r1)) {
        res.render("error", {erro: "Valor inválido"})
    }
    else {
        let p1 = await db.getPlanta(r1);
        let pp1 = await db.getPlantaPreparos(r1);
        res.render("planta", {planta:p1, preparos: pp1});
    }
    
    
})

app.get("/favoritos", async (req, res) => {
    let log1 = await Logado(req);
    if (log1.result) {
        res.render("favoritos", {plantas: await db.getFavoritos(log1.data.id)});
    } else {
        res.render("error", {erro: "Login deve ser realizado para favoritar plantas."});
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

app.get("/api/users/favoritar")

app.listen(port = 3001, () => {
    console.log("Servidor está online na porta 3001");
    
})

// module.exports = {app}