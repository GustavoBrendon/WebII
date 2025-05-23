import express from "express";
import film_router from "./routes/film_router.js";
// import sequelize from "./database/mysql.js";
// sequelize.authenticate();

const app = express();
app.use(express.json());
// app.use("/", (req, res) => {
//     res.end('Rodando.');
// });

app.use('/films', film_router);

app.listen(80, ()=>{
    console.log('Escutando.');
});
