const express = require('express');

const { classes, createClasse, editClass, classByTeacher, studentsClass, findClass } = require('../controller/classes');
const { verifyClasses, verifyPermissionCreate, verifyPermission, verifyData } = require('../microservices/classes');
const { validateToken, validateUser } = require('../microservices/token');
const { get } = require('./dashboard');

const router = express.Router();

router.route('/')
    .get(
        validateToken,
        // validateUser,
        classes
    )
    .post(
        validateToken,
        // validateUser,
        verifyData,
        verifyClasses,
        verifyPermissionCreate,
        createClasse
    )
router.route('/c').
 get(
    validateToken,
    findClass
 )

router.route('/p/')
    .get(
        validateToken,
        // validateUser,
        classByTeacher
    )

router.route('/students/:id')
    .get(
        validateToken,
        // validateUser,
        studentsClass
    )

router.route('/:id')
    .get(
        validateToken,
        // validateUser,
        studentsClass
    )
// router.route('/:id')
//     .get(

//     )
//     .put(
//         validateToken,
//         validateUser,
//         verifyPermission,
//         editClass
//     )

module.exports = router;