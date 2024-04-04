import { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import 'react-toastify/dist/ReactToastify.css';
import App from './app';
import { ToastContainer } from 'react-toastify';

// ----------------------------------------------------------------------

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <HelmetProvider>
    <BrowserRouter>
      <Suspense>
        <App />
        <ToastContainer position="top-center" autoClose="3000" />
      </Suspense>
    </BrowserRouter>
  </HelmetProvider>
);