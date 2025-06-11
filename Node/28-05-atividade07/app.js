import express from 'express';
import syncer from './database/syncer.js';
import carros_router from './routes/carros_router.js';
import motorista_router from './routes/motorista_router.js';
import acessorio_router from './routes/acessorio_router.js';

if(!syncer()){
    process.exit();
}

const app = express();

app.use(express.json());

app.get('/', (req, res) => {
    res.end('Rodando');
});
app.use('/carros', carros_router);
app.use('/acessorios', acessorio_router);
app.use('/motoristas', motorista_router);

app.listen(80, () => {
    console.log('Escutando...');
});