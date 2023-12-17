import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import ErrorPage from './components/Error';
import About from './pages/about';
import Home from './pages/home';
import Flat from './pages/flat';
import datasFlat from './assets/data.json'

const data = datasFlat.map(data => console.log(data))

const router = createBrowserRouter(

  [


    {
      path: '/',
      element: <Home />,
      errorElement: <ErrorPage />,
    },

    {
      path: "/about",
      element: <About />
    },

    {
      path: "/flat",
      element: <Flat />

    },

    {
      path: `/flat/:${data.id}`,
      element: <Flat />
    }


  ])


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);


