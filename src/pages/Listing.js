import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getDoc, doc } from "firebase/firestore";
// import { getAuth } from "firebase/auth";
import { db } from "../firebase-config";
import Spinner from "../components/Spinner";
import { Helmet } from "react-helmet";
// import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import shareIcon from "../assets/svg/shareIcon.svg";
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

function Listing() {
  const [listing, setListing] = useState(null);
  const [loading, setLoading] = useState(true);
  const [shareLinkCopied, setShareLinkCopied] = useState(false);

  const navigate = useNavigate();
  const params = useParams();
  // const auth = getAuth();

  useEffect(() => {
    const fetchListing = async () => {
      const docRef = doc(db, "listings", params.listingId);
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        setListing(docSnap.data());
        setLoading(false);
      }
    };

    fetchListing();
  }, [navigate, params.listingId]);

  if (loading) {
    return <Spinner />;
  }
  return (
    <main>
      <Helmet>
        <title>{listing.name}</title>
      </Helmet>

      <Swiper slidesPerView={1} pagination={{ clickable: true }}>
        {listing &&
          listing.images.map((url, index) => (
            <SwiperSlide key={index}>
              <div
                style={{
                  background: `url(${listing.images[index]}) center no-repeat`,
                  backgroundSize: "cover",
                }}
                className={`w-full h-[50vw] lg:h-[25vw] relative  bg-cover bg-center`}
              ></div>
            </SwiperSlide>
          ))}
      </Swiper>

      <div
        className="shareIconDiv fixed top-[3%] right-[5%] flex items-center justify-center bg-white rounded-[50%] z-20 cursor-pointer"
        onClick={() => {
          navigator.clipboard.writeText(window.location.href);
          setShareLinkCopied(true);
          setTimeout(() => {
            setShareLinkCopied(false);
          }, 2000);
        }}
      >
        <img src={shareIcon} alt="" />
      </div>

      {shareLinkCopied && <p className="linkCopied">Link Copied!</p>}

      <div className="listingDetails mb-40">
        <p className="listingName font-semibold text-base mb-2">
          {listing.name} - $
          {listing.offer
            ? listing.discountedPrice
                .toString()
                .replace(/\B(?=(\d{3})+(?!\d))/g, ",")
            : listing.regularPrice
                .toString()
                .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
        </p>
        <p className="listingLocation font-semibold my-1">{listing.address}</p>
        <p className="listingType py-[0.25rem] px-4 rounded-[2rem] font-semibold mr-4 bg-black text-white inline">
          For {listing.type === "rent" ? "Rent" : "Sale"}
        </p>
        {listing.offer && (
          <p className="discountPrice bg-black text-white rounded-2xl py-[0.25rem] px-4  text-sm font-semibold inline">
            ${listing.regularPrice - listing.discountedPrice} discount
          </p>
        )}

        <ul className="listingDetailsList p-0 list-none">
          <li className="my-[0.3rem] mx-0 font-medium opacity-80">
            {listing.bedrooms > 1
              ? `${listing.bedrooms} Bedrooms`
              : "1 Bedroom"}
          </li>
          <li>
            {listing.bathrooms > 1
              ? `${listing.bathrooms} Bathrooms`
              : "1 Bathroom"}
          </li>
          <li>{listing.parking && "Parking Spot"}</li>
          <li>{listing.furnished && "Furnished"}</li>
        </ul>

        {/* <p className="listingLocationTitle mt-8 font-semibold text-sm">
          {listing.address}
        </p> */}
      </div>
    </main>
  );
}

export default Listing;
