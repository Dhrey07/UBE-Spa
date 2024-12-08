import SubHero from "../../component/SubHero/SubHero";
import Footer from "../../component/Footer/Footer";
// import { useState } from "react";
import ImageTwo from "../../assets/aboutoil.png";
import styles from "./Getstarted.module.css";
// import { Grid } from "@mui/material";
import { useState } from "react";
import { Box } from "@mui/material";
import { Icon } from "@iconify-icon/react";
import Modal from "../../component/Modal";
import Grid from "@mui/material/Grid2";
import GalleryOne from "../../assets/galleryone.png";
import Button from "../../component/Button/Button";
import Beards from "../../assets/beards.png";
import NailGallery from "../../assets/nailfour.png";
import BeardsFive from "../../assets/beardsfive.png";
import BackMassage from "../../assets/backmassage.png";
import EyeBrow from "../../assets/eyebrowgallery.png";
// import { Icon } from "@iconify-icon/react";
// import {
//   useMediaQuery,
//   useTheme,
//   Box,
//   Stepper,
//   Step,
//   StepLabel,
//   Typography,
//   Button,
//   Grid,
// } from "@mui/material";

const Getstarted = () => {
  const [loading, setLoading] = useState(true);
  const [scheduleModal, setScheduleModal] = useState(false);
  const handleIframeLoad = () => {
    setLoading(false);
  };

  const handleSchduleModal = () => {
    setScheduleModal(!scheduleModal);
  };

  const handleCloseModal = () => {
    setScheduleModal(false);
  };

  return (
    <div>
      <SubHero title="About Us" />
      <div className={styles.valuemargin}>
        <div className={styles.marginonly}>
          <div className={styles.flexitemstwo}>
            <div className={styles.servicestext}>
              <h1>
                WELCOME TO UNLIMITED BEAUTY EMPIRE, INDIANAPOLIS’ PREMIER
                ALL-IN-ONE LUXURY SALON AND SPA, DESIGNED TO BRING YOU EVERY
                BEAUTY SERVICE UNDER ONE ROOF.
              </h1>
              <h4>
                We believe that self-care and beauty should be a relaxing,
                convenient, and indulgent experience, whether you’re seeking a
                fresh haircut, a rejuvenating facial, or a total makeover.
              </h4>
              <h4 className={styles.secondpara}>
                At Unlimited Beauty Empire, we’re more than just a salon; we’re
                a sanctuary. Our newly built, modern space is dedicated to
                meeting the unique beauty needs of every client, all in one
                convenient location. We offer a full range of services, from
                hairstyling and wig installations to professional makeup, nail
                care, waxing, and body enhancements. With skilled specialists in
                every field — from lash artists and aestheticians to nail
                technicians and barbers — we are here to make you feel
                confident, radiant, and pampered.
              </h4>
            </div>
            <div className={styles.servicesimg}>
              <img src={ImageTwo} alt="" />
            </div>
          </div>
          <div className={styles.serviceheader}>
            <h4>VIEW OUR GALLERY</h4>
            <p>
              We’re proud to be a destination where you can relax, recharge, and
              walk out feeling your best. Whether you’re getting ready for a
              special event, treating yourself to a spa day, or simply enhancing
              your everyday style, we’re here to make every step of your beauty
              journey easy, enjoyable, and luxurious. Welcome to your new beauty
              home. Welcome to Unlimited Beauty Empire.
            </p>
          </div>
          <div className={styles.mainservice}>
            <Grid
              container
              rowSpacing={1} columnSpacing={2}
              sx={{
                // justifyContent: { xs: "center" },
                textAlign: { xs: "center" },
              }}
            >
              <Grid size={{ lg: 4, md: 4, sm: 6, xs: 12 }}>
                <div className={styles.gallery}>
                  <img src={GalleryOne} alt="1st gallery" />
                </div>
              </Grid>
              <Grid size={{ lg: 8, md: 8, sm: 6, xs: 12 }}>
                <Grid container rowSpacing={1.3} columnSpacing={2} >
                  <Grid size={{ lg: 6, md: 6, sm: 12, xs: 12 }}>
                    <Grid container rowSpacing={1.4} columnSpacing={2}>
                      <Grid size={{ lg: 12, md: 12, sm: 12, xs: 12 }}>
                        <div className={styles.gallery}>
                          <img src={Beards} alt="2nd gallery" />
                        </div>
                      </Grid>
                      <Grid size={{ lg: 12, md: 12, sm: 12, xs: 12 }}>
                        <div className={styles.gallery}>
                          <img src={Beards} alt="2nd gallery" />
                        </div>
                      </Grid>
                    </Grid>
                  </Grid>
                  <Grid size={{ lg: 6, md: 6, sm: 12, xs: 12 }}>
                    <div className={styles.gallery}>
                      <img src={NailGallery} alt="4th gallery" />
                    </div>
                  </Grid>
                  <Grid size={{ lg: 12, md: 12, sm: 12, xs: 12 }}>
                    <div className={styles.gallery}>
                      <img src={BeardsFive} alt="5th gallery" />
                    </div>
                  </Grid>
                  <Grid size={{ lg: 6, md: 6, sm: 12, xs: 12 }}>
                    <div className={styles.gallery}>
                      <img src={BackMassage} alt="6th gallery" />
                    </div>
                  </Grid>
                  <Grid size={{ lg: 6, md: 6, sm: 12, xs: 12 }}>
                    <div className={styles.gallery}>
                      <img src={EyeBrow} alt="7th gallery" />
                    </div>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </div>
          <div className={styles.elevateheader}>
            <h4>MEET OUR TEAM</h4>
            <p>
              Our talented team takes pride in delivering personalized care and
              exceptional results, helping you express your unique beauty with
              every visit.
            </p>
          </div>
          <div className={styles.mainservice}>
            <Grid
              container
              spacing={2}
              sx={{
                justifyContent: { xs: "center" },
                textAlign: { xs: "center" },
              }}
            >
              <Grid size={{ lg: 3, md: 4, sm: 6, xs: 12 }}>
                <div className={styles.team1}>
                  <div className={styles.aboutservice}>
                    <h4>Aminat Adams</h4>
                    <p>CEO</p>
                  </div>
                </div>
              </Grid>
              <Grid size={{ lg: 3, md: 4, sm: 6, xs: 12 }}>
                <div className={styles.team1}>
                  <div className={styles.aboutservice}>
                    <h4>Aminat Adams</h4>
                    <p>CEO</p>
                  </div>
                </div>
              </Grid>
              <Grid size={{ lg: 3, md: 4, sm: 6, xs: 12 }}>
                <div className={styles.team1}>
                  <div className={styles.aboutservice}>
                    <h4>Aminat Adams</h4>
                    <p>CEO</p>
                  </div>
                </div>
              </Grid>
              <Grid size={{ lg: 3, md: 4, sm: 6, xs: 12 }}>
                <div className={styles.team1}>
                  <div className={styles.aboutservice}>
                    <h4>Aminat Adams</h4>
                    <p>CEO</p>
                    {/* <p>
                    Indulge in the ultimate pampering experience with our
                    Tranquil Radiance Facial
                  </p> */}
                  </div>
                </div>
              </Grid>
            </Grid>
          </div>
          <div className={styles.unveil}>
            <h4>
              Ready to unveil your true radiance? Look no further than Unlimite
              d Beauty Empire, your oasis of elegance & serenity. Our array of
              curated services is designed to elevate your spirit.
            </h4>
            <div className={styles.unveilbtn}>
              <Button
                onClick={handleSchduleModal}
                title="BOOK YOUR VISIT"
              />
            </div>
          </div>
        </div>
      </div>
      <Modal
        title=""
        modalContent={
          <>
            <Box sx={{ textAlign: "center", marginTop: "50px" }}>
              <a
                href="https://www.schedulicity.com/scheduling/UBE45J9"
                title="Online scheduling"
                target="_blank"
              >
                <img
                  src="https://cdn.schedulicity.com/images/user-widget-buttons/schedule-btn-huckleberry-med-v2.svg"
                  alt="Online scheduling"
                  title="Online scheduling"
                  border="0"
                />
              </a>
              <div
                style={{
                  position: "relative",
                  backgroundColor: "white",
                  width: "100%",
                  height: "100%",
                }}
              >
                {loading && (
                  <Icon
                    icon="svg-spinners:tadpole"
                    width="60"
                    height="60"
                    style={{ color: "#FF69B4", marginTop: "100px" }}
                  />
                )}
                <iframe
                  title="Schedulicity Widget"
                  src="//www.schedulicity.com/scheduling/UBE45J9/services?embed=true"
                  style={{
                    border: "none",
                    width: "100%",
                    height: "100%",
                    minHeight: "480px",
                    padding: "0",
                    margin: "20px 0px 0px 0px",
                    zIndex: "1",
                    opacity: loading ? 0 : 1,
                    transition: "opacity 0.3s ease",
                  }}
                  onLoad={handleIframeLoad}
                  // eslint-disable-next-line react/no-unknown-property
                  allowTransparency="true"
                  frameBorder="0"
                />
              </div>
            </Box>
          </>
        }
        modalFooter={
          <>
          </>
        }
        isopen={scheduleModal}
        closeModal={handleCloseModal}
      />
      <Footer />
    </div>
  );
};

export default Getstarted;
