import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../Context/AuthContext";
import UserIcon from "../assets/NavbarIcon.webp";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./navbar.css";
import ThemeSection from "../Pages/Home/ThemeSection";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleLogOut = () => {
    logOut()
      .then(() => {
        toast.success("Logged out successfully");
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const links = (
    <>
      <li>
        <NavLink to="/" className="nav-link">
          Home
        </NavLink>
      </li>
      <li>
        <NavLink to="/browseListings" className="nav-link">
          Browse Listings
        </NavLink>
      </li>

      {user && (
        <>
          <li>
            <NavLink to="/dashboard" className="nav-link">
              Dashboard
            </NavLink>
          </li>

          <li>
            <NavLink to="/myListing" className="nav-link">
              My Listing
            </NavLink>
          </li>
          <li>
            <NavLink to="/ContactUs" className="nav-link">
              Contact Us
            </NavLink>
          </li>
          <li>
            <NavLink to="/addRoommate" className="nav-link">
              Add Roommate
            </NavLink>
          </li>
        </>
      )}
    </>
  );

  // fixed top-0 left-0

  return (
    <div className="navbar bg-base-100  	fixed top-0 left-0 w-full z-50 dark:bg-blue-600 shadow-md px-4">
      {/* Start */}
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-3 shadow bg-base-100 rounded-box w-56 space-y-1"
          >
            {links}
          </ul>
        </div>
        <Link to="" className="flex items-center gap-2">
          <img className="w-10" src={UserIcon} alt="Logo" />
          <span className="text-xl font-bold hidden sm:block">
            RoomMate Finder
          </span>
        </Link>
      </div>

      {/* Center */}
      <div className="navbar-center hidden lg:flex">
        <ul
          className="menu menu-horizontal px-1 space-x-2
         text-black   dark:text-white"
        >
          {links}
        </ul>
      </div>

      {/* End */}
      <div className="navbar-end flex items-center gap-3">
        <ThemeSection />

        {user ? (
          <>
            <img
              className="w-10 h-10 rounded-full border-2 border-gray-300 object-cover"
              src={user?.photoURL}
              alt="User"
              title={user?.displayName || user?.email}
            />
            <button
              onClick={handleLogOut}
              className="btn btn-sm lg:btn-md bg-black text-white hover:bg-gray-800 transition-all duration-200"
            >
              Logout
            </button>
          </>
        ) : (
          <>
            <Link to="/register">
              <button className="btn btn-sm lg:btn-md bg-black text-white hover:bg-gray-800 transition-all duration-200">
                Register
              </button>
            </Link>
            <Link to="/signin">
              <button className="btn btn-sm lg:btn-md bg-black text-white hover:bg-gray-800 transition-all duration-200">
                Sign In
              </button>
            </Link>
          </>
        )}
      </div>
    </div>
  );
};

export default Navbar;
