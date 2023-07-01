import React from "react";
import { Link, NavLink } from "react-router-dom";

// importing icons
import { SiShopware } from "react-icons/si";
import { MdOutlineCancel } from "react-icons/md";
import { TooltipComponent } from "@syncfusion/ej2-react-popups";

import { links } from "../data/dummy";
import { useStateContext } from "../contexts/ContextProvider";

const Sidebar = () => {
  const { activeMenu, setActiveMenu, screenSize } = useStateContext();

  const handleCloseSideBar = () => {
    if (activeMenu && screenSize <= 900) {
      setActiveMenu(false);
    }
  };

  // DRY CODE for the link styling (active and non-active)
  const activeLink =
    "flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg text-white text-md m-2";
  const normalLink =
    "flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg text-md text-gray-700 dark:text-gray-200 dark:hover:text-black hover:bg-light-gray m-2 ";

  return (
    <div className="ml-3 h-screen md:overflow-hidden overflow-auto md:hover:overflow-auto pb-10">
      {activeMenu && (
        <>
          <div className="flex justify-between items-center">
            {/* MAIN LOGO LINK AT TOP */}
            <Link
              to="/"
              onClick={handleCloseSideBar}
              className="items-center gap-3 mt-4 ml-3 flex text-3xl font-extrabold tracking-tight dark:text-white text-slate-900"
            >
              <SiShopware /> <span>Shoppy</span>
            </Link>
            {/* CLOSE SIDEBAR ICON */}
            <TooltipComponent content="Menu" postion="BottomCenter">
              <button
                type="button"
                onClick={() => setActiveMenu((prevActiveMenu) => !activeMenu)}
                className="text-xl p-3 me-2 rounded-full hover:bg-light-gray mt-4 block md:hidden"
              >
                <MdOutlineCancel />
              </button>
            </TooltipComponent>
          </div>
          {/* LIST OF SIDEBAR LINKS */}
          <div className="mt-10">
            {/* for every item in the link list, we are looping through and creating a new link */}
            {links.map((item) => (
              <div key={item.title}>
                {/* ITEM parent TITLE */}
                <p className="text-gray-400 m-3 mt-4 uppercase">{item.title}</p>
                {/* ITEM LINK AND NAME */}
                {/* we are creating a loop that will go through each item name under each title */}
                {item.links.map((link) => (
                  <NavLink
                    to={`/${link.name}`}
                    key={link.name}
                    // here, adding the hadleCloseSideBar closes the sidemenu when user is using a smaller device
                    // whereas, on desktop, the sidemenu stays open when links are clicked
                    onClick={handleCloseSideBar}
                    // here, we are setting the if/else statement (in the className) to initiate the styling when user is hovering over link
                    className={({ isActive }) =>
                      isActive ? activeLink : normalLink
                    }
                  >
                    {link.icon}
                    <span className="capitalize">{link.name}</span>
                  </NavLink>
                ))}
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default Sidebar;
