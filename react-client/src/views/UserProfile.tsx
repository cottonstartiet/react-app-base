import React, { useEffect } from "react";
import Loading from "../components/Loading";
import { fetchUserProfile, useAppDispatch, useAppSelector } from "../store";

export default function UserProfile() {
    const { profile, apiStatus } = useAppSelector(state => state.userProfile)
    const appDispatch = useAppDispatch();
    useEffect(() => {
        appDispatch(fetchUserProfile());
    }, [appDispatch]);
    return (
        <div>
            <h2>User Profile</h2>
            {apiStatus.status === 'inprogress' && (
                <Loading />
            )}
            {apiStatus.status === 'error' && (
                <div>
                    {apiStatus.statusCode}
                    <hr />
                </div>
            )}
            {profile && (
                <div>
                    {JSON.stringify(apiStatus.data, null, 2)}
                    {JSON.stringify(profile)}
                </div>
            )}
        </div>
    );
}

