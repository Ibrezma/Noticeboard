import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Login from './Pages/Login.jsx';
import Registration from './Pages/Registration.jsx';
import Create from './Pages/Create.jsx';


import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";


const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>
  },
  {
    path:"/Login",
    element: <Login/>
  },
  {
    path:"/Registration",
    element: <Registration/>
  },
  {
    path: "/Create",
    element: <Create/>
  },
 
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
