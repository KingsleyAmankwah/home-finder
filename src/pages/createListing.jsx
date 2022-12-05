import { useState } from "react";

import Spinner from "../components/Spinner";

function CreateListing() {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    type: "rent",
    name: "",
    parking: false,
    furnished: false,
  });

  const { type, name, parking, furnished } = formData;

  // const onChange = (e) => {
  //   let boolean = null;

  //   if (e.target.value === "true") {
  //     boolean = true;
  //   }
  //   if (e.target.value === "false") {
  //     boolean = false;
  //   }

  //   // Text/Booleans/Numbers
  //   if (!e.target.files) {
  //     setFormData((prevState) => ({
  //       ...prevState,
  //       [e.target.id]: boolean ?? e.target.value,
  //     }));
  //   }
  // };

  const onSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
  };

  if (loading) {
    return <Spinner />;
  }

  return (
    <div className="font-[system-ui] p-[1rem] sm:p-[2rem]">
      <header>
        <p className="text-3xl lg:text-5xl font-bold">Create a Listing</p>
      </header>

      <main className="mt-4">
        <form onSubmit={onSubmit}>
          <label className="formLabel font-[600] mt-4 block">Sell / Rent</label>
          <div className="formButtons flex">
            <button
              type="button"
              className={`flex justify-center items-center text-center bg-white font-[600] py-[0.9rem] px-[3rem] rounded-2xl mt-[0.5rem] mr-[0.5rem] ${
                type === "sale" ?? "bg-[#00cc66]"
              }`}
              id="type"
              value="sale"
              // onChange={onChange}
            >
              Sell
            </button>
            <button
              type="button"
              id="type"
              className={`flex justify-center items-center text-center bg-white font-[600] py-[0.9rem] px-[3rem] rounded-2xl mt-[0.5rem] mr-[0.5rem] ${
                type === "rent" && "bg-[#00cc66] text-white"
              }`}
              value="rent"
              // onChange={onChange}
            >
              Rent
            </button>
          </div>

          <label className="formLabel font-[600] mt-4 block">Name</label>
          <input
            className="formInputName flex justify-center items-center text-center bg-white font-[600] py-[0.9rem] px-[3rem] rounded-2xl mt-[0.5rem] mr-[0.5rem]"
            type="text"
            id="name"
            value={name}
            maxLength="32"
            minLength="10"
            required
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
                min="1"
                max="50"
                required
              />
            </div>
            <div>
              <label className="formLabel font-[600] mt-4 block">
                Bathrooms
              </label>
              <input
                className={`flex justify-center items-center text-center bg-white font-[600] py-[0.9rem] px-[3rem] rounded-2xl mt-[0.5rem] mr-[0.5rem] `}
                type="number"
                id="bathrooms"
                min="1"
                max="50"
                required
              />
            </div>
          </div>

          <label className="formLabel font-[600] mt-4 block">
            Parking spot
          </label>
          <div className="formButtons flex">
            <button
              type="button"
              className={`flex justify-center items-center text-center bg-white font-[600] py-[0.9rem] px-[3rem] rounded-2xl mt-[0.5rem] mr-[0.5rem] ${
                parking && `bg-[#00cc66] text-white`
              }`}
              id="parking"
              value={true}
              min="1"
              max="50"
            >
              Yes
            </button>
            <button
              type="button"
              className={`${
                !parking && `bg-[#00cc66] text-white`
              } flex justify-center items-center text-center bg-white font-[600] py-[0.9rem] px-[3rem] rounded-2xl mt-[0.5rem] mr-[0.5rem] `}
              id="parking"
              value={false}
            >
              No
            </button>
          </div>

          <label className="formLabel font-[600] mt-4 block">Furnished</label>
          <div className="flex">
            <button
              type="button"
              className={`flex justify-center items-center text-center bg-white font-[600] py-[0.9rem] px-[3rem] rounded-2xl mt-[0.5rem] mr-[0.5rem] ${
                parking && `bg-[#00cc66] text-white`
              }`}
              id="furnished"
              value={true}
            >
              Yes
            </button>
            <button
              type="button"
              className={`${
                !furnished && `bg-[#00cc66] text-white`
              } flex justify-center items-center text-center bg-white font-[600] py-[0.9rem] px-[3rem] rounded-2xl mt-[0.5rem] mr-[0.5rem] `}
              id="furnished"
              value={false}
            >
              No
            </button>
          </div>

          <label className="formLabel font-[600] mt-4 block">Address</label>
          <textarea
            className={`flex justify-center items-center text-center bg-white font-[600] py-[0.9rem] px-[3rem] rounded-2xl mt-[0.5rem] mr-[0.5rem] `}
            type="text"
            id="address"
            required
          />

          <div className="formLatLng flex">
            <div>
              <label className="formLabel font-[600] mt-4 block">
                Latitude
              </label>
              <input
                className={`flex justify-center items-center text-center bg-white font-[600] py-[0.9rem] px-[3rem] rounded-2xl mt-[0.5rem] mr-[0.5rem] `}
                type="number"
                id="latitude"
                required
              />
            </div>
            <div>
              <label className="formLabel font-[600] mt-4 block">
                Longitude
              </label>
              <input
                className={`flex justify-center items-center text-center bg-white font-[600] py-[0.9rem] px-[3rem] rounded-2xl mt-[0.5rem] mr-[0.5rem] `}
                type="number"
                id="longitude"
                required
              />
            </div>
          </div>

          <label className="formLabel font-[600] mt-4 block">Offer</label>
          <div className="formButtons flex">
            <button
              type="button"
              className={`flex justify-center items-center text-center bg-white font-[600] py-[0.9rem] px-[3rem] rounded-2xl mt-[0.5rem] mr-[0.5rem] `}
              id="offer"
              value={true}
            >
              Yes
            </button>
            <button
              className={`flex justify-center items-center text-center bg-white font-[600] py-[0.9rem] px-[3rem] rounded-2xl mt-[0.5rem] mr-[0.5rem] `}
              type="button"
              id="offer"
              value={false}
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
              min="50"
              max="750000000"
              required
            />
          </div>

          <>
            <label className="font-[600] mt-4 block">Discounted Price</label>
            <input
              className={`flex justify-center items-center text-center bg-white font-[600] py-[0.9rem] px-[3rem] rounded-2xl mt-[0.5rem] mr-[0.5rem] `}
              type="number"
              id="discountedPrice"
              min="50"
              max="750000000"
            />
          </>

          <label className="font-[600] mt-4 block">Images</label>
          <p className="imagesInfo opacity-75 text-xs">
            The first image will be the cover (max 6).
          </p>
          <input
            className="formInputFile w-full bg-[#00cc66] text-white font-[600] mr-4 rounded-2xl border-none py-2 px-3"
            type="file"
            id="images"
            max="6"
            accept=".jpg,.png,.jpeg"
            multiple
            required
          />
          <button
            type="submit"
            className=" flex justify-center items-center mt-[2rem] bg-[#00cc66] text-white rounded-2xl py-[0.85rem] px-[2rem] w-[80%] text-sm createListingButton"
          >
            Create Listing
          </button>
        </form>
      </main>
    </div>
  );
}

export default CreateListing;
