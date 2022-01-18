import { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import logger from "../logger";
import { IProfilePatchRequest } from "../types";
import { IResponseLocals } from "../types/auth";
import { userProfileService } from "../services";

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
    },

    async updateUserProfile(req: Request, res: Response) {
        const { user } = res.locals as IResponseLocals;
        logger.info({
            message: `Updating profile for user id ${user.uid}`
        });
        const updatedProfile = await userProfileService.createOrUpdateProfile(user.uid, req.body as IProfilePatchRequest);
        return res.status(StatusCodes.CREATED).json(updatedProfile);
    }
}

export default profilesController;