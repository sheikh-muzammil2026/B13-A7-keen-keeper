import React, { useContext } from 'react';
import useCard from '../Hook.jsx/useCard';
import { useParams } from 'react-router';
import { LuMessageSquareText, LuVideo } from 'react-icons/lu';
import { TbPhoneCall } from 'react-icons/tb';
import { HiOutlineBellSnooze } from 'react-icons/hi2';
import { FaArchive } from 'react-icons/fa';
import { RiDeleteBin6Line } from 'react-icons/ri';
import { TimeLineContext } from '../Context/TimeLineContext';
import { toast } from 'react-toastify';


const FriendDetails = () => {
        const {data, loading} = useCard();
        // console.log(data, loading);
        const {id} = useParams();
        // console.log(id);
        const { setTimeLine} = useContext(TimeLineContext);
        // console.log(timeLine, setTimeLine, "from context importing");

         if(loading){
           return <h1>Loading...</h1>
        }
            const expactedCard = data?.find((card)=> card.id === Number(id) );
            // console.log(expactedCard, "from find array");
        
        if(!expactedCard){
           return <h1>Page not found</h1>
        }

        const handleAllBtn = (type, expactedCard) => {
            const newActivity = {
                ...expactedCard,
                action: type,
                time: new Date().toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                    })
            }
            setTimeLine(prev => [...prev, newActivity]);
            
            toast(`${type} saved successfully!`);
            
            console.log(toast);
        }
        
        
    return (

        // details-page-container 
         <div className=' bg-[#F8FAFC]  '>

        {/* main-sidbar-container */}
       <div className="container mx-auto grid grid-cols-4 gap-5 p-20">

         {/* sidebar */}
            <div className="1st-column col-span-1 flex flex-col items-center">
               
                    <div className='pimary-details bg-base-100 flex flex-col justify-center items-center gap-2 mb-3 shadow p-3'>
                    <img src={expactedCard.picture} alt="" />
            <p className="frined-name font-bold">{expactedCard.name}</p>
            <p className={` text-white py-1 px-2 rounded-full
                  ${expactedCard.status === "on-track" && 'bg-[#244D3F]' } 
                  ${expactedCard.status === "overdue" && 'bg-red-500' } 
                  ${expactedCard.status === "almost due" && 'bg-[#EFAD44]'}`}>{expactedCard.status}</p>
             <p className="tags bg-[#CBFADB] py-1 px-2 rounded-full">{expactedCard.tags.toUpperCase()}</p>
             <p className="text-center ">{expactedCard.bio}</p>
                </div>


                <div className="three-btn-container w-full flex flex-col gap-2">
                    <button className="btn w-full bg-base-100"><HiOutlineBellSnooze/>Snooze 2 weeks</button>
                    <button className="btn w-full bg-base-100"><FaArchive />Archive</button>
                    <button className="btn w-full bg-base-100 text-red-500"><RiDeleteBin6Line/>Delete</button>
                </div>
                

            </div>
             
{/* main-section */}
            <div className='col-span-3 flex flex-col  gap-5'>

                {/* main-section-container */}
            
                {/* 1st row start hare */}
                    <div className='1st-row-container shadow grid grid-cols-3 gap-3'>
                               {/* 1st row 1st div */}
            <div className="1st-column flex flex-col justify-center items-center gap-2 shadow bg-base-100 px-5 py-6">
               
                    <p className='font-bold'>{expactedCard.days_since_contact}</p>
                    <p className='text-[#64748B]'>Days Since Contact</p>
            
            </div>

                {/* 1st row 2nd div */}
            <div className="1st-column flex flex-col justify-center items-center gap-2 shadow bg-base-100 px-5 py-6">
               
            <p className='font-bold'>{expactedCard.goal}</p>
            <p className='text-[#64748B]'>Goal (Days)</p>
            </div>

                {/* 1st row 3rd div */}
            <div className="1st-column flex flex-col justify-center items-center gap-2 shadow bg-base-100 px-5 py-6">
               
            <p className="frined-name font-bold">{expactedCard.next_due_date}</p>
            <p className='text-[#64748B]'>Next Due</p>
            </div>
                </div>
                
                {/* 2nd row container */}
                <div className='bg-base-100 shadow p-5'>
                    <div className='flex justify-between'>
                        <p>Relationship Goal</p>
                        <button className="btn">Edit</button>
                    </div>
                    <p ><span className='text-[#64748B]'>Connect every </span><span className='font-bold'>{expactedCard.goal} days</span></p>
                </div>

                {/* 3rd row Quick Check-In container */}
                <div className='bg-base-100 shadow p-5'>
                    <p className='font-bold mb-2'>Quick Check-In</p>
                    <div className="btn-container grid grid-cols-3 gap-2">
                        <button onClick={()=> handleAllBtn("Call", expactedCard)} className="btn h-auto p-4"><span className='text-center text-xl font-medium  flex justify-center items-center flex-col'> <TbPhoneCall className='h-auto w-7' />Call</span></button>
                        <button onClick={()=> handleAllBtn("Text", expactedCard)} className="btn h-auto p-4"><span className='text-center text-xl font-medium flex justify-center items-center flex-col'> <LuMessageSquareText  className='h-auto w-7' />Text </span></button>
                        <button onClick={()=> handleAllBtn("Video", expactedCard)} className="btn h-auto p-4"><span className='text-center text-xl  font-medium flex justify-center items-center flex-col'><LuVideo className='h-auto w-7' />Video</span></button>
                    </div>
                </div>
                
            </div>
       </div>
        </div>
    );
};

export default FriendDetails;

/**
 * 1. card e click , details page e niye zabe. ejonno link use korbo (done)
 * 2. details page e sob data thakbe. er moddo theke params theke asa id r details page er ID mil kore zeta pabo sei expacted card show korabo.
 * 3. details page e data asbe hook theke. 
 * 4. details page e card er ID kivabe asbo ? params theke . 
 * */ 