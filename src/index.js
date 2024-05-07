import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Kajal from './kajal';
import Prabhas from './prabhas';
import Counteries from './componets';
import CountryDetails from './CountrDetails';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children:[
      {
        path:"/kajal",
        element:<Kajal></Kajal>
      },
      {
      path:"/prabhas",
      element:<Prabhas></Prabhas>
      },
      {
        path:"/countries",
        element:<Counteries></Counteries>
      },
      {
        path:"/CountryDetails/:cname",
        element:<CountryDetails></CountryDetails>
      }
    ]
},
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <RouterProvider router={router}></RouterProvider>    
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
