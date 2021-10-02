const { findClasses, findTeachers } = require("../services/dashboard")
const jwt = require('jsonwebtoken');
const pass = "pMrdqRrHpSmS!GLD*^!oaWmk96OMO03vaUQcnYSKtuctA%&%G5";

const classes = async (req, res) => {
   
    const { authorization } = req.headers;

    const verify = jwt.verify(authorization, pass);
    const { userId } = verify;
    const classes = await findClasses(userId);

    return res.status(200).json({classes})
}

const getTeachers = async (req, res) => {
    const { authorization } = req.headers;

    const verify = jwt.verify(authorization, pass);
    const { userId } = verify;
    const teacher = await findTeachers(userId);

    return res.status(200).json({teacher})

}

module.exports = {
    classes,
    getTeachers
}