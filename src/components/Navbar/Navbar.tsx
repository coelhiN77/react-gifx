import { MdLightMode, MdDarkMode } from "react-icons/md";
import { useState } from "react";
import { ImExit } from "react-icons/im";
import { Link } from "react-router-dom";
import user from "../Image/Avatars/user.png";
import logo from "../Image/logo.png";

//Props
interface NavbarProps {
  darkMode: boolean;
  onDarkModeToggle: () => void;
}

const Navbar = ({ darkMode, onDarkModeToggle }: NavbarProps) => {
  const [status, setStatus] = useState("online");
  const avatar = localStorage.getItem("avatar");
  const name = localStorage.getItem("name");

  //User Status
  const handleStatusChange = () => {
    setStatus(status === "online" ? "busy" : "online");
  };

  return (
    <div className={`fixed left-0 top-0 z-20 h-16 w-full pointer-events-auto ${darkMode ? "bg-zinc-800" : "bg-white"} ${darkMode ? "" : "border-b-2 border-zinc-400"}`}>
      <div className="container flex mx-auto h-full px-24 items-center justify-between">
        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-waves bg-cover text-green-500 shadow-md transition-shadow duration-200 hover:border hover:shadow-[0_0_20px_0] ">
          <a href="/home">
            <img src={logo} alt="logoPhoto" />
          </a>
        </div>

        <div className="flex gap-1 items-center">
          <div className={`rounded-full h-3 w-3 mt-7 ${status === "online" ? "bg-green-500" : "bg-red-500"}`} onClick={handleStatusChange}></div>
          {avatar ? (
            <img src={avatar} alt="avatarPhoto" className={`h-9 w-9 rounded-full mr-2 ${darkMode ? "" : "border border-green-500"}`} />
          ) : (
            <img src={user} alt="UserPhoto" className={`h-9 w-9 rounded-full mr-2 ${darkMode ? "" : "border border-green-500"}`} />
          )}
          <div className="flex flex-col justify-center">
            <span className={`text-sm ${darkMode ? "text-gray-200" : "text-black"} font-bold`}>{name}</span>
            <div className={`h-1 w-full mt-1 rounded-t-md ${status === "online" ? "bg-green-500" : "bg-red-500"}`}></div>
          </div>

          <div className="text-green-500 text-3xl ml-7 mt-2">
            <button onClick={onDarkModeToggle}>{darkMode ? <MdLightMode /> : <MdDarkMode />}</button>
          </div>

          <div className="text-green-500 text-2xl ml-5">
            <Link to="/">
              <ImExit />
            </Link>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Navbar;