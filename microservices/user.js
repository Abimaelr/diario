const jwt = require('jsonwebtoken');
const pass = "pMrdqRrHpSmS!GLD*^!oaWmk96OMO03vaUQcnYSKtuctA%&%G5";

const permissionsDisciplinas = async (req, res, next) => {
    const { authorization } = req.headers;
    const body = req.body;
    const { permissions, userId } = jwt.verify(authorization, pass);

    if (!permissions !== d || userId !== body.userId) return res.status(401).json({ message: "Você não possui permissões" })

    next();
}