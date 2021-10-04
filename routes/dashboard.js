const express = require('express');
const { classes, basicInfo, changePass } = require('../controller/dashboard');
const { validateToken, validateUser } = require('../microservices/token');

const router = express.Router();

router.route('/')
    .get(
        validateToken,
        validateUser,
        basicInfo
    )
    .put(
        validateToken,
        validateUser,
        changePass
    )

router.route('/professor/')
    .get()


router.route('/professor/:id')
    .get()

router.route('/turma')
    .get()

module.exports = router;