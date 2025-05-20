// import React from 'react';
// import { Outlet } from 'react-router-dom';
// import Navbar from '../Navbar.jsx/Navbar';
// import Footer from '../Pages/Footer/Footer';

// const MainLayOut = () => {
//     return (
//       <>
//       <Navbar></Navbar>
//       <div className='min-w[calc(100vh-116px)]'>
//       <Outlet></Outlet>
//       </div>
//       <Footer></Footer>

//       </>
//     );
// };

// export default MainLayOut;

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
