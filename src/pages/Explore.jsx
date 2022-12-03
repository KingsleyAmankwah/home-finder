// import { Link } from "react-router-dom";
// import Slider from '../components/Slider'
import rentCategoryImage from "../assets/jpg/rentCategoryImage.jpg";
import sellCategoryImage from "../assets/jpg/sellCategoryImage.jpg";

function Explore() {
  return (
    <div className="font-[system-ui m-[1rem] sm:m-[2rem]">
      <header>
        <p className="text-3xl lg:text-5xl font-bold">Explore</p>
      </header>

      <main>
        {/* <Slider /> */}

        <p className="exploreCategoryHeading mt-[3rem] font-bold">Categories</p>
        <div className="md:mt-[1rem] mt-[0.8rem] sm:flex justify-between">
          <a href="/category/rent" className="w-[48%]">
            <img
              src={rentCategoryImage}
              alt="rent"
              className="w-full object-cover min-h-[115px] sm:h-[20vw] h-full rounded-2xl my-0 mx-auto"
            />
            <p className="font-[500] mt-[0.5rem] mb-[2rem] text-left">
              Places for rent
            </p>
          </a>
          <a href="/category/sale" className="w-[48%]">
            <img
              src={sellCategoryImage}
              alt="sell"
              className="w-full object-cover min-h-[115px] sm:h-[20vw] h-full rounded-2xl my-0 mx-auto"
            />
            <p className="font-[500] mt-[0.5rem] text-left">Places for sale</p>
          </a>
        </div>
      </main>
    </div>
  );
}

export default Explore;
