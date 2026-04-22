import React from 'react';

const Banner = () => {

    
    return (
        <>
        {/* banner+friends-sections-container  */}
           <div className="container mx-auto">
            {/* banner-section-container */}
            <div className=" flex flex-col justify-center items-center gap-6 py-20">
            <h1 className='banner-title text-5xl font-bold text-center'>Friends to keep close in your life</h1>
            <h2 className="banner-subtitle text-center">Your personal shelf of meaningful connections. Browse, tend, and nurture the <br></br>
relationships that matter most.</h2>
        <button className="banner-addFriends-btn btn btn-primary bg-[#244D3F]">+ Add a friends</button>
           </div>

           <div className="grid grid-cols-1 md:grid-cols-4 gap-2 justify-center items-center pb-8 px-4 md:px-40">
            
                <div className='bg-base-100 px-1 py-2 md:px-8 md:py-6 rounded shadow flex flex-col justify-center items-center'>
                    <p>8</p>
                    <p>Total Friends</p>
                </div >
                <div className='bg-base-100 px-1 py-2 md:px-8 md:py-6 rounded shadow flex flex-col justify-center items-center'>
                    <p>3</p>
                    <p>On Track</p>
                </div>
                <div className='bg-base-100 px-1 py-2 md:px-8 md:py-6 rounded shadow flex flex-col justify-center items-center'>
                    <p>5</p>
                    <p>Need Attention</p>
                </div>
                <div className='bg-base-100 px-1 py-2 md:px-8 md:py-6 rounded shadow flex flex-col justify-center items-center'>
                    <p>8</p>
                    <p>Interactions This Month</p>
                </div>
           </div>
           </div>
        </>
    );
};

export default Banner;