import React from 'react';
import logo from '../../assets/logo-xl.png';
import instagram from '../../assets/instagram.png';
import facebook from '../../assets/facebook.png';
import twitter from '../../assets/twitter.png';

const Footer = () => {
    return (
        <>
            <footer className='bg-[#244D3F] px-4 py-10 md:py-14'>

                <div className='max-w-7xl mx-auto'>

                    {/* top section */}
                    <div className='flex flex-col items-center gap-6'>

                        <img
                            className='w-52 md:w-72'
                            src={logo}
                            alt="KeenKeeper Logo"
                        />

                        <p className="text-gray-300 text-center max-w-2xl text-sm md:text-base leading-relaxed">
                            Your personal shelf of meaningful connections.
                            Browse, tend, and nurture the relationships
                            that matter most.
                        </p>

                        {/* social links */}
                        <div className="flex flex-col justify-center items-center gap-3">

                            <p className="text-gray-200 font-semibold">
                                Social Links
                            </p>

                            <div className="flex items-center justify-center gap-4">

                                <img
                                    className='w-8 cursor-pointer hover:scale-110 transition'
                                    src={instagram}
                                    alt="Instagram"
                                />

                                <img
                                    className='w-8 cursor-pointer hover:scale-110 transition'
                                    src={facebook}
                                    alt="Facebook"
                                />

                                <img
                                    className='w-8 cursor-pointer hover:scale-110 transition'
                                    src={twitter}
                                    alt="Twitter"
                                />
                            </div>
                        </div>
                    </div>

                    {/* divider */}
                    <div className="divider my-8"></div>

                    {/* bottom section */}
                    <div className='flex flex-col-reverse md:flex-row justify-between items-center gap-4 text-gray-400 text-sm'>

                        <p className='text-center'>
                            © 2026 KeenKeeper. All rights reserved.
                        </p>

                        <ul className='flex flex-wrap justify-center gap-4'>

                            <li>
                                <a
                                    className='hover:text-white transition'
                                    href='#'
                                >
                                    Privacy Policy
                                </a>
                            </li>

                            <li>
                                <a
                                    className='hover:text-white transition'
                                    href='#'
                                >
                                    Terms of Service
                                </a>
                            </li>

                            <li>
                                <a
                                    className='hover:text-white transition'
                                    href='#'
                                >
                                    Cookies
                                </a>
                            </li>

                        </ul>
                    </div>

                </div>
            </footer>
        </>
    );
};

export default Footer;

