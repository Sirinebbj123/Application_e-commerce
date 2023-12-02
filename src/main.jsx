import React from 'react';
import ReactDOM from "react-dom/client";
import App from './App.jsx';
import "remixicon/fonts/remixicon.css";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Store from './redux/store.jsx';
import { Provider } from 'react-redux';
import { BrowserRouter } from "react-router-dom";
import {ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={Store}>
        <ToastContainer
         theme="dark"
          position="top-right"
          autoClose={3000}
          closeOnClick
          pauseOnHover={false}>
        </ToastContainer>
        <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);
