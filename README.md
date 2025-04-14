# API de Autenticação com JWT e CRUD de Produtos

Este projeto é uma API RESTful desenvolvida com **Node.js**, **Express**, e **MySQL**. A aplicação permite o cadastro, consulta e manipulação de **produtos** e **categorias**, além de realizar o controle de pedidos conforme as quantidades de produtos. A API inclui autenticação via **JWT** para garantir a segurança de rotas específicas.

---

## Funcionalidades Implementadas

### Produtos e Categorias
- **Cadastro de Produtos**: Cada produto possui um código (`cod_produto`), nome (`nome_produto`) e quantidade (`qtde_produto`).
- **Cadastro de Categorias**: Cada produto pertence a uma categoria com um `id_categoria` e `nome_categoria`.
- **Consulta de Produtos**: Filtragem por categoria e por quantidade de pedido.

### Lógica de Pedidos
- Quando a quantidade de um produto for **menor ou igual a 3**, o sistema automaticamente cria um **pedido** com **quantidade de 4**.
- Quando a quantidade de um produto estiver **entre 4 e 6**, a quantidade registrada no pedido será **3**.
- Se a quantidade for **maior que 6**, o pedido não é registrado.

### Autenticação com JWT
- **Login de Usuário**: O sistema permite o login com **usuário e senha**, retornando um **token JWT** para a autenticação de rotas protegidas.
- **Proteção de Rotas**: Algumas rotas (como as de CRUD de produtos) exigem a validação do token JWT.

---
## Como Executar 

1. Instale as dependências

npm install

2. Configure as variáveis de ambiente

Crie um arquivo .env na raiz do projeto e adicione as seguintes variáveis:

DB_HOST=localhost
DB_USER=root
DB_PASSWORD=sua_senha
DB_NAME=nome_do_banco
JWT_SECRET=sua_chave_jwt
Configure o banco de dados

Crie o banco de dados manualmente ou execute o script banco.sql para criar as tabelas necessárias.

4. Execute a aplicação

npm start

## Rotas principais
1. POST /auth/login
Autentica um usuário e gera um token JWT.

Body (JSON):
```
{
  "username": "admin",
  "password": "senha123"
}
```
Resposta (JSON):

```
{
  "token": "seu.jwt.token.aqui"
}
```

2.  POST /products
Cria um novo produto.

Body (JSON):

```
{
  "cod_produto": "001",
  "nome_produto": "Produto A",
  "qtde_produto": 2,
  "id_categoria": 1
}
```
3. GET /products
Lista todos os produtos, com filtros opcionais de categoria e quantidade de pedido.

Query (opcional):

categoria=<id_categoria>

qtde_pedido=<quantidade>

4. POST /orders
Cria um pedido baseado na quantidade de produtos.

Body (JSON):

```
{
  "cod_produto": "001",
  "qtde_pedido": 4
}
```
5. GET /orders
Lista todos os pedidos realizados.

## Observações
O banco foi criado com a query do banco.sql, ainda não há uma criação de banco automática.

A aplicação utiliza JWT para autenticar e proteger rotas.

Sequelize é utilizado para gerenciar o banco de dados MySQL.

A lógica de pedidos é automatizada conforme as quantidades de produtos cadastrados.

Pedidos são criados automaticamente quando a quantidade de um produto é inferior ou igual a 3 (4 pedidos) ou entre 4 e 6 (3 pedidos).
