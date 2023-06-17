import { faLightbulb, faSun } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";

const NavigationBar = () => {
  const { user, logout } = useContext(AuthContext);
  const [theme, setTheme] = useState(false);
  const [navTheme, setNavTheme] = useState("light");
  const handleLogout = () => {
    logout()
      .then(() => {})
      .catch(() => {});
  };
  const navOptions = (
    <>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/instructors">Instructors</Link>
      </li>
      <li>
        <Link to="/classes">Classes</Link>
      </li>
      <li>
        <Link to="/dashboard">Dashboard</Link>
      </li>

      {user ? (
        <>
          <button onClick={handleLogout} className="btn btn-ghost">
            Log Out
          </button>
        </>
      ) : (
        <>
          <li>
            <Link to="/login">Login</Link>
          </li>
        </>
      )}
    </>
  );

  useEffect(() => {
    window.addEventListener("load", handleToggle);
    return () => {
      window.removeEventListener("load", handleToggle);
    };
  }, []);
  const handleToggle = () => {
    const bodyElement = document.getElementsByTagName("body")[0];
    const currentTheme = bodyElement.getAttribute("data-theme");
    const newTheme = currentTheme === "light" ? "dark" : "light";
    setNavTheme(newTheme);
    bodyElement.setAttribute("data-theme", newTheme);
    setTheme(!theme);
  };
  return (
    <div
      className={`${
        navTheme === "light" ? "bg-[#ffffffd3]" : "bg-[#5e5e5ed3]"
      }`}
    >
      <div className="navbar fixed z-10  bg-slate-950 bg-opacity-20 text-white ">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
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
            </label>
            <ul
              tabIndex={0}
              className="text-black menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              {navOptions}
            </ul>
          </div>
          <Link to='/' className="btn btn-ghost normal-case text-3xl font-bold ">
            <span>
              <span className="font-thin ">Fiber</span>
              <span className="text-green-400">Music </span>
              <span className="font-thin">Camp</span>
            </span>{" "}
          </Link>
        </div>
        <div className="navbar-end hidden lg:flex">
          <ul className="menu menu-horizontal px-1 text-lg ">{navOptions}</ul>
        </div>
        {user?.photoURL && (
          <>
            <div className="dropdown dropdown-end ms-3">
              <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                <div className="w-10 rounded-full">
                  <img
                    title={`${user?.displayName ? user?.displayName : ""}`}
                    className="hidden md:block"
                    src={user?.photoURL}
                    alt={user?.displayName}
                  />
                </div>
              </label>
              <ul
                tabIndex={0}
                className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
              >
                <li>
                  <Link to="/profile" className="justify-between">
                    Profile
                    <span className="badge">New</span>
                  </Link>
                </li>
              </ul>
            </div>
          </>
        )}
        <div className="ms-3">
          {theme ? (
            <FontAwesomeIcon
              onClick={handleToggle}
              className="text-2xl cursor-pointer"
              icon={faLightbulb}
            ></FontAwesomeIcon>
          ) : (
            <FontAwesomeIcon
              onClick={handleToggle}
              className="text-2xl cursor-pointer"
              icon={faSun}
            ></FontAwesomeIcon>
          )}
        </div>
      </div>
    </div>
  );
};

export default NavigationBar;
