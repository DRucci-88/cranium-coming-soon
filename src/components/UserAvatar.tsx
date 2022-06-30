import {useState, useEffect, useRef} from "react";
import {NavLink} from "react-router-dom";
import axios from 'axios';
import {useNavigate} from "react-router-dom";
import {PortsService} from "../config/Ports";


const UserAvatar = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const ref = useRef<HTMLDivElement | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const onBodyClick = (event: Event) => {
      if (ref.current && ref.current.contains(event.target as Node)) {
        return;
      }
      setDropdownOpen(false);
    };
    document.body.addEventListener("click", onBodyClick, {capture: true});

    return () => {
      document.body.removeEventListener("click", onBodyClick, {
        capture: true,
      });
    };
  }, []);

  const logout = () => {
    console.log('Logout');
    axios.delete(`${PortsService.public}/auth/logout`)
      .then(res => {
        console.log(res.data);
      })
      .catch(err => {
        console.log(err.message);
      })
  }

  return (
    <>
      <div ref={ref} className="relative">
        <img
          src="/images/jpeg/img-avatar.png"
          alt="[Username]"
          width="48"
          height="48"
          className="flex items-center border-2 border-secondary-500 rounded-full green-shadow overflow-hidden cursor-pointer"
          onClick={() => setDropdownOpen(!dropdownOpen)}
        />
        <div
          className={`${
            dropdownOpen ? "opacity-100" : "h-0 overflow-hidden opacity-0"
          } absolute flex flex-col w-48 bg-primary-500 rounded-lg shadow-md mt-6 right-0 z-10 transition-all duration-100`}
        >
          <NavLink to="/home-dashboard" className="h-full">
            {({isActive}) =>
              isActive ? (
                <div className="bg-primary-800/25 p-4">
                  <p className="font-semibold">My Dashboard</p>
                </div>
              ) : (
                <div className="hover:bg-primary-800/25 p-4">
                  <p>My Dashboard</p>
                </div>
              )
            }
          </NavLink>
          <hr className="border border-neutral-500/50 mx-4"/>
          <NavLink onClick={logout} to={'#'} className="inline-block h-full hover:bg-primary-800/25 p-4">
            <p>Sign Out</p>
          </NavLink>
        </div>
      </div>
    </>
  );
};

export default UserAvatar;
