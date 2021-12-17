import 'react-perfect-scrollbar/dist/css/styles.css';
import { useRoutes } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';
import GlobalStyles from './components/GlobalStyles';
import theme from './theme';
import routes from './routes';

const App = () => {
  const content = useRoutes(routes);

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      {content}
    </ThemeProvider>
  );
};

export default App;
