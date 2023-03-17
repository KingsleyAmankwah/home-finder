import {
  collection,
  getDocs,
  limit,
  orderBy,
  query,
  startAfter,
  where,
} from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import ListingItem from "../components/ListingItem";
import Spinner from "../components/Spinner";
import { db } from "../firebase-config";

function Offers() {
  const [listings, setListings] = useState(null);
  const [loading, setLoading] = useState(true);
  const [lastFetchListing, setLastFetchListing] = useState(null);

  useEffect(() => {
    const fetchListings = async () => {
      try {
        const listingsRef = collection(db, "listings");

        const q = query(
          listingsRef,
          where("offer", "==", true),
          orderBy("timestamp", "desc"),
          limit(10)
        );

        const querySnap = await getDocs(q);

        const lastVisibleListing = querySnap.docs[querySnap.docs.length - 1];
        setLastFetchListing(lastVisibleListing);

        const listings = [];

        querySnap.forEach((doc) => {
          return listings.push({
            id: doc.id,
            data: doc.data(),
          });
        });

        setListings(listings);

        setLoading(false);
      } catch (error) {
        toast.error("Could not fetch listings");
      }
    };

    fetchListings();
  }, []);

  const onLoadMore = async () => {
    try {
      const listingRef = collection(db, "listings");

      const q = query(
        listingRef,
        where("offer", "==", true),
        orderBy("timestamp", "desc"),
        startAfter(lastFetchListing),
        limit(10)
      );

      const querySnap = await getDocs(q);

      const lastVisibleListing = querySnap.docs[querySnap.docs.length - 1];
      setLastFetchListing(lastVisibleListing);

      const listings = [];

      querySnap.forEach((doc) => {
        return listings.push({
          id: doc.id,
          data: doc.data(),
        });
      });

      setListings((prevState) => [...prevState, ...listings]);
      setLoading(false);
    } catch (error) {
      toast.error("Could not load more listings");
    }
  };

  if (loading) return <Spinner />;

  return (
    <div className="font-[system-ui] p-[1rem] sm:p-[2rem]">
      <header>
        <p className="text-3xl lg:text-5xl font-bold">Offers</p>
      </header>
      {listings && listings.length > 0 ? (
        <>
          <main>
            <ul className="p-0 mt-[3rem]">
              <ListingItem />
            </ul>
          </main>
          <br />
          <br />

          <p
            onClick={onLoadMore}
            className="opacity-75 py-[0.25rem] px-[0.5] cursor-pointer w-[8rem] my-0 mx-auto text-center rounded-2xl bg-[#000] text-white font-bold"
          >
            Load More
          </p>
        </>
      ) : (
        <p>There are no current offers</p>
      )}
    </div>
  );
}

export default Offers;
