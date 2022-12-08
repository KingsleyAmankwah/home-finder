import google from "../assets/jpg/google.png";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

function OAuth() {
  const navigate = useNavigate();
  const provider = new GoogleAuthProvider();

  const onGoogleClick = async () => {
    const auth = getAuth();
    signInWithPopup(auth, provider)
      .then((result) => {
        const user = result.user;
        if (user) {
          toast.success(`Welcome ${user.displayName}`);
          navigate("/");
        }
      })
      .catch((error) => {
        const errorMessage = error.message;
        toast.error(errorMessage);
      });
  };

  return (
    <div onClick={onGoogleClick}>
      <p className="cursor-pointer my-5 sm:px-7 py-3 text-black font-medium text-sm leading-snug uppercase rounded shadow-md hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out w-full flex justify-center items-center">
        <img src={google} alt="Logo" className="w-8 h-8" srcSet="" /> Sign In
        with Google
      </p>
    </div>
  );
}

export default OAuth;
