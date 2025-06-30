import React from 'react';
import HeaderBanner from '../../components/HeaderBanner/HeaderBanner';
import MostRecentEvent from '../../components/mostRecentEvent/MostRecentEvent';
import MissionAndVision from '../../components/missionVision/MissionVision';
import CustomerReview from '../../components/customerReview/CustomerReview';

const Home = () => {
    return (
        <div>
            <HeaderBanner />
            <div className='px-8 md:px-24 mt-12'>
                <MostRecentEvent />
                <MissionAndVision/>
                <CustomerReview/>
            </div>
        </div>
    );
};

export default Home;