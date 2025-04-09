<?php

require_once './vendor/autoload.php';
use App\Controle\ControleCliente;

$router = new Bramus\Router\Router();

$router->get('/', function () {
    echo 'Hello World!';
});

$router->setNamespace('\App\Controle');
$router->get('/clientes/novo', 'ControleCliente@cadastrar');
$router->get('/clientes', 'ControleCliente@listar');
$router->get('/clientes/novo', 'ControleCliente@editar');
$router->get('/clientes/novo', 'ControleCliente@deletar');

// $router->get('/clientes', function () {
//     $cc = new ControleCliente();
//     $cc->listar();
// });

$router->run();

// $cc = new ControleCliente();
// $cc->listar();

