import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router";
import Root from "../layouts/root/Root";
import Home from "../components/home/Home";
  
  let router = createBrowserRouter([
    {
      path: "/",
      Component: <Root></Root>,
      children:[
        {
            path:'/',
            Component:<Home/>
        }
      ]
    },
  ]);
  
export default router;
  