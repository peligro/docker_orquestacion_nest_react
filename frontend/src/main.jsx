import React from "react";
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
  
 
import Frontend from './componentes/Frontend';
import Home  from './paginas/Home';  

const router = createBrowserRouter(
  [
    {
      path:'/',
      element: <Frontend />,
      children:
      [
        {
          index:true,
          element: <Home /> 
        } 
      ]
    }
  ] , {
    future: {
      v7_fetcherPersist: true,
      v7_relativeSplatPath: true,
      v7_normalizeFormMethod: true,
      v7_partialHydration: true,
      v7_startTransition: true,
      v7_skipActionStatusRevalidation: true,
      v7_skipActionErrorRevalidation: true,
    },
  });
//https://reactrouter.com/en/6.27.0/upgrading/future#v7_skipactionerrorrevalidation
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} future={{
      v7_fetcherPersist: true,
      v7_relativeSplatPath: true,
      v7_normalizeFormMethod: true,
      v7_partialHydration: true,
      v7_startTransition: true,
      v7_skipActionStatusRevalidation: true,
      v7_skipActionErrorRevalidation: true,
    }} />
  </React.StrictMode>
)
