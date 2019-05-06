const mongoose = require('mongoose');

const conexao = mongoose.connect('mongodb://localhost:27017/teste');

mongoose.connection.on('connected', ()=> {
  console.log('=====Conexão estabelecida com sucesso=====');
 });
 mongoose.connection.on('error', (err)=> {
  console.log('=====Ocorreu um erro: ' + err);
 });



module.exports = conexao