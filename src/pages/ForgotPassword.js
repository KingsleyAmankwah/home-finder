// import resetPasword from "../assets/jpg/reset-password.jpg";
import { getAuth, sendPasswordResetEmail } from "firebase/auth";
import { useState } from "react";
import { toast } from "react-toastify";
import sellCategoryImage from "../assets/jpg/sellCategoryImage.jpg";
import Spinner from "../components/Spinner";

function ForgotPassword() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const onSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const auth = getAuth();
      await sendPasswordResetEmail(auth, email);
      toast.success(`Email sent. check your sapm folder to reset Password`);
      setLoading(false);
    } catch (error) {
      toast.error("Sorry something went wrong. Try again");
      setLoading(false);
    }
  };

  if (loading) {
    return <Spinner />;
  }

  return (
    <>
      <div className="container sm:py-[10rem] mx-auto">
        <div className="flex justify-center items-center h-full px-6">
          <div className="w-full xl:w-3/4 lg:w-11/12 flex">
            <div className="w-full lg:w-1/2 bg-white p-5 rounded-lg lg:rounded-l-none">
              <div className="sm:px-8 mb-4 text-center">
                <h3 className="pt-4 mb-2 text-lg sm:text-2xl">
                  Forgot Your Password?
                </h3>
                <p className="mb-4 text-sm text-gray-700">
                  We get it, stuff happens. Just enter your email address below
                  and we'll send you a link to reset your password!
                </p>
              </div>
              <form
                className="sm:px-8 pt-6 pb-8 mb-4 bg-white rounded"
                onSubmit={onSubmit}
              >
                <div className="mb-4">
                  <label className="block mb-2 text-sm font-bold text-gray-700">
                    Email
                  </label>
                  <input
                    className="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                    id="email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter Email Address..."
                    required
                  />
                </div>
                <div className="mb-6 text-center">
                  <button
                    className="w-full px-4 py-2 font-bold text-white bg-green-500 rounded-full hover:bg-green-700 focus:outline-none focus:shadow-outline"
                    type="submit"
                  >
                    Reset Password
                  </button>
                </div>
                <hr className="mb-6 border-t" />
                <div className="text-center">
                  <a
                    className="inline-block text-sm text-green-800 align-baseline hover:text-green-500"
                    href="/sign-up"
                  >
                    Create an Account!
                  </a>
                </div>
                <div className="text-center">
                  <a
                    className="inline-block text-sm text-green-800 align-baseline hover:text-green-500"
                    href="/sign-in"
                  >
                    Already have an account? Login!
                  </a>
                </div>
              </form>
            </div>
            <img
              className="w-full h-full object-cover bg-gray-400 hidden lg:block lg:w-1/2 bg-cover rounded-l-lg"
              src={sellCategoryImage}
              alt="banner"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default ForgotPassword;
