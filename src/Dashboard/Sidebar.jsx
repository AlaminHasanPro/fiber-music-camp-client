import { Link, NavLink } from "react-router-dom";
import { useState } from "react";
import {
  MdOutlineDarkMode,
  MdOutlineClass,
  MdManageAccounts,
  MdOutlineManageHistory,
  MdPayments,
  MdAttachMoney,
} from "react-icons/md";
import { HiOutlineLightBulb } from "react-icons/hi";
import { BiBookAdd } from "react-icons/bi";
import { GrCheckboxSelected } from "react-icons/gr";

import useAuthorization from "../Hooks/useAuthorization";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLightbulb, faSun } from "@fortawesome/free-regular-svg-icons";

const Sidebar = () => {
  const { role } = useAuthorization();
  // const [isDark, setIsdark] = useState(null);
  const [theme, setTheme] = useState(false);
  const [navTheme, setNavTheme] = useState("light");

  const handleToggle = () => {
    const bodyElement = document.getElementsByTagName("body")[0];
    const currentTheme = bodyElement.getAttribute("data-theme");
    const newTheme = currentTheme === "light" ? "dark" : "light";
    setNavTheme(newTheme);
    bodyElement.setAttribute("data-theme", newTheme);
    setTheme(!theme);
  };

  return (
    <aside className="fixed top-0 bottom-0 h-screen p-10 shadow-2xl w-dashboard-md bg-neutral">
      <div className="flex items-center justify-center gap-3 mb-10">
        {/* to do */}
        <img className="w-10" src="" alt="" />
        <Link to="/">
          <h1 className="text-2xl font-bold text-white ">
            FiberMusic<span className="text-[#4c5696]">Camp</span>{" "}
          </h1>
        </Link>
      </div>
      <div className=" text-center text-white">
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
      <div className="flex items-center justify-center gap-3 text-white">
        <Link
          to={`/dashboard/${
            role === "admin"
              ? "manage-class"
              : role === "instructor"
              ? "add-class"
              : "my-select-class"
          }`}
          className="flex items-center gap-1 -ml-10"
        >
          <h3 className="text-2xl border-4 px-5 py-4 rounded-lg font-extrabold uppercase">{role}</h3>
        </Link>
      </div>
      <ul className="mt-[60px] text-white">
        {role === "admin" ? (
          <>
            <li className="mt-4 font-bold">
              <NavLink
                to="/dashboard/manage-class"
                className={({ isActive }) =>
                  isActive
                    ? "d-active flex gap-2 text-[16px] items-center  "
                    : " flex gap-2 text-[16px] items-center text-black uppercase"
                }
              >
                {" "}
                <MdOutlineManageHistory /> <span>Manage Classes</span>
              </NavLink>
            </li>
            <li className="mt-4 font-bold">
              <NavLink
                to="/dashboard/manage-users"
                className={({ isActive }) =>
                  isActive
                    ? "d-active flex gap-2 text-[16px] items-center "
                    : " flex gap-2 text-[16px] items-center text-black uppercase"
                }
              >
                {" "}
                <MdManageAccounts /> <span>Manage Users</span>
              </NavLink>
            </li>
          </>
        ) : role === "instructor" ? (
          <>
            <li className="mt-4 font-bold">
              <NavLink
                to="/dashboard/add-class"
                className={({ isActive }) =>
                  isActive
                    ? "d-active flex gap-2 text-[16px] items-center  "
                    : "text-black uppercase flex gap-2 text-[16px] items-center"
                }
              >
                {" "}
                <BiBookAdd /> <span>Add Class</span>
              </NavLink>
            </li>
            <li className="mt-4 font-bold">
              <NavLink
                to="/dashboard/my-class"
                className={({ isActive }) =>
                  isActive
                    ? "d-active flex gap-2 text-[16px] items-center  "
                    : "text-black uppercase flex gap-2 text-[16px] items-center"
                }
              >
                {" "}
                <MdOutlineClass /> <span>My Classes</span>
              </NavLink>
            </li>
          </>
        ) : (
          <>
            <li className="mt-4 font-bold">
              <NavLink
                to="/dashboard/payment-history"
                className={({ isActive }) =>
                  isActive
                    ? "d-active flex gap-2 text-[16px] items-center "
                    : "text-black uppercase flex gap-2 text-[16px] items-center"
                }
              >
                {" "}
                <MdPayments /> <span>Payment History</span>
              </NavLink>
            </li>
            <li className="mt-4 font-bold">
              <NavLink
                to="/dashboard/my-select-class"
                className={({ isActive }) =>
                  isActive
                    ? "d-active flex gap-2 text-[16px] items-center  "
                    : "text-black uppercase flex gap-2 text-[16px] items-center"
                }
              >
                {" "}
                <GrCheckboxSelected />
                <span>Selected Classes</span>
              </NavLink>
            </li>
            <li className="mt-4 font-bold">
              <NavLink
                to="/dashboard/my-enroll-class"
                className={({ isActive }) =>
                  isActive
                    ? "d-active flex gap-2 text-[16px] items-center "
                    : "text-black uppercase flex gap-2 text-[16px] items-center"
                }
              >
                {" "}
                <MdAttachMoney className="w-5 h-5" />{" "}
                <span>Enrolled Classes</span>
              </NavLink>
            </li>
          </>
        )}
      </ul>
    </aside>
  );
};

export default Sidebar;
