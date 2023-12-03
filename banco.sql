-- O banco roda via Xampp. Essa é a query para a sua criação.
-- Categoria
CREATE TABLE categoria (
  id_categoria INT AUTO_INCREMENT PRIMARY KEY,
  nome_categoria VARCHAR(255)
);

-- Produto
CREATE TABLE produto (
  cod_produto INT AUTO_INCREMENT PRIMARY KEY,
  nome_produto VARCHAR(255),
  qtde_produto INT,
  id_categoria INT,
  FOREIGN KEY (id_categoria) REFERENCES categoria(id_categoria)
);

-- Pedido
CREATE TABLE pedido (
  num_pedido INT AUTO_INCREMENT PRIMARY KEY,
  cod_produto INT,
  qtde_pedido INT,
  FOREIGN KEY (cod_produto) REFERENCES produto(cod_produto)
);
