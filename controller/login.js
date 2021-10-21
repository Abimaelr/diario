const { find } = require("../services/user");
const jwt = require('jsonwebtoken');

const pass = "pMrdqRrHpSmS!GLD*^!oaWmk96OMO03vaUQcnYSKtuctA%&%G5";

const login = async (req, res) => {
    const { userId, password } = req.body;
    const log = await find(userId);

    if(!log || log.password !== password) return res.status(400).send({ message: "id ou senha inválidos!" });
    const {profId, nome, turmas, userId:user, permissions, disciplinas} = log;
    const data = { profId, nome, turmas, userId:user, permissions, disciplinas };
    const token = jwt.sign(data, pass);
    console.log(data)
    return res.status(201).json({ token })
}

module.exports = {
    login
}