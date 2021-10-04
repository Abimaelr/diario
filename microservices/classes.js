const jwt = require('jsonwebtoken');
const pass = "pMrdqRrHpSmS!GLD*^!oaWmk96OMO03vaUQcnYSKtuctA%&%G5";
const { getClassId } = require("../services/dashboard");

const verifyClasses = async (req, res, next) => {
    const { codTurma } =  req.body;
    const turma = await getClassId(codTurma);
    if(turma !== []) return res.status(500).json({ message: "Essa turma já existe!" });
    next();
}

const verifyPermissionCreate = async (req, res, next) => {
    const { codTurma } =  req.body;
    const { permissions } = jwt.verify(authorization, pass);
    if(permissions !== 'd')
        return res.status(500).json({ message: "Você não tem permissões" });
    next();
}


module.exports = {
    verifyClasses,
    verifyPermissionCreate
}