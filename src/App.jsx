import { BrowserRouter, Route, Routes } from "react-router-dom";
import React, { Suspense, useRef } from "react";
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

  return (
    <BrowserRouter>
      <Suspense
        fallback={
          <PageLoader />
        }
      >
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
          <Route path="/get-started" element={<Getstarted />} />
          <Route path="/contact-us" element={<ContactUs />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
