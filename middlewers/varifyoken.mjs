import jwt from 'jsonwebtoken'
import jwtSecret from "../src/Config/jwt.mjs"


function verifyToken(req, res, next) {
    try {
        const token = req.headers.authorization.slice(7)
        jwt.verify(token, jwtSecret)
        next()
    } catch (e) {
        res.send({ message: "Invalid Token" })
    }
}

export default verifyToken

