

function authenticateToken(req, res, next) {
    const authHeader = req.headers['authorization']
    const token = authHeader && authHeader.split(' ')[1]
    if (!token) {
        return res.status(401).json({ message: 'Access Denied' });
    }

    try {
        const verified = jwt.verify(token, JWT_SECRET);
        req.user = {verified,user};
        next();
    } catch (err) {
        res.status(400).json({ message: 'Invalid Token' });
    }
  }

  export {authenticateToken}
  