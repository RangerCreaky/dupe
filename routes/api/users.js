const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const config = require('config');

const router = express.Router();

const { check, validationResult } = require('express-validator');
const auth = require('../../middlewares/auth');
const isAdmin = require('../../middlewares/isAdmin');
const User = require('../../modals/User');


// @route : GET /api/users/
// @desc  : user login
// @access: public

router.get('/', auth, async (req, res) => {
    try {
        const { id } = req.user;
        let user = await User.findOne({ _id: id }).select('-password');

        res.json(user);
    } catch (err) {
        if (err) console.error(err);
        res.status(500).send('server error');
    }
})


// @route : POST /api/users/signup
// @desc  : user registration
// @access: public
router.post('/signup',
    [
        check('name', 'Name is required').not().isEmpty(),
        check('email', 'Valid email ID is required').isEmail(),
        check('password', 'Password must contain at least 5 characters').isLength({ min: 6 }),
        check('phone', 'Valid Phone number is required').not().isEmpty().isNumeric().isLength({ equal: 10 })
    ], async (req, res) => {
        try {
            const errors = validationResult(req);
            if (!errors.isEmpty()) {
                return res.status(400).json({ errors: errors.array() })
            }

            const { name, email, password, phone } = req.body;
            console.log(name, email, password, phone);
            console.log(req.body);
            let user = await User.findOne({ 'email': email });

            if (user) {
                // User exists
                return res.status(400).json({ errors: [{ msg: 'user already exists' }] });
            }

            user = new User({
                name,
                email,
                password,
                phone
            })

            // const salt = bcrypt.genSalt(10);
            user.password = await bcrypt.hash(password, 10);

            await user.save();

            const payload = {
                user: {
                    id: user.id
                }
            }

            jwt.sign(payload, config.get('jwtsecret'), (err, token) => {
                if (err) throw err;
                res.json({ token });
            })
        } catch (err) {
            console.error(err.message);
            res.status(500).send('server error');
        }

    }
);


// @route : POST /api/users/login
// @desc  : user login
// @access: public
router.post('/login', [
    check('email', 'Valid email ID is required').isEmail(),
    check('password', 'Password must contain at least 5 characters').isLength({ min: 6 }),
], async (req, res) => {
    try {
        const { email, password } = req.body;
        let user = await User.findOne({ email });

        if (!user) {
            return res.status(400).json({ errors: [{ msg: 'invalid credentials' }] });
        }

        const isMatch = bcrypt.compare(password, user.password);

        if (!isMatch) {
            return res.status(400).json({ errors: [{ msg: 'invalid credentials' }] })
        }

        const payload = {
            user: {
                id: user.id
            }
        };

        jwt.sign(payload, config.get('jwtsecret'), (err, token) => {
            if (err) throw err;

            res.json({ token });
        })

    } catch (err) {
        console.log(err);
        res.status(500).send('server error');
    }
});

// @route : GET /api/users/all
// @desc  : get all users
// @access: admin
router.get('/all', isAdmin, async (req, res) => {
    try {
        const users = await User.find();
        res.status(200).json(users);
    } catch (err) {
        if (err) console.error(err);
        res.status(500).send('server error');
    }
});

// @route : GET /api/users/currentUser
// @desc  : get a particular user
// @access: should be authenticated
router.get('/currentUser', auth, async (req, res) => {
    try {
        const { id } = req.user;
        if (!id) {
            return res.status(400).json({ errors: { msg: 'Access denied' } });
        }
        const user = await User.findOne({ _id: id }).select('-password');
        if (!user) {
            return res.status(400).json({ errors: { msg: 'No user' } });
        }
        console.log(user);
        res.status(200).json(user);
    } catch (err) {
        if (err) console.error(err);
        res.status(500).send('server error');
    }
})

// @route : GET /api/users/:id
// @desc  : get a particular user
// @access: admin
router.get('/:id', isAdmin, async (req, res) => {
    try {
        const { id } = req.params;
        const user = await User.findById({ _id: id });

        if (!user) {
            return res.status(400).json({ errors: { msg: 'No such user exists' } });
        }

        res.status(200).json(user);

    } catch (err) {
        if (err) console.error(err);
        res.status(500).send('server error');
    }
});

module.exports = router;
