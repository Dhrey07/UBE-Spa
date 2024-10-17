import styles from "./SubHero.module.css";
// import Grid2 from "@mui/material/Grid";
import Navbar from "../NavBar/Navbar";

const SubHero = () => {
  return (
    <div className={styles.herocont}>
      <Navbar />
      <div className={styles.herotextcont}>
        <div className={styles.herotext}>
          {/* <p>TAGLINE</p> */}
          <h1>Book Your Appointment</h1>
        </div>
      </div>
    </div>
  );
};

export default SubHero;
