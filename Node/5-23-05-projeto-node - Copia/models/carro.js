import { DataTypes } from "sequelize";
import sequelize from "../database/mysql.js";
import Motorista from "./motorista.js";
import Acessorio from "./acessorio.js";

const Carro = sequelize.define('Carro', {
    marca: DataTypes.STRING,
    modelo: DataTypes.STRING,
    fabricante: DataTypes.STRING,
    preco: DataTypes.INTEGER,
    ano: DataTypes.INTEGER,
    MotoristaId: DataTypes.INTEGER,
});

export default Carro;