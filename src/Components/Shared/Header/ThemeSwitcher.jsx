import React, { useState } from "react";
import { FaSun, FaMoon, FaCog } from "react-icons/fa";

const ThemeSwitcher = () => {
  const [theme, setTheme] = useState("default");
  const [open, setOpen] = useState(false);

  const themes = [
    { name: "light", icon: <FaSun className="text-yellow-400" /> },
    { name: "dark", icon: <FaMoon className="text-gray-100" /> },
    { name: "default", icon: <FaCog className="text-gray-100" /> },
  ];

  const currentTheme = themes.find((t) => t.name === theme);

  return (
    <div className="relative inline-block text-left">
      {/* Main Button */}
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center justify-center border border-gray-700 gap-2 px-2 py-2 bg-[#141414] rounded-md shadow  transition-transform hover:-translate-y-1 duration-300"
      >
        {currentTheme.icon}
        
      </button>

      {/* Dropdown Menu */}
      {open && (
        <div className="absolute mt-2 w-40  bg-gray-900 border  rounded-lg shadow-lg overflow-hidden">
          {themes.map((t) => (
            <button
              key={t.name}
              onClick={() => {
                setTheme(t.name);
                setOpen(false);
              }}
              className="flex items-center gap-3 w-full px-4 py-2 hover:bg-gray-600 transition"
            >
              {t.icon}
              <span className="capitalize">{t.name}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default ThemeSwitcher;
