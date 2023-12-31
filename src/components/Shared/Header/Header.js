import React from "react";
import { Link } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import header_icon from "../../../images/Icon/hicon.png";
import cart_icon from "../../../images/Icon/Group.png";
import './Header.css';

const Header = () => {
  const { user, logOut } = useAuth();
  return (
    <header className="text-gray-900">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <Link
          to="/"
          className="flex title-font font-bold items-center text-blue-900 mb-4 md:mb-0"
        >
          <img width="60px" src={header_icon} alt="" />
          <span className="ml-3 text-2xl text-black">OUR</span>
          <span className="ml-3 text-2xl text-yellow-500">CAMPUS</span>
        </Link>
        <ul className="md:ml-auto md:mr-auto flex flex-wrap items-center justify-center">
          <li>
            <Link to="/home" className="mr-5 nav-item hover:text-red-500">
              HOMEPAGE
            </Link>
          </li>
          <li>
            <Link to="/courses" className="mr-5 nav-item hover:text-red-500">
              COURSES
            </Link>
          </li>
          {user?.email && (
            <li>
              <Link to="/dashboard" className="mr-5 nav-item hover:text-red-500">
                DASHBOARD
              </Link>
            </li>
          )}
          <li>
            <Link to="/about" className="mr-5 nav-item hover:text-red-500">
              ABOUT
            </Link>
          </li>
          <li>
            <Link to="/contact" className="mr-5 nav-item hover:text-red-500">
              CONTACT
            </Link>
          </li>
        </ul>

        <div>
          <img width="30px" src={cart_icon} alt="" />
        </div>
        {!user?.email ? (
          <Link to="/login">
            <button className="inline-flex text-gray-50 items-center bg-black border-0 py-2 px-8 focus:outline-none hover:bg-yellow-400 hover:text-black mt-4 md:mt-0 lg:ml-4">
              LOGIN
            </button>
          </Link>
        ) : (
          <>
            <p className="text-blue-900 font-bold lg:ml-4">
              {user?.displayName}
            </p>
            <img
              src={
                user?.photoURL
                  ? user.photoURL
                  : "https://img.icons8.com/external-kiranshastry-lineal-kiranshastry/2x/external-user-interface-kiranshastry-lineal-kiranshastry.png"
              }
              className="w-12 h-12 lg:mx-2 rounded-full border-2 border-red-500"
              alt=""
            />
            <button
              onClick={logOut}
              className="inline-flex text-gray-50 items-center bg-black border-0 py-2 px-8 focus:outline-none hover:bg-yellow-400 hover:text-black mt-4 md:mt-0"
            >
              LOG OUT
            </button>
          </>
        )}
      </div>
    </header>
  );
};

export default Header;
