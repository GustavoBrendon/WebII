import { DataTypes } from "sequelize";
import sequelize from "../database/mysql.js";

const Motorista = sequelize.define('Motorista', {
    nome: DataTypes.STRING,
    país: DataTypes.STRING    
});

export default Motorista;