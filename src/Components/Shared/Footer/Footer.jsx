import React from 'react';
import { CiLinkedin, CiLocationOn } from 'react-icons/ci';
import { FaPhoneAlt } from 'react-icons/fa';
import { FaFacebookF, FaInstagram, FaXTwitter } from 'react-icons/fa6';
import { FiYoutube } from 'react-icons/fi';
import { LuGithub } from 'react-icons/lu';
import { MdOutlineAlternateEmail } from 'react-icons/md';

const Footer = () => {
    return (
        <footer className='bg-[#27272A]'>
            <div className='flex flex-col text-[#FFFFFF] lg:flex-row justify-between items-start lg:items-center  px-4 sm:px-6 lg:px-8 py-4 gap-12'>

                {/* Left Section */}
                <div className='flex-1'>
                    <h2 className='text-lg sm:text-xl md:text-xl'>
                        Designed and Developed by <br /> <span className='text-[#FF6900] font-bold'>Bayazed Hasan</span>
                    </h2>
                    <div className='flex flex-col gap-2 mt-4 text-sm sm:text-base'>
                        <div className='flex items-center gap-2'>
                            <MdOutlineAlternateEmail size={18} />
                            <p>bayazedhasan321@gmail.com</p>
                        </div>
                        <div className='flex items-center gap-2'>
                            <FaPhoneAlt size={16} />
                            <p>+880 1791971760</p>
                        </div>
                        <div className='flex items-center gap-2'>
                            <CiLocationOn size={18} />
                            <p>Mohakhali, Dhaka, Bangladesh</p>
                        </div>
                    </div>
                </div>

                {/* Center Section */}
                <div className='flex text-center lg:text-left'>
                    <p className='text-sm sm:text-base'>
                        Copyright © 2025 <span className='text-[#FF6900] font-bold'>Bayazed Hasan</span>
                    </p>
                </div>

                {/* Right Section */}
                <div className='flex-1 flex justify-center lg:justify-end'>
                    <div className='flex flex-wrap justify-center lg:justify-start gap-3 sm:gap-4 items-center'>
                        <a
                            href="https://github.com/bayazedhasan"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <div className='border border-none px-3 sm:px-4 py-1 sm:py-1.5 rounded-full hover:text-gray-700 bg-transparent hover:bg-[#FFFFFF] transition-colors duration-300'>
                                <LuGithub className='transition-colors duration-300' size={25} />
                            </div>
                        </a>
                        <a
                            href="https://www.linkedin.com/in/bayazed-hasan/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <div className="group border border-none px-3 sm:px-4 py-1 sm:py-1.5 rounded-full bg-transparent hover:bg-[#2B7FFF] transition-colors duration-300">
                                <CiLinkedin className="text-[#2B7FFF] group-hover:text-white transition-colors duration-300" size={25} />
                            </div>
                        </a>
                        <div className='border px-2 border-none py-1 rounded-full hover:bg-[#FFFFFF] bg-transparent transition-colors duration-300'>
                            <FaXTwitter className="transition-colors hover:text-black duration-300" size={20} />
                        </div>
                        <div className='border px-2 border-none py-1 rounded-full hover:bg-[#FFFFFF] bg-transparent transition-colors duration-300'>
                            <FaInstagram className="text-[#E60076] group-hover:text-white transition-colors duration-300" size={20} />
                        </div>
                        <a
                            href="https://www.facebook.com/bayazedhasan49"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <div className="group border border-none px-3 sm:px-4 py-1 sm:py-1.5 rounded-full bg-transparent hover:bg-[#2B7FFF] transition-colors duration-300">
                                <FaFacebookF className='text-[#1877F2] group-hover:text-white transition-colors duration-300' size={25} />
                            </div>
                        </a>
                        <div className="group border border-none px-2 py-1 rounded-full bg-transparent hover:bg-[#E7000B] transition-colors duration-300">
                            <FiYoutube className="text-[#E7000B] group-hover:text-white transition-colors duration-300" size={20} />
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
