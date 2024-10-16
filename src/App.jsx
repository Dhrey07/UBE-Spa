import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import About from "./component/About/About";
import CoreValue from "./component/CoreValue/CoreValue";
import Footer from "./component/Footer/Footer";
import Hero from "./component/Hero/Hero";
import Services from "./component/Services/Services";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<>
          <Hero />
          <About />
          <Services />
          <CoreValue />
          <Footer />
        </>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
