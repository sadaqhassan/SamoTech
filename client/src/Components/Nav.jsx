import React, { useState } from "react";
import { Menu, X } from "lucide-react";

const Nav = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="w-full fixed top-0 left-0 z-50 bg-black/10 backdrop-blur-lg  ">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="flex items-center justify-between h-16">
          
          {/* Logo */}
          <h1 className="text-2xl font-extrabold text-white tracking-wide">
            Samo<span className="text-cyan-400">Tech</span>
          </h1>

          {/* Desktop Menu */}
          <ul className="hidden md:flex items-center gap-8 text-gray-100 font-medium">
            <li className="hover:text-cyan-400 cursor-pointer transition">
              Home
            </li>
            <li className="hover:text-cyan-400 cursor-pointer transition">
              About
            </li>
            <li className="hover:text-cyan-400 cursor-pointer transition">
              Services
            </li>
            <li className="hover:text-cyan-400 cursor-pointer transition">
              Contact
            </li>

            <button className="bg-cyan-500 hover:bg-cyan-400 px-5 py-2 rounded-xl text-white transition">
              Get Started
            </button>
          </ul>

          {/* Mobile Button */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden text-white"
          >
            {open ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          open ? "max-h-96" : "max-h-0"
        }`}
      >
        <div className="bg-black/90 backdrop-blur-xl px-6 py-5 space-y-5 text-gray-300 font-medium">
          <p className="hover:text-cyan-400 cursor-pointer">Home</p>
          <p className="hover:text-cyan-400 cursor-pointer">About</p>
          <p className="hover:text-cyan-400 cursor-pointer">Services</p>
          <p className="hover:text-cyan-400 cursor-pointer">Contact</p>

          <button className="w-full bg-cyan-500 hover:bg-cyan-400 py-3 rounded-xl text-white transition">
            Get Started
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Nav;