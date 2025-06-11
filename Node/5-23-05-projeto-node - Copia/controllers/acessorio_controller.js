import Acessorio from "../models/acessorio.js";
import Carro from "../models/carro.js";

async function createAcessorio(req, res) {
    const acessorio = await Acessorio.create({
        nome: req.body.nome,
        utilidade: req.body.utilidade
    });
    res.json(acessorio);
}

async function listAcessorios(req, res) {
    const list = await Acessorio.findAll({include: Carro});
    res.json(list);
}

async function editAcessorio(req, res) {
    const acessorio = await Acessorio.findOne({ where: { id: req.body.id } });
    acessorio.nome = req.body.nome,
    acessorio.utilidade = req.body.utilidade
    await acessorio.save();
    res.json({ mensage: 'Registro alterado' });
}

async function deleteAcessorio(req, res) {
    const acessorio = await Acessorio.findOne({ where: { id: req.body.id } });
    await acessorio.destroy();
    res.json({mensage: 'Registro removido.'});
}

export { createAcessorio, listAcessorios, editAcessorio, deleteAcessorio };