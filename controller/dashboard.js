const { findClasses, findTeachers, studentsBySchool, changePass, createNewClass, getStudentQuery, createProf } = require("../services/dashboard");

const users = require('../services/user');
const jwt = require('jsonwebtoken');
const pass = "pMrdqRrHpSmS!GLD*^!oaWmk96OMO03vaUQcnYSKtuctA%&%G5";

const basicInfo = (req, res) => {
    const { authorization } = req.headers;
    const { nome, permissions } = jwt.verify(authorization, pass);
    return res.status(200).json({ nome, permissions });
}

const updatePassword = async (req, res) => {
    const { authorization } = req.headers;
    const { oldPass, newPass, confirm } = req.body;
    const { userId, password } = jwt.verify(authorization, pass);

    if (oldPass !== password)
        return res.status(404).json({ message: "Senha incorreta!" });
    else if (newPass !== confirm)
        return res.status(404).json({ message: "Senhas não coincidem!" });
    await changePass(userId, newPass);
    return res.status(201).json({ message: "Senha alterada!" });
}

const classes = async (req, res) => {
    const { authorization } = req.headers;
    const verify = jwt.verify(authorization, pass);
    const { userId } = verify;
    const classes = await findClasses(userId);
    return res.status(200).json({ classes })
}

const createClasse = async (req, res) => {
    const { authorization } = req.headers;
    const { codTurma, nomeTurma, turno } = req.body;
    const verify = jwt.verify(authorization, pass);
    const { userId } = verify;
    const create = await createNewClass(userId, codTurma, nomeTurma, turno);
    return res.status(200).json({ create })
}

const getTeachers = async (req, res) => {
    const { authorization } = req.headers;
    const verify = jwt.verify(authorization, pass);
    const { userId } = verify;
    const teacher = await findTeachers(userId);
    return res.status(200).json({ teacher })
}

const getStudents = async (req, res) => {
    const { authorization } = req.headers;

    const verify = jwt.verify(authorization, pass);
    const { userId } = verify;
    const students = await studentsBySchool(userId);
    return res.status(200).json({ students })
}

const getStudent = async (req, res) => {
    const { alunoId } = req.params;
    const student = await getStudentQuery({ alunoId });
    return res.status(200).json({ student })
}

const getProfessores = async (req, res) => {
    const { profId } = req.query;
    const professor = await users.findProfessores({ profId })
    return res.status(200).json(professor)
}

const createProfessor = async (req, res) => {
    const { nome, userId, profId, turmas } = req.body;

    if (nome && userId && profId && turmas) {
        await createProf(req.body);
        return res.status(201).send("Professor criado com sucesso!")
    }
    else 
        return res.status(400).send("Campos incompletos!")
}

module.exports = {
    classes,
    getTeachers,
    getStudents,
    basicInfo,
    updatePassword,
    createClasse,
    getStudent,
    getProfessores,
    createProfessor
}