import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import PrivateRoute from './components/PrivateRoute';
import FirebaseUserInfo from './pages/FirebaseUserInfo';
import Landing from './pages/Landing';
import Login from './pages/Login';
import UserProfile from './pages/UserProfile';
import EditProfile from './pages/EditProfile';
import { RoutePaths } from './types';
import DashboardLayout from './pages/DashboardLayout';
import { useAuth } from './hooks';
import Register from './pages/Register';
import Error from './pages/Error';
import Loading from './components/Loading';

export default function Routes() {
    const { signinStatus, user } = useAuth();

    if (signinStatus == 'inprogress') {
        return (
            <Loading />
        );
    }

    if (signinStatus == 'signedin' && user) {
        return (
            <Router>
                <Switch>
                    {/* <PrivateRoute path={RoutePaths.firebase}>
                        <FirebaseUserInfo />
                    </PrivateRoute>
                    <PrivateRoute path={RoutePaths.profile}>
                        <UserProfile />
                    </PrivateRoute>
                    <PrivateRoute path={RoutePaths.editProfile}>
                        <EditProfile />
                    </PrivateRoute> */}
                    <PrivateRoute path={RoutePaths.dashboard}>
                        <DashboardLayout />
                    </PrivateRoute>
                </Switch>
            </Router>
        );
    }

    return (
        <Router>
            <Switch>
                <Route exact path={RoutePaths.landing}>
                    <Landing />
                </Route>
                <Route path={RoutePaths.login}>
                    <Login />
                </Route>
                <Route path={RoutePaths.register}>
                    <Register />
                </Route>
                <Route path={RoutePaths.notFound}>
                    <Error />
                </Route>
            </Switch>
        </Router>
    );
}