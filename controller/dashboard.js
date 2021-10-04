const { findClasses, findTeachers, studentsBySchool } = require("../services/dashboard")
const jwt = require('jsonwebtoken');
const pass = "pMrdqRrHpSmS!GLD*^!oaWmk96OMO03vaUQcnYSKtuctA%&%G5";

const basicInfo = (req, res) => {
    const { authorization } = req.headers;

    const {nome} = jwt.verify(authorization, pass);
    res.status(200).json({nome});
}

const changePass = async (req, res) => {
    const { authorization } = req.headers; 
    const { oldPass, newPass, confirm } = req.body;
    const { userId, password } = jwt.verify(authorization, pass);
    if(oldPass !== password)
        return res.status(404).json({message: "Senha incorreta!"});
    else if(newPass !== confirm)
        return res.status(404).json({message: "Senhas não coincidem!"});
     changePass(userId, '12345');
    return res.status(201).json({message: "Senha alterada!"});
}

const classes = async (req, res) => {
   
    const { authorization } = req.headers;

    const verify = jwt.verify(authorization, pass);
    const { userId } = verify;
    const classes = await findClasses(userId);

    return res.status(200).json({classes})
}

const getTeachers = async (req, res) => {
    const { authorization } = req.headers;

    const verify = jwt.verify(authorization, pass);
    const { userId } = verify;
    const teacher = await findTeachers(userId);

    return res.status(200).json({teacher})
}

const getStudents = async (req, res) => {
    const { authorization } = req.headers;

    const verify = jwt.verify(authorization, pass);
    const { userId } = verify;
    const students = await studentsBySchool(userId);

    return res.status(200).json({students})
}

module.exports = {
    classes,
    getTeachers,
    getStudents,
    basicInfo,
    changePass
}