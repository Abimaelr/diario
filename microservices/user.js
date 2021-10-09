const jwt = require('jsonwebtoken');
const { create } = require('../models/diarios');
const { find } = require('../services/user');
const pass = "pMrdqRrHpSmS!GLD*^!oaWmk96OMO03vaUQcnYSKtuctA%&%G5";

const permissionsDisciplinas = async (req, res, next) => {
    const { authorization } = req.headers;
    const body = req.body;
    const { permissions, userId } = jwt.verify(authorization, pass);
    console.log(body.userId === userId)
    if (!(permissions === 'd' || userId === body.userId)) return res.status(401).json({ message: "Você não possui permissões!" })
    next();
}

const permissionsDisciplina = async (req, res, next) => {
    const { authorization } = req.headers;
    const { pack } = req.body;
    const { userId } = jwt.verify(authorization, pass);
    const { disciplinas, turmas, profId } = await find(userId);
    if (!disciplinas.includes(pack[0].materia) ||  !turmas.includes(pack[0].idTurma)|| profId !== pack[0].idProfessor)
        return res.status(401).json({ message: "Você não possui permissões para acessar essa turma!" })
    next();
}

const verifyConsistencia = async (req, res, next) => {
    const { pack } = req.body;
    const idTurma = pack.map(({idTurma}) => idTurma);
    const idProf = pack.map(({idProfessor}) => idProfessor);
    const materia = pack.map(({materia}) => materia);
    const data = pack.map(({data}) => data);
    if (!idTurma.every( e => e === idTurma[0]) ||
    !idProf.every( e => e === idProf[0]) ||
    !materia.every( e => e === materia[0]) ||
    !data.every( e => e === data[0])) return res.status(401).json({ message: "Dados inconsistêntes!"} )

    // await create(pack)
    next();
}



module.exports = {
    permissionsDisciplinas,
    permissionsDisciplina,
    verifyConsistencia
}