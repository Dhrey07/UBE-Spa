import styles from "./Hero.module.css";
// import Grid2 from "@mui/material/Grid";
import Navbar from "../NavBar/Navbar";
import { useNavigate } from "react-router-dom";
import Button from "../Button/Button";
import PropTypes from "prop-types";

const Hero = ({ servicesRef }) => {
  const navigate = useNavigate();
  return (
    <div className={styles.herocont}>
      <Navbar servicesRef={servicesRef} />
      <div className={styles.herotextcont}>
        <div className={styles.herotext}>
          {/* <p>TAGLINE</p> */}
          <h1>Elegance and Wellness in Perfect Harmony</h1>
          <div className={styles.btnstyle}>
              <Button onClick={() => navigate("/get-started")} title="BOOK YOUR VISIT" />
            </div>
        </div>
      </div>
    </div>
  );
};

Hero.propTypes = {
  servicesRef: PropTypes.shape({ current: PropTypes.instanceOf(Element) }).isRequired,
};

export default Hero;
