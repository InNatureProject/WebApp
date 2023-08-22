const express               = require("express");
const cors                  = require("cors");
const bodyParser            = require("body-parser");
const db                    = require("./query");
const app                   = new express();

const imgs = ["https://fenixculatra.github.io/PlantasMedicinais/imagens/capim-limao.jpg", "https://fenixculatra.github.io/PlantasMedicinais/imagens/hortela.jpg", "https://fenixculatra.github.io/PlantasMedicinais/imagens/camomila.jpg"]

app.set("view engine", "ejs");
app.set("views", "./pages");

app.use(cors());
app.use(express.static(__dirname + "/public"));
app.use(bodyParser.urlencoded({extended: true}));

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



app.get("/cadastro-usuario", (req, res) => {
    res.render("cadastro-usuario");
})

app.get("/cadastro-planta", (req, res) => {
    res.render("cadastro-planta");
})

app.get("/login", (req, res) => {
    res.render("login");
})

app.get("/plantas", async (req, res) => {
    let j = await db.getAllPlantas(50);
    // console.log(j);
    res.render("plantas", {plantas: j});
})

app.get("/planta/:id", async (req, res) => {
    let r1 = await parseInt(req.params.id);
    let p1 = await db.getPlanta(r1);
    let pp1 = await db.getPlantaPreparos(r1);
    console.log(pp1)
    res.render("planta", {planta: p1, preparos: pp1});
})

app.listen(port = 3000, () => {

})

// module.exports = {app}