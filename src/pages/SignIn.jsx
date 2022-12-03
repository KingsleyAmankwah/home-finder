import google from "../assets/jpg/google.png";
import sellCategoryImage from "../assets/jpg/sellCategoryImage.jpg";

function SignIn() {
  return (
    <>
      <section className="h-full bg-gray-200 md:h-screen">
        <div className="container py-12 px-6 h-full">
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
                          srcSet=""
                        />
                        <h4 className="text-xl font-semibold mt-1 mb-5 pb-1">
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
                            className="inline-block px-6 py-2.5 text-black font-medium text-xs leading-tight uppercase rounded shadow-md hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out w-full mb-3"
                            type="submit"
                          >
                            Log in
                          </button>

                          <a class="text-gray-500 text-right" href="#!">
                            Forgot password?
                          </a>
                        </div>

                        <div className="flex items-center my-2 before:flex-1 before:border-t before:border-gray-300 before:mt-0.5 after:flex-1 after:border-t after:border-gray-300 after:mt-0.5">
                          <p className="text-center font-semibold mx-4 mb-0">
                            OR
                          </p>
                        </div>
                        <a
                          className=" my-5 px-7 py-3 text-black font-medium text-sm leading-snug uppercase rounded shadow-md hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out w-full flex justify-center items-center"
                          href="#!"
                        >
                          <img
                            src={google}
                            alt="Logo"
                            className="w-8 h-8"
                            srcset=""
                          />{" "}
                          Continue with Google
                        </a>
                        <div className="flex items-center justify-between pb-6">
                          <p className="mb-0 mr-2">Don't have an account?</p>
                          <a
                            href="/sign-up"
                            className="inline-block px-6 py-2 text-black font-medium text-xs leading-tight rounded hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out"
                          >
                            Sign Up
                          </a>
                        </div>
                      </form>

                      <div className="text-center">
                        <a href="/" className="">
                          Back Home
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="lg:w-6/12  md:flex">
                    <img
                      src={sellCategoryImage}
                      alt="Banner"
                      srcset=""
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
