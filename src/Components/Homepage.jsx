import React from "react";
import { MdAddCall } from "react-icons/md";

const Homepage = () => {
  return (
    <div className="navbar bg-base-100 fixed">
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
            className="menu menu-sm dropdown-content bg-blue-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              Menu
              <a></a>
              <ul className="p-2">
                <li>
                  <a>All</a>
                </li>
                <li>
                  <a>Pizza</a>
                </li>
                <li>
                  <a>Pasta</a>
                </li>
              </ul>
            </li>
            <li>
              <a>Item 3</a>
            </li>
          </ul>
        </div>
        <a>
          <img
            className="btn btn-ghost text-xl"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbJIduKM84wazyeqim1uSh4kYaBNttyBRwSQ&s"
            alt="fdimage"
          />
        </a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <details>
              <summary>Menu</summary>
              <ul className="p-2">
                <li>
                  <a>All</a>
                </li>
                <li>
                  <a>Pasta</a>
                </li>
                <li>
                  <a>Pizza</a>
                </li>
              </ul>
            </details>
          </li>
          <li>
            <details>
              <summary>Services</summary>
              <ul className="p-2">
                <li>
                  <a>Online Order</a>
                </li>
                <li>
                  <a>Dine In</a>
                </li>
                <li>
                  <a>Order Tracker</a>
                </li>
              </ul>
            </details>
          </li>
          <li>
            <a>Offers</a>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        {/* search item */}
        <div>
          <button className="btn btn-ghost  bg-blue-800 rounded-full px-6 text-white flex items-center mr-5">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </button>
        </div>
        {/* cart items */}
        <div
          tabIndex={0}
          role="button"
          className="btn btn-ghost  bg-blue-800 rounded-full px-6 text-white flex items-center mr-5 "
        >
          <div className="indicator">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
              />
            </svg>
            <span className="badge badge-sm indicator-item">8</span>
          </div>
        </div>

        <a className="btn bg-blue-800 rounded-full px-6 text-white flex items-center gap-5">
          <MdAddCall />
        </a>
      </div>
    </div>
  );
};

export default Homepage;
