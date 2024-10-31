import MainLogo from "../../assets/logo.svg";
import { Toolbar, useMediaQuery, useTheme } from "@mui/material";
import { Link } from "react-router-dom";
import Button from "../Button/Button";
import styles from "./Navbar.module.css";
import DrawerComp from "./Drawer";
import PropTypes from "prop-types";
import { useNavigate, useLocation } from "react-router-dom";

const Navbar = ({ servicesRef }) => {
  const theme = useTheme();
  const navigate = useNavigate();
  const location = useLocation();
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
            <DrawerComp handleServicesClick={handleServicesClick} />
          </>
        ) : (
          <>
            <div className={styles.navbar}>
              <p>Home</p>
              <p onClick={handleServicesClick}>Services</p>
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

Navbar.propTypes = {
  servicesRef: PropTypes.shape({ current: PropTypes.instanceOf(Element) }).isRequired,
};

export default Navbar;
