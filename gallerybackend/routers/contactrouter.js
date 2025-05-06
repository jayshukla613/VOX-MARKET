const express = require('express');
const router = express.Router();
const Model = require('../models/contact');

router.post('/savecontact', async (req, res) => {
    const { name, email, subject, message } = req.body;
    try {
        const newContact = new Model({ name, email, subject, message });
        await newContact.save();
        res.status(200).json({ message: 'Contact form submitted successfully' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'An error occurred while submitting the contact form' });
    }
});

router.get('/getcontact', async (req, res) => {
    try {
        const contacts = await Model.find();
        res.status(200).json(contacts);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'An error occurred while fetching contacts' });
    }
});

module.exports = router;