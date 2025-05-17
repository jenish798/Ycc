import { Routes, Route } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { Suspense, lazy } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import LoadingSpinner from "./components/LoadingSpinner";

// Lazy load pages for better performance
const LaunchPage = lazy(() => import("./pages/launch/LaunchPage"));
const Home = lazy(() => import("./pages/Home"));
const AboutUs = lazy(() => import("./pages/about-us/page"));
const Services = lazy(() => import("./pages/services/page"));
const WhoWeAre = lazy(() => import("./pages/who-we-are/page"));
const ContactUs = lazy(() => import("./pages/contact-us/page"));
const PreOrder = lazy(() => import("./pages/pre-order/page"));
const OrderTracking = lazy(() => import("./pages/order-tracking/page"));

const OrderBooking = lazy(() => import("./pages/OrderBooking"));

function App() {
  const location = useLocation();
  const isLaunchPage = false; //location.pathname === "/";
  return (
    <div className="flex flex-col min-h-screen">
      {!isLaunchPage && <Navbar />}
      <main className="flex-grow">
        <Suspense fallback={<LoadingSpinner />}>
          <Routes>
            {/* <Route path="/" element={<LaunchPage />} /> */}
            <Route path="/" element={<Home />} />
            <Route path="/about-us" element={<AboutUs />} />
            <Route path="/services" element={<Services />} />
            <Route path="/who-we-are" element={<WhoWeAre />} />
            <Route path="/contact-us" element={<ContactUs />} />
            <Route path="/pre-order" element={<PreOrder />} />
            <Route path="/order-booking" element={<OrderBooking />} />
            <Route path="/order-tracking" element={<OrderTracking />} />
          </Routes>
        </Suspense>
      </main>
      {!isLaunchPage && <Footer />}
    </div>
  );
}

export default App;
