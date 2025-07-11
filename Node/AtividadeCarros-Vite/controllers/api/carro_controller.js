import Carro from "../../models/carro.js";
import Motorista from "../../models/motorista.js";
import Acessorio from "../../models/acessorio.js";

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
    MotoristumId: req.body.MotoristaId,
  });
  await carro.addAcessorios(acessorios);
  res.json({message: "Carro Criado."});
}

async function listCarros(req, res) {
  const list =  await Carro.findAll({ include: [Acessorio, Motorista] });
  res.json(list);
}

async function editCarro(req, res) {
  const carro = await Carro.findOne({ where: { id: req.body.id } });
  carro.marca = req.body.marca,
  carro.modelo = req.body.modelo,
  carro.fabricante = req.body.fabricante,
  carro.preco = req.body.preco,
  carro.ano = req.body.ano,
  await carro.save();
  res.json({ message: "Registro alterado" });
}

async function deleteCarro(req, res) {
  const carro = await Carro.findOne({ where: { id: req.body.id } });
  await carro.destroy();
  res.json({ message: "Registro removido." });
}

export { createCarro, listCarros, editCarro, deleteCarro };
