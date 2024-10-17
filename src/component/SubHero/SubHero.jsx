import styles from "./SubHero.module.css";
// import Grid2 from "@mui/material/Grid";
import Navbar from "../NavBar/Navbar";
import PropTypes from "prop-types";

const SubHero = ({ title }) => {
  return (
    <div className={styles.herocont}>
      <Navbar />
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
  title: PropTypes.string.isRequired
};

export default SubHero;
