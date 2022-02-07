import { Schema, model } from 'mongoose';
import { IUserProfileModel } from '../types';

const schema = new Schema<IUserProfileModel>({
    uid: { type: String, required: true, index: true, unique: true },
    title: { type: String, required: false },
    subtitle: { type: String, required: false }
});

export const UserProfileModel = model<IUserProfileModel>('UserProfile', schema);