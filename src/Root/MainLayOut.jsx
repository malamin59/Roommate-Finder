import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../Navbar.jsx/Navbar';
import Footer from '../Pages/Footer/Footer';

const MainLayOut = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <div className="flex-grow">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default MainLayOut;
