import React, { useState } from "react";
import { IoMdClose } from "react-icons/io";
import { Link, NavLink, useNavigate } from "react-router";
import logo from '../../assets/images/logo.png'
import toast from "react-hot-toast";
import 'react-tooltip/dist/react-tooltip.css'
import { Tooltip } from "react-tooltip";
import { useAuthContext } from "../../context/authContext";
import baseUrl from "../../service/baseUrl";

const Navbar = () => {
  const [hamburger, setHamburger] = useState(false);
  const { authUser, setAuthUser } = useAuthContext();
  const navigate = useNavigate();


  const handleLogout = async () => {

    try {
      const res = await fetch(`${baseUrl}/api/auth/logout`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        credentials: 'include'
      });
      const data = await res.json();

      if (data.error) {
        throw new Error(data.error);
      }
      localStorage.removeItem("UID");
      setAuthUser(null);
      navigate('/login')
    } catch (error) {
      toast.error(error.message);
    }
  };


  const handleHamburger = () => {
    setHamburger(!hamburger);
  };

  const links = (
    <>
      <li>
        <NavLink
          onClick={hamburger}
          to="/"
          style={({ isActive }) => ({
            color: isActive ? "#000" : "#333",
            border: isActive ? "2px solid #093FB4" : "none",
            borderRadius: isActive ? "5px" : "5px",
            padding: isActive ? "5px 12px" : "5px 12px",
            background: isActive ? "#ddd" : "transparent",
          })}
        >
          Home
        </NavLink>
      </li>

      <li>
        <NavLink
          onClick={hamburger}
          to="/events"
          style={({ isActive }) => ({
            color: isActive ? "#000" : "#333",
            border: isActive ? "2px solid #093FB4" : "none",
            borderRadius: isActive ? "5px" : "5px",
            padding: isActive ? "5px 12px" : "5px 12px",
            background: isActive ? "#ddd" : "transparent",
          })}
        >
          Events
        </NavLink>
      </li>
      <li>
        <NavLink
          onClick={hamburger}
          to="/add-events"
          style={({ isActive }) => ({
            color: isActive ? "#000" : "#333",
            border: isActive ? "2px solid #093FB4" : "none",
            borderRadius: isActive ? "5px" : "5px",
            padding: isActive ? "5px 12px" : "5px 12px",
            background: isActive ? "#ddd" : "transparent",
          })}
        >
          Add Events
        </NavLink>
      </li>

      <li>
        <NavLink
          onClick={hamburger}
          to="/my-events"
          style={({ isActive }) => ({
            color: isActive ? "#000" : "#333",
            border: isActive ? "2px solid #093FB4" : "none",
            borderRadius: isActive ? "5px" : "5px",
            padding: isActive ? "5px 12px" : "5px 12px",
            background: isActive ? "#ddd" : "transparent",
          })}
        >
          My Events
        </NavLink>
      </li>

    </>
  );




  return (
    <div>
      <nav className="bg-[#eee] shadow-xl md:py-0 py-2">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto ">
          {/* Left side website name and logo */}
          <Link
            href="/"
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <img src={logo} className="w-34" alt="" />
            {/* <span className="self-center text-2xl font-semibold whitespace-nowrap text-white">
              MeetNest
            </span> */}
          </Link>

          {/* Right side Buttons */}
          <div className="flex items-center lg:order-2 space-x-3 lg:space-x-0 rtl:space-x-reverse">

            {
              !authUser && <div className={`md:block space-x-3 gap-4 hidden`}>
                <Link to="/login">
                  <button
                    type="button"
                    className="text-[#fff] cursor-pointer bg-[#093FB4] hover:bg-[#ff670f] focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-4 py-2 text-center"
                  >
                    Sign In
                  </button>
                </Link>
              </div>
            }

            {
              authUser && <div
                className={`flex items-center space-x-3 gap-4`}
              >
                {
                  authUser &&
                    <div className="dropdown dropdown-end hover:bg-[#eee]">
                      <div tabIndex={0} role="button" className="btn p-0 bg-[#eee]">
                        <button className="tooltip tooltip-left avatar cursor-pointer" popoverTarget="popover-1" style={{ anchorName: "--anchor-1" }}>
                          <div className="w-12 rounded-full">
                            <img src={authUser?.photoUrl} />
                          </div>
                        </button>
                      </div>
                      <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
                        <li><p>{authUser?.name}</p></li>
                        <li><Link
                          className="md:flex"
                          onClick={handleLogout}
                          to="/login"
                        >
                          <button
                            type="button"
                            className="text-white cursor-pointer bg-[#FF6D60] hover:bg-[#ff988f] focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-4 py-2 text-center"
                          >
                            Logout
                          </button>
                        </Link></li>
                      </ul>
                    </div>
                  

                }



              </div>
            }

            {/* Hamburger button */}
            <button
              onClick={handleHamburger}
              data-collapse-toggle="navbar-cta"
              type="button"
              className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm rounded-lg lg:hidden text-black "
              aria-controls="navbar-cta"
              aria-expanded="false"
            >
              <svg
                className="w-5 h-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 17 14"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 1h15M1 7h15M1 13h15"
                />
              </svg>
            </button>
          </div>

          {/* Middle Part */}
          <div
            className="navbar items-center justify-between hidden w-full lg:flex lg:w-auto lg:order-1"
            id="navbar-cta"
          >
            <ul className="menu menu-horizontal flex flex-col font-medium lg:p-0 border  rtl:space-x-reverse lg:flex-row lg:mt-0 lg:border-0 ">
              {links}
            </ul>
          </div>
        </div>

        {/* For Small device */}
        <div className={`lg:hidden fixed p-6 z-[99] duration-500 md:w-[50%] w-[70%] h-screen top-0 text-white bg-[#eee] shadow-2xl ${hamburger ? "right-0" : "right-[-350px]  md:right-[-700px]"}`}>
          <button onClick={handleHamburger} className="text-2xl">
            <IoMdClose className="text-black" />
          </button>
          <ul className="font-semibold space-y-3 mt-6 ">{links}</ul>

          {
            !authUser && <div className={`md:hidden flex gap-4 mt-6`}>
              <Link onClick={handleHamburger} to="/login">
                <button
                  type="button"
                  className="text-[#fff] bg-[#093FB4] hover:bg-[#093FB4] px-2 py-1 rounded-lg font-semibold"
                >
                  Sign In
                </button>
              </Link>

            </div>
          }
          {
            authUser && <div className={`md:hidden flex gap-4 mt-6`}>
              <Link
                onClick={() => {
                  handleHamburger();
                  handleLogout()
                }}
                to="/login"
              >
                <button
                  type="button"
                  className="text-[#111] bg-[#093FB4] hover:bg-[#093FB4] px-2 py-1 rounded-lg font-semibold"
                >
                  Logout
                </button>
              </Link>
            </div>
          }

        </div>

      </nav>
    </div>
  );
};

export default Navbar;
