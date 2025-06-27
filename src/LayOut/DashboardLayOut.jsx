import { Link } from "lucide-react";
import { NavLink, Outlet } from "react-router";
import UserIcon from "../assets/NavbarIcon.webp";

const DashboardLayOut = () => {
  return (
    <div className="drawer   lg:drawer-open">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col">
        {/* Navbar */}
        <div className="navbar lg:hidden bg-base-300 w-full">
          <div className="flex-none lg:hidden">
            <label htmlFor="my-drawer-2" className="btn btn-square btn-ghost">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="inline-block w-6 h-6 stroke-current"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
            </label>
          </div>
          {/* <div className="flex-1 px-2 font-bold text-xl">Dashboard</div> */}
        </div>

        {/* Dynamic Page Content */}
        <div className="p-4">
          <Outlet />
        </div>
      </div>

      {/* Sidebar */}
      <div className="drawer-side">
        <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
        <ul className="menu p-4 w-60 min-h-full  bg-base-200 text-base-content">
          {" "}
          <a href="/">
            {" "}
            <img className="w-12 h-12 rounded " src={UserIcon} alt="" />
          </a>
          <li >
            <NavLink
              to="/dashboard"
              className={({ isActive }) =>
                isActive ? "nav-linac " : "nav-link"
              }
            ></NavLink>
          </li>
          <li>
            <NavLink
              to="/dashboard/myListing"
              className={({ isActive }) =>
                isActive ? "nav-link active" : "nav-link"
              }
            >
              My Listing
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/dashboard/BroseCollection"
              className={({ isActive }) =>
                isActive ? "nav-link active" : "nav-link"
              }
            >
             Browse Listing
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/dashboard/addRoommate"
              className={({ isActive }) =>
                isActive ? "nav-link active" : "nav-link"
              }
            >
              Add Roommate
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default DashboardLayOut;
