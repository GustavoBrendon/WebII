<?php
namespace App\Controle;

use App\Modelo\Cliente;
use App\Visao\VisaoCliente;

class ControleCliente
{

    public function cadastrar()
    {
        $nome = 'Teste da Silva';
        $cliente = new Cliente($nome);
        $cliente->save();
        echo "Cliente cadastrado com sucesso: " . $cliente->getNome() . "<br>";
    }
    public function listar()
    {
        $vC = new VisaoCliente();
        $vC -> exibeLista(Cliente::list());
        //echo '<pre>';
        //print_r(Cliente::list());
        //echo '</pre>';

    }
}
