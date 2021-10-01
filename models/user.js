const connect = require('./connect');

const findUser = async (userId) => {
    const out = await connect()
        .then((db) => db.collection('users')
        .findOne({ userId }))
        .then((result) => result);
    return out;
    };

module.exports = {
    findUser,
}