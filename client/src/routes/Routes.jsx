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
            {
                path:'/my-events',
                Component: MyEvents
            },
            
        ]
    },
]);

export default router;
