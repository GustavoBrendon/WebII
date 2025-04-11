<?php
namespace App\conect;

use PDO;

class Conexao {
    public static function conectar() {
        return new PDO('mysql:host=localhost;dbname=devweb2025', 'root', 'root');
    }
}