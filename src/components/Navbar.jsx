import React from "react";
import { ReactComponent as OfferIcon } from "../assets/svg/localOfferIcon.svg";
import { ReactComponent as ExploreIcon } from "../assets/svg/exploreIcon.svg";
import { ReactComponent as PersonIcon } from "../assets/svg/personOutlineIcon.svg";
// import { useNavigate } from "react-router-dom";

function Navbar() {
  // const navigate = useNavigate();

  return (
    <div className="fixed left-0 bottom-0 right-0 h-[80px] flex items-center z-50 bg-white font-[system-ui]">
      <nav className="w-full mt-[0.75rem] overflow-y-hidden">
        <ul className="flex items-center justify-around lg:justify-evenly">
          <a
            className="flex flex-col items-center cursor-pointer text-[#8f8f8f]"
            // onClick={() => navigate("/")}
            href="/"
          >
            <ExploreIcon fill={`#8f8f8f`} />
            <p>Explore</p>
          </a>
          <a
            className="flex flex-col items-center cursor-pointer text-[#8f8f8f]"
            // onClick={() => navigate("/Offers")}
            href="/offers"
          >
            <OfferIcon fill={`#8f8f8f`} />
            <p>Offers</p>
          </a>
          <a
            className="flex flex-col items-center cursor-pointer text-[#8f8f8f]"
            // onClick={() => navigate("/profile")}
            href="/profile"
          >
            <PersonIcon fill={`#8f8f8f`} />
            <p>Profile</p>
          </a>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
