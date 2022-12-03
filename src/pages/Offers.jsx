import React from "react";
import ListingItem from "../components/ListingItem";

function Offers() {
  return (
    <div className="font-[system-ui] m-[1rem] sm:m-[2rem]">
      <header>
        <p className="text-3xl lg:text-5xl font-bold">Offers</p>
      </header>

      <main>
        <ul className="p-0 mt-[3rem]">
          <ListingItem />
        </ul>
      </main>

      <br />
      <br />

      <p className="opacity-75 py-[0.25rem] px-[0.5] cursor-pointer w-[8rem] my-0 mx-auto text-center rounded-2xl bg-[#000] text-white font-bold">
        Load More
      </p>
    </div>
  );
}

export default Offers;
