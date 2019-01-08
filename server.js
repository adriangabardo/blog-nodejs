const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const mongoose = require('mongoose')

//importando nosso controlador dos posts
const posts = require('./controllers/posts.controller.js')

//importando as configurações do MongoDB
const dbConfig = require('./config/database.config.js')

//passando dados nos formatos application/x-www-form-urlencoded E application/json
//(DEFINE O TIPO DOS DADOS SENDO MANDADOS)
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())


//CONECTANDO O BANCO DE DADOS MONGOOSE
mongoose.connect(dbConfig.url, {
    useNewUrlParser: true
}).then(() => {
    console.log("Conectado ao banco de dados com sucesso")
}).catch(err => {
    console.log('Não foi possivel nos conectar. Saindo...', err)
    process.exit()
})

// Define o destino de onde os arquivos estão vindo (incluindo index.html)
app.use(express.static('public'))
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });

app.get('/', (req, res) =>
  res.sendFile('index.html')
)

//AQUI DEFINIRIMOS O QUE O CONTROLADOR FARA EM CADA ROTA

// Carregando todos os posts
app.get('/todos', posts.findAll)

// Para criar um post novo
app.post('/novo', posts.create)

// Pegando um unico post
app.get('/editar/:id', posts.findOne)

// Editando um unico post
app.put('/editar/:id', posts.update)


// Apagando um post
app.delete('/apagar/:id', posts.delete)


app.listen(8000, function() {
    console.log('Servidor está funcionando na porta 8000')
})