import { Sequelize } from "sequelize"; //beleza
import db from "../config/database.js";
import Produto from "./produto_model.js";

const {DataTypes} = Sequelize

const Pedido = db.define('pedido', {
    num_pedido: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    cod_produto: {
        type: DataTypes.INTEGER,
        references: {
            model: Produto, // referência ao modelo Produto
            key: 'cod_produto' // chave primária na tabela produto
        }
    },
    qtde_pedido: {
        type: DataTypes.INTEGER,
    }
   }, {  
    timestamps: false,
    freezeTableName: true 
})
export default Pedido

