import React from 'react';
import useCard from '../../Hook.jsx/useCard';
import Card from '../../ui/Card';

const CardSection = () => {
     const {data, loading} = useCard();
    
    if(loading){
        <h1>loading...</h1>
        
    }
    // console.log(data);
    return (
        <div className='container mx-auto py-12'>
            <h2 className='mb-4 font-bold'>Your friends</h2>
             <div className='grid grid-cols-4 justify-center items-center gap-3'>
                {
                    data.map((friend, index)=> 
                        (<div key={index}>
                                <Card friend={friend} />
                        </div>)
                    )
                }
             </div>
            
        </div>
    );
};

export default CardSection;