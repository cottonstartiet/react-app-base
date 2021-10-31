import React from "react";
import { Link } from "react-router-dom";
import Loading from "../components/Loading";
import { useAuth } from "../hooks";
import { RoutePaths } from "../types";

export default function Landing() {
    const { signinStatus } = useAuth();

    if (signinStatus === 'inprogress') {
        return <Loading />
    }

    return (
        <>
            <div>This is the landing page and is accessible without authentication. Click on the login link to go to the login page.</div>
            <div>This project has firebase login support.</div>
            <div>If you try to go to the dashboard or the profile page without logging in, you will be redirected to the login page and on login, it will take you to the page.</div>
            <div>{signinStatus === 'signedin' ? 'User is logged in' : 'User is not logged in'}</div>
            <nav>
                <ul>
                    <li>
                        <Link to={RoutePaths.landing}>Landing</Link>
                    </li>
                    <li>
                        <Link to={RoutePaths.dashboard}>Dashboard</Link>
                    </li>
                    <li>
                        <Link to={RoutePaths.login}>Login</Link>
                    </li>
                    <li>
                        <Link to={RoutePaths.register}>Register</Link>
                    </li>
                </ul>
            </nav>
        </>
    )
}