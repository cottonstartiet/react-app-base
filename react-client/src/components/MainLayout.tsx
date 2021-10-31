import { styled } from '@mui/material/styles';
import MainNavbar from './MainNavbar';
import { Route, Switch } from 'react-router-dom';
import { RoutePaths } from '../types';
import Login from '../pages/Login';
import Register from '../pages/Register';
import Landing from '../pages/Landing';

const MainLayoutRoot = styled('div')(
  ({ theme }) => ({
    backgroundColor: theme.palette.background.paper,
    display: 'flex',
    height: '100%',
    overflow: 'hidden',
    width: '100%'
  })
);

const MainLayoutWrapper = styled('div')({
  display: 'flex',
  flex: '1 1 auto',
  overflow: 'hidden',
  paddingTop: 64
});

const MainLayoutContainer = styled('div')({
  display: 'flex',
  flex: '1 1 auto',
  overflow: 'hidden'
});

const MainLayoutContent = styled('div')({
  flex: '1 1 auto',
  height: '100%',
  overflow: 'auto'
});

const MainLayout = () => (
  <MainLayoutRoot>
    <MainNavbar />
    <MainLayoutWrapper>
      <MainLayoutContainer>
        <MainLayoutContent>
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
          </Switch>
        </MainLayoutContent>
      </MainLayoutContainer>
    </MainLayoutWrapper>
  </MainLayoutRoot>
);

export default MainLayout;
