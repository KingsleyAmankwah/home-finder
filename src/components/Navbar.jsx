import React from "react";
import { ReactComponent as OfferIcon } from "../assets/svg/localOfferIcon.svg";
import { ReactComponent as ExploreIcon } from "../assets/svg/exploreIcon.svg";
import { ReactComponent as PersonIcon } from "../assets/svg/personOutlineIcon.svg";
import { useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();
  return (
    <div className="fixed left-0 bottom-0 right-0 h-[80px] flex items-center z-50 bg-slate-200 font-[system-ui]">
      <nav className="w-full mt-[0.75rem] overflow-y-hidden">
        <ul className="flex items-center justify-around lg:justify-evenly">
          <li
            className="flex flex-col items-center cursor-pointer"
            onClick={() => navigate("/")}
          >
            <ExploreIcon />
            <p>Explore</p>
          </li>
          <li
            className="flex flex-col items-center cursor-pointer"
            onClick={() => navigate("/Offers")}
          >
            <OfferIcon />
            <p>Offers</p>
          </li>
          <li
            className="flex flex-col items-center cursor-pointer"
            onClick={() => navigate("/sign-in")}
          >
            <PersonIcon />
            <p>Profile</p>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
