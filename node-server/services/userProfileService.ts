import { QueryOptions } from 'mongoose'
import logger from '../logger';
import { UserProfileModel } from "../models";
import { IProfilePatchRequest } from "../types";

async function getProfileByUserId(uid: string) {
    const result = await UserProfileModel.findOne({
        uid
    }).lean();

    return result;
}

async function createOrUpdateProfile(uid: string, profileUpdate: IProfilePatchRequest) {
    const filter = {
        uid
    };
    const update = {
        title: profileUpdate.title,
        subtitle: profileUpdate.subtitle
    };
    const options: QueryOptions = {
        upsert: true,
        new: true
    };

    const result = await UserProfileModel.updateOne(filter, update, options).lean();
    logger.info({
        message: `Profile updated for uid ${uid}`,
        data: result
    });

    return result;
}

export const userProfileService = {
    getProfileByUserId,
    createOrUpdateProfile
}