const express = require("express");

const cors = require("cors");
const app = express();

app.use(cors());
app.use(express.json());

const conn = require("./database/conn")
conn();

// Rotas
const routes = require("./routes/router");
app.use("/api", routes);

// Porta
const port = 3001;
app.listen(port, function(){
    console.log("Servidor rodando na porta " + port);
})