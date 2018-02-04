//Twój kod
const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(express.static('./public/zadanie01/'));

app.listen(3000,()=>{
  console.log('Serwer działa na porcie 3000');
})
