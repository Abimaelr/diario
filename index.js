const express = require('express');

const login = require('./routes/login');
const dashboard = require('./routes/dashboard');
const classes = require('./routes/classes');

const app = express();

app.use(express.json());

app.use('/login', login);
app.use('/', dashboard);
app.use('/classes', classes);


const port = 3000;

app.listen(port , ()=>{
    console.log('Ativo')
})