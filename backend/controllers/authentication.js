const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const db = require('../db/database');
const router = express.Router();

// User login
router.post('/login', async (req, res) => {
    const user = db.users.find(u => u.email === req.body.email);

    if (!user) {
        return res.status(401).json({ message: 'Invalid email or password.' });
    }

    const isValidPassword = await bcrypt.compare(req.body.password, user.password);
    if (!isValidPassword) {
        return res.status(401).json({ message: 'Invalid email or password.' });
    }

    // Generate JWT
    const token = jwt.sign(
        { id: user.id, role: user.role },
        process.env.JWT_SECRET,
        { expiresIn: '1h' }
    );

    res.json({ message: 'Login successful', token });
});

// Verify token (for debugging or client-side validation)
router.post('/verify', (req, res) => {
    const token = req.headers.authorization?.split(' ')[1];

    if (!token) {
        return res.status(400).json({ message: 'Token is required.' });
    }

    try {
        const payload = jwt.verify(token, process.env.JWT_SECRET);
        res.json({ valid: true, payload });
    } catch (err) {
        res.status(401).json({ valid: false, message: 'Invalid token.' });
    }
});

module.exports = router;