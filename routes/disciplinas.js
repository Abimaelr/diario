const express = require('express');
const { edit, read, readAllClasses } = require('../controller/disciplinas');
const { validateToken, validateUser } = require('../microservices/token');
const { permissionsDisciplinas, permissionsDisciplina, verifyConsistencia} = require('../microservices/user');


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
    )

router.route('/diarios')
    .get(
        readAllClasses
    )
    .put(
        permissionsDisciplina, 
        verifyConsistencia
    )

router.route('/boletins')
    .get(
        read
    )
    .put(
        permissionsDisciplinas,
        edit
    )

module.exports = router;