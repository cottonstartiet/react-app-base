import axios from 'axios';
import requestHelper from './requestHelper';

const apiBaseUrl = process.env.REACT_APP_API_BASE_URL;
axios.defaults.baseURL = apiBaseUrl;

const apiService = {
    async fetchUserProfile<TResponse>() {
        return await requestHelper.get<TResponse>(`/profile`);
    },
    async updateUserProfile<TPayload, KResponse>(payload: TPayload) {
        return await requestHelper.patch<KResponse>(`/profile`, payload)
    }
}

export default apiService;