
const express = require ('express');
const convidados = require('./controladores/convidados');






const rotas = express();

rotas.get('/convidados', convidados.listaDeConvidados);
rotas.get('/convidados/:nome', convidados.procurarConvidado);
rotas.post('/convidados',convidados.adicionarConvidado);
rotas.delete('/convidados/:nome', convidados.excluirConvidado);












module.exports = rotas;