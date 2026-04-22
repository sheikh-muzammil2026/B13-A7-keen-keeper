import React from 'react';
import useCard from '../../Hook.jsx/useCard';
import Card from '../../ui/Card';

const CardSection = () => {

    const { data = [], loading } = useCard();

    console.log(loading);
   

        if (loading) {
            return (
                <div className='flex justify-center items-center min-h-[300px]'>

                    <span className="loading loading-spinner loading-lg text-[#244D3F]"></span>

                </div>
            );
        }

    return (
        <div className='container mx-auto px-4 py-10'>

            {/* section title */}
            <h2 className='mb-6 font-bold text-2xl text-center md:text-left'>
                Your Friends
            </h2>

            {/* grid */}
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4'>

                {
                    data.map((friend, index) => (
                        <Card key={friend.id || index} friend={friend} />
                    ))
                }

            </div>

        </div>
    );
};

export default CardSection;

