import React from 'react';
import { useSelector } from 'react-redux';
import Navbar from './Navbar';
import LoginedNavbar from './LoginedNavbar'; 

function Banner() {
  const currentUser = useSelector((state) => state.auth.user); 

  return (
    <div className="relative">
      {/* {currentUser ? <LoginedNavbar position='absolute' /> : <Navbar position='absolute' />} */}
      <Navbar position='absolute' />
      <img 
        src={`${process.env.PUBLIC_URL}/images/Banner.png`} 
        alt="" 
        className="w-full h-[80vh] md:h-[70vh] lg:h-[70vh] xl:h-[70vh] object-cover" 
      />
      <div className="absolute bottom-0 left-0 mb-14 p-4 ml-8 text-left">
        <h1 className="text-white text-4xl md:text-5xl lg:text-6xl font-semibold mb-5">Advanced Leadership Tactics</h1>
        <p className="text-white text-sm md:text-md lg:text-lg font-normal mb-10">3 hours left | 50% completed</p>
        <button className="bg-[#dbaa24] h-14 w-auto px-4 rounded-xl text-white font-semibold text-lg">
          Resume Course
        </button>
      </div>
    </div>
  );
}

export default Banner;
