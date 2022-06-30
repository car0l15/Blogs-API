const { authenticateToken } = require('../utils/JWTToken');

const authentication = async (req, res, next) => {
    const token = req.headers.authorization;

    if (!token) {
        return res.status(401).json({ message: 'Token not found' });
    }

    // const payload = await authenticateToken(token);

   try {
    const payload = await authenticateToken(token);
    if (payload.error) {
        return res.status(401).json({ message: 'Expired or invalid token' });  
    }
    res.locals.payload = payload;
   return next();
   } catch (e) {
      return res.status(401).json({ message: e.message });
   }
};

module.exports = authentication;