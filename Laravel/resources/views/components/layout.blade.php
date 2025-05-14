<!DOCTYPE html>

<html lang="en">



<head>

    <meta charset="UTF-8">

    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <title>Concessionária Laravel</title>
    <link rel="stylesheet" href="{{ asset('css/estilo.css') }}">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">


    <style>
        h1 {
            font-family: Arial, sans-serif;
        }
    </style>
</head>



<body>

    <header>

        <h1 style=" text-align: center;">Concessonária <span>Laravel</span></h1>

        @include ('components.menu')

        <h3>{{ $titulo }}</h3>

    </header>

    <main>

        {{ $slot }}

    </main>

    <footer>

        <p>&copy; DEW II 2025.</p>

    </footer>

</body>



</html>