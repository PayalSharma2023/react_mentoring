import React from "react";
import Navbar from "./Components/navbar";
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import Home from "./Components/Home";
import Login from "./Components/Login";
import About from "./Components/About";
import User from "./Components/User";

function DD() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <><Navbar/><Home/></> 
    },
    {
      path: '/login',
      element: <><Navbar/><Login/></>
    },
    {
      path: '/about',
      element: <><Navbar/><About/></>
    },
    {
      path: '/user/:username',
      element: <><Navbar/><User/></>
    },
])
  return (
    <>

    <RouterProvider router={router}/>
    </>
  );
}

export default DD;
