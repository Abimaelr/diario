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

const classes = async (codEscola) => {
    const out = await connect()
        .then((db) => db.collection('classes')
        .find({ codEscola }).toArray())
        .then((result) => result);
    return out;
};

module.exports = {
    classes,
    teachers
}