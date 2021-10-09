const { create, read } = require("../models/diarios");
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

const writeFreq = async (pack) => {
    const result = await create(pack);
    return result;
}

const readFreq = async (pack) => {
    const result = await read(pack);
    return result;
}


module.exports = {
    find,
    editDisciplinas,
    getDisciplinas,
    writeFreq,
    readFreq
}