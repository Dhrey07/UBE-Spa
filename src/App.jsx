// src/App.js
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { useRef } from "react";
import About from "./component/About/About";
import CoreValue from "./component/CoreValue/CoreValue";
import Footer from "./component/Footer/Footer";
import Hero from "./component/Hero/Hero";
import Services from "./component/Services/Services";
import PageLoader from "./component/PageLoading/Pageloade";
import Getstarted from "./pages/getstarted/Getstarted";
import ContactUs from "./pages/contactus/Contact";

function App() {
  const servicesRef = useRef(null);
  return (
    <BrowserRouter>
      <PageLoader>
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
                <Footer />
              </>
            }
          />
          <Route path="/get-started" element={<Getstarted />} />
          <Route path="/contact-us" element={<ContactUs />} />
        </Routes>
      </PageLoader>
    </BrowserRouter>
  );
}

export default App;
