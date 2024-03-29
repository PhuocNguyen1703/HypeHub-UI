import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';

import reportWebVitals from './reportWebVitals';
import App from './App';
import GlobalStyles from '~/components/GlobalStyles/GlobalStyles';
import { store, persistor } from './redux/Store/store';
import { PersistGate } from 'redux-persist/integration/react';
import { BrowserRouter } from 'react-router-dom';
import { ModalProvider } from './components/Modal/ModalProvider';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <BrowserRouter>
        <GlobalStyles>
          <App />
          <ModalProvider />
        </GlobalStyles>
      </BrowserRouter>
    </PersistGate>
  </Provider>,
  // </React.StrictMode>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
