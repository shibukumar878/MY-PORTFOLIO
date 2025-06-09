import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const Nav = () => {
    const [navOpen, setNavOpen] = useState(false);

    const links = [
        { id: 1, link: "home" },
        { id: 2, link: "about" },
        { id: 3, link: "projects" },
        { id: 4, link: "skills" },
        { id: 5, link: "contact" },
    ];

  return (
    <div>
        <div className="fixed top-0 w-full bg-white shadow-md z-50">
          <div className="max-w-screen-xl mx-auto px-4 py-3 flex justify-between items-center">
            <h1 className="text-2xl font-bold text-indigo-600">MyPortfolio</h1>

                <ul className="hidden md:flex space-x-6">
                {links.map(({ id, link }) => (
                    <li key={id} className="capitalize text-gray-700 hover:text-indigo-600 cursor-pointer">
                    <a href={`#${link}`}>{link}</a>
                    </li>
                ))}
                </ul>

                <div onClick={() => setNavOpen(!navOpen)} className="md:hidden cursor-pointer text-2xl text-gray-700">
                {navOpen ? <FaTimes /> : <FaBars />}
                </div>

                {/* Mobile Menu */}
                {navOpen && (
                <ul className="absolute top-16 left-0 w-full bg-white flex flex-col items-center space-y-6 py-8 md:hidden shadow-md">
                    {links.map(({ id, link }) => (
                    <li key={id} className="capitalize text-gray-700 hover:text-indigo-600 text-lg">
                        <a href={`#${link}`} onClick={() => setNavOpen(false)}>{link}</a>
                    </li>
                    ))}
                </ul>
             )}
        </div>
    </div>
 </div>
  );
};

export default Nav;