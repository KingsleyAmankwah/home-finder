import { Link } from "react-router-dom";
import { ReactComponent as DeleteIcon } from "../assets/svg/deleteIcon.svg";
import { ReactComponent as EditIcon } from "../assets/svg/editIcon.svg";
// import sellCategoryImage from "../assets/jpg/sellCategoryImage.jpg";

import bedIcon from "../assets/svg/bedIcon.svg";
import bathtubIcon from "../assets/svg/bathtubIcon.svg";

function ListingItem({ listing, id, onEdit, onDelete }) {
  return (
    <li className="categoryListing flex flex-col sm:flex-row justify-between items-center mb-[1rem] relative">
      <Link to={`/category/${listing.type}/${id}`} className="contents">
        <img
          src={listing.images[0]}
          alt={listing.name}
          className="lg:w-[19%] lg:h-[217px] w-full h-[200px] object-cover rounded-3xl"
        />
        <div className="w-full lg:w-[79%] lg:mt-[1rem] sm:pl-4">
          <p className="font-[600] opacity-[50] text-[0.7rem]">
            {listing.address}
          </p>
          <p className="font-bold lg:text-2xl">{listing.name}</p>
          <p className="flex items-center font-bold lg:text-3xl lg:my-[0.5rem] text-[#00cc66]">
            Ghs 1505.00
          </p>

          <div className="flex justify-between max-w-xs">
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

      <div className="flex">
        {onDelete && (
          <DeleteIcon
            className="removeIcon text-sm"
            fill="rgb(231, 76,60)"
            onClick={() => onDelete(listing.id, listing.name)}
          />
        )}

        {onEdit && (
          <EditIcon className="editIcon text-sm" onClick={() => onEdit(id)} />
        )}
      </div>
    </li>
  );
}

export default ListingItem;
