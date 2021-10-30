import { useState } from 'react';
import { styled } from '@mui/material/styles';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import DashboardNavbar from '../components/DashboardNavbar';
import DashboardSidebar from '../components/DashboardSidebar';
import { RoutePaths } from './../types';
import Account from './Account';
import DashboardHome from './DashboardHome';
import CustomerList from './CustomerList';
import ProductList from './ProductList';
import Settings from './Settings';
import PrivateRoute from '../components/PrivateRoute';
import Login from './Login';
import Register from './Register';

const DashboardLayoutRoot = styled('div')(
  ({ theme }: any) => ({
    backgroundColor: theme.palette.background.default,
    display: 'flex',
    height: '100%',
    overflow: 'hidden',
    width: '100%'
  })
);

const DashboardLayoutWrapper = styled('div')(
  ({ theme }: any) => ({
    display: 'flex',
    flex: '1 1 auto',
    overflow: 'hidden',
    paddingTop: 64,
    [theme.breakpoints.up('lg')]: {
      paddingLeft: 256
    }
  })
);

const DashboardLayoutContainer = styled('div')({
  display: 'flex',
  flex: '1 1 auto',
  overflow: 'hidden'
});

const DashboardLayoutContent = styled('div')({
  flex: '1 1 auto',
  height: '100%',
  overflow: 'auto'
});

const DashboardLayout = () => {
  const [isMobileNavOpen, setMobileNavOpen] = useState(false);

  return (
    <DashboardLayoutRoot>
      <DashboardNavbar onMobileNavOpen={() => setMobileNavOpen(true)} />
      <DashboardSidebar
        onMobileClose={() => setMobileNavOpen(false)}
        openMobile={isMobileNavOpen}
      />
      <DashboardLayoutWrapper>
        <DashboardLayoutContainer>
          <DashboardLayoutContent>
            <Router>
              <Switch>
                <Route exact path={RoutePaths.dashboard}>
                  <DashboardHome />
                </Route>
                <Route path={RoutePaths.customers}>
                  <CustomerList />
                </Route>
                <PrivateRoute path={RoutePaths.products}>
                  <ProductList />
                </PrivateRoute>
                <PrivateRoute path={RoutePaths.profile}>
                  <Account />
                </PrivateRoute>
                <PrivateRoute path={RoutePaths.settings}>
                  <Settings />
                </PrivateRoute>
              </Switch>
            </Router>
          </DashboardLayoutContent>
        </DashboardLayoutContainer>
      </DashboardLayoutWrapper>
    </DashboardLayoutRoot>
  );
};

export default DashboardLayout;
