const { authenticateToken } = require('../utils/JWTToken');

const authentication = async (req, res, next) => {
    const token = req.headers.authorization;

    if (!token) {
        return res.status(401).json({ message: 'Token not found' });
    }

    const payload = await authenticateToken(token);
   try {
    res.locals.payload = payload;
    next();
   } catch (e) {
      return res.status(401).json({ message: 'Expired or invalid token' });
   }

    next();
};

module.exports = authentication;