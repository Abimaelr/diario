const express = require('express');

const { classes, createClasse, editClass, classByTeacher, studentsClass, findClass } = require('../controller/classes');
const { verifyClasses, verifyPermissionCreate, verifyPermission, verifyData } = require('../microservices/classes');
const { validateToken, validateUser } = require('../microservices/token');

const router = express.Router();

router.route('/')
    .get(
        validateToken,
        classes
    )
    .post(
        validateToken,
        verifyData,
        verifyClasses,
        verifyPermissionCreate,
        createClasse
    )
router.route('/c')
    .get(
        validateToken,
        findClass
    )

router.route('/p')
    .get(
        validateToken,
        classByTeacher
    )

router.route('/students/:id')
    .get(
        validateToken,
        studentsClass
    )

router.route('/:id')
    .get(
        validateToken,
        studentsClass
    )

module.exports = router;