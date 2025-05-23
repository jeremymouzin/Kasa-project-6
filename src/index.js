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
      path: '/Kasa-project-6',
      element: <Home />
    },

    {
      path: '/Kasa-project-6/home',
      element: <Home />,
    },

    {
      path: "/Kasa-project-6/about",
      element: <About />,

    },

    {
      path: `/Kasa-project-6/flat/:id`,
      element: <Flat />,
      errorElement: <ErrorPage />
    },

    {
      path: '*',
      element: <ErrorPage />
    }

  ])


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);


