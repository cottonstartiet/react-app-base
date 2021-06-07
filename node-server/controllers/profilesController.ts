import { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import logger from "../logger";
import { IResponseLocals } from "../types/auth";

const profilesController = {
    async getUserProfile(_: Request, res: Response) {
        const { user } = res.locals as IResponseLocals;
        // const profile = await userProfileService.getProfileByUserId(user.uid)
        logger.info({
            message: 'User found',
            data: user
        });
        if (user) {
            return res.status(StatusCodes.OK).json(user);
        }

        res.sendStatus(StatusCodes.NOT_FOUND)
    }
}

export default profilesController;
