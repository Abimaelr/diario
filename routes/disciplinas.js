const express = require('express');
const { validateToken, validateUser } = require('../microservices/token');


const router = express.Router();
router.use(validateToken);
router.use(validateUser);

router.route('/')
    .get(

    )
    .put(
        
    )


module.exports = router;