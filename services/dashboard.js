const { classes, teachers } = require("../models/dashboard");

const findClasses = async (userId) => {
    const classArr = await classes(userId);
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

module.exports = {
    findClasses,
    findTeachers
}