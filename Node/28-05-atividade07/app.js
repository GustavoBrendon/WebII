import express from "express";
import carros_router from "./routes/carros_router.js";

const app = express();
app.use(express.json());

app.get("/", (req, res) => {
    res.end('Rodando.');
});

app.use('/carros', carros_router);

app.listen(80, ()=>{
    console.log('Escutando.');
});
