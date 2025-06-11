import Carro from "../models/carro.js";
import Motorista from "../models/motorista.js";
import Acessorio from "../models/acessorio.js";

async function createCarro(req, res) {
  const acessorios = [];
  for (let i = 0; i < req.body.acessorios.length; i++) {
    const acessorio = await Acessorio.findByPk(req.body.acessorios[i]);
    acessorios.push(acessorio);
  }
  const carro = await Carro.create({
    marca: req.body.marca,
    modelo: req.body.modelo,
    fabricante: req.body.fabricante,
    preco: req.body.preco,
    ano: req.body.ano,
    MotoristaId: req.body.MotoristaId,
  });
  await carro.addAcessorios(acessorios);
  res.render('alerts', { title: 'Carros', body: 'Carro criado.' });
}

async function listCarros(req, res) {
    const list = await Carro.findAll({ include: [Acessorio, Motorista], raw: true });
    res.render('carros/carros', { carros: list });
}

async function editCarro(req, res) {
    const carro = await Carro.findOne({ where: { id: req.body.id } });
    res.render('carros/carros', { action: 'edit', carro_editing: carro.dataValues });
}

async function saveCarro(req, res) {

    const carro = await Carro.findOne({ where: { id: req.body.id } });

    carro.marca = req.body.marca,
    carro.modelo= req.body.modelo,
    carro.fabricante= req.body.fabricante,
    carro.preco= req.body.preco,
    carro.ano= req.body.ano,
    carro.MotoristaId= req.body.MotoristaId,
    await carro.save();

    res.render('alerts', { title: 'Carros', body: 'Carro Editado.' });

}

async function deleteCarro(req, res) {
    const carro = await Carro.findOne({ where: { id: req.body.id } });
    await carro.destroy();
    res.render('alerts', { title: 'Carros', body: 'Carro deletado.' });
}

export { createCarro, listCarros, editCarro, saveCarro, deleteCarro };
