import { useEffect, useState } from "react";
import styles from "./Pageloader.module.css";
import PropTypes from "prop-types";
import LoadingImage from "../../assets/loader.svg";

const PageLoader = ({ children }) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulating loading for 3 seconds
    const timer = setTimeout(() => {
      setLoading(false);
    }, 13000); // Adjust time as needed

    // Cleanup timer on component unmount
    return () => clearTimeout(timer);
  }, []);

//   useEffect(() => {
//     // Simulating loading for 3 seconds
//     const timer = setTimeout(() => {
//       setLoading(false);
//     }, 300000); // Adjust time as needed

//     return () => clearTimeout(timer);
//   }, []);

  return (
    <div className={styles.pagecontainer}>
      {loading ? (
        <div className={styles.overlay}>
          <img
            src={LoadingImage}
            alt="Loading"
            className={styles.loadingimage}
          />
        </div>
      ) : (
        <div className={styles.content}>{children}</div>
      )}
    </div>
  );
};

PageLoader.propTypes = {
  children: PropTypes.node.isRequired,
};

export default PageLoader;
