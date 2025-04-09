<?php
namespace App\Modelo;
require_once '../../Conexao.php';
class Cliente {
    private $nome;

    public function __construct($nome = null) {
        $this->nome = $nome;
    }

    public function getNome() {
        return $this->nome;
    }

    public function setNome($nome) {
        $this->nome = $nome;
    }

    public function save() {
        return true; // Simula o salvamento no banco de dados
    }

    public static function list() {
        return [
            new Cliente('Cliente 1'),
            new Cliente('Cliente 2'),
            new Cliente('Cliente 3')
        ];
    }

    public function editar() {
        $sql = 
        'update cliente set nome = ?
        where id = ?;';
        $id = filter_input(INPUT_POST, 'id');
        $nome = filter_input(INPUT_POST, 'nome');
        $preparado = Conexao::preparaComando($sql);
        $preparado->bindValue(1, $nome);
        $preparado->bindValue(3, $id);
        if($preparado->execute()){
            return ['status' => 'Editou'];
        } else {
            return ['status' => $preparado->errorInfo()];
        }        
    }

}