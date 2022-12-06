import RingLoader from "react-spinners/RingLoader";

function Spinner() {
  return (
    <div>
      <div className="flex top-0 left-0 right-0 bottom-0 w-full fixed text-white bg-[rgba(0,0,0,0.5)] z-[50000] items-center justify-center">
        <RingLoader className="mb-3" color={"#fff"} size={50} />
        <h1 className="text-2xl text-center">
          {/* We are adding new ideas to your feed! */}
        </h1>
      </div>
    </div>
  );
}

export default Spinner;
