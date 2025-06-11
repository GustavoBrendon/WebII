import sequelize from "./mysql.js"
import Director from "../models/director.js";
import Actor from "../models/actor.js";
import Film from "../models/film.js";

async function syncer(){
    try {
        await sequelize.authenticate(); 
        Film.sync();
        Film.belongsTo(Director);
        Director.hasMany(Film);
        Film.belongsToMany(Actor, {through: 'Film_Actor'});
        Actor.belongsToMany(Film, {through: 'Film_Actor'});
        await sequelize.sync();
    } catch(error) {
        console.log('Erro ao acessar a base da dados.');
        return false;
    }
    return true;
}



export default syncer;