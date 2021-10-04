const { classesBySchool, classesByCode, teachers, students, classes, teachersId, updatePass } = require("../models/dashboard");

const findClasses = async (userId) => {
    const classArr = await classesBySchool(userId);
    return classArr;
}

const findTeachers = async (userId) => {
    const teachersArr = await teachers();
    const turmas = await findClasses(userId)
    const turmasCod = turmas.map(({codTurma}) => codTurma?codTurma:'');
    const out = teachersArr.filter( teacher => {
        if(teacher.turmas.some( ai => turmasCod.includes(ai) ))
            return teacher
    })
    return out;
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

const changePass = async (userId, pass) => {
    await updatePass(userId, pass);
}

module.exports = {
    findClasses,
    findTeachers,
    studentsBySchool,
    classByTeacher,
    changePass
}