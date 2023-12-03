import { Sequelize } from "sequelize"; //beleza 

const db = new Sequelize('n3', 'root', '', {
    host: 'localhost',
    dialect: 'mysql'
})
export default db