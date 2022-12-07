import google from "../assets/jpg/google.png";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { doc, getDoc, serverTimestamp, setDoc } from "firebase/firestore";
import { db } from "../firebase.config";
import { toast } from "react-toastify";
import { useNavigate, useLocation } from "react-router-dom";

function OAuth() {
  const navigate = useNavigate();
  const location = useLocation();

  const onGoogleClick = async () => {
    try {
      const auth = getAuth();
      const provider = new GoogleAuthProvider();
      const results = await signInWithPopup(auth, provider);
      const user = results.user;

      //Check if user
      const docRef = doc(db, ("users", user.uid));
      const docSnap = await getDoc(docRef);

      //Check if user doesn't exist, create user
      if (!docSnap.exists()) {
        await setDoc(doc(db, "users", user.uid), {
          displayName: user.displayName,
          email: user.email,
          timestamp: serverTimestamp(),
        });
      }

      toast.success("Logged In successfully");
      navigate("/");
    } catch (error) {
      toast.error("Could not authorize with google");
    }
  };

  return (
    <div onClick={onGoogleClick}>
      <p className="cursor-pointer my-5 sm:px-7 py-3 text-black font-medium text-sm leading-snug uppercase rounded shadow-md hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out w-full flex justify-center items-center">
        <img src={google} alt="Logo" className="w-8 h-8" srcSet="" /> Sign{" "}
        {location.pathname === "/sign-up" ? "Up" : "In"} with Google
      </p>
    </div>
  );
}

export default OAuth;
