const diarios = require("../models/diarios");
const boletim = require("../models/boletins");
const user = require("../models/user");

const find = async(userId) => {
    const result = await user.findUser(userId);
    return result;
}

const findProfessores = async(query) => user.findUsers(query);

const editDisciplinas = async({ userId, disciplinas }) => user.edit({ userId, disciplinas });

const getDisciplinas = async(userId) => {
    const result = await user.findUser(userId);
    return result;
}

const editTurmas = async({ userId, turmas, profId, password }) => user.editTurmas({ userId, turmas, profId, password });

const writeFreq = async(pack) => {

    const result = await diarios.create(pack);
    return result;
}

const readFreq = async(pack) => {
    const result = await diarios.read(pack);
    return result;
}

const editFreq = async(remv, pack) => {
    await diarios.remove(remv);
    const result = await diarios.create(pack);
    return result;
}

const writeBoletim = async(pack) => {
    const result = await boletim.create(pack);
    return result;
}

const readBoletim = async(pack) => {
    const result = await boletim.read(pack);
    return result;
}

const editBoletim = async(remv, pack) => {
    await boletim.remove(remv);
    const result = await boletim.create(pack);
    return result;
}

const delFreq = async(query) => {
    await diarios.remove(query);
}

const delBol = async(query) => {
    await boletim.remove(query);
}

module.exports = {
    find,
    editDisciplinas,
    getDisciplinas,
    writeFreq,
    readFreq,
    editFreq,
    writeBoletim,
    readBoletim,
    editBoletim,
    findProfessores,
    editTurmas,
    delBol,
    delFreq
}