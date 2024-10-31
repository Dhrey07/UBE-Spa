import styles from "./SubHero.module.css";
// import Grid2 from "@mui/material/Grid";
import Navbar from "../NavBar/Navbar";
import PropTypes from "prop-types";

const SubHero = ({ title, servicesRef }) => {
  return (
    <div className={styles.herocont}>
      <Navbar servicesRef={servicesRef} />
      <div className={styles.herotextcont}>
        <div className={styles.herotext}>
          {/* <p>TAGLINE</p> */}
          <h1>{title}</h1>
        </div>
      </div>
    </div>
  );
};

SubHero.propTypes = {
  title: PropTypes.string.isRequired,
  servicesRef: PropTypes.shape({ current: PropTypes.instanceOf(Element) }).isRequired,
};

export default SubHero;
