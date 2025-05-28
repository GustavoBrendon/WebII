import { DataTypes } from "sequelize";
import sequelize from "../database/mysql.js";

const Carro = sequelize.define('Carro', {
    marca: DataTypes.STRING,
    modelo: DataTypes.STRING,
    fabricante: DataTypes.STRING,
    preco: DataTypes.INTEGER,
    ano: DataTypes.INTEGER
});

export default Carro;