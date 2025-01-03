const express = require('express');
const bcrypt = require('bcrypt');
const db = require('../db/database');
const router = express.Router();

// User signup
router.post('/signup', async (req, res) => {
    const hashedPassword = await bcrypt.hash(req.body.password, 10);

    const newUser = {
        id: db.users.length + 1,
        name: req.body.name,
        email: req.body.email,
        role: req.body.role || 'user', // Default role is 'user'
        password: hashedPassword,
    };

    db.users.push(newUser);
    res.status(201).json({
        id: newUser.id,
        name: newUser.name,
        email: newUser.email,
        role: newUser.role,
    });
});

// Get all users (Admin only)
router.get('/', (req, res) => {
    if (req.currentUser?.role !== 'admin') {
        return res.status(403).json({ message: 'You are not allowed to view all users.' });
    }

    res.json(db.users.map(({ password, ...user }) => user)); // Exclude passwords
});

// Get a single user by ID
router.get('/:id', (req, res) => {
    const userId = parseInt(req.params.id);

    if (isNaN(userId)) {
        return res.status(404).json({ message: `Invalid id "${userId}"` });
    }

    const user = db.users.findOne(u => u.id === userId);
    if (!user) {
        return res.status(404).json({ message: `Could not find user with id "${userId}"` });
    }

    const { password, ...userWithoutPassword } = user;
    res.json(userWithoutPassword);
});

module.exports = router;
