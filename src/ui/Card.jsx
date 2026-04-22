import React from 'react';
import { Link } from 'react-router';

const Card = ({friend}) => {
    const {name, tags, days_since_contact, status, picture } = friend;
    
    return (
        <Link to={`/friend/${friend.id}`}>
        <div className='bg-base-100 shadow rounded-lg flex flex-col justify-center items-center gap-3  p-3 hover:shadow-lg transition'>
        
            <img src={picture} alt="" />
            <p className="frined-name font-semibold text-lg truncate">{name}</p>
            <p>{days_since_contact}d ago</p>
            <p className="tags bg-[#CBFADB] py-1 px-2 rounded-full text-xs w-fit">{tags?.toUpperCase()}</p>
            <p className={` text-white py-1 px-2 rounded-full text-sm w-fit
                  ${status === "on-track" && 'bg-[#244D3F]' } 
                  ${status === "overdue" && 'bg-red-500' } 
                  ${status === "almost due" && 'bg-[#EFAD44]'}`}>{status}</p>
        </div>
        </Link>
        
    );
};

export default Card;