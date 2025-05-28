import Carro from "../module/carros.js";

async function createCarro(req, res) {
  const carro = await Carro.create({
    marca: req.body.marca,
    modelo: req.body.modelo,
    fabricante: req.body.fabricante,
    preco: req.body.preco,
    ano: req.body.ano,
  });
  res.json(carro);
}

async function listCarro(req, res) {
  const list = await Carro.findAll();
  res.json(list);
}

async function editCarro(req, res) {
    const carro = await Carro.findOne({where: {id: req.body.id}});
    carro.marca = req.body.marca;
    carro.modelo = req.body.modelo;
    carro.fabricante = req.body.fabricante;
    carro.preco = req.body.preco;
    carro.ano = req.body.ano;
    if(await carro.save()){
      res.json({mensage: 'Registro alterado.'});
    }else {
      res.json({mensage: 'Erro ao alterar.'});
    }
}

async function deletaCarro(req,res) {
  const carro = await Carro.findOne({where: {id: req.body.id}});
  await carro.destroy();
  res.json({mesage: 'Deletado com sucesso.'})
}

export { createCarro, listCarro, editCarro, deletaCarro};
