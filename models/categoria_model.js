    import { Sequelize } from "sequelize"; //beleza
    import db from "../config/database.js";

    const {DataTypes} = Sequelize;

    const Categoria = db.define('categoria', {
        id_categoria: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        nome_categoria: {
            type: Sequelize.STRING(255)
        },
    }, {  
        timestamps: false,
        freezeTableName: true 
    })
    export default Categoria;

