const express = require('express');
const router = express.Router();
const User = require('../models/Usermodel');
const jwt = require('jsonwebtoken');
const verifytoken = require('../middlewares/verifytoken');
require('dotenv').config();


router.get('/getusers', async (req, res) => {
    try {
        const users = await User.find();
        res.status(200).json(users);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Server error' });
    }
});

router.get('/getallusers', async (req, res) => {
    try {
        const users = await User.find();
        res.status(200).json(users);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Server error' });
    }
});
router.delete('/delete/:id', (req, res) => {
   User.findByIdAndDelete(req.params.id)
        .then((result) => {
            res.status(200).json(result);

        })
        .catch((err) => {
            console.log(err);
            res.status(500).json(err);
        });
})
router.get('/getdetails', verifytoken, (req, res) => {
    User.findById(req.user._id)
        .then((result) => {
            res.status(200).json(result);
        }).catch((err) => {
            console.log(err);
            res.status(500).json(err);
        });
});


router.post('/adduser',  (req, res) => {
    const { name, email, password, username,fullname } = req.body;
    try {
        const newUser = new User({ name, email, password, username,fullname });
         newUser.save();
        res.status(201).json(newUser);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Server error' });
    }
});

router.post('/authenticate', (req, res) => {
    const { email, password } = req.body;
    User.findOne({ email, password })
        .then((result) => {
            if (result) {
                if (result.blocked) {
                    return res.status(405).json({ message: 'user blocked' });
                }
                // Generate token
                const { _id, name, email } = result;
                const payload = { _id, name, email };
                jwt.sign(
                    payload,
                    process.env.JWT_SECRET,
                    { expiresIn: '1h' },
                    (err, token) => {
                        if (err) {
                            console.log(err);
                            res.status(500).json(err);
                        } else {
                            res.status(200).json({ token });
                        }
                    }
                );
            } else {
                res.status(401).json({ message: 'Invalid user email or password' });
            }
        })
        .catch((err) => {
            console.log(err);
            res.status(500).json(err);
        });
});

module.exports = router;