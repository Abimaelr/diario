const connect = require('./connect');

// codAluno, idTurma, materia, bimestre, nota, obs, data, idProfessor, lastModified

const create = async (boletim) => {
    const out = await  connect()
    .then((db) => db.collection('boletins')
    .insert(boletim))
    .then((result) => result);
    return out;
    };

const read = async ({idTurma, data, materia, bimestre}) => {
    const out = await  connect()
    .then((db) => db.collection('boletins')
    .find({data, idTurma, bimestre, materia}).toArray())
    .then((result) => result);
    return out;
    };

const update = async ({idTurma, data, materia, bimestre, nota, lastModified}) => {
    const out = await  connect()
    .then((db) => db.collection('boletins')
    .update({ idTurma, materia, data, bimestre },{ $set: { lastModified, nota, obs }}))
    .then((result) => result);
    return out;
    };

const readOne = async ({codAluno, idTurma, data, materia, bimestre}) => {
    const out = await  connect()
    .then((db) => db.collection('boletins')
    .findOne({codAluno, idTurma, materia, data, bimestre}).toArray())
    .then((result) => result);
    return out;
    };

const updateOne = async ({codAluno, idTurma, data, materia, bimestre, nota, lastModified}) => {
    const out = await  connect()
    .then((db) => db.collection('boletins')
    .updateOne({codAluno, idTurma, materia, data, bimestre},{ $set: { lastModified, nota, obs }}))
    .then((result) => result);
    return out;
    };

module.exports = {
    create,
    read,
    readOne,
    update,
    updateOne
}
