import React, { useContext } from 'react';
import { TimeLineContext } from '../Context/TimeLineContext';
import Call from '../assets/call.png';
import Text from '../assets/text.png';
import Video from '../assets/video.png';
import { IoMdArrowDropdown } from 'react-icons/io';


const TimeLine = () => {
    const {timeLine, setTimeLine} = useContext(TimeLineContext);
        console.log(timeLine, setTimeLine, "from timeline page");
        

    return (
        <div className='bg-[#F8FAFC] home-container p-20'>
           <div>

            {/* timeline page headline */}
            <h1 className='text-5xl font-bold mb-4'>Timeline </h1>

            {/* timeline page filter button */}
            <div className="dropdown dropdown-start mb-4">
            <div tabIndex={0} role="button" className="btn m-1">Filter timeline <IoMdArrowDropdown /></div>
                    <ul tabIndex="-1" className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm ">
                        <li><a>By Call</a></li>
                        <li><a>By Text</a></li>
                        <li><a>By Video</a></li>
                    </ul>
            </div>
                {
                    timeLine.map((item,index )=>  
                         (<div key={index} className='container mx-auto shadow bg-base-100 p-4 mb-3'>
                           <div className='flex items-center gap-4'>
                            {item.action === "Call" && (<img src={Call} alt="" />)}
                            {item.action === "Text" && (<img src={Text} alt="" />)}
                            {item.action === "Video" && (<img src={Video} alt="" />)}
                            <div className='flex flex-col justify-between'>
                                <p className=''><span className='text-[#244D3F] font-bold'>{item.action}</span> with <span className='text-base-400'>{item.name}</span></p>
                                <p className='text-base-400'>{item.time}</p>
                            </div>
                           </div>
                          
                        </div>)
                    )
                }
            </div>
        </div>
    );
};

export default TimeLine;