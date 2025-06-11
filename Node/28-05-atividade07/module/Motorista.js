import { DataTypes } from "sequelize";
import sequelize from "../database/mysql.js"; 

const Motorista = sequelize.define("Motorista", {
  nome: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  cnh: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
});

export default Motorista;
