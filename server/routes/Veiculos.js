const express = require('express');

const rotas = express.Router();

rotas.post('/', (req, res) => {

novoVeiculo = {
    nome: req.body.nome,
    fabricante: req.body.fabricante,
    anomodelo: req.body.anomodelo,
    combustivel: req.body.combustivel,
    cor: req.body.cor,
    preco: req.body.preco
}

  res.status(201).send({
    mensagem: 'Veículo cadastrado com sucesso.',
    veiculo: novoVeiculo
  });
});


rotas.put('/', (req, res) => {

const atualizaVeiculo = {
}

  res.status(200).send({
    mensagem: 'dados do veiculos foi atualizado',
    veiculo: atualizaVeiculo
  });
});


rotas.delete('/:idveiculo', (req, res) => {

const idVeiculo = req.params.idveiculo;

  res.status(202).send({
    mensagem: `Veículo com o id de: ${idVeiculo} foi excluído com sucesso.`
  });
});

module.exports = rotas;