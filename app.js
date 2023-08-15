const express               = require("express");
const cors                  = require("cors");
const db                    = require("./query");
const app                   = new express();

const imgs = ["https://fenixculatra.github.io/PlantasMedicinais/imagens/capim-limao.jpg", "https://fenixculatra.github.io/PlantasMedicinais/imagens/hortela.jpg", "https://fenixculatra.github.io/PlantasMedicinais/imagens/camomila.jpg"]

app.set("view engine", "ejs");
app.set("views", "./pages");

app.use(cors());
app.use(express.static(__dirname + "/public"));

//Generate
app.get("/", (req, res) => {
    res.render("index", {imgs:imgs});
})

app.get("/plantas", async (req, res) => {
        let j = await db.getAllPlantas(50);
        console.log(j);
        res.send(j);
    })

app.listen(port = 3000, () => {

})