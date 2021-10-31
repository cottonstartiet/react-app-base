import { useState } from 'react';
import { styled } from '@mui/material/styles';
import { Route, Switch } from 'react-router-dom';
import DashboardNavbar from '../components/DashboardNavbar';
import DashboardSidebar from '../components/DashboardSidebar';
import { RoutePaths } from '../types';
import Account from './Account';
import DashboardHome from './DashboardHome';
import CustomerList from './CustomerList';
import ProductList from './ProductList';
import Settings from './Settings';

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

const Dashboard = () => {
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
            <Switch>
              <Route path={RoutePaths.customers}>
                <CustomerList />
              </Route>
              <Route path={RoutePaths.products}>
                <ProductList />
              </Route>
              <Route path={RoutePaths.profile}>
                <Account />
              </Route>
              <Route path={RoutePaths.settings}>
                <Settings />
              </Route>
              <Route path={RoutePaths.dashboard}>
                <DashboardHome />
              </Route>
            </Switch>
          </DashboardLayoutContent>
        </DashboardLayoutContainer>
      </DashboardLayoutWrapper>
    </DashboardLayoutRoot>
  );
};

export default Dashboard;
