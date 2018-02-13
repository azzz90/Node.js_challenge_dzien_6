//Twój kod
const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const app = express();

app.use(bodyParser.urlencoded({extended:true}));
app.use(cookieParser());
app.use(express.static('./public/zadanie02/'));

app.post('/cookie/set', (req, res) => {
    const yourName = req.body.yourName;
    res.cookie('yourName', yourName, {
        maxAge : 30000,
    });
    res.send(`Your name is: ${yourName}`);
});

app.get('/cookie/show', (req, res) => {
    const yourName = req.cookies.yourName;
    res.send(`${yourName}`);

});

app.get('/cookie/check', (req, res) => {
    const yourName = req.cookies.yourName;
    if (yourName != undefined){
    res.send(`Your name was saved and is:${yourName}`);
  } else (res.send(`You have not entered your name`))
});

app.listen(3000,()=>{
  console.log('Serwer działa na porcie 3000');
})
