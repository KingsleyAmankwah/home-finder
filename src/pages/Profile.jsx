import arrowRight from "../assets/svg/keyboardArrowRightIcon.svg";
import homeIcon from "../assets/svg/homeIcon.svg";
import { Link, useNavigate } from "react-router-dom";
import { getAuth, updateProfile } from "firebase/auth";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import {
  collection,
  deleteDoc,
  doc,
  getDocs,
  orderBy,
  query,
  updateDoc,
  where,
} from "firebase/firestore";
import { db } from "../firebase-config";
import ListingItem from "../components/ListingItem";
import Spinner from "../components/Spinner";

function Profile() {
  const auth = getAuth();
  const navigate = useNavigate();
  const [changeDetails, setChangeDetails] = useState(false);
  const [formData, setFormData] = useState({
    name: auth.currentUser.displayName,
    email: auth.currentUser.email,
  });

  const { name, email } = formData;
  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const onLogout = () => {
    auth.signOut();
    navigate("/");
  };

  const onSubmit = async () => {
    try {
      if (auth.currentUser.displayName !== name) {
        await updateProfile(auth.currentUser, {
          displayName: name,
        });
      }
      //Update in firestore
      const userRef = doc(db, "users", auth.currentUser.uid);
      await updateDoc(userRef, {
        name,
      });
    } catch (error) {
      toast.error("Could not update profile");
    }
  };

  const [loading, setLoading] = useState(true);
  const [listings, setListings] = useState(null);

  useEffect(() => {
    const fetchUserListings = async () => {
      const listingsRef = collection(db, "listings");

      const q = query(
        listingsRef,
        where("userRef", "==", auth.currentUser.uid),
        orderBy("timestamp", "desc")
      );

      const querySnap = await getDocs(q);

      let listings = [];

      querySnap.forEach((doc) => {
        return listings.push({
          id: doc.id,
          data: doc.data(),
        });
      });

      setListings(listings);
      setLoading(false);
    };

    fetchUserListings();
  }, [auth.currentUser.uid]);

  const onDelete = async (listingId) => {
    if (window.confirm("Are you sure you want to delete?")) {
      await deleteDoc(doc(db, "listings", listingId));
      const updatedListings = listings.filter(
        (listing) => listing.id !== listingId
      );
      setListings(updatedListings);
      toast.success("Successfully deleted listing");
    }
  };

  const onEdit = (listingId) => navigate(`/edit-listing/${listingId}`);

  if (loading) return <Spinner />;

  return (
    <div className="font-[system-ui] p-[1rem] sm:p-[2rem]">
      <header className="flex justify-between items-center">
        <p className="text-3xl lg:text-5xl font-bold">My Profile</p>
        <button
          type="button"
          className="cursor-pointer bg-[#00cc66] py-[0.25rem] px-[0.75rem] text-white font-[500] rounded-lg"
          onClick={onLogout}
        >
          Logout
        </button>
      </header>

      <main>
        <div className="mt-8 flex justify-between max-w-[500px]">
          <p className="font-[600]">Personal Details</p>
          <p
            className="font-[600] text-[#00cc66] cursor-pointer"
            onClick={() => {
              changeDetails && onSubmit();
              setChangeDetails((prevState) => !prevState);
            }}
          >
            {" "}
            {changeDetails ? "Update" : "Edit"}{" "}
          </p>
        </div>

        <div className="max-w-[500px] p-4 bg-white mt-4">
          <form>
            <input
              type="text"
              id="name"
              className={`${
                changeDetails && `bg-[rgba(44,44,44,0.1)]`
              } font-[600] h-[3rem] w-full border-0 outline-0`}
              name="name"
              value={name}
              disabled={!changeDetails}
              onChange={onChange}
              placeholder="Full Name"
            />
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              // onChange={onChange}
              disabled
              placeholder="Email"
              className={`font-[600] h-[3rem] w-full border-0 outline-0`}
            />
          </form>
        </div>

        <Link
          to="/create-listing"
          className="flex items-center justify-between max-w-[500px] mt-[2rem] py-4 px-4 font-[600] rounded-2xl bg-white"
        >
          <img src={homeIcon} alt="home" />
          <p>Sell or rent your home</p>
          <img src={arrowRight} alt="arrow right" />
        </Link>

        {!loading && listings.length > 0 ? (
          <>
            <p className="listingText mt-12 font-semibold">Your Listings</p>
            <ul className="listingsList p-0">
              {listings.map((listing) => (
                <ListingItem
                  key={listing.id}
                  listing={listing.data}
                  id={listing.id}
                  onDelete={() => onDelete(listing.id)}
                  onEdit={() => onEdit(listing.id)}
                />
              ))}
            </ul>
          </>
        ) : (
          <p className="text-center mt-5">No Listings Available</p>
        )}
      </main>
    </div>
  );
}

export default Profile;
