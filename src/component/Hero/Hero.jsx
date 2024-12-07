import styles from "./Hero.module.css";
// import Grid2 from "@mui/material/Grid";
import Navbar from "../NavBar/Navbar";
import Button from "../Button/Button";
import PropTypes from "prop-types";
import { Box } from "@mui/material";
import { useState } from "react";
import { Icon } from "@iconify-icon/react";
import Modal from "../Modal";

const Hero = ({ servicesRef }) => {
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
    <div className={styles.herocont}>
      <Navbar servicesRef={servicesRef} />
      <div className={styles.herotextcont}>
        <div className={styles.herotext}>
          <p>Welcome to Unlimited Beauty Empire</p>
          <h1>Elegance and Wellness in Perfect Harmony</h1>
          <div className={styles.btnstyle}>
              <Button onClick={handleSchduleModal} title="BOOK YOUR VISIT" />
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
    </div>
  );
};

Hero.propTypes = {
  servicesRef: PropTypes.shape({ current: PropTypes.instanceOf(Element) }).isRequired,
};

export default Hero;
