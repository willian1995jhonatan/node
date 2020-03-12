// console.log("ola mundo!!")

//criar a indentidade do projeto ---> npm init
//observar que foi criado o arquivo package.json (js object notation) que contem informações do projeto.
//instalar o framework de node -> express
//executar o comando: npm install express

const http = require('http')
const port = 3000
const ip = 'localhost'

const server = http.createServer((req, res) => {
  console.log('Recebendo uma request!')
  res.end('<h1>Aqui fica o que vamos enviar para o navegador como resposta!</h1>')
})

server.listen(port, ip, () => {
  console.log(`Servidor rodando em http://${ip}:${port}`)
  console.log('Para derrubar o servidor: ctrl + c');
})