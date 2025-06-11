import Acessorio from "../models/acessorio.js";
import Carro from "../models/carro.js";

async function createAcessorio(req, res) {
    const acessorio = await Acessorio.create({
        nome: req.body.nome,
        utilidade: req.body.utilidade
    });
    res.render('alerts', { title: 'Acessorios', body: 'Acessorio criado.' });
}

async function listAcessorios(req, res) {
    const list = await Acessorio.findAll({ include: [Actor, Director], raw: true });
    res.render('acessorios/acessorios', { acessorios: list });
}

async function editAcessorio(req, res) {
    const acessorio = await Acessorio.findOne({ where: { id: req.body.id } });
    res.render('acessorios/acessorios', { action: 'edit', acessorio_editing: acessorio.dataValues });
}

async function saveAcessorio(req, res) {

    const acessorio = await Acessorio.findOne({ where: { id: req.body.id } });
    acessorio.nome = req.body.nome;
    acessorio.utilidade = req.body.utilidade;
    await acessorio.save();

    res.render('alerts', { title: 'Acessorios', body: 'Acessorio Salvo.' });

}

async function deleteAcessorio(req, res) {
    const acessorio = await Acessorio.findOne({ where: { id: req.body.id } });
    await acessorio.destroy();
    res.render('alerts', { title: 'Acessorios', body: 'Acessorio deletado.' });
}

export { createAcessorio, listAcessorios, editAcessorio, deleteAcessorio };