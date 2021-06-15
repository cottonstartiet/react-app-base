import { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import logger from "../logger";
import userProfileService from "../services/userProfileService";
import { IResponseLocals } from "../types/auth";

const profilesController = {
    async getUserProfile(_: Request, res: Response) {
        const { user } = res.locals as IResponseLocals;
        logger.info({
            message: `Getting profile for user id ${user.uid}`
        });
        const profile = await userProfileService.getProfileByUserId(user.uid);
        if (profile) {
            logger.info({
                message: 'User profile found',
                data: profile
            });
            return res.status(StatusCodes.OK).json(profile);
        }

        logger.error({
            message: `Profile not found for user id ${user.uid}`
        });

        return res.status(StatusCodes.NOT_FOUND).json({
            message: 'User profile not found'
        });
    }
}

export default profilesController;
