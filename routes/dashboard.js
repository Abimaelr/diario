const express = require('express');
const { classes, basicInfo, updatePassword, createClasse, getStudent, getProfessores, createProfessor, editProf, createStudent, editStudent, findStu } = require('../controller/dashboard');
const { verifyClasses, verifyPermissionCreate } = require('../microservices/classes');
const { validateToken, validateUser } = require('../microservices/token');
const { verifyExistsUser } = require('../microservices/user');

const router = express.Router();

router.route('/')
    .get(
        validateToken,
        // validateUser,
        basicInfo
    )
    .put(
        validateToken,
        // validateUser,
        updatePassword
    );

    router.route('/student')
    .get(
        validateToken,
        // validateUser,
        findStu
    )
    .post(
        
    )
    .put(
        validateToken,
        editStudent
    )

router.route('/student/:alunoId')
    .get(
        validateToken,
        // validateUser,
        getStudent
    )

router.route('/professores')
    .get(
        validateToken,
        getProfessores
    )
    .post(
        validateToken,
        verifyExistsUser,
        createProfessor
    )
    .put(
        validateToken,
        editProf
    )

// router.route('/classes')
//         .get(
//             validateToken,
//             validateUser,
//             classes
//         )
//         .post(
//             validateToken,
//             validateUser,
//             verifyClasses,
//             verifyPermissionCreate,
//             createClasse
//         )
// router.route('/classes/:id')
//     .get(
//         validateToken,
//         validateUser,
//         classes
//     )

module.exports = router;