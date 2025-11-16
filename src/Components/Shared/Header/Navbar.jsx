import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { FiDownload, FiMenu, FiX } from "react-icons/fi";
import ThemeSwitcher from "./ThemeSwitcher";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const menuItems = [
    { name: "Home", to: "/" },
    { name: "About", to: "/about" },
    { name: "Skills", to: "/skills" },
    { name: "Projects", to: "/projects" },
    { name: "Education", to: "/education" },
    { name: "Contact", to: "/contact" },
  ];

  // Scroll listener to toggle blur effect
  React.useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) setScrolled(true);
      else setScrolled(false);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`fixed lg:top-1 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#111111]/60 backdrop-blur-md shadow-md lg:container lg:mx-auto lg:px-24"
          : "bg-transparent"
      }`}
    >
      <div className='flex justify-between items-center container mx-auto px-4 sm:px-6 lg:px-24 py-4'>
        {/* Left: Menu */}
        <div className='flex items-center gap-4'>
          {/* Mobile menu icon */}
          <div
            className='lg:hidden cursor-pointer text-white text-2xl'
            onClick={() => setOpen(!open)}
          >
            {open ? <FiX /> : <FiMenu />}
          </div>

          {/* Desktop menu */}
          <div className='hidden lg:flex gap-6 items-center'>
            {menuItems.map((item) => (
              <div
                key={item.name}
                className='hover:border text-md font-semibold text-[#D4D4D4] hover:bg-[#262626] border-none px-4 py-1 rounded-full hover:shadow transition-transform hover:scale-110 duration-300'
              >
                <NavLink to={item.to}>{item.name}</NavLink>
              </div>
            ))}
          </div>
        </div>

        {/* Right: Theme switcher + Resume */}
        <div className='flex gap-4 items-center'>
          <a href="https://www.canva.com/design/DAG4matq9oY/flHYLeBeNXUnw8Qu8U8Etg/view?utm_content=DAG4matq9oY&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=ha0ab91e8c3"><div className='flex items-center justify-center gap-2 px-3 py-1.5 bg-[#262626] rounded-md shadow transition-transform hover:-translate-y-1 duration-300'>
            <FiDownload />
            <p className='text-sm cursor-pointer text-[#FFFFFF] font-bold'>Resume</p>
          </div></a>
          <ThemeSwitcher />
        </div>

        {/* Mobile dropdown menu */}
        {open && (
          <div className='absolute top-full left-0 w-full bg-[#1A1A1A] flex flex-col items-center gap-4 py-4 lg:hidden z-50'>
            {menuItems.map((item) => (
              <div
                key={item.name}
                className='hover:border text-md font-semibold text-[#D4D4D4] hover:bg-[#262626] border-none px-4 py-1 rounded-full hover:shadow transition-transform hover:scale-110 duration-300 w-11/12 text-center'
                onClick={() => setOpen(false)}
              >
                <NavLink to={item.to}>{item.name}</NavLink>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
