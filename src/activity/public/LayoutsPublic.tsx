import {Outlet} from "react-router-dom";
import {Link} from "react-router-dom";
import UserAvatar from "../../components/UserAvatar";
import React, {useRef} from "react";
import { useAuth } from "../../context/AuthContext";
import Button from "../../components/Button";


const LayoutsPublic = () => {
  const ref = useRef<HTMLDivElement | null>(null);
  const navToggle = () => {
    ref.current?.classList.toggle('hidden');
  }

  const userAuth = useAuth()

  return (
    <>
      {/*<h1>Ini adalah Layout</h1>*/}
      <nav className="bg-primary-500">
        <div
          className="max-w-screen-2xl flex items-center justify-between flex-wrap px-8 sm:px-10 py-4 mx-auto z-10 top-0">
          <Link to="/" className="text-xl sm:text-2xl font-bold text-neutral-50">
            TEMU
          </Link>

          <div className="block sm:hidden">
            <button onClick={navToggle}
              className="flex items-center text-white">
              <svg className="fill-current h-5" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <title>Menu</title>
                <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/>
              </svg>
            </button>
          </div>

          {/* Navbar */}

          <div className="w-full hidden sm:flex sm:items-center sm:w-auto" ref={ref}>
            <ul className="flex flex-col sm:flex-row sm:justify-end items-end sm:items-center flex-1">
              <li className="font-semibold">
                <a href="#services"
                   className="inline-block py-2 sm:py-0 text-base md:text-lg text-neutral-50 no-underline hover:text-secondary-500 transition">
                  Services
                </a>
              </li>
              <li className="ml-0 sm:ml-6 font-semibold">
                <a href="#live"
                   className="inline-block py-2 sm:py-0 text-base md:text-lg text-neutral-50 no-underline hover:text-secondary-500 transition">
                  Experience Live
                </a>
              </li>
              <li className="ml-0 sm:ml-6 font-semibold">
                <a href="#contact"
                   className="inline-block py-2 sm:py-0 text-base lg:text-lg text-neutral-50 no-underline hover:text-secondary-500 transition">
                  Contact Us
                </a>
              </li>
              {userAuth.userAuth !== null ? (
                <li className="mt-2 sm:mt-0 ml-0 sm:ml-6">
                  <UserAvatar/>
                </li>
              ) : (
                <li className="mt-2 sm:mt-0 ml-0 sm:ml-6">
                  <Button href="/signin" type="button" variant="secondary" size="medium" isCustom={true}>Sign In</Button>
                </li>
              )}
            </ul>
          </div>
        </div>
      </nav>

      <Outlet/>

      <div className="bg-primary-900">
        <div className="max-w-screen-2xl flex flex-col md:flex-row justify-between p-16 sm:p-24 md:p-32 mx-auto">
          <div>
            <h2 className="font-sans font-bold text-2xl">TEMU</h2>
            <p className="text-sm mt-4">© 2022. ALL RIGHTS RESERVED</p>
            <a href="#" className="inline-block text-sm mt-4 hover:text-secondary-500">Privacy — Terms</a>
          </div>
          <div className="flex mt-12 sm:mt-20 md:mt-0">
            <div className="mr-20">
              <p className="text-sm font-bold">Contacts</p>
              <div className="flex flex-col">
                <a href="#" className="text-sm mt-4 hover:text-secondary-500">Phone Number</a>
                <a href="#" className="text-sm mt-4 hover:text-secondary-500">Email</a>
              </div>
            </div>
            <div>
              <p className="text-sm font-bold">Company</p>
              <div className="flex flex-col">
                <a href="#" className="text-sm mt-4 hover:text-secondary-500">Company</a>
                <a href="#" className="text-sm mt-4 hover:text-secondary-500">Company</a>
                <a href="#" className="text-sm mt-4 hover:text-secondary-500">Company</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  ); 
  };
export default LayoutsPublic;
