const jwt = require('jsonwebtoken');

const protect = (req, res, next) => {
  const token = req.header('x-auth-token');
  if (!token) {
    return res.status(401).json({ message: 'No token, authorization denied' });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded; // Attach decoded user info to request
    next(); // Move to the next middleware/route
  } catch (error) {
    res.status(400).json({ message: 'Token is not valid' });
  }
};

module.exports = protect;
