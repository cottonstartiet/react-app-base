import Loading from "../components/Loading";
import { useQuery } from 'react-query';
import { apiKeys, apiService } from "../services/apiService";
import { AxiosResponse } from "axios";
import { IUserProfile } from "../types";

export default function UserProfile() {
    const { isLoading, data, error } = useQuery<AxiosResponse<IUserProfile>>(apiKeys.fetchUserProfile, apiService.fetchUserProfile);
    return (
        <div>
            <h2>User Profile</h2>
            {isLoading && (
                <Loading />
            )}
            {error && (
                <div>
                    <hr />
                    {JSON.stringify(error)}
                </div>
            )}
            {data && (
                <div>
                    {JSON.stringify(data.data)}
                </div>
            )}
        </div>
    );
}

