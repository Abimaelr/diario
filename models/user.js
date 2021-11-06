const connect = require('./connect');

const findUser = async (userId) => {
    const out = await connect()
        .then((db) => db.collection('users')
            .findOne({ userId }))
        .then((result) => result);
    return out;
};

const findUsers = async (query) => {
    const out = await connect()
        .then((db) => db.collection('users')
            .find(query).toArray())
        .then((result) => result);
    return out;
};

const edit = async ({ userId, disciplinas }) => {
    const out = await connect()
        .then((db) => db.collection('users')
            .updateOne({ userId }, { $set: { disciplinas } }))
        .then((result) => result);
    return out;
};

const create = async (data) => connect().
    then((db) => db.collection('users').
        insertOne(data).then(result => result))

module.exports = {
    findUser,
    edit,
    findUsers,
    create
}