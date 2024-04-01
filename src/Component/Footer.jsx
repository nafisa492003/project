import React from 'react'
import Container from './Container';
import List_UL from './List_UL';
import List_LI from './List_LI';

const Footer = () => {
    return (
        <footer className="bg-white text-black p-8 mt-10">
            <Container>
            <div className=" grid grid-cols-1 md:grid-cols-4 gap-4 text-gray-800">
            <div>
              <h2 className="font-bold font-dmsans text-primary text-lg mb-4">About Us</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>
            <div>
              <h2 className="font-bold font-dmsans text-primary text-lg mb-4">Customer Service</h2>
              <List_UL>
              <List_LI className="hover:text-gray-600 font-dmsans font-normal text-[16px]">Site Map </List_LI>
              <List_LI className="hover:text-gray-600 font-dmsans font-normal text-[16px]">Site Map </List_LI>
              <List_LI className="hover:text-gray-600 font-dmsans font-normal text-[16px]">Site Map </List_LI>
              <List_LI className="hover:text-gray-600 font-dmsans font-normal text-[16px]">Site Map </List_LI>
              <List_LI className="hover:text-gray-600 font-dmsans font-normal text-[16px]">Site Map </List_LI>
             
              </List_UL>
            </div>
            <div>
              <h2 className="font-bold font-dmsans text-primary text-lg mb-4">My Account</h2>
              <List_UL>
              <List_LI className="hover:text-gray-600 font-dmsans font-normal text-[16px]">Site Map </List_LI>
              <List_LI className="hover:text-gray-600 font-dmsans font-normal text-[16px]">Site Map </List_LI>
              <List_LI className="hover:text-gray-600 font-dmsans font-normal text-[16px]">Site Map </List_LI>
              <List_LI className="hover:text-gray-600 font-dmsans font-normal text-[16px]">Site Map </List_LI>
              <List_LI className="hover:text-gray-600 font-dmsans font-normal text-[16px]">Site Map </List_LI>
             
              </List_UL>
            </div>
            <div>
              <h2 className="font-bold font-dmsans text-primary text-lg mb-4">Follow Us</h2>
              <div className="flex space-x-4">
                <a href="#" className="hover:text-gray-600">Facebook</a>
                <a href="#" className="hover:text-gray-600">Twitter</a>
                <a href="#" className="hover:text-gray-600">Instagram</a>
              </div>
            </div>
          </div>
          <div className="font-bold font-dmsans text-primary text-lg mt-4 mb-4">
            © 2024 AFIFA YESMIN NAFISA. All Rights Reserved.
          </div>
            </Container>
       
        </footer>
      );
    };

export default Footer