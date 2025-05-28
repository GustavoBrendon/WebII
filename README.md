
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

## ⚠️ Observações

- Os projetos foram desenvolvidos como parte de atividades acadêmicas.
