import React from 'react';
import { CiLinkedin } from 'react-icons/ci';
import { FaFacebookF, FaFacebookSquare, FaGithub, FaInstagram } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import { FiYoutube } from 'react-icons/fi';
import { LuGithub } from 'react-icons/lu';
import { useState, useEffect } from "react";





const Hero = () => {
    const roles = ["MERN Stack Developer",
        "Frontend Developer",
        "React Developer",];
    const [currentRole, setCurrentRole] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentRole((prev) => (prev + 1) % roles.length);
        }, 2500); // change every 2.5 seconds
        return () => clearInterval(interval);
    }, []);
    return (
        <>
            <div className='flex flex-col-reverse lg:flex-row items-center justify-around gap-10 lg:gap-20 pt-25 lg:pt-40 px-4 sm:px-6 lg:px-24 pb-10 lg:pb-30 container mx-auto'>
                {/* Text Content */}
                <div className='flex flex-col items-center lg:items-start text-center lg:text-left'>
                    <h1 className="text-3xl sm:text-4xl lg:text-5xl text-[#A1A1A1] leading-12 lg:leading-22 font-bold lg:w-[600px]">
                        Hi, I'm <span className="text-[#FF6900]">Bayazed Hasan</span>,<br /> a
                        <span
                            key={currentRole}
                            className="inline-block bg-[#343E4E] text-xl sm:text-3xl lg:text-4xl ml-6 sm:ml-4 lg:ml-8 px-4 sm:px-4 py-1.5 sm:py-2 rounded-lg text-[#FFFFFF] animate-slide"
                        >
                            {roles[currentRole]}
                        </span><br />
                        from Bangladesh.
                    </h1>

                    {/* Social Icons */}
                    <div className='flex flex-wrap justify-center lg:justify-start gap-3 sm:gap-4 items-center pt-4 sm:pt-5'>
                        <div className='border border-none px-3 sm:px-4 py-1 sm:py-1.5 rounded-full hover:text-gray-700 bg-transparent hover:bg-[#FFFFFF] transition-colors duration-300'>
                            <LuGithub className='transition-colors duration-300' size={20} />
                        </div>
                        <div className="group border border-none px-3 sm:px-4 py-1 sm:py-1.5 rounded-full bg-transparent hover:bg-[#2B7FFF] transition-colors duration-300">
                            <CiLinkedin className="text-[#2B7FFF] group-hover:text-white transition-colors duration-300" size={20} />
                        </div>
                        <div className='border px-3 border-none sm:px-4 py-1 sm:py-1.5 rounded-full hover:bg-[#FFFFFF] bg-transparent transition-colors duration-300'>
                            <FaXTwitter className="transition-colors hover:text-black duration-300" size={20} />
                        </div>
                        <div className='border px-3 border-none sm:px-4 py-1 sm:py-1.5 rounded-full hover:bg-[#FFFFFF] bg-transparent transition-colors duration-300'>
                            <FaInstagram className="text-[#E60076] group-hover:text-white transition-colors duration-300" size={20} />
                        </div>
                        <div className="group border border-none px-3 sm:px-4 py-1 sm:py-1.5 rounded-full bg-transparent hover:bg-[#2B7FFF] transition-colors duration-300">
                            <FaFacebookF className='text-[#1877F2] group-hover:text-white transition-colors duration-300' size={20} />
                        </div>
                        <div className="group border border-none px-3 sm:px-4 py-1 sm:py-1.5 rounded-full bg-transparent hover:bg-[#E7000B] transition-colors duration-300">
                            <FiYoutube className="text-[#E7000B] group-hover:text-white transition-colors duration-300" size={20} />
                        </div>
                    </div>
                </div>

                {/* Profile Image */}
                <div className="flex justify-center items-center mb-6 lg:mb-0">
                    <img
                        className="w-48 sm:w-64 lg:w-100 h-48 sm:h-64 lg:h-100 rounded-full border-4 border-[#0E8EA3] object-cover transition-all duration-500 shadow-[0_0_20px_#0E8EA3] hover:shadow-[0_0_35px_#0E8EA3]"
                        src="/assetes/profile-pic (2) (1).png"
                        alt="Profile"
                    />
                </div>
            </div>




        </>
    );
};

export default Hero;