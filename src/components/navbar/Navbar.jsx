import React from 'react';
import {Link} from 'react-scroll';
import logo from '../../assets/images/logo.png';
import {navLinksdata} from '../../constants';
const Navbar = () => {
  return (
    <section className="container ">
      <div className=" w-full h-24 flex mx-auto border-b
     border-b-black justify-between items-center  text-white">



<div>
        <img src={logo} alt="logo" className="w-30 " />
      </div>
      <div>
        <ul className="flex items-center gap-10 ">
          {navLinksdata.map(({_id, title, link}) => (
            <li
              className="   text-base font-normal text-gray-400 tracking-wide
               cursor-pointer hover:text-emerald-200 duration-500"
              key={_id}>
              <Link
                activeClass="active"
                to={link}
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}>
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
