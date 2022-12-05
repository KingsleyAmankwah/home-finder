import sellCategoryImage from "../assets/jpg/sellCategoryImage.jpg";
import { useNavigate } from "react-router-dom";
import OAuth from "../components/OAuth";
import { useState } from "react";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { toast } from "react-toastify";

function SignIn() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const { email, password } = formData;

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const onSubmit = async (e) => {
    e.preventDefault();

    try {
      const auth = getAuth();

      const userCredentials = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      if (userCredentials.user) {
        navigate("/");
        toast.success(`Logged In as ${userCredentials.name}`);
      }
    } catch (error) {
      toast.error("Invalid credentials");
    }
  };

  return (
    <>
      <div className="container my-[5rem] mx-auto">
        <div className="flex justify-center items-center h-full px-6">
          <div className="w-full xl:w-3/4 lg:w-11/12 flex">
            <div className="w-full lg:w-1/2 bg-white p-5 rounded-lg lg:rounded-l-none">
              <img
                className="mx-auto w-10"
                src={sellCategoryImage}
                alt="logo"
              />
              <div className="px-8 mb-4 text-left">
                <h3 className="pt-4 mb-2 text-3xl">Welcome back!</h3>
                <p className="mb-4 text-sm text-gray-700">
                  Please login to your account
                </p>
              </div>
              <form
                className="px-8 pt-6 pb-8 mb-4 bg-white rounded"
                onSubmit={onSubmit}
              >
                <div className="mb-4">
                  <label className="block mb-2 text-sm font-bold text-gray-700">
                    Email
                  </label>
                  <input
                    className="w-full px-3 py-2 placeholder:text-md text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                    name="email"
                    type="email"
                    value={email}
                    onChange={onChange}
                    placeholder="name@gmail.com"
                  />
                </div>
                <div className="mb-4">
                  <label className="block mb-2 text-sm font-bold text-gray-700">
                    Password
                  </label>
                  <input
                    className="w-full px-3 py-2 text-sm placeholder:text-2xl leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                    name="password"
                    type="password"
                    value={password}
                    onChange={onChange}
                    placeholder="........"
                  />
                </div>
                <div className="mb-6 text-center">
                  <button
                    className="bg-green-500  hover:bg-green-700 inline-block px-6 py-2.5 text-white font-medium text-xs leading-tight rounded-xl shadow-md hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out w-full mb-3"
                    type="submit"
                  >
                    Sign In
                  </button>
                </div>
                <div className="flex items-center justify-between pb-6">
                  <p
                    className="text-sm text-green-800 align-baseline hover:text-green-500  cursor-pointer"
                    onClick={() => navigate("/sign-up")}
                  >
                    Create an Account!
                  </p>

                  <p
                    className="text-sm text-green-800 align-baseline hover:text-green-500 text-right cursor-pointer"
                    onClick={() => navigate("/forgot-password")}
                  >
                    Forgot password?
                  </p>
                </div>

                <div className="flex items-center my-2 before:flex-1 before:border-t before:border-gray-300 before:mt-0.5 after:flex-1 after:border-t after:border-gray-300 after:mt-0.5">
                  <p className="text-center font-semibold mx-4 mb-0">OR</p>
                </div>
                <OAuth />
              </form>
            </div>

            <img
              className="w-full h-auto object-cover bg-gray-400 hidden lg:block lg:w-1/2 bg-cover rounded-l-lg"
              src={sellCategoryImage}
              alt="banner"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default SignIn;
