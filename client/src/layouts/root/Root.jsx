import React from 'react';
import { Outlet } from 'react-router';
import Navbar from '../../components/navbar/Navbar';
import Footer from '../../components/footer/Footer';

const Root = () => {
    return (
        <div>
            <div className="sticky top-0 z-[99]"><Navbar></Navbar></div>
            <div className=''>
                <Outlet></Outlet>
            </div>
            <Footer/>
        </div>
    );
}

export default Root;