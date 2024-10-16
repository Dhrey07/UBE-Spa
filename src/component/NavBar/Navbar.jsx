import MainLogo from "../../assets/logo.svg";
import { Toolbar, useMediaQuery, useTheme } from "@mui/material";
import { Link } from "react-router-dom";
import Button from "../Button/Button";
import styles from "./Navbar.module.css";
import DrawerComp from "./Drawer";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const theme = useTheme();
  const navigate = useNavigate();
  const isMatch = useMediaQuery(theme.breakpoints.down("md"));
  return (
    <div>
      <Toolbar
        sx={{
          bgcolor: "transparent",
          paddingTop: "48px",
          justifyContent: "space-between",
          "@media (max-width: 500px)": {
            paddingTop: "20px"
          }
        }}
      >
        <Link to="/">
          <img src={MainLogo} className={`${styles.logo}`} alt="" />
        </Link>
        {isMatch ? (
          <>
            <DrawerComp />
          </>
        ) : (
          <>
            <div className={styles.navbar}>
              <p>Home</p>
              <p>Services</p>
              <p onClick={() => navigate("/contact-us")}>Contact</p>
            </div>
            <div className={styles.btnstyle}>
              <Button onClick={() => navigate("/get-started")} title="BOOK YOUR VISIT" />
            </div>
          </>
        )}
      </Toolbar>
    </div>
  );
};

export default Navbar;
