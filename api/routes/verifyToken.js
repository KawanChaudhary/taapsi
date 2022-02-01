const jwt = require("jsonwebtoken")

// Verify token

const verifyToken = (req, res, next) => {
    const authHeader = req.headers.token
    if (authHeader) {
        const token = authHeader.split(" ")[1];
        jwt.verify(token, process.env.JWT_SEC, (
            err, user) => {
            if (err) res.status(403).json("Invalid Token!");
            req.user = user;
            next();
        })
    }
    else {
        return res.status(401).json("Your are not authenticated");
    }
}

// Verify Token Authorization


const verifyTokenAuth = (req, res, next) => {
    verifyToken(req, res, () => {
        if (req.user.id === req.params.id || req.user.isAdmin) {
            next();
        }
        else {
            res.status(403).json("You are not allowed to do that!")
        }
    })

}


// Verify token and admin

const verifyTokenAdmin = (req, res, next) => {
    verifyToken(req, res, () => {
        if (req.user.isAdmin) {
            next();
        }
        else {
            res.status(403).json("You are not allowed to do that!")
        }
    })

}

module.exports = { verifyToken, verifyTokenAuth, verifyTokenAdmin }