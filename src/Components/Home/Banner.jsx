import React from 'react';

const Banner = () => {

    return (
        <>
            {/* banner+friends-sections-container */}
            <div className="container mx-auto px-4">

                {/* banner-section-container */}
                <div className="flex flex-col justify-center items-center gap-6 py-10 md:py-20">

                    <h1 className='text-3xl sm:text-4xl md:text-5xl font-bold text-center leading-tight'>
                        Friends to keep close in your life
                    </h1>

                    <p className="text-center max-w-2xl text-sm md:text-base">
                        Your personal shelf of meaningful connections. Browse,
                        tend, and nurture the relationships that matter most.
                    </p>

                    <button className="btn btn-primary bg-[#244D3F] border-none">
                        + Add a Friend
                    </button>
                </div>

                {/* summary cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 text-center pb-8">

                    <div className='bg-base-100 p-4 md:p-6 rounded shadow flex flex-col justify-center items-center'>
                        <p className='text-2xl md:text-4xl font-bold'>8</p>
                        <p>Total Friends</p>
                    </div>

                    <div className='bg-base-100 p-4 md:p-6 rounded shadow flex flex-col justify-center items-center'>
                        <p className='text-2xl md:text-4xl font-bold'>3</p>
                        <p>On Track</p>
                    </div>

                    <div className='bg-base-100 p-4 md:p-6 rounded shadow flex flex-col justify-center items-center'>
                        <p className='text-2xl md:text-4xl font-bold'>5</p>
                        <p>Need Attention</p>
                    </div>

                    <div className='bg-base-100 p-4 md:p-6 rounded shadow flex flex-col justify-center items-center'>
                        <p className='text-2xl md:text-4xl font-bold'>8</p>
                        <p>Interactions This Month</p>
                    </div>

                </div>
            </div>
        </>
    );
};

export default Banner;

