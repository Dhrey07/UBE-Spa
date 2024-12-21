import MainLogo from "../../assets/logo.svg";
import { Toolbar, useMediaQuery, Box, useTheme } from "@mui/material";
import { Link } from "react-router-dom";
import Button from "../Button/Button";
import styles from "./Navbar.module.css";
import DrawerComp from "./Drawer";
import { useState, startTransition } from "react";
import PropTypes from "prop-types";
import { Icon } from "@iconify-icon/react";
import { useNavigate, useLocation } from "react-router-dom";
import Modal from "../Modal";

const Navbar = ({ servicesRef }) => {
  const theme = useTheme();
  const navigate = useNavigate();
  const location = useLocation();
  const [loading, setLoading] = useState(true);
  const [scheduleModal, setScheduleModal] = useState(false);
  const isMatch = useMediaQuery(theme.breakpoints.down("md"));
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

  const handleRouteChange = (path) => {
    startTransition(() => {
      navigate(path);
    });
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

  return (
    <div>
      <Toolbar
        sx={{
          bgcolor: "transparent",
          paddingTop: "48px",
          justifyContent: "space-between",
          "@media (max-width: 500px)": {
            paddingTop: "20px",
          },
        }}
      >
        <Link to="/">
          <img src={MainLogo} className={`${styles.logo}`} alt="" />
        </Link>
        {isMatch ? (
          <>
            <DrawerComp handleServicesClick={handleServicesClick} />
          </>
        ) : (
          <>
            <div className={styles.navbar}>
              <p onClick={() => handleRouteChange("/")}>HOME</p>
              <p onClick={() => handleRouteChange("/about-us")}>ABOUT US</p>
              <p onClick={handleServicesClick}>OUR SERVICES</p>
              <p onClick={() => handleRouteChange("/contact-us")}>CONTACT</p>
            </div>
            <div className={styles.btnstyle}>
              <Button onClick={handleSchduleModal} title="BOOK YOUR VISIT" />
            </div>
          </>
        )}
      </Toolbar>
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

Navbar.propTypes = {
  servicesRef: PropTypes.shape({ current: PropTypes.instanceOf(Element) })
    .isRequired,
};

export default Navbar;
