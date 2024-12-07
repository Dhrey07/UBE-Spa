import styles from "./About.module.css";
import ImagePlayer from "../../assets/video.svg";

const About = () => {
  return (
    <div className={styles.aboutcont}>
      <div className={styles.aboutmain}>
        <div className={styles.aboutheader}>
          <h4>ABOUT UNLIMITED BEAUTY EMPIRE</h4>
          <p>
            At Unlimited Beauty Empire, we believe beauty is more than just a
            service—it’s an experience. We’ve created a luxurious,
            fully-equipped salon and spa in Indianapolis where all your beauty
            needs can be met under one roof. Say goodbye to running from one
            appointment to the next. Here, you can enjoy a seamless, relaxing
            experience while enhancing your unique beauty, all in one place.
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
