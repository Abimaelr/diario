const { findUser } = require("../models/user");

const find = async (userId, password) => {
    const user = await findUser(userId);
    if(user.password !== password ) return false;
    return user;
}

module.exports = {
    find,
}