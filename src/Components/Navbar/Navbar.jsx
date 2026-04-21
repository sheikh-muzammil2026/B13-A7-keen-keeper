import React from 'react';
import { NavLink } from 'react-router';
import logo from '../../assets/logo.png';
import { RiTimeLine } from 'react-icons/ri';
import { IoMdStats } from 'react-icons/io';
import { IoHomeOutline } from 'react-icons/io5';

const Navbar = () => {
    return (
        <div className='shadow'>
            <nav className="navbar-container container mx-auto py-4 flex justify-between items-center">
                <img src={logo} alt="" className="" />
                <ul className="flex justify-center items-center gap-4">
                    <NavLink to='/' className={({isActive})=> `${isActive && 'bg-[#244D3F] text-white py-1 px-2 rounded'}`} ><span className='flex justify-center items-center gap-1'><IoHomeOutline />Home</span></NavLink>
                    <NavLink to='/timeline' className={({isActive})=> `${isActive && 'bg-[#244D3F] text-white py-1 px-2 rounded'} }`}><span className='flex justify-center items-center gap-1'><RiTimeLine />Timeline</span></NavLink>
                    <NavLink to='/stats' className={({isActive})=> `${isActive && 'bg-[#244D3F] text-white py-1 px-2 rounded'} }`}><span className='flex justify-center items-center gap-1'><IoMdStats/> Stats</span></NavLink>
                </ul>
            </nav>
        </div>
    );
};

export default Navbar;