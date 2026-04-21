import React from 'react';
import { Link } from 'react-router';

const Card = ({friend}) => {
    const {name, tags, days_since_contact, status, picture } = friend;
    
    return (
        <Link to={`/friend/${friend.id}`}>
        <div className='flex flex-col justify-center items-center gap-2 shadow bg-base-100 p-3'>
            <img src={picture} alt="" />
            <p className="frined-name">{name}</p>
            <p>{days_since_contact}d ago</p>
            <p className="tags bg-[#CBFADB] py-1 px-2 rounded-full">{tags.toUpperCase()}</p>
            <p className={` text-white py-1 px-2 rounded-full
                  ${status === "on-track" && 'bg-[#244D3F]' } 
                  ${status === "overdue" && 'bg-red-500' } 
                  ${status === "almost due" && 'bg-[#EFAD44]'}`}>{status}</p>
        </div>
        </Link>
        
    );
};

export default Card;