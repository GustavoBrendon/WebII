import { DataTypes } from "sequelize";
import sequelize from "../database/mysql.js";

const Acessorio = sequelize.define('Acessorio', {
    nome: DataTypes.STRING,
    utilidade: DataTypes.STRING    
});

export default Acessorio;