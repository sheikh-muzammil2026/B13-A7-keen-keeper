import React, { useContext, useState } from 'react';
import { TimeLineContext } from '../Context/TimeLineContext';

import Call from '../assets/call.png';
import Text from '../assets/text.png';
import Video from '../assets/video.png';

import { IoMdArrowDropdown } from 'react-icons/io';

const TimeLine = () => {

    const { timeLine } = useContext(TimeLineContext);

    const [filter, setFilter] = useState("All");

    const filteredData =
        filter === "All"
            ? timeLine
            : timeLine.filter(item => item.action === filter);

    return (

        <div className='bg-[#F8FAFC] min-h-screen p-4 md:p-10 lg:p-20'>

            <div className='max-w-5xl mx-auto'>

                {/* heading */}
                <h1 className='text-3xl md:text-5xl font-bold mb-6 text-center md:text-left'>
                    Timeline
                </h1>

                {/* filter dropdown */}
                <div className="dropdown dropdown-start mb-6">

                    {/* <div
                        tabIndex={0}
                        role="button"
                        className="btn"
                    >
                        Filter Timeline
                        <IoMdArrowDropdown />
                    </div>

                    <ul
                        tabIndex={0}
                        className="dropdown-content menu bg-base-100 rounded-box z-10 w-52 p-2 shadow"
                    >
                        <li onClick={() => setFilter("All")}><a>All</a></li>
                        <li onClick={() => setFilter("Call")}><a>By Call</a></li>
                        <li onClick={() => setFilter("Text")}><a>By Text</a></li>
                        <li onClick={() => setFilter("Video")}><a>By Video</a></li>
                    </ul> */}
                    <div
                        tabIndex={0}
                        role="button"
                        className="btn"
                    >
                        Filter Activities
                        <IoMdArrowDropdown />
                    </div>

                    <ul
                        tabIndex={0}
                        className="dropdown-content menu bg-base-100 rounded-box z-10 w-52 p-2 shadow"
                    >

                        <li onClick={() => setFilter("All")}>
                            <a>All Interactions</a>
                        </li>

                        <li onClick={() => setFilter("Call")}>
                            <a>Phone Calls</a>
                        </li>

                        <li onClick={() => setFilter("Text")}>
                            <a>Text Messages</a>
                        </li>

                        <li onClick={() => setFilter("Video")}>
                            <a>Video Chats</a>
                        </li>

                    </ul>


                </div>

                {/* empty state */}
                {
                    filteredData.length === 0 && (
                        <div className='bg-white rounded-lg shadow p-6 text-center'>
                            <p>No interactions found.</p>
                        </div>
                    )
                }

                {/* timeline cards */}
                {
                    filteredData.map((item, index) => (

                        <div
                            key={index}
                            className='shadow bg-base-100 p-4 rounded-lg mb-4'
                        >

                            <div className='flex sm:items-center gap-4'>

                                {/* icon */}
                                <div>

                                    {item.action === "Call" && (
                                        <img className='w-10 h-10' src={Call} alt="Call" />
                                    )}

                                    {item.action === "Text" && (
                                        <img className='w-10 h-10' src={Text} alt="Text" />
                                    )}

                                    {item.action === "Video" && (
                                        <img className='w-10 h-10' src={Video} alt="Video" />
                                    )}
                                </div>

                                {/* text */}
                                <div className='break-words'>

                                    <p>
                                        <span className='text-[#244D3F] font-bold'>
                                            {item.action}
                                        </span>

                                        {" "}with{" "}

                                        <span className='text-gray-500'>
                                            {item.name}
                                        </span>
                                    </p>

                                    <p className='text-gray-400 text-sm'>
                                        {item.time}
                                    </p>
                                </div>

                            </div>

                        </div>
                    ))
                }

            </div>
        </div>
    );
};

export default TimeLine;

