// import { Link } from "react-router-dom";
// import Slider from '../components/Slider'
import rentCategoryImage from "../assets/jpg/rentCategoryImage.jpg";
import sellCategoryImage from "../assets/jpg/sellCategoryImage.jpg";

function Explore() {
  return (
    <div className="font-[system-ui] m-[2rem]">
      <header>
        <p className="text-5xl font-bold">Explore</p>
      </header>

      <main>
        {/* <Slider /> */}

        <p className="exploreCategoryHeading mt-[3rem] font-bold">Categories</p>
        <div className="mt-[1rem] flex justify-between">
          <a href="/category/rent" className="w-[48%]">
            <img
              src={rentCategoryImage}
              alt="rent"
              className="w-full object-cover min-h-[115px] h-[20vw] rounded-3xl my-0 mx-auto"
            />
            <p className="font-[500] text-left">Places for rent</p>
          </a>
          <a href="/category/sale" className="w-[48%]">
            <img
              src={sellCategoryImage}
              alt="sell"
              className="w-full object-cover min-h-[115px] h-[20vw] rounded-3xl my-0 mx-auto"
            />
            <p className="font-[500] text-left">Places for sale</p>
          </a>
        </div>
      </main>
    </div>
  );
}

export default Explore;
