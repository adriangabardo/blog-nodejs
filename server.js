const express = require('express')
const app = express()

app.listen(8000, function() {
    console.log('Servidor está funcionando na porta 8000')
});

//## Define o destino de onde os arquivos estão vindo (incluindo index.html)
app.use(express.static('public'))

app.get('/', (req, res) =>
  res.sendFile('index.html')
)