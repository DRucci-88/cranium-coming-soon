import React from "react";
import { NavLink } from "react-router-dom";
import Attendance from "../../components/Attendance";

const AttendanceForm = () => {
  return (
    <>
      <div className="bg-primary-700 min-h-screen">
        {/* <!-- Main content --> */}
        <div className="flex-1 bg-primary-700">
          <div className="mx-0 p-8 font-bold text-white">Event Name</div>

          <section>
            <div className="text-2xl w-full flex-grow lg:flex lg:items-center lg:w-auto hidden py-6">
              <ul className="lg:flex ml-20">
                <li className="mr-6">
                  <a
                    href=""
                    className="text-white inline-block py-2 px-2  no-underline hover:text-blue-300"
                  >
                    Attendance
                  </a>
                </li>
                <li className="mx-6">
                  <a
                    href=""
                    className="text-white inline-block py-2 px-2  no-underline hover:text-blue-300"
                  >
                    Team
                  </a>
                </li>
                <li className="mx-6">
                  <a
                    href=""
                    className="text-white inline-block py-2 px-2  no-underline hover:text-blue-300"
                  >
                    Speakers
                  </a>
                </li>
              </ul>
            </div>
          </section>
        </div>

        {/* <!-- Baris sub Judul --> */}
        <div className="mx-10 bg-primary-700">
          <div className="flex text-1xl my-2">
            <ul className="flex">
              <li className="mx-0">
                <div className="flex flex-row w-1/5">
                  <div className="flex flex-row mx-10 ml-28">
                    <a
                      href=""
                      className="text-white inline-block py-2 px-2 mx-16 my-auto no-underline hover:text-blue-300"
                    >
                      Name
                    </a>
                  </div>
                </div>
              </li>
              <li className="ml-14">
                <a
                  href=""
                  className="text-white inline-block py-2 px-2  no-underline hover:text-blue-300"
                >
                  Tier
                </a>
              </li>
              <li className="ml-32 mx-10 ">
                <a
                  href=""
                  className="text-white inline-block py-2 px-2  no-underline hover:text-blue-300"
                >
                  Role
                </a>
              </li>
            </ul>
          </div>
          <hr className="w-9/12 justify-center items-center" />
          <Attendance></Attendance>
          <Attendance></Attendance>
          <Attendance></Attendance>
          <Attendance></Attendance>
          <Attendance></Attendance>
        </div>
      </div>
    </>
  );
};

export default AttendanceForm;
