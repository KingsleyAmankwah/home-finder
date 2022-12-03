import sellCategoryImage from "../assets/jpg/sellCategoryImage.jpg";

function Register() {
  return (
    <>
      <section class="h-full gradient-form bg-gray-200 md:h-screen background-radial-gradient">
        <div class="container py-12 px-6 h-full">
          <div class="flex justify-center items-center flex-wrap h-full g-6 text-gray-800">
            <div class="xl:w-10/12">
              <div class="block bg-white shadow-lg rounded-lg">
                <div class="lg:flex lg:flex-wrap g-0">
                  <div class="lg:w-6/12 px-4 md:px-0">
                    <div class="md:p-12 md:mx-6">
                      <div className="text-center">
                        <img
                          className="mx-auto w-40"
                          src="../assets/memories-ii.png"
                          alt="logo"
                        />
                      </div>
                      <form>
                        <p class="mb-4">
                          Create an account to discover or launch homes for sale
                          or rent
                        </p>
                        <div class="mb-4">
                          <input
                            type="text"
                            class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                            placeholder="Full Name"
                            name="name"
                            required
                          />
                        </div>
                        <div class="mb-4">
                          <input
                            type="email"
                            class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                            placeholder="Email"
                            name="email"
                            required
                          />
                        </div>
                        <div class="mb-4">
                          <input
                            type="password"
                            class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                            placeholder="Password"
                            name="password"
                            required
                          />
                        </div>

                        <div class="mb-4">
                          <input
                            type="password"
                            class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                            placeholder="Confirm Password"
                            name="password2"
                            required
                          />
                        </div>

                        <div class="text-center pt-1 mb-12 pb-1">
                          <button
                            class="inline-block px-6 py-2.5 text-black font-medium text-xs leading-tight uppercase rounded shadow-md hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out w-full mb-3"
                            type="submit"
                          >
                            Register
                          </button>
                          {/* <a class="text-gray-500" href="#!">
                            Forgot password?
                          </a> */}
                        </div>
                        <div class="flex items-center justify-between pb-6">
                          <p class="mb-0 mr-2">Already have an account?</p>
                          <a
                            href="/sign-in"
                            class="inline-block px-6 py-2 text-black font-medium text-xs leading-tight rounded bg-black bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out"
                          >
                            Sign-in
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

export default Register;
