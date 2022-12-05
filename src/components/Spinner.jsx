import RingLoader from "react-spinners/RingLoader";

function Spinner() {
  return (
    <div>
      <div className="flex flex-col w-full h-[50vh] bg-black opacity-75 items-center justify-center">
        <RingLoader className="mb-3" color={"#000"} size={50} />
        <h1 className="text-3xl font-bolder text-center">
          We are adding new ideas to your feed!
        </h1>
      </div>
    </div>
  );
}

export default Spinner;
