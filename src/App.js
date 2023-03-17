import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Navbar from "./components/Navbar";
import PrivateRoute from "./components/PrivateRoute";
import Explore from "./pages/Explore";
import Offers from "./pages/Offers";
// import Category from './pages/Category'
import Profile from "./pages/Profile";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import ForgotPassword from "./pages/ForgotPassword";
import CreateListing from "./pages/CreateListing";
// import EditListing from './pages/EditListing'
// import Listing from './pages/Listing'
import Contact from "./pages/Contact";
import NoInternet from "./components/NoInternet";
import { useEffect, useState } from "react";

function App() {
  const [isOnline, setIsOnline] = useState(navigator.onLine);

  useEffect(() => {
    const handleNetworkChange = () => {
      setIsOnline(navigator.onLine);
    };

    window.addEventListener("online", handleNetworkChange);
    window.addEventListener("offline", handleNetworkChange);

    return () => {
      window.removeEventListener("online", handleNetworkChange);
      window.removeEventListener("offline", handleNetworkChange);
    };
  }, []);

  return (
    <>
      <div>{!isOnline && <NoInternet />}</div>

      {isOnline && (
        <div className="App sm:bg-[#f2f4f8] m-0 p-0 w-full h-full">
          <Router>
            <Routes>
              <Route path="/" element={<Explore />} />
              <Route path="/offers" element={<Offers />} />
              <Route path="/sign-in" element={<SignIn />} />
              <Route path="/sign-up" element={<SignUp />} />
              <Route path="/forgot-password" element={<ForgotPassword />} />
              <Route path="/profile" element={<PrivateRoute />}>
                <Route path="/profile" element={<Profile />} />
              </Route>
              <Route path="/create-listing" element={<PrivateRoute />}>
                <Route path="/create-listing" element={<CreateListing />} />
              </Route>

              <Route path="/contact" element={<Contact />} />

              {/* 
          <Route path='/category/:categoryName' element={<Category />} />
          <Route path='/edit-listing/:listingId' element={<EditListing />} />
          <Route
          path='/category/:categoryName/:listingId'
          element={<Listing />}
          />
          
        */}
            </Routes>
          </Router>

          <ToastContainer />
        </div>
      )}
      <Navbar />
    </>
  );
}

export default App;
