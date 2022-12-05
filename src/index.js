import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { HashRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import App from './App';
import store from './store';
import theme from '@/assets/theme';

import '@/assets/css/index.less';
import 'normalize.css';

const root = ReactDOM.createRoot(document.querySelector("#root"))

root.render(
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <HashRouter>
        <App />
      </HashRouter>
    </ThemeProvider>
  </Provider>
)