import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../Context/AuthContext';
import UserIcon from '../assets/NavbarIcon.webp';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './navbar.css';

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleLogOut = () => {
    logOut()
      .then(() => {
        toast.success('Log out successfully');
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const links = (
    <>
      <li><NavLink to="/">Home</NavLink></li>
      <li><NavLink to="/addRoommate">Add Roommate</NavLink></li>
      <li><NavLink to="/browseListings">Browse Listings</NavLink></li>
      <li><NavLink to="/myListing">My Listing</NavLink></li>
    </>
  );

  return (
    <div className="navbar bg-base-100 shadow-sm">
      {/* Navbar Start */}
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none"
              viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16" />
            </svg>
          </div>
          <ul tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
            {links}
          </ul>
        </div>
        <img className='w-12 ml-2' src={UserIcon} alt="Site Icon" />
      </div>

      {/* Navbar Center for Large Devices */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          {links}
        </ul>
      </div>

      {/* Navbar End — Right Side (Always Visible) */}
      <div className="navbar-end gap-3 flex pr-2">
        {user ? (
          <>
            <img
              className="w-10 h-10 lg:w-12 lg:h-12 rounded-full cursor-pointer"
              src={user?.photoURL}
              alt="User"
              title={user?.displayName || user?.email}
            />
            <button className='btn btn-sm lg:btn-md bg-black text-white' onClick={handleLogOut}>
              LogOut
            </button>
          </>
        ) : (
          <>
            <Link  to="/register">
              <button className='btn btn-sm lg:btn-md bg-black text-white'>Register</button>
            </Link>
            <Link to="/signin">
              <button className='btn btn-sm lg:btn-md bg-black text-white'>SignIn</button>
            </Link>
          </>
        )}
      </div>
    </div>
  );
};

export default Navbar;
