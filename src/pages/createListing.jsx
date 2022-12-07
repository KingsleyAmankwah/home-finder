import { useState } from "react";
import "../App.css";
import Spinner from "../components/Spinner";

function CreateListing() {
  const [loading, setLoading] = useState(false);
  const [geolocationEnabled, setGeolocationEnabled] = useState(true);
  const [formData, setFormData] = useState({
    type: "rent",
    name: "",
    bedrooms: 1,
    bathrooms: 1,
    parking: false,
    furnished: false,
    address: "",
    offer: false,
    regularPrice: 0,
    discountedPrice: 0,
    images: {},
    latitude: 0,
    longitude: 0,
  });

  const {
    type,
    name,
    bedrooms,
    bathrooms,
    parking,
    furnished,
    address,
    offer,
    regularPrice,
    discountedPrice,
    images,
    latitude,
    longitude,
  } = formData;

  const onMutate = (e) => {
    let boolean = null;

    if (e.target.value === "true") {
      boolean = true;
    }
    if (e.target.value === "false") {
      boolean = false;
    }

    // Text/Booleans/Numbers
    if (!e.target.files) {
      setFormData((prevState) => ({
        ...prevState,
        [e.target.id]: boolean ?? e.target.value,
      }));
    }
  };

  const onSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
  };

  if (loading) {
    return <Spinner />;
  }

  return (
    <div className="font-[system-ui] mb-[10rem] p-[1rem] sm:p-[2rem] h-full w-full">
      <header>
        <p className="text-3xl lg:text-5xl font-bold">Create a Listing</p>
      </header>

      <main className="mt-4 ">
        <form onSubmit={onSubmit}>
          <label className="font-[600] mt-4 block">Sell / Rent</label>

          <div className="flex">
            <button
              type="button"
              className={type === "sale" ? "formButtonActive" : "formButton"}
              id="type"
              value="sale"
              onClick={onMutate}
            >
              Sell
            </button>
            <button
              type="button"
              className={type === "rent" ? "formButtonActive" : "formButton"}
              id="type"
              value="rent"
              onClick={onMutate}
            >
              Rent
            </button>
          </div>

          <label className="font-[600] mt-4 block">Name</label>
          <input
            className="flex justify-center items-center text-center bg-white font-[600] py-[0.9rem] px-[3rem] rounded-2xl mt-[0.5rem] mr-[0.5rem]"
            type="text"
            id="name"
            value={name}
            placeholder="Name here... "
            maxLength="32"
            minLength="10"
            required
            onChange={onMutate}
          />

          <div className="formRooms flex">
            <div>
              <label className="formLabel font-[600] mt-4 block">
                Bedrooms
              </label>
              <input
                className={`flex justify-center items-center text-center bg-white font-[600] py-[0.9rem] px-[3rem] rounded-2xl mt-[0.5rem] mr-[0.5rem] `}
                type="number"
                id="bedrooms"
                value={bedrooms}
                onChange={onMutate}
                min="1"
                max="50"
                required
              />
            </div>
            <div>
              <label className="font-[600] mt-4 block">Bathrooms</label>
              <input
                className={`flex justify-center items-center text-center bg-white font-[600] py-[0.9rem] px-[3rem] rounded-2xl mt-[0.5rem] mr-[0.5rem] `}
                type="number"
                id="bathrooms"
                value={bathrooms}
                onChange={onMutate}
                min="1"
                max="50"
                required
              />
            </div>
          </div>

          <label className="font-[600] mt-4 block">Parking spot</label>
          <div className=" flex">
            <button
              type="button"
              id="parking"
              value={true}
              className={parking === true ? "formButtonActive" : "formButton"}
              min="1"
              max="50"
              onClick={onMutate}
            >
              Yes
            </button>
            <button
              type="button"
              id="parking"
              className={
                !parking && parking !== null ? "formButtonActive" : "formButton"
              }
              value={false}
              onClick={onMutate}
            >
              No
            </button>
          </div>

          <label className="font-[600] mt-4 block">Furnished</label>
          <div className="flex">
            <button
              type="button"
              className={furnished ? "formButtonActive" : "formButton"}
              id="furnished"
              value={true}
              onClick={onMutate}
            >
              Yes
            </button>
            <button
              type="button"
              className={
                !furnished && furnished !== null
                  ? "formButtonActive"
                  : "formButton"
              }
              id="furnished"
              value={false}
              onClick={onMutate}
            >
              No
            </button>
          </div>

          <label className="font-[600] mt-4 block">Address</label>
          <textarea
            className={`flex justify-center items-center text-center bg-white font-[600] py-[0.9rem] px-[3rem] rounded-2xl mt-[0.5rem] mr-[0.5rem] `}
            type="text"
            id="address"
            value={address}
            onChange={onMutate}
            placeholder="Address here..."
            required
          />
          {!geolocationEnabled && (
            <div className="formLatLng flex">
              <div>
                <label className="font-[600] mt-4 block">Latitude</label>
                <input
                  className={`flex justify-center items-center text-center bg-white font-[600] py-[0.9rem] px-[3rem] rounded-2xl mt-[0.5rem] mr-[0.5rem] `}
                  type="number"
                  id="latitude"
                  value={latitude}
                  required
                  onChange={onMutate}
                />
              </div>
              <div>
                <label className="font-[600] mt-4 block">Longitude</label>
                <input
                  className={`flex justify-center items-center text-center bg-white font-[600] py-[0.9rem] px-[3rem] rounded-2xl mt-[0.5rem] mr-[0.5rem] `}
                  type="number"
                  id="longitude"
                  value={longitude}
                  onChange={onMutate}
                  required
                />
              </div>
            </div>
          )}

          <label className="font-[600] mt-4 block">Offer</label>
          <div className="flex">
            <button
              type="button"
              className={offer ? "formButtonActive" : "formButton"}
              name="offer"
              id="offer"
              value={true}
              onClick={onMutate}
            >
              Yes
            </button>
            <button
              className={
                !offer && offer !== null ? "formButtonActive" : "formButton"
              }
              type="button"
              id="offer"
              value={false}
              onClick={onMutate}
            >
              No
            </button>
          </div>

          <label className="font-[600] mt-4 block">Regular Price</label>
          <div className="formPriceDiv">
            <input
              className={`flex justify-center items-center text-center bg-white font-[600] py-[0.9rem] px-[3rem] rounded-2xl mt-[0.5rem] mr-[0.5rem] `}
              type="number"
              id="regularPrice"
              value={regularPrice}
              onChange={onMutate}
              min="50"
              max="750000000"
              required
            />

            {type === "rent" && (
              <p className="formPriceText font-[600] ml-[-1.5rem]">
                &#8373; / Month
              </p>
            )}
          </div>

          {offer && (
            <>
              <label className="font-[600] mt-4 block">Discounted Price</label>
              <input
                className={`flex justify-center items-center text-center bg-white font-[600] py-[0.9rem] px-[3rem] rounded-2xl mt-[0.5rem] mr-[0.5rem] `}
                type="number"
                id="discountedPrice"
                value={discountedPrice}
                onChange={onMutate}
                min="50"
                max="750000000"
              />
            </>
          )}

          <label className="font-[600] mt-4 block">Images</label>
          <p className="opacity-75 text-xs">
            The first image will be the cover (max 6).
          </p>
          <input
            className="formInputFile w-full"
            type="file"
            id="images"
            max="6"
            accept=".jpg,.png,.jpeg"
            onChange={onMutate}
            multiple
            required
          />
          <button
            type="submit"
            className=" flex justify-center items-center mt-[5rem] bg-[#00cc66] text-white rounded-2xl py-[0.85rem] px-[2rem] w-[80%] text-sm createListingButton"
          >
            Create Listing
          </button>
        </form>
      </main>
    </div>
  );
}

export default CreateListing;
