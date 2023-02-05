const jwt = require('jsonwebtoken');
const config = require('config');

const verify = (req, res, next) => {
    const token = req.header('x-auth-token');

    if (!token) {
        return res.status(401).json({ errors: { msg: 'No token, access denied' } });
    }

    try {
        const decoded = jwt.verify(token, config.get('jwtsecret'));
        req.user = decoded.user;

        next();
    } catch (err) {
        console.log(err);
        res.status(500).send('server error');
    }

}

module.exports = verify