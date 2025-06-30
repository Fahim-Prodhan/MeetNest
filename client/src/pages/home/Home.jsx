import React from 'react';
import HeaderBanner from '../../components/HeaderBanner/HeaderBanner';
import MostRecentEvent from '../../components/mostRecentEvent/MostRecentEvent';

const Home = () => {
    return (
        <div>
            <HeaderBanner />
            <div className='px-8 md:px-24 mt-12'>
                <MostRecentEvent />
            </div>
        </div>
    );
};

export default Home;