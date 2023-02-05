import React from "react";
import { FaFacebookSquare } from 'react-icons/fa';
import { FaInstagramSquare } from 'react-icons/fa';
import { FaTwitterSquare } from 'react-icons/fa';
import { FaPinterestSquare } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';
import { FaYoutubeSquare } from 'react-icons/fa'
import { NavLink } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logoutAction } from "../slices/authSlice";

const Navbar = () => {
  const isAuthenticated = useSelector((state) => state?.auth?.isAuthenticated);
  const dispatch = useDispatch();

  const logout = () => {
    dispatch(logoutAction());
  }
  return (
    <>
      <header className="text-[#D2AC47] body-font bg-[#FFFFF4] border-b-2 border-[#D2AC47] fixed w-full z-10">
        <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <NavLink
            to="/"
            className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0"
          >
            <div className="flex bg-[#FFFFF4] p-2 rounded-lg">
              <img
                className="w-12 h-12 "
                src="./images/logo/logo.png"
                alt="logo"
              />
              <img
                className="w-32 h-12"
                src="./images/logo/logo-text.png"
                alt="logo"
              />
            </div>
          </NavLink>

          <nav class="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
            <NavLink
              to="/"
              className="mr-5 hover:text-gray-900 cursor-pointer font-medium tracking-widest uppercase text-lg"
            >
              Home
            </NavLink>
            <NavLink
              to="/shop"
              className="mr-5 hover:text-gray-900 cursor-pointer font-medium tracking-widest uppercase text-lg"
            >
              Shop
            </NavLink>
            <NavLink
              to="/about"
              className="mr-5 hover:text-gray-900 cursor-pointer font-medium tracking-widest uppercase text-lg"
            >
              About
            </NavLink>
            <NavLink
              to="/enquire"
              className="mr-5 hover:text-gray-900 cursor-pointer font-medium tracking-widest uppercase text-lg"
            >
              Enquire
            </NavLink>
            <NavLink
              to="/contact"
              className="mr-5 hover:text-gray-900 cursor-pointer font-medium tracking-widest uppercase text-lg"
            >
              Contact
            </NavLink>
            {isAuthenticated ?
              <button
                onClick={logout}
                className="mr-5 hover:text-gray-900 cursor-pointer font-medium tracking-widest uppercase text-lg">
                Logout
              </button> :
              <NavLink
                to="/login"
                className="mr-5 hover:text-gray-900 cursor-pointer font-medium tracking-widest uppercase text-lg"
              >
                Login
              </NavLink>

            }
          </nav>
          <div>
            <div className="flex list-none justify-between items-center mt-4 sm:mt-0">
              <li className="mx-2">
                <a href="https://www.facebook.com/venusjewellersgold" target="_blank" rel="noreferrer" className="text-[29px] text-[#D2AC47] cursor-pointer hover:text-gray-500"><FaFacebookSquare /> </a>
              </li>
              <li className="mx-2">
                <a href="https://www.instagram.com/venusjewellersonline/" target="_blank" rel="noreferrer" className="text-[29px] text-[#D2AC47] cursor-pointer hover:text-gray-500"><FaInstagramSquare /></a>
              </li>
              <li className="mx-2">
                <a
                  href="https://twitter.com/venus_jewellers"
                  target="_blank"
                  rel="noreferrer"
                  className="text-[29px] text-[#D2AC47] cursor-pointer hover:text-gray-500"
                >
                  <FaTwitterSquare />
                </a>
              </li>
              <li className="mx-2">
                <a
                  href="https://in.pinterest.com/venusdigitalteam/"
                  target="_blank"
                  rel="noreferrer"
                  className="text-[29px] text-[#D2AC47] cursor-pointer hover:text-gray-500"
                >
                  <FaPinterestSquare />
                </a>
              </li>
              <li className="mx-2">
                <a
                  href="https://www.linkedin.com/in/venus-jewellers-online-aa8385250/"
                  target="_blank"
                  rel="noreferrer"
                  className="text-[29px] text-[#D2AC47] cursor-pointer hover:text-gray-500"
                >
                  <FaLinkedin />
                </a>
              </li>
              <li className="mx-2">
                <a href="https://www.youtube.com/shorts/j4fr2HcFNio" target="_blank" rel="noreferrer" className="text-[29px] text-[#D2AC47] cursor-pointer hover:text-gray-500"><FaYoutubeSquare /></a>
              </li>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Navbar;
