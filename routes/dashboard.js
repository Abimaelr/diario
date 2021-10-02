const express = require('express');
const { classes } = require('../controller/dashboard');
const { validateToken, validateUser } = require('../microservices/token');

const router = express.Router();

router.route('/')
    .get(
        validateToken,
        validateUser,
        classes,
    )

// router.route('/professor/:id')
//     .get()

// router.route('/turma')
//     .get()

module.exports = router;