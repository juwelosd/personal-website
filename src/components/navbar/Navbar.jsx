import React, { useState } from 'react';
import { Link } from 'react-scroll';
import logo from '../../assets/images/logo.png';
import { navLinksdata } from '../../constants/Index';

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <section className="container sticky top-0 z-50 bg-[#212428]">
      <div className="h-24 flex mx-auto justify-between items-center px-4 md:px-0">

        {/* Logo */}
        <div>
          <img src={logo} alt="logo" className="w-28" />
        </div>

        {/* Hamburger menu button (Mobile only) */}
        <div className="md:hidden">
          <button
            onClick={() => setOpen(!open)}
            className="text-gray-300 focus:outline-none text-2xl"
          >
            {open ? "✖" : "☰"}
          </button>
        </div>

        {/* Nav links */}
        <div>
          <ul
            className={`md:flex items-center gap-10 absolute md:static left-0 top-24 w-full md:w-auto 
            bg-[#212428] md:bg-transparent px-6 py-5 md:p-0 
            duration-300 ease-in-out 
            ${open ? "opacity-100 visible" : "opacity-0 invisible md:opacity-100 md:visible"}`}
          >
            {navLinksdata.map(({ _id, title, link }) => (
              <li
                className="text-base font-normal text-gray-400 tracking-wide cursor-pointer 
                hover:text-emerald-200 duration-500 py-3 md:py-0"
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
                >
                  {title}
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
