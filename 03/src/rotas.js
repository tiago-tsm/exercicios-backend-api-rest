

const express = require ('express');
const livros = require('./controladores/livros');







const rotas = express();

rotas.get('/livros', livros.listaDeLivros);
 rotas.get('/livros/:id', livros.obterLivros);
 rotas.post('/livros',livros.cadastrarLivros);
 rotas.put('/livros/:id', livros.atualizarUmLivro);
 rotas.patch('/livros/:id/status', livros.atualizarStatusDoLivro);
// rotas.delete('/convidados/:nome', convidados.excluirConvidado);






module.exports = rotas;