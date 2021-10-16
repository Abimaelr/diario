const express = require('express');
const { edit, read, writeFreq, editFrequ, writeBol, readDiarios, readBol } = require('../controller/disciplinas');
const { validateToken, validateUser } = require('../microservices/token');
const { permissionsDisciplinas, permissionsDisciplina, verifyConsistencia, verifyExists, permissionsRead, verifyExistsBol} = require('../microservices/user');


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
        // permissionsDisciplina, 
        readDiarios
    )
    .post(
        // permissionsDisciplina, 
        verifyConsistencia,
        verifyExists,
        writeFreq
    )
    .put(
        // permissionsDisciplina, 
        verifyConsistencia,
        editFrequ
    );

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