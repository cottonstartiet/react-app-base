import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import PrivateRoute from './components/PrivateRoute';
import Dashbaord from './views/Dashboard';
import FirebaseUserInfo from './views/FirebaseUserInfo';
import Landing from './views/Landing';
import Login from './views/Login';
import UserProfile from './views/UserProfile';

export default function Routes() {
    return (
        <Router>
            <Switch>
                <Route exact path='/'>
                    <Landing />
                </Route>
                <Route path='/login'>
                    <Login />
                </Route>
                <PrivateRoute path='/firebase'>
                    <FirebaseUserInfo />
                </PrivateRoute>
                <PrivateRoute path='/me'>
                    <UserProfile />
                </PrivateRoute>
                <PrivateRoute path='/dashboard'>
                    <Dashbaord />
                </PrivateRoute>
            </Switch>
        </Router>
    );
}