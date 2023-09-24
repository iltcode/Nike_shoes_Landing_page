import { useState } from "react";
import { hamburger } from "../assets/icons";
import { headerLogo } from "../assets/images";
import { close } from "../assets/images";
import { navLinks } from "../constants";

const Nav = () => {

    let [open, setOpen] = useState(true);
    let [logo, setLogo] = useState(false);
    
    const onToggleMenu = (e) => {
      
      setOpen(!open);
      setLogo(!logo);
      console.log(open);

    };

    // ${logo ? "" : "max-lg:flex"}
    // ${logo ? "max-lg:justify-center" : ""}
    // className={logo ? "max-lg:hidden" : ""}
  return (
    <header className={`padding-x py-8 fixed z-20 w-full bg-slate-300 max-lg:flex`}>
      <nav className={`flex justify-between items-center max-container
                      max-lg:flex-1 max-lg:flex ${logo ? "max-lg:justify-center" : ""}`}>
        <a href='/' className={logo ? "max-lg:hidden" : ""}>
          <img
            src={headerLogo}
            alt='logo'
            width={129}
            height={29}
            className='m-0 w-[129px] h-[29px]'
          />
        </a>
        <ul className='flex-1 flex justify-center items-center gap-16 max-lg:hidden'>
          {navLinks.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                className='font-montserrat leading-normal text-lg text-slate-gray'
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
        
        
        <ul className={`hidden max-lg:flex max-lg:flex-col max-lg:items-center
                      max-lg:z-auto max-lg:gap-8
                      max-lg:pl-0 ${open ? "max-lg:hidden" : ""}`}>
          {navLinks.map((item) => (
            <li key={item.label} className="max-lg:ml-8 max-lg:my-0" onClick={onToggleMenu}>
              <a
                href={item.href}
                className={`font-montserrat leading-normal text-lg text-slate-gray
                            hover:text-gray-400 duration-500 `}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        <div className='flex gap-2 text-lg leading-normal font-medium font-montserrat max-lg:hidden wide:mr-24'>
          <a href='/'>Sign in</a>
          <span>/</span>
          <a href='/'>Explore now</a>
        </div>
        
      </nav>
      <div className='hidden max-lg:block max-lg:cursor-pointer' onClick={onToggleMenu}>
          <img src={open ? hamburger : close}  alt='hamburger icon' width={25} height={25} />
        </div>
    </header>
  );
};

export default Nav;