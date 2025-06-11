import express from 'express';
import syncer from './database/syncer.js';
import film_router from './routers/carro_router.js';
import actor_router from './routers/motorista_router.js';
import director_router from './routers/acessorio_router.js';
import acessorio_router from './routers/acessorio_router.js';
import motorista_router from './routers/motorista_router.js';
import carro_router from './routers/carro_router.js';

if(!syncer()){
    process.exit();
}

const app = express();

app.use(express.json());

app.get('/', (req, res) => {
    res.end('Rodando');
});
app.use('/carros', carro_router);
app.use('/acessorios', acessorio_router);
app.use('/motoristas', motorista_router);

app.listen(80, () => {
    console.log('Escutando...');
});