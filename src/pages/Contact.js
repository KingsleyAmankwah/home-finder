import { getAuth } from "firebase/auth";
import { doc, getDoc } from "firebase/firestore";
import { useState, useEffect } from "react";
import { useParams, useSearchParams } from "react-router-dom";
import { toast } from "react-toastify";
import { db } from "../firebase-config";

function Contact() {
  const [message, setMessage] = useState("");
  const [landlord, setLandlord] = useState(null);
  // eslint-disable-next-line
  const [searchParams, setSearchParams] = useSearchParams();
  const params = useParams();

  const onChange = (e) => setMessage(e.target.value);

  const auth = getAuth();

  useEffect(() => {
    const getLandlord = async () => {
      const docRef = doc(db, "users", params.landlordId);
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        setLandlord(docSnap.data());
      } else {
        toast.error("Could not get landlord data");
      }
    };

    getLandlord();
  }, [params.landlordId]);

  const handleSendMessage = (e) => {
    e.preventDefault();

    const userEmail = auth.currentUser.email;

    const mailtoLink = `mailto:${landlord?.email}?subject=${searchParams.get(
      "listingName"
    )}&body=From: ${userEmail}%0D%0A${message}`;

    window.location.href = mailtoLink;
  };

  return (
    <div className="pageContainer font-[system-ui] p-[1rem] sm:p-[2rem] mb-[10rem">
      <header>
        <p className="pageHeader text-3xl lg:text-5xl font-bold">
          Contact Landlord
        </p>
      </header>
      <main>
        <div className="contactLandlord flex mt-8 items-center">
          <p className="landlordName font-[600] text-[1.2rem]">
            Contact {landlord?.name}
          </p>
        </div>

        <form className="messageForm mt-2" onSubmit={handleSendMessage}>
          <div className="messageDiv mt-8 flex flex-col mb-16">
            <label htmlFor="message" className="messageLabel mb-2">
              Message
            </label>
            <textarea
              name="message"
              id="message"
              className="textarea py-[1rem] px-[1.5rem] outline-0 border-0 w-full h-[300px] rounded-[1rem]"
              value={message}
              onChange={onChange}
              placeholder="Message here..."
            ></textarea>
          </div>

          <button
            type="submit"
            className=" flex justify-center items-center mt-[5rem] bg-[#00cc66] text-white rounded-2xl py-[0.85rem] px-[2rem] w-[80%] text-sm createListingButton"
          >
            Send Message
          </button>
        </form>
      </main>
    </div>
  );
}

export default Contact;
