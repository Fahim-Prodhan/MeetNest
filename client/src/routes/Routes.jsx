import {
    createBrowserRouter,
} from "react-router";
import Root from "../layouts/root/Root";
import Home from "../pages/home/Home";
import Signup from "../pages/signup/Signup";


let router = createBrowserRouter([
    {
        path: "/",
        Component: Root,
        children: [
            {
                path: '/',
                Component: Home
            }, 
            {
                path:'/signup',
                Component: Signup
            }
        ]
    },
]);

export default router;
