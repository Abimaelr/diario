const express = require('express');

const router = express.Router();

router.route('/professor')
    .get()

router.route('/professor/:id')
    .get()

router.route('/turma')
    .get()

module.exports = router;