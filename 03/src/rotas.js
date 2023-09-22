

const express = require ('express');
const livros = require('./controladores/livros');







const rotas = express();

rotas.get('/livros', livros.listaDeLivros);
 rotas.get('/livros/:id', livros.obterLivros);
// rotas.post('/convidados',convidados.adicionarConvidado);
// rotas.delete('/convidados/:nome', convidados.excluirConvidado);






module.exports = rotas;