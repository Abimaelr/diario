const connect = require('./connect');

const teachersId = async (profId) => {
    const out = await  connect()
    .then((db) => db.collection('professores')
    .findOne({profId}))
    .then((result) => result);
    return out;
    };

const classesBySchool = async (codEscola) => {
    const out = await connect()
        .then((db) => db.collection('classes')
        .find({ codEscola }).toArray())
        .then((result) => result);
    return out;
};

const classesByCode = async (codTurma) => {
    const out = await connect()
        .then((db) => db.collection('classes')
        .find({ codTurma }).toArray())
        .then((result) => result);
    return out;
};

const classes = async () => {
    const out = await connect()
        .then((db) => db.collection('classes')
        .find({ }).toArray())
        .then((result) => result);
    return out;
};

const createClass = async (codTurma, nomeTurma, turno, codEscola) => {
    const out = await connect()
        .then((db) => db.collection('classes')
        .insertOne({codEscola, codTurma, nomeTurma, turno, diarios: [], boletim: [], visible: 1}))
        .then((result) => result.ops);
    return out;
};

const students = async () => {
    const out = await connect()
        .then((db) => db.collection('alunos')
        .find({ }).toArray())
        .then((result) => result);
    return out;
};

module.exports = {
    classesBySchool, classesByCode, students, classes, teachersId, createClass 
}