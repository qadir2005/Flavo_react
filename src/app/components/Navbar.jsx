"use client";

import { useState } from "react";
import { FaShoppingCart } from "react-icons/fa";

export default function Navbar() {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isSpicesDropdownOpen, setSpicesDropdownOpen] = useState(false);
  const [isDryFruitsDropdownOpen, setDryFruitsDropdownOpen] = useState(false);

  return (
    <nav className="bg-blue-500 text-white">
      {/* Navbar Container */}
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <div className="text-xl font-bold">BrandName</div>

       

        {/* Desktop Links */}
        <div className="hidden md:flex items-center space-x-6">
          <a href="#home" className="hover:text-gray-300">
            Home
          </a>
          <a href="#about" className="hover:text-gray-300">
            About
          </a>

          {/* Spices Dropdown */}
          <div
            className="relative group"
            onMouseEnter={() => setSpicesDropdownOpen(true)}
            onMouseLeave={() => setSpicesDropdownOpen(false)}
          >
            <button
              onClick={() => setSpicesDropdownOpen(!isSpicesDropdownOpen)}
              className="hover:text-gray-300"
            >
              Spices
            </button>
            {isSpicesDropdownOpen && (
              <div className="absolute bg-white text-black rounded shadow-lg mt-2">
                <ul>
                  <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                    <a href="#small-packets">Small Packets</a>
                  </li>
                  <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                    <a href="#commercial-packets">Commercial Packets</a>
                  </li>
                </ul>
              </div>
            )}
          </div>

          {/* Dry Fruits Dropdown */}
          <div
            className="relative group"
            onMouseEnter={() => setDryFruitsDropdownOpen(true)}
            onMouseLeave={() => setDryFruitsDropdownOpen(false)}
          >
            <button
              onClick={() => setDryFruitsDropdownOpen(!isDryFruitsDropdownOpen)}
              className="hover:text-gray-300"
            >
              Dry Fruits
            </button>
            {isDryFruitsDropdownOpen && (
              <div className="absolute bg-white text-black rounded shadow-lg mt-2">
                <ul>
                  <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                    <a href="#small-packets-dry">Small Packets</a>
                  </li>
                  <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                    <a href="#commercial-packets-dry">Commercial Packets</a>
                  </li>
                </ul>
              </div>
            )}
          </div>

          <a href="#contact" className="hover:text-gray-300">
            Contact
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden text-white focus:outline-none"
        >
          &#9776;
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden px-6 py-4 bg-blue-600 space-y-4">
          {/* Search Bar and Cart */}
          <div className="flex items-center space-x-4">
            <input
              type="text"
              placeholder="Search..."
              className="px-4 py-2 rounded-md text-black focus:outline-none focus:ring-2 focus:ring-blue-300 w-full"
            />
            <button className="text-white text-xl focus:outline-none hover:text-gray-300">
              <FaShoppingCart />
            </button>
          </div>

          <a href="#home" className="block py-2 hover:text-gray-300">
            Home
          </a>
          <a href="#about" className="block py-2 hover:text-gray-300">
            About
          </a>
          <div className="space-y-2">
            <button
              onClick={() =>
                setSpicesDropdownOpen(!isSpicesDropdownOpen)
              }
              className="w-full text-left hover:text-gray-300"
            >
              Spices
            </button>
            {isSpicesDropdownOpen && (
              <div className="pl-4">
                <a href="#small-packets" className="block py-1 hover:text-gray-300">
                  Small Packets
                </a>
                <a href="#commercial-packets" className="block py-1 hover:text-gray-300">
                  Commercial Packets
                </a>
              </div>
            )}
          </div>
          <div className="space-y-2">
            <button
              onClick={() =>
                setDryFruitsDropdownOpen(!isDryFruitsDropdownOpen)
              }
              className="w-full text-left hover:text-gray-300"
            >
              Dry Fruits
            </button>
            {isDryFruitsDropdownOpen && (
              <div className="pl-4">
                <a href="#small-packets-dry" className="block py-1 hover:text-gray-300">
                  Small Packets
                </a>
                <a href="#commercial-packets-dry" className="block py-1 hover:text-gray-300">
                  Commercial Packets
                </a>
              </div>
            )}
          </div>
          <a href="#contact" className="block py-2 hover:text-gray-300">
            Contact
          </a>
        </div>
      )}
       {/* Search Bar and Cart */}
       <div className="hidden md:flex items-center space-x-4">
          {/* Search Bar */}
          <input
            type="text"
            placeholder="Search..."
            className="px-4 py-2 rounded-md text-black focus:outline-none focus:ring-2 focus:ring-blue-300"
          />

          {/* Cart Icon */}
          <button className="text-white text-xl focus:outline-none hover:text-gray-300">
            <FaShoppingCart />
          </button>
        </div>
    </nav>
  );
}
