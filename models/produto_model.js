import { Sequelize } from "sequelize"; //beleza
import db from "../config/database.js";
import Categoria from "./categoria_model.js"; // importei o modelo da Categoria

const {DataTypes} = Sequelize

const Produto = db.define('produto', { //nome da tabela do banco
    cod_produto: {
        type: DataTypes.INTEGER,
        primaryKey: true
    },
    nome_produto: {
        type: Sequelize.STRING(255)
    },
    qtde_produto: {
        type: DataTypes.INTEGER,
    },
    id_categoria: {
        type: DataTypes.INTEGER,
        references: {
            model: Categoria, // referência ao modelo Categoria
            key: 'id_categoria' // chave primária na tabela Categoria
        }
    },
   }, {  
    timestamps: false,
    freezeTableName: true 
})
export default Produto

