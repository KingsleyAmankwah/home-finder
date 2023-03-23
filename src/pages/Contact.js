import { useState } from "react";

function Contact() {
  const [message, setMessage] = useState("");

  const onChange = (e) => setMessage(e.target.value);

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
            Contact Kingsley Amankwah
          </p>
        </div>

        <form className="messageForm mt-2">
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

          <a href="#!">
            <button
              type="submit"
              className=" flex justify-center items-center mt-[5rem] bg-[#00cc66] text-white rounded-2xl py-[0.85rem] px-[2rem] w-[80%] text-sm createListingButton"
            >
              Send Message
            </button>
          </a>
        </form>
      </main>
    </div>
  );
}

export default Contact;
