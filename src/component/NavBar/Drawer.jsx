import { useState } from "react";
import {
  Drawer,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Box
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import styles from "./Navbar.module.css";
import Button from "../Button/Button";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import Modal from "../Modal";
import { Icon } from "@iconify-icon/react";

const pages = ["Home", "About us", "Services", "Contact"];

const DrawerComp = ({ handleServicesClick }) => {
  const [openDrawer, setOpenDrawer] = useState(false);
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [scheduleModal, setScheduleModal] = useState(false);

  // Define the navigation paths corresponding to each page
  const handleNavigation = (page) => {
    if (page === "Home") navigate("/");
    if (page === "Services") handleServicesClick();
    if (page === "About us") navigate("/about-us");
    if (page === "Contact") navigate("/contact-us");
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
    <>
      <Drawer
        anchor="left"
        open={openDrawer}
        onClose={() => setOpenDrawer(false)}
        sx={{
          width: "60%",
          "& .MuiDrawer-paper": {
            width: "50%",
            backgroundColor: "transparent",
            paddingTop: "100px"
          },
        }}
      >
        <List>
          {pages.map((page, index) => (
            <ListItemButton key={index} onClick={() => handleNavigation(page)}>
              <ListItemIcon>
                <ListItemText sx={{ color: "white" }}>{page}</ListItemText>
              </ListItemIcon>
            </ListItemButton>
          ))}
        </List>
        <div className={styles.navnewbtn}>
          <Button onClick={handleSchduleModal} title="BOOK YOUR VISIT"/>
        </div>
      </Drawer>
      <div className={styles.navbtn} onClick={() => setOpenDrawer(!openDrawer)}>
        <MenuIcon className={`${styles.menuicon}`} sx={{ color: "white" }} />
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
    </>
  );
};

DrawerComp.propTypes = {
  handleServicesClick: PropTypes.func.isRequired,
};

export default DrawerComp;
