const { classesBySchool, classesByCode, students, classes, teachersId, createClass } = require("../models/classes");

const findClasses = async (userId) => {
    const classArr = await classesBySchool(userId);
    return classArr;
}

const getClassId = async (codTurma) => {
    const result = await classesByCode(codTurma);
    return result;
}

const createNewClass = async (codEscola, codTurma, nomeTurma, turno) => {
    const result = await createClass(codEscola, codTurma, nomeTurma, turno);

    return result;
}

const studentsBySchool = async (userId) => {
    const classArr = await classesBySchool(userId);
    const allStudents = await students();

    const studentsArr = allStudents.filter( student => {
        if(classArr.map(({codTurma}) => codTurma).includes(student.codTurma)) {
            return student
        }
    })
}

const studentsByClass = async (codTurma) => {
    const classArr = await classesByCode(codTurma);
    const allStudents = await students();

    const studentsArr = allStudents.filter( student => {
        if(classArr.map(({codTurma}) => codTurma).includes(student.codTurma)) {
            return student
        }
    })
    return studentsArr;
}

const classByTeacher = async (profId) => {
    const prof = await teachersId(profId);
    const classArr = await classes();
    const out = classArr.filter( sala => {
        if(prof.turmas.includes(sala.codTurma)) {
            return sala
        }
    })
    return out;
}


module.exports = {
    findClasses,
    studentsBySchool,
    studentsByClass,
    classByTeacher,
    getClassId,
    createNewClass
}