// Importações
const express      = require("express");
const cors         = require("cors");
const bodyParser   = require("body-parser");
const db           = require("./functions/Banco/Plantas");
const cookieParser = require("cookie-parser");
const multer       = require("multer");

// Controladores
const Logar         = require("./functions/Usuario/Logar");
const Logado        = require("./functions/Usuario/Logado");
const Deslogar      = require("./functions/Usuario/Deslogar");
const Cadastrar     = require("./functions/Usuario/Cadastrar");
const Validar       = require("./functions/Usuario/Validar");
const LogarM        = require("./functions/UsuarioMobile/Logar");
const CadastrarM    = require("./functions/UsuarioMobile/Cadastrar");
const eFavorita     = require("./functions/Usuario/EFavorita");
const Favoritar     = require("./functions/Usuario/Favoritar");

// App
const app          = new express();



const imgs = ["https://fenixculatra.github.io/PlantasMedicinais/imagens/capim-limao.jpg", "https://fenixculatra.github.io/PlantasMedicinais/imagens/hortela.jpg", "https://fenixculatra.github.io/PlantasMedicinais/imagens/camomila.jpg"]


//Configs
app.set("view engine", "ejs");
app.set("views", "./public/pages");
app.use(cors());
app.use(express.static(__dirname + "/public"));
app.use(bodyParser.urlencoded({
    extended: false,
    limit: 10000,
    parameterLimit: 3,
}));
app.use(bodyParser.json());
app.use(cookieParser());
const upload = multer({})

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
    let log1 = await Logado(req);
    let favo = "";
    if (await eFavorita(log1.data.id, req.params.id)) {
        favo = "https://innatureproject.github.io/innatureimages/filled_star.png";
    } else {
        favo = "https://innatureproject.github.io/innatureimages/outlined_star.png";
    }
    
    if (isNaN(r1)) {
        res.render("error", {erro: "Valor inválido"})
    }
    else {
        let p1 = await db.getPlanta(r1);
        let pp1 = await db.getPlantaPreparos(r1);
        res.render("planta", {planta:p1, preparos: pp1, favo: favo});
    }
    
    
})

app.get("/favoritos", async (req, res) => {
    // let log1 = await Logado(req);
    if (log1.result) {
        let r1 = await db.getFavoritos(log1.data.id);
        // console.log(log1.data);
        res.render("favoritos", {plantas: r1});
    } else {
        res.render("error", {erro: "Login deve ser realizado para favoritar plantas."});
    }
})

app.get("/command/getPlanta/:id", async (req, res) => {
    res.send(await db.getPlanta(req.params.id));
})

app.get("/command/getAllPlantas", async (req, res) => {
    res.send(await db.getAllPlantas(50));
})

app.post("/command/logar", upload.single('file'), async (req, res) => {
    let log = await LogarM(req.body);
    res.send(log);
})

app.post("/command/cadastrar", upload.single('file'), async (req, res) => {
    console.log(req);
    res.send(await CadastrarM(req.body, res));
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

app.post("/planta/api/users/favoritar", async (req, res) => {
    // console.log(req.body);
    res.send(await Favoritar(req.body));
})


app.listen(port = 3000, () => {
    console.log("Servidor está online na porta 3000");
    
})

// module.exports = {app}