// import acessorio_router from './routers/acessorio_router.js';
// import motorista_router from './routers/motorista_router.js';
// import carro_router from './routers/carro_router.js';
import carro_web_router from "./routers/web/carro_router.js";
import acessorio_web_router from "./routers/web/acessorio_router.js";
import motorista_web_router from "./routers/web/motorista_router.js";
import { create } from "express-handlebars";
import express from "express";
import syncer from "./database/syncer.js";

if (!syncer()) {
  process.exit();
}

const app = express();

const hbs = create({
  extname: ".handlebars",
  defaultLayout: "main",
  layoutsDir: "views/layouts/",
  partialsDir: "views/partials/",
});

hbs.handlebars.registerHelper("eq", (a, b) => {
  return a == b;
});

app.use(express.json());
app.use(express.urlencoded());
app.engine("handlebars", hbs.engine);
app.set("view engine", "handlebars");
app.set("views", "./views");

app.get("/", (req, res) => {
  res.render("home");
});

app.use("/carros", carro_web_router);
app.use("/acessorios", acessorio_web_router);
app.use("/motoristas", motorista_web_router);

app.listen(80, () => {
  console.log("Escutando...");
});
