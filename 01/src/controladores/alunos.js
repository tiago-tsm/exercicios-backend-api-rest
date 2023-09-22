
let {alunos, identificadorAluno} = require('../bancodedados');

const listarAlunos  = (req, res) => {
    return res.status(200).json(alunos);

}


const cadastrarAlunos = (req, res) => {
    const { nome, sobrenome, idade, curso } = req.body;

    if (!nome) {
        return res.status(400).json({ mensagem: 'O nome é obrigatório' });
    }

    if (!sobrenome) {
        return res.status(400).json({ mensagem: 'O sobrenome é obrigatório' });
    }

    if (!idade) {
        return res.status(400).json({ mensagem: 'A idade  é obrigatório' });
    }

    if (!curso) {
        return res.status(400).json({ mensagem: 'O curso é obrigatório' });
    }

    if (idade < 18 ) {
        return res.status(400).json({ mensagem: 'Menor de 18 anos não pode' });
    }

    const aluno = {
        id: identificadorAluno++,
        nome,
        sobrenome,
        idade,
        curso
    }

    alunos.push(aluno);

    return res.status(201).json(alunos);
}




const excluirAluno = (req, res) => {

    const { id } = req.params;

    const aluno = alunos.find((aluno) => {
        return aluno.id === Number(id);
    });

    if (!aluno) {
        return res.status(404).json({ mensagem: 'O aluno não existe.' });
    }

    alunos = alunos.filter((aluno) => {
        return aluno.id !== Number(id);
    });

    return res.status(204).send();

}





module.exports = {
    listarAlunos,
    cadastrarAlunos,
    excluirAluno

}