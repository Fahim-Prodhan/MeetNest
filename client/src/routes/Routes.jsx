import {
    createBrowserRouter,
} from "react-router";
import Root from "../layouts/root/Root";
import Home from "../pages/home/Home";
import Signup from "../pages/signup/Signup";
import Login from "../pages/login/Login";
import AddEvent from "../pages/event/addEvent/AddEvent";
import EventList from "../pages/event/eventList/EventList";
import MyEvents from "../pages/event/myEvents/MyEvents";
import ProtectedRoutes from "./ProtectedRoutes";


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
                path: '/signup',
                Component: Signup
            },
            {
                path: '/login',
                Component: Login
            },
            {
                path: '/add-events',
                element: <ProtectedRoutes><AddEvent /></ProtectedRoutes>
            },
            {
                path: '/events',
                element: <ProtectedRoutes><EventList /></ProtectedRoutes>
            }
            ,
            {
                path: '/my-events',
                element: <ProtectedRoutes><MyEvents /></ProtectedRoutes>
            }
        ]
    },
]);

export default router;
