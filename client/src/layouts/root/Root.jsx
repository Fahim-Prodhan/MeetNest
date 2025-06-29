import React from 'react';
import { Outlet } from 'react-router';
import Navbar from '../../components/navbar/Navbar';

const Root = () => {
    return (
        <div>
            <Navbar/>
            <Outlet></Outlet>
        </div>
    );
}

export default Root;