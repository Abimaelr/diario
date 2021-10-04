const connect = require('./connect');

// const school = async (userId) => {
//     const out = await connect()
//         .then((db) => db.collection('users')
//         .findOne({ userId }))
//         .then(({_id, userId, nome}) => result);
//     return out;
//     };

const teachers = async (userId) => {
    const out = await  connect()
    .then((db) => db.collection('professores')
    .find({}).toArray())
    .then((result) => result);
    return out;
    };

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

const students = async () => {
    const out = await connect()
        .then((db) => db.collection('alunos')
        .find({ }).toArray())
        .then((result) => result);
    return out;
};

const updatePass = async (userId, password) => {
    const out = await connect()
        .then((db) => db.collection('users')
        .updateOne({ userId },{ $set: { password }}))
        .then((result) => result);
    return out;
};

module.exports = {
    classesBySchool,
    teachers,
    students,
    classesByCode,
    classes,
    teachersId,
    updatePass
}