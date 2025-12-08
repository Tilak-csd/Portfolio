import React, { useEffect, useState } from 'react';
import Buttons from '../utilities/Buttons';

export default function Navbar() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (open) {
      document.body.style.overflowY = 'hidden';
    } else {
      document.body.style.overflowY = 'auto';
    }
    return () => {
      document.body.style.overflowY = 'auto';
    };
  }, [open]);

  return (
    <div className="relative">
      {/* Navbar itself */}
      <div className="relative flex justify-between items-center h-[60px] md:h-12 w-full px-4 border-b md:border-0 border-gray-200 z-20 bg-white">
        <p className="font-rosca text-xl">Tilak Gubhaju</p>
        {open ? ( <CloseMenu setOpen={setOpen} /> ) : ( <OpenMenu setOpen={setOpen} /> )}
        {/* Desktop Menu Navbar */}
        <div className='hidden relative md:flex justify-center items-center gap-3 h-full rounded-b-sm bg-gray-100 px-5 rounded-t-3xl'>
          <NavLink />
        </div>
        <button className='hidden md:block px-2 py-1 font-sans rounded-md text-md hover:text-gray-300 hover: bg-black w-auto cursor-pointer text-md text-white'>Contact</button>
      </div>
      {/* Mobile Menu behind navbar */}
      <div
        className={`absolute md:hidden flex justify-center items-center flex-col gap-5 top-[60px] left-0 w-full h-[calc(100vh-60px)] bg-white z-10 transition-all duration-500 ease-in-out
          ${open ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-full pointer-events-none'} `} >
        <NavLink />
        <Buttons label={'Contact'} />
      </div>
    </div>
  );
}

function NavLink() {
  return (
    <ul className="flex flex-col justify-center items-center gap-5 font-sans text-sm md:flex-row md:h-[full]  ">
      <li className=""><a href="#" class="group relative text-black transition duration-300">
        Home
        <span class="absolute bottom-0 left-0 h-0.5 w-0 bg-black transition-all duration-300 group-hover:w-full"></span>
      </a>
      </li>
      <li className=""><a href="#" class="group relative text-black transition duration-300">
        About
        <span class="absolute bottom-0 left-0 h-0.5 w-0 bg-black transition-all duration-300 group-hover:w-full"></span>
      </a>
      </li>
      <li className=""><a href="#" class="group relative text-black transition duration-300">
        Projects
        <span class="absolute bottom-0 left-0 h-0.5 w-0 bg-black transition-all duration-300 group-hover:w-full"></span>
      </a>
      </li>
      <li className=""><a href="#" class="group relative text-black transition duration-300">
        Testomonial
        <span class="absolute bottom-0 left-0 h-0.5 w-0 bg-black transition-all duration-300 group-hover:w-full"></span>
      </a>
      </li>

    </ul>
  );
}

function OpenMenu({ setOpen }) {
  return (
    <div className="p-2 cursor-pointer md:hidden" onClick={() => setOpen(prev => !prev)}>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-6 h-6">
        <path fillRule="evenodd" d="M2 4.75A.75.75 0 0 1 2.75 4h14.5a.75.75 0 0 1 0 1.5H2.75A.75.75 0 0 1 2 4.75Zm7 10.5a.75.75 0 0 1 .75-.75h7.5a.75.75 0 0 1 0 1.5h-7.5a.75.75 0 0 1-.75-.75ZM2 10a.75.75 0 0 1 .75-.75h14.5a.75.75 0 0 1 0 1.5H2.75A.75.75 0 0 1 2 10Z" clipRule="evenodd" />
      </svg>
    </div>
  );
}

function CloseMenu({ setOpen }) {
  return (
    <div className="p-2 mr-3 cursor-pointer md:hidden" onClick={() => setOpen(prev => !prev)}>
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
      </svg>
    </div>
  );
}
