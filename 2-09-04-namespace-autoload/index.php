<?php
require_once './vendor/autoload.php';

use App\Controle\ControleCliente;

$router = new Bramus\Router\Router();

$router->get('/', function (){
    echo 'Home';
});

$router->setNamespace('\App\Controle');
$router->get('/clientes', 'ControleCliente@listar');
$router->get('/clientes', 'ControleCliente@cadastrar');

//$router->get('/clientes', function (){
//    $cc = new ControleCliente();
//    $cc->listar();
//});

$router->run();

//$cc = new ControleCliente();
//$cc->cadastrar();