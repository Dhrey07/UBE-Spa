import styles from "./About.module.css";
import ImagePlayer from "../../assets/video.svg";

const About = () => {
  return (
    <div className={styles.aboutcont}>
      <div className={styles.aboutmain}>
        <div className={styles.aboutheader}>
          <h4>ABOUT UNLIMITED BEAUTY EMPIRE</h4>
          <p>
            Our journey began with a vision to create a sanctuary that goes
            beyond traditional spas, offering a unique experience that uplifts
            both the body and spirit.
          </p>
        </div>
        <div className={styles.aboutplayer}>
          <img src={ImagePlayer} alt="image player" />
        </div>
      </div>
    </div>
  );
};

export default About;
