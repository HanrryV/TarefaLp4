const express = require('express');
const fs = require('fs');

const bodyParser = require('body-parser');

const localhost = '127.0.0.1';
const port = 8080;

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const veiculosRotas = require('./server/routes/Veiculos');


app.get('/', (req, res) => {

 const arquivoHtml = fs.readFileSync('./server/pages/pagina.html');

  res.status(200).end(arquivoHtml);

});

app.use('/veiculo', veiculosRotas);


app.listen(port, localhost, console.log('O servidor esta funcionando'));