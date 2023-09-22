const express = require ('express');
const alunos = require('./controladores/alunos');





const rotas = express();

rotas.get('/alunos', alunos.listarAlunos);
rotas.post('/alunos', alunos.cadastrarAlunos);
rotas.delete('/alunos/:id', alunos.excluirAluno)











module.exports = rotas;