const express = require('express');
const { edit, read, writeFreq, editFrequ, writeBol, readDiarios, readBol, grade } = require('../controller/disciplinas');
const { validateToken, validateUser } = require('../microservices/token');
const { permissionsDisciplinas, permissionsDisciplina, verifyConsistencia, verifyExists, permissionsRead, verifyExistsBol} = require('../microservices/user');


const router = express.Router();

router.use(validateToken);
// router.use(validateUser);

router.route('/')
    .get(
        read
    )
    .put(
        edit
    );

router.route('/diarios')
    .get(
        readDiarios
    )
    .post(
        verifyConsistencia,
        verifyExists,
        writeFreq
    )
    .put(
        verifyConsistencia,
        editFrequ
    );

router.route('/grade')
    .get(
        grade

    )

router.route('/boletins')
    .get(
        // permissionsRead,
        readBol
    )
    .post(
        // permissionsDisciplina,
        verifyConsistencia,
        verifyExistsBol,
        writeBol
    ).put(
        permissionsDisciplina, 
        verifyConsistencia,  
    );

module.exports = router;