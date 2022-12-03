import { Link } from "react-router-dom";
// import { ReactComponent as DeleteIcon } from "../assets/svg/deleteIcon.svg";
// import { ReactComponent as EditIcon } from "../assets/svg/editIcon.svg";
import sellCategoryImage from "../assets/jpg/sellCategoryImage.jpg";

import bedIcon from "../assets/svg/bedIcon.svg";
import bathtubIcon from "../assets/svg/bathtubIcon.svg";

function ListingItem() {
  return (
    <li className="categoryListing flex justify-between items-center mb-[1rem] relative">
      <Link to={`/category/`} className="categoryListingLink">
        <img
          src={sellCategoryImage}
          alt="img"
          className="w-[30%] h-[100px] object-cover rounded-2xl"
        />
        <div className="categoryListingDetails">
          <p className="categoryListingLocation"></p>
          <p className="categoryListingName"></p>
          <p className="categoryListingPrice">$</p>

          <div className="categoryListingInfoDiv">
            <img src={bedIcon} alt="bed" />
            <p className="categoryListingInfoText"></p>
            <img src={bathtubIcon} alt="bath" />
            <p className="categoryListingInfoText"></p>
          </div>
        </div>
      </Link>

      {/* <DeleteIcon className="removeIcon" fill="rgb(231, 76,60)" />

      <EditIcon className="editIcon" /> */}
    </li>
  );
}

export default ListingItem;
