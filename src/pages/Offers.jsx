import React from "react";
import ListingItem from "../components/ListingItem";

function Offers() {
  return (
    <div className="category mb-[10rem]">
      <header>
        <p className="text-5xl font-bold">Offers</p>
      </header>

      <main>
        <ul className="p-0">
          <ListingItem />
        </ul>
      </main>

      <br />
      <br />

      <p className="loadMore">Load More</p>
    </div>
  );
}

export default Offers;
