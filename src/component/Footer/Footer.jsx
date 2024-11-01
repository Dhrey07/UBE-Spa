import styles from "./Footer.module.css";
import { Grid } from "@mui/material";
import FooterLogo from "../../assets/footerlogo.svg";
import Instagram from "../../assets/instagram.svg";
import Tiktok from "../../assets/tiktok.svg";
import Snapchat from "../../assets/snapchat.png";
import Gmail from "../../assets/mail.svg";
import Button from "../Button/Button";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";

const Footer = ({ servicesRef }) => {
  const navigate = useNavigate();
  const handleServicesClick = () => {
    if (location.pathname === "/") {
      servicesRef.current.scrollIntoView({ behavior: "smooth" });
    } else {
      navigate("/", { replace: true });
      setTimeout(() => {
        servicesRef.current.scrollIntoView({ behavior: "smooth" });
      }, 100);
    }
  };

  const smoothScrollToTop = () => {
    const scrollDuration = 1000; // Set the duration in milliseconds (1000ms = 1 second)
  
    const scrollStep = -window.scrollY / (scrollDuration / 15);
    const scrollInterval = setInterval(() => {
      if (window.scrollY !== 0) {
        window.scrollBy(0, scrollStep);
      } else {
        clearInterval(scrollInterval);
      }
    }, 40); // The interval of scrolling (15ms for smoothness)
  };
  return (
    <div className={styles.footer}>
      <div className={styles.footercont}>
        <Grid container spacing={2}>
          <Grid item lg={2} md={4} sm={4} xs={6}>
            <div
              onClick={() => {
                navigate("/");
                smoothScrollToTop();
              }}
              className={styles.margintop}
            >
              <img src={FooterLogo} alt="" />
            </div>
          </Grid>
          <Grid item lg={3} md={4} sm={4} xs={6}>
            <div className={styles.footerinfo}>
              <h4>INFO</h4>
              <p>About Us</p>
              <p onClick={handleServicesClick}>Services</p>
              <p onClick={() => navigate("/contact-us")}>Contact</p>
            </div>
          </Grid>
          <Grid
            item
            lg={1}
            md={4}
            sm={12}
            xs={6}
            sx={{
              "@media (max-width: 500px)": {
                display: "none",
              },
            }}
          >
            <div className={styles.verticalinfo}></div>
          </Grid>
          <Grid item lg={3} md={4} sm={4} xs={6}>
            <div className={styles.footerinfo}>
              <h4>Contact us</h4>
              <p>+1 (317) 222-4515</p>

              <div className={styles.follow}>
                <h4>Follow Us</h4>
              </div>
              <div className={styles.footersocials}>
                <a href="https://www.instagram.com/unlimitedbeautyempire?igsh=MW1mbWY4d3ljNHJ1eQ==" target="_blank"><img src={Instagram} alt="" /></a>
                <a href="https://www.tiktok.com/@unlimitedbeautyempire" target="_blank"><img src={Tiktok} alt="" /></a>
                <a href="https://www.snapchat.com/add/unlimitedsalon?share_id=anB8-yOcMlI&locale=en-US" target="_blank"><img src={Snapchat} alt="" /></a>
                <a href="mailto:Unlimitedbeautyempire@gmail.com"><img src={Gmail} alt="" /></a>
              </div>
            </div>
          </Grid>
          <Grid item lg={3} md={4} sm={4} xs={6}>
            <div className={styles.footerinfo}>
              <div className={styles.unveilbtn}>
                <Button
                  onClick={() => navigate("/get-started")}
                  title="BOOK YOUR VISIT"
                />
              </div>
            </div>
          </Grid>
        </Grid>
      </div>
      <div className={styles.footercont}>
        <div className={styles.footerbottom}>
          <p>© 2024 — Copyright All Right Reserved.</p>
          <p>Privacy Policy</p>
        </div>
      </div>
    </div>
  );
};

Footer.propTypes = {
  servicesRef: PropTypes.shape({ current: PropTypes.instanceOf(Element) }).isRequired,
};


export default Footer;
