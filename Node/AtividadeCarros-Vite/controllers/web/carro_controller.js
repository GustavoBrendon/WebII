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
  res.render("alerts", { title: "Carros", body: "Carro criado." });
}

async function listCarros(req, res) {
  const list = await Carro.findAll({ include: [Acessorio, Motorista] });
  const list_processed = list.map((carro) => {
    return carro.toJSON();
  });
  const motorista = await Motorista.findAll({ raw: true });
  const acessorios = await Acessorio.findAll({ raw: true });
  res.render("carros/carros", {
    carros: list_processed,
    motoristas: motorista,
    acessorios: acessorios
  });
}

async function editCarro(req, res) {
  const carro = await Carro.findOne({ where: { id: req.body.id }, include: Acessorio });
  const carro_editing = carro.toJSON();
  const motorista = await Motorista.findAll({ raw: true });
  const acessorios = await Acessorio.findAll({ raw: true });
  carro_editing.acessorios = carro_editing.Acessorios.map((ac)=>{return ac.id;});
  res.render("carros/carros", {
    action: "edit",
    carro_editing: carro_editing,
    motoristas: motorista, 
    acessorios: acessorios
  });
}

async function saveCarro(req, res) {
  const acessorios = [];
  for (let i = 0; i < req.body.acessorios.length; i++) {
    const acessorio = await Acessorio.findByPk(req.body.acessorios[i]);
    acessorios.push(acessorio);
  }
  const carro = await Carro.findOne({ where: { id: req.body.id } });
    (carro.marca = req.body.marca),
    (carro.modelo = req.body.modelo),
    (carro.fabricante = req.body.fabricante),
    (carro.preco = req.body.preco),
    (carro.ano = req.body.ano),
    (carro.MotoristumId = req.body.MotoristaId),
    await carro.save();
    await carro.setAcessorios(acessorios);
  res.render("alerts", { title: "Carros", body: "Carro Editado." });
}

async function deleteCarro(req, res) {
  const carro = await Carro.findOne({ where: { id: req.body.id } });
  await carro.destroy();
  res.render("alerts", { title: "Carros", body: "Carro deletado." });
}

export { createCarro, listCarros, editCarro, saveCarro, deleteCarro };
