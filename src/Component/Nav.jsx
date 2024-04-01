import React, { useState } from "react";
import Container from "./Container";
import List_UL from './List_UL';
import List_LI from './List_LI';

const Nav = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
      <nav className="bg-white text-black p-4 shadow-md">
        <Container>
        <div className="flex justify-between items-center">
            {/* image logo */}
          <div className="text-2xl font-bold">LOGO</div>
              {/* image logo */}
          <List_UL className="hidden md:flex space-x-4">
            <List_LI className="hover:text-gray-800 font-dmsans text-sm font-normal hover:font-bold duration-100 text-primary cursor-pointer">Home</List_LI>
            <List_LI className="hover:text-gray-800 font-dmsans text-sm font-normal hover:font-bold duration-100 text-primary cursor-pointer">About</List_LI>
            <List_LI className="hover:text-gray-800 font-dmsans text-sm font-normal hover:font-bold duration-100 text-primary cursor-pointer">Service</List_LI>
            <List_LI className="hover:text-gray-800 font-dmsans text-sm font-normal hover:font-bold duration-100 text-primary cursor-pointer">Contact</List_LI>
            <List_LI className="hover:text-gray-800 font-dmsans text-sm font-normal hover:font-bold duration-100 text-primary cursor-pointer">Pricing</List_LI>
          </List_UL>
          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)}>
              <svg className="w-6 h-6" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                {isOpen ? (
                  <path d="M6 18L18 6M6 6l12 12"></path>
                ) : (
                  <path d="M4 6h16M4 12h16M4 18h16"></path>
                )}
              </svg>
            </button>
          </div>
          <div className="hidden md:flex ml-4">
            <input type="text" className="p-2 border rounded" placeholder="Search..."/>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 ml-2">
              Search
            </button>
          </div>
        </div>
        {isOpen && (
          <List_UL className="md:hidden flex flex-col space-y-2 mt-6 z-50">
            <List_LI className="hover:text-gray-800 font-dmsans text-sm font-normal hover:font-bold duration-100 text-primary cursor-pointer">Home</List_LI>
            <List_LI className="hover:text-gray-800 font-dmsans text-sm font-normal hover:font-bold duration-100 text-primary cursor-pointer">About</List_LI>
            <List_LI className="hover:text-gray-800 font-dmsans text-sm font-normal hover:font-bold duration-100 text-primary cursor-pointer">Service</List_LI>
            <List_LI className="hover:text-gray-800 font-dmsans text-sm font-normal hover:font-bold duration-100 text-primary cursor-pointer">Contact</List_LI>
            <List_LI className="hover:text-gray-800 font-dmsans text-sm font-normal hover:font-bold duration-100 text-primary cursor-pointer">Pricing</List_LI>
            <div className="flex flex-col items-center w-full mt-4">
              <input type="text" className="p-2 w-full border rounded" placeholder="Search..."/>
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 w-full mt-2">
                Search
              </button>
            </div>
          </List_UL>
        )}
        </Container>
      
      </nav>
    );
  };
export default Nav;
