import styles from "./Services.module.css";
import { Grid } from "@mui/material";
import ImageOne from "../../assets/fleximg1.svg";
import ImageTwo from "../../assets/fleximgtwo.svg";
import Button from "../Button/Button";
import { useNavigate } from "react-router-dom";

const Services = () => {
  const navigate = useNavigate();
  return (
    <div className={styles.servicecont}>
      <div className={styles.servicemargin}>
        <div className={styles.serviceheader}>
          <h4>OUR SERVICES</h4>
          <p>
            At Unlimited Beauty Empire, we offer a curated selection of services
            designed to envelop you in an atmosphere of elegance and serenity.
          </p>
        </div>
        <div className={styles.mainservice}>
          <Grid container spacing={2}>
            <Grid item lg={4} md={6} sm={12} xs={12}>
              <div className={styles.hairstyling}>
                <div className={styles.aboutservice}>
                  <h4>Hair Styling</h4>
                  <p>
                    Indulge in the ultimate pampering experience with our
                    Tranquil Radiance Facial
                  </p>
                </div>
              </div>
            </Grid>
            <Grid item lg={4} md={6} sm={12} xs={12}>
              <div className={styles.facialstyling}>
                <div className={styles.aboutservice}>
                  <h4>Facial Treatment</h4>
                  <p>
                    Our Serene Hot Stone Massage is a therapeutic escape that
                    transcends the ordinary.
                  </p>
                </div>
              </div>
            </Grid>
            <Grid item lg={4} md={6} sm={12} xs={12}>
              <div className={styles.nailstyling}>
                <div className={styles.aboutservice}>
                  <h4>Nails</h4>
                  <p>
                    Our Elegance Renewal Package, an experience designed to
                    revitalise your entire being.
                  </p>
                </div>
              </div>
            </Grid>
            <Grid item lg={4} md={6} sm={12} xs={12}>
              <div className={styles.waxstyling}>
                <div className={styles.aboutservice}>
                  <h4>Waxing</h4>
                  <p>
                    Indulge in the ultimate pampering experience with our
                    Tranquil Radiance Facial
                  </p>
                </div>
              </div>
            </Grid>
            <Grid item lg={4} md={6} sm={12} xs={12}>
              <div className={styles.bodystyling}>
                <div className={styles.aboutservice}>
                  <h4>Body Massage</h4>
                  <p>
                    Our Serene Hot Stone Massage is a therapeutic escape that
                    transcends the ordinary.
                  </p>
                </div>
              </div>
            </Grid>
            <Grid item lg={4} md={6} sm={12} xs={12}>
              <div className={styles.eyestyling}>
                <div className={styles.aboutservice}>
                  <h4>Eyebrows & Threading</h4>
                  <p>
                    Our Elegance Renewal Package, an experience designed to
                    revitalise your entire being.
                  </p>
                </div>
              </div>
            </Grid>
          </Grid>
          <div className={styles.flexitems}>
            <div className={styles.servicesimmg}>
              <img src={ImageOne} alt="" />
            </div>
            <div className={styles.servicestext}>
              <h4>
                We invite you to step into a world where elegance and
                tranquility converge to create an exceptional beauty and spa
                experience.
              </h4>
              <div className={styles.servicebtn}>
                <Button onClick={() => navigate("/get-started")} title="GET STARTED" />
              </div>
            </div>
          </div>
          <div className={styles.flexitemstwo}>
            <div className={styles.servicestext}>
              <h4>
                Our dedication to holistic well-being is at the heart of
                everything we do, and its embodied in the luxurious services we
                offer.
              </h4>
              <div className={styles.servicebtn}>
                <Button onClick={() => navigate("/get-started")} title="GET STARTED" />
              </div>
            </div>
            <div className={styles.servicesimg}>
              <img src={ImageTwo} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
