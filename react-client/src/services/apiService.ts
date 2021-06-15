import axios from 'axios';
import requestHelper from './requestHelper';

const apiBaseUrl = process.env.REACT_APP_API_BASE_URL;
axios.defaults.baseURL = apiBaseUrl;

const apiService = {
    async fetchUserProfile<T>() {
        return await requestHelper.get<T>(`/profile`);
    }
}

export default apiService;