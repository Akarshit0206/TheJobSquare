import logo from "../../assets/The Job.png";
import { NavLink } from "react-router";
import { CircleUser } from "lucide-react";

function Header() {
  return (
    <div className="w-full h-auto flex justify-center align-center">
      <div className="w-9/10 rounded-md m-4 shadow-zinc-300 shadow-md flex justify-between">
        <div className="flex">
          <div className="w-auto h-full">
            <NavLink to="/" className="h-full grid items-center">
              <img src={logo} alt="logo" className="w-[100px] md:w-[180px]" />
            </NavLink>
          </div>
          <div className=" h-full grid grid-cols-3 gap-3 items-center ml-7 font-light text-sm md:text-lg md:gap-7 md:ml-10">
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? "h-full text-center border-b-sky-600 border-b-3 grid items-center rounded-b-xs"
                  : "h-full grid items-center text-center hover:border-b-sky-600 hover:border-b-2"
              }
            >
              Jobs
            </NavLink>
            <NavLink
              to="/companies"
              className={({ isActive }) =>
                isActive
                  ? "h-full text-center border-b-sky-600 border-b-3 grid items-center rounded-b-xs -ml-5"
                  : "h-full grid items-center text-center hover:border-b-sky-600 hover:border-b-2 -ml-5"
              }
            >
              Companies
            </NavLink>
            <NavLink
              to="applicants"
              className={({ isActive }) =>
                isActive
                  ? "h-full text-center border-b-sky-600 border-b-3 grid items-center rounded-b-xs"
                  : "h-full grid items-center text-center hover:border-b-sky-600 hover:border-b-2"
              }
            >
              Favourates
            </NavLink>
          </div>
        </div>
        <div className=" grid-cols-3 gap-3 items-center hidden sm:hidden md:grid ml-15">
          <button className="text-center rounded-3xl h-3/5 w-auto bg-sky-600 text-white font-semibold px-4 hover:bg-white hover:border-sky-400 hover:border-2 hover:text-sky-500 hover:cursor-pointer">
            Login
          </button>
          <button className="rounded-3xl h-3/5 w-auto border-sky-600 border-2 text-blue-600 px-4 md:pr-12 lg:pr-4 font-semibold text-center hover:text-white hover:border-white hover:bg-sky-500 hover:cursor-pointer">
            SignUp
          </button>
          <CircleUser
            size={50}
            color="#37b8d2"
            strokeWidth={1.5}
            className="hover:cursor-pointer"
          />
        </div>
      </div>
    </div>
  );
}
export default Header;
