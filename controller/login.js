const { find } = require("../services/user");
const jwt = require('jsonwebtoken');

const pass = "pMrdqRrHpSmS!GLD*^!oaWmk96OMO03vaUQcnYSKtuctA%&%G5";

const login = async (req, res) => {
    const { userId, password } = req.body;
    const log = await find(userId, password);

    if(!log) return res.status(400).json({ message: "id ou senha inválidos!" });
    
    const token = jwt.sign(log, pass);

    return res.status(201).json({ token })
}

module.exports = {
    login
}