<?php
namespace App\Controle;
require_once '../conexao/Conexao.php';
// use App\Modelo\Cliente as C1;
// use App\Modelo\{Cliente, Dependente};
use App\Modelo\Cliente;
use App\Modelo2\Conexao;
class ControleCliente
{
    public function inserir() {
        $sql = 
        'insert into clientes (nome)
        values (?)';
        $nome = filter_input(INPUT_POST, 'nome');
        $preparado = Conexao::preparaComando($sql);
        $preparado->bindValue(1, $nome);
        if($preparado->execute()){
            return ['status' => 'Gravou'];
        } else {
            return ['status' => $preparado->errorInfo()];
        }        
    }
    public function listar()
    {
        echo '<pre>';
        print_r(Cliente::list());
        echo '</pre>';

    }

   
}
