import mongoose, { Schema, model } from 'mongoose';
import { IUserProfileModel } from '../types';

const schema = new Schema<IUserProfileModel>({
    _id: { type: String, default: new mongoose.Types.ObjectId() },
    uid: { type: String, required: true, index: true, unique: true },
    title: { type: String, required: false },
    subtitle: { type: String, required: false }
});

export const UserProfileModel = model<IUserProfileModel>('UserProfile', schema);