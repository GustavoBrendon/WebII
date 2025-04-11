<?php
namespace App\Controle;

use App\Modelo\Cliente;

class ControleCliente
{
    public function cadastrar() {
        $dados = json_decode(file_get_contents("php://input"), true);
        $usuario = new Cliente();
        $usuario->cadastrar($dados['nome'], $dados['descricao'], $dados['idade']);
        echo json_encode(["mensagem" => "Usuário cadastrado com sucesso"]);
    }

    public function listar()
    {
        $usuario = new Cliente();
        echo json_encode($usuario->listar());
    }

    public function alterar() {
        $dados = json_decode(file_get_contents("php://input"), true);
        $usuario = new Cliente();
        $usuario->alterar($dados["id"], $dados['nome'], $dados['descricao'], $dados['idade']);
        echo json_encode(["mensagem" => "Usuário alterado com sucesso"]);
    }

    public function deletar() {
        $dados = json_decode(file_get_contents("php://input"), true);
        $usuario = new Cliente();
        $usuario->deletar($dados["id"]);
        echo json_encode(["mensagem" => "Usuário deletado com sucesso"]);
    }
}
