import sellCategoryImage from "../assets/jpg/sellCategoryImage.jpg";
import { useNavigate } from "react-router-dom";
import OAuth from "../components/OAuth";
function SignIn() {
  const navigate = useNavigate();

  return (
    <>
      <section className="h-full bg-gray-200 md:h-screen">
        <div className="container md:py-12 md:px-6 h-full">
          <div className="flex justify-center items-center flex-wrap h-full g-6 text-gray-800">
            <div className="xl:w-10/12">
              <div className="w-full bg-white shadow-lg rounded-lg">
                <div className="lg:flex lg:flex-wrap g-0">
                  <div className=" lg:w-6/12 px-4 md:px-0">
                    <div className="md:p-12 md:mx-6">
                      <div className="text-center">
                        <img
                          className="mx-auto w-40"
                          src="../assets/memories-ii.png"
                          alt="logo"
                        />
                        <h4 className="text-xl font-semibold my-5 pb-1">
                          Welcome back!
                        </h4>
                      </div>
                      <form>
                        <p className="my-4">Please login to your account</p>
                        <div className="mb-4">
                          <input
                            type="email"
                            className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                            name="email"
                            placeholder="Email"
                            required
                          />
                        </div>
                        <div className="mb-4">
                          <input
                            type="password"
                            className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                            name="password"
                            placeholder="Password"
                            required
                          />
                        </div>
                        <div className="text-center pt-1 mb-5 pb-1">
                          <button
                            className="inline-block px-6 py-2.5 text-black font-medium text-xs leading-tight rounded shadow-md hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out w-full mb-3"
                            type="submit"
                          >
                            Log in
                          </button>
                        </div>

                        <div className="flex items-center justify-between pb-6">
                          <p
                            className="text-sm text-black-500 align-baseline hover:text-blue-800 text-sm cursor-pointer"
                            onClick={() => navigate("/sign-up")}
                          >
                            Create an Account
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
                        <OAuth/>
                      </form>
                    </div>
                  </div>
                  <div className="lg:w-6/12 md:flex">
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

export default SignIn;
