import React from 'react';
import ReactDOM from 'react-dom/client';
import './style.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Home from './components/Home';
import Calculator from './components/Calculator';
import LoadQuotes from './components/Quotes';
import PageError from './components/PageError';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
    errorElement: <PageError />,
  },
  {
    path: '/calculator',
    element: <Calculator />,
  },
  {
    path: '/quotes',
    element: <LoadQuotes />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
