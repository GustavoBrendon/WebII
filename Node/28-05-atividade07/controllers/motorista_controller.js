import Motorista from "../module/Motorista.js";
import Carro from "../module/carros.js";

async function createMotorista(req, res) {
  const motorista = await Motorista.create({
    nome: req.body.nome,
    cnh: req.body.cnh,
  });
  res.json(motorista);
}

async function listMotoristas(req, res) {
  try {
    const list = await Motorista.findAll({ include: Carro });
    res.json(list);
  } catch (error) {
    console.error('Erro ao listar motoristas:', error);
    res.status(500).json({ mensagem: 'Erro ao listar motoristas', erro: error.message });
  }
}


async function editMotorista(req, res) {
  const motorista = await Motorista.findOne({ where: { id: req.body.id } });
  motorista.nome = req.body.nome;
  motorista.cnh = req.body.cnh;
  await motorista.save();
  res.json({ mensage: "Registro alterado" });
}

async function deleteMotorista(req, res) {
  const motorista = await Motorista.findOne({ where: { id: req.body.id } });
  await motorista.destroy();
  res.json({ mensage: "Registro removido." });
}

export {
  createMotorista,
  listMotoristas,
  editMotorista,
  deleteMotorista
};
