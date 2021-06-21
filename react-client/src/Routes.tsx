import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import PrivateRoute from './components/PrivateRoute';
import Dashbaord from './views/Dashboard';
import FirebaseUserInfo from './views/FirebaseUserInfo';
import Landing from './views/Landing';
import Login from './views/Login';
import UserProfile from './views/UserProfile';
import EditProfile from './views/EditProfile';
import { RoutePaths } from './types';

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
                    <Dashbaord />
                </PrivateRoute>
            </Switch>
        </Router>
    );
}