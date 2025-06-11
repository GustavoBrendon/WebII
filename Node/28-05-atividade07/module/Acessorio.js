import { DataTypes } from "sequelize";
import sequelize from "../database/mysql.js";

const Acessorio = sequelize.define("Acessorio", {
  nome: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

export default Acessorio;
