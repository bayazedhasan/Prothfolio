import React from 'react';
import { Outlet } from 'react-router-dom';

const Projects = () => {
    return (
        <div data-aos="fade-up" className=' container mx-auto px-4 md:px-12 lg:px-24 pt-10 lg:pt-20'>
            <div className="flex flex-col items-center text-center gap-3 px-4 sm:px-6 md:px-8 py-6">
                <h2 className="text-[#FB2C28] text-sm sm:text-base md:text-lg font-semibold">
                    This section is still under development
                </h2>

                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white font-bold">
                    Projects
                </h1>

                <p className="text-[#7499AF] text-sm sm:text-base md:text-lg font-medium max-w-2xl">
                    A collection of projects that showcase my skills in web development, design, and problem-solving.
                </p>
            </div>

            <div data-aos="fade-up" className='pt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 lg:gap-15 gap-6 px-4 sm:px-6 lg:px-10'>
                <div data-aos="zoom-in-right" data-aos-duration="1000" className='pt-6 sm:pt-8 lg:pt-10'>
                    <div className='w-full sm:w-[95%] lg:w-105 flex flex-col text-center border border-none p-4 sm:p-6 lg:p-8 rounded-xl bg-gradient-to-b from-[#926312] from-30% to-[#1C2133] to-60% transition-transform duration-300 hover:scale-105 mx-auto'>
                        <div>
                            <img className='w-full h-36 sm:h-48 lg:h-50 rounded-lg object-cover' src="/public/assetes/Screenshot 2025-11-05 180541.png" alt="" />
                        </div>

                        <div className='flex flex-col items-center pt-6 sm:pt-8'>
                            <h2 className='text-lg sm:text-xl lg:text-2xl text-[#FFFFFF] font-bold'>CuraTube - Video Streaming Platform</h2>
                            <p className='text-sm sm:text-base text-[#C6CAD1] font-medium pt-4 pb-5'>
                                Full-stack video streaming platform with user authentication, video uploads, comments, likes, and social features.
                            </p>

                            <div className='flex gap-2 flex-wrap justify-center items-center'>
                                <div className='border rounded-full px-3 py-1 border-[#B8080C] bg-[#372120]'>
                                    <p className='text-[#FCB669] text-xs sm:text-sm font-medium'>MERN Stack</p>
                                </div>
                                <div className='border rounded-full px-3 py-1 border-[#B8080C] bg-[#372120]'>
                                    <p className='text-[#FCB669] text-xs sm:text-sm font-medium'>React</p>
                                </div>
                                <div className='border rounded-full px-3 py-1 border-[#B8080C] bg-[#372120]'>
                                    <p className='text-[#FCB669] text-xs sm:text-sm font-medium'>Javascript</p>
                                </div>
                                <div className='border rounded-full px-3 py-1 border-[#B8080C] bg-[#372120]'>
                                    <p className='text-[#FCB669] text-xs sm:text-sm font-medium'>Tailwind</p>
                                </div>
                            </div>

                            <div className='flex flex-wrap justify-center gap-4 sm:gap-5 items-center mt-6 sm:mt-8'>
                                <div className='border px-6 sm:px-8 py-2 rounded-xl bg-[#FFFFFF] cursor-pointer hover:bg-gray-300 text-black font-bold'>
                                    <button className='cursor-pointer text-sm sm:text-base'>Live Demo</button>
                                </div>
                                <div className='border px-6 sm:px-8 py-2 rounded-xl border-[#A2A7B0] hover:text-black hover:bg-[#FFFFFF] font-bold cursor-pointer'>
                                    <button className='cursor-pointer text-sm sm:text-base'>Code</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div data-aos="zoom-in-right" data-aos-duration="1000">
                    <div className='w-full sm:w-[95%] lg:w-105 flex flex-col text-center border border-none p-4 sm:p-6 lg:p-8 rounded-xl bg-gradient-to-b from-[#926312] from-30% to-[#1C2133] to-60% transition-transform duration-300 hover:scale-105 mx-auto'>
                        <div>
                            <img className='w-full h-36 sm:h-48 lg:h-50 rounded-lg object-cover' src="/public/assetes/Screenshot 2025-11-05 180541.png" alt="" />
                        </div>

                        <div className='flex flex-col items-center pt-6 sm:pt-8'>
                            <h2 className='text-lg sm:text-xl lg:text-2xl text-[#FFFFFF] font-bold'>CuraTube - Video Streaming Platform</h2>
                            <p className='text-sm sm:text-base text-[#C6CAD1] font-medium pt-4 pb-5'>
                                Full-stack video streaming platform with user authentication, video uploads, comments, likes, and social features.
                            </p>

                            <div className='flex gap-2 flex-wrap justify-center items-center'>
                                <div className='border rounded-full px-3 py-1 border-[#B8080C] bg-[#372120]'>
                                    <p className='text-[#FCB669] text-xs sm:text-sm font-medium'>MERN Stack</p>
                                </div>
                                <div className='border rounded-full px-3 py-1 border-[#B8080C] bg-[#372120]'>
                                    <p className='text-[#FCB669] text-xs sm:text-sm font-medium'>React</p>
                                </div>
                                <div className='border rounded-full px-3 py-1 border-[#B8080C] bg-[#372120]'>
                                    <p className='text-[#FCB669] text-xs sm:text-sm font-medium'>Javascript</p>
                                </div>
                                <div className='border rounded-full px-3 py-1 border-[#B8080C] bg-[#372120]'>
                                    <p className='text-[#FCB669] text-xs sm:text-sm font-medium'>Tailwind</p>
                                </div>
                            </div>

                            <div className='flex flex-wrap justify-center gap-4 sm:gap-5 items-center mt-6 sm:mt-8'>
                                <div className='border px-6 sm:px-8 py-2 rounded-xl bg-[#FFFFFF] cursor-pointer hover:bg-gray-300 text-black font-bold'>
                                    <button className='cursor-pointer text-sm sm:text-base'>Live Demo</button>
                                </div>
                                <div className='border px-6 sm:px-8 py-2 rounded-xl border-[#A2A7B0] hover:text-black hover:bg-[#FFFFFF] font-bold cursor-pointer'>
                                    <button className='cursor-pointer text-sm sm:text-base'>Code</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div data-aos="zoom-in-right" data-aos-duration="1000" className=' sm:pt-8 lg:pt-10'>
                    <div className='w-full sm:w-[95%] lg:w-105 flex flex-col text-center border border-none p-4 sm:p-6 lg:p-8 rounded-xl bg-gradient-to-b from-[#926312] from-30% to-[#1C2133] to-60% transition-transform duration-300 hover:scale-105 mx-auto'>
                        <div>
                            <img className='w-full h-36 sm:h-48 lg:h-50 rounded-lg object-cover' src="/public/assetes/Screenshot 2025-11-05 180541.png" alt="" />
                        </div>

                        <div className='flex flex-col items-center pt-6 sm:pt-8'>
                            <h2 className='text-lg sm:text-xl lg:text-2xl text-[#FFFFFF] font-bold'>CuraTube - Video Streaming Platform</h2>
                            <p className='text-sm sm:text-base text-[#C6CAD1] font-medium pt-4 pb-5'>
                                Full-stack video streaming platform with user authentication, video uploads, comments, likes, and social features.
                            </p>

                            <div className='flex gap-2 flex-wrap justify-center items-center'>
                                <div className='border rounded-full px-3 py-1 border-[#B8080C] bg-[#372120]'>
                                    <p className='text-[#FCB669] text-xs sm:text-sm font-medium'>MERN Stack</p>
                                </div>
                                <div className='border rounded-full px-3 py-1 border-[#B8080C] bg-[#372120]'>
                                    <p className='text-[#FCB669] text-xs sm:text-sm font-medium'>React</p>
                                </div>
                                <div className='border rounded-full px-3 py-1 border-[#B8080C] bg-[#372120]'>
                                    <p className='text-[#FCB669] text-xs sm:text-sm font-medium'>Javascript</p>
                                </div>
                                <div className='border rounded-full px-3 py-1 border-[#B8080C] bg-[#372120]'>
                                    <p className='text-[#FCB669] text-xs sm:text-sm font-medium'>Tailwind</p>
                                </div>
                            </div>

                            <div className='flex flex-wrap justify-center gap-4 sm:gap-5 items-center mt-6 sm:mt-8'>
                                <div className='border px-6 sm:px-8 py-2 rounded-xl bg-[#FFFFFF] cursor-pointer hover:bg-gray-300 text-black font-bold'>
                                    <button className='cursor-pointer text-sm sm:text-base'>Live Demo</button>
                                </div>
                                <div className='border px-6 sm:px-8 py-2 rounded-xl border-[#A2A7B0] hover:text-black hover:bg-[#FFFFFF] font-bold cursor-pointer'>
                                    <button className='cursor-pointer text-sm sm:text-base'>Code</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>



            <Outlet></Outlet>
        </div>
    );
};

export default Projects;

