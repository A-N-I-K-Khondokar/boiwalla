// import React from 'react';

import { Link } from "react-router";

const Header = () => {
  const links = (
    <>
      <li className="m-2 border p-2 rounded-sm hover:bg-gray-300">
        <Link to='/'>Home</Link>
      </li>
      <li className="m-2 border p-2 rounded-sm hover:bg-gray-300">
        <Link to="/about">About</Link>
      </li>
      <li className="m-2 border p-2 rounded-sm hover:bg-gray-300">
        <Link to="/readlist">ReadList</Link>
      </li>
      <li className="m-2 border p-2 rounded-sm hover:bg-gray-300">
        <Link to="/wishlist">WishList</Link>
      </li>
    </>
  );
  return (
    <div className="navbar bg-base-100 shadow-sm max-w-312.5 mx-auto">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex="-1"
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            {links}
          </ul>
        </div>
        <a className="btn btn-ghost font-bold text-2xl">boiPoka</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{links}</ul>
      </div>
      <div className="navbar-end ">
        <a className="btn mx-4 btn-primary">Sign In</a>
        <a className="btn btn-success">Sign Up</a>
      </div>
    </div>
  );
};

export default Header;
