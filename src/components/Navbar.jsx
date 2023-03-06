import React from "react";
//import React, { useEffect } from "react";
import { useState } from "react";

const Navbar = () => {
  let Links = [
    { name: "HOME", link: "/", id: "start" },
    { name: "ABOUT", link: "/", id: "About" },
    { name: "SKILLS", link: "/", id: "skill" },
    { name: "PROJECTS", link: "/", id: "Pro" },
    { name: "CONTACT", link: "/", id: "Contact" },
  ];
  // let [open,setOpen]=useState(false) ;
  let [open, setOpen] = useState(false);

  return (
    <div className="bg-violet-700 shadow-md w-full fixed top-0 left-0 z-40">
      <div className="md:flex items-center justify-between py-4 md:px-10 px-7 ">
        <div className="font-bold text-xl cursor-pointer flex items-center text-slate-50">
          <span className="font-dancing text-4xl mr-1 pt-2">Smah</span>
        </div>
        <div
          onClick={() => setOpen(!open)}
          className="text-3xl text-slate-50 absolute right-8 top-6 cursor-pointer md:hidden"
        >
          {/* <ion-icon name={open ? "close":"menu"}></ion-icon> */}
          <ion-icon name={open ? "close-outline" : "menu-outline"}></ion-icon>
          {/* <ion-icon name="close-outline"></ion-icon> */}
        </div>

        <ul
          className={` md:flex md:items-center md :pb-0 pb-3 absolute md:static bg-violet-700 md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in  ${
            open ? "top-20 opacity-100" : "top-[-490px]"
          } md:opacity-100  `}
        >
          {Links.map((link) => (
            <li key={link.name} className="md :ml-8 text-lg md :my-0 my-4  ">
              <a
                href={`#${link.id}`}
                className="text-slate-300 hover:text-white font-semibold duration-500 mr-8"
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
