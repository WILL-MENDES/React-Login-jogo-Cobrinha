const express = require('express');
const server = express();
const usuarios = require('./data/usuarios.json')

server.get('/usuario', (req,res) => {
    return res.json(usuarios)
})

server.listen(5173, () => {

console.log("servidor ativo")

});