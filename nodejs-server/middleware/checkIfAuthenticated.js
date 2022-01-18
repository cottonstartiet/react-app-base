const StatusCodes = require('http-status-codes');
const logger = require('../logger');
const firebaseAdmin = require('../services/firebaseService');

async function checkIfAuthenticated(req, res, next) {
    try {
        const authToken = req.headers['authorization'] && req.headers['authorization'].split(' ')[0] === 'Bearer' ?
            req.headers.authorization?.split(' ')[1] :
            null;

        if (!authToken) {
            return res.sendStatus(StatusCodes.UNAUTHORIZED);

        }

        const userInfo = await firebaseAdmin
            .auth()
            .verifyIdToken(authToken);
        res.locals.user = userInfo;
        return next();

    } catch (error) {
        logger.error({
            message: 'Firebase auth check failed',
            data: error
        })
        return res
            .status(StatusCodes.INTERNAL_SERVER_ERROR)
            .json({
                message: 'Internal Server Error: Parsing auth token'
            });
    }
};

module.exports = checkIfAuthenticated;