import sellCategoryImage from "../assets/jpg/sellCategoryImage.jpg";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { setDoc, doc, serverTimestamp } from "firebase/firestore";
import {
  getAuth,
  createUserWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { toast } from "react-toastify";
import Spinner from "../components/Spinner";
import { db } from "../firebase-config";

function Register() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    password2: "",
  });

  const { name, email, password, password2 } = formData;

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const auth = getAuth();

    if (password !== password2) {
      toast.error("The two passwords do not match!");
      setLoading(false);
      return;
    }
    createUserWithEmailAndPassword(auth, email, password)
      .then(async (userCredential) => {
        // Signed in
        const user = userCredential.user;

        updateProfile(auth.currentUser, {
          displayName: name,
        });
        const formDataCopy = { ...formData };
        delete formDataCopy.password;
        delete formDataCopy.password2;
        formDataCopy.timestamp = serverTimestamp();

        await setDoc(doc(db, "users", user.uid), formDataCopy);

        setLoading(false);
        toast.success(`${user.email} registered succesfully!`);
        navigate("/");
      })
      .catch((error) => {
        const errorMessage = error.message;
        const errorCode = errorMessage.match(/auth\/\S+/)[0].split("/")[1];
        const errorName = errorCode.replace(/-/g, " ");
        const capitalizedErrorName =
          errorName.charAt(0).toUpperCase() + errorName.slice(1);
        toast.error(capitalizedErrorName.slice(0, -1));
        setLoading(false);
      });
  };

  if (loading) {
    return <Spinner />;
  }

  return (
    <>
      <div className="container py-[5rem] mx-auto">
        <div className="flex justify-center items-center h-full px-6">
          <div className="w-full xl:w-3/4 lg:w-11/12 flex">
            <div className="w-full lg:w-1/2 bg-white p-5 rounded-lg lg:rounded-l-none">
              <img
                className="mx-auto w-10"
                src={sellCategoryImage}
                alt="logo"
              />
              <div className="sm:px-8 mb-4 text-left">
                <h3 className="pt-4 mb-2 sm:text-3xl text-lg">
                  Welcome to HomeFinder
                </h3>
                <p className="mb-4 text-sm text-gray-700">
                  Create an account to discover or launch homes for sale or rent
                </p>
              </div>
              <form
                className="sm:px-8 sm:pt-6 pb-8 mb-4 bg-white rounded"
                onSubmit={onSubmit}
              >
                <div className="mb-4">
                  <label className="block mb-2 text-sm font-bold text-gray-700">
                    Full Name
                  </label>
                  <input
                    className="w-full px-3 py-2 placeholder:text-md text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                    name="name"
                    type="text"
                    value={name}
                    onChange={onChange}
                    placeholder="Jane Doe"
                  />
                </div>
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
                <div className="mb-4">
                  <label className="block mb-2 text-sm font-bold text-gray-700">
                    Confirm Password
                  </label>
                  <input
                    className="w-full px-3 py-2 text-sm placeholder:text-2xl leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                    name="password2"
                    type="password"
                    value={password2}
                    onChange={onChange}
                    placeholder="........"
                  />
                </div>
                <div className="mb-6 text-center">
                  <button
                    className="bg-green-500  hover:bg-green-700 inline-block px-6 py-2.5 text-white font-medium text-xs leading-tight rounded-xl shadow-md hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out w-full mb-3"
                    type="submit"
                  >
                    Sign Up
                  </button>
                </div>
                <div className="flex items-center flex-col sm:flex-row justify-around pb-6">
                  <p
                    className="text-sm text-green-800 align-baseline hover:text-green-500  cursor-pointer"
                    onClick={() => navigate("/sign-in")}
                  >
                    Already have an Account? Login!
                  </p>

                  <p
                    className="text-sm text-green-800 align-baseline hover:text-green-500 pt-3 sm:pt-0 cursor-pointer"
                    onClick={() => navigate("/forgot-password")}
                  >
                    Forgot password?
                  </p>
                </div>
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

export default Register;
