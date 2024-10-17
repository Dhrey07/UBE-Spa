import styles from "./Footer.module.css";
import { Grid } from "@mui/material";
import FooterLogo from "../../assets/footerlogo.svg";
import Instagram from "../../assets/instagram.svg";
import Facebook from "../../assets/facebook.svg";
import Gmail from "../../assets/mail.svg";
import Button from "../Button/Button";

const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.footercont}>
        <Grid container spacing={2}>
          <Grid item lg={2} md={4} sm={4} xs={6}>
            <div className={styles.margintop}>
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
              <p>(219) 555-0114</p>

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
                <Button title="BOOK YOUR VISIT" />
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
