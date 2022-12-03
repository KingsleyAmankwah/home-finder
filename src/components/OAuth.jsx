import google from "../assets/jpg/google.png";

function OAuth() {
  return (
    <div>
      <a
        className=" my-5 px-7 py-3 text-black font-medium text-sm leading-snug uppercase rounded shadow-md hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out w-full flex justify-center items-center"
        href="#!"
      >
        <img src={google} alt="Logo" className="w-8 h-8" srcSet="" /> Continue
        with Google
      </a>
    </div>
  );
}

export default OAuth;
