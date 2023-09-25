let { livros, identificadorLivro } = require("../bancodedados");


const listaDeLivros = (req, res) => {
    return res.status(200).json(livros);
};


const obterLivros = (req, res ) => {

    const { id } = req.params;
    const { status } = req.body;
        


    const livro = livros.find((livro) =>{
        return livro.id === Number(id);
    
    });

    if (livro.status === false) {
        return res.status(200).json({ mensagem: "Livro alugado" });
    }

    if(!livro){
        return res.status(404).json({mensagem: "Livro não Encontrado"});
    }

    
    
   
    return res.status(200).json(livro);


    

};


const cadastrarLivros = (req, res) =>{
    const { titulo, autor, ano ,numPaginas } = req.body;


if (!titulo) {
    return res.status(400).json({ mensagem: 'O titulo é obrigatório' });
}

if (!autor) {

    return res.status(400).json ({ mensagem: 'O autor é obrigatorio'})    
}
if (!ano) {

    return res.status(400).json ({ mensagem: 'O ano é obrigatorio'})    
}
if (!numPaginas) {

    return res.status(400).json ({ mensagem: 'O numero de paginas  é obrigatorio'})    
}

const livro = {
    id: identificadorLivro++,
    titulo,
    autor,
    ano,
    numPaginas
}

livros.push(livro);
return res.status(201).json(livros)

}


const atualizarUmLivro = (req, res) =>{
    const { id } = req.params;
    const {titulo, autor, ano ,numPaginas } = req.body;

    if (!titulo) {
        return res.status(400).json({ mensagem: 'O titulo é obrigatório' });
    }
    
    if (!autor) {
    
        return res.status(400).json ({ mensagem: 'O autor é obrigatorio'});    
    }
    if (!ano) {
    
        return res.status(400).json ({ mensagem: 'O ano é obrigatorio'});   
    }
    if (!numPaginas) {
    
        return res.status(400).json ({ mensagem: 'O numero de paginas  é obrigatorio'});    
    }

    const livro = livros.find((livro) =>{
        return livro.id === Number(id);
    });

    if (!livro) {
        return res.status(404).json({ mensagem: 'Livro  não encontrado.' });
    }

    

    livro.titulo = titulo;
    livro.autor = autor;
    livro.ano = ano;
    livro.numPaginas = numPaginas;

    res.json({ mensagem: "Livro substituido" });

 

}

const atualizarStatusDoLivro =  (req, res) =>{
    const {id} = req.params;
    const {status} = req.body;

    const livro = livros.find((livro) =>{
        return livro.id === Number(id);
    });


   

    if (!livro) {
        return res.status(404).json({ mensagem: 'Livro  não encontrado.' });
    }

  



    livro.status = status;
    return res.status(200).send()


}

const excluirLivro = (req, res) => {
    const { id } = req.params;

    const livro = livros.find((livro) => {
        return livro.id === Number(id);
    });

    if (!livro) {
        return res.status(404).json({ mensagem: 'O livro não existe.' });
    }

    livros = livros.filter((livro) => {
        return livro.id !== Number(id);
    });

    res.json({ mensagem: "Livro excluido" });
}






module.exports = {
    listaDeLivros,
    obterLivros,
    cadastrarLivros,
    atualizarUmLivro,
    atualizarStatusDoLivro,
    excluirLivro
    
};




