const express = require('express');

const login = require('./routes/login');
const unidade = require('./routes/unidade');

const app = express();

app.use(express.json());

app.use('/login', login);
app.use('/unidade', unidade);

const port = 4000;

app.listen(port , ()=>{
    console.log('Ativo')
})