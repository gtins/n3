import express from "express"; //beleza 
import cors from "cors"; //beleza
import db from "./config/database.js";

import produto_rota from "./routes/produto_routes.js"; //vamos para routes!
import categoria_rota from "./routes/categoria_routes.js";
import pedido_rota from "./routes/pedido_routes.js"
import loginRoutes from "./routes/login_route.js"

import Produto from "./models/produto_model.js";
import Categoria from "./models/categoria_model.js";

const server = express();
server.use(express.json());
server.use(cors());

try {
    await db.authenticate()
    console.log("Conexão com o MySQL estabelecida!")
} catch (error) {
    console.log("Conexão com o MySQL NÃO estabelecida!", error)
}

// Define todas as associações de uma vez
Produto.associate = (models) => {
    Produto.belongsTo(models.Categoria, {
        foreignKey: 'id_categoria',
        as: 'categoria'
    });

    Produto.hasMany(models.Pedido, {
        foreignKey: 'cod_produto',
        as: 'pedidos'
    });
};

Categoria.associate = (models) => {
    Categoria.hasMany(models.Produto, {
        foreignKey: 'id_categoria',
        as: 'produtos'
    });
};

server.use(produto_rota);
server.use(categoria_rota);
server.use(pedido_rota);
server.use(cors({
    exposedHeaders: ['Authorization'],
  }));
server.use(loginRoutes);

server.listen(5000, () => console.log("servidor em execução em http://localhost:5000"));
