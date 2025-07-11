import sequelize from "./mysql.js"
import Motorista from "../models/motorista.js";
import Acessorio from "../models/acessorio.js";
import Carro from "../models/carro.js";

async function syncer(){
    try {
        await sequelize.authenticate(); 
        Carro.sync();
        Carro.belongsTo(Motorista);
        Motorista.hasMany(Carro);
        Carro.belongsToMany(Acessorio, {through: 'Carro_acessorio'});
        Acessorio.belongsToMany(Carro, {through: 'Carro_acessorio'});
        await sequelize.sync();
    } catch(error) {
        console.log('Erro ao acessar a base da dados.');
        return false;
    }
    return true;
}



export default syncer;