const connect = require('./connect');

const findUser = async (userId) => await connect()
.then((db) => db.collection('users')
.findOne({ userId }))
.then((result) => result);

module.exports = {
    findUser,
}