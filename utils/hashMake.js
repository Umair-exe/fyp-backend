const brcypt = require("bcrypt");

const hashPassword = (password) => {
    const genSalt = brcypt.genSaltSync(10);
    const hashpass = brcypt.hashSync(password, genSalt);
    return hashpass;
}

module.exports = {hashPassword};