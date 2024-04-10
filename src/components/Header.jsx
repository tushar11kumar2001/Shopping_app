import React, { useEffect} from 'react'
import { useCartContext } from "../utils/context";
import { NavLink } from "react-router-dom";
import {useDispatch} from 'react-redux';
import { getProductThunk } from '../redux/productSlice';
const Header = () => {
  const cartContext = useCartContext();
  const dispatch = useDispatch();
  useEffect(()=>{
    dispatch(getProductThunk())
   },[])
  return (
    <nav className="bg-white border-gray-200 dark:bg-gray-900 fixed w-full z-10">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <div
          
          className="flex items-center space-x-3 rtl:space-x-reverse"
        >
          <img
            src="https://images.rawpixel.com/image_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIyLTExL2pvYjE0MjgtZWxlbWVudC0xMDctdi5qcGc.jpg"
            className="h-8"
            alt="Flowbite Logo"
          />
          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
            Sherwal_ji
          </span>
        </div>
        <button
          data-collapse-toggle="navbar-default"
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="navbar-default"
          aria-expanded="false"
        >
          <span className="sr-only">Open main menu</span>
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
        <div className="hidden w-full md:block md:w-auto" id="navbar-default">
          <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
              <li>
              <NavLink to = "/"
                style={({isActive})=>isActive?{color:"blue"}:{color:"black"}}
                className="block py-2 px-3 cursor-pointer  rounded md:bg-transparent  md:p-0 dark:text-white "
                aria-current="page"
              >
                Home
              </NavLink>
              </li>
            <li>
            <NavLink to = "/shoes"
                style={({isActive})=>isActive?{color:"blue"}:{color:"black"}}
                className="block py-2 px-3 cursor-pointer  rounded md:bg-transparent  md:p-0 dark:text-white "
                aria-current="page"
              >
                Shoes
              </NavLink>
            </li>
            <li>
            <NavLink to = "/shirts"
                style={({isActive})=>isActive?{color:"blue"}:{color:"black"}}
                className="block py-2 px-3 cursor-pointer  rounded md:bg-transparent  md:p-0 dark:text-white "
                aria-current="page"
              >
                Shirts
              </NavLink>
            </li>
            <li>
            <NavLink to = "/caps"
                style={({isActive})=>isActive?{color:"blue"}:{color:"black"}}
                className="block py-2 px-3 cursor-pointer  rounded md:bg-transparent  md:p-0 dark:text-white "
                aria-current="page"
              >
                Caps
              </NavLink>
            </li>
            <li>
            <NavLink 
            to="/cart"
            style={({isActive})=>isActive?{color:"blue"}:{color:"black"}}
            className="relative pr-5 cursor-pointer"
           
            >
              <i className="fa-sharp fa-solid fa-cart-shopping text-xl absolute"></i>
              <span className="absolute left-3 top-[-5px] text-white bg-[red] w-1  rounded-full px-2 pr-3 text-xs text-center">
                {cartContext?.cartItems.length?cartContext?.cartItems.length:null}
              </span>
            </NavLink>
            </li>
            <li>
              <button
                type="button"
                className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
              >
                Logout
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
