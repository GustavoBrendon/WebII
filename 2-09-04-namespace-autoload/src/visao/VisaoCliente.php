<?php
namespace App\Visao;

class VisaoCliente {
    public function exibeLista($lista){
        $titulo = 'Clientes';
        $subtitulo = 'Listagem';
        $conteudo = '<ul>';
        foreach ($lista as $cli) {
            $conteudo .= '<li>';
            $conteudo .= $cli->getNome();
            $conteudo .= '</li>';
        }
        $conteudo .= '</ul>';
        require_once __DIR__ . '/templates/principal.php';
    }
}