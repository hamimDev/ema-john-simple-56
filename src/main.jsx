import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import Home from './Layout/Home.jsx';
import Order from './Shop/OrderS/Order.jsx';
import Orders from './Layout/Orders.jsx';
import Inventory from './Layout/Inventory.jsx';
import Login from './Layout/Login.jsx';
import cardProductLoader from './Loders/Loder.js';


{/* <ShopAll></ShopAll> */}

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    children: [
      {
        path: "/",
        element: <Order></Order>,
      },
      {
        path: "/orders",
        element: <Orders></Orders>,
        loader: cardProductLoader,
      },
      {
        path: "/inventory",
        element: <Inventory></Inventory>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
    ]
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);


// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
// )
