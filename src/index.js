import ReactDOM from 'react-dom/client';
import { Suspense, StrictMode } from 'react';
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
  <StrictMode>
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <Suspense fallback={<h2>Loading... </h2>}>
          <HashRouter>
            <App />
          </HashRouter>
        </Suspense>
      </ThemeProvider>
    </Provider>
  </StrictMode>
)