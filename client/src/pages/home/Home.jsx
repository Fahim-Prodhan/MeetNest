import React from 'react';
import HeaderBanner from '../../components/HeaderBanner/HeaderBanner';
import MostRecentEvent from '../../components/mostRecentEvent/MostRecentEvent';
import MissionAndVision from '../../components/missionVision/MissionVision';

const Home = () => {
    return (
        <div>
            <HeaderBanner />
            <div className='px-8 md:px-24 mt-12'>
                <MostRecentEvent />
                <MissionAndVision/>
            </div>
        </div>
    );
};

export default Home;