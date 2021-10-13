import React, { useEffect } from "react";
import Loading from "../components/Loading";

export default function UserProfile() {
    return (
        <div>
            <h2>User Profile</h2>
            {/* {apiStatus.status === 'inprogress' && (
                <Loading />
            )} */}
            {/* {apiStatus.status === 'error' && (
                <div>
                    <hr />
                    {apiStatus.statusCode}
                </div>
            )} */}
            {true && (
                <div>
                    {'Display profile here'}
                </div>
            )}
        </div>
    );
}

