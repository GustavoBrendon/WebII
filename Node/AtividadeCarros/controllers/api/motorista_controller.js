import Motorista from "../models/motorista.js";
import Carro from "../models/carro.js";

async function createMotorista(req, res) {
    const motorista = await Motorista.create({
        nome: req.body.nome,
        país: req.body.país
    });
    res.json(motorista);
}

async function listMotoristas(req, res) {
    const list = await Motorista.findAll({include: Carro});
    res.json(list);
}

async function editMotorista(req, res) {
    const motorista = await Motorista.findOne({ where: { id: req.body.id } });
    motorista.nome = req.body.nome,
    motorista.país = req.body.país
    await motorista.save();
    res.json({ mensage: 'Registro alterado' });
}

async function deleteMotorista(req, res) {
    const motorista = await Motorista.findOne({ where: { id: req.body.id } });
    await motorista.destroy();
    res.json({mensage: 'Registro removido.'});
}

export { createMotorista, listMotoristas, editMotorista, deleteMotorista };