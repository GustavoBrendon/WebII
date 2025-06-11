import Motorista from "../../models/motorista.js";
import Carro from "../../models/carro.js";

async function createMotorista(req, res) {
    const motorista = await Motorista.create({
        nome: req.body.nome,
        país: req.body.país,
    });
    res.render('alerts', { title: 'Motoristas', body: 'Motorista Criado.' });
}

async function listMotoristas(req, res) {
    const list = await Motorista.findAll({ include: [Carro], raw: true });
    res.render('motoristas/motoristas', { motoristas: list });
}

async function editMotorista(req, res) {
    const motorista = await Motorista.findOne({ where: { id: req.body.id } });
    res.render('motoristas/motoristas', { action: 'edit', motorista_editing: motorista.dataValues });
}

async function saveMotorista(req, res) {

    const motorista = await Motorista.findOne({ where: { id: req.body.id } });
    motorista.nome = req.body.nome;
    motorista.país = req.body.país;
    await motorista.save();

    res.render('alerts', { title: 'Motoristas', body: 'Motorista Salvo.' });

}

async function deleteMotorista(req, res) {
    const motorista = await Motorista.findOne({ where: { id: req.body.id } });
    await motorista.destroy();
    res.render('alerts', { title: 'Motoristas', body: 'Motorista Deletado.' });
 
}

export { createMotorista, listMotoristas, editMotorista, saveMotorista, deleteMotorista };