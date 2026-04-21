import React from 'react';
import logo from '../../assets/logo-xl.png'
import instagram from '../../assets/instagram.png'
import facebook from '../../assets/facebook.png';
import twitter from '../../assets/twitter.png';
import { RxDividerHorizontal } from 'react-icons/rx';
const Footer = () => {
    return (
       <>
        <div className='bg-[#244D3F] p-12'>
            <div className='flex flex-col items-center gap-6 '>
                <img  className='w-100 h-15' src={logo} alt="" />
            <p className="footer-description text-gray-300">Your personal shelf of meaningful connections. Browse, tend, and nurture the relationships that matter most.</p>
            <div className="social-container flex flex-col justify-center items-center gap-2">
                <p className="social-link text-gray-200 font-bold">Social Links</p>
                <div className="social-icons-container flex items-center justify-center gap-2">
                    <img src={instagram} alt="" />
                    <img src={facebook} alt="" />
                    <img src={twitter} alt="" />
                </div>
            </div>
            </div>
              <div className="divider"></div>
             <div className='flex justify-between items-center  text-gray-400'>
               
                <p><small>© 2026 KeenKeeper. All rights reserved.</small></p>
                    <div>
                        <ul className='flex gap-4'>                     
                            <li><a href='#'>Privacy Policy</a></li>
                            <li><a href='#'>Terms of Service </a></li>
                            <li><a href='#'>Cookies</a></li>
                        </ul>
                    </div>
            </div>
        </div>
        
       </>
    );
};

export default Footer;