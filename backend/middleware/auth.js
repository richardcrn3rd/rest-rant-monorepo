const db = require('../db/database');
const jwt = require('jsonwebtoken');

function defineCurrentUser(req, res, next) {
    const token = req.headers.authorization?.split(' ')[1];
    if (!token) {
        req.currentUser = null;
        return next();
    }

    try {
        const payload = jwt.verify(token, process.env.JWT_SECRET);
        req.currentUser = db.users.find(user => user.id === payload.id);
        if (!req.currentUser) {
            return res.status(401).json({ message: 'User not found' });
        }
    } catch (err) {
        return res.status(401).json({ message: 'Invalid token' });
    }

    next();
}

module.exports = defineCurrentUser;