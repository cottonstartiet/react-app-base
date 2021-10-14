import { AxiosResponse } from 'axios';
import { IUserProfile, IUserProfileUpdate } from '../types';
import requestHelper from './requestHelper';

export const apiKeys = {
    fetchUserProfile: 'GET/profile',
    updateUserProfile: 'POST/profile'
}

export const apiService = {
    async fetchUserProfile(): Promise<AxiosResponse<IUserProfile>> {
        return await requestHelper.get(`/profile`);
    },
    async updateUserProfile(payload: IUserProfileUpdate): Promise<AxiosResponse<IUserProfile>> {
        return await requestHelper.patch(`/profile`, payload)
    }
}