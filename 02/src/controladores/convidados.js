let { convidados } = require("../bancodedados");

const listaDeConvidados = (req, res) => {
    return res.status(200).json(convidados);
};


const procurarConvidado = (req, res) => {
    const { nome } = req.params;

    const convidado = convidados.find((convidado) => {
        return convidado.nome === nome;
    });

    if (!convidado) {
        return res.status(404).json({ mensagem: "Convidado não encontrado." });
    }

    return res.status(200).json(convidado);
};


const adicionarConvidado = (req, res) => {
    const { nome } = req.body;

    if (!nome) {
        return res.status(400).json({ mensagem: "O nome é obrigatório" });
    }
    const nomeExiste = convidados.some((convidado) => convidado.nome === nome);

    if (nomeExiste) {
        res.status(400).json({
          mensagem:
            "O nome do convidado a ser adicionado já existe na lista. Caso queira adicionar outro convidado de mesmo nome, favor fornecer o sobrenome também.",
        });
    }
    res.json({ mensagem: "Convidado adicionado." });

    const convidado = { nome };
    convidados.push(convidado);
    return res.json({ mensagem: "Convidado adicionado." });
};




const excluirConvidado = (req, res) => {

    const { nome } = req.params;

    const convidado = convidados.find((convidado) => {
        return convidado.nome === nome;
    });

    if (!convidado) {
        return res.status(404).json({ mensagem: "O nome do convidado a ser removido não existe na lista. Nenhum convidado foi removido." });
    }

    convidados = convidados.filter((convidado) => {
        return convidado.nome !== nome;

    });

    return res.status(200).json({ mensagem: "Convidado Excluido" });



}





module.exports = {
    listaDeConvidados,
    procurarConvidado,
    adicionarConvidado,
    excluirConvidado
};
