import React from 'react';
import { Outlet } from 'react-router';
import Navbar from '../../components/navbar/Navbar';

const Root = () => {
    return (
        <div>
            <Navbar />
            <div className='px-8 md:px-24 mt-12'>
                <Outlet></Outlet>
            </div>
        </div>
    );
}

export default Root;