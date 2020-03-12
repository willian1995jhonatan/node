let funcoes = require ("./js/funcoes")
var n1,n2


//rota principal
//arrow function
let express = require('express')
let app = express()
let port = 3000
app.get('/', (req, res) => {
  res.send('<h1>Calculador de mundial do palmeiras </h1>'+"Soma = " +funcoes.soma(n1+n2))
})
app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`)
  console.log('Para derrubar o servidor: ctrl + c');
})

respostaSoma = funcoes.soma()
console.log(respostaSoma)

// respostaSub = funcoes.subtrai()
// console.log(respostaSub)

// respostaMult = funcoes.multiplicacao()
// console.log(respostaMult)

// respostaDiv = funcoes.divisao()
// console.log(respostaDiv)

// const express = require("express"); // importando o módulo express
// const app = express(); // criando uma instancia do express
// let port=3000