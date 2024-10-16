import styles from "./Footer.module.css";
import { Grid } from "@mui/material";
import FooterLogo from "../../assets/footerlogo.svg";
import Instagram from "../../assets/instagram.svg";
import Facebook from "../../assets/facebook.svg";
import Gmail from "../../assets/mail.svg";
import Button from "../Button/Button";
import { useNavigate } from "react-router-dom";

const Footer = () => {
  const navigate = useNavigate();

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
              <p>Categories</p>
              <p>Contacts</p>
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
                <img src={Instagram} alt="" />
                <img src={Facebook} alt="" />
                <img src={Gmail} alt="" />
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

export default Footer;
