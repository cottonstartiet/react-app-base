import { NextFunction, Request, Response } from "express";
import { StatusCodes } from 'http-status-codes';
import firebaseAdmin from "../services/firebaseAdminService";

async function checkIfAuthenticated(req: Request, res: Response, next: NextFunction) {
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
        console.log(JSON.stringify(error));
        return res
            .status(StatusCodes.INTERNAL_SERVER_ERROR)
            .json({
                message: 'Internal Server Error: Parsing auth token'
            });
    }
}

export {
    checkIfAuthenticated
}