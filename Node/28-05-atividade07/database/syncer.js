import sequelize from "./mysql.js";
import Carro from "../module/carros.js";
import Motorista from "../module/Motorista.js";
import Acessorio from "../module/Acessorio.js";


async function syncer() {
  try {
    await sequelize.authenticate();
    Carro.belongsTo(Motorista);
    Motorista.hasMany(Carro);
    Carro.belongsToMany(Acessorio, { through: "Carro_Acessorio" });
    Acessorio.belongsToMany(Carro, { through: "Carro_Acessorio" });
    await sequelize.sync();
  } catch (error) {
    console.log("Erro ao acessar a base de dados:", error);
    return false;
  }
  return true;
}

export default syncer;
