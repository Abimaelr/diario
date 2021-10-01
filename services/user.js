const { findUser } = require("../models/user");

const find = async (userId, pass) => {
    const user = await findUser(userId);
    try {
        if(user.password === password ) return user;

    } catch (_err) {
        return user;
    }

}

module.exports = {
    find,
}