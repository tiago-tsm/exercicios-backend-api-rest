let { livros } = require("../bancodedados");


const listaDeLivros = (req, res) => {
    return res.status(200).json(livros);
};


const obterLivros = (req, res ) => {

    const { id } = req.params;


    const livro = livros.find((livro) =>{
        return livro.id === Number(id);
    });

    if(!livro){
        return res.status(404).json({mensagem: "Livro não Encontrado"});
    }

    return res.status(200).json(livro);

};








module.exports = {
    listaDeLivros,
    obterLivros
    
};
