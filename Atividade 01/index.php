<?php
require_once __DIR__ . '/vendor/autoload.php';

use Bramus\Router\Router;
use App\Controle\ControleCliente;

header('Content-Type: application/json');

$router = new Router();
$controller = new ControleCliente();

$router->get('/clientes', fn() => $controller->listar());
$router->post('/clientes/cadastro', fn() => $controller->cadastrar());
$router->put('/clientes/alterar', fn() => $controller->alterar());
$router->delete('/clientes/delete', fn() => $controller->deletar());

$router->run();

?>