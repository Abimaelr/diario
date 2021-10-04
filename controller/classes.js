const { findClasses, findTeachers, studentsBySchool, changePass, createNewClass} = require("../services/dashboard")
const jwt = require('jsonwebtoken');
const pass = "pMrdqRrHpSmS!GLD*^!oaWmk96OMO03vaUQcnYSKtuctA%&%G5";


const classes = async (req, res) => {
   
    const { authorization } = req.headers;

    const verify = jwt.verify(authorization, pass);
    const { userId } = verify;
    const classes = await findClasses(userId);

    return res.status(200).json({classes})
}

const createClasse = async (req, res) => {
   
    const { authorization } = req.headers;
    const { codTurma, nomeTurma, turno} = req.body;
    const verify = jwt.verify(authorization, pass);
    const { userId } = verify;

    const create = await createNewClass(userId, codTurma, nomeTurma, turno);
    
    return res.status(200).json({create})
}


module.exports = {
    classes,
    createClasse
}