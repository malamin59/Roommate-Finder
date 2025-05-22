import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../Context/AuthContext';
import UserIcon from '../assets/NavbarIcon.webp'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './navbar.css'

const Navbar = () => {
const links = <>
    <li> <NavLink to="/"> Home </NavLink> </li>
    <li> <NavLink to="/addRoommate"> Add Roommate  </NavLink> </li>
    <li> <NavLink to="/browseListings"> BrowseListings </NavLink> </li>
    <li> <NavLink to="/myListing"> My Listing </NavLink> </li>
</>

const { user, logOut } = useContext(AuthContext);
const  handleLogOut = () => {

    logOut().then(() => {
            toast.success('log out successfully')
        })
        .catch((error => {
            console.log(error)
        }))
}

return (
    <div className="navbar lg:-mb-8 -mb-18 bg-base-100 shadow-sm">
        <div className="navbar-start">
            <div className="dropdown">
                <img className='w-12' src={UserIcon} alt="" />
                <div tabIndex={0} role="button " className="btn p-0 btn-ghost lg:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5  w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                </div>
                <ul
                    tabIndex={0}
                    className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                    {links}
                </ul>
            </div>
        </div>
        <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1">

                {links}
            </ul>
        </div>
        <div className="navbar-end gap-3 ">

            {
                user && (
                    <img
                        className="w-12 h-12 rounded-full cursor-pointer"
                        src={user?.photoURL}
                        alt="User"
                        title={user?.displayName || user?.email}
                    />
                )
            }

            {
                user ? (
                    <button className='btn bg-black font-bold *: text-white' onClick={handleLogOut}
                    > LogOut</button>
                ) : (
                    <div>

                        <Link  to="/register">
                            <button className='btn font-bold  bg-black text-white'>Register</button>
                        </Link>
                        <Link  to="/signin">
                            <button className='btn font-bold bg-black text-white'>SignIn</button>
                        </Link>
                    </div>
                )
            }

        </div>

    </div>
);


};

export default Navbar;