const express = require('express');
const { classes, createClasse, editClass } = require('../controller/classes');
const { verifyClasses, verifyPermissionCreate, verifyPermission } = require('../microservices/classes');
const { validateToken, validateUser } = require('../microservices/token');

const router = express.Router();

router.route('/')
    .get(
        validateToken,
        validateUser,
        classes
    )
    .post(
        validateToken,
        validateUser,
        verifyClasses,
        verifyPermissionCreate,
        createClasse
    )
router.route('/:id')
    .get(
        
    )
    .put(
        validateToken,
        validateUser,
        verifyPermission,
        editClass
    )

module.exports = router;