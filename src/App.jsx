import { Route, Routes, useLocation } from "react-router-dom";
import React, { useRef, useState, useEffect } from "react";
import "./App.css";
import Footer from "./component/Footer/Footer";
import Hero from "./component/Hero/Hero";
import PageLoader from "./component/PageLoading/Pageloade";

// Lazy load components
const About = React.lazy(() => import("./component/About/About"));
const CoreValue = React.lazy(() => import("./component/CoreValue/CoreValue"));
const Services = React.lazy(() => import("./component/Services/Services"));
const Getstarted = React.lazy(() => import("./pages/getstarted/Getstarted"));
const ContactUs = React.lazy(() => import("./pages/contactus/Contact"));

function App() {
  const servicesRef = useRef(null);
  const [loading, setLoading] = useState(false);
  const location = useLocation();

  // Track route changes and show loader
  useEffect(() => {
    setLoading(true); // Show the loader when the route changes
    const timer = setTimeout(() => setLoading(false), 5000); // Simulate loading for smooth transitions
    return () => clearTimeout(timer); // Clear timeout on unmount
  }, [location]);

  return (
    <>
      {loading && <PageLoader />}
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Hero servicesRef={servicesRef} />
              <About />
              <div ref={servicesRef}>
                <Services />
              </div>
              <CoreValue />
              <Footer servicesRef={servicesRef} />
            </>
          }
        />
        <Route path="/about-us" element={<Getstarted />} />
        <Route path="/contact-us" element={<ContactUs />} />
      </Routes>
    </>
  );
}

export default App;
