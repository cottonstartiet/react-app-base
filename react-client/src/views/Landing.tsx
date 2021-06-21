import React from "react";
import { Link } from "react-router-dom";
import { RoutePaths } from "../types";

export default function Landing() {
    return (
        <div>
            <div>This is the landing page and is accessible without authentication. Click on the login link to go to the login page.</div>
            <div>This project has firebase login support.</div>
            <div>If you try to go to the dashboard or the profile page without logging in, you will be redirected to the login page and on login, it will take you to the page.</div>
            <nav>
                <ul>
                    <li>
                        <Link to={RoutePaths.landing}>Landing</Link>
                    </li>
                    <li>
                        <Link to={RoutePaths.profile}>My Profile</Link>
                    </li>
                    <li>
                        <Link to={RoutePaths.editProfile}>Edit Profile</Link>
                    </li>
                    <li>
                        <Link to={RoutePaths.dashboard}>Dashboard</Link>
                    </li>
                    <li>
                        <Link to={RoutePaths.firebase}>Firebase User</Link>
                    </li>
                    <li>
                        <Link to={RoutePaths.login}>Login</Link>
                    </li>
                </ul>
            </nav>
        </div>
    )
}