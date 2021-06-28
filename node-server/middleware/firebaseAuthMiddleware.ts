import { NextFunction, Request, Response } from "express";
import { StatusCodes } from 'http-status-codes';
import logger from "../logger";
import firebaseAdmin from "../services/firebaseAdminService";

export const firebaseMiddleware = {
    async checkIfAuthenticated(req: Request, res: Response, next: NextFunction) {
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
    }
};