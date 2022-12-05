import sellCategoryImage from "../assets/jpg/sellCategoryImage.jpg";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import {
  getAuth,
  createUserWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { toast } from "react-toastify";
import { setDoc, doc, serverTimestamp } from "firebase/firestore";
import { db } from "../firebase.config";
import OAuth from "../components/OAuth";

function Register() {
  const navigate = useNavigate();
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

    try {
      const auth = getAuth();

      if (password !== password2) {
        toast.error("The two passwords do not match!");
      }

      const userCredentials = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );

      const user = userCredentials.user;
      updateProfile(auth.currentUser, {
        displayName: name,
      });

      const formDataCopy = { ...formData };
      delete formDataCopy.password;
      formDataCopy.timestamp = serverTimestamp();

      await setDoc(doc(db, "users", user.uid), formDataCopy);
      navigate("/");
    } catch (error) {
      toast.error("Sorry something went wrong");
    }
  };

  return (
    <>
      <section className="h-full bg-gray-200 md:h-screen">
        <div className="container md:py-12 md:px-6 h-full">
          <div className="flex justify-center items-center flex-wrap h-full g-6 text-gray-800">
            <div className="xl:w-10/12">
              <div className="block bg-white shadow-lg rounded-lg">
                <div className="lg:flex lg:flex-wrap g-0">
                  <div className="lg:w-6/12 px-4 md:px-0">
                    <div className="md:p-12 md:mx-6">
                      <div className="text-center">
                        <img
                          className="mx-auto w-40"
                          src="../assets/memories-ii.png"
                          alt="logo"
                        />
                      </div>
                      <form onSubmit={onSubmit}>
                        <p className="my-4 text-center">
                          Create an account to discover or launch homes for sale
                          or rent
                        </p>
                        <div className="mb-4">
                          <input
                            type="text"
                            className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                            placeholder="Full Name"
                            name="name"
                            value={name}
                            onChange={onChange}
                            required
                          />
                        </div>
                        <div className="mb-4">
                          <input
                            type="email"
                            className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                            placeholder="Email"
                            name="email"
                            value={email}
                            onChange={onChange}
                            required
                          />
                        </div>
                        <div className="mb-4">
                          <input
                            type="password"
                            className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                            placeholder="Password"
                            name="password"
                            value={password}
                            onChange={onChange}
                            required
                          />
                        </div>

                        <div className="mb-4">
                          <input
                            type="password"
                            className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                            placeholder="Confirm Password"
                            name="password2"
                            value={password2}
                            onChange={onChange}
                            required
                          />
                        </div>

                        <div className="text-center pt-1 mb-12 pb-1">
                          <button
                            className="inline-block px-6 py-2.5 text-black font-medium text-xs leading-tight rounded shadow-md hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out w-full mb-3"
                            type="submit"
                          >
                            Sign up
                          </button>
                        </div>
                        <div className="flex items-center justify-between pb-6">
                          <p
                            className="mb-0 cursor-pointer text-sm text-black-500 align-baseline hover:text-blue-800"
                            onClick={() => navigate("/sign-in")}
                          >
                            Already have an account? Login!
                          </p>

                          <p
                            className="text-sm text-black-500 align-baseline hover:text-blue-800 text-right cursor-pointer"
                            onClick={() => navigate("/forgot-password")}
                          >
                            Forgot password?
                          </p>
                        </div>

                        <div className="flex items-center my-2 before:flex-1 before:border-t before:border-gray-300 before:mt-0.5 after:flex-1 after:border-t after:border-gray-300 after:mt-0.5">
                          <p className="text-center font-semibold mx-4 mb-0">
                            OR
                          </p>
                        </div>
                        <OAuth />
                      </form>
                    </div>
                  </div>
                  <div className="lg:w-6/12  md:flex">
                    <img
                      src={sellCategoryImage}
                      alt="Banner"
                      className="object-cover w-full h-full"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Register;
