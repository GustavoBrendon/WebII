import { Sequelize } from "sequelize";

const sequelize = new Sequelize({
    dialect: 'mysql',
    host: '127.0.0.1',
    port: '3306',
    username: 'root',
    password: 'root',
    database: 'projeto_node'
});

sequelize.sync();

export default sequelize;