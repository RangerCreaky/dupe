const jwt = require('jsonwebtoken');
const config = require('config');
const User = require('../modals/User');

const verify = async (req, res, next) => {
    try {
        const token = req.header('x-auth-token');
        if (!token) {
            return res.status(400).json({ errors: { msg: 'Invalid token, Access denied' } });
        }

        const decoded = jwt.verify(token, config.get('jwtsecret'));
        if (!decoded.user) {
            res.status(401).json({ errors: { msg: 'Invalid token, Access denied' } });
        }

        req.user = decoded.user;

        const user = await User.findOne({ _id: decoded.user.id });
        if (!user) {
            return res.status(401).json({ errors: { msg: 'Invalid token, Access denied' } });
        }

        if (user.email === config.get('admin')) {
            next();
        }
        else {
            return res.status(401).json({ errors: { msg: 'Invalid token, Access denied' } });
        }

    } catch (err) {
        if (err) console.log(err);
        res.status(500).send('server error');
    }
}

module.exports = verify;
