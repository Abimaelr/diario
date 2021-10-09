const jwt = require('jsonwebtoken');
const { create } = require('../models/diarios');
const { classByTeacher } = require('../services/dashboard');
const { editDisciplinas, find, readFreq } = require("../services/user");
const pass = "pMrdqRrHpSmS!GLD*^!oaWmk96OMO03vaUQcnYSKtuctA%&%G5";

const read = async ( req, res) => {
    const { authorization } = req.headers;
    const { userId } = jwt.verify(authorization, pass);
    const result =  await find(userId);
    res.status(200).json({ disciplinas: result.disciplinas})
}

const edit = async (req, res) => {
    const { userId, disciplinas } = req.body;
    const result = await editDisciplinas({userId, disciplinas});
    res.status(201).json({ message:"Disciplinas editadas com sucesso!", result })
}

const readAllClasses = async (req, res) => {
    const { authorization } = req.headers;
    const { userId } = jwt.verify(authorization, pass);
    const { idTurma, idProfessor, data, materia} = req.body;
    const result = await readFreq({idTurma, idProfessor, data, materia});

    return res.status(200).json({ result });
}

const writeFreq = async (req, res) => {
    const frequencias = await req.body;
    const result = await create(frequencias.pack);
    return res.status(200).json({ result });
}


module.exports = {
    edit,
    read,
    readAllClasses,
    writeFreq
}