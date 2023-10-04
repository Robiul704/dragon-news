import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import Root from "./Root/Root";
import Home from "./omponents/home/Home";
import About from "./omponents/shared/Navbar/About";
import Career from "./omponents/shared/Navbar/Career";
import Authprovider from "./omponents/Authprovider/Authprovider";
import Login from "./omponents/Authprovider/login/Login";
import Resister from "./omponents/Authprovider/resister/Resister";
import Newsdetails from "./omponents/home/Newsdetails";
import Privateroute from "./omponents/Authprovider/Privateroute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children:[
      {
        path:'/',
        element:<Home></Home>,
        loader:()=>fetch('/news.json')
      },
      {
        path:'/news/:id',
        element:<Privateroute><Newsdetails></Newsdetails></Privateroute>
      },
      {
        path:'/about',
        element:<About></About>
      },
      {
        path:'/career',
        element:<Career></Career>
      },{
        path:'/login',
        element:<Login></Login>
      },
      {
        path:'/resister',
        element:<Resister></Resister>
      }
    ]

  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
   <Authprovider>
   <RouterProvider router={router} />
   </Authprovider>
  </React.StrictMode>
);