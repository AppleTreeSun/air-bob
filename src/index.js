import ReactDOM from 'react-dom/client';
import { StrictMode, Suspense } from 'react';
import { Provider } from 'react-redux';
import { HashRouter } from 'react-router-dom';

import hrRequest from '@/service';

import App from './App';
import store from './store';

import '@/assets/css/index.less';
import 'normalize.css';

hrRequest.get({
  url: 'http://123.207.32.32:8000/home/multidata'
}).then(res => {
  console.log(res.data);
})

const root = ReactDOM.createRoot(document.querySelector("#root"))

root.render(
  <StrictMode>
    <Provider store={store}>
      <Suspense fallback={<h2>Loading... </h2>}>
        <HashRouter>
          <App />
        </HashRouter>
      </Suspense>
    </Provider>
  </StrictMode>
)