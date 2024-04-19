const User = require("../models/User");
const jwt = require('jsonwebtoken')
const dotenv = require('dotenv');


class AuthMiddleware{
    verifyToken (req, res, next) {
        
        const jwtSecret = process.env.JWT_SECRET;
        
        const authHeader = req.headers.authorization;
    
        if (!authHeader || !authHeader.startsWith('Bearer ')) {
            return res.status(401).json({ message: 'Unauthorized' });
        }
    
        const token = authHeader.split(' ')[1];
    
        try {
            const decoded = jwt.verify(token, jwtSecret);
            req.user = decoded; // Attach decoded user data to the request object
            next();
        } catch (error) {
            return res.status(403).json({ message: 'Invalid token' });
        }
    };
}

module.exports = AuthMiddleware

