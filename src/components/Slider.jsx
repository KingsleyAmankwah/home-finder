// import sellCategoryImage from "../assets/jpg/sellCategoryImage.jpg";

function Slider() {
  return (
    <>
      <p className="font-[700] mt-[1rem]">Recommended</p>

      <div className="relative rounded-3xl w-full h-[50vh] after:content-[''] after:absolute after:bg-[#000] after:top-0 after:left-0 after:h-[50vh] after:w-full after:opacity-50 after:rounded-3xl bg-center bg-cover bg-no-repeat bg-[url('./assets/jpg/sellCategoryImage.jpg')]">
        {/* <div className="Banner_contents">
        <div className="Banner_title">
          <h1>Hello</h1>
        </div>

        <div className="Banner_buttons">
          <button className="Banner_button">Play</button>
          <button className="Banner_button">My List</button>
        </div>

        <div className="Banner_description">
          <p>Hey there!</p>
        </div>
      </div>
      <div className="Banner-fadeBottom"></div> */}
      </div>
    </>
  );
}

export default Slider;
