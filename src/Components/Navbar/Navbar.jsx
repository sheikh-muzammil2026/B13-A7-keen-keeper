import React from 'react';
import { NavLink } from 'react-router';
import logo from '../../assets/logo.png';

import { RiTimeLine } from 'react-icons/ri';
import { IoMdStats } from 'react-icons/io';
import { IoHomeOutline } from 'react-icons/io5';

const Navbar = () => {

    const navLinkStyle = ({ isActive }) =>
        `px-4 py-2 rounded-lg transition duration-300 flex items-center gap-1
        ${isActive
            ? 'bg-[#244D3F] text-white'
            : 'hover:bg-[#244D3F]/10'
        }`;

    return (
        <>
            <div className='shadow-sm mb-2'>

                <nav className="container mx-auto px-4 py-4 flex flex-col gap-4 md:flex-row md:justify-between items-center">

                    {/* logo */}
                    <img
                        src={logo}
                        alt="KeenKeeper Logo"
                        
                    />

                    {/* nav links */}
                    <ul className="flex flex-wrap justify-center items-center gap-3 text-sm md:text-base">

                        <NavLink
                            to='/'
                            className={navLinkStyle}
                        >
                            <IoHomeOutline />
                            Home
                        </NavLink>

                        <NavLink
                            to='/timeline'
                            className={navLinkStyle}
                        >
                            <RiTimeLine />
                            Timeline
                        </NavLink>

                        <NavLink
                            to='/stats'
                            className={navLinkStyle}
                        >
                            <IoMdStats />
                            Stats
                        </NavLink>

                    </ul>
                </nav>
            </div>
        </>
    );
};

export default Navbar;