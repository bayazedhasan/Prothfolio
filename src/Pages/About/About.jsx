
import React from 'react';
import { Outlet } from 'react-router-dom';
import animationData from '../../../public/Coding boy.json'
import Lottie from 'lottie-react';

const About = () => {
    return (
        <div data-aos="fade-up" className=' container mx-auto lg:px-24 mb-20 lg:mb-25'>
            <div className='flex justify-center pt-15'>
                <h1 className='text-6xl font-bold text-[#D5D5D5]'>About Me</h1>
            </div>

            <div data-aos="fade-up" data-aos-duration="1000" className='flex flex-col lg:flex-row items-center justify-center pt-10 lg:pt-15 px-4 sm:px-6 lg:px-0 gap-8 lg:gap-16 text-center lg:text-left'>
                {/* Lottie Animation */}
                <div className="mx-auto lg:mx-0 mt-6 lg:mt-0 rounded-xl flex items-center justify-center">
                    <Lottie
                        animationData={animationData}
                        loop={true}
                        className="w-80 sm:w-96 lg:w-120 h-56 sm:h-72 lg:h-90"
                    />
                </div>

                {/* Text Content */}
                <div className="flex flex-col items-center lg:items-start lg:justify-center">
                    <p className='text-[#F0F0F0] text-base sm:text-lg lg:text-xl font-bold max-w-full sm:max-w-xl lg:w-146 pb-6 sm:pb-8 lg:pb-10'>
                        My name is <span className='text-lg sm:text-xl lg:text-2xl font-bold text-[#FA6700]'>Bayazed Hasan</span> and I am a <span className='text-lg sm:text-xl lg:text-2xl font-bold text-[#FA6700]'>Computer Science and Technology</span> student at <span className='text-lg sm:text-xl lg:text-2xl font-bold text-[#FA6700]'>Shariatpur Polytechnic Institute</span> in Dhaka, Bangladesh.
                    </p>
                    <p className='text-[#F0F0F0] text-base sm:text-lg lg:text-xl font-bold max-w-full sm:max-w-xl lg:w-146 pb-6 sm:pb-8 lg:pb-10'>
                        I'm a <span className='text-lg sm:text-xl lg:text-2xl font-bold text-[#FA6700]'>Full Stack / Frontend Developer</span> passionate about creating intuitive, responsive, and high-performance web applications. I enjoy building engaging user interfaces while ensuring scalable and maintainable backend systems.
                    </p>
                    <p className='text-[#F0F0F0] text-base sm:text-lg lg:text-xl font-bold max-w-full sm:max-w-xl lg:w-146 pb-6 sm:pb-8 lg:pb-10'>
                        I am proficient in various programming languages such as <span className='text-lg sm:text-xl lg:text-2xl font-bold text-[#FA6700]'>HTML, CSS, and JavaScript</span>.
                    </p>
                    <p className='text-[#F0F0F0] text-base sm:text-lg lg:text-xl font-bold max-w-full sm:max-w-xl lg:w-146 pb-6 sm:pb-8 lg:pb-10'>
                        I have experience working with modern frontend libraries like <span className='text-lg sm:text-xl lg:text-2xl font-bold text-[#FA6700]'>React, Tailwind CSS, and Next.js</span>.
                    </p>
                    <p className='text-[#F0F0F0] text-base sm:text-lg lg:text-xl font-bold max-w-full sm:max-w-xl lg:w-146'>
                        I thrive on solving real-world problems with clean, maintainable code and a focus on user experience and application performance.
                    </p>
                </div>
            </div>


            <Outlet></Outlet>
        </div>
    );
};

export default About;