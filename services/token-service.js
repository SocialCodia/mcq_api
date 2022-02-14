const jwt = require('jsonwebtoken');

const accessTokenKey = "ee438d1d108bd818aa0d525602340e5d7036";

class TokenService {

    generateToken = payload => {
        const accessToken = jwt.sign(payload, accessTokenKey, {
            expiresIn: '1h'
        });
        return { accessToken };
    }

    verifyAccessToken = token => jwt.verify(token, accessTokenKey)

}

module.exports = new TokenService();