import React from 'react';
import Banner from './Banner';
import CardSection from './CardSection';

const Home = () => {
   
    return (
        <div className='bg-[#F8FAFC] home-container'>
            <Banner/>
             <div className="divider container mx-auto"></div>
            <CardSection/>
        </div>
    );
};

export default Home;