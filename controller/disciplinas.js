const jwt = require('jsonwebtoken');
// const { create } = require('../models/diarios');
// const { classByTeacher } = require('../services/dashboard');
const user = require('../services/user')

const pass = "pMrdqRrHpSmS!GLD*^!oaWmk96OMO03vaUQcnYSKtuctA%&%G5";

const read = async ( req, res) => {
    const { authorization } = req.headers;
    const { userId } = jwt.verify(authorization, pass);
    const result =  await user.find(userId);
    res.status(200).json({ disciplinas: result.disciplinas})
}

const edit = async (req, res) => {
    const { userId, disciplinas } = req.body;
    const result = await user.editDisciplinas({userId, disciplinas});
    res.status(201).json({ message:"Disciplinas editadas com sucesso!", result })
}

const readDiarios = async (req, res) => {
    const { authorization } = req.headers;
    const { userId } = jwt.verify(authorization, pass);
    const query = req.body;
    const result = await user.readFreq(query);

    return res.status(200).json({ result });
}

const writeFreq = async (req, res) => {
    const frequencias = await req.body;
    const result = await user.writeFreq(frequencias.pack);
    return res.status(200).json({ result });
}

const editFrequ = async (req, res) => {
    const frequencias = await req.body;
    const { idTurma, idProfessor, data, materia} = frequencias.pack[0];
    const query = { idTurma, idProfessor, data, materia } ;
    const result = await user.editFreq(query, frequencias.pack);
    return res.status(200).json({ result });
}

const writeBol = async (req, res) => {
    const boletim = await req.body;
    console.log(boletim)
    const result = await user.writeBoletim(boletim.pack);
    return res.status(200).json({ result });
}

const editBol = async (req, res) => {
    const boletim = await req.body;
    const { idTurma, idProfessor, data, materia} = frequencias.pack[0];
    const query = { idTurma, idProfessor, data, materia } ;
    const result = await user.editBol(query, boletim.pack);
    return res.status(200).json({ result });
}


module.exports = {
    edit,
    read,
    readDiarios,
    writeFreq,
    editFrequ,
    writeBol,
    editBol
}