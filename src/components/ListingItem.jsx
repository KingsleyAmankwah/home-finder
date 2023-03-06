import { Link } from "react-router-dom";
import { ReactComponent as DeleteIcon } from "../assets/svg/deleteIcon.svg";
import { ReactComponent as EditIcon } from "../assets/svg/editIcon.svg";
// import sellCategoryImage from "../assets/jpg/sellCategoryImage.jpg";

import bedIcon from "../assets/svg/bedIcon.svg";
import bathtubIcon from "../assets/svg/bathtubIcon.svg";

function ListingItem({ listing, id, onEdit, onDelete }) {
  return (
    <li className="categoryListing sm:flex justify-between items-center mb-[1rem] relative">
      <Link to={`/category/${listing.type}/${id}`} className="contents">
        <img
          src={listing.images[0]}
          alt={listing.name}
          className="sm:w-[30%] sm:h-[217px] w-full object-cover rounded-2xl"
        />
        <div className="w-full sm:w-[65%] mt-[1rem]">
          <p className="font-[600] opacity-[50] text-[0.7rem]">
            {listing.location}
          </p>
          <p className="font-bold text-2xl">{listing.name}</p>
          <p className="flex items-center font-bold text-3xl my-[0.5rem] text-[#00cc66]">
            Ghs 1505.00
          </p>

          <div className="flex justify-between w-full sm:max-w-[275px]">
            <img src={bedIcon} alt="bed" />
            <p className="font-light text-sm">
              {listing.bedrooms > 1
                ? `${listing.bedrooms} Bedrooms`
                : "1 Bedroom"}
            </p>
            <img src={bathtubIcon} alt="bath" />
            <p className="font-light text-sm">
              {listing.bathrooms > 1
                ? `${listing.bathrooms} Bathrooms`
                : "1 Bathroom"}
            </p>
          </div>
        </div>
      </Link>

      {onDelete && (
        <DeleteIcon
          className="removeIcon"
          fill="rgb(231, 76,60)"
          onClick={() => onDelete(listing.id, listing.name)}
        />
      )}

      {onEdit && <EditIcon className="editIcon" onClick={() => onEdit(id)} />}
    </li>
  );
}

export default ListingItem;
