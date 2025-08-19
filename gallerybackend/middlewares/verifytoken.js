const jwt=require('jsonwebtoken');
require('dotenv').config();

const verifytoken = (req, res, next) => {
    const token = req.headers['x-auth-token'];
    if (!token) {
        return res.status(403).json({ message: 'Token not provided' });
    }

    if (typeof token !== 'string' || token.split('.').length !== 3) {
        return res.status(400).json({ message: 'Malformed token' });
    }

    jwt.verify(
        token,
        process.env.JWT_SECRET,
        (err, payload) => {
            if (err) {
                console.error('JWT verification error:', err);
                return res.status(401).json({ message: 'Invalid token' });
            }

            req.user = payload;
            next();
        }
    );
};

module.exports=verifytoken;