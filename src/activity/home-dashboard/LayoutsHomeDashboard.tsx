import React, { useState } from "react";
import { Link, NavLink, Outlet } from "react-router-dom";
import Button from "../../components/Button";
import UserAvatar from "../../components/UserAvatar";
import { DashboardData } from "./DashboardData";

let renderCount = 0;

const LayoutsHomeDashboard = () => {
  console.log("Layout Home Dashboard");

  renderCount++;

  const [sidebarOpen, setSidebarOpen] = useState(true);
  // const onToggle = () => {
  //   setSidebarOpen(!sidebarOpen)
  //   console.log("URAAAA")
  // }

  const defaultSidebar =
    "hover:bg-neutral-50/10 active:bg-neutral-50/10 flex items-center w-full border-secondary-500 active:border-r-4 px-12 py-2";

  return (
    <>
      <p className="text-black">Render : {renderCount}</p>
      <div className="bg-primary-700 h-screen flex">
        {/*<div className="flex justify-between w-full px-10 py-8">*/}
        {/*  <div className="flex items-center">*/}
        {/*    <div className="block mr-8" >*/}
        {/*    </div>*/}
        {/*  </div>*/}
        {/*</div>*/}

        <nav
          className={`${
            sidebarOpen ? "w-[16rem]" : "w-0"
          } bg-primary-500 overflow-y-auto no-scrollbar min-h-screen rounded-r-lg top-0 bottom-0 duration-200`}
        >
          <h2 className="text-2xl font-bold font-sans">
            <Link to="/" className="inline-block w-full px-8 py-6">
              TEMU
            </Link>
          </h2>

          <hr className="border-neutral-50/50 mx-4" />
          <ul className="my-4">
            {DashboardData.map((item, index) => {
              return (
                <li key={index}>
                  {/*https://reactrouter.com/docs/en/v6/api#navlink*/}
                  <NavLink to={item.path} className="block">
                    {({ isActive }) =>
                      isActive ? (
                        <div className="bg-neutral-50/10 flex items-center w-full border-secondary-500 border-r-4 px-12 py-2">
                          <span className="text-secondary-200">{item.icon}</span>
                          <p className="text-sm font-bold text-secondary-500 ml-3">
                            {item.title}
                          </p>
                        </div>
                      ) : (
                        <div className="hover:bg-neutral-50/10 flex items-center w-full px-12 py-2">
                          {item.icon}
                          <p className="text-sm font-semibold ml-3">
                            {item.title}
                          </p>
                        </div>
                      )
                    }
                    {/*<p className="text-sm font-semibold active:font-bold active:text-secondary-500 ml-3">*/}
                    {/*  {item.title}*/}
                    {/*</p>*/}
                  </NavLink>
                </li>
              );
            })}
            <li key="preview" className="flex justify-center mt-4">
              <Button
                type="button"
                variant="primary"
                size="large"
                isCustom={true}
              >
                <span className="mr-1">[img]</span>
                Preview
              </Button>
            </li>
          </ul>
        </nav>
        <div
          className={`${
            sidebarOpen ? "w-[calc(100vw-16rem)]" : "w-full"
          } relative flex flex-col overflow-y-auto overflow-x-hidden`}
        >
          <nav className="flex justify-between w-full px-10 py-6">
            <div className="flex items-center">
              <div
                className="block mr-8"
                onClick={() => setSidebarOpen(!sidebarOpen)}
              >
                <button className="flex items-center text-white">
                  <svg
                    className="fill-current h-6"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <title>Menu</title>
                    <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
                  </svg>
                </button>
              </div>
              <h2 className="text-2xl font-bold mr-8">Tabtabtab</h2>
              <div className="flex items-center">
                <span className="mr-3">[img]</span>
                <p className="text-xl font-medium">Action</p>
              </div>
            </div>
            <div className="flex items-center">
              <span>[img]</span>
              <span className="ml-8">
                <UserAvatar />
              </span>
            </div>
          </nav>
          <div className="mx-10 pb-6 flex-1">
            <Outlet />
          </div>
        </div>
      </div>
    </>
  );
};

export default LayoutsHomeDashboard;
