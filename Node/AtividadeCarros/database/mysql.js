import { Sequelize } from "sequelize";

// const sequelize = new Sequelize({
//     dialect: 'mysql',
//     host: 'localhost',
//     port: '3306',
//     username: 'root',
//     password: 'root',
//     database: 'atividade_node'
// });

const sequelize = new Sequelize('postgresql://projeto_carros_user:zPzmM99Y8lfMKvUPzAN37AK99Nr0JRVh@dpg-d1is273ipnbc7382v310-a/projeto_carros_db');


export default sequelize;