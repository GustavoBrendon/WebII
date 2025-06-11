import Carro from "../module/carros.js";
import Motorista from "../module/Motorista.js";
import Acessorio from "../module/Acessorio.js";

async function createCarro(req, res) {
  const acessorios = [];

  for (let i = 0; i < req.body.acessorios.length; i++) {
    const acessorio = await Acessorio.findByPk(req.body.acessorios[i]);
    if (acessorio) {
      acessorios.push(acessorio);
    }
  }

  const carro = await Carro.create({
    marca: req.body.marca,
    modelo: req.body.modelo,
    fabricante: req.body.fabricante,
    preco: req.body.preco,
    ano: req.body.ano,
    AcessorioId: req.body.AcessorioId
  });

  await carro.addAcessorios(acessorios);
  res.json(carro);
}

async function listCarro(req, res) {
  const list = await Carro.findAll({ include: Acessorio });
  res.json(list);
}

async function editCarro(req, res) {
  const carro = await Carro.findOne({ where: { id: req.body.id } });
  if (!carro) {
    return res.status(404).json({ mensagem: "Carro não encontrado." });
  }

  carro.marca = req.body.marca;
  carro.modelo = req.body.modelo;
  carro.fabricante = req.body.fabricante;
  carro.preco = req.body.preco;
  carro.ano = req.body.ano;
  carro.MotoristaId = req.body.MotoristaId;
  await carro.save();

  const novosAcessorios = [];
  for (let i = 0; i < req.body.acessorios.length; i++) {
    const acessorio = await Acessorio.findByPk(req.body.acessorios[i]);
    if (acessorio) {
      novosAcessorios.push(acessorio);
    }
  }
  await carro.setAcessorios(novosAcessorios);

  res.json({ mensagem: "Registro alterado." });
}

async function deleteCarro(req, res) {
  const carro = await Carro.findOne({ where: { id: req.body.id } });
  if (!carro) {
    return res.status(404).json({ mensagem: "Carro não encontrado." });
  }
  await carro.destroy();
  res.json({ mensagem: "Deletado com sucesso." });
}

export { createCarro, listCarro, editCarro, deleteCarro };
