import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import ErrorPage from './components/Error';
import About from './pages/about';
import Home from './pages/home';
import Flat from './pages/flat';



const router = createBrowserRouter(


  [

    {
      path: '/',
      element: <Home />
    },

    {
      path: '/home',
      element: <Home />,
    },

    {
      path: "/about",
      element: <About />,

    },

    {
      path: 'flat/',
      element: <ErrorPage />
    },

    {
      path: `/flat/:id`,
      element: <Flat />,
      errorElement: <ErrorPage />
    },



  ])


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);


