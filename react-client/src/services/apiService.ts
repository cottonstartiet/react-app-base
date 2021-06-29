import requestHelper from './requestHelper';

const apiService = {
    async fetchUserProfile<TResponse>() {
        return await requestHelper.get<TResponse>(`/profile`);
    },
    async updateUserProfile<TPayload, KResponse>(payload: TPayload) {
        return await requestHelper.patch<KResponse>(`/profile`, payload)
    }
}

export default apiService;