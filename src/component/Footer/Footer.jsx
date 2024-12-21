import styles from "./Footer.module.css";
import { Grid, Box } from "@mui/material";
import FooterLogo from "../../assets/footerlogo.svg";
import Instagram from "../../assets/instagram.svg";
import Tiktok from "../../assets/tiktok.svg";
import Snapchat from "../../assets/snapchat.png";
import Gmail from "../../assets/mail.svg";
import Button from "../Button/Button";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import { useState, startTransition } from "react";
import Modal from "../Modal";
import { Icon } from "@iconify-icon/react";

const Footer = ({ servicesRef }) => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [scheduleModal, setScheduleModal] = useState(false);
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

  
  const handleIframeLoad = () => {
    setLoading(false);
  };

  const handleSchduleModal = () => {
    setScheduleModal(!scheduleModal);
  };

  const handleCloseModal = () => {
    setScheduleModal(false);
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

  const handleRouteChange = (path) => {
    startTransition(() => {
      navigate(path);
      smoothScrollToTop();
    });
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
              <h4>Info</h4>
              <p onClick={() => handleRouteChange("/about-us")}>About Us</p>
              <p onClick={handleServicesClick}>Services</p>
              <p onClick={() => handleRouteChange("/contact-us")}>Contact Us</p>
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
                <a
                  href="https://www.instagram.com/unlimitedbeautyempire?igsh=MW1mbWY4d3ljNHJ1eQ=="
                  target="_blank"
                >
                  <img src={Instagram} alt="" />
                </a>
                <a
                  href="https://www.tiktok.com/@unlimitedbeautyempire"
                  target="_blank"
                >
                  <img src={Tiktok} alt="" />
                </a>
                <a
                  href="https://www.snapchat.com/add/unlimitedsalon?share_id=anB8-yOcMlI&locale=en-US"
                  target="_blank"
                >
                  <img src={Snapchat} alt="" />
                </a>
                <a href="mailto:Unlimitedbeautyempire@gmail.com">
                  <img src={Gmail} alt="" />
                </a>
              </div>
            </div>
          </Grid>
          <Grid item lg={3} md={4} sm={4} xs={6}>
            <div className={styles.footerinfo}>
              <div className={styles.unveilbtn}>
                <Button
                  onClick={handleSchduleModal}
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
    </div>
  );
};

Footer.propTypes = {
  servicesRef: PropTypes.shape({ current: PropTypes.instanceOf(Element) })
    .isRequired,
};

export default Footer;
