import React, { useState } from 'react';
import { Link } from 'react-scroll';
import logo from '../../assets/images/logo.png';
import { navLinksdata } from '../../constants/Index';

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <section className="container sticky top-0 z-50 bg-[#212428] border-b border-gray-800">
      <div className="h-24 flex mx-auto justify-between items-center px-4 md:px-0">

        {/* Logo */}
        <div className="transition-transform duration-300 hover:scale-105">
          <img src={logo} alt="logo" className="w-28" />
        </div>

        {/* Hamburger menu button (Mobile only) */}
        <div className="md:hidden">
          <button
            onClick={() => setOpen(!open)}
            className="text-gray-300 focus:outline-none text-2xl transition-transform duration-300 transform"
            style={{ transform: open ? "rotate(90deg)" : "rotate(0deg)" }}
          >
            {open ? "✖" : "☰"}
          </button>
        </div>

        {/* Nav links */}
        <div>
          <ul
            className={`md:flex items-center gap-10 absolute md:static left-0 top-24 w-full md:w-auto 
            bg-[#212428] md:bg-transparent px-6 py-5 md:p-0 
            transition-all duration-500 ease-in-out
            ${open ? "opacity-100 visible translate-y-0" : "opacity-0 invisible -translate-y-4 md:opacity-100 md:visible md:translate-y-0"}`}
          >
            {navLinksdata.map(({ _id, title, link }) => (
              <li
                className="text-base font-normal text-gray-400 tracking-wide cursor-pointer 
                relative group py-3 md:py-0"
                key={_id}
              >
                <Link
                  activeClass="active"
                  to={link}
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  onClick={() => setOpen(false)} // close menu on click mobile
                  className="relative transition-colors duration-300 group-hover:text-emerald-200"
                >
                  {title}
                  {/* Hover Underline Animation */}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-emerald-500 transition-all duration-300 group-hover:w-full"></span>
                </Link>
              </li>
            ))}
          </ul>
        </div>

      </div>
    </section>
  );
};

export default Navbar;