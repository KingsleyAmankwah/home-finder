import emoji from "../images/emoji.png";

const NoInternet = () => {
  return (
    <div
      className={`bg-cover bg-center h-screen flex flex-col items-center justify-center`}
    >
      <div className="">
        {/* <img
          src={emoji}
          alt="no_Internet_Image"
          className="object-contain object-center"
        /> */}
      </div>
      <h1 className="text-3xl text-black font-bold mb-4">
        Oops! No internet connection.
      </h1>
      <p className="text-xl text-black">
        Please check your network settings and try again.
      </p>
    </div>
  );
};

export default NoInternet;
