const jwt = require('jsonwebtoken')

const authenticateToken = (req, res, next) =>{
  const token = req.header('Authorization')?.split(' ')[1];
  
  if (!token) {
    return res.status(403).json({ message: 'Access denied' });
  }
  
  try{
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded;
    next();
  }catch(err){
    return res.status(401).json({ message: 'Invalid token' });
  }
} 

module.exports = authenticateToken