const { findClasses, findTeachers, studentsBySchool, changePass, createNewClass, getStudentQuery, createProf, createEstudante } = require("../services/dashboard");

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
    console.log(professor)
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

const editProf = async (req, res) => {
    const { userId, turmas, profId } = req.body;
    const result = await users.editTurmas({ userId, turmas, profId });
    console.log(result)
    return res.status(201).json({ message: "Turmas editadas com sucesso!", result })
};

const createStudent = async (req, res) => {
    const { alunoId, codTurma, nomeTurma, nomeCompleto, nascimento } = req.body;
    const stu = await getStudentQuery({ alunoId });
    console.log(stu)
    if (stu.length > 0)
        return res.status(400).send("Estudante já existe!")
    else if (!(alunoId && codTurma && nomeCompleto && nascimento))
        return res.status(400).send("Campos incompletos!")
    else if (alunoId && codTurma && nomeCompleto && nascimento) {
        await createEstudante(req.body);
        return res.status(201).send("Aluno criado com sucesso!")
    }
}

const editStudent = async (req, res) => {
    const { alunoId, codTurma } = req.body;

    if (alunoId && codTurma) {
        await createEstudante(req.body);
        return res.status(201).send("Aluno editado com sucesso!")
    }
    else
        return res.status(400).send("Campos incompletos!")
}

const findStu = async (req, res) => {
    const { alunoId } = req.body;
    const stu = await getStudentQuery({ alunoId });
    if (stu.length > 0)
        return res.status(200).send(stu[0]);
    else
        return res.status(400).send("Estudante não encontrado!")
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
    createProfessor,
    editProf,
    createStudent,
    editStudent,
    findStu
}