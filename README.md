
# WebII

Repositório desenvolvido para a disciplina de Desenvolvimento Web II no Instituto Federal de Minas Gerais – Campus São João Evangelista (IFMG/SJE).

## 📚 Descrição

Este projeto tem como objetivo aplicar os conceitos e práticas aprendidos na disciplina.

## 🛠 Tecnologias Utilizadas

- **PHP**: Linguagem de programação principal.
- **Laravel**: Framework PHP para desenvolvimento de aplicações web.
- **Blade**: Motor de templates do Laravel.
- **Composer**: Gerenciador de dependências PHP.
- **Node** Ambiente de execução.


## 🚀 Como Rodar o Projeto Laravel

1. **Clonar o Repositório**

   ```bash
   git clone https://github.com/GustavoBrendon/WebII.git
   cd WebII
   ```

2. **Instalar Dependências**

   ```bash
   composer install
   ```

3. **Configurar o Ambiente**

   Copie o arquivo `.env.example` para `.env` e configure as variáveis de ambiente conforme necessário.

   ```bash
   cp .env.example .env
   ```

4. **Gerar a Chave de Aplicação**

   ```bash
   php artisan key:generate
   ```

5. **Executar as Migrações**

   ```bash
   php artisan migrate
   ```

6. **Iniciar o Servidor de Desenvolvimento**

   ```bash
   php artisan serve
   ```

   O aplicativo estará disponível em [http://localhost:8000](http://localhost:8000).

## 📂 Estrutura de Diretórios

Directory structure:
└── gustavobrendon-webii/
    ├── README.md
    ├── base.sql
    ├── Atividade 01/
    │   ├── banco.sql
    │   ├── composer.json
    │   ├── composer.lock
    │   ├── index.php
    │   ├── .htaccess
    │   └── src/
    │       ├── conect/
    │       │   └── Conexao.php
    │       ├── controle/
    │       │   └── ControleCliente.php
    │       └── modelo/
    │           └── Cliente.php
    ├── Composer/
    │   ├── composer.json
    │   ├── composer.lock
    │   ├── index.php
    │   ├── css/
    │   │   └── style.css
    │   ├── img/
    │   └── js/
    │       ├── script.js
    │       └── dist/
    │           └── script.dev.js
    ├── Laravel/
    │   ├── README.md
    │   ├── artisan
    │   ├── composer.json
    │   ├── composer.lock
    │   ├── package-lock.json
    │   ├── package.json
    │   ├── phpunit.xml
    │   ├── vite.config.js
    │   ├── .editorconfig
    │   ├── .env.example
    │   ├── .gitattributes
    │   ├── .gitignore
    │   ├── app/
    │   │   ├── Console/
    │   │   │   └── Kernel.php
    │   │   ├── Exceptions/
    │   │   │   └── Handler.php
    │   │   ├── Http/
    │   │   │   ├── Kernel.php
    │   │   │   ├── Controllers/
    │   │   │   │   ├── CarroController.php
    │   │   │   │   ├── Controller.php
    │   │   │   │   └── LoginController.php
    │   │   │   └── Middleware/
    │   │   │       ├── Authenticate.php
    │   │   │       ├── EncryptCookies.php
    │   │   │       ├── PreventRequestsDuringMaintenance.php
    │   │   │       ├── RedirectIfAuthenticated.php
    │   │   │       ├── TrimStrings.php
    │   │   │       ├── TrustHosts.php
    │   │   │       ├── TrustProxies.php
    │   │   │       ├── ValidateSignature.php
    │   │   │       └── VerifyCsrfToken.php
    │   │   ├── Models/
    │   │   │   ├── Carro.php
    │   │   │   └── User.php
    │   │   └── Providers/
    │   │       ├── AppServiceProvider.php
    │   │       ├── AuthServiceProvider.php
    │   │       ├── BroadcastServiceProvider.php
    │   │       ├── EventServiceProvider.php
    │   │       └── RouteServiceProvider.php
    │   ├── bootstrap/
    │   │   ├── app.php
    │   │   └── cache/
    │   │       └── .gitignore
    │   ├── config/
    │   │   ├── app.php
    │   │   ├── auth.php
    │   │   ├── broadcasting.php
    │   │   ├── cache.php
    │   │   ├── cors.php
    │   │   ├── database.php
    │   │   ├── filesystems.php
    │   │   ├── hashing.php
    │   │   ├── logging.php
    │   │   ├── mail.php
    │   │   ├── queue.php
    │   │   ├── sanctum.php
    │   │   ├── services.php
    │   │   ├── session.php
    │   │   └── view.php
    │   ├── database/
    │   │   ├── .gitignore
    │   │   ├── factories/
    │   │   │   └── UserFactory.php
    │   │   ├── migrations/
    │   │   │   ├── 20143_10_12_000000_create_users_table.php
    │   │   │   ├── 2014_10_12_100000_create_password_reset_tokens_table.php
    │   │   │   ├── 2019_08_19_000000_create_failed_jobs_table.php
    │   │   │   ├── 2019_12_14_000001_create_personal_access_tokens_table.php
    │   │   │   └── 2025_04_30_130247_create_carros_table.php
    │   │   └── seeders/
    │   │       └── DatabaseSeeder.php
    │   ├── public/
    │   │   ├── index.php
    │   │   ├── robots.txt
    │   │   ├── .htaccess
    │   │   └── css/
    │   │       └── estilo.css
    │   ├── resources/
    │   │   ├── css/
    │   │   │   └── app.css
    │   │   ├── js/
    │   │   │   ├── app.js
    │   │   │   └── bootstrap.js
    │   │   └── views/
    │   │       ├── index.blade.php
    │   │       ├── welcome.blade.php
    │   │       ├── autenticacao/
    │   │       │   └── login.blade.php
    │   │       ├── carros/
    │   │       │   ├── form.blade.php
    │   │       │   └── lista.blade.php
    │   │       └── components/
    │   │           ├── layout.blade.php
    │   │           └── menu.blade.php
    │   ├── routes/
    │   │   ├── api.php
    │   │   ├── channels.php
    │   │   ├── console.php
    │   │   └── web.php
    │   ├── storage/
    │   │   ├── app/
    │   │   │   ├── .gitignore
    │   │   │   └── public/
    │   │   │       └── .gitignore
    │   │   ├── framework/
    │   │   │   ├── _maintenance.php
    │   │   │   ├── .gitignore
    │   │   │   ├── cache/
    │   │   │   │   ├── .gitignore
    │   │   │   │   └── data/
    │   │   │   │       └── .gitignore
    │   │   │   ├── sessions/
    │   │   │   │   └── .gitignore
    │   │   │   ├── testing/
    │   │   │   │   └── .gitignore
    │   │   │   └── views/
    │   │   │       └── .gitignore
    │   │   └── logs/
    │   │       └── .gitignore
    │   └── tests/
    │       ├── CreatesApplication.php
    │       ├── TestCase.php
    │       ├── Feature/
    │       │   └── ExampleTest.php
    │       └── Unit/
    │           └── ExampleTest.php
    ├── namespace-autoload/
    │   ├── composer.json
    │   ├── composer.lock
    │   ├── index.php
    │   ├── .htaccess
    │   └── src/
    │       ├── conexao/
    │       │   └── Conexao.php
    │       ├── controle/
    │       │   └── ControleCliente.php
    │       └── modelo/
    │           └── Cliente.php
    └── Node/
        ├── app.js
        ├── funcoes.js
        ├── package.json
        └── 23-05-25-projeto-node/
            ├── app.js
            ├── package-lock.json
            ├── package.json
            ├── controllers/
            │   └── film_controller.js
            ├── database/
            │   └── mysql.js
            ├── module/
            │   └── film.js
            └── routes/
                └── film_router.js


## ⚠️ Observações

- Os projetos foram desenvolvidos como parte de atividades acadêmicas.
