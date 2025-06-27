// import acessorio_router from './routers/acessorio_router.js';
// import motorista_router from './routers/motorista_router.js';
// import carro_router from './routers/carro_router.js';
import carro_web_router from "./routers/web/carro_router.js";
import acessorio_web_router from "./routers/web/acessorio_router.js";
import motorista_web_router from "./routers/web/motorista_router.js";
import { create } from "express-handlebars";
import express from "express";
import syncer from "./database/syncer.js";
import session from 'express-session';
import css from 'connect-session-sequelize';
import user_web_router from "./routers/web/user_router.js";
import sequelize from "./database/mysql.js";
import { checkLogged} from "./controllers/web/user_controller.js";

if (!await syncer()) {
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

hbs.handlebars.registerHelper("contains", (a, b) => {
  return typeof a != 'undefined' && a.indexOf(b) != -1;
});

hbs.handlebars.registerHelper('inc', function(arg1, arg2) {

    if(typeof arg1 == 'undefined') {

        return false;

    }

    return (arg1.indexOf(arg2) !== -1);

});

const SequelizeStore = css(session.Store);

const sequelizeStore = new SequelizeStore({

    db: sequelize,

    tableName: 'sessions',

    checkExpirationInterval: 5 * 60 * 1000,

    expiration: 1 * 60 * 60 * 1000 

});

app.use(session({

    secret: '*&long+and+secure+secret=%445',

    name: 'sess_cookie_param',

    store: sequelizeStore,

    cookie: {

        maxAge: 1 * 60 * 60 * 1000,

        secure: false, // if using HTTPS

        httpOnly: true // somente browsers

    },

    saveUninitialized: false, 

    resave: false

}));

await sequelizeStore.sync();

app.use(express.json());
app.use(express.urlencoded());
app.engine("handlebars", hbs.engine);
app.set("view engine", "handlebars");
app.set("views", "./views");

app.get("/", (req, res) => {
  res.render("home");
});

app.use("/carros", checkLogged,carro_web_router);
app.use("/acessorios", checkLogged,acessorio_web_router);
app.use("/motoristas", checkLogged,motorista_web_router);
app.use('/users', user_web_router);

app.listen(80, () => {
  console.log("Escutando...");
});
