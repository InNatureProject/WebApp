const express               = require("express");
const cors                  = require("cors");
const db                    = require("./query");
const app                   = new express();

const imgs = ["https://fenixculatra.github.io/PlantasMedicinais/imagens/capim-limao.jpg", "https://fenixculatra.github.io/PlantasMedicinais/imagens/hortela.jpg", "https://fenixculatra.github.io/PlantasMedicinais/imagens/camomila.jpg"]

app.set("view engine", "ejs");
app.set("views", "./pages");

app.use(cors());
app.use(express.static(__dirname + "/public"));

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

app.get("/plantas", async (req, res) => {
        let j = await db.getAllPlantas(50);
        // console.log(j);
        res.render("plantas", {plantas:j});
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

app.get("/planta/:id", (req, res) => {
    let j = db.getPlanta(req.params.id);
    res.render("planta", {planta: j});
})

app.listen(port = 3000, () => {

})