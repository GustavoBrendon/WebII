<nav>
    <div>

        <a href="/">

            <h2>Home</h2>

        </a>

    </div>
    <div>
        <h2>Carros</h2>

        <ul>

            <li><a href="/carros">Lista</a></li>

            <li><a href="/carros/criar">Novo</a></li>
        </ul>
    </div>
    <div>

        @auth

            <h2>Olá, {{ Auth::user()->name }}</h2>

            <a href="/logout">Logout</a>

        @else

            <a href="/login">Login</a>

        @endauth

    </div>
</nav>