const { findUser, edit } = require("../models/user");

const find = async (userId, password) => {
    const user = await findUser(userId);
    try {
        if(user.password === password ) return user;

    } catch (_err) {
        return user;
    }
}

const editDisciplinas = async ({userId, disciplinas}) => {
    return await edit({userId, disciplinas});
}

module.exports = {
    find,
    editDisciplinas
}