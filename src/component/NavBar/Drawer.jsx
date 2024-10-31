import { useState } from "react";
import {
  Drawer,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import styles from "./Navbar.module.css";
import Button from "../Button/Button";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";

const pages = ["Home", "Services", "Contact"];

const DrawerComp = ({ handleServicesClick }) => {
  const [openDrawer, setOpenDrawer] = useState(false);
  const navigate = useNavigate();

  // Define the navigation paths corresponding to each page
  const handleNavigation = (page) => {
    if (page === "Home") navigate("/");
    if (page === "Services") handleServicesClick();
    if (page === "Contact") navigate("/contact-us");
  };

  return (
    <>
      <Drawer
        anchor="left"
        open={openDrawer}
        onClose={() => setOpenDrawer(false)}
        sx={{
          width: "50%",
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
          <Button onClick={() => navigate("/get-started")} title="BOOK YOUR VISIT"/>
        </div>
      </Drawer>
      <div className={styles.navbtn} onClick={() => setOpenDrawer(!openDrawer)}>
        <MenuIcon className={`${styles.menuicon}`} sx={{ color: "white" }} />
      </div>
    </>
  );
};

DrawerComp.propTypes = {
  handleServicesClick: PropTypes.func.isRequired,
};

export default DrawerComp;
