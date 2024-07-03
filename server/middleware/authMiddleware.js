// const jwt = require('jsonwebtoken')
// const HttpError = require('../models/errorModel')

// const authMiddleware = async (req ,res ,next) =>{
//     const Authorization =req.headers.Authorization || req.headers.authorization;

//     if(Authorization && Authorization.startsWith("Bearer")){
//         const token = Authorization.split(' ')[1]
//         jwt.verify(token , process.env.JWT_SECRET, (err,info) => {
//             if(err){
//                 return next(new HttpError("Unauthorized. Invalid token",403))
//             }
//             req.user =info;
//             next()
//         })
//     } else{
//         return next (new HttpError("Unauthorized . No Token",402))
//     }

// }


// module.exports =authMiddleware


const jwt = require('jsonwebtoken');
const HttpError = require('../models/errorModel');

const authMiddleware = (req, res, next) => {
    try {
        const token = req.headers.authorization.split(' ')[1]; // Bearer token
        if (!token) {
            return next(new HttpError('Authentication failed!', 401));
        }
        const decodedToken = jwt.verify(token, process.env.JWT_SECRET);
        req.user = { id: decodedToken.id, name: decodedToken.name };
        next();
    } catch (err) {
        return next(new HttpError('Authentication failed!', 401));
    }
};

module.exports = authMiddleware;
