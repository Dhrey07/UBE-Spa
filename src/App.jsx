// src/App.js
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import About from "./component/About/About";
import CoreValue from "./component/CoreValue/CoreValue";
import Footer from "./component/Footer/Footer";
import Hero from "./component/Hero/Hero";
import Services from "./component/Services/Services";
import PageLoader from "./component/PageLoading/Pageloade";
import Getstarted from "./pages/getstarted/Getstarted";

function App() {
  return (
    <BrowserRouter>
      <PageLoader>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Hero />
                <About />
                <Services />
                <CoreValue />
                <Footer />
              </>
            }
          />
          <Route path="/get-started" element={<Getstarted />} />
        </Routes>
      </PageLoader>
    </BrowserRouter>
  );
}

export default App;
