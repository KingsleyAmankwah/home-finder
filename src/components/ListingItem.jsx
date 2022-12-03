import { Link } from "react-router-dom";
// import { ReactComponent as DeleteIcon } from "../assets/svg/deleteIcon.svg";
// import { ReactComponent as EditIcon } from "../assets/svg/editIcon.svg";
import sellCategoryImage from "../assets/jpg/sellCategoryImage.jpg";

import bedIcon from "../assets/svg/bedIcon.svg";
import bathtubIcon from "../assets/svg/bathtubIcon.svg";

function ListingItem() {
  return (
    <li className="categoryListing flex justify-between items-center mb-[1rem] relative">
      <Link to={`/category/`} className="categoryListingLink contents">
        <img
          src={sellCategoryImage}
          alt="img"
          className="w-[30%] h-[217px] object-cover rounded-2xl"
        />
        <div className="categoryListingDetails w-[65%]">
          <p className="font-[600] opacity-[50] text-[0.7rem]">
            Abuakwa Tanoso
          </p>
          <p className="categoryListingName font-bold text-2xl">Best Suite </p>
          <p className="flex items-center font-bold text-lg my-[0.5rem] text-[#00cc66]">
            $145
          </p>

          <div className="categoryListingInfoDiv flex justify-between max-w-[275px]">
            <img src={bedIcon} alt="bed" />
            <p className="font-light text-sm"> 5 bedrooms</p>
            <img src={bathtubIcon} alt="bath" />
            <p className="font-light text-sm"> 8 bathubs</p>
          </div>
        </div>
      </Link>

      {/* <DeleteIcon className="removeIcon" fill="rgb(231, 76,60)" />

      <EditIcon className="editIcon" /> */}
    </li>
  );
}

export default ListingItem;
