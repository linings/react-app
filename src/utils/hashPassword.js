let passwordHash = require('password-hash');

const hashPassword = (password) => {
    var hashedPassword = passwordHash.generate(password);

    return hashedPassword;
}

const verifyPassword = (password, hashedPassword) => {
    let isSame = passwordHash.verify(password, hashedPassword);

    return isSame;
}

export {
    hashPassword,
    verifyPassword
}