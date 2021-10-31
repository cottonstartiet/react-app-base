import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import PrivateRoute from './components/PrivateRoute';
import { RoutePaths } from './types';
import Dashboard from './pages/Dashboard';
import { useAuth } from './hooks';
import Error from './pages/Error';
import Loading from './components/Loading';
import MainLayout from './components/MainLayout';

export default function Routes() {
    const { signinStatus } = useAuth();

    if (signinStatus === 'inprogress') {
        return (
            <Loading />
        );
    }

    return (
        <Router>
            <Switch>
                <PrivateRoute path={RoutePaths.dashboard}>
                    <Dashboard />
                </PrivateRoute>
                <Route path={RoutePaths.landing}>
                    <MainLayout />
                </Route>
                <Route path={RoutePaths.notFound}>
                    <Error />
                </Route>
            </Switch>
        </Router>
    );
}