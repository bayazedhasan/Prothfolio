import React, { useEffect, useState } from 'react';
import Footer from '../../Components/Shared/Footer/Footer';

const Education = () => {
    const [education, setEducation] = useState([]);

    useEffect(() => {
        fetch("Education.json")
            .then(res => res.json())
            .then(data => setEducation(data))
    }, []);

    return (
        <section className="text-white pt-30">
            <div className="max-w-6xl mx-auto py-8 px-4 sm:px-6 lg:px-6">
                <div data-aos="fade-up" className="text-center mb-16">
                    <p className="text-gray-400 tracking-widest uppercase text-sm">|| Education ||</p>
                    <h2 className="text-5xl sm:text-5xl font-extrabold mt-2">My Academic Journey</h2>
                </div>

                <div className="relative">
                    {/* Vertical line for lg devices */}
                    <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 w-1 bg-gray-700 h-full"></div>

                    {education.map((item, index) => {
                        const isLeft = index % 2 === 0;
                        return (
                            <div
                                key={index}
                                className={`mb-16 flex flex-col lg:flex-row w-full items-center relative
                                    ${isLeft ? "lg:justify-start" : "lg:justify-end"}`}
                            >
                                {/* Content Box */}
                                <div
                                    data-aos="zoom-in-right" data-aos-duration="1000" 

                                    className={`w-full lg:w-1/2
                                        ${isLeft ? "lg:pr-12 lg:text-right" : "lg:pl-12 lg:text-left"}
                                        px-4 sm:px-6`}
                                >
                                    <div className="bg-[#141414] p-6 shadow-lg rounded-xl hover:shadow-[#FF6900] transition">
                                        <h3 className="text-lg sm:text-xl font-semibold mb-2">{item.title}</h3>
                                        <p className="text-slate-400 mb-3">{item.institution}</p>
                                        <p className="text-slate-400 text-sm">{item.year}</p>
                                    </div>
                                </div>

                                {/* Timeline Dot */}
                                <div className={`absolute lg:w-4 lg:h-4 lg:bg-[#FF6900] rounded-full lg:border-4 border-[#121416]
                                    ${window.innerWidth >= 1024
                                        ? "lg:left-1/2 transform lg:-translate-x-1/2 top-0 lg:top-auto mt-6 lg:mt-0"
                                        : "left-4 mt-6 relative"}`}>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default Education;
