import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import PrivateRoute from './components/PrivateRoute';
import FirebaseUserInfo from './pages/FirebaseUserInfo';
import Landing from './pages/Landing';
import Login from './pages/Login';
import UserProfile from './pages/UserProfile';
import EditProfile from './pages/EditProfile';
import { RoutePaths } from './types';
import DashboardLayout from './components/DashboardLayout';

export default function Routes() {
    return (
        <Router>
            <Switch>
                <Route exact path={RoutePaths.landing}>
                    <Landing />
                </Route>
                <Route path={RoutePaths.login}>
                    <Login />
                </Route>
                <PrivateRoute path={RoutePaths.firebase}>
                    <FirebaseUserInfo />
                </PrivateRoute>
                <PrivateRoute path={RoutePaths.profile}>
                    <UserProfile />
                </PrivateRoute>
                <PrivateRoute path={RoutePaths.editProfile}>
                    <EditProfile />
                </PrivateRoute>
                <PrivateRoute path={RoutePaths.dashboard}>
                    <DashboardLayout />
                </PrivateRoute>
            </Switch>
        </Router>
    );
}