const express               = require("express");
const cors                  = require("cors");
const db                    = require("./query");
const app = new express();

const imgs = ["https://fenixculatra.github.io/PlantasMedicinais/imagens/capim-limao.jpg", ]

app.set("view engine", "ejs");
app.set("views", "./pages");

app.use(cors());

//Generate
app.get("/", (req, res) => {
    text = `
    <a href="atividade1">Atividade 1</a>
    `;
    res.send(text);
})

app.get("/plantas", async (req, res) => {
        let j = await db.getAllPlantas(5);

        console.log(j);
        res.send(j);
    })

app.listen(port = 3000, () => {

})