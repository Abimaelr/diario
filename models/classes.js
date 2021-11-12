const connect = require('./connect');

const teachersUserId = async (userId) => {
    const out = await  connect()
    .then((db) => db.collection('users')
    .findOne({userId}))
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
        .findOne({ codTurma }))
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

const createClass = async (codEscola, codTurma, nomeTurma, turno) => {
    const out = await connect()
        .then((db) => db.collection('classes')
        .insertOne({codEscola, codTurma, nomeTurma, turno, visible: 1}))
        .then((result) => result.ops);
    return out;
};

const editClass = async (codTurma, nomeTurma, turno) => {
    const out = await connect()
    .then((db) => db.collection('classes')
    .updateOne({ codTurma },{ $set: { nomeTurma, turno }}))
    .then((result) => result);
    return out;
}

const students = async () => {
    const out = await connect()
        .then((db) => db.collection('alunos')
        .find({ }).toArray())
        .then((result) => result);
    return out;
};

module.exports = {
    classesBySchool, classesByCode, students, classes, teachersUserId, createClass, editClass
}