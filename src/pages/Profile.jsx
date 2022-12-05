import arrowRight from "../assets/svg/keyboardArrowRightIcon.svg";
import homeIcon from "../assets/svg/homeIcon.svg";
import { Link, useNavigate } from "react-router-dom";
import { getAuth } from "firebase/auth";

function Profile() {
  const auth = getAuth();
  const navigate = useNavigate();

  const onLogout = () => {
    auth.signOut();
    navigate("/");
  };

  return (
    <div className="profile font-[system-ui] m-[1rem] sm:m-[2rem]">
      <header className="flex justify-between items-center">
        <p className="text-3xl lg:text-5xl font-bold">My Profile</p>
        <button
          type="button"
          className="cursor-pointer bg-[#00cc66] py-[0.25rem] px-[0.75rem] text-white font-[500] rounded-lg"
          onClick={onLogout}
        >
          Logout
        </button>
      </header>

      <main>
        <div className="mt-4 flex justify-between max-w-[500px]">
          <p className="font-[600]">Personal Details</p>
          <p className="font-[600] text-[#00cc66]">Edit</p>
        </div>

        <div className="profileCard max-w-[500px] p-4 bg-white">
          <form>
            <input
              type="text"
              id="name"
              placeholder="Full Name"
              className="h-[3rem] w-full"
            />
            <input
              type="email"
              id="email"
              placeholder="Email"
              className="h-[3rem] w-full "
            />
          </form>
        </div>

        <Link
          to="/create-listing"
          className="flex items-center justify-between max-w-[500px] mt-[2rem] py-1 px-4 text-white rounded-2xl bg-[#00cc66]"
        >
          <img src={homeIcon} alt="home" />
          <p>Sell or rent your home</p>
          <img src={arrowRight} alt="arrow right" />
        </Link>
      </main>
    </div>
  );
}

export default Profile;
