const express = require('express');
const multer = require('multer');
const { v4: uuidv4 } = require('uuid');

const router = express.Router();

const { check, validationResult } = require('express-validator');
// const auth = require('../../middlewares/auth');
const isAdmin = require('../../middlewares/isAdmin');
const paginate = require('../../middlewares/paginate');
// const User = require('../../modals/User');
const Product = require('../../modals/Product');

const genRandomUUID = () => {
    let uuid = uuidv4();
    return uuid;
}

// Multer middleware
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        let uuid = genRandomUUID();
        req.uuid = uuid;
        cb(null, `uploads/${uuid}`);
    },
    filename: (req, file, cb) => {
        const { originalname } = file;
        cb(null, `${originalname}`)
    }
});

const fileFilter = (req, file, cb) => {
    if (file.mimetype.split("/")[0] === 'image') {
        cb(null, true);
    }
    else {
        cb(new Error('file is not of correct type'), false);
    }
}

const upload = multer({ storage, fileFilter })

// @route : POST /api/products
// @desc  : This gets all the products | PAGINATED |
// @access: Public
router.get("/", paginate(Product), (req, res) => {
    res.status(200).json(res.paginatedResults);
});

// @route : Post /api/products/add
// @desc  : user login
// @access: ADMIN
// TODO : Complete this later
router.post('/add', [isAdmin, upload.fields([{
    name: 'thumbnail', maxCount: 1
}, {
    name: 'images', maxCount: 3
}]),
    check('name', 'product name is required').not().isEmpty(),
    check('category', 'produc category is requires').not().isEmpty(),
    check('description', 'product description is required').not().isEmpty()
], async (req, res) => {
    try {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() })
        }
        const { name, category, description } = req.body;

        let images = ['uploads/uuid'];

        const newProduct = new Product({
            name, category, description,

        });

        res.status(200).json(newProduct);
    } catch (err) {
        if (err) console.error(err);
        res.status(500);
    }
});


module.exports = router