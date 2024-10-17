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

const pages = ["Home", "Services", "Contact"];

const DrawerComp = () => {
  const [openDrawer, setOpenDrawer] = useState(false);

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
            <ListItemButton key={index}>
              <ListItemIcon>
                <ListItemText sx={{ color: "white" }}>{page}</ListItemText>
              </ListItemIcon>
            </ListItemButton>
          ))}
        </List>
      </Drawer>
      <div className={styles.navbtn} onClick={() => setOpenDrawer(!openDrawer)}>
        <MenuIcon className={`${styles.menuicon}`} sx={{ color: "white" }} />
      </div>
    </>
  );
};

export default DrawerComp;
