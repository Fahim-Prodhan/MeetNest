import {
    createBrowserRouter,
} from "react-router";
import Root from "../layouts/root/Root";
import Home from "../pages/home/Home";
import Signup from "../pages/signup/Signup";
import Login from "../pages/login/Login";
import AddEvent from "../pages/event/addEvent/AddEvent";
import EventList from "../pages/event/eventList/EventList";


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
            }, 
            {
                path:'/login',
                Component: Login
            },
            {
                path:'/add-events',
                Component: AddEvent
            },
            {
                path:'/events',
                Component: EventList
            },
            
        ]
    },
]);

export default router;
