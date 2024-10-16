import styles from "./Hero.module.css";
// import Grid2 from "@mui/material/Grid";
import Navbar from "../NavBar/Navbar";


const Hero = () => {
  return (
    <div className={styles.herocont}>
      <Navbar />
      <div className={styles.herotext}>
        <p>TAGLINE</p>
        <h1>
        Elegance and Wellness
        in Perfect Harmony
        </h1>
      </div>
    </div>
  )
}

export default Hero;
