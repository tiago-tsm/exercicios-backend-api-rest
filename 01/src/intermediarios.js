const  validarSenha = (req, res, next) =>{
const { senha } = req.query;


if (!senha) {
    return res.send('Senha não informada');
    
}
if (senha !== 'cubos123') {
    return res.send('Senha incorreta');
    
}

next();

}

module.exports = {
    validarSenha
}