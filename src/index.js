import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { AuthProvider } from './store/auth';
import {ToastContainer} from "react-toastify";
import 'react-toastify/ReactToastify.css';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <AuthProvider>
  <BrowserRouter>
    <App />
    <ToastContainer 
    position='top-right'
    autoClose={3000}
    hideProgressBar={false}
    newestOnTop={true}
    closeOnClick
    rtl={false}
    pauseOnFocusLoss
    draggable
    pauseOnHover
    theme='colored'
    bodyClassName="toastBody"
    />
  </BrowserRouter>
  </AuthProvider>
);

