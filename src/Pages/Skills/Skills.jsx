import React, { useState, useEffect, useMemo } from "react";
import AOS from "aos";
import "aos/dist/aos.css";


export default function Skills() {
    const [filter, setFilter] = useState("All");
    const [data, setData] = useState([]);


    useEffect(() => {
        AOS.init({
            duration: 600,
            once: false,
            easing: "",
        });
    }, []);


    useEffect(() => {
        AOS.refreshHard();
    }, [filter]);

    // Fetch data
    useEffect(() => {
        fetch("Data.json")
            .then((res) => res.json())
            .then((data) => setData(data));
    }, []);

    const groups = useMemo(
        () => ({
            Programming: data
                .filter((d) => ["JavaScript", "React", "Next.js", "Redux"].includes(d.title))
                .map((d) => d.id),
            Frontend: data
                .filter((d) => ["HTML", "CSS", "Tailwind CSS", "React", "Next.js", "Redux"].includes(d.title))
                .map((d) => d.id),
            Tools: data
                .filter((d) => ["Git", "GitHub"].includes(d.title))
                .map((d) => d.id),
        }),
        [data]
    );

    const visible = useMemo(() => {
        if (filter === "All") return data;
        return data.filter((d) => groups[filter]?.includes(d.id));
    }, [filter, groups, data]);

    return (
        <><section >
           <div data-aos="fade-up" className=" container mx-auto px-4 md:px-12 lg:px-24 pt-10 ">
             <div className="flex flex-col items-center text-center pb-6 px-4 md:px-8">
                <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white pb-2">
                    Technical Skills
                </h2>
                <p className="text-sm sm:text-base md:text-lg text-[#86A1AF]">
                    Technologies and frameworks I work with
                </p>
            </div>


            <div className=" flex flex-wrap gap-3 sm:gap-4 md:gap-6 mb-4 justify-center items-center container mx-auto pb-5 px-2">
                {["All", "Programming", "Frontend", "Tools"].map((key) => (
                    <button
                        key={key}
                        onClick={() => setFilter(key)}
                        className={`text-sm sm:text-base md:text-lg font-semibold text-[#D4D4D4] hover:bg-[#262626] border-none px-3 sm:px-4 py-1.5 sm:py-2 rounded-full hover:shadow-md transition-transform hover:scale-105 duration-300 ${filter === key
                            ? "bg-[#262626] text-white shadow-md scale-105"
                            : ""
                            }`}
                    >
                        {key}
                    </button>
                ))}
            </div>


            {data.length === 0 ? (
                <p className="text-center text-slate-500"></p>
            ) : (
                <div
                    data-aos="zoom-in-right" data-aos-duration="1000"
                    className="grid grid-cols-2 sm:grid-cols-2 lg:w-160 md:grid-cols-4 gap-6 justify-center items-center container mx-auto px-4"
                >
                    {visible.map((item) => (
                        <div data-aos="Zoom-in" data-aos-duration="1000"
                            key={item.id}
                            className="aos-animate flex flex-col items-center justify-center gap-4 p-4 rounded-xl shadow-md hover:shadow-lg transition-transform duration-300 hover:scale-105"
                        >
                            <div className="w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 flex items-center justify-center rounded-lg overflow-hidden bg-[#262626]">
                                <img
                                    src={item.img}
                                    alt={item.title}
                                    className="w-16 sm:w-20 transition-transform duration-300 hover:scale-110 object-contain"
                                    onError={(e) => {
                                        e.currentTarget.src = "default.png";
                                    }}
                                />
                            </div>
                            <h3 className="font-semibold text-base sm:text-md text-white text-center">
                                {item.title}
                            </h3>
                        </div>
                    ))}
                </div>

            )}
           </div>
           
        </section>
        
        </>
    );
}
