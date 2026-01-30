import React, { useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../../Components/Shared/Footer/Footer';

const Projects = () => {

    const [seeMore, setSeeMore] = useState(false);
    const [projectsData, setProjectsData] = useState([]);


    useEffect(() => {
        fetch("/projectData.json")
            .then((res) => res.json())
            .then((data) => setProjectsData(data))
    }, [])



    return (
        <div>
            <div data-aos="fade-up" className='pb-20 container mx-auto px-4 md:px-12 lg:px-24 pt-10 lg:pt-20'>
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
                {/*project*/}
                <div data-aos="fade-up" className='pt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 lg:gap-15 gap-6 px-4 sm:px-6 lg:px-10'>
                    {
                        projectsData.map((p) => {
                            return (
                                <div key={p.id} data-aos="zoom-in-right" data-aos-duration="1000" className='pt-6 sm:pt-8 lg:pt-10'>
                                    <div className='w-full sm:w-[95%] lg:w-105 flex flex-col text-center border border-none p-4 sm:p-6 lg:p-8 rounded-xl bg-gradient-to-b from-[#926312] from-30% to-[#1C2133] to-60% transition-transform duration-300 hover:scale-105 mx-auto'>
                                        <a href={p.live}>

                                            <div>
                                                <img className='w-full h-36 sm:h-48 lg:h-50 rounded-lg object-cover' src={p.image} alt="" />
                                            </div>
                                        </a>

                                        <div className='flex flex-col items-center pt-6 sm:pt-8'>
                                            <h2 className='text-lg sm:text-xl lg:text-2xl text-[#FFFFFF] font-bold'>{p.title}</h2>
                                            <p className={`text-sm sm:text-base text-[#C6CAD1] font-medium pt-4 pb-1
                                                    break-words whitespace-normal ${seeMore ? "line-clamp-none" : "line-clamp-3"}`}>
                                                {p.description}

                                            </p>
                                            <button
                                                onClick={() => setSeeMore(!seeMore)}
                                                className="text-sm pb-1 text-blue-400 hover:underline"
                                            >
                                                {seeMore ? "See less" : "See more..."}
                                            </button>

                                            <div className='flex gap-2 flex-wrap justify-center items-center'>
                                                <div className='border rounded-full px-3 py-1 border-[#B8080C] bg-[#372120]'>
                                                    <p className='text-[#FCB669] text-xs sm:text-sm font-medium'>{p.tags[0]}</p>
                                                </div>
                                                <div className='border rounded-full px-3 py-1 border-[#B8080C] bg-[#372120]'>
                                                    <p className='text-[#FCB669] text-xs sm:text-sm font-medium'>{p.tags[1]}</p>
                                                </div>
                                                <div className='border rounded-full px-3 py-1 border-[#B8080C] bg-[#372120]'>
                                                    <p className='text-[#FCB669] text-xs sm:text-sm font-medium'>{p.tags[2]}</p>
                                                </div>
                                                <div className='border rounded-full px-3 py-1 border-[#B8080C] bg-[#372120]'>
                                                    <p className='text-[#FCB669] text-xs sm:text-sm font-medium'>{p.tags[3]}</p>
                                                </div>
                                                <div className='border rounded-full px-3 py-1 border-[#B8080C] bg-[#372120]'>
                                                    <p className='text-[#FCB669] text-xs sm:text-sm font-medium'>{p.tags[4]}</p>
                                                </div>
                                                {/* <div className='border rounded-full px-3 py-1 border-[#B8080C] bg-[#372120]'>
                                                    <p className='text-[#FCB669] text-xs sm:text-sm font-medium'>{p.tags[5]}</p>
                                                </div> */}
                                            </div>

                                            <div className='flex flex-wrap justify-center gap-4 sm:gap-5 items-center mt-6 sm:mt-8'>
                                                <a href={p.live}>
                                                    <div className='border px-6 sm:px-8 py-2 rounded-xl bg-[#FFFFFF] cursor-pointer hover:bg-gray-300 text-black font-bold'>
                                                        <button className='cursor-pointer text-sm sm:text-base'>Live Demo</button>
                                                    </div>
                                                </a>
                                                <a href={p.github}>
                                                    <div className='border px-6 sm:px-8 py-2 rounded-xl border-[#A2A7B0] hover:text-black text-[#FFFFFF] hover:bg-[#FFFFFF] font-bold cursor-pointer'>
                                                        <button className='cursor-pointer text-sm sm:text-base'>Code</button>
                                                    </div>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    );
};

export default Projects;

