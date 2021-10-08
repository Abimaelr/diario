const { findUser, edit } = require("../models/user");

const find = async (userId) => {
    const user = await findUser(userId);
    return user;
}

const editDisciplinas = async ({userId, disciplinas}) => {
    return await edit({userId, disciplinas});
}

const getDisciplinas = async (userId) => {
    const user = await findUser(userId);

    return user;
}

getDisciplinas('angela.csilva@professor.joaopessoa.pb.gov.br')

module.exports = {
    find,
    editDisciplinas
}