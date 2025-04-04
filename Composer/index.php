<?php

require __DIR__ .'/vendor/autoload.php';

use Monolog\Level;
use Monolog\Logger;
use Monolog\Handler\StreamHandler;

// create a log channel
$log = new Logger('name');
$log->pushHandler(new StreamHandler('logs.log', Level::Warning));

// add records to the log
$log->warning('Foo');
$log->error('Bar');
?>
<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="./css/style.css">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous">
    <title>Atividade - Cartas</title>
</head>
<body class="bg-black">
    
    <header class="container-fluid text-center">
        <h1>Atividade 08</h1>
    </header>

    <main class="container-fluid">
        <section class="container" id="section1">
            <img src="./img/Carta-Costas.png" alt="Carta de costas" id="carta-costas1">
            <img src="./img/Carta-Costas.png" alt="Carta de costas" id="carta-costas2">
            <img src="./img/Carta-Costas.png" alt="Carta de costas" id="carta-costas3">
        </section>
        <section class="container mt-5" id="section2">
            <img src="img/carta1.jpg" alt="Carta Yugioh" id="carta1">
            <img src="img/carta2.jpg" alt="Carta Yugioh" id="carta2">
            <img src="img/carta3.jpg" alt="Carta Yugioh" id="carta3">
            <img src="img/carta4.jpg" alt="Carta Yugioh" id="carta4">
            <img src="img/carta5.jpg" alt="Carta Yugioh" id="carta5">
            <img src="img/carta6.jpg" alt="Carta Yugioh" id="carta6">
            <img src="img/carta7.jpg" alt="Carta Yugioh" id="carta7">
            <img src="img/carta8.jpg" alt="Carta Yugioh" id="carta8">
            <img src="img/carta9.jpg" alt="Carta Yugioh" id="carta9">
            <img src="img/carta10.jpg" alt="Carta Yugioh" id="carta10">
        </section>
    </main>

    <footer class="container-fluid  text-light text-center mt-5">
        <p>&copy; Gustavo Brendon</p>
    </footer>

<script type="module" src="./js/script.js"></script>
</body>
</html>