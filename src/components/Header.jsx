// src/components/Header.jsx
import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";

const Header = () => {
  const [open, setOpen] = useState(false);

  const NavLinks = () => (
    <ul className="flex flex-col md:flex-row md:items-center gap-6">
      <li><a href="/" className="text-gray-700 hover:text-gray-900">Services</a></li>
      <li><a href="/projects" className="text-gray-700 hover:text-gray-900">Projects</a></li>
      <li><a href="/about" className="text-gray-700 hover:text-gray-900">About</a></li>
      <li><a href="/contact" className="text-gray-700 hover:text-gray-900">Contact</a></li>
    </ul>
  );

  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="h-16 flex items-center justify-between">
          {/* Stylish text logo */}
          <a href="/" className="inline-flex items-center group">
            <div className="w-9 h-9 rounded-md bg-amber-500/90 ring-4 ring-amber-100 flex items-center justify-center mr-2">
              <span className="text-white font-black">B</span>
            </div>
            <span className="tracking-widest font-extrabold text-xl text-gray-900">
              BUIL<span className="text-amber-600">D</span>EDGE
            </span>
            <span className="ml-1 w-1.5 h-1.5 rounded-full bg-amber-500 group-hover:scale-110 transition"></span>
          </a>

          {/* Desktop nav */}
          <nav className="hidden md:block">
            <NavLinks />
          </nav>

          
          <div className="hidden md:flex">
            {/* <a href="#quote" className="inline-flex items-center px-4 py-2 rounded-md bg-amber-600 text-white hover:bg-amber-700">
              Get Quote
            </a> */}
          </div>

          {/* Mobile toggle */}
          <button
            className="md:hidden inline-flex items-center justify-center w-10 h-10 rounded-md border border-gray-200"
            onClick={() => setOpen(!open)}
            aria-label="Toggle navigation"
          >
            {open ? <FiX className="w-5 h-5" /> : <FiMenu className="w-5 h-5" />}
          </button>
        </div>

        {/* Mobile sheet */}
        {open && (
          <div className="md:hidden pb-4">
            <NavLinks />
            {/* <a href="#quote" className="mt-4 inline-flex items-center px-4 py-2 rounded-md bg-amber-600 text-white hover:bg-amber-700">
              Get Quote
            </a> */}
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
