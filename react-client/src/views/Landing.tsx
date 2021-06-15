import React from "react";
import { Link } from "react-router-dom";

export default function Landing() {
    return (
        <div>
            <div>This is the landing page and is accessible without authentication. Click on the login link to go to the login button.</div>
            <div>This project has firebase login support.</div>
            <div>If you try to go to the dashboard or the profile page without logging in, you will be redirected to the login page and on login, it will take you to the page.</div>
            <nav>
                <ul>
                    <li>
                        <Link to='/'>Landing</Link>
                    </li>
                    <li>
                        <Link to='/me'>My Profile</Link>
                    </li>
                    <li>
                        <Link to='/dashboard'>Dashboard</Link>
                    </li>
                    <li>
                        <Link to='/firebase'>Firebase User</Link>
                    </li>
                    <li>
                        <Link to='/login'>Login</Link>
                    </li>
                </ul>
            </nav>
        </div>
    )
}