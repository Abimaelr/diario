const express = require('express');
const { edit, read, readAllClasses, writeFreq } = require('../controller/disciplinas');
const { validateToken, validateUser } = require('../microservices/token');
const { permissionsDisciplinas, permissionsDisciplina, verifyConsistencia, verifyExists} = require('../microservices/user');


const router = express.Router();

router.use(validateToken);
router.use(validateUser);

router.route('/')
    .get(
        read
    )
    .put(
        permissionsDisciplinas,
        edit
    );

router.route('/diarios')
    .get(
        readAllClasses
    )
    .post(
        permissionsDisciplina, 
        verifyConsistencia,
        verifyExists,
        writeFreq
    );

router.route('/boletins')
    .get(
        read
    )
    .put(
        permissionsDisciplinas,
        edit
    );

module.exports = router;