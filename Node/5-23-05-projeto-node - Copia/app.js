import express from 'express';
import syncer from './database/syncer.js';
import film_router from './routers/carro_router.js';
import actor_router from './routers/motorista_router.js';
import director_router from './routers/acessorio_router.js';

if(!syncer()){
    process.exit();
}

const app = express();

app.use(express.json());

app.get('/', (req, res) => {
    res.end('Rodando');
});
app.use('/carros', film_router);
app.use('/acessorios', actor_router);
app.use('/motoristas', director_router);

app.listen(80, () => {
    console.log('Escutando...');
});