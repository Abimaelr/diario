const express = require('express');

const login = require('./routes/login');
const dashboard = require('./routes/dashboard');

const app = express();

app.use(express.json());

app.use('/login', login);
app.use('/', dashboard);

const port = 3000;

app.listen(port , ()=>{
    console.log('Ativo')
})