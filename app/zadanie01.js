//Twój kod
const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.urlencoded());
app.use(express.static('./public/zadanie01/'));

app.post('/form', (req, res) => {
    const {numOne, numTwo} = req.body;
    //res.send('Pierwsza liczba to ' + numOne + ' a druga liczba to ' + numTwo +'.');
    if(parseInt(numOne) % parseInt(numTwo) === 0){
      res.send('Liczba B jest dzielnikiem liczby A.')
    } else {
      res.send('Liczba B nie jest dzielnikiem liczby A.')
    }
});

app.listen(3000,()=>{
  console.log('Serwer działa na porcie 3000');
})
